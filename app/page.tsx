export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-600/20 to-black">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Michael Soares
            </h1>
            <p className="text-3xl text-slate-300 mb-8">
              React Native & Python Developer
            </p>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              I build and ship mobile apps. Fast. I've launched apps to the App
              Store with React Native and Python/FastAPI backends. Available for
              contract work.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all"
              >
                Hire Me
              </a>
              <a
                href="#work"
                className="px-8 py-4 border border-slate-700 hover:border-blue-500 rounded-lg font-semibold text-lg transition-all"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-slate-400">Apps Shipped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                $75/hr
              </div>
              <div className="text-slate-400">Contract Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">20-30</div>
              <div className="text-slate-400">Hours/Week Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-16">Recent Work</h2>

        {/* ParkWatt */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-4">
                ✓ LIVE ON APP STORE
              </div>
              <h3 className="text-4xl font-bold mb-4">ParkWatt</h3>
              <p className="text-xl text-slate-400 mb-6">
                Peer-to-peer EV charging marketplace connecting homeowners with
                EV drivers. Built the entire stack from scratch and launched to
                production.
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-500 uppercase mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                    "Stripe",
                    "Railway",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• Real-time location-based search</li>
                  <li>• Stripe payment integration</li>
                  <li>• Push notifications</li>
                  <li>• User authentication & profiles</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-12 flex items-center justify-center h-96">
              <div className="text-center">
                <div className="text-8xl mb-4">📱</div>
                <div className="text-slate-400">App Store Screenshot</div>
              </div>
            </div>
          </div>
        </div>

        {/* Outerly */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl p-12 flex items-center justify-center h-96">
              <div className="text-center">
                <div className="text-8xl mb-4">🏔️</div>
                <div className="text-slate-400">In Development</div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-4">
                ⚡ IN DEVELOPMENT
              </div>
              <h3 className="text-4xl font-bold mb-4">Outerly</h3>
              <p className="text-xl text-slate-400 mb-6">
                Adventure social platform with AI-powered matching. Connect with
                outdoor enthusiasts on trails using location-based discovery and
                fitness tracking.
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-500 uppercase mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "Python",
                    "FastAPI",
                    "AI/ML",
                    "Apple HealthKit",
                    "Location Services",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2 text-slate-400">
                  <li>• AI-powered user matching</li>
                  <li>• Real-time trail check-ins</li>
                  <li>• Apple HealthKit integration</li>
                  <li>• Location-based discovery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-16">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
              <p className="text-slate-400">
                React Native apps for iOS and Android. From MVP to App Store
                launch.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Backend APIs</h3>
              <p className="text-slate-400">
                Python/FastAPI backends with PostgreSQL. Fast, scalable,
                production-ready.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4">Bug Fixes & Features</h3>
              <p className="text-slate-400">
                Jump into existing code. Debug, fix, ship. Fast turnaround.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Available 20-30 hours/week at $75/hour. Let's build something great.
          </p>
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="inline-block px-10 py-4 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-bold text-lg transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500">
          <p>Based in Bozeman, Montana • Available for remote work</p>
        </div>
      </div>
    </div>
  );
}
