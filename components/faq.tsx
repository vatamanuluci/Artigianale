"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Cât durează servirea la un eveniment?",
    answer: "Depinde de pachet: 4 ore pentru Standard, 5 ore pentru Premium și 2 ore pentru Kids. Putem extinde durata la cerere, contra cost.",
  },
  {
    question: "Ce se întâmplă dacă plouă?",
    answer: "Rulota noastră funcționează indiferent de vreme — cuptorul e protejat. Avem nevoie doar de un spațiu plat și accesibil. Dacă evenimentul e în aer liber, recomandăm un cort sau copertină pentru zona de servire.",
  },
  {
    question: "Câte pizze puteți pregăti pe oră?",
    answer: "Cuptorul nostru coace 4 pizze simultan, fiecare în sub 90 de secunde. Într-o oră pregătim zeci de pizze, suficient și pentru evenimente mari.",
  },
  {
    question: "Aveți opțiuni pentru alergii sau intoleranțe?",
    answer: "Da. Avem blat gluten-free disponibil pentru orice pizza din meniu. Pentru alte restricții alimentare (lactoză, vegetarian, vegan), discutăm soluții personalizate la momentul rezervării.",
  },
  {
    question: "Cât de devreme trebuie să rezerv?",
    answer: "Recomandăm minim 2–3 luni înainte, mai ales pentru sezonul de nunți (mai–octombrie). Cu cât mai devreme confirmi, cu atât mai sigur ai data dorită.",
  },
  {
    question: "Ce spațiu aveți nevoie pentru setup?",
    answer: "Rulota are nevoie de un spațiu de aproximativ 6×3 metri, pe teren plat și accesibil. Nu avem nevoie de priză — totul funcționează pe gaz. Venim cu 1–2 ore înainte de eveniment pentru montaj.",
  },
  {
    question: "Prețul include totul?",
    answer: "Da. Prețul include rulota, cuptorul, toate ingredientele, echipa de 3 persoane, montaj și demontaj, farfurii și șervețele. Transportul e inclus până la 50 km — peste se adaugă un cost de deplasare.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 lg:py-44 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-6 block">
            Întrebări frecvente
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Tot ce vrei să știi
          </h2>
        </motion.div>

        <div className="divide-y divide-border">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                id={`faq-question-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-serif text-lg text-foreground pr-8 group-hover:text-foreground/80 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <Plus size={18} strokeWidth={1.5} className="text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Nu ai găsit răspunsul?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-foreground text-sm tracking-wide hover:text-muted-foreground transition-colors group"
          >
            <span>Scrie-ne direct</span>
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
