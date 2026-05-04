"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-32 lg:py-44 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-6 block">
            Vezi cum lucrăm
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Pizza coaptă <span className="italic">live</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative aspect-video max-w-4xl mx-auto overflow-hidden group"
        >
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0"
              title="ARTIGIANALE — Pizza coaptă live la eveniment"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer"
              aria-label="Pornește video"
            >
              <Image
                src="/images/gozney-oven-flames.jpeg"
                alt="Preview video — pizza coaptă live la eveniment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNCBAPDQ4KEQ4LExMPERENEBsbFBQbExoaGhoeHx8f/2wBDAQMEBAUEBQkFBQkeGhkgHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIhAAAQMEAQUBAAAAAAAAAAAAAQIDBAAFBhEhBxITMUFh/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADESEx/9oADAMBAAIRAxEAPwCe4Nj1vv2Wwo90hMTIq5KEOJ8yCUHvSCNgjYOjzUrzzp9j0my3B2BaIUWQiK6pp1tpKVoUEEhSSBsEHkEVn6FfrhBQER7hMjpHpLT6kD+A0lHVm6ynMbyp+bIcfcjuBBccUVKPelJ5J+0aYpbOQxUdDP/2Q=="
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors duration-500" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <Play size={28} className="text-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              {/* Caption */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <span className="text-[10px] tracking-[0.3em] text-background/80 uppercase">
                  De la aluat la felie — 90 de secunde
                </span>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
