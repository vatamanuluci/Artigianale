"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32 lg:py-44 bg-foreground overflow-hidden">
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
            Galerie
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background">
            Din evenimente
          </h2>
        </motion.div>

        {/* Row 1: Large + small stacked */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative aspect-[4/3] overflow-hidden group"
          >
            <Image
              src="/images/gozney-oven-flames.jpeg"
              alt="Cuptor Gozney cu flacără lungă"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] tracking-[0.3em] text-accent uppercase">Cuptorul Gozney</span>
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src="/images/pizza-making-margherita.jpeg"
                alt="Pregătirea pizzei Margherita"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] tracking-[0.3em] text-accent uppercase">Pregătire</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[16/9] overflow-hidden group"
            >
              <Image
                src="/images/trailer-interior.jpeg"
                alt="Interiorul rulotei ARTIGIANALE"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] tracking-[0.3em] text-accent uppercase">Rulota noastră</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Row 2: Three equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { src: "/images/pizza-pepperoni-box.jpeg", alt: "Pizza pepperoni în cutie", label: "Pepperoni" },
            { src: "/images/pizza-nduja.jpeg", alt: "Pizza cu nduja", label: "Nduja" },
            { src: "/images/pizza-making-calzone.jpeg", alt: "Pregătire calzone", label: "Handmade" },
          ].map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] tracking-[0.3em] text-accent uppercase">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 3: Wide trailer + two pizzas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
          <div className="md:col-span-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src="/images/pizza-making-pepperoni.jpeg"
                alt="Pregătirea pizzei Pepperoni"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] tracking-[0.3em] text-accent uppercase">La lucru</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative aspect-[16/9] overflow-hidden group"
            >
              <Image
                src="/images/pizza-oven-fire.jpeg"
                alt="Pizza în cuptor cu flacără"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] tracking-[0.3em] text-accent uppercase">În cuptor</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 relative aspect-[4/3] overflow-hidden group"
          >
            <Image
              src="/images/pizza-prep-station.jpeg"
              alt="Stația de pregătire pizza"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] tracking-[0.3em] text-accent uppercase">Stația de lucru</span>
            </div>
          </motion.div>
        </div>

        {/* Instagram link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com/vatamanuluci"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-accent/60 text-sm tracking-wide hover:text-accent transition-colors"
          >
            <span>Mai multe pe @vatamanuluci & @artigianale.events</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
