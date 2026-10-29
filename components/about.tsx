"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { EventVideo } from "@/components/event-video"

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-8 block">
              Despre noi
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-[1.15]">
              Mai mult decât pizza. <br />
              <span className="italic text-muted-foreground">O experiență completă.</span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-muted-foreground text-base leading-relaxed">
                Am transformat un horsebox într-un pizza truck echipat cu cuptor 
                cu flacără lungă, care coace 4 pizze simultan. Aluat dospit lent, 
                ingrediente alese cu grijă, foc real.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Venim la eveniment cu rulota sau cu un setup mobil, în funcție de
                spațiu și de formatul ales. Setup-ul mobil aduce prepararea mai
                aproape de invitați și face experiența de live cooking și mai captivantă.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Invitații tăi văd cum se pregătește pizza chiar în fața lor — 
                de la aluatul întins cu mâna până la coacerea în cuptor. 
                Nu e doar mâncare, e parte din eveniment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-border">
              <div>
                <span className="font-serif text-xl text-foreground">
                  O grămadă de
                </span>
                <p className="text-muted-foreground text-sm mt-1">clienți mulțumiți</p>
              </div>
              <div>
                <span className="font-serif text-xl text-foreground">
                  Feedback
                </span>
                <p className="text-muted-foreground text-sm mt-1">doar pozitiv</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: imageY }}
            className="lg:col-span-7 relative min-w-0"
          >
            <EventVideo
              src="/images/WhatsApp Video 2026-10-29 at 14.32.38 (1).mp4"
              poster="/images/WhatsApp Image 2026-10-29 at 14.32.35.jpeg"
              label="Experiența ARTIGIANALE de live cooking"
              className="mx-auto aspect-[9/16] w-full max-w-[360px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
