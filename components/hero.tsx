"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Flame, Clock, Users } from "lucide-react"

const highlights = [
  { icon: Flame, label: "Cuptor cu flacără lungă", desc: "Coace 4 pizze simultan, pe foc real" },
  { icon: Clock, label: "Aluat dospit lent", desc: "Ingrediente selecționate cu grijă" },
  { icon: Users, label: "Nenumarate evenimente", desc: "Evenimente corporate, aniversări" },
]

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Main hero — compact, not full screen */}
      <div className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — logo + tagline + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[10px] md:text-[11px] tracking-[0.5em] text-muted-foreground uppercase mb-6 block">
                Pizza Artizanală &middot; Catering Evenimente
              </span>

              <Image
                src="/images/logo_transparent.png"
                alt="ARTIGIANALE"
                width={800}
                height={300}
                className="w-full max-w-md h-auto mb-8"
                priority
              />

              <div className="w-12 h-px bg-accent/50 mb-8" />

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-sm">
                Pizza napoletană coaptă pe loc, în cuptor cu flacără lungă — <span className="text-muted-emphasis">la nunta, petrecerea sau evenimentul tău corporate.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="group relative px-10 py-4 md:py-5 bg-foreground text-background text-[10px] md:text-xs tracking-[0.25em] uppercase overflow-hidden transition-all duration-500"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">
                    Verifică disponibilitatea
                  </span>
                  <div className="absolute inset-0 bg-background transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </Link>
                <Link
                  href="#menu"
                  className="px-10 py-4 md:py-5 border border-foreground/20 text-foreground text-[10px] md:text-xs tracking-[0.25em] uppercase hover:border-foreground transition-all duration-500 text-center"
                >
                  Vezi meniul
                </Link>
              </div>

              {/* Availability indicator */}
              <div className="mt-8 flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs text-muted-foreground">
                  Locuri disponibile pentru {(() => { const now = new Date(); const m = now.getMonth(); const y = now.getFullYear(); if (m < 3) return `primăvara ${y}`; if (m < 6) return `vara ${y}`; if (m < 9) return `toamna ${y}`; return `primăvara ${y + 1}`; })()}
                </span>
              </div>
            </motion.div>

            {/* Mobile hero image — visible only on small/medium screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:hidden -mx-6 overflow-hidden"
            >
              <Image
                src="/images/food-truck-sketch.png"
                alt="ARTIGIANALE Horsebox Pizza Truck"
                width={600}
                height={400}
                className="w-full max-w-md h-auto"
                loading="eager"
              />
            </motion.div>

            {/* Right — food truck sketch (desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <Image
                src="/images/food-truck-sketch.png"
                alt="ARTIGIANALE Horsebox Pizza Truck"
                width={700}
                height={467}
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-4 shadow-lg">
                <Image
                  src="/images/pizza-pepperoni-box.jpeg"
                  alt="Pizza pepperoni în cutie"
                  width={160}
                  height={107}
                  className="w-36 h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Highlight strip — immediately visible, adds density */}
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                className="flex items-center gap-4 py-8 sm:px-8 first:sm:pl-0 last:sm:pr-0"
              >
                <item.icon size={20} strokeWidth={1.5} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
