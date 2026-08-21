export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/gmu-bentech/30min";

export const SITE = {
  name: "GetMeUsers",
  tagline: "You built the app. We bring the users.",
} as const;

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Example", href: "#proof" },
] as const;

export const HERO = {
  headline: "You shipped.",
  subheadline: "Now what?",
  descriptor: "Let's get you users.",
  primaryCta: "Book your free growth call",
  secondaryCta: "See how it works",
  note: "15 minutes. Just bring your app link.",
} as const;

export const LAUNCH_OFFER = {
  badge: "Limited time",
  lead:
    "To celebrate the launch of GetMeUsers, we are offering a limited-time early adopters sale with discounts up to 50%.",
  cta: "Book your call now",
  tail: " to qualify.",
} as const;

export const PROBLEM = {
  titleLine1: "Building is easy.",
  titleLine2: "Distribution isn't.",
  narrative: [
    "You shipped in a weekend.",
    "Two weeks later, the analytics dashboard is still flat.",
    "The product works. Nobody knows it exists.",
    "That's where most apps die.",
    "Now is the time to make sure you're not most apps.",
  ],
  emphasis: "That's where most apps die.",
} as const;

export const FOUNDER = {
  initials: "BT",
  name: "Ben",
  role: "Founder",
  statement:
    "I've launched products fast and watched them sit at zero users. GetMeUsers is the distribution work I do for founders who are great at building and stuck on the part that comes after.",
} as const;

export const SOLUTION = {
  title: "Everything you need",
  intro:
    "After your call, we'll get straight to work on getting you all you need to get users.",
  items: [
    {
      title: "Launch strategy",
      description: "A concrete, practical step-by-step roadmap to getting your first 1,000 users.",
    },
    {
      title: "Position optimization",
      description: "Messaging that separates you from the hundred other tools launching this week.",
    },
    {
      title: "Paid + organic acquisition",
      description: "We'll find what fits your product based on what works in the current environment.",
    },
    {
      title: "Landing page optimization",
      description: "Your page should convert the traffic we send. We fix that too.",
    },
    {
      title: "Channel setup",
      description: "Accounts, posts, ads, and tracking configured so growth does not stop when we hand off.",
    },
    {
      title: "Launch execution",
      description: "We run the launch with you, not hand you a PDF and disappear.",
    },
  ],
  closing:
    "Our goal is to get you to a place where you're getting compounding signups, organically.",
} as const;

export const AUDIENCE = {
  title: "Built for builders like you",
  subtitle:
    "Whether you vibe-coded it in Lovable or shipped with Cursor, if you need users, you are in the right place.",
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
      title: "Product audit",
      description:
        "We get on a call with you, review your app, any existing audience, and current traction to find the fastest path to users.",
    },
    {
      step: "02",
      title: "Acquisition strategy",
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
  title: "Example",
  subtitle: "How an acquisition system gets built around the product.",
  flows: [
    {
      product: "Habit tracker",
      audience: "Consumer app",
      insight: "Nobody needs another habit app. They need a reason to stick with one, so we anchor it to a specific identity.",
      stages: [
        {
          label: "Niche down",
          detail: "Target one identity-driven group (gym, study, sobriety) instead of everyone who wants habits.",
        },
        {
          label: "Build the hook",
          detail: "Short-form video showing the streak mechanic and a real before and after.",
        },
        {
          label: "Seed channels",
          detail: "Reddit communities like r/getdisciplined, TikTok and Shorts, niche Discords.",
        },
        {
          label: "Remove friction",
          detail: "Instant free start, no signup wall, streak sharing built into the product.",
        },
      ],
      loop: "Every shared streak becomes social proof that recruits the next user.",
      outcome: "Compounding organic signups",
    },
    {
      product: "Developer SaaS",
      audience: "Technical buyer",
      insight: "Developers distrust marketing. They adopt tools through proof, peers, and search, not pitches.",
      stages: [
        {
          label: "Sharpen the use case",
          detail: "State the exact problem and the stack it fits in a single sentence.",
        },
        {
          label: "Show, don't pitch",
          detail: "Technical writeups, a live demo, and a Show HN over polished ad copy.",
        },
        {
          label: "Go where devs are",
          detail: "Reddit dev subs, build-in-public on X, dev.to posts, and SEO-friendly docs.",
        },
        {
          label: "Free tier as funnel",
          detail: "Docs to free tier to paid, with usage that proves the value fast.",
        },
      ],
      loop: "Search-friendly content and word of mouth keep returning qualified traffic.",
      outcome: "Qualified, durable traffic",
    },
  ],
} as const;

export const OFFER = {
  title: "Growth Blueprint",
  price: "$___",
  description: "From zero traction to a launch that actually brings users in the door.",
  includes: [
    "Positioning + messaging",
    "Launch plan",
    "Channel setup",
    "Landing page review",
    "Launch week support",
  ],
  cta: "Book a growth call",
} as const;

export const FAQ = {
  title: "FAQs",
  items: [
    {
      question: "I have no users yet. Is that too early?",
      answer:
        "That is exactly when this works best. We are built for the gap between shipped and first traction.",
    },
    {
      question: "I already tried posting on Reddit and got nothing.",
      answer:
        "Most founders post in the wrong subreddits with the wrong framing. Channel selection and positioning matter more than volume.",
    },
    {
      question: "What if my app is not ready?",
      answer:
        "Book the call anyway. We will tell you honestly if you should launch now or fix the product first.",
    },
    {
      question: "How is this different from a marketing agency?",
      answer:
        "Agencies send decks. We run the launch with you, tuned for indie budgets and solo developer products.",
    },
    {
      question: "What does the call cover?",
      answer:
        "All we need is for you to explain what you've built (be proud!) and we'll start working on a plan right away. By the end of the 15 minutes you'll have a clear idea of what your next step should be.",
    },
    {
      question: "Do you create content and ads?",
      answer:
        "Yes! We specialize in making coherent, consistent content that converts.",
    },
  ],
} as const;

export const CTA_BAND = {
  headline: "Ready to get users?",
  subheadline: "Just one quick chat away.",
  cta: "Book your free call",
} as const;

export const CTA_BAND_SECONDARY = {
  headline: "You shipped. Now find the users.",
  subheadline: "15 minutes to spot the bottleneck and your next move.",
  cta: "Book your call now",
} as const;

export const FINAL_CTA = {
  headline: "Ready to get your first users?",
  subheadline: "Book a free 15-minute call. No commitment.",
  cta: "Book a growth call",
  ps: "P.S. If you shipped something real and the user count is still below 100, or even stuck at zero, this call is for you.",
} as const;
