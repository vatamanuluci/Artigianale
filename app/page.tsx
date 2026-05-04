import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Gallery } from "@/components/gallery"
import { Menu } from "@/components/menu"
import { Pricing } from "@/components/pricing"
// import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { BackToTop } from "@/components/back-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQ } from "@/components/faq"
import { CookieConsent } from "@/components/cookie-consent"
// import { VideoSection } from "@/components/video-section" // Uncomment when you have a real video

function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto max-w-6xl px-6 ${className}`}>
      <div className="h-px bg-border/60" />
    </div>
  )
}

export default function Home() {
  return (
    <PageTransition>
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Process />
      {/* <VideoSection /> */}
      <Gallery />
      <Menu />
      <Pricing />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
    <BackToTop />
    <WhatsAppButton />
    <CookieConsent />
    </PageTransition>
  )
}
