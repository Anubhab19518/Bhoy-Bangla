export interface ProcessStep {
  slug: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  nextStepSlug: string | null;
  nextStepTitle: string | null;
}

export const processPipeline: ProcessStep[] = [
  {
    slug: "concept-scripting",
    stepNumber: "01",
    title: "Concept & Scripting",
    subtitle: "Where the nightmares begin.",
    description: "We delve deep into forgotten Bengali folklore and urban legends. Every script is meticulously crafted to exploit primal fears, ensuring the narrative hooks you from the very first whisper in the dark.",
    image: "/content-2.webp",
    nextStepSlug: "voice-acting",
    nextStepTitle: "Voice Acting"
  },
  {
    slug: "voice-acting",
    stepNumber: "02",
    title: "Voice Acting",
    subtitle: "Breathing life into the dead.",
    description: "A script is nothing without the soul of its characters. Our talented voice cast delivers bone-chilling, emotionally raw Bengali performances that make every scream, gasp, and whisper feel terrifyingly real.",
    image: "/content-5.webp",
    nextStepSlug: "storyboarding",
    nextStepTitle: "Storyboarding"
  },
  {
    slug: "storyboarding",
    stepNumber: "03",
    title: "Storyboarding",
    subtitle: "Visualizing the terror.",
    description: "We map out the descent into madness. Every scare, every shadow, and every cinematic camera angle is meticulously planned scene by scene to maximize suspense before a single frame is animated.",
    image: "/content-3.webp",
    nextStepSlug: "animation",
    nextStepTitle: "Animation"
  },
  {
    slug: "animation",
    stepNumber: "04",
    title: "Animation",
    subtitle: "Bringing shadows to life.",
    description: "Our core animation phase. We use advanced 2D rigging and frame-by-frame techniques to create fluid, terrifying motion. This is where static drawings mutate into living, breathing nightmares.",
    image: "/content-1.webp",
    nextStepSlug: "sound-design",
    nextStepTitle: "Sound Design"
  },
  {
    slug: "sound-design",
    stepNumber: "05",
    title: "Sound Design",
    subtitle: "The heartbeat of fear.",
    description: "Silence is just as scary as the scream. We layer atmospheric ambiance, bone-crunching foley, and haunting musical scores to create an immersive audio landscape that traps you in the story.",
    image: "/content-4.webp",
    nextStepSlug: "post-production",
    nextStepTitle: "Post-Production"
  },
  {
    slug: "post-production",
    stepNumber: "06",
    title: "Post-Production",
    subtitle: "The final polish.",
    description: "We add the finishing touches of horror—fog, dynamic lighting, color grading, and visual effects. The scenes are composited and rendered into the ultimate cinematic nightmare.",
    image: "/content-6.webp",
    nextStepSlug: null,
    nextStepTitle: null
  }
];
