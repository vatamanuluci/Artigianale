"use client"

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useEffect, useCallback } from "react"
import Image from "next/image"

function AnimatedCounter({ value, suffix = "", formatter }: { value: number; suffix?: string; formatter?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 })

  const format = useCallback(
    (n: number) => (formatter ? formatter(n) : n + suffix),
    [formatter, suffix]
  )

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(Math.round(latest))
      }
    })
    return unsubscribe
  }, [springValue, format])

  return <span ref={ref}>{format(0)}</span>
}

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
                Invitații tăi văd cum se pregătește pizza chiar în fața lor — 
                de la aluatul întins cu mâna până la coacerea în cuptor. 
                Nu e doar mâncare, e parte din eveniment.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-10 border-t border-border">
              <div>
                <span className="font-serif text-3xl text-foreground">
                  <AnimatedCounter value={10} suffix="+" />
                </span>
                <p className="text-muted-foreground text-sm mt-1">Evenimente</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-foreground">
                  <AnimatedCounter value={5000} formatter={(n) => n >= 1000 ? Math.round(n / 1000) + "k+" : n + "+"} />
                </span>
                <p className="text-muted-foreground text-sm mt-1">Clienți</p>
              </div>
              <div>
                <span className="font-serif text-3xl text-foreground">4.9</span>
                <p className="text-muted-foreground text-sm mt-1">Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: imageY }}
            className="lg:col-span-7 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main image — pizza */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/pizza-arugula.jpeg"
                  alt="Pizza artizanală cu rucola"
                  fill
                  sizes="(max-width: 1024px) 50vw, 29vw"
                  className="object-cover"
                />
              </div>
              
              {/* Food truck image — prominent */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/gozney-oven-flames.jpeg"
                  alt="Cuptor Gozney cu flacără lungă"
                  fill
                  sizes="(max-width: 1024px) 50vw, 29vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                  <span className="text-[10px] tracking-[0.3em] text-accent uppercase">Cuptor cu flacără lungă</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
