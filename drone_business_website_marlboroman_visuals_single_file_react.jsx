import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Check, Plane, Building2, MapPin, Camera, Calendar, ShieldCheck, Phone, Mail, Armchair } from "lucide-react";

// --- Utility ---
const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 }
};

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="w-full max-w-7xl px-4 mx-auto py-16 md:py-24">
    <motion.div {...fadeIn} className="text-center mb-12">
      {eyebrow && (
        <div className="mb-3">
          <Badge className="rounded-full px-3 py-1 text-xs uppercase tracking-wider">{eyebrow}</Badge>
        </div>
      )}
      {title && (
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
    {children}
  </section>
);

// --- Main component ---
export default function DroneBusinessWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">MV</div>
            <span className="font-semibold tracking-tight">Marlboroman Visuals</span>
            <Badge className="ml-2">FAA Part 107</Badge>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#portfolio" className="hover:opacity-70">Portfolio</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#book">Book a Flight</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          {/* Replace with your footage or hosted video */}
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
            <source src="https://cdn.coverr.co/videos/coverr-drone-over-the-mountains-1512/1080p.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-gradient-to-b from-white/80 to-white pt-20 pb-28 md:pb-36">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeIn}>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Cinematic Drone Footage
                <br className="hidden md:block" />
                for Brands, Real Estate & Events
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Aerial cinematography, mapping, and inspections. Fully licensed & insured. Serving California and beyond.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#book"><Calendar className="h-4 w-4 mr-2"/>Check Availability</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href="#portfolio"><Camera className="h-4 w-4 mr-2"/>View Work</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>Insured</div>
                <div className="flex items-center gap-2"><Plane className="h-4 w-4"/>Part 107 Certified</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/>LA • OC • Inland Empire</div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="md:justify-self-end">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border">
                <img
                  alt="Drone hero"
                  src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1600&auto=format&fit=crop"
                  className="h-full w-full object-cover"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos / Trust */}
      <Section eyebrow="Trusted by" subtitle="Creators, realtors, and construction teams choose us for reliable, cinematic aerials.">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-70">
          {["AeroBuild","Skyline","Coast Realty","Volt Energy","Vista Events","Urban Dev"].map((logo)=> (
            <div key={logo} className="text-center text-sm md:text-base font-semibold border rounded-2xl py-4">{logo}</div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" eyebrow="Services" title="What we fly for" subtitle="From cinematic promos to precise surveys—pick a mission and we’ll handle the flight plan.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: Camera, title: "Cinematic Aerials", desc: "Commercials, social content, product launches, and event coverage."},
            {icon: Building2, title: "Real Estate", desc: "Listing videos, photo packs, twilight shoots, neighborhood flyovers."},
            {icon: MapPin, title: "Construction & Mapping", desc: "Progress tracking, orthomosaic maps, roof inspections, and more."},
          ].map(({icon:Icon,title,desc})=> (
            <Card key={title} className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><Icon className="h-5 w-5"/>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{desc}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    "4K60/10‑bit recording",
                    "HDR photo packs",
                    "Fully licensed & insured",
                  ].map((item)=> (
                    <li key={item} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{item}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button asChild className="rounded-2xl"><a href="#book">Book this</a></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Portfolio */}
      <Section id="portfolio" eyebrow="Portfolio" title="Recent work" subtitle="A few frames from recent flights.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((i)=> (
            <motion.div key={i} {...fadeIn} className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-sm">
              <img src={`https://images.unsplash.com/photo-15${80+i}65048521-f130df041f66?q=80&w=1200&auto=format&fit=crop`} alt={`Portfolio ${i}`} className="h-full w-full object-cover"/>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" eyebrow="Pricing" title="Simple, transparent packages" subtitle="Custom quotes available for multi-day shoots, mapping, or travel.">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            name: "Starter", price: "$249", features: ["30 min on-site","Up to 15 edited photos","1 location"], cta: "Book Starter"
          },{
            name: "Pro", price: "$499", features: ["60 min on-site","4K edited highlight (30–60s)","Up to 30 photos"], cta: "Book Pro"
          },{
            name: "Cinematic", price: "$899", features: ["Half‑day crew","Storyboard + sound design","Full deliverables"], cta: "Book Cinematic"
          }].map((tier, idx)=> (
            <Card key={tier.name} className={`rounded-3xl ${idx===1? 'border-2 shadow-lg': ''}`}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  {tier.name}
                  {idx===1 && <Badge>Most Popular</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-extrabold">{tier.price}<span className="text-base font-medium text-muted-foreground"> / shoot</span></div>
                <ul className="mt-4 space-y-2 text-sm">
                  {tier.features.map(f=> (
                    <li key={f} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{f}</li>
                  ))}
                </ul>
                <Button asChild className="mt-5 w-full rounded-2xl"><a href="#book">{tier.cta}</a></Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">* Pricing is indicative. Airspace approvals, special insurance, or travel may add costs.</p>
      </Section>

      {/* About */}
      <Section id="about" eyebrow="About" title="Pilot & Creator" subtitle="I’m a Part 107 certified pilot delivering fast turnarounds and rock‑steady aerials.">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div {...fadeIn} className="rounded-3xl overflow-hidden border">
            <img src="https://images.unsplash.com/photo-1520975922035-236b6f229e42?q=80&w=1600&auto=format&fit=crop" alt="Pilot" className="w-full h-full object-cover"/>
          </motion.div>
          <motion.div {...fadeIn}>
            <p className="text-muted-foreground leading-relaxed">
              From real estate flyovers to cinematic brand spots and construction progress, Marlboroman Visuals brings a
              calm, safety‑first approach with creative flight paths and crisp color.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["LA Airspace Experience","Night Ops Ready","Public Liability Insured","Quick Turnaround"].map(tag => (
                <Card key={tag} className="rounded-2xl"><CardContent className="py-4 text-sm font-medium">{tag}</CardContent></Card>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Booking CTA */}
      <Section id="book" eyebrow="Booking" title="Ready to lift off?" subtitle="Tell us about your location, date, and deliverables. We’ll confirm airspace and send a quote.">
        <div className="grid md:grid-cols-5 gap-6 items-stretch">
          <Card className="md:col-span-3 rounded-3xl">
            <CardHeader>
              <CardTitle>Request a quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Name" required />
                <Input placeholder="Email" type="email" required />
                <Input placeholder="Phone" type="tel" />
                <Input placeholder="Shoot date (approx)" type="text" />
                <Input placeholder="Location / address" className="md:col-span-2" />
                <Textarea placeholder="Tell us about your project (services, deliverables, timeline)" className="md:col-span-2 min-h-[120px]" />
                <Button type="button" className="rounded-2xl md:col-span-2">Submit request</Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">This form is a demo. Wire it to your email, CRM, or booking tool.</p>
            </CardContent>
          </Card>
          <div className="md:col-span-2 grid gap-4">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Phone className="h-4 w-4"/>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>(555) 555‑0137</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4"/><a className="underline" href="mailto:hello@marlboromanvisuals.com">hello@marlboromanvisuals.com</a></div>
                <div>Los Angeles, CA</div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Armchair className="h-4 w-4"/>Service Areas</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2 flex-wrap">
                {["Los Angeles","Orange County","Inland Empire","San Diego","Central Coast"].map(area => (
                  <Badge key={area} variant="secondary" className="rounded-full">{area}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Testimonials" title="Clients say nice things">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            quote: "The aerials made our listing pop—sold in 5 days.", name: "Coast Realty"
          },{
            quote: "Super safe, super cinematic. Exactly what we needed.", name: "Vista Events"
          },{
            quote: "Construction updates are now painless and precise.", name: "Urban Dev"
          }].map((t)=> (
            <Card key={t.name} className="rounded-3xl">
              <CardContent className="pt-6">
                <p className="italic">“{t.quote}”</p>
                <p className="mt-4 font-semibold">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">MV</div>
              <span className="font-semibold">Marlboroman Visuals</span>
            </div>
            <p className="mt-3 text-muted-foreground">Aerial photo • video • mapping</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Company</p>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Legal</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Licensed & insured • FAA Part 107</li>
              <li>LAANC airspace authorization support</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Get in touch</p>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="mailto:hello@marlboromanvisuals.com">hello@marlboromanvisuals.com</a></li>
              <li>(555) 555‑0137</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground pb-8">© {new Date().getFullYear()} Marlboroman Visuals. All rights reserved.</div>
      </footer>
    </div>
  );
}
