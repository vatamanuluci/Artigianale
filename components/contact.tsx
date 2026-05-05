"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Instagram, Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import { trackEvent } from "@/lib/track"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    guests: "",
    message: "",
    website: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [submitError, setSubmitError] = useState("")
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const getFieldError = (field: string): string => {
    if (!touched[field]) return ""
    const v = formData[field as keyof typeof formData]
    switch (field) {
      case "name":
        return v.trim().length < 2 ? "Numele trebuie să aibă cel puțin 2 caractere." : ""
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Adresa de email nu este validă." : ""
      case "phone":
        return !/^[0-9+\s()-]{7,}$/.test(v) ? "Numărul de telefon nu este valid." : ""
      case "eventType":
        return !v ? "Selectează tipul evenimentului." : ""
      default:
        return ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Eroare la trimitere.")
      }

      trackEvent("form_submitted", { eventType: formData.eventType })
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        eventType: "",
        guests: "",
        message: "",
        website: "",
      })
    } catch (err) {
      trackEvent("form_error")
      setSubmitError(err instanceof Error ? err.message : "A apărut o eroare. Încercați din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 lg:py-44 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-6 block">
              Contact
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Rezervă-ți <br />
              <span className="italic">data</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-md">
              Completează formularul și revenim cu o ofertă personalizată 
              în maximum 24 de ore.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="tel:0732116589"
                className="flex items-center gap-4 text-foreground hover:text-foreground/70 transition-colors group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-foreground/30 transition-colors">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-1">
                    Telefon
                  </span>
                  <span className="text-lg font-medium">0732 116 589</span>
                </div>
              </a>

              <a
                href="mailto:lucivatamanu@gmail.com"
                className="flex items-center gap-4 text-foreground hover:text-foreground/70 transition-colors group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-foreground/30 transition-colors">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-1">
                    Email
                  </span>
                  <span className="text-lg">lucivatamanu@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <Instagram size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-1">
                    Instagram
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-0">
                    <a href="https://instagram.com/vatamanuluci" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-foreground/70 transition-colors">@vatamanuluci</a>
                    <span className="text-muted-foreground mx-1 hidden sm:inline">&middot;</span>
                    <a href="https://instagram.com/artigianale.events" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-foreground/70 transition-colors">@artigianale.events</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 flex items-center justify-center border border-border">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-1">
                    Locație
                  </span>
                  <span className="text-lg">România — disponibili național</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                  <CheckCircle size={48} strokeWidth={1} className="text-accent mb-6" />
                </motion.div>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Cererea a fost trimisă!
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-sm mb-8">
                  Revenim cu o ofertă personalizată în maximum 24 de ore. 
                  Verifică și inbox-ul de email.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Trimite o altă cerere
                </button>
              </motion.div>
            ) : (
            <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot — hidden from real users, catches bots */}
              <input
                type="text"
                name="website"
                value={formData.website || ""}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3"
                  >
                    Nume *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onBlur={() => handleBlur("name")}
                    className={`w-full px-0 py-4 bg-transparent border-b text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-b-2 transition-all duration-300 ${getFieldError("name") ? "border-red-400 focus:border-red-500" : "border-border focus:border-foreground"}`}
                    placeholder="Numele tău"
                  />
                  {getFieldError("name") && <p className="text-red-500 text-xs mt-1.5">{getFieldError("name")}</p>}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3"
                  >
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onBlur={() => handleBlur("phone")}
                    className={`w-full px-0 py-4 bg-transparent border-b text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-b-2 transition-all duration-300 ${getFieldError("phone") ? "border-red-400 focus:border-red-500" : "border-border focus:border-foreground"}`}
                    placeholder="07XX XXX XXX"
                  />
                  {getFieldError("phone") && <p className="text-red-500 text-xs mt-1.5">{getFieldError("phone")}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onBlur={() => handleBlur("email")}
                  className={`w-full px-0 py-4 bg-transparent border-b text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-b-2 transition-all duration-300 ${getFieldError("email") ? "border-red-400 focus:border-red-500" : "border-border focus:border-foreground"}`}
                  placeholder="email@exemplu.ro"
                />
                {getFieldError("email") && <p className="text-red-500 text-xs mt-1.5">{getFieldError("email")}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3"
                  >
                    Data evenimentului *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground focus:outline-none focus:border-foreground focus:border-b-2 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3"
                  >
                    Număr invitați *
                  </label>
                  <input
                    type="number"
                    id="guests"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground focus:border-b-2 transition-all duration-300"
                    placeholder="Ex: 100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3"
                >
                  Tip eveniment *
                </label>
                <div className="relative">
                <select
                  id="eventType"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  onBlur={() => handleBlur("eventType")}
                  className={`w-full px-0 py-4 pr-8 bg-transparent border-b text-foreground focus:outline-none focus:border-b-2 transition-all duration-300 appearance-none cursor-pointer ${getFieldError("eventType") ? "border-red-400 focus:border-red-500" : "border-border focus:border-foreground"}`}
                >
                  <option value="" className="bg-background">Selectează tipul</option>
                  <option value="nunta" className="bg-background">Nuntă</option>
                  <option value="aniversare" className="bg-background">Aniversare</option>
                  <option value="corporate" className="bg-background">Corporate</option>
                  <option value="privat" className="bg-background">Eveniment privat</option>
                  <option value="altul" className="bg-background">Altul</option>
                </select>
                <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </div>
                {getFieldError("eventType") && <p className="text-red-500 text-xs mt-1.5">{getFieldError("eventType")}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground focus:border-b-2 transition-all duration-300 resize-none"
                  placeholder="Locație, preferințe, întrebări..."
                />
              </div>

              {submitError && (
                <p className="text-red-600 text-sm">{submitError}</p>
              )}

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full sm:w-auto px-12 py-5 bg-foreground text-background text-xs tracking-[0.25em] uppercase overflow-hidden disabled:opacity-70 transition-all duration-300 hover:shadow-lg"
                >
                  <span className={`relative z-10 flex items-center justify-center gap-3 transition-all duration-300 group-hover:tracking-[0.35em] ${isSubmitting ? "translate-y-10" : ""}`}>
                    Trimite cererea
                    <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className={`absolute inset-0 flex items-center justify-center transition-transform ${isSubmitting ? "" : "-translate-y-10"}`}>
                    Se trimite...
                  </span>
                </button>
              </div>
            </form>
            </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
