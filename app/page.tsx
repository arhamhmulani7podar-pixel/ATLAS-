import Link from 'next/link';

export const metadata = {
  title: 'ATLAS - AI Startup Validator',
  description: 'Validate your startup idea before you build it',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ATLAS</h1>
          <div className="flex gap-6">
            <Link href="/validator" className="hover:text-blue-400 transition">
              Validator
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-6xl font-bold mb-6">Validate Your Startup Idea</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Before you waste months building the wrong product, use ATLAS to validate your startup idea in seconds.
        </p>
        <Link
          href="/validator"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
        >
          Start Validating →
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Market Demand"
          description="Analyze if there's real demand for your idea using AI insights"
        />
        <FeatureCard
          title="Competition Analysis"
          description="Understand the competitive landscape and market saturation"
        />
        <FeatureCard
          title="Monetization Potential"
          description="Assess revenue models and pricing strategies"
        />
        <FeatureCard
          title="Execution Difficulty"
          description="Evaluate technical complexity and time to market"
        />
        <FeatureCard
          title="Viability Score"
          description="Get a clear 0-100 score with brutal honesty"
        />
        <FeatureCard
          title="Strategic Insights"
          description="Receive actionable recommendations for improvement"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-400">
        <p>&copy; 2026 ATLAS. Built by Arham Mulani.</p>
        <div className="mt-4 flex justify-center gap-6">
          <Link href="/privacy" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms
          </Link>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
