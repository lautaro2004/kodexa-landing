import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import { TechSection } from "@/components/tech-section"
import { MembershipSection } from "@/components/membership-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <PrinciplesSection />
        <TechSection />
        <MembershipSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  )
}
