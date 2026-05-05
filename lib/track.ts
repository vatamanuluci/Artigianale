// Lightweight event tracking stub — replace with your analytics provider if needed
export function trackEvent(name: string, properties?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    console.debug("[event]", name, properties)
  }
}
