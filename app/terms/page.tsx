import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - ATLAS',
  description: 'Terms of service for ATLAS AI Startup Validator',
};

export default function TermsPage() {
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
        <h2 className="text-5xl font-bold mb-6">Terms of Service</h2>
        <p className="text-gray-400 mb-6">
          By using ATLAS, you agree to the following terms.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Use of Service</h3>
        <p className="text-gray-400 mb-6">
          ATLAS is provided for informational purposes only. The AI-generated
          analysis is not financial or business advice. Use it as one input among
          many when evaluating your startup idea.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Acceptable Use</h3>
        <p className="text-gray-400 mb-6">
          You agree not to use ATLAS to submit harmful, illegal, or offensive
          content. We reserve the right to terminate access for violations.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Disclaimer</h3>
        <p className="text-gray-400 mb-6">
          ATLAS is provided &quot;as is&quot; without warranties of any kind. We
          are not liable for decisions made based on AI-generated output.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Changes to Terms</h3>
        <p className="text-gray-400">
          We may update these terms at any time. Continued use of the service
          constitutes acceptance of the updated terms.
        </p>
      </div>
    </main>
  );
}
