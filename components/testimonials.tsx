"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Cea mai bună pizza pe care am mâncat-o vreodată. Blatul subțire, crocant, cu acel gust autentic de cuptor cu lemne. Pur și simplu perfectă.",
    author: "Andreea M.",
    event: "Suceava",
    rating: 5,
  },
  {
    quote: "Aluatul dospit lent face toată diferența. Se simte calitatea ingredientelor din prima mușcătură. Mozzarella proaspătă, sosul de roșii intens — altă ligă.",
    author: "Bogdan T.",
    event: "Suceava",
    rating: 5,
  },
  {
    quote: "Am încercat Diavola și Quattro Formaggi — ambele spectaculoase. Pizza coaptă în 90 de secunde, direct în fața ta. Nu se compară cu nimic.",
    author: "Elena & Radu",
    event: "Suceava",
    rating: 5,
  },
  {
    quote: "Pizza Margherita simplă dar extraordinară. Blatul ușor carbonizat, mozzarella care se întinde perfect, busuioc proaspăt. Exact ca în Napoli.",
    author: "Cristina D.",
    event: "Suceava",
    rating: 5,
  },
  {
    quote: "Copiii mei au mâncat 3 felii fiecare și au cerut mai mult. Pizza cu Nutella la desert a fost cireașa de pe tort. Calitate de top!",
    author: "Mihai P.",
    event: "Suceava",
    rating: 5,
  },
  {
    quote: "Am gustat pizza Crudo & Parmezan și pot spune sincer că e cea mai bună pizza din Suceava. Ingrediente fresh, blat perfect, gust autentic.",
    author: "Laura S.",
    event: "Suceava",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 lg:py-44 bg-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />
      
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-6 block">
            Testimoniale
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ce spun clienții noștri
          </h2>
          <div className="flex items-center justify-center gap-2 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9 din 5</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              className="relative bg-background p-8 lg:p-10 group hover:shadow-lg transition-shadow duration-500"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-accent" stroke="none" />
                ))}
              </div>
              
              {/* Quote mark */}
              <span className="absolute top-6 right-6 font-serif text-5xl text-border/50 leading-none">
                &rdquo;
              </span>
              
              <blockquote className="text-foreground text-base leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </blockquote>
              
              <div className="pt-6 border-t border-border">
                <p className="font-serif text-foreground mb-1">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.event}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-transparent group-hover:border-accent/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          {/* Google rating badge */}
          <div className="flex items-center gap-3 px-6 py-3 border border-border bg-background">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-lg text-foreground">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" className="text-accent" stroke="none" />
                  ))}
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground tracking-wide">Google Reviews</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-border" />

          <p className="text-muted-foreground text-sm">
            Disponibili în toată țara — <span className="text-foreground font-serif">100+</span> evenimente livrate
          </p>
        </motion.div>
      </div>
    </section>
  )
}
