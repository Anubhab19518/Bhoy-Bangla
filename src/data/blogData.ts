export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "anatomy-of-a-jump-scare",
    title: "The Anatomy of a Jump Scare",
    excerpt: "How timing, sound design, and anticipation combine to create the perfect cinematic terror.",
    date: "Oct 13, 2026",
    category: "Technique",
    image: "/content-2.webp",
    content: `
At Bhoy Bangla, we believe that a truly terrifying jump scare is a carefully crafted symphony of silence, anticipation, and sudden sensory overload. 

## The Build-Up
It starts with silence. The background score slowly fades away, leaving the audience acutely aware of their own heartbeat. The character breathes heavily, their footsteps echoing through a seemingly empty hallway. This isn't just quietness; it's a tense, oppressive void that demands to be filled. 

## The Misdirection
A creaking door. A shadow darting across the periphery of the frame. We draw the viewer's eye to exactly where we want them to look, building tension until it becomes almost unbearable. When the tension peaks, we often release it with a "false scare"—a harmless cat or a gust of wind. The audience exhales, their guard drops down.

## The Payoff
And that is the exact moment we strike. A sudden burst of dissonant, high-frequency sound design paired with a grotesque, terrifying visual that invades the frame. It bypasses logic and hits the primal, reptilian part of the brain. That is the anatomy of a true Bhoy Bangla nightmare.
    `
  },
  {
    id: "2",
    slug: "unearthing-bengali-folklore",
    title: "Unearthing Bengali Folklore",
    excerpt: "Exploring the dark, forgotten myths of Bengal and how we adapt them for modern animation.",
    date: "Sep 28, 2026",
    category: "Storytelling",
    image: "/content-4.webp",
    content: `
Bengal has a rich, deeply unsettling tapestry of folklore and ghost stories passed down through generations. From the shape-shifting *Petni* to the blood-thirsty *Brahmodaitya*, these entities have haunted the bedtime stories of Bengali children for centuries. 

## Adapting the Ancient
At Bhoy Bangla, our mission is to resurrect these forgotten myths and introduce them to a modern audience. We dig through ancient literature and oral histories to find the most chilling tales. However, translating a campfire story into a 3D cinematic experience requires a delicate touch. 

## Visualizing the Unseen
How do you design a creature that is supposed to be formless? We rely heavily on atmosphere. Thick, volumetric fog rolling through the Sundarbans, the eerie glow of a single lantern in an abandoned Zamindar palace—we use the environment to tell the story before the monster even appears. By keeping the entity shrouded in darkness, we let the viewer's own imagination do the heavy lifting. The unknown is always far more terrifying than the known.
    `
  },
  {
    id: "3",
    slug: "lighting-the-darkness",
    title: "Lighting the Darkness",
    excerpt: "Behind the scenes: Using volumetric fog and hard shadows to craft an oppressive atmosphere.",
    date: "Aug 15, 2026",
    category: "Behind the Scenes",
    image: "/content-5.webp",
    content: `
In horror animation, what you don't see is just as important as what you do see. Lighting is the most crucial tool we have for controlling the viewer's perception and inducing anxiety.

## The Power of Silhouettes
We often use strong backlighting to reduce our terrifying antagonists to mere silhouettes. This deprives the audience of visual information, making the creature feel alien and unpredictable. We embrace harsh, dramatic shadows that stretch across the room, warping reality and making the mundane look menacing.

## Volumetric Atmosphere
Clean air isn't scary. We fill our scenes with volumetric fog, dust motes, and humidity. This creates a dense, claustrophobic atmosphere that scatters light and reduces visibility. It makes every beam of moonlight fighting through the window feel significant, and it provides the perfect cover for whatever is lurking in the corner of the room.
    `
  }
];
