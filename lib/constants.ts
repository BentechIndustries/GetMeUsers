export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/gmu-bentech/30min";

export const SITE = {
  name: "GetMeUsers",
  tagline: "You built the product. We bring the users.",
} as const;

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Proof", href: "#proof" },
  { label: "Offer", href: "#offer" },
] as const;

export const HERO = {
  headline: "Get Your First 1,000 Users",
  subheadline: SITE.tagline,
  primaryCta: "Book a growth call",
  secondaryCta: "See how it works",
} as const;

export const PROBLEM = {
  titleLine1: "Building is easy.",
  titleLine2: "Distribution isn't.",
  points: [
    "AI tools let you ship in days with Lovable, Replit, Cursor, and Bolt. But a finished product with zero users is still a failed launch.",
    "Most indie apps die not because the idea was bad, but because nobody ever heard about them.",
  ],
} as const;

export const SOLUTION = {
  title: "User acquisition built for AI-built apps",
  description:
    "GetMeUsers helps founders who move fast go from launch to traction with positioning, channels, and execution tailored to products built with AI.",
  items: [
    {
      title: "Positioning for AI-built apps",
      description: "Stand out in a crowded market with messaging that resonates.",
    },
    {
      title: "Launch strategy",
      description: "A clear plan for day-one visibility and momentum.",
    },
    {
      title: "Paid + organic acquisition",
      description: "Reddit, X, communities, and targeted ads. Whatever fits your product.",
    },
    {
      title: "Landing page optimisation",
      description: "Turn visitors into signups with a page built to convert.",
    },
  ],
} as const;

export const AUDIENCE = {
  title: "Built for builders like you",
  subtitle:
    "Whether you vibe-coded it in Lovable or shipped with Cursor, if you need users, you're in the right place.",
  groups: [
    "App founders",
    "Indie hackers",
    "Solo builders",
    "Vibe coders",
    "SaaS launchers",
  ],
} as const;

export const STEPS = {
  title: "How it works",
  items: [
    {
      step: "01",
      title: "Audit your product",
      description:
        "We review your app, existing audience (none is fine), and current traction to find the fastest path to users.",
    },
    {
      step: "02",
      title: "Build acquisition strategy",
      description:
        "A tailored plan covering channels, messaging, and launch timing.",
    },
    {
      step: "03",
      title: "Execute launch + user acquisition",
      description:
        "We help you run the launch and set up acquisition systems that keep working.",
    },
  ],
} as const;

export const PROOF = {
  title: "Results from the field",
  subtitle: "Real results from recent launches.",
  cases: [
    {
      title: "Case study 1",
      result: "+1,200 users in 21 days",
      description: "Launched an AI productivity tool with targeted community outreach.",
    },
    {
      title: "Case study 2",
      result: "300 users from Reddit + X",
      description: "Organic growth through founder-led content and community engagement.",
    },
  ],
} as const;

export const OFFER = {
  title: "Growth Sprint",
  price: "$___",
  description: "Everything you need to go from zero to your first wave of users.",
  includes: ["Strategy", "Launch plan", "Acquisition setup"],
  cta: "Book a growth call",
} as const;

export const FINAL_CTA = {
  headline: "Ready to get your first users?",
  subheadline: "Book a free 15-minute call. No pitch deck required.",
  cta: "Book a growth call",
} as const;
