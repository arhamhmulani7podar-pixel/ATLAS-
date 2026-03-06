'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ValidationResult } from '@/lib/aiEngine';

export default function Validator() {
  const [idea, setIdea] = useState('');
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    if (idea.trim().length < 20) {
      setError('Please describe your idea in at least 20 characters.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to validate');
      }

      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ATLAS</h1>
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">Validate Your Startup Idea</h1>
        <p className="text-xl text-gray-400 mb-12">
          Get AI-powered analysis in seconds.
        </p>

        <form onSubmit={handleSubmit} className="mb-12">
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your startup idea in detail..."
            className="w-full h-48 bg-gray-900 border border-gray-800 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Analyzing...' : 'Analyze Idea'}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-red-900/20 border border-red-900 rounded-lg mb-8">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Viability Score</h3>
              <p className="text-5xl font-bold text-blue-400">{result.score}/100</p>
              <p className="mt-4 text-gray-400">{result.summary}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-2">Market Demand</h4>
                <p className="text-gray-400">{result.market_demand}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-2">Competition</h4>
                <p className="text-gray-400">{result.competition}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-2">Monetization</h4>
                <p className="text-gray-400">{result.monetization}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-2">Execution Difficulty</h4>
                <p className="text-gray-400">{result.difficulty}</p>
              </div>
            </div>

            {result.strengths && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-4">Strengths</h4>
                <ul className="list-disc list-inside space-y-2">
                  {result.strengths.map((s: string, i: number) => (
                    <li key={i} className="text-gray-400">{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.weaknesses && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-4">Weaknesses</h4>
                <ul className="list-disc list-inside space-y-2">
                  {result.weaknesses.map((w: string, i: number) => (
                    <li key={i} className="text-gray-400">{w}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
