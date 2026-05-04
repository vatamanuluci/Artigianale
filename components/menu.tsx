"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const categories = [
  {
    id: "classics",
    title: "Classics",
    description: "Rețete tradiționale, perfecționate",
    items: [
      { name: "Margherita", desc: "Blat napoletan, sos de roșii, mozzarella, busuioc, parmezan, ulei de măsline" },
      { name: "Marinara", desc: "Blat napoletan, sos de roșii, oregano, usturoi, ulei de măsline infuzat" },
    ],
  },
  {
    id: "regular",
    title: "Regular",
    description: "Combinații clasice, mereu pe plac",
    items: [
      { name: "Salami", desc: "Blat napoletan, sos de roșii, mozzarella, salami" },
      { name: "Diavola", desc: "Blat napoletan, sos de roșii, mozzarella, salami picant, miere picantă opțional" },
      { name: "Capriciosa", desc: "Blat napoletan, sos de roșii, mozzarella, prosciutto cotto, ciuperci, măsline, anghinare" },
      { name: "Cotto & Funghi", desc: "Blat napoletan, sos de roșii, mozzarella, prosciutto cotto, ciuperci" },
      { name: "Peddler", desc: "Blat napoletan, sos de roșii, mozzarella, salami, ardei, nduja, miere picantă opțional" },
      { name: "Carnivora", desc: "Blat napoletan, sos de roșii, mozzarella, prosciutto cotto, salsiccia, bacon, gorgonzola" },
      { name: "Salsiccia", desc: "Blat napoletan, sos de roșii, mozzarella, salsiccia, nduja" },
    ],
  },
  {
    id: "special",
    title: "Special",
    description: "Disponibile în pachetul Premium",
    items: [
      { name: "Crudo & Parmezan", desc: "Blat napoletan, sos de roșii, mozzarella, prosciutto crudo, parmezan" },
      { name: "Quattro Formaggi", desc: "Blat napoletan, mozzarella, parmezan, gouda, gorgonzola" },
      { name: "Calabrese", desc: "Blat napoletan, sos de roșii, mozzarella, pancetta, nduja, capere, parmezan" },
      { name: "Chorizo & Gorgonzola", desc: "Blat napoletan, sos de roșii, mozzarella, chorizo, gorgonzola" },
      { name: "Mortadella", desc: "Blat napoletan, sos alb, mozzarella, gouda, parmezan, mortadella cu fistic" },
      { name: "Pesto", desc: "Blat napoletan, sos de pesto, mozzarella, bacon" },
      { name: "Truffle", desc: "Blat napoletan, bază de salsa de trufe, mozzarella, bacon, ciuperci" },
      { name: "Week's Special", desc: "În fiecare săptămână va fi un sortiment diferit - surpriză pentru fiecare eveniment" },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    description: "Ceva dulce la final",
    items: [
      { name: "Nutella și Vișine", desc: "Blat dulce, Nutella, vișine proaspete" },
      { name: "Pere și Ghimbir", desc: "Blat dulce, pere caramelizate, ghimbir" },
    ],
  },
  {
    id: "extra",
    title: "Extra",
    description: "Suplimentar, la cerere",
    items: [
      { name: "Blat Gluten Free", desc: "Disponibil pentru orice pizza din meniu" },
      { name: "Miere Picantă 400gr", desc: "Miere infuzată cu ardei iute, 400g" },
    ],
  },
]

const tabs = [
  { id: "all", label: "Toate" },
  ...categories.map((c) => ({ id: c.id, label: c.title })),
]

export function Menu() {
  const [activeTab, setActiveTab] = useState("all")

  const visibleCategories = activeTab === "all"
    ? categories
    : categories.filter((c) => c.id === activeTab)

  return (
    <section id="menu" className="py-32 lg:py-44 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-6 block">
            Meniu
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ce servim
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Aluat dospit lent, sos de roșii San Marzano, mozzarella fior di latte. 
            Toate pizzele sunt coapte în cuptor cu flacără lungă, în sub 90 de secunde.
          </p>
        </motion.div>

        {/* Tab filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="menu-tab-indicator"
                  className="absolute inset-0 border border-foreground/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Menu content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "all" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                {/* Left column: Classics + Regular */}
                <div className="space-y-16">
                  {categories.slice(0, 2).map((category) => (
                    <CategoryBlock key={category.id} category={category} />
                  ))}
                </div>
                {/* Right column: Special + Dessert + Extra */}
                <div className="space-y-16">
                  {categories.slice(2).map((category) => (
                    <CategoryBlock key={category.id} category={category} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                {visibleCategories.map((category) => (
                  <CategoryBlock key={category.id} category={category} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://instagram.com/vatamanuluci" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>@vatamanuluci & @artigianale.events</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function CategoryBlock({ category }: { category: typeof categories[0] }) {
  return (
    <div>
      {/* Category header */}
      <div className="mb-8">
        <h3 className="font-serif text-2xl text-foreground">
          {category.title}
        </h3>
        <p className="text-muted-foreground text-sm italic mt-1">
          {category.description}
        </p>
        <div className="w-10 h-px bg-accent/50 mt-4" />
      </div>

      {/* Items */}
      <div className="space-y-5">
        {category.items.map((item) => (
          <div key={item.name} className="group">
            <h4 className="font-serif text-lg text-foreground">
              {item.name}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
