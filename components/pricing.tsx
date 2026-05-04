"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Standard",
    features: [
      "5 sortimente pizza",
      "Din gama Classics + Regular",
      "Rulotă + cuptoare pe gaz",
      "Echipă de 3 persoane",
      "Setup complet",
      "Servire continuă 4h",
    ],
    popular: false,
  },
  {
    name: "Premium",
    features: [
      "6 sortimente pizza",
      "Din toată gama, inclusiv Special",
      "Desert pizza inclus",
      "Rulotă + cuptoare pe gaz",
      "Echipă de 3 persoane",
      "Decor tematic la rulotă",
      "Servire continuă 5h",
    ],
    popular: true,
  },
  {
    name: "Kids",
    features: [
      "Până la 50 copii",
      "Margherita + 2 sortimente",
      "Copiii își fac propria pizza",
      "Setup compact",
      "Echipă dedicată",
      "Servire 2h",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 lg:py-44 bg-foreground text-background">
      {/* Smooth transition from light section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-card to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] tracking-[0.4em] text-accent/60 uppercase mb-6 block">
            Pachete
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background mb-6">
            Pachetele noastre
          </h2>
          <p className="text-dark-muted text-base max-w-lg mx-auto">
            Prețul depinde de numărul de invitați. Alege pachetul potrivit și solicită o ofertă personalizată.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group ${
                pkg.popular
                  ? "lg:-mt-4 lg:mb-4"
                  : ""
              }`}
              whileHover={{ y: -4 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-foreground text-[10px] tracking-[0.2em] uppercase">
                  Recomandat
                </div>
              )}

              <div
                className={`h-full p-10 transition-all duration-500 ${
                  pkg.popular
                    ? "bg-background text-foreground"
                    : "border border-accent/20 hover:border-accent/40"
                }`}
              >
                <div className="mb-8">
                  <h3 className={`text-xs tracking-[0.3em] uppercase mb-4 ${
                    pkg.popular ? "text-foreground/60" : "text-accent/60"
                  }`}>
                    {pkg.name}
                  </h3>
                </div>

                <div className="space-y-4 mb-10">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        pkg.popular ? "text-foreground" : "text-accent"
                      }`} strokeWidth={1.5} />
                      <span className={`text-sm ${
                        pkg.popular ? "text-foreground/80" : "text-dark-muted"
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className={`group relative block w-full py-4 text-center text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 ${
                    pkg.popular
                      ? "bg-foreground text-background"
                      : "border border-accent/30 text-accent hover:border-accent/60"
                  }`}
                >
                  <span className={`relative z-10 transition-colors duration-500 ${
                    pkg.popular ? "group-hover:text-foreground" : "group-hover:text-background"
                  }`}>
                    Solicită ofertă
                  </span>
                  {pkg.popular && (
                    <div className="absolute inset-0 bg-background transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-dark-muted/60 text-sm mt-16"
        >
          * Transport inclus până la 50 km. Peste această distanță se adaugă un cost de deplasare.
        </motion.p>
      </div>
    </section>
  )
}
