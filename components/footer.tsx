"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = [
  { href: "#about", label: "Despre noi" },
  { href: "#menu", label: "Meniu" },
  { href: "#pricing", label: "Pachete" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background">
      {/* Smooth transition from light section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo_transparent.png"
                alt="ARTIGIANALE"
                width={200}
                height={75}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-dark-muted text-sm leading-relaxed max-w-sm mb-10">
              Pizza napoletană coaptă pe loc, în cuptor cu flacără lungă. 
              Catering pentru nunți, aniversări și evenimente corporate în toată România.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/vatamanuluci"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 h-11 border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                aria-label="Instagram @vatamanuluci"
              >
                <Instagram size={16} strokeWidth={1.5} />
                <span className="text-[10px] tracking-wide hidden sm:inline">@vatamanuluci</span>
              </a>
              <a
                href="https://instagram.com/artigianale.events"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 h-11 border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                aria-label="Instagram @artigianale.events"
              >
                <Instagram size={16} strokeWidth={1.5} />
                <span className="text-[10px] tracking-wide hidden sm:inline">@artigianale.events</span>
              </a>
              <a
                href="tel:0732116589"
                className="w-11 h-11 flex items-center justify-center border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                aria-label="Telefon"
              >
                <Phone size={18} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:lucivatamanu@gmail.com"
                className="w-11 h-11 flex items-center justify-center border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-[10px] tracking-[0.3em] text-accent/50 uppercase mb-6">
              Navigare
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-muted hover:text-background transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-[10px] tracking-[0.3em] text-accent/50 uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-dark-muted">
              <li>
                <a href="tel:0732116589" className="hover:text-background transition-colors inline-flex items-center gap-2">
                  <Phone size={14} className="text-accent/40" />
                  0732 116 589
                </a>
              </li>
              <li>
                <a href="mailto:lucivatamanu@gmail.com" className="hover:text-background transition-colors inline-flex items-center gap-2">
                  <Mail size={14} className="text-accent/40" />
                  lucivatamanu@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/vatamanuluci" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <Instagram size={14} className="text-accent/40" />
                  @vatamanuluci
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/artigianale.events" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors inline-flex items-center gap-2"
                >
                  <Instagram size={14} className="text-accent/40" />
                  @artigianale.events
                </a>
              </li>
              <li className="pt-2 text-dark-muted/60">
                România — disponibili național
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-accent/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-dark-muted/50 tracking-wide">
            <p>© {new Date().getFullYear()} ARTIGIANALE. Toate drepturile rezervate.</p>
            <p className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent/30" />
              Cu drag, din cuptor
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
