"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const CONSENT_KEY = "artigianale_cookie_consent"

export function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined")
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl bg-foreground text-background p-6 sm:p-8 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <p className="text-sm leading-relaxed text-dark-muted flex-1">
              Folosim cookie-uri pentru analiză și pentru a îmbunătăți experiența pe site.
              Prin continuarea navigării, ești de acord cu{" "}
              <span className="text-background underline underline-offset-2">politica noastră de confidențialitate</span>.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase text-dark-muted hover:text-background border border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                Refuz
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase bg-background text-foreground hover:bg-accent hover:text-foreground transition-all duration-300"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
