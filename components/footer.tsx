"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { CuboidIcon as Cube, Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "API", href: "/api" },
    { name: "Documentation", href: "/docs" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  resources: [
    { name: "Community", href: "/community" },
    { name: "Help Center", href: "/help" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "mailto:hello@ai3dstudio.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <div className="relative">
                    <Cube className="h-8 w-8 text-purple-400" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <Sparkles className="h-3 w-3 text-cyan-400 absolute -top-1 -right-1" />
                    </motion.div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    AI3D Studio
                  </span>
                </Link>

                <p className="text-slate-400 mb-6 max-w-sm">
                  Empowering creators worldwide with AI-powered 3D model generation. Transform your ideas into stunning
                  3D content in seconds.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4">Product</h3>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-white font-semibold mb-4">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm mb-4 md:mb-0"
            >
              © 2024 AI3D Studio. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <span className="text-slate-400 text-sm">Made with ❤️ for creators</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-400 text-sm">All systems operational</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
