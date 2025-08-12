import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Server, Database, Network, Shield } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hello, I'm Fabian Gross
            </h1>
            <p className="text-xl md:text-2xl text-sky-400 font-semibold mb-4 opacity-0 animate-fade-in-up animate-delay-200">
              System Administrator | Integration Specialist
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up animate-delay-400">
              Expert in seamless system integrations and administration, committed to optimizing performance and
              reliability across complex infrastructures.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-fade-in-up animate-delay-600">
              <Badge
                variant="secondary"
                className="bg-gray-800 text-amber-400 border-amber-400/20 hover:bg-amber-400/10 transition-colors"
              >
                <Server className="w-4 h-4 mr-2" />
                System Administration
              </Badge>
              <Badge
                variant="secondary"
                className="bg-gray-800 text-sky-400 border-sky-400/20 hover:bg-sky-400/10 transition-colors"
              >
                <Network className="w-4 h-4 mr-2" />
                System Integration
              </Badge>
              <Badge
                variant="secondary"
                className="bg-gray-800 text-green-400 border-green-400/20 hover:bg-green-400/10 transition-colors"
              >
                <Database className="w-4 h-4 mr-2" />
                Infrastructure
              </Badge>
              <Badge
                variant="secondary"
                className="bg-gray-800 text-purple-400 border-purple-400/20 hover:bg-purple-400/10 transition-colors"
              >
                <Shield className="w-4 h-4 mr-2" />
                Security
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With extensive experience in system administration and integration, I specialize in creating robust,
                scalable solutions that bridge complex technical environments. My expertise spans across cloud
                infrastructure, automation, and enterprise system integrations.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm passionate about optimizing system performance, implementing security best practices, and ensuring
                seamless operations across diverse technology stacks. My approach combines technical precision with
                strategic thinking to deliver solutions that drive business success.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800/80 border-gray-700 hover:border-sky-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Server className="w-12 h-12 text-sky-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">System Administration</h3>
                <p className="text-gray-300">
                  Comprehensive server management, monitoring, and maintenance across Linux and Windows environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Network className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">System Integration</h3>
                <p className="text-gray-300">
                  Seamless integration of disparate systems, APIs, and platforms to create unified workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Database className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Infrastructure Design</h3>
                <p className="text-gray-300">
                  Scalable infrastructure architecture and cloud solutions tailored to business requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="px-6 py-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">References</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/80 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-gray-400 text-sm">CTO, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Fabian's expertise in system integration transformed our infrastructure. His attention to detail and
                  proactive approach ensured zero downtime during our migration."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    SM
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Miller</h4>
                    <p className="text-gray-400 text-sm">IT Director, GlobalSys</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Working with Fabian was exceptional. His deep understanding of complex systems and ability to
                  simplify integration challenges made our project a success."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Connect with Me</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Ready to discuss your next project or have questions about system integration? Let's connect and explore how
            we can work together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-gray-900 transition-all duration-300"
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
              className="bg-transparent border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-gray-900 transition-all duration-300"
              asChild
            >
              <a
                href="https://linkedin.com/in/fabiangross"
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
              className="bg-transparent border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-gray-900 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/fabiangross"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="text-gray-400">
            <p className="mb-2">
              <ExternalLink className="w-4 h-4 inline mr-2" />
              <span className="text-sky-400 font-mono">fgross.cloud</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Fabian Gross. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
