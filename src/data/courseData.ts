export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseMonth {
  slug: string;
  monthNumber: number;
  title: string;
  description?: string;
  heroImage: string;
  modules: CourseModule[];
  practicalProject: string;
}

export const courseCurriculum: CourseMonth[] = [
  {
    slug: "month-1",
    monthNumber: 1,
    title: "Animation Fundamentals & Creative Foundation",
    heroImage: "/month-1.webp",
    modules: [
      {
        title: "Module 1 — Introduction to Animation",
        topics: [
          "What is animation?",
          "Types of animation",
          "2D vs 3D animation",
          "Traditional animation",
          "Cut-out animation",
          "Rig-based animation",
          "Character animation",
          "Motion graphics",
          "Animation production pipeline",
          "How professional animation studios work"
        ]
      },
      {
        title: "Module 2 — Principles of Animation",
        topics: [
          "Squash & Stretch",
          "Anticipation",
          "Staging",
          "Straight Ahead Animation",
          "Pose-to-Pose Animation",
          "Follow Through",
          "Overlapping Action",
          "Slow In & Slow Out",
          "Arcs",
          "Timing",
          "Spacing",
          "Exaggeration",
          "Appeal"
        ]
      },
      {
        title: "Module 3 — Drawing & Visual Basics",
        topics: [
          "Basic shapes",
          "Proportion",
          "Perspective",
          "Character anatomy",
          "Gesture drawing",
          "Facial structure",
          "Expressions",
          "Colour theory",
          "Light & shadow"
        ]
      }
    ],
    practicalProject: "Create a basic animated character with 5 different expressions."
  },
  {
    slug: "month-2",
    monthNumber: 2,
    title: "Character & Background Design",
    heroImage: "/month-2.webp",
    modules: [
      {
        title: "Module 4 — Character Design",
        topics: [
          "Character concepts",
          "Character personality",
          "Hero design",
          "Villain design",
          "Cartoon characters",
          "Ghost characters",
          "Fantasy characters",
          "Sci-fi characters",
          "Children characters",
          "Character poses",
          "Character turnaround"
        ]
      },
      {
        title: "Module 5 — Character Asset Preparation",
        topics: [
          "Head separation",
          "Body separation",
          "Arms",
          "Hands",
          "Legs",
          "Feet",
          "Eyes",
          "Eyebrows",
          "Mouth shapes",
          "Hair",
          "Accessories",
          "Clothing"
        ]
      },
      {
        title: "Module 6 — Background Design",
        topics: [
          "Village backgrounds",
          "Houses",
          "Roads",
          "Forests",
          "Haunted locations",
          "Cities",
          "Laboratories",
          "Sci-fi environments",
          "Interior environments",
          "Exterior environments"
        ]
      }
    ],
    practicalProject: "Create one complete hero character + one villain + three backgrounds."
  },
  {
    slug: "month-3",
    monthNumber: 3,
    title: "Character Rigging & 2D Animation",
    heroImage: "/month-3.webp",
    description: "This is one of the most important parts of the course.",
    modules: [
      {
        title: "Module 7 — 2D Character Rigging",
        topics: [
          "What is character rigging?",
          "Cut-out animation",
          "Bone systems",
          "Parenting",
          "Controllers",
          "Character hierarchy",
          "Facial controls",
          "Hand controls",
          "Eye controls",
          "Mouth systems",
          "Reusable character rigs"
        ]
      },
      {
        title: "Module 8 — Character Movement",
        topics: [
          "Walking",
          "Running",
          "Jumping",
          "Sitting",
          "Standing",
          "Turning",
          "Waving",
          "Pointing",
          "Fighting",
          "Falling",
          "Basic acting"
        ]
      },
      {
        title: "Module 9 — Animation Timing",
        topics: [
          "Keyframes",
          "In-betweens",
          "Timing",
          "Spacing",
          "Graph editing",
          "Motion control",
          "Smooth animation"
        ]
      }
    ],
    practicalProject: "Create a 30–60 second character animation sequence."
  },
  {
    slug: "month-4",
    monthNumber: 4,
    title: "Advanced Character Animation & Storytelling",
    heroImage: "/month-4.webp",
    modules: [
      {
        title: "Module 10 — Facial Animation",
        topics: [
          "Eye movement",
          "Blinking",
          "Eyebrow movement",
          "Facial expressions",
          "Emotional reactions",
          "Lip movement",
          "Talking animation"
        ]
      },
      {
        title: "Module 11 — Lip Sync",
        topics: [
          "Voice preparation",
          "Mouth shapes",
          "Phonemes",
          "Dialogue timing",
          "Bengali lip-sync workflow",
          "Emotional dialogue",
          "Talking characters"
        ]
      },
      {
        title: "Module 12 — Acting & Character Performance",
        topics: [
          "Happiness",
          "Fear",
          "Anger",
          "Sadness",
          "Surprise",
          "Confusion",
          "Suspense",
          "Horror reactions",
          "Character interaction"
        ]
      },
      {
        title: "Module 13 — Camera Animation",
        topics: [
          "Camera movement",
          "Zoom",
          "Pan",
          "Tracking",
          "Camera shake",
          "Cinematic framing",
          "Close-up",
          "Wide shot",
          "Establishing shot"
        ]
      }
    ],
    practicalProject: "Create a 1–2 minute dialogue-based animated scene."
  },
  {
    slug: "month-5",
    monthNumber: 5,
    title: "VFX, Compositing & Professional Production",
    heroImage: "/month-5.webp",
    description: "This is where students learn to make animation look more cinematic.",
    modules: [
      {
        title: "Module 14 — 2D Visual Effects",
        topics: [
          "Fire",
          "Smoke",
          "Rain",
          "Lightning",
          "Water",
          "Dust",
          "Explosion",
          "Energy effects",
          "Magic effects",
          "Horror effects",
          "Sci-fi effects"
        ]
      },
      {
        title: "Module 15 — Horror Animation",
        topics: [
          "Haunted atmosphere",
          "Dark environments",
          "Ghost appearance",
          "Shadow effects",
          "Fog",
          "Flickering lights",
          "Horror camera movement",
          "Suspense transitions",
          "Scary sound integration"
        ]
      },
      {
        title: "Module 16 — Sci-Fi Animation",
        topics: [
          "Futuristic interfaces",
          "Energy effects",
          "Laser effects",
          "Robot animation",
          "Technology environments",
          "Holograms",
          "Futuristic machines",
          "Sci-fi transitions"
        ]
      },
      {
        title: "Module 17 — Compositing",
        topics: [
          "Layer management",
          "Scene composition",
          "Lighting",
          "Shadows",
          "Colour correction",
          "Background integration",
          "VFX integration",
          "Depth",
          "Cinematic effects"
        ]
      }
    ],
    practicalProject: "Create a complete 1–2 minute cinematic animated scene."
  },
  {
    slug: "month-6",
    monthNumber: 6,
    title: "Complete Animated Episode Production",
    heroImage: "/month-6.webp",
    description: "This is the final professional production stage.",
    modules: [
      {
        title: "Module 18 — Story Development",
        topics: [
          "Story idea",
          "Characters",
          "Conflict",
          "Beginning",
          "Middle",
          "Climax",
          "Ending"
        ]
      },
      {
        title: "Module 19 — Script Writing",
        topics: [
          "Scene structure",
          "Dialogue",
          "Narration",
          "Character interaction",
          "Suspense",
          "Comedy",
          "Action",
          "Emotional scenes"
        ]
      },
      {
        title: "Module 20 — Storyboarding",
        topics: [
          "Shot planning",
          "Camera angles",
          "Character positions",
          "Scene transitions",
          "Action planning"
        ]
      },
      {
        title: "Module 21 — Full Production",
        topics: [
          "Script",
          "Storyboard",
          "Character",
          "Background",
          "Rig",
          "Animation",
          "Voice",
          "VFX",
          "Compositing",
          "Editing"
        ]
      },
      {
        title: "Module 22 — Final Editing",
        topics: [
          "Video editing",
          "Sound mixing",
          "Music",
          "Voice-over",
          "SFX",
          "Titles",
          "Credits",
          "Final export"
        ]
      },
      {
        title: "Module 23 — YouTube Production",
        topics: [
          "Thumbnail basics",
          "Title creation",
          "Description",
          "Keywords",
          "Audience retention",
          "Episode structure",
          "Shorts",
          "Channel branding"
        ]
      }
    ],
    practicalProject: "One complete 5–10 minute 2D animated story. This becomes part of their professional portfolio."
  }
];
