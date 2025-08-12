import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Server, Database, Network, Shield, Globe, Code } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">fgross.cloud</div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:contact@fgross.cloud"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/fbigrs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/fbigrs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative px-6 py-20 md:py-32 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hello, I'm Fabian Gross
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-semibold mb-4 opacity-0 animate-fade-in-up animate-delay-200">
              System Administrator | Integration Specialist
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up animate-delay-400">
              Expert in seamless system integrations and administration, committed to optimizing performance and
              reliability across complex infrastructures.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-fade-in-up animate-delay-600">
              <Badge
                variant="secondary"
                className="bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Server className="w-4 h-4 mr-2" />
                System Administration
              </Badge>
              <Badge
                variant="secondary"
                className="bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Network className="w-4 h-4 mr-2" />
                System Integration
              </Badge>
              <Badge
                variant="secondary"
                className="bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Database className="w-4 h-4 mr-2" />
                Infrastructure
              </Badge>
              <Badge
                variant="secondary"
                className="bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Shield className="w-4 h-4 mr-2" />
                Security
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">About Me</h2>
          <Card className="bg-gray-900 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a System Integration Specialist and System Administrator who designs, automates, and operates
                reliable infrastructure across cloud and on‑prem environments. I host game servers and web services
                with a strong focus on uptime, performance, and security.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I also create Discord bot applications that streamline workflows and enhance community experiences.
                As a gamer at heart, I bring a player's perspective to latency, stability, and user experience in
                everything I build.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Server className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">System Administration</h3>
                <p className="text-gray-400">
                  Comprehensive server management, monitoring, and maintenance across Linux and Windows environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Network className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">System Integration</h3>
                <p className="text-gray-400">
                  Seamless integration of disparate systems, APIs, and platforms to create unified workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Database className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Infrastructure Design</h3>
                <p className="text-gray-400">
                  Scalable infrastructure architecture and cloud solutions tailored to business requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Current Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Globe className="w-8 h-8 text-gray-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-white">mvpclan.gg</h4>
                      <p className="text-gray-400 text-sm">MTA:SA Race Clan Dashboard</p>
                    </div>
                  </div>
                  <a href="https://mvpclan.gg" target="_blank" rel="noopener noreferrer" aria-label="Open mvpclan.gg">
                    <ExternalLink className="w-5 h-5 text-gray-500 hover:text-gray-300" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  A race clan website and dashboard for MTA:SA with live server insights, records and stats, and
                  community features.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">Web</Badge>
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">Dashboard</Badge>
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">MTA:SA</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Code className="w-8 h-8 text-gray-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-white">MTA:SA Discord Player List Bot</h4>
                      <p className="text-gray-400 text-sm">Open Source</p>
                    </div>
                  </div>
                  <a
                    href="https://github.com/fbigrs/mtasa-server-discord-playerlist"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open GitHub repository for MTA:SA Discord Player List Bot"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-500 hover:text-gray-300" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  A Python Discord bot that periodically posts the player list and server status of an MTA:SA server,
                  updating a single embed every 60 seconds with a quick-connect link.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">Python</Badge>
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">discord.py</Badge>
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">MTA:SA</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Code className="w-8 h-8 text-gray-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-white">Tagesschau Eilmeldungs-Bot</h4>
                      <p className="text-gray-400 text-sm">Discord Automation</p>
                    </div>
                  </div>
                  <a
                    href="https://github.com/fbigrs/tagesschau-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open GitHub repository for Tagesschau Bot"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-500 hover:text-gray-300" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  A Discord bot that fetches Tagesschau breaking news and posts them as rich embeds, with
                  deduplication and optional role mentions.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">Python</Badge>
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">discord.py</Badge>
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">Tagesschau API</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Connect with Me</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Ready to discuss your next project or have questions about system integration? Let's connect and explore how
            we can work together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
              asChild
            >
              <a href="mailto:contact@fgross.cloud" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
              asChild
            >
              <a
                href="https://linkedin.com/in/fbigrs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/fbigrs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="text-gray-500">
            <p className="mb-2">
              <ExternalLink className="w-4 h-4 inline mr-2" />
              <span className="text-gray-400 font-mono">fgross.cloud</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3 text-gray-500">
          <p className="text-center">&copy; 2025 Fabian Gross. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="/legal-notice" className="hover:text-gray-300 underline decoration-gray-700 hover:decoration-gray-400">
              Legal Notice
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
