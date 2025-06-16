"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, X, Sparkles, Zap, Crown, Building } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Free",
    icon: Sparkles,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for getting started with AI 3D creation",
    features: [
      { name: "5 models per month", included: true },
      { name: "Basic styles (Realistic, Cartoon)", included: true },
      { name: "Standard resolution (1024px)", included: true },
      { name: "GLB export format", included: true },
      { name: "Community support", included: true },
      { name: "Watermarked downloads", included: true },
      { name: "Advanced styles", included: false },
      { name: "4K resolution", included: false },
      { name: "Priority processing", included: false },
      { name: "Commercial license", included: false },
    ],
    cta: "Get Started Free",
    popular: false,
    color: "from-slate-600 to-slate-700",
  },
  {
    name: "Pro",
    icon: Zap,
    monthlyPrice: 19,
    yearlyPrice: 190,
    description: "For serious creators and professionals",
    features: [
      { name: "Unlimited models", included: true },
      { name: "All styles & features", included: true },
      { name: "4K resolution", included: true },
      { name: "All export formats", included: true },
      { name: "Priority processing", included: true },
      { name: "No watermarks", included: true },
      { name: "Advanced customization", included: true },
      { name: "Email support", included: true },
      { name: "Commercial license", included: true },
      { name: "API access", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "from-purple-600 to-purple-700",
  },
  {
    name: "Enterprise",
    icon: Building,
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "For teams and organizations",
    features: [
      { name: "Everything in Pro", included: true },
      { name: "Team collaboration", included: true },
      { name: "API access", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated support", included: true },
      { name: "SLA guarantee", included: true },
      { name: "Custom training", included: true },
      { name: "White-label options", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Custom deployment", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
    color: "from-cyan-600 to-cyan-700",
  },
]

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
  },
  {
    question: "What happens to my models if I downgrade?",
    answer:
      "All your existing models remain accessible. However, you'll be limited by your new plan's monthly generation limits for new models.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact us for a full refund.",
  },
  {
    question: "Is there a free trial for Pro plans?",
    answer: "Yes! We offer a 14-day free trial for Pro plans. No credit card required to start your trial.",
  },
  {
    question: "What's included in the commercial license?",
    answer:
      "The commercial license allows you to use generated models for commercial purposes, including selling, licensing, and incorporating into commercial products.",
  },
  {
    question: "How does team collaboration work?",
    answer:
      "Enterprise plans include shared workspaces, team member management, collaborative editing, and centralized billing for your organization.",
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
              <Crown className="w-4 h-4 mr-2" />
              Pricing Plans
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Choose the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>{" "}
              for You
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl mb-8">
              Start free and scale as you grow. All plans include our core AI generation features with different limits
              and capabilities.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isYearly ? "text-white" : "text-slate-400"}`}>Monthly</span>
              <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-purple-600" />
              <span className={`text-sm ${isYearly ? "text-white" : "text-slate-400"}`}>
                Yearly
                <Badge className="ml-2 bg-green-600 text-white">Save 20%</Badge>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full bg-slate-900/50 border-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 ${
                    plan.popular ? "border-purple-500 ring-2 ring-purple-500/20 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-400 text-white">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        {plan.monthlyPrice > 0 && (
                          <span className="text-slate-400 ml-2">/{isYearly ? "year" : "month"}</span>
                        )}
                      </div>
                      {isYearly && plan.monthlyPrice > 0 && (
                        <p className="text-sm text-green-400">
                          Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-slate-500 mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-slate-300" : "text-slate-500"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                          : plan.name === "Enterprise"
                            ? "bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white border-0"
                            : "border-slate-600 text-slate-300 hover:bg-slate-800"
                      }`}
                      variant={plan.popular || plan.name === "Enterprise" ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Compare All Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See exactly what's included in each plan to make the best choice for your needs.
            </p>
          </motion.div>

          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Free</th>
                    <th className="text-center p-6 text-white font-semibold">Pro</th>
                    <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Monthly model generations", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
                    { feature: "Available styles", free: "2", pro: "All", enterprise: "All + Custom" },
                    { feature: "Max resolution", free: "1024px", pro: "4K", enterprise: "8K" },
                    { feature: "Export formats", free: "GLB", pro: "All", enterprise: "All + Custom" },
                    { feature: "Processing priority", free: "Standard", pro: "High", enterprise: "Highest" },
                    { feature: "Watermarks", free: "Yes", pro: "No", enterprise: "No" },
                    { feature: "Commercial license", free: "No", pro: "Yes", enterprise: "Yes" },
                    { feature: "API access", free: "No", pro: "No", enterprise: "Yes" },
                    { feature: "Team collaboration", free: "No", pro: "No", enterprise: "Yes" },
                    { feature: "Support level", free: "Community", pro: "Email", enterprise: "Dedicated" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-slate-800">
                      <td className="p-6 text-slate-300 font-medium">{row.feature}</td>
                      <td className="p-6 text-center text-slate-400">{row.free}</td>
                      <td className="p-6 text-center text-slate-300">{row.pro}</td>
                      <td className="p-6 text-center text-slate-300">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">
              Got questions? We've got answers. If you can't find what you're looking for, contact our support team.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                    <p className="text-slate-400">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
