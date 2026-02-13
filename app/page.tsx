export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Michael Stauffer
          </h1>
          <p className="text-2xl text-blue-400 mb-6">
            React Native & Python Developer
          </p>
          <p className="text-xl text-slate-300 leading-relaxed">
            I build mobile apps with React Native and Python/FastAPI backends. I
            ship fast, communicate clearly, and focus on what matters.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-6 hover:border-blue-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">ParkWatt</h3>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                LIVE ON APP STORE
              </span>
            </div>
            <p className="text-slate-300 mb-4 text-lg">
              Peer-to-peer EV charging marketplace. Connect EV owners with
              homeowners who have chargers. Built with React Native and
              Python/FastAPI.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                React Native
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                Stripe
              </span>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">Outerly</h3>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                IN DEVELOPMENT
              </span>
            </div>
            <p className="text-slate-300 mb-4 text-lg">
              Adventure social platform with AI-powered matching. Connect with
              people on trails with location-based discovery and Apple HealthKit
              integration.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                React Native
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                AI/ML
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                HealthKit
              </span>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Available for Contract Work
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              20-30 hours per week | $75/hour
            </p>
            <p className="text-slate-300 mb-6">
              I move fast and ship quality code. Available to start immediately.
            </p>
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors text-lg"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
