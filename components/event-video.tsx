"use client"

import { useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

type EventVideoProps = {
  src: string
  poster?: string
  label: string
  className?: string
}

export function EventVideo({ src, poster, label, className = "" }: EventVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return

    const nextMuted = !video.muted
    if (!nextMuted) {
      document.querySelectorAll("video").forEach((otherVideo) => {
        if (otherVideo !== video) otherVideo.muted = true
      })
    }
    video.muted = nextMuted
    setMuted(nextMuted)
  }

  const soundLabel = muted ? "Activează sunetul" : "Oprește sunetul"

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onVolumeChange={() => setMuted(videoRef.current?.muted ?? true)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={soundLabel}
        aria-pressed={!muted}
        title={soundLabel}
        className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {muted ? <VolumeX size={20} aria-hidden="true" /> : <Volume2 size={20} aria-hidden="true" />}
      </button>
    </div>
  )
}