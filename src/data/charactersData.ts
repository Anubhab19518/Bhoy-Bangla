export interface Character {
  id: string;
  name: string;
  nativeName: string;
  hasOfficialName: boolean;
  role: string;
  tag: string;
  category: "ghosts" | "occult" | "mortals" | "investigators";
  description: string;
  detailedLore: string;
  image: string;
  fullImage: string;
  attributes: {
    label: string;
    value: string;
  }[];
  signatureItem: string;
  domain: string;
  dangerRating: "Low" | "Medium" | "High" | "Extreme" | "Lethal";
  accentColor: string;
  cardType: "hero" | "wide" | "standard";
}

export const charactersData: Character[] = [
  // 1. BRAHMO DOYTYA (Named) - Hero 2x2
  {
    id: "brahmo-doytya",
    name: "Brahmo Doytya",
    nativeName: "ব্রহ্মদৈত্য",
    hasOfficialName: true,
    role: "The Ancient Brahmin Specter",
    tag: "Legendary Ghost",
    category: "ghosts",
    description: "The revered yet formidable spirit of a sacred Brahmin, adorned in holy beads and wooden kharam, guarding ancient banyan groves.",
    detailedLore: "Among the most venerable and terrifying specters in Bengali folklore, Brahmo Doytya dwells high in ancient bel and banyan trees. While generally dignified and bound by ancient Vedic codes, any soul who shows disrespect or cuts down his dwelling tree faces his wrath.",
    image: "/photos/crop-brahmo-doytya.png",
    fullImage: "/photos/brahmo doytya.png",
    attributes: [
      { label: "Entity Type", value: "Brahmin Spirit" },
      { label: "Spiritual Might", value: "Transcendent" },
      { label: "Lore", value: "Sacred Trees & Groves" }
    ],
    signatureItem: "Kharam (Wooden Clogs) & Rudraksha Mala",
    domain: "Ancient Bel & Banyan Trees",
    dangerRating: "Extreme",
    accentColor: "#a855f7", // mystical purple
    cardType: "hero"
  },

  // 2. BHOOT (Named) - Wide 2x1
  {
    id: "bhoot",
    name: "Bhoot",
    nativeName: "ভূত",
    hasOfficialName: true,
    role: "The Restless Skeleton Specter",
    tag: "Restless Undead",
    category: "ghosts",
    description: "A chilling skeletal phantom with blazing crimson eyes and torn rags, roaming lonely crossroads after midnight.",
    detailedLore: "The restless spirit of an untimely death, this apparition wanders between the realms of the living and dead. His burning crimson gaze paralyzes travelers who dare walk lonely village pathways during Amavasya (new moon) nights.",
    image: "/photos/crop-bhoot.png",
    fullImage: "/photos/bhoot.png",
    attributes: [
      { label: "Form", value: "Skeletal Wraith" },
      { label: "Eye Flare", value: "Crimson Terror" },
      { label: "Lore", value: "Midnight Crossroads" }
    ],
    signatureItem: "Glowing Skull & Torn Garments",
    domain: "Desolate Roads & Cremation Borders",
    dangerRating: "High",
    accentColor: "#ef4444", // blood red
    cardType: "wide"
  },

  // 3. TANTRIK (Named) - Standard 1x1
  {
    id: "tantrik",
    name: "Tantrik",
    nativeName: "তান্ত্রিক",
    hasOfficialName: true,
    role: "Practitioner of Dark Sorcery",
    tag: "Dark Occult",
    category: "occult",
    description: "A fierce wielder of esoteric tantric mantras, dressed in ritual black with sacred markings across his chest and arms.",
    detailedLore: "Master of nocturnal rituals and spirit subjugation. Operating in absolute secrecy near river ghats and jungle alters, he commands invisible entities to do his bidding, walking the razor-thin boundary between mortal and dark demonic realms.",
    image: "/photos/crop-tantrik.png",
    fullImage: "/photos/tantrik.png",
    attributes: [
      { label: "Occult Rank", value: "Dark Master" },
      { label: "Ritual Power", value: "High" },
      { label: "Lore", value: "Occult Altars" }
    ],
    signatureItem: "Rudraksha Garland & Sacred Ash Markings",
    domain: "Hidden Altars & Dark Ghats",
    dangerRating: "Extreme",
    accentColor: "#dc2626", // deep red
    cardType: "standard"
  },

  // 4. KAPALIK AGHORI (Numbered #7) - Standard 1x1
  {
    id: "kapalik-aghori",
    name: "The Kapalik Aghori",
    nativeName: "কাপালিক অঘোরী",
    hasOfficialName: false,
    role: "Master of Shamshan Rites",
    tag: "Forbidden Arts",
    category: "occult",
    description: "Smeared in funeral pyre ash and draped in a garland of human skulls, he communes with ancestral pretas.",
    detailedLore: "Dwelling at midnight cremation grounds where funeral pyres burn, he wields ancient necromantic sorcery capable of binding restless pretas and shadows under his terrifying will.",
    image: "/photos/crop-7.png",
    fullImage: "/photos/7.png",
    attributes: [
      { label: "Occult Power", value: "Fatal" },
      { label: "Spectral Control", value: "Absolute" },
      { label: "Lore", value: "Shamshan Ghat" }
    ],
    signatureItem: "Mundamala (Skull Garland) & Ash Markings",
    domain: "Cremation Grounds & Midnight Pyres",
    dangerRating: "Lethal",
    accentColor: "#b91c1c", // crimson
    cardType: "standard"
  },

  // 5. JOMIDAR (Named) - Standard 1x1
  {
    id: "jomidar",
    name: "Jomidar",
    nativeName: "জমিদার",
    hasOfficialName: true,
    role: "The Aristocrat Landlord",
    tag: "Aristocratic Lineage",
    category: "mortals",
    description: "The proud master of the ancestral estate, draped in fine turban and silks, bearing the dark secrets of his bloodline.",
    detailedLore: "Ruler of vast ancestral lands and a sprawling, decaying mansion. Generations of wealth came at a terrible supernatural price, and now the cursed history of his forefathers manifests within the shadowy corridors of his grand haveli.",
    image: "/photos/crop-jomidar.png",
    fullImage: "/photos/jomidar.png",
    attributes: [
      { label: "Influence", value: "Feudal Lord" },
      { label: "Estate Lore", value: "Cursed Haveli" },
      { label: "Bloodline", value: "Aristocratic" }
    ],
    signatureItem: "Royal Turban & Nagra Shoes",
    domain: "Zamindar Haveli & Courtyard",
    dangerRating: "Medium",
    accentColor: "#06b6d4", // cyan
    cardType: "standard"
  },

  // 6. KUSUM (Named) - Standard 1x1
  {
    id: "kusum",
    name: "Kusum",
    nativeName: "কুসুম",
    hasOfficialName: true,
    role: "The Resilient Heroine",
    tag: "Bravery & Insight",
    category: "mortals",
    description: "A quick-witted young woman who observes the subtle, unearthly happenings of the village when others turn away in terror.",
    detailedLore: "Determined and courageous, Kusum refuses to be paralyzed by superstition. When unexplainable disappearances shake the village, she pieces together clues from ancient folklore and oral legends to protect those she loves.",
    image: "/photos/crop-kusum.png",
    fullImage: "/photos/kusum.png",
    attributes: [
      { label: "Courage", value: "Exceptional" },
      { label: "Intuition", value: "Sharp" },
      { label: "Lore", value: "Village Quarter" }
    ],
    signatureItem: "Golden Kurti & Silver Jhumka",
    domain: "Village Outskirts & Library",
    dangerRating: "Low",
    accentColor: "#eab308", // bright yellow
    cardType: "standard"
  },

  // 7. THE NIGHT RICKSHAWALA (Numbered #1) - Wide 2x1
  {
    id: "night-rickshawala",
    name: "The Rickshawala",
    nativeName: "নিশাচর রিকশাওয়ালা",
    hasOfficialName: false,
    role: "The Midnight Transporter",
    tag: "Urban Legend",
    category: "mortals",
    description: "Pedaling through midnight fog and desolate village roads, ferrying passengers toward destinations not found on any living map.",
    detailedLore: "Known as the silent navigator of twilight alleys, his rusted brass bell chimes warnings in the dead of night. Travelers who board his rickshaw past midnight find the journey stretch into endless foggy bamboo groves that defy earthly geography.",
    image: "/photos/crop-1.png",
    fullImage: "/photos/1.png",
    attributes: [
      { label: "Navigation", value: "Supernatural" },
      { label: "Presence", value: "Phantom" },
      { label: "Lore", value: "Lonely Byways" }
    ],
    signatureItem: "Rusted Bell & Three-Wheeled Rickshaw",
    domain: "Foggy Alleys & Abandoned Crossroads",
    dangerRating: "High",
    accentColor: "#f97316", // orange
    cardType: "wide"
  },

  // 8. RAHUL (Named) - Wide 2x1
  {
    id: "rahul",
    name: "Rahul",
    nativeName: "রাহুল",
    hasOfficialName: true,
    role: "The Modern Researcher",
    tag: "Curious Scholar",
    category: "investigators",
    description: "A scholarly youth with glasses and modern equipment, documenting folklore who stumbles into terrifying realities.",
    detailedLore: "A folklore researcher and writer who arrived from the city to document rural myths for his thesis. Equipped with field recording gear and keen analytical eyes, his rational mindset is shattered when confronted by undeniable paranormal occurrences.",
    image: "/photos/crop-rahul.png",
    fullImage: "/photos/rahul.png",
    attributes: [
      { label: "Intellect", value: "Analytical" },
      { label: "Skepticism", value: "Wavery" },
      { label: "Lore", value: "Urban Scholar" }
    ],
    signatureItem: "Reading Spectacles & Field Journal",
    domain: "Archives & Abandoned Ruins",
    dangerRating: "Low",
    accentColor: "#10b981", // emerald
    cardType: "wide"
  },

  // 9. DAROGA BABU (Numbered #3) - Standard 1x1
  {
    id: "daroga-babu",
    name: "Daroga Babu",
    nativeName: "দারোগাবাবু",
    hasOfficialName: false,
    role: "The Sub-Inspector",
    tag: "Law & Authority",
    category: "investigators",
    description: "Armed with a service revolver and rigid skepticism, investigating crimes where logic falls into shadows.",
    detailedLore: "Stationed in a remote rural police outpost where unclosed disappearance files gather dust. Despite rigid rational training, the spectral wails heard from the old zamindar estate push his sanity to its breaking point.",
    image: "/photos/crop-3.png",
    fullImage: "/photos/3.png",
    attributes: [
      { label: "Skepticism", value: "Unshakable" },
      { label: "Bravery", value: "88%" },
      { label: "Lore", value: "Rural Thana" }
    ],
    signatureItem: "Service Revolver & Leather Holster",
    domain: "Cursed Crime Scenes & Old Thana",
    dangerRating: "Medium",
    accentColor: "#eab308", // gold
    cardType: "standard"
  },

  // 10. THE VILLAGE BRIDE (Numbered #4) - Standard 1x1
  {
    id: "village-bride",
    name: "The Village Bride",
    nativeName: "গ্রামের বধূ",
    hasOfficialName: false,
    role: "Bearer of Ancestral Secrets",
    tag: "Haunted Legacy",
    category: "mortals",
    description: "Adorned in traditional saree and vermillion, she senses the restless ancestral spirits trapped in the haveli.",
    detailedLore: "Wed into an ancient aristocrat family bearing a generational curse. At night, as spectral anklets chime across the inner courtyard, her third eye awakens to the bloodline secrets buried deep beneath the foundation.",
    image: "/photos/crop-4.png",
    fullImage: "/photos/4.png",
    attributes: [
      { label: "Sixth Sense", value: "Heightened" },
      { label: "Lineage", value: "Aristocratic" },
      { label: "Lore", value: "Zamindar Haveli" }
    ],
    signatureItem: "Shankha-Pola & Red Vermillion",
    domain: "Ancestral Haveli & Dark Courtyards",
    dangerRating: "Medium",
    accentColor: "#059669", // forest green
    cardType: "standard"
  },

  // 11. SADHU BABA (Numbered #2) - Standard 1x1
  {
    id: "sadhu-baba",
    name: "Sadhu Baba",
    nativeName: "সাধু বাবা",
    hasOfficialName: false,
    role: "The Saffron Hermit",
    tag: "Mystic Seer",
    category: "occult",
    description: "Wandering sacred river ghats, uttering cryptic warnings of dark omens and restless spirits trapped between worlds.",
    detailedLore: "A wanderer who has renounced worldly attachments to study sacred mantras. Villagers seek his talismans when dark omens appear, but when he falls silent, they know an ancient curse has already begun to unfold.",
    image: "/photos/crop-2.png",
    fullImage: "/photos/2.png",
    attributes: [
      { label: "Spiritual Aura", value: "Master" },
      { label: "Occult Insight", value: "95%" },
      { label: "Lore", value: "River Ghats" }
    ],
    signatureItem: "Rudraksha Beads & Saffron Angavastram",
    domain: "Sacred Ghats & Banyan Shrines",
    dangerRating: "Extreme",
    accentColor: "#ea580c", // saffron orange
    cardType: "standard"
  },

  // 12. KISHORE (Numbered #5) - Standard 1x1
  {
    id: "kishore",
    name: "Kishore",
    nativeName: "Kishore",
    hasOfficialName: false,
    role: "The Fearless Village Boy",
    tag: "Innocent Witness",
    category: "mortals",
    description: "Driven by village ghost tales, daring friends to explore abandoned ruins and dark bamboo groves at dusk.",
    detailedLore: "The daring village boy who sneaks out despite warnings about the haunted pond and hollow tamarind tree. His insatiable adventure spirit often leads his friends straight into the path of terrifying apparitions.",
    image: "/photos/crop-5.png",
    fullImage: "/photos/5.png",
    attributes: [
      { label: "Curiosity", value: "Fearless" },
      { label: "Agility", value: "90%" },
      { label: "Lore", value: "Village Outskirts" }
    ],
    signatureItem: "Wooden Stick & Slingshot",
    domain: "Abandoned Mansions & Forbidden Orchards",
    dangerRating: "Low",
    accentColor: "#38bdf8", // sky blue
    cardType: "standard"
  },

  // 13. WEARY PEASANT (Numbered #6) - Wide 2x1
  {
    id: "weary-peasant",
    name: "The Weary Peasant",
    nativeName: "গ্রামবাসী কৃষক",
    hasOfficialName: false,
    role: "The Night Watchman",
    tag: "Swamp Folklore",
    category: "mortals",
    description: "Guarding murky paddy fields under monsoon thunderstorms, witnessing shapeshifting apparitions rising from wetlands.",
    detailedLore: "A hardworking farmer whose life is bound to the land. Familiar with rural superstitions and strange nocturnal lights (Aleya) over the wetlands, he knows which bamboo groves are best left undisturbed in the dead of night.",
    image: "/photos/crop-6.png",
    fullImage: "/photos/6.png",
    attributes: [
      { label: "Folk Instinct", value: "High" },
      { label: "Field Lore", value: "Marshlands" },
      { label: "Lore", value: "Paddy Wetlands" }
    ],
    signatureItem: "Gamcha & Hurricane Lantern",
    domain: "Flooded Fields & Murky Marshes",
    dangerRating: "Medium",
    accentColor: "#84cc16", // lime green
    cardType: "wide"
  }
];
