export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl text-center p-8">
        <h1 className="text-4xl font-bold mb-4">
          ProofMate
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          AI-powered hackathon teammate matching with
          <span className="font-semibold"> on-chain proof</span> of collaboration.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/match"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Find Teammates
          </a>

          <a
            href="/proof"
            className="px-6 py-3 border border-black rounded-lg"
          >
            Verify Proof
          </a>
        </div>
      </div>
    </main>
  );
}
