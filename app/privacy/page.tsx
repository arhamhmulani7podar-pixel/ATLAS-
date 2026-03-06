import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - ATLAS',
  description: 'Privacy policy for ATLAS AI Startup Validator',
};

export default function PrivacyPage() {
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
        <h2 className="text-5xl font-bold mb-6">Privacy Policy</h2>
        <p className="text-gray-400 mb-6">
          ATLAS takes your privacy seriously. This policy describes how we handle
          information you provide when using our service.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Data We Collect</h3>
        <p className="text-gray-400 mb-6">
          We only process the startup idea text you submit for validation. We do
          not store your inputs or the AI-generated results on our servers.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Third-Party Services</h3>
        <p className="text-gray-400 mb-6">
          Your idea text is sent to the OpenAI API to generate analysis. Please
          review{' '}
          <a
            href="https://openai.com/privacy"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI&apos;s Privacy Policy
          </a>{' '}
          for details on how they handle data.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Contact</h3>
        <p className="text-gray-400">
          For privacy-related questions, please open an issue on our GitHub
          repository.
        </p>
      </div>
    </main>
  );
}
