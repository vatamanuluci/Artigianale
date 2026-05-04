"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Contactează-ne",
    description: "Spune-ne data, locul și numărul de invitați",
  },
  {
    number: "02",
    title: "Planificăm împreună",
    description: "Alegem sortimentele și stabilim logistica",
  },
  {
    number: "03",
    title: "Pregătim totul",
    description: "Venim cu cuptorul, ingredientele și echipa completă",
  },
  {
    number: "04",
    title: "Servire live",
    description: "Pregătim și servim pizza proaspătă pe tot parcursul evenimentului",
  },
]

export function Process() {
  return (
    <section id="process" className="py-32 lg:py-44 bg-card relative overflow-hidden">

      <div className="mx-auto max-w-6xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-6 block">
            Cum funcționează
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Cum funcționează <span className="italic">concret</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            De la primul mesaj până la ultima felie — ne ocupăm de tot.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-10 left-8 right-8 h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Number circle */}
                <div className="relative z-10 w-16 h-16 bg-background border border-border flex items-center justify-center mb-8 group-hover:border-foreground/40 group-hover:shadow-md transition-all duration-500">
                  <span className="font-serif text-xl text-foreground group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-border">
                      <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-foreground text-sm tracking-wide hover:text-muted-foreground transition-colors group"
          >
            <span>Cere o ofertă</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
