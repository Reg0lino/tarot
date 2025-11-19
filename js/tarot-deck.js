const tarotDeck = [
  // =================================================================
  // MAJOR ARCANA (0 - 21)
  // =================================================================
  {
    id: "m00",
    name: "The Fool",
    number: 0,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m00.jpg",
    meta: {
      rws_name: "The Fool",
      thoth_name: "The Fool",
      marseille_name: "Le Mat",
      astrology: "Uranus / Air",
      element: "Air",
      hebrew_letter: "Aleph"
    },
    meanings: {
      rws: {
        keywords: ["New beginnings", "innocence", "leap of faith", "spontaneity"],
        general: "The spirit leaping into the unknown, unburdened by the past.",
        light: "A time for optimism and trust. Take the leap! The universe supports your risk-taking right now. Embrace your innocence and beginner's mind.",
        shadow: "Recklessness or naivety. Are you leaping without looking? Or are you refusing to jump due to fear? Be careful of acting foolishly without regarding consequences.",
        questions: ["Where is my fear holding me back?", "What would I do if I knew I couldn't fail?"]
      },
      thoth: {
        keywords: ["Originality", "mania", "pure energy", "chaos"],
        general: "The Holy Ghost; pure, unformed spiritual energy containing all possibilities.",
        light: "Explosive potential and originality. You have access to raw, divine genius. Channel it into something new.",
        shadow: "Mania and instability. Your energy is scattering in too many directions. Potential that remains ungrounded becomes chaos.",
        questions: ["How can I ground this sudden burst of energy?", "Am I being original or just chaotic?"]
      },
      anima: {
        animal: "The Fox",
        keywords: ["Instinct", "adaptability", "survival", "trickster"],
        general: "The Fox steps lightly into the unknown, relying on keen senses.",
        light: "Trust your survival instincts. You don't need a map; you need to be adaptable. Use your wits to navigate this new terrain.",
        shadow: "Deception or running away. Are you outsmarting yourself? The Fox in shadow becomes the trickster who tricks himself. Don't run from your problems.",
        questions: ["Am I being clever or deceitful?", "What does my gut tell me about this path?"]
      }
    }
  },
  {
    id: "m01",
    name: "The Magician",
    number: 1,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m01.jpg",
    meta: {
      rws_name: "The Magician",
      thoth_name: "The Magus",
      marseille_name: "Le Bateleur",
      astrology: "Mercury",
      element: "Air",
      hebrew_letter: "Beth"
    },
    meanings: {
      rws: {
        keywords: ["Manifestation", "resourcefulness", "power", "skill"],
        general: "Connecting the spiritual and material worlds to manifest will.",
        light: "You have all the tools you need. It is time to act. Focus your willpower and make it happen. You are the conduit for success.",
        shadow: "Manipulation and trickery. Are you using your skills to deceive others? Or are you suffering from 'Imposter Syndrome' and not using the skills you have?",
        questions: ["What am I trying to manifest?", "Am I using my power for the highest good?"]
      },
      thoth: {
        keywords: ["Cunning", "wisdom", "communication", "illusion"],
        general: "The Messenger (Mercury). The duality of truth and illusion.",
        light: "Communication is your magic. Be articulate and clever. Your words have the power to shape reality right now.",
        shadow: "Deceit and misuse of intellect. The Magus can be a liar. Watch out for misinformation or your own tendency to twist the truth.",
        questions: ["Is my communication clear?", "Am I being honest with myself?"]
      },
      anima: {
        animal: "The Owl",
        keywords: ["Focus", "observation", "silent action", "precision"],
        general: "The Owl masters its environment through silent observation.",
        light: "Precision strike. Do not waste energy on noise. Observe carefully, wait for the perfect moment, and then act with absolute certainty.",
        shadow: "Hyper-fixation or paralysis. Are you watching life instead of living it? Or are you using your knowledge to intimidate others?",
        questions: ["What am I waiting for?", "Is my silence wisdom or fear?"]
      }
    }
  },
  {
    id: "m02",
    name: "The High Priestess",
    number: 2,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m02.jpg",
    meta: {
      rws_name: "The High Priestess",
      thoth_name: "The Priestess",
      marseille_name: "La Papesse",
      astrology: "Moon",
      element: "Water",
      hebrew_letter: "Gimel"
    },
    meanings: {
      rws: {
        keywords: ["Intuition", "mystery", "subconscious", "stillness"],
        general: "Guarding the gate to the great mystery and the subconscious.",
        light: "Listen to your inner voice. The answers are not in the outside world. Trust your dreams and your gut feelings over logic right now.",
        shadow: "Repressed intuition or shallowness. You are ignoring the red flags. Or, you are becoming too withdrawn and disconnected from reality.",
        questions: ["What is my intuition trying to tell me?", "What secret am I keeping from myself?"]
      },
      thoth: {
        keywords: ["Purity", "independence", "self-sufficiency"],
        general: "Spiritual arcana and self-sufficiency.",
        light: "You do not need external validation. Your connection to the divine is direct. Find strength in your own independence and silence.",
        shadow: "Coldness and isolation. The 'Ice Queen' archetype. Do not cut yourself off from human warmth in your pursuit of spiritual purity.",
        questions: ["Am I being independent or isolated?", "How can I trust myself more?"]
      },
      anima: {
        animal: "The Great Horned Owl",
        keywords: ["Night vision", "secrets", "hidden truth"],
        general: "Seeing clearly what is hidden in the dark.",
        light: "Trust your 'night vision'. You are picking up on things others miss. Look beneath the surface of the situation.",
        shadow: "Fear of the dark. You are sensing something hidden but refusing to acknowledge it. Or, you are using secrets to manipulate others.",
        questions: ["What am I seeing that others are missing?", "What am I afraid to look at?"]
      }
    }
  },
  {
    id: "m03",
    name: "The Empress",
    number: 3,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m03.jpg",
    meta: {
      rws_name: "The Empress",
      thoth_name: "The Empress",
      marseille_name: "L'Impératrice",
      astrology: "Venus",
      element: "Earth",
      hebrew_letter: "Daleth"
    },
    meanings: {
      rws: {
        keywords: ["Motherhood", "abundance", "nature", "creativity"],
        general: "The archetype of the Mother and the abundance of nature.",
        light: "Nurture your creations. Whether it's a project, a relationship, or a garden, pour your love and attention into it. Connect with nature and your senses to find your flow.",
        shadow: "Smothering or negligence. Are you 'mothering' others to the point of control? Or have you let your own garden wither because you lack self-discipline?",
        questions: ["What needs to be nurtured right now?", "Am I caring for myself as well as others?"]
      },
      thoth: {
        keywords: ["Love", "unity", "pleasure", "dominion"],
        general: "The Alchemical Salt; the gateway to heaven.",
        light: "Love is the law. Unify the opposites in your life through the power of love. Embrace beauty and pleasure as divine acts, not distractions.",
        shadow: "Hedonism and vanity. You may be obsessing over surface beauty or getting lost in luxury while ignoring the spiritual work.",
        questions: ["How can I bring more beauty into my life?", "Is my love unconditional or possessive?"]
      },
      anima: {
        animal: "The Mother Tree",
        keywords: ["Growth", "roots", "shelter", "interconnection"],
        general: "The center of the forest ecosystem, providing for all.",
        light: "Look to your roots. If you want to grow tall and bear fruit, you must ensure your environment is rich and supportive. Provide shelter for others, but stay grounded.",
        shadow: "Overcrowding. A great tree can choke out the saplings beneath it. Are you taking up so much space that others cannot grow? Or are your roots rotting from neglect?",
        questions: ["Is my environment supporting my growth?", "Who relies on me for shelter?"]
      }
    }
  },
  {
    id: "m04",
    name: "The Emperor",
    number: 4,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m04.jpg",
    meta: {
      rws_name: "The Emperor",
      thoth_name: "The Emperor",
      marseille_name: "L'Empereur",
      astrology: "Aries",
      element: "Fire",
      hebrew_letter: "Heh (RWS) / Tzaddi (Thoth)"
    },
    meanings: {
      rws: {
        keywords: ["Authority", "structure", "father figure", "logic"],
        general: "Bringing order to chaos through rules and structure.",
        light: "Be the boss. This situation calls for logic, discipline, and firm boundaries. Do not waver; establish a plan and stick to it. You are the authority here.",
        shadow: "Tyranny and rigidity. You are being too hard on yourself or others. Rules are meant to support life, not crush it. Watch out for a 'my way or the highway' attitude.",
        questions: ["Where do I need more structure?", "Am I leading with respect or fear?"]
      },
      thoth: {
        keywords: ["Power", "conquest", "initiative", "originality"],
        general: "The Sun of the Morning; dynamic, fiery energy.",
        light: "Take the initiative! Do not wait for permission. Use your dynamic energy to conquer the obstacle. Your vision is original; trust your power to execute it.",
        shadow: "Rashness and ego. You are fighting for the sake of fighting. Power without wisdom is just destruction. Check your ego before you burn bridges.",
        questions: ["What territory am I trying to claim?", "Is my ambition serving a higher purpose?"]
      },
      anima: {
        animal: "The Red Stag",
        keywords: ["Territory", "protection", "virility", "strength"],
        general: "The guardian of the herd, standing proud.",
        light: "Stand your ground. You have the right to be here and to protect what is yours. Do not back down from a challenge to your leadership or your boundaries.",
        shadow: "Insecurity and aggression. A stag fights only when necessary. Are you posturing because you feel weak? True strength doesn't need to be constantly proven.",
        questions: ["What am I protecting?", "Do I feel safe in my own space?"]
      }
    }
  },
  {
    id: "m05",
    name: "The Hierophant",
    number: 5,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m05.jpg",
    meta: {
      rws_name: "The Hierophant",
      thoth_name: "The Hierophant",
      marseille_name: "Le Pape",
      astrology: "Taurus",
      element: "Earth",
      hebrew_letter: "Vau"
    },
    meanings: {
      rws: {
        keywords: ["Tradition", "education", "conformity", "mentorship"],
        general: "Established spiritual wisdom and social structures.",
        light: "Seek wisdom from tradition. You don't need to reinvent the wheel; the path has been walked before. Find a mentor or join a group that shares your values.",
        shadow: "Dogma and restriction. You are following rules that no longer make sense. Beware of 'groupthink' or a spiritual teacher who demands blind obedience.",
        questions: ["What traditions do I value?", "Am I following a rule just because I was told to?"]
      },
      thoth: {
        keywords: ["Manifestation", "teaching", "endurance", "memory"],
        general: "The Magus of the Eternal; the bridge between ideas and reality.",
        light: "Manifest your truth. You are learning a deep lesson that requires endurance. Connect the spiritual insight to your physical reality; make it real.",
        shadow: "Stubbornness. You are holding onto an idea that has become fossilized. True wisdom is alive and changing; don't get stuck in the past.",
        questions: ["What am I here to teach or learn?", "Am I being stubborn or principled?"]
      },
      anima: {
        animal: "The White Buffalo",
        keywords: ["Sacred law", "ancestral wisdom", "spirit guide", "omen"],
        general: "A rare and sacred sign of connection to the Great Spirit.",
        light: "Honor the sacred laws of nature. There is a spiritual order to things that you should respect. Listen to the wisdom of your ancestors or the land itself.",
        shadow: "Exclusivity. Do not hoard spiritual truth or think your way is the only way. The sacred belongs to everyone, not just the chosen few.",
        questions: ["How do I connect with the sacred?", "What wisdom are my ancestors whispering?"]
      }
    }
  },
  {
    id: "m06",
    name: "The Lovers",
    number: 6,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m06.jpg",
    meta: {
      rws_name: "The Lovers",
      thoth_name: "The Lovers",
      marseille_name: "L'Amoureux",
      astrology: "Gemini",
      element: "Air",
      hebrew_letter: "Zain"
    },
    meanings: {
      rws: {
        keywords: ["Union", "choice", "values", "relationships"],
        general: "Union, duality, and moral choices.",
        light: "A significant choice must be made. Ensure your decision aligns with your core values. In relationships, seek harmony and a partnership of equals.",
        shadow: "Disharmony or bad choices. You are torn between two paths or two people. Avoidance of the choice is causing inner conflict.",
        questions: ["Does this choice align with my values?", "Am I seeking wholeness in another person?"]
      },
      thoth: {
        keywords: ["Synthesis", "marriage", "duality", "inspiration"],
        general: "The Alchemical Marriage; the union of opposites.",
        light: "Synthesize the opposing forces in your life. Logic and emotion, action and receptivity—combine them to create something new and divine.",
        shadow: "Division and internal conflict. The opposites are warring within you. You cannot find peace until you accept both sides of your nature.",
        questions: ["What opposites am I trying to reconcile?", "Is my head fighting my heart?"]
      },
      anima: {
        animal: "Two Wolves",
        keywords: ["Partnership", "loyalty", "survival", "duality"],
        general: "Bonded for survival and strength.",
        light: "Partnership is a survival advantage. Align yourself with those who protect you and make you stronger. Choose the pack that feeds your soul.",
        shadow: "Dependence or conflict. Are you staying in a pack that hurts you? Or are you fighting with your ally? Survival requires trust.",
        questions: ["Who is in my pack?", "Does this partnership make me stronger?"]
      }
    }
  },
  {
    id: "m07",
    name: "The Chariot",
    number: 7,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m07.jpg",
    meta: {
      rws_name: "The Chariot",
      thoth_name: "The Chariot",
      marseille_name: "Le Chariot",
      astrology: "Cancer",
      element: "Water",
      hebrew_letter: "Cheth"
    },
    meanings: {
      rws: {
        keywords: ["Willpower", "determination", "victory", "control"],
        general: "Victory comes through disciplining opposing forces.",
        light: "Focus your will. You have conflicting forces in your life (like the black and white sphinxes), but with sheer determination, you can steer them toward victory.",
        shadow: "Lack of control or aggression. The horses are running wild. You are either being too aggressive and running over others, or you have lost the reins entirely.",
        questions: ["What am I trying to control?", "Am I driving the chariot or is it driving me?"]
      },
      thoth: {
        keywords: ["Triumph", "obedience", "faithful service", "hope"],
        general: "The Bearer of the Holy Grail; armed and armored.",
        light: "Devote yourself to your 'Great Work'. Success is assured if you remain faithful to your path and armor yourself against distractions.",
        shadow: "Ruthlessness. You are so focused on the goal that you have forgotten the human cost. Victory without compassion is empty.",
        questions: ["What is my holy grail?", "Is my armor protecting me or trapping me?"]
      },
      anima: {
        animal: "Wild Horses",
        keywords: ["Momentum", "drive", "untamed energy", "freedom"],
        general: "Running wild and free, harnessing raw power.",
        light: "Do not try to break your spirit; direct it. Use your raw, untamed energy to propel you forward. Momentum is your best friend right now.",
        shadow: "Stampede. Your energy is destructive and directionless. You are running fast, but are you running toward something or away from something?",
        questions: ["Where is this energy taking me?", "Can I harness this power without breaking it?"]
      }
    }
  },
  {
    id: "m08",
    name: "Strength",
    number: 8,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m08.jpg",
    meta: {
      rws_name: "Strength",
      thoth_name: "Lust (Card 11)",
      marseille_name: "La Justice (Card 8)",
      astrology: "Leo",
      element: "Fire",
      hebrew_letter: "Teth"
    },
    meanings: {
      rws: {
        keywords: ["Compassion", "patience", "inner strength", "persuasion"],
        general: "Taming the beast within through gentleness, not force.",
        light: "Approach the situation with patience and compassion. You are strong enough to be gentle. You can control the outcome better with kindness than with aggression.",
        shadow: "Self-doubt or raw emotion. You are letting your 'beast' (anger, fear, desire) control you. Or, you feel too weak to handle the challenge.",
        questions: ["Can I be gentle with myself?", "What part of me needs taming with love?"]
      },
      thoth: {
        keywords: ["Passion", "vigor", "ecstasy", "primal power"],
        general: "Lust; the joy of strength exercised.",
        light: "Embrace the joy of your physical existence. Do not repress your primal energy; ride it. There is divine ecstasy in surrendering to your passion.",
        shadow: "Obsession or burnout. You are burning the candle at both ends. Passion that is not channeled becomes destructive lust.",
        questions: ["Am I repressing my passion?", "How can I channel this energy creatively?"]
      },
      anima: {
        animal: "The Hercules Beetle",
        keywords: ["Leverage", "resilience", "endurance", "might"],
        general: "Small but capable of lifting immense weight.",
        light: "Size does not equal strength. Use leverage and persistence. You are capable of carrying burdens far heavier than you realize if you stay grounded.",
        shadow: "Overwhelm. Just because you *can* carry it doesn't mean you *should*. Are you carrying a burden that isn't yours?",
        questions: ["What weight am I carrying?", "Is my strength being used wisely?"]
      }
    }
  },
  {
    id: "m09",
    name: "The Hermit",
    number: 9,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m09.jpg",
    meta: {
      rws_name: "The Hermit",
      thoth_name: "The Hermit",
      marseille_name: "L'Ermite",
      astrology: "Virgo",
      element: "Earth",
      hebrew_letter: "Yod"
    },
    meanings: {
      rws: {
        keywords: ["Solitude", "introspection", "guidance", "withdrawal"],
        general: "Withdrawing from the world to find the light within.",
        light: "Take a step back. Spend time alone to hear your own inner voice. The answers you need are not in the crowd or on social media.",
        shadow: "Isolation and loneliness. You have withdrawn too far. Introspection has turned into hiding. It is time to bring your light back to the world.",
        questions: ["What is my inner voice saying?", "Am I hiding or healing?"]
      },
      thoth: {
        keywords: ["Illumination", "wisdom", "fertility", "silence"],
        general: "The seed of light hidden in the darkness.",
        light: "Your retreat is productive. You are incubating a light that will eventually illuminate others. Be prudent with your energy and resources.",
        shadow: "Narcissism. You are so focused on your own inner world that you have lost touch with reality. Wisdom meant only for yourself is useless.",
        questions: ["What am I incubating?", "Is my silence fruitful?"]
      },
      anima: {
        animal: "The Octopus",
        keywords: ["Camouflage", "intelligence", "retreat", "problem solving"],
        general: "Retreating into the cave to solve problems.",
        light: "It is safe to hide for a while. Use this time in your 'cave' to solve problems intelligently away from prying eyes. Adaptability is your strength.",
        shadow: "Fear of exposure. You are using your ink to confuse others and hide your true self. Don't stay in the dark forever.",
        questions: ["Why do I feel the need to hide?", "How can I solve this puzzle quietly?"]
      }
    }
  },
  {
    id: "m10",
    name: "Wheel of Fortune",
    number: 10,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m10.jpg",
    meta: {
      rws_name: "Wheel of Fortune",
      thoth_name: "Fortune",
      marseille_name: "La Roue de Fortune",
      astrology: "Jupiter",
      element: "Fire",
      hebrew_letter: "Kaph"
    },
    meanings: {
      rws: {
        keywords: ["Karma", "destiny", "turning point", "cycles"],
        general: "The cyclic nature of life; what goes up must come down.",
        light: "Change is inevitable. Don't resist the turning of the wheel. Seize the opportunities rising to meet you. Good luck is on the horizon.",
        shadow: "Bad luck or resistance. You are trying to stop the wheel from turning, which only causes suffering. Accept that you are not in control of external events.",
        questions: ["How can I adapt to this change?", "What cycle is ending or beginning?"]
      },
      thoth: {
        keywords: ["Change", "luck", "evolution", "expansion"],
        general: "The universe is in constant flux.",
        light: "Align yourself with the flow of karma and expansion. Accept that instability is the nature of reality, and ride the wave.",
        shadow: "Fatalism. You feel like a victim of fate. Remember that you are also the one turning the handle. Take responsibility for your reaction to events.",
        questions: ["Am I resisting the flow?", "Where is the opportunity in this change?"]
      },
      anima: {
        animal: "The Spider (Orb Weaver)",
        keywords: ["Weaving", "interconnection", "patience", "fate"],
        general: "Sitting at the center of the web of life.",
        light: "You are both the weaver and the fly. Understand that every action sends a vibration through the whole web. Be patient; your destiny is being woven.",
        shadow: "Entrapment. You feel caught in a web of circumstances. Or, you are manipulating the strands to trap others. Check your motives.",
        questions: ["What web am I weaving?", "Do I feel trapped or empowered?"]
      }
    }
  },
  {
    id: "m11",
    name: "Justice",
    number: 11,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m11.jpg",
    meta: {
      rws_name: "Justice",
      thoth_name: "Adjustment (Card 8)",
      marseille_name: "La Force (Card 11)",
      astrology: "Libra",
      element: "Air",
      hebrew_letter: "Lamed"
    },
    meanings: {
      rws: {
        keywords: ["Truth", "fairness", "law", "cause and effect"],
        general: "Objective truth and the law of Karma.",
        light: "Be honest with yourself and others. Your actions have consequences, and the truth will come out. Seek a balanced and fair resolution.",
        shadow: "Dishonesty or unfairness. You are refusing to take accountability for your actions. Or, you are being treated unfairly by a system. Fight for the truth.",
        questions: ["Am I being honest?", "What is the fair solution here?"]
      },
      thoth: {
        keywords: ["Balance", "adjustment", "equilibrium", "precision"],
        general: "Adjustment; nature constantly correcting itself.",
        light: "You are in a state of dynamic balance. Adjust your actions to maintain equilibrium. Nature will correct any imbalance you create, so do it yourself first.",
        shadow: "Imbalance. You have swung too far to one side (work/life, give/take). The correction, when it comes, will be harsh.",
        questions: ["What needs adjustment in my life?", "Where am I out of balance?"]
      },
      anima: {
        animal: "The Ostrich (Ma'at)",
        keywords: ["Truth", "weight", "judgment", "natural law"],
        general: "The feather of truth against the heart.",
        light: "Nature's justice is swift and neutral. You reap exactly what you sow. Ensure your actions are in alignment with natural law.",
        shadow: "Denial. Burying your head in the sand will not change the truth. Face the reality of your situation before nature forces you to.",
        questions: ["Am I living in alignment with my truth?", "What am I trying to ignore?"]
      }
    }
  },
  {
    id: "m12",
    name: "The Hanged Man",
    number: 12,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m12.jpg",
    meta: {
      rws_name: "The Hanged Man",
      thoth_name: "The Hanged Man",
      marseille_name: "Le Pendu",
      astrology: "Neptune / Water",
      element: "Water",
      hebrew_letter: "Mem"
    },
    meanings: {
      rws: {
        keywords: ["Surrender", "pause", "new perspective", "sacrifice"],
        general: "Voluntary suspension to gain enlightenment.",
        light: "Stop struggling. You cannot force a solution right now. Let go of control and look at the problem from a completely different angle. Surrender is victory.",
        shadow: "Stalling or martyrdom. You are hanging around waiting for life to happen to you. Or, you are making unnecessary sacrifices to play the victim.",
        questions: ["What am I holding onto?", "How can I see this differently?"]
      },
      thoth: {
        keywords: ["Redemption", "sacrifice", "water", "submersion"],
        general: "The Dying God; sacrifice of the ego.",
        light: "The ego must be sacrificed for the spirit to rise. Embrace this period of deep submersion; it is the only way to redemption and transformation.",
        shadow: "Punishment and suffering. You are drowning in your emotions. You feel punished by the universe, but the chains are of your own making.",
        questions: ["What part of my ego needs to die?", "Am I drowning or baptizing myself?"]
      },
      anima: {
        animal: "The Sloth",
        keywords: ["Stillness", "conservation", "perspective", "patience"],
        general: "Hanging upside down as a lifestyle.",
        light: "This is not a trap; it is a strategy. Slow down. Being still is a valid survival move. Watch the world go by and conserve your energy.",
        shadow: "Laziness or stagnation. Moss is growing on you. There is a difference between patient stillness and refusing to participate in life.",
        questions: ["Is this pause productive?", "Why am I rushing?"]
      }
    }
  },
  {
    id: "m13",
    name: "Death",
    number: 13,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m13.jpg",
    meta: {
      rws_name: "Death",
      thoth_name: "Death",
      marseille_name: "L'Arcane Sans Nom",
      astrology: "Scorpio",
      element: "Water",
      hebrew_letter: "Nun"
    },
    meanings: {
      rws: {
        keywords: ["Endings", "transformation", "transition", "release"],
        general: "The end of a cycle making way for the new.",
        light: "Let it go. Something in your life has run its course (a job, relationship, or belief). Clinging to it will only cause pain. Embrace the transformation.",
        shadow: "Stagnation and fear. You are resisting the inevitable change, which is causing you to rot. Change is scary, but necessary.",
        questions: ["What needs to die in my life?", "What am I afraid to release?"]
      },
      thoth: {
        keywords: ["Putrefaction", "rebirth", "change", "motion"],
        general: "Life in death; the alchemical process of decay.",
        light: "Allow the old forms to rot; they are the fertilizer for your future. Transformation is a messy, natural process. Dance with the change.",
        shadow: "Inertia. Refusing to change leads to spiritual death. Do not become a fossil.",
        questions: ["Am I allowing myself to change?", "What is being born from this ending?"]
      },
      anima: {
        animal: "The Snake",
        keywords: ["Shedding", "renewal", "growth", "vulnerability"],
        general: "Shedding skin to grow.",
        light: "You have outgrown your current life. Shed the old skin, even if it feels vulnerable and raw. It is the only way to grow larger.",
        shadow: "Stuck in the old. A snake that cannot shed its skin will die. Are you suffocating in your old identity?",
        questions: ["Does my current life fit who I am becoming?", "Am I willing to be vulnerable?"]
      }
    }
  },
  {
    id: "m14",
    name: "Temperance",
    number: 14,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m14.jpg",
    meta: {
      rws_name: "Temperance",
      thoth_name: "Art",
      marseille_name: "Tempérance",
      astrology: "Sagittarius",
      element: "Fire",
      hebrew_letter: "Samekh"
    },
    meanings: {
      rws: {
        keywords: ["Balance", "moderation", "patience", "alchemy"],
        general: "Blending opposites to create a third path.",
        light: "Avoid extremes. Seek the middle path. Healing comes from moderation and patiently blending different aspects of your life (work/play, head/heart).",
        shadow: "Imbalance and excess. You are swinging wildly between extremes. Or, you are diluting your energy by trying to compromise too much.",
        questions: ["Where do I need more balance?", "What am I mixing together?"]
      },
      thoth: {
        keywords: ["Integration", "synthesis", "combination", "art"],
        general: "Art; the consummation of the marriage of opposites.",
        light: "View your life as a work of art. Actively fuse your contradictions to create a masterpiece. This is an active, creative process, not just passive balance.",
        shadow: "Conflict and separation. The elements are refusing to mix. You are feeling fragmented and disjointed.",
        questions: ["How can I turn this conflict into art?", "Am I integrating my shadow?"]
      },
      anima: {
        animal: "The Crane",
        keywords: ["Poise", "patience", "focus", "harmony"],
        general: "Standing perfectly still on one leg in the water.",
        light: "Find your center. Wait with patience and poise. When you are perfectly balanced, the right action will flow effortlessly.",
        shadow: "Restlessness. You are hopping around and disturbing the water. You cannot catch the fish if you are making waves.",
        questions: ["Can I stand still in the flow?", "Where is my center of gravity?"]
      }
    }
  },
  {
    id: "m15",
    name: "The Devil",
    number: 15,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m15.jpg",
    meta: {
      rws_name: "The Devil",
      thoth_name: "The Devil",
      marseille_name: "Le Diable",
      astrology: "Capricorn",
      element: "Earth",
      hebrew_letter: "Ayin"
    },
    meanings: {
      rws: {
        keywords: ["Addiction", "attachment", "materialism", "bondage"],
        general: "Voluntary chains and material obsession.",
        light: "Acknowledge your shadow. You are trapped by your own desires or fears, not by external forces. Realize the chains are loose and choose to set yourself free.",
        shadow: "Addiction and hopelessness. You feel powerless to change your situation. You are giving your power away to a substance, a person, or a belief.",
        questions: ["What am I addicted to?", "Where am I giving away my power?"]
      },
      thoth: {
        keywords: ["Mirth", "stability", "secret", "raw power"],
        general: "The creative energy in its most material form (Pan).",
        light: "Do not be afraid of your raw instincts or sexuality. Laugh at your obsessions to break their power over you. There is power in the material world.",
        shadow: "Blind impulse. You are acting without consciousness, driven by base desires. Materialism has blinded you to the spirit.",
        questions: ["Am I ashamed of my nature?", "Can I laugh at this situation?"]
      },
      anima: {
        animal: "The Human",
        keywords: ["Ego", "illusion", "separation", "constructs"],
        general: "The only animal that creates its own cages.",
        light: "Recognize that your suffering is a mental construct. Nature is not evil; only the human ego creates chains. Step out of your head and back into nature.",
        shadow: "Delusion. You believe the cage is real. You are suffering because you think you are separate from the world.",
        questions: ["Is this rule real or made up?", "How can I reconnect with my wild self?"]
      }
    }
  },
  {
    id: "m16",
    name: "The Tower",
    number: 16,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m16.jpg",
    meta: {
      rws_name: "The Tower",
      thoth_name: "The Tower",
      marseille_name: "La Maison Dieu",
      astrology: "Mars",
      element: "Fire",
      hebrew_letter: "Peh"
    },
    meanings: {
      rws: {
        keywords: ["Sudden change", "chaos", "revelation", "destruction"],
        general: "The collapse of false structures.",
        light: "Let it fall. The structure was unstable/false anyway. This chaos is a form of liberation. Rebuild on truth. The lightning flash brings clarity.",
        shadow: "Denial and disaster. You are trying to patch up a crumbling building. Ignoring the cracks will only make the inevitable collapse more painful.",
        questions: ["What foundation is crumbling?", "What truth is trying to break through?"]
      },
      thoth: {
        keywords: ["War", "breakdown", "energy", "liberation"],
        general: "The destruction of the ego; Shiva.",
        light: "The eye of truth has opened. Reality is shattering your illusions. It is painful but necessary. Embrace the total breakdown as a spiritual cleansing.",
        shadow: "Destruction without purpose. You are burning bridges just to watch them burn. Chaos for the sake of chaos.",
        questions: ["What illusion is being shattered?", "Can I find peace in the chaos?"]
      },
      anima: {
        animal: "Lightning Striking a Tree",
        keywords: ["Wildfire", "clearing", "shock", "renewal"],
        general: "Nature's violent renewal process.",
        light: "Forest fires clear dead wood and allow for new growth. This event is a shock, but it is clearing the way for a healthier ecosystem in your life.",
        shadow: "Devastation. You feel burnt out and destroyed. Remember that the soil is now richer than ever before.",
        questions: ["What dead wood needs to burn?", "What will grow in the ashes?"]
      }
    }
  },
  {
    id: "m17",
    name: "The Star",
    number: 17,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m17.jpg",
    meta: {
      rws_name: "The Star",
      thoth_name: "The Star",
      marseille_name: "L'Étoile",
      astrology: "Aquarius",
      element: "Air",
      hebrew_letter: "Tzaddi / Heh"
    },
    meanings: {
      rws: {
        keywords: ["Hope", "healing", "renewal", "faith"],
        general: "Calm after the storm; spiritual guidance.",
        light: "Have faith. The worst is over. Connect with your spiritual purpose and trust that you are being guided toward a brighter future. Healing is happening.",
        shadow: "Despair or disconnection. You have lost your faith and feel abandoned. Or, you are hoping for a miracle without doing the work.",
        questions: ["Where can I find hope?", "What am I being guided to do?"]
      },
      thoth: {
        keywords: ["Crystal", "clarity", "vision", "love"],
        general: "Nuit, the Lady of the Stars; cosmic love.",
        light: "You are surrounded by cosmic love. Open yourself to spiritual insight. The light is crystal clear if you look up. Radiate your true self.",
        shadow: "Dreaminess. You are lost in the stars and disconnected from the earth. Spiritual bypassing.",
        questions: ["Am I seeing clearly?", "How can I ground this inspiration?"]
      },
      anima: {
        animal: "The Firefly",
        keywords: ["Guidance", "inner light", "faith", "navigation"],
        general: "A small light in the vast darkness.",
        light: "Even a small light is enough to navigate the darkness. Trust your inner guidance system. You don't need to see the whole path, just the next step.",
        shadow: "Dimness. You are letting your light go out. Or, you are chasing false lights that lead you astray.",
        questions: ["What lights me up?", "Can I trust my own light?"]
      }
    }
  },
  {
    id: "m18",
    name: "The Moon",
    number: 18,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m18.jpg",
    meta: {
      rws_name: "The Moon",
      thoth_name: "The Moon",
      marseille_name: "La Lune",
      astrology: "Pisces",
      element: "Water",
      hebrew_letter: "Qoph"
    },
    meanings: {
      rws: {
        keywords: ["Illusion", "fear", "subconscious", "dreams"],
        general: "The realm of shadows and uncertainty.",
        light: "Trust your intuition, but verify the facts. Things are not what they seem. Navigate this period of uncertainty by facing your fears, not running from them.",
        shadow: "Deception and paranoia. You are lost in a nightmare of your own making. Fear is controlling your decisions. Do not trust appearances right now.",
        questions: ["What am I afraid of?", "Is this fear real or imagined?"]
      },
      thoth: {
        keywords: ["Deception", "threshold", "bewilderment", "trial"],
        general: "The Dark Night of the Soul; the abyss.",
        light: "You are at the threshold of a great transition. Do not be deceived by your own mental phantoms. Push through the fear to be reborn.",
        shadow: "Hysteria. You are drowning in the delusions of the subconscious. Drug abuse or mental instability.",
        questions: ["What lies are my demons telling me?", "Can I stay calm in the dark?"]
      },
      anima: {
        animal: "The Wolf",
        keywords: ["Instinct", "wildness", "cycles", "calling"],
        general: "Howling at the moon; primal connection.",
        light: "The wild part of you is calling. Listen to your primal instincts and the rhythms of your body. There is a mystery here that logic cannot solve.",
        shadow: "Domestication. You have suppressed your wild self for so long that it has become dangerous. Or, you are being hunted.",
        questions: ["What is my wild self saying?", "Am I suppressing my instincts?"]
      }
    }
  },
  {
    id: "m19",
    name: "The Sun",
    number: 19,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m19.jpg",
    meta: {
      rws_name: "The Sun",
      thoth_name: "The Sun",
      marseille_name: "Le Soleil",
      astrology: "Sun",
      element: "Fire",
      hebrew_letter: "Resh"
    },
    meanings: {
      rws: {
        keywords: ["Joy", "success", "vitality", "positivity"],
        general: "Radiance, clarity, and innocence.",
        light: "Say yes! Step into the light and enjoy the warmth of success. Be confident, be visible, and celebrate your life. Everything is clear now.",
        shadow: "Burnout or temporary sadness. You are working too hard and getting sunburnt. Or, a cloud is temporarily blocking the sun—it will pass.",
        questions: ["What makes me happy?", "How can I shine brighter?"]
      },
      thoth: {
        keywords: ["Glory", "liberation", "triumph", "innocence"],
        general: "Heru-ra-ha; the Lord of Light.",
        light: "Liberation is at hand. You are breaking free from restrictions into a state of glory and triumph. Shine without hesitation. Two children dance together.",
        shadow: "Arrogance. You are blinded by your own light. Vanity and pride will lead to a fall.",
        questions: ["Am I free?", "Is my ego taking credit for the light?"]
      },
      anima: {
        animal: "The Horse",
        keywords: ["Freedom", "energy", "vitality", "radiance"],
        general: "Running free in a sunlit field.",
        light: "Run free! Feel the vitality in your body. This is a time for pure, unadulterated joy and expressing your energy without restraint.",
        shadow: "Reined in. You have all this energy but nowhere to run. Or, you are running yourself to exhaustion.",
        questions: ["Where do I feel most free?", "Am I using my energy joyfully?"]
      }
    }
  },
  {
    id: "m20",
    name: "Judgement",
    number: 20,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m20.jpg",
    meta: {
      rws_name: "Judgement",
      thoth_name: "The Aeon",
      marseille_name: "Le Jugement",
      astrology: "Pluto / Fire",
      element: "Fire",
      hebrew_letter: "Shin"
    },
    meanings: {
      rws: {
        keywords: ["Rebirth", "calling", "absolution", "awakening"],
        general: "The angel blows the trumpet; the dead rise.",
        light: "Stop ignoring the call. It is time to rise up, forgive yourself for the past, and embrace a new version of yourself. A major realization is changing your life.",
        shadow: "Self-doubt. You are refusing the call because you feel unworthy. Or, you are judging others too harshly to avoid judging yourself.",
        questions: ["What is calling me?", "Can I forgive myself?"]
      },
      thoth: {
        keywords: ["New era", "perspective", "time", "gestation"],
        general: "The Aeon; the beginning of a new age.",
        light: "A major chapter of your history is closing. Adopt a cosmic perspective. You are stepping into a completely new era of consciousness.",
        shadow: "Clinging to the past. You are trying to live in the old era when the new one has already begun. Evolution cannot be stopped.",
        questions: ["What era of my life is ending?", "Am I ready for the new?"]
      },
      anima: {
        animal: "The Cicada",
        keywords: ["Emergence", "metamorphosis", "song", "timing"],
        general: "Emerging after years underground to sing.",
        light: "You have been underground long enough. It is time to shed your shell, emerge into the light, and sing your song. Your timing is perfect.",
        shadow: "Silence. You are afraid to speak up or show yourself. Or, you have emerged too early and are vulnerable.",
        questions: ["Is it time to speak up?", "Have I shed my old shell?"]
      }
    }
  },
  {
    id: "m21",
    name: "The World",
    number: 21,
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m21.jpg",
    meta: {
      rws_name: "The World",
      thoth_name: "The Universe",
      marseille_name: "Le Monde",
      astrology: "Saturn",
      element: "Earth",
      hebrew_letter: "Tau"
    },
    meanings: {
      rws: {
        keywords: ["Completion", "wholeness", "travel", "success"],
        general: "The end of the journey; total integration.",
        light: "You have arrived. Celebrate your achievement. You are whole and complete. The cycle is finished; enjoy the moment before the new one begins.",
        shadow: "Incompletion. You are so close, but you keep delaying the final step. Or, you feel empty because you achieved the goal but lost yourself.",
        questions: ["What have I completed?", "Do I feel whole?"]
      },
      thoth: {
        keywords: ["Synthesis", "matter", "perfection", "delay"],
        general: "The Universe; the synthesis of all forces.",
        light: "The matter is settled. You have synthesized all lessons. Enjoy the perfection of this moment. Structure is complete.",
        shadow: "Inertia. The structure has become too rigid. Perfection can be a trap that prevents new growth. Delay.",
        questions: ["Is my world too small?", "What is the next level?"]
      },
      anima: {
        animal: "The Earth (Gaia)",
        keywords: ["Ecosystem", "interconnection", "habitat", "belonging"],
        general: "A complete, living world.",
        light: "You have found your niche. You are not separate from the world; you are a vital part of the ecosystem. Feel your connection to everything.",
        shadow: "Disconnection. You feel like an alien in your own life. Or, you are destroying your own habitat through neglect.",
        questions: ["Where do I belong?", "Am I caring for my world?"]
      }
    }
  },
  // ... (End of Major Arcana)

  // =================================================================
  // WANDS (Fire)
  // =================================================================
  {
    id: "w01",
    name: "Ace of Wands",
    number: 1,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w01.jpg",
    meta: {
      thoth_title: "Root of the Powers of Fire",
      marseille_name: "As de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Inspiration", "passion", "new project", "spark"],
        general: "A new spark of creativity or passion.",
        light: "Seize this moment of inspiration! Don't hesitate—start the project, say yes to the adventure. The energy is high.",
        shadow: "Delays or lack of motivation. The spark is there, but the wood is damp. Creative block or missed opportunity.",
        questions: ["What lights me up?", "What am I waiting to start?"]
      },
      thoth: {
        keywords: ["Force", "energy", "rush", "origin"],
        general: "The primordial energy of the Divine.",
        light: "This is a sudden, violent illumination. Use this rush of energy immediately before it burns out. Pure willpower.",
        shadow: "Destruction. Uncontrolled fire burns the house down. Energy without direction.",
        questions: ["How can I direct this energy?", "Am I burning out?"]
      },
      anima: {
        animal: "The Salamander",
        keywords: ["Ignition", "resilience", "spark", "regeneration"],
        general: "Born of fire; spirit of the flame.",
        light: "Ignite your passion. You have the resilience to survive the heat. Trust your energy source.",
        shadow: "Coldness. The fire has gone out. You need to find a new source of fuel.",
        questions: ["What fuels me?", "Is my fire healthy?"]
      }
    }
  },
  {
    id: "w02",
    name: "Two of Wands",
    number: 2,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w02.jpg",
    meta: {
      thoth_title: "Dominion",
      marseille_name: "Deux de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Planning", "future", "decisions", "discovery"],
        general: "Contemplating the world from a place of safety.",
        light: "You have the world in your hands, but you must make a decision. Step out of your comfort zone to expand your horizons. Plan your next move.",
        shadow: "Fear of the unknown. You are staying safe in the castle instead of exploring. Over-planning and under-doing.",
        questions: ["What is my next step?", "Am I playing it too safe?"]
      },
      thoth: {
        keywords: ["Dominion", "power", "boldness", "will"],
        general: "Fire in its highest form; Mars in Aries.",
        light: "Act with authority. You have the power and dominion over this situation. Be bold and assert your will.",
        shadow: "Tyranny. You are dominating others rather than leading them. Power trip.",
        questions: ["Am I in control?", "How am I using my power?"]
      },
      anima: {
        animal: "The Hawk",
        keywords: ["Vision", "perspective", "planning", "territory"],
        general: "Surveying the territory from high above.",
        light: "Use your vision. Before you expend energy, locate your goal from a distance. Plan your attack from a higher perspective.",
        shadow: "Blindness. You are acting without seeing the whole picture. Or, you are watching but never acting.",
        questions: ["What is the long view?", "What am I missing?"]
      }
    }
  },
  {
    id: "w03",
    name: "Three of Wands",
    number: 3,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w03.jpg",
    meta: {
      thoth_title: "Virtue",
      marseille_name: "Trois de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Expansion", "foresight", "progress", "waiting"],
        general: "Your ships have set sail; waiting for results.",
        light: "Expand your vision. Think big and look overseas or beyond your usual borders. Your patience will be rewarded as plans bear fruit.",
        shadow: "Obstacles and delays. Your ships are delayed. You need to adjust your expectations or your strategy.",
        questions: ["How can I expand my horizons?", "Am I ready for the results?"]
      },
      thoth: {
        keywords: ["Virtue", "integrity", "character", "strength"],
        general: "Sun in Aries; established strength.",
        light: "Assert yourself with integrity. Success comes from aligning your actions with your true character. Be virtuous.",
        shadow: "Hypocrisy. You are putting on a show of strength but lack inner integrity. Pride.",
        questions: ["Are my actions aligned with my values?", "Where is my strength coming from?"]
      },
      anima: {
        animal: "The Meerkat",
        keywords: ["Alertness", "community", "anticipation", "scanning"],
        general: "Standing tall to scan the horizon.",
        light: "Be on the lookout. Opportunities (and threats) are on the horizon. Stay alert and ready to move. Rely on your community.",
        shadow: "Paranoia. You are seeing threats everywhere. Relax your guard a little.",
        questions: ["What is on the horizon?", "Who is watching my back?"]
      }
    }
  },

  {
    id: "w04",
    name: "Four of Wands",
    number: 4,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w04.jpg",
    meta: {
      thoth_title: "Completion",
      marseille_name: "Quatre de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Celebration", "homecoming", "joy", "community"],
        general: "A happy milestone or celebration.",
        light: "Celebrate your achievements! It is time to rest and enjoy the harmony of your community or family. You have reached a safe haven.",
        shadow: "Instability at home. The celebration is cancelled or feels hollow. You don't feel welcome or safe.",
        questions: ["What is worth celebrating?", "Do I feel at home?"]
      },
      thoth: {
        keywords: ["Completion", "settlement", "order", "limit"],
        general: "Venus in Aries; a work finished.",
        light: "You have established order. Enjoy the completion of this phase. It is a perfect, closed circle.",
        shadow: "Limitation. The circle is too tight. You have completed the work, but now you are stuck in it. Move on.",
        questions: ["Is this finished?", "Am I stuck in a routine?"]
      },
      anima: {
        animal: "The Bowerbird",
        keywords: ["Display", "courtship", "creativity", "home"],
        general: "Building a beautiful structure to attract a mate.",
        light: "Create beauty in your home. Use your resources to build a space for joy and connection. Show off your creativity.",
        shadow: "Superficiality. It looks nice, but is it sturdy? Don't value appearance over substance.",
        questions: ["Is my environment beautiful?", "What am I trying to attract?"]
      }
    }
  },
  {
    id: "w05",
    name: "Five of Wands",
    number: 5,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w05.jpg",
    meta: {
      thoth_title: "Strife",
      marseille_name: "Cinq de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Conflict", "competition", "hassle", "struggle"],
        general: "Competition and minor struggles.",
        light: "Don't take this conflict too personally. It's just noise and competition. Stand up for yourself, but try to find a productive resolution.",
        shadow: "Avoiding conflict. You are letting others walk all over you to keep the peace. Or, the conflict is escalating into violence.",
        questions: ["Is this fight worth it?", "How can I compete fairly?"]
      },
      thoth: {
        keywords: ["Strife", "agitation", "volcanic", "energy"],
        general: "Saturn in Leo; blocked energy.",
        light: "The pressure is building. Acknowledge the strife but do not let the agitation burn you out. Use the friction to create heat.",
        shadow: "Destructive anger. The volcano erupts. You are venting your frustration in harmful ways.",
        questions: ["What is blocking me?", "How can I release this pressure?"]
      },
      anima: {
        animal: "The Antelope",
        keywords: ["Sparring", "practice", "competition", "agility"],
        general: "Sparring to test strength.",
        light: "This is a healthy test of your vitality. Spar with your competitors to hone your skills. It's practice, not war.",
        shadow: "Injury. You are taking the game too seriously and hurting yourself or others.",
        questions: ["Am I practicing or fighting?", "Who challenges me?"]
      }
    }
  },
  {
    id: "w06",
    name: "Six of Wands",
    number: 6,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w06.jpg",
    meta: {
      thoth_title: "Victory",
      marseille_name: "Six de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Victory", "success", "recognition", "pride"],
        general: "Public success and validation.",
        light: "Accept the praise. You have earned this victory. Allow yourself to feel proud and be seen. You are leading the parade.",
        shadow: "Egotism. You are letting success go to your head. Or, you are falling from grace because you became arrogant.",
        questions: ["Can I accept success?", "Is my ego in check?"]
      },
      thoth: {
        keywords: ["Victory", "breakthrough", "clarity", "balance"],
        general: "Jupiter in Leo; energy balanced.",
        light: "Success is yours. Move forward with optimism and clarity. You have won the battle.",
        shadow: "Insolence. Winning has made you cruel or dismissive of the losers.",
        questions: ["How do I handle winning?", "What is the next conquest?"]
      },
      anima: {
        animal: "The Peacock",
        keywords: ["Display", "confidence", "beauty", "visibility"],
        general: "Displaying feathers to be seen.",
        light: "Don't hide your light. Display your success and let yourself be seen. Confidence is your greatest asset right now.",
        shadow: "Vanity. You are all show and no substance. Don't get distracted by your own reflection.",
        questions: ["Am I hiding?", "Is this authentic or just a display?"]
      }
    }
  },
  {
    id: "w07",
    name: "Seven of Wands",
    number: 7,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w07.jpg",
    meta: {
      thoth_title: "Valour",
      marseille_name: "Sept de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Defense", "challenge", "perseverance", "ground"],
        general: "Defending your high ground against opposition.",
        light: "Stand your ground. You have the advantage, even if it feels like everyone is against you. Do not back down.",
        shadow: "Overwhelmed. You are fighting a losing battle. Or, you are being defensive when you should be listening.",
        questions: ["What am I defending?", "Is this hill worth dying on?"]
      },
      thoth: {
        keywords: ["Valour", "courage", "obstacles", "fight"],
        general: "Mars in Leo; fighting against odds.",
        light: "This requires fierce courage. The fight is difficult, but your valour will carry you through. Be a warrior.",
        shadow: "Hesitation. You are wavering in the face of the enemy. Doubt is fatal here.",
        questions: ["Where is my courage?", "Am I fighting alone?"]
      },
      anima: {
        animal: "The Badger",
        keywords: ["Tenacity", "ferocity", "defense", "grit"],
        general: "Small but ferocious when cornered.",
        light: "Size doesn't matter; tenacity does. Defend your position with ferocity if necessary. Don't let them bully you.",
        shadow: "Aggression. You are attacking everyone, even your friends. Calm down.",
        questions: ["Am I being tenacious or stubborn?", "Who is threatening me?"]
      }
    }
  },
  {
    id: "w08",
    name: "Eight of Wands",
    number: 8,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w08.jpg",
    meta: {
      thoth_title: "Swiftness",
      marseille_name: "Huit de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Speed", "action", "news", "movement"],
        general: "Rapid change and incoming messages.",
        light: "Move fast! Strike while the iron is hot. There is no time for hesitation; go with the flow of the rapid energy.",
        shadow: "Chaos and delays. Things are moving too fast to control. Or, the news you receive is stressful.",
        questions: ["Am I moving fast enough?", "What message is coming?"]
      },
      thoth: {
        keywords: ["Swiftness", "electricity", "light", "communication"],
        general: "Mercury in Sagittarius; electric energy.",
        light: "Thought turning into electric energy. Communicate clearly and quickly. The universe is restoring light and flow.",
        shadow: "Scattered energy. You are shooting arrows in every direction but hitting nothing.",
        questions: ["Is my aim true?", "Am I communicating clearly?"]
      },
      anima: {
        animal: "The Cheetah",
        keywords: ["Speed", "focus", "sprint", "acceleration"],
        general: "The fastest land animal in a sprint.",
        light: "The time for planning is over. Focus on your target and accelerate. A short burst of intense energy will secure the prize.",
        shadow: "Burnout. You can't sprint a marathon. If you don't catch it now, you'll have to rest.",
        questions: ["What is the target?", "Do I have the energy for this sprint?"]
      }
    }
  },
  {
    id: "w09",
    name: "Nine of Wands",
    number: 9,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w09.jpg",
    meta: {
      thoth_title: "Strength",
      marseille_name: "Neuf de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Resilience", "persistence", "last stand", "wary"],
        general: "Wounded but still standing.",
        light: "You are tired, but you are almost there. Protect your boundaries and summon your strength for one last push. You can do this.",
        shadow: "Paranoia and exhaustion. You are seeing enemies where there are none. You are too defensive to let help in.",
        questions: ["Can I keep going?", "Who can I trust?"]
      },
      thoth: {
        keywords: ["Strength", "stability", "recovery", "power"],
        general: "Sun in Sagittarius; deep reserves.",
        light: "Deep subconscious strength. Your stability cannot be shaken. Rely on your deep reserves of energy to recover.",
        shadow: "Rigidity. You are strong but brittle. You refuse to bend, so you might break.",
        questions: ["What are my reserves?", "Am I being too defensive?"]
      },
      anima: {
        animal: "The Porcupine",
        keywords: ["Boundaries", "protection", "untouchable", "defense"],
        general: "Passive but effective defense.",
        light: "Establish absolute boundaries. You don't need to fight; just make it clear that you are protected. Don't let them touch you.",
        shadow: "Isolation. Your quills are keeping everyone away, even those who love you. Lower your guard when safe.",
        questions: ["Are my boundaries clear?", "Am I pushing love away?"]
      }
    }
  },
  {
    id: "w10",
    name: "Ten of Wands",
    number: 10,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w10.jpg",
    meta: {
      thoth_title: "Oppression",
      marseille_name: "Dix de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Burden", "responsibility", "stress", "overload"],
        general: "Carrying a heavy load alone.",
        light: "You have taken on too much. It is time to delegate or put the burden down. Success shouldn't break your back.",
        shadow: "Collapse. You are crushed by the weight of your own ambition. Burnout is imminent.",
        questions: ["What can I put down?", "Why am I carrying this?"]
      },
      thoth: {
        keywords: ["Oppression", "cruelty", "force", "heaviness"],
        general: "Saturn in Sagittarius; fire extinguished.",
        light: "Acknowledge the oppression. You are being crushed by dull, heavy energy. You must rebel or be destroyed.",
        shadow: "Malice. You are oppressing others or being cruel because you feel trapped.",
        questions: ["What is oppressing me?", "Am I oppressing myself?"]
      },
      anima: {
        animal: "The Leafcutter Ant",
        keywords: ["Labor", "duty", "strength", "load"],
        general: "Carrying many times its own weight.",
        light: "Your work is impressive, but the load is overwhelming. Ensure you are supported by your community so you don't collapse. Do your part.",
        shadow: "Slavery. You are working blindly for a system that doesn't care about you. Look up.",
        questions: ["Is this my load to carry?", "Where is the rest of the colony?"]
      }
    }
  },
  {
    id: "w11",
    name: "Page of Wands",
    number: 11,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w11.jpg",
    meta: {
      rws_name: "Page of Wands",
      thoth_name: "Princess of Wands",
      marseille_name: "Valet de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Enthusiasm", "discovery", "messenger", "free spirit"],
        general: "A messenger bringing creative news.",
        light: "Be curious! Explore new ideas with child-like enthusiasm. Don't worry about the outcome, just enjoy the spark.",
        shadow: "Immaturity and lack of focus. You start many things but finish nothing. Or, bad news regarding a project.",
        questions: ["What am I excited about?", "Can I stay focused?"]
      },
      thoth: {
        keywords: ["Brilliance", "daring", "impulse", "beauty"],
        general: "The Princess of Wands; fuel for fire.",
        light: "Be brilliant and daring. Dance in the flame of your own potential. You are the fuel for the fire.",
        shadow: "Shallowness. You are all flash and no heat. A sudden flare that dies quickly.",
        questions: ["What inspires me?", "Am I being superficial?"]
      },
      anima: {
        animal: "The Lizard",
        keywords: ["Quickness", "heat", "regeneration", "curiosity"],
        general: "Darting quickly across warm rocks.",
        light: "Move quickly and follow the heat. If you fail, you can regenerate (like a tail). Take a small risk.",
        shadow: "Flightiness. You are running away at the first sign of a shadow. Stand still.",
        questions: ["What attracts me?", "Am I too flighty?"]
      }
    }
  },
  {
    id: "w12",
    name: "Knight of Wands",
    number: 12,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w12.jpg",
    meta: {
      rws_name: "Knight of Wands",
      thoth_name: "Prince of Wands",
      marseille_name: "Cavalier de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Action", "adventure", "passion", "impulsive"],
        general: "Action personified; moving fast.",
        light: "Go for it! Be bold and adventurous. But be careful not to be reckless; looking before you leap is still good advice.",
        shadow: "Recklessness and anger. You are rushing into disaster. Or, you are being aggressive and starting fights.",
        questions: ["Where am I rushing to?", "Is my passion constructive?"]
      },
      thoth: {
        keywords: ["Strength", "endurance", "noble", "generous"],
        general: "The Prince of Wands; Air of Fire.",
        light: "Expand your energy generously. Be noble in your pursuits. You have the strength to endure the heat.",
        shadow: "Cruelty. Your passion has become domination. You are burning those around you.",
        questions: ["Am I being generous?", "Is my fire hurting others?"]
      },
      anima: {
        animal: "The Mustang",
        keywords: ["Wildness", "freedom", "untamed", "spirit"],
        general: "A wild horse galloping freely.",
        light: "Refuse to be saddled. Trust your wild spirit and run towards what makes you feel free. Freedom is your priority.",
        shadow: "Uncontrollable. You are running blind and might go off a cliff. You need some direction.",
        questions: ["What makes me feel free?", "Do I need reins?"]
      }
    }
  },
  {
    id: "w13",
    name: "Queen of Wands",
    number: 13,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w13.jpg",
    meta: {
      rws_name: "Queen of Wands",
      thoth_name: "Queen of Wands",
      marseille_name: "Reyne de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Confidence", "warmth", "determination", "social"],
        general: "The charismatic leader; the witch.",
        light: "Own the room. Radiate confidence and warmth. You have the power to attract exactly what you want. Be the life of the party.",
        shadow: "Jealousy and insecurity. You are demanding attention because you feel small. Or, you are manipulating others with your charm.",
        questions: ["Do I believe in myself?", "Am I seeking validation?"]
      },
      thoth: {
        keywords: ["Magnetism", "adaptability", "persistence", "memory"],
        general: "Water of Fire; wearing the leopard skin.",
        light: "Be adaptable and persistent. Your magnetism is your tool; use it wisely to transform the situation.",
        shadow: "Vengeance. You are holding a grudge. Do not use your memory to keep score.",
        questions: ["What attracts others to me?", "Can I let go of the past?"]
      },
      anima: {
        animal: "The Lioness",
        keywords: ["Fierce", "mother", "hunter", "pride"],
        general: "The primary hunter and protector.",
        light: "You are a queen. Hunt for what you want with fierceness, and protect your pride with warmth. Balance power with care.",
        shadow: "Over-protective. You are mauling anyone who gets close. Or, you are doing all the work for the lazy males.",
        questions: ["Who am I protecting?", "Am I hunting effectively?"]
      }
    }
  },
  {
    id: "w14",
    name: "King of Wands",
    number: 14,
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w14.jpg",
    meta: {
      rws_name: "King of Wands",
      thoth_name: "Knight of Wands",
      marseille_name: "Roy de Bâton"
    },
    meanings: {
      rws: {
        keywords: ["Vision", "leadership", "entrepreneur", "honor"],
        general: "The visionary leader; big picture.",
        light: "Take charge. Look at the big picture and lead with honor. Inspire others to follow your vision. You are the authority.",
        shadow: "Impulsive tyrant. You are bossing people around without a plan. Or, you are setting high standards you don't meet yourself.",
        questions: ["What is my vision?", "Am I leading by example?"]
      },
      thoth: {
        keywords: ["Lightning", "impulse", "violent", "energy"],
        general: "The Knight of Wands (Thoth); Fire of Fire.",
        light: "Strike like lightning. Your energy is explosive but short-lived. Make your impact now. Be a revolutionary.",
        shadow: "Destruction. You are a flash in the pan, leaving only smoke behind. Violence.",
        questions: ["What impact will I have?", "Am I too volatile?"]
      },
      anima: {
        animal: "The Coyote",
        keywords: ["Trickster", "adaptability", "survival", "clever"],
        general: "The Trickster King; surviving against odds.",
        light: "Lead through adaptability and wit. You don't need to roar to be the boss; sometimes you just need to be smarter than the rest.",
        shadow: "Deceit. You are tricking people for your own amusement. Don't be too clever for your own good.",
        questions: ["How can I outsmart this?", "Am I being honest?"]
      }
    }
  },

  // =================================================================
  // CUPS (Water)
  // =================================================================
  {
    id: "c01",
    name: "Ace of Cups",
    number: 1,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c01.jpg",
    meta: {
      thoth_title: "Root of the Powers of Water",
      marseille_name: "As de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Love", "new feelings", "intuition", "overflowing"],
        general: "Overflowing emotion and new love.",
        light: "Open your heart. Allow yourself to feel deeply. This is a new beginning for love, creativity, or spirituality.",
        shadow: "Blocked emotions. You are refusing the cup. Or, you are emotionally unstable and spilling everywhere.",
        questions: ["Is my heart open?", "What am I feeling?"]
      },
      thoth: {
        keywords: ["Fertility", "beauty", "pleasure", "passive"],
        general: "The Holy Grail; the receptive vessel.",
        light: "Accept the gift of fertility and beauty. Let the divine love flow through you. Be receptive.",
        shadow: "Emptiness. The cup is dry. You are giving too much and not receiving.",
        questions: ["Am I ready to receive?", "What fills my cup?"]
      },
      anima: {
        animal: "The Lotus",
        keywords: ["Blooming", "purity", "rising", "opening"],
        general: "Rising from the mud to bloom.",
        light: "Open your heart chakra. Like the lotus, rise above the mud and allow your emotions to blossom purely.",
        shadow: "Stuck in the mud. You are letting the heavy environment stop you from opening.",
        questions: ["Can I rise above this?", "Am I ready to bloom?"]
      }
    }
  },
  {
    id: "c02",
    name: "Two of Cups",
    number: 2,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c02.jpg",
    meta: {
      thoth_title: "Love",
      marseille_name: "Deux de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Partnership", "unity", "romance", "connection"],
        general: "A deep partnership of equals.",
        light: "Connect with others. Seek harmony and mutual respect in your relationships. A union is favored.",
        shadow: "Disharmony. The connection is broken or unbalanced. Miscommunication.",
        questions: ["Are we equals?", "Do I feel connected?"]
      },
      thoth: {
        keywords: ["Love", "harmony", "marriage", "reflection"],
        general: "Venus in Cancer; the perfect reflection.",
        light: "Surrender to the harmony of the union. Love is the law. See yourself in the other.",
        shadow: "Codependency. You are losing yourself in the reflection. Illusion.",
        questions: ["What do I see in them?", "Is this love healthy?"]
      },
      anima: {
        animal: "The Seahorse",
        keywords: ["Bonding", "dance", "fidelity", "grace"],
        general: "Mating for life; dancing together.",
        light: "Engage in the dance of partnership. Fidelity and deep bonding will provide the stability you need.",
        shadow: "Drifting apart. The current is pulling you away from your partner. Hold on.",
        questions: ["Who is my partner?", "Are we in sync?"]
      }
    }
  },
  {
    id: "c03",
    name: "Three of Cups",
    number: 3,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c03.jpg",
    meta: {
      thoth_title: "Abundance",
      marseille_name: "Trois de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Friendship", "community", "celebration", "joy"],
        general: "Joy shared with community.",
        light: "Go out and celebrate! Lean on your friends for support. Joy is multiplied when it is shared.",
        shadow: "Gossip and exclusion. You are being left out. Or, the party has gone on too long and become toxic.",
        questions: ["Who supports me?", "How can I share my joy?"]
      },
      thoth: {
        keywords: ["Abundance", "fertility", "treasure", "rare"],
        general: "Mercury in Cancer; hidden treasures found.",
        light: "You have found something rare and beautiful. Enjoy the abundance and fruition of your love.",
        shadow: "Hoarding. You are keeping the good feelings to yourself. Share the wealth.",
        questions: ["What is my treasure?", "Am I sharing enough?"]
      },
      anima: {
        animal: "The Dolphin",
        keywords: ["Play", "pod", "communication", "fun"],
        general: "Playing in the waves with the pod.",
        light: "Don't be so serious. Find your 'pod' and play. Social connection is vital for your emotional health.",
        shadow: "Superficiality. You are just playing around and avoiding deep feelings. Or, you are following the crowd blindly.",
        questions: ["Am I having fun?", "Is my social circle healthy?"]
      }
    }
  },
  {
    id: "c04",
    name: "Four of Cups",
    number: 4,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c04.jpg",
    meta: {
      thoth_title: "Luxury",
      marseille_name: "Quatre de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Apathy", "boredom", "meditation", "refusal"],
        general: "Ignoring a gift due to boredom/introspection.",
        light: "Go within. It is okay to say no to new offers if you need to process what you already have. Meditation.",
        shadow: "Missing out. You are so focused on what you don't have (or your own sadness) that you miss the gift right in front of you.",
        questions: ["What am I ignoring?", "Why am I bored?"]
      },
      thoth: {
        keywords: ["Luxury", "decay", "habit", "possessiveness"],
        general: "Moon in Cancer; pleasure becoming a habit.",
        light: "You are secure and comfortable. Enjoy the luxury, but don't fall asleep.",
        shadow: "Rot. You are rotting in your own luxury. Shake up your routine before your emotions decay completely.",
        questions: ["Am I too comfortable?", "Has pleasure become a habit?"]
      },
      anima: {
        animal: "The Hermit Crab",
        keywords: ["Withdrawal", "shell", "outgrowing", "safety"],
        general: "Hiding inside a shell that might be too small.",
        light: "You are safe, but you are stuck. It is time to leave your shell, even if it makes you feel vulnerable, so you can grow.",
        shadow: "Refusal to grow. You are squeezing yourself into a life that no longer fits.",
        questions: ["Does this shell fit?", "Am I hiding from growth?"]
      }
    }
  },
  {
    id: "c05",
    name: "Five of Cups",
    number: 5,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c05.jpg",
    meta: {
      thoth_title: "Disappointment",
      marseille_name: "Cinq de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Grief", "loss", "regret", "sadness"],
        general: "Crying over spilled milk.",
        light: "It is okay to grieve. Process the loss. But don't forget the cups that are still standing. Turn around and see what remains.",
        shadow: "Wallowing. You are stuck in the past, refusing to move on. You are ignoring the good that is still in your life.",
        questions: ["What have I lost?", "What still remains?"]
      },
      thoth: {
        keywords: ["Disappointment", "decay", "worry", "bitterness"],
        general: "Mars in Scorpio; stagnant water.",
        light: "Face the disappointment head on. Accept that things did not go as planned. It is a necessary clearing.",
        shadow: "Poison. Dwelling on this bitterness poisons your spirit. Drain the swamp.",
        questions: ["Why am I bitter?", "Can I let this go?"]
      },
      anima: {
        animal: "The Vulture",
        keywords: ["Scavenging", "cleanup", "cycle", "recycling"],
        general: "Cleaning up the dead to allow for life.",
        light: "Nothing is truly lost, only transformed. Accept the grief as part of the natural cycle and look for the nourishment in the hardship.",
        shadow: "Picking at bones. You are obsessing over a dead situation. Let it rest.",
        questions: ["What needs to be cleaned up?", "Can I find value in this loss?"]
      }
    }
  },
  {
    id: "c06",
    name: "Six of Cups",
    number: 6,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c06.jpg",
    meta: {
      thoth_title: "Pleasure",
      marseille_name: "Six de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Nostalgia", "memories", "childhood", "innocence"],
        general: "Sharing memories of the past.",
        light: "Reconnect with your inner child. Find joy in simple things. The past holds a key to your present happiness.",
        shadow: "Stuck in the past. You are idealizing history and refusing to live in the present. Naivety.",
        questions: ["What memory brings me joy?", "Am I living in the past?"]
      },
      thoth: {
        keywords: ["Pleasure", "joy", "lust", "fulfillment"],
        general: "Sun in Scorpio; deep emotional fulfillment.",
        light: "Enjoy this moment of pleasure. It may not last forever, but it is real and healing. Sexual and emotional happiness.",
        shadow: "Hedonism. Pursuing pleasure to escape reality.",
        questions: ["Am I enjoying myself?", "Is this pleasure healthy?"]
      },
      anima: {
        animal: "The Rabbit",
        keywords: ["Gentleness", "play", "safety", "softness"],
        general: "Soft, gentle creatures playing.",
        light: "Let your guard down. Be gentle with yourself and others. It is safe to be innocent and playful right now.",
        shadow: "Fearfulness. You are too timid to act. Or, you are being childish.",
        questions: ["Can I be soft?", "What makes me feel safe?"]
      }
    }
  },
  {
    id: "c07",
    name: "Seven of Cups",
    number: 7,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c07.jpg",
    meta: {
      thoth_title: "Debauch",
      marseille_name: "Sept de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Choices", "illusion", "fantasy", "wishful thinking"],
        general: "Too many choices, some illusory.",
        light: "Dream big! Use your imagination to visualize what you want. But remember, you eventually have to pick one cup.",
        shadow: "Delusion. You are lost in a fantasy world. None of the options are real. Paralysis by analysis.",
        questions: ["Which option is real?", "Am I dreaming or doing?"]
      },
      thoth: {
        keywords: ["Debauch", "addiction", "delusion", "poison"],
        general: "Venus in Scorpio; emotional swamp.",
        light: "Explore your desires, even the dark ones. Understanding your cravings leads to self-knowledge.",
        shadow: "Intoxication. You are drunk on fantasy. Sober up before you drown.",
        questions: ["What am I intoxicated by?", "Is this desire healthy?"]
      },
      anima: {
        animal: "The Chameleon",
        keywords: ["Adaptation", "camouflage", "change", "illusion"],
        general: "Changing colors to fit the background.",
        light: "Be adaptable. Change your approach to fit the situation. Explore different versions of yourself.",
        shadow: "Fake. You are showing your true colors, or just adapting to please others? Don't lose yourself in the illusion.",
        questions: ["Who is the real me?", "Am I blending in too much?"]
      }
    }
  },
  {
    id: "c08",
    name: "Eight of Cups",
    number: 8,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c08.jpg",
    meta: {
      thoth_title: "Indolence",
      marseille_name: "Huit de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Walking away", "abandonment", "seeking", "withdrawal"],
        general: "Leaving behind success to find meaning.",
        light: "Walk away. This situation no longer serves you emotionally. Seek a deeper meaning elsewhere.",
        shadow: "Fear of commitment. You run away whenever things get real. Or, you are staying in a bad situation out of fear.",
        questions: ["Why am I leaving?", "What am I looking for?"]
      },
      thoth: {
        keywords: ["Indolence", "stagnation", "swamp", "hopelessness"],
        general: "Saturn in Pisces; emotional exhaustion.",
        light: "Rest. You are emotionally exhausted. Accept that you cannot do anything more here.",
        shadow: "Depression. You are stuck in a bog of indolence. Only a radical change can pull you out.",
        questions: ["Am I stuck?", "Where is my energy going?"]
      },
      anima: {
        animal: "The Salmon",
        keywords: ["Migration", "upstream", "instinct", "return"],
        general: "Swimming upstream against the current.",
        light: "The journey ahead is difficult and goes against the current, but your spirit demands it. Follow your instinct upstream to your source.",
        shadow: "Exhaustion. The current is too strong. You are fighting a battle you cannot win.",
        questions: ["Is this path worth the struggle?", "Where is my home?"]
      }
    }
  },
  {
    id: "c09",
    name: "Nine of Cups",
    number: 9,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c09.jpg",
    meta: {
      thoth_title: "Happiness",
      marseille_name: "Neuf de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Satisfaction", "wishes fulfilled", "luxury", "pride"],
        general: "The 'Wish Card'. Emotional satisfaction.",
        light: "Make a wish! You are in a position of emotional strength. Enjoy the luxury and be grateful. Success is yours.",
        shadow: "Smugness and greed. You are happy, but you are ignoring the needs of others. Or, you got what you wanted and it didn't make you happy.",
        questions: ["What is my wish?", "Am I grateful?"]
      },
      thoth: {
        keywords: ["Happiness", "joy", "bliss", "perfection"],
        general: "Jupiter in Pisces; deep spiritual joy.",
        light: "Your emotional balance is being restored. Bliss is available to you. A perfect moment of happiness.",
        shadow: "Complacency. You are so happy you have stopped growing.",
        questions: ["Can I accept this happiness?", "Is this joy lasting?"]
      },
      anima: {
        animal: "The Bear (Feasting)",
        keywords: ["Satiety", "fullness", "abundance", "rest"],
        general: "Stuffed full of food before winter.",
        light: "You have enough. Feel the physical and emotional satisfaction of abundance. Rest and digest your good fortune.",
        shadow: "Gluttony. You are consuming more than you need.",
        questions: ["Have I had enough?", "What am I hungry for?"]
      }
    }
  },
  {
    id: "c10",
    name: "Ten of Cups",
    number: 10,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c10.jpg",
    meta: {
      thoth_title: "Satiety",
      marseille_name: "Dix de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Harmony", "family", "happy ending", "alignment"],
        general: "Ultimate domestic bliss.",
        light: "Cherish your family and connections. You are aligned with your values and surrounded by love. A happy ending.",
        shadow: "Disharmony. The family picture is fake. You feel disconnected despite being surrounded by people.",
        questions: ["Where is my happy place?", "Is my happiness authentic?"]
      },
      thoth: {
        keywords: ["Satiety", "boredom", "stagnation", "fullness"],
        general: "Mars in Pisces; suppressed emotion.",
        light: "You have reached the end of the emotional cycle. Enjoy the fullness.",
        shadow: "Boredom. Perfection is boring. You have everything you want, so now what? Stagnation.",
        questions: ["What comes after happiness?", "Am I bored?"]
      },
      anima: {
        animal: "The Penguin Family",
        keywords: ["Unity", "warmth", "survival", "togetherness"],
        general: "Huddling together against the cold.",
        light: "Stick together. Your strength and warmth come from your unit. Protect the ones you love.",
        shadow: "Codependency. You cannot survive alone. You are huddling out of fear, not love.",
        questions: ["Who keeps me warm?", "Can I stand alone?"]
      }
    }
  },
  {
    id: "c11",
    name: "Page of Cups",
    number: 11,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c11.jpg",
    meta: {
      rws_name: "Page of Cups",
      thoth_name: "Princess of Cups",
      marseille_name: "Valet de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Creativity", "intuition", "message", "sweetness"],
        general: "A message from the heart.",
        light: "Be open to surprises. Trust your intuition and don't be afraid to show your sensitive side. A message of love is coming.",
        shadow: "Immaturity. You are being overly sensitive or moody. Emotional drama.",
        questions: ["What is my heart saying?", "Am I being too sensitive?"]
      },
      thoth: {
        keywords: ["Romance", "tenderness", "dreaminess", "imagination"],
        general: "The Princess of Cups; Earth of Water.",
        light: "Be tender and romantic. Allow yourself to dream. You have a poetic soul.",
        shadow: "Illusion. You are living in a fairy tale. Wake up.",
        questions: ["What am I dreaming of?", "Is this real?"]
      },
      anima: {
        animal: "The Otter",
        keywords: ["Play", "curiosity", "joy", "exploration"],
        general: "Playing with stones in the water.",
        light: "Approach your feelings with a sense of play. Creativity doesn't have to be serious work; it can be a joyful game.",
        shadow: "Distraction. You are playing when you should be working.",
        questions: ["Can I be playful?", "What am I exploring?"]
      }
    }
  },
  {
    id: "c12",
    name: "Knight of Cups",
    number: 12,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c12.jpg",
    meta: {
      rws_name: "Knight of Cups",
      thoth_name: "Prince of Cups",
      marseille_name: "Cavalier de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Romance", "charm", "proposal", "idealist"],
        general: "The romantic dreamer on a quest.",
        light: "Follow your heart. Offer your cup to someone. Romance and artistic pursuits are favored.",
        shadow: "Unrealistic. You are in love with love, not the person. Moodiness and deception.",
        questions: ["What is my quest?", "Am I being realistic?"]
      },
      thoth: {
        keywords: ["Subtlety", "intensity", "secretive", "desire"],
        general: "The Prince of Cups; Air of Water.",
        light: "Be subtle. Your calm surface hides intense depths. Use your emotional intelligence to navigate this situation.",
        shadow: "Craftiness. You are manipulative and secretive. Don't use your charm to hurt others.",
        questions: ["What are my hidden motives?", "Am I being subtle or sly?"]
      },
      anima: {
        animal: "The Swan",
        keywords: ["Grace", "beauty", "surface", "effort"],
        general: "Gliding gracefully while paddling hard underneath.",
        light: "Move with grace. Pursue beauty and romance, but remember to keep the hard work (paddling feet) beneath the surface.",
        shadow: "Vanity. You care more about how things look than how they feel.",
        questions: ["Am I graceful?", "What lies beneath the surface?"]
      }
    }
  },
  {
    id: "c13",
    name: "Queen of Cups",
    number: 13,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c13.jpg",
    meta: {
      rws_name: "Queen of Cups",
      thoth_name: "Queen of Cups",
      marseille_name: "Reyne de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Empathy", "intuition", "care", "psychic"],
        general: "Deep emotional depth and empathy.",
        light: "Trust your feelings. Be compassionate to yourself and others. You are the emotional anchor in this storm.",
        shadow: "Insecurity. You are absorbing everyone else's emotions. Martyrdom.",
        questions: ["How do I feel?", "Am I caring for myself?"]
      },
      thoth: {
        keywords: ["Reflection", "dreamy", "mystery", "cloudy"],
        general: "Water of Water; the mirror.",
        light: "Be a mirror. Reflect the truth back to others, but keep your own depths mysterious.",
        shadow: "Distortion. You are warping the truth based on your moods. Unreliability.",
        questions: ["What am I reflecting?", "Is my vision clear?"]
      },
      anima: {
        animal: "The Turtle",
        keywords: ["Protection", "patience", "ancient", "home"],
        general: "Carrying home on your back.",
        light: "You are safe within your own shell. Move slowly and trust your ancient, emotional wisdom.",
        shadow: "Hiding. You have retreated into your shell and won't come out.",
        questions: ["Am I safe?", "Why am I hiding?"]
      }
    }
  },
  {
    id: "c14",
    name: "King of Cups",
    number: 14,
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c14.jpg",
    meta: {
      rws_name: "King of Cups",
      thoth_name: "Knight of Cups",
      marseille_name: "Roy de Coupe"
    },
    meanings: {
      rws: {
        keywords: ["Balance", "diplomacy", "control", "wisdom"],
        general: "Mastery of emotions.",
        light: "Balance your heart and head. Be a diplomatic leader. Do not let your emotions rule you; rule them.",
        shadow: "Manipulation. You are using your emotional knowledge to control others. Gaslighting.",
        questions: ["Am I in control of my feelings?", "Am I being fair?"]
      },
      thoth: {
        keywords: ["Grace", "poetic", "amiable", "winged"],
        general: "The Knight of Cups (Thoth); Fire of Water.",
        light: "Be amiable and graceful. Lift others up with your poetic spirit. You have wings.",
        shadow: "Weakness. You are too nice and lack substance. Flakiness.",
        questions: ["Can I fly?", "Am I too passive?"]
      },
      anima: {
        animal: "The Blue Whale",
        keywords: ["Depth", "gentleness", "power", "communication"],
        general: "The gentle giant of the deep.",
        light: "You have immense power, but you do not need to force it. Be a calm, stabilizing force in the deep water. Sing your song.",
        shadow: "Overwhelmed. The pressure of the deep is crushing you.",
        questions: ["How deep can I go?", "Is my voice being heard?"]
      }
    }
  },

  {
    id: "s01",
    name: "Ace of Swords",
    number: 1,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s01.jpg",
    meta: {
      thoth_title: "Root of the Powers of Air",
      marseille_name: "As de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Clarity", "truth", "breakthrough", "mental power"],
        general: "A sudden realization or idea.",
        light: "Cut through the confusion. Use your intellect to find the truth. A new perspective will solve the problem.",
        shadow: "Cruelty or confusion. You are using the truth as a weapon to hurt others. Or, your mind is clouded.",
        questions: ["What is the truth?", "What needs to be cut away?"]
      },
      thoth: {
        keywords: ["Conflict", "clarity", "focus", "invocation"],
        general: "Invoked force; the Sword of the Magus.",
        light: "Bring order to chaos. You must focus your mind completely to control this volatile energy.",
        shadow: "Destruction. The force is too strong and breaks the vessel.",
        questions: ["Is my mind focused?", "What am I invoking?"]
      },
      anima: {
        animal: "The Eagle",
        keywords: ["Vision", "perspective", "attack", "sky"],
        general: "Seeing from the highest point.",
        light: "Rise above the drama. From a higher perspective, the truth is clear. Focus your vision and strike.",
        shadow: "Detachmeant. You are too far removed from the situation to care.",
        questions: ["What do I see from here?", "Am I too detached?"]
      }
    }
  },
  {
    id: "s02",
    name: "Two of Swords",
    number: 2,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s02.jpg",
    meta: {
      thoth_title: "Peace",
      marseille_name: "Deux de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Stalemate", "indecision", "denial", "blocking"],
        general: "A truce; refusing to see.",
        light: "Make a decision. You are blindfolded by your own choice. Take off the blindfold and face the difficult choice.",
        shadow: "Confusion. You are paralyzed by fear of making the wrong choice. The stalemate continues.",
        questions: ["What am I refusing to see?", "Why can't I decide?"]
      },
      thoth: {
        keywords: ["Peace", "balance", "silence", "moon"],
        general: "Moon in Libra; nature restored.",
        light: "Seek peace and silence. Balance the opposing forces in your mind before acting. A meditative state.",
        shadow: "False peace. You are suppressing the conflict rather than resolving it.",
        questions: ["Is this peace real?", "Am I balanced?"]
      },
      anima: {
        animal: "The Opossum",
        keywords: ["Playing dead", "defense", "stillness", "waiting"],
        general: "Freezing as a defense mechanism.",
        light: "Your indecision is a defense mechanism. Playing dead can save you, but you can't stay there forever.",
        shadow: "Paralysis. You are so afraid that you have stopped living.",
        questions: ["Am I playing dead?", "Is it safe to move?"]
      }
    }
  },
  {
    id: "s03",
    name: "Three of Swords",
    number: 3,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s03.jpg",
    meta: {
      thoth_title: "Sorrow",
      marseille_name: "Trois de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Heartbreak", "sorrow", "grief", "pain"],
        general: "Emotional pain and separation.",
        light: "Feel the pain so you can heal. This heartbreak is releasing you from an illusion. Accept the sorrow.",
        shadow: "Suppression. You are refusing to feel the pain, so it festers. Or, you are wallowing in it.",
        questions: ["What hurts?", "Can I let it go?"]
      },
      thoth: {
        keywords: ["Sorrow", "melancholy", "darkness", "understanding"],
        general: "Saturn in Libra; the Great Sea.",
        light: "Wisdom often comes with sadness. Accept the melancholy as a sign of your deepening maturity.",
        shadow: "Despair. You are drowning in the sorrow. There is no light here.",
        questions: ["What is this pain teaching me?", "Am I drowning?"]
      },
      anima: {
        animal: "The Bleeding Heart",
        keywords: ["Wound", "healing", "nature", "growth"],
        general: "A flower that looks like a wounded heart.",
        light: "Pain is a natural biological process. Like a flower that must wither to seed, this sorrow is necessary for your next growth cycle.",
        shadow: "Infection. The wound is not healing. You need care.",
        questions: ["Is the wound healing?", "What will grow from this?"]
      }
    }
  },
  {
    id: "s04",
    name: "Four of Swords",
    number: 4,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s04.jpg",
    meta: {
      thoth_title: "Truce",
      marseille_name: "Quatre de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Rest", "recovery", "meditation", "pause"],
        general: "Retreating to heal the mind.",
        light: "Stop! You are burning out. You need to rest and recover your mental strength before you can fight again.",
        shadow: "Burnout. You refused to rest, and now you have collapsed. Or, you are resting too long and avoiding life.",
        questions: ["Am I tired?", "Do I need a break?"]
      },
      thoth: {
        keywords: ["Truce", "rest", "compromise", "convention"],
        general: "Jupiter in Libra; rest from strife.",
        light: "Call a truce. You don't need to win right now; you just need to stop the fighting and find a compromise.",
        shadow: "Appeasement. You are compromising your values just to keep the peace.",
        questions: ["Can we stop fighting?", "What is the compromise?"]
      },
      anima: {
        animal: "The Brown Bear",
        keywords: ["Hibernation", "cave", "sleep", "renewal"],
        general: "Sleeping through the winter.",
        light: "Retreat to your cave. Conserve your energy. This is not laziness; it is essential preparation for the spring.",
        shadow: "Isolation. You have been in the cave too long. Spring is here.",
        questions: ["Is it time to sleep?", "Am I hiding?"]
      }
    }
  },
  {
    id: "s05",
    name: "Five of Swords",
    number: 5,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s05.jpg",
    meta: {
      thoth_title: "Defeat",
      marseille_name: "Cinq de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Conflict", "defeat", "betrayal", "hollow victory"],
        general: "Winning at all costs.",
        light: "Choose your battles. Is winning worth the price of your integrity or relationships? It might be better to walk away.",
        shadow: "Malice. You won, but you lost your friends. Or, you are being bullied.",
        questions: ["Did I really win?", "Is this battle worth it?"]
      },
      thoth: {
        keywords: ["Defeat", "pacifism", "weakness", "treachery"],
        general: "Venus in Aquarius; intellect enfeebled.",
        light: "Admit defeat. Your current strategy is weak and will lead to treachery. Stop fighting a lost cause.",
        shadow: "Spite. You are being petty and vindictive in your loss.",
        questions: ["Can I accept defeat?", "Am I being petty?"]
      },
      anima: {
        animal: "The Cuckoo",
        keywords: ["Parasite", "deception", "survival", "cunning"],
        general: "Laying eggs in another bird's nest.",
        light: "Be careful of ruthless strategies. You may win the nest, but you are acting like a parasite. Check your ethics.",
        shadow: "Victimhood. You have been tricked. Someone is using you.",
        questions: ["Am I being used?", "Is this strategy ethical?"]
      }
    }
  },
  {
    id: "s06",
    name: "Six of Swords",
    number: 6,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s06.jpg",
    meta: {
      thoth_title: "Science",
      marseille_name: "Six de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Transition", "travel", "moving on", "recovery"],
        general: "Moving to calmer waters.",
        light: "Move on. The worst is behind you. You are transitioning to a calmer place, even if you carry some sadness.",
        shadow: "Baggage. You are taking your problems with you. You haven't let go of the past.",
        questions: ["What am I leaving behind?", "Where am I going?"]
      },
      thoth: {
        keywords: ["Science", "mind", "clarity", "objectivity"],
        general: "Mercury in Aquarius; balanced mind.",
        light: "Look at the situation scientifically. Remove your emotions and view the facts with total objectivity.",
        shadow: "Coldness. You are too clinical. You have lost the human element.",
        questions: ["What do the facts say?", "Am I being too cold?"]
      },
      anima: {
        animal: "The Butterfly",
        keywords: ["Migration", "flight", "change", "hope"],
        general: "Migrating thousands of miles.",
        light: "A gentle transition is necessary. Leave the harsh environment behind and trust the wind to carry you to safety.",
        shadow: "Drifting. You are just floating with no direction.",
        questions: ["Am I drifting or migrating?", "Is the wind with me?"]
      }
    }
  },
  {
    id: "s07",
    name: "Seven of Swords",
    number: 7,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s07.jpg",
    meta: {
      thoth_title: "Futility",
      marseille_name: "Sept de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Deception", "strategy", "stealth", "trickery"],
        general: "Getting away with it; sneaking.",
        light: "Be strategic. You cannot confront this head-on; you need to be clever and perhaps a bit secretive. Use your wits.",
        shadow: "Betrayal. You are being lied to. Or, your own lies are catching up with you.",
        questions: ["Am I being honest?", "What is the strategy?"]
      },
      thoth: {
        keywords: ["Futility", "instability", "cunning", "failure"],
        general: "Moon in Aquarius; unstable effort.",
        light: "Your cunning plans are futile. You are wasting energy on a strategy that is doomed to fail. Stop trying to trick the universe.",
        shadow: "Self-sabotage. You are tricking yourself.",
        questions: ["Is this working?", "Why am I trying so hard?"]
      },
      anima: {
        animal: "The Magpie",
        keywords: ["Thief", "shiny", "collection", "clever"],
        general: "Stealing shiny objects.",
        light: "Use your intelligence to get what you need, but be careful. Taking what isn't yours—or taking shortcuts—may come back to haunt you.",
        shadow: "Distraction. You are chasing shiny things instead of what matters.",
        questions: ["What am I chasing?", "Is it worth the risk?"]
      }
    }
  },
  {
    id: "s08",
    name: "Eight of Swords",
    number: 8,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s08.jpg",
    meta: {
      thoth_title: "Interference",
      marseille_name: "Huit de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Trapped", "restriction", "victim", "anxiety"],
        general: "Self-imposed prison.",
        light: "Open your eyes. You are not as trapped as you think. The restrictions are in your mind. You can walk away if you choose.",
        shadow: "Helplessness. You are waiting for a rescuer who isn't coming. You enjoy being the victim.",
        questions: ["Who tied me up?", "Can I free myself?"]
      },
      thoth: {
        keywords: ["Interference", "confusion", "noise", "clutter"],
        general: "Jupiter in Gemini; lack of focus.",
        light: "You are being interfered with by too many distractions. Cut out the noise so you can think clearly.",
        shadow: "Scattered mind. You can't focus on anything.",
        questions: ["What is distracting me?", "Can I focus?"]
      },
      anima: {
        animal: "The Fly in a Web",
        keywords: ["Struggle", "panic", "caught", "stillness"],
        general: "Caught in a spider's web.",
        light: "Stop struggling! The more you panic, the tighter the web becomes. Be still, calm your mind, and look for the loose thread.",
        shadow: "Fatalism. You have given up. The spider is coming.",
        questions: ["Am I making it worse?", "Can I stay calm?"]
      }
    }
  },
  {
    id: "s09",
    name: "Nine of Swords",
    number: 9,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s09.jpg",
    meta: {
      thoth_title: "Cruelty",
      marseille_name: "Neuf de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Anxiety", "nightmares", "worry", "guilt"],
        general: "The dark night of the soul; mental anguish.",
        light: "Your fear is worse than the reality. You are torturing yourself with 'what ifs'. Seek help and talk to someone to break the cycle of worry.",
        shadow: "Despair. You are drowning in your own negative thoughts. Shame.",
        questions: ["Is this worry real?", "How can I stop the thoughts?"]
      },
      thoth: {
        keywords: ["Cruelty", "agony", "malice", "pain"],
        general: "Mars in Gemini; intellect used for pain.",
        light: "Stop the mental cruelty. You are using your intellect to tear yourself apart. Be kind to yourself.",
        shadow: "Sadism. You are hurting others with your words. Or, you are being masochistic.",
        questions: ["Why am I hurting myself?", "Can I choose kindness?"]
      },
      anima: {
        animal: "The Bat",
        keywords: ["Darkness", "fear", "sonar", "guidance"],
        general: "Navigating in the pitch black.",
        light: "The darkness is scary, but you have the tools to navigate it. Use your 'echolocation'—send out signals and listen to the feedback.",
        shadow: "Blindness. You are flying blind and crashing into things.",
        questions: ["Where am I going?", "What is in the dark?"]
      }
    }
  },
  {
    id: "s10",
    name: "Ten of Swords",
    number: 10,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s10.jpg",
    meta: {
      thoth_title: "Ruin",
      marseille_name: "Dix de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Ruin", "rock bottom", "ending", "betrayal"],
        general: "A painful ending; it is over.",
        light: "It's over. Accept the ending, no matter how painful. The sun is rising in the distance; you have nowhere to go but up.",
        shadow: "Denial. You are trying to revive a corpse. Let it die.",
        questions: ["Can I accept the end?", "What comes next?"]
      },
      thoth: {
        keywords: ["Ruin", "destruction", "madness", "failure"],
        general: "Sun in Gemini; intellect overloaded.",
        light: "Your logic has failed. Let the structure collapse completely so you can rebuild from scratch. System failure.",
        shadow: "Insanity. Your mind has snapped. You need to ground yourself immediately.",
        questions: ["Why did it fail?", "Can I rebuild?"]
      },
      anima: {
        animal: "The Fallen Tree",
        keywords: ["Decay", "cycle", "nutrient", "death"],
        general: "A giant tree fallen in the forest.",
        light: "This looks like a tragedy, but it is nature's way. You are becoming the 'nurse log' for a new life. Allow the decay to feed your future.",
        shadow: "Rot. You are just decaying without purpose.",
        questions: ["What will grow from this?", "Is my ego dead?"]
      }
    }
  },
  {
    id: "s11",
    name: "Page of Swords",
    number: 11,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s11.jpg",
    meta: {
      rws_name: "Page of Swords",
      thoth_name: "Princess of Swords",
      marseille_name: "Valet de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Curiosity", "vigilance", "mental energy", "spy"],
        general: "A sharp, curious mind.",
        light: "Ask questions. Seek the truth. Be mentally sharp, but be careful not to gossip or speak without thinking.",
        shadow: "Gossip and paranoia. You are looking for trouble. Or, you are all talk and no action.",
        questions: ["What am I curious about?", "Am I talking too much?"]
      },
      thoth: {
        keywords: ["Dispute", "stern", "practical", "fixing"],
        general: "The Princess of Swords; Earth of Air.",
        light: "Be practical. Settle the dispute with firm, clear logic. Fix the problem.",
        shadow: "Aggression. You are starting fights to prove you are right.",
        questions: ["Do I need to be right?", "Can I fix this?"]
      },
      anima: {
        animal: "The Hummingbird",
        keywords: ["Speed", "energy", "darting", "precision"],
        general: "Moving fast and hovering.",
        light: "Stay agile. Move from idea to idea quickly. Do not stay in one place too long; cross-pollinate your projects.",
        shadow: "Burnout. You are moving too fast to drink the nectar.",
        questions: ["Am I moving too fast?", "What am I pollinating?"]
      }
    }
  },
  {
    id: "s12",
    name: "Knight of Swords",
    number: 12,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s12.jpg",
    meta: {
      rws_name: "Knight of Swords",
      thoth_name: "Prince of Swords",
      marseille_name: "Cavalier de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Action", "speed", "ambition", "impulsive"],
        general: "Charging into battle.",
        light: "Act now! Be direct and assertive. But watch where you are going—don't run over others in your haste. Intellectual ambition.",
        shadow: "Aggression. You are being rude and hasty. You are starting a war.",
        questions: ["Where am I charging?", "Am I being reckless?"]
      },
      thoth: {
        keywords: ["Intellect", "ideas", "unstable", "clever"],
        general: "The Prince of Swords; Air of Air.",
        light: "You are brilliant but unstable. Stick to one idea long enough to see it through. Pure mental energy.",
        shadow: "Manic. Your mind is racing and you can't stop.",
        questions: ["Can I focus?", "Is my idea grounded?"]
      },
      anima: {
        animal: "The Falcon",
        keywords: ["Dive", "focus", "hunter", "speed"],
        general: "Diving at terminal velocity.",
        light: "Focus on your target and dive. Use your intellect as a precision weapon.",
        shadow: "Missed target. You moved too fast and crashed.",
        questions: ["What is the target?", "Is my aim true?"]
      }
    }
  },
  {
    id: "s13",
    name: "Queen of Swords",
    number: 13,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s13.jpg",
    meta: {
      rws_name: "Queen of Swords",
      thoth_name: "Queen of Swords",
      marseille_name: "Reyne de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Independence", "clarity", "unbiased", "cold"],
        general: "Clear judgment and boundaries.",
        light: "Use your head, not your heart. Set clear boundaries and communicate directly. It is time to cut through the illusions.",
        shadow: "Cruelty and bitterness. You have closed your heart completely. You are judging others too harshly.",
        questions: ["Am I being fair?", "Have I closed my heart?"]
      },
      thoth: {
        keywords: ["Observer", "perceptive", "mask", "mind"],
        general: "Water of Air; the clouds.",
        light: "Remove your mask. See the situation as it really is. Your perception is your power.",
        shadow: "Deception. You are hiding behind your intellect.",
        questions: ["What am I observing?", "What is behind the mask?"]
      },
      anima: {
        animal: "The Snowy Owl",
        keywords: ["Solitary", "vision", "patience", "winter"],
        general: "Hunting alone in the snow.",
        light: "You may need to walk this path alone. Rely on your independence and your ability to survive in harsh conditions.",
        shadow: "Loneliness. You are cold and alone.",
        questions: ["Can I survive alone?", "Why is it so cold?"]
      }
    }
  },
  {
    id: "s14",
    name: "King of Swords",
    number: 14,
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s14.jpg",
    meta: {
      rws_name: "King of Swords",
      thoth_name: "Knight of Swords",
      marseille_name: "Roy de Épée"
    },
    meanings: {
      rws: {
        keywords: ["Truth", "authority", "intellect", "justice"],
        general: "Intellectual authority and law.",
        light: "Be objective. Make your decision based on facts and logic, not emotion. Speak with authority and truth.",
        shadow: "Tyrant. You are using your intelligence to manipulate and control. You lack compassion.",
        questions: ["What are the facts?", "Am I being just?"]
      },
      thoth: {
        keywords: ["Skill", "active", "fierce", "wind"],
        general: "The Knight of Swords (Thoth); Fire of Air.",
        light: "Attack the problem with fierce intelligence. Be skillful and precise. You are the storm.",
        shadow: "Destructive wind. You are blowing everything down.",
        questions: ["How can I solve this?", "Is my mind sharp?"]
      },
      anima: {
        animal: "The Raven",
        keywords: ["Puzzle", "intelligence", "tool use", "messenger"],
        general: "The smartest bird; a problem solver.",
        light: "Use your intelligence to solve the puzzle. Look at the problem from a higher vantage point to find the solution.",
        shadow: "Trickster. You are being too clever for your own good.",
        questions: ["What is the puzzle?", "What is the message?"]
      }
    }
  },

  // =================================================================
  // PENTACLES (Earth)
  // =================================================================
  {
    id: "p01",
    name: "Ace of Pentacles",
    number: 1,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p01.jpg",
    meta: {
      thoth_title: "Root of the Powers of Earth",
      marseille_name: "As de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Opportunity", "prosperity", "wealth", "health"],
        general: "A tangible gift or opportunity.",
        light: "Plant the seed! A tangible opportunity is in front of you. Invest your time and resources now for future rewards.",
        shadow: "Missed chance. You are too lazy or fearful to grab the opportunity. Or, greed.",
        questions: ["What seed am I planting?", "Is this a good investment?"]
      },
      thoth: {
        keywords: ["Matter", "nature", "crystal", "wealth"],
        general: "The root of Earth.",
        light: "Ground yourself. Connect with nature and the physical world. Material success is within reach.",
        shadow: "Materialism. You are obsessed with things and ignoring the spirit.",
        questions: ["Am I grounded?", "What do I value?"]
      },
      anima: {
        animal: "The Acorn",
        keywords: ["Potential", "seed", "oak", "future"],
        general: "A tiny seed holding a giant tree.",
        light: "Start small. This small investment or idea has the potential to grow into something massive and enduring.",
        shadow: "Dormancy. The seed never sprouts.",
        questions: ["Will this grow?", "Am I patient?"]
      }
    }
  },
  {
    id: "p02",
    name: "Two of Pentacles",
    number: 2,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p02.jpg",
    meta: {
      thoth_title: "Change",
      marseille_name: "Deux de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Balance", "juggling", "adaptability", "fun"],
        general: "Managing multiple priorities.",
        light: "Stay flexible. You can handle multiple demands if you keep moving. Balance is an active process, not a static state.",
        shadow: "Overwhelmed. You dropped the ball. You are taking on too much.",
        questions: ["Can I handle this?", "Am I flexible?"]
      },
      thoth: {
        keywords: ["Change", "harmony", "alternation", "cycle"],
        general: "Jupiter in Capricorn; harmonious change.",
        light: "Embrace the ups and downs. Life is a revolution; go with the flow of the change.",
        shadow: "Inconsistency. You are fluctuating too wildly.",
        questions: ["Is change good?", "Can I find the rhythm?"]
      },
      anima: {
        animal: "The Squirrel",
        keywords: ["Gathering", "busy", "preparation", "winter"],
        general: "Busy gathering nuts.",
        light: "Prepare for the future while managing the present. Balance your immediate needs with your long-term security.",
        shadow: "Scattered. You are burying nuts and forgetting where they are.",
        questions: ["Am I prepared?", "Why am I so busy?"]
      }
    }
  },
  {
    id: "p03",
    name: "Three of Pentacles",
    number: 3,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p03.jpg",
    meta: {
      thoth_title: "Works",
      marseille_name: "Trois de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Teamwork", "collaboration", "skill", "quality"],
        general: "Building something together.",
        light: "Collaboration is key. You cannot do this alone. Seek out experts and work as a team to build something lasting.",
        shadow: "Disharmony. The team is fighting. Or, you are doing sloppy work.",
        questions: ["Who is on my team?", "Is my work quality?"]
      },
      thoth: {
        keywords: ["Work", "construction", "duty", "business"],
        general: "Mars in Capricorn; material works.",
        light: "Get to work. It is time to physically construct your vision. Hard work will pay off.",
        shadow: "Toil. You are working hard for no reason. Drudgery.",
        questions: ["What am I building?", "Is this work meaningful?"]
      },
      anima: {
        animal: "The Beaver",
        keywords: ["Engineer", "dam", "structure", "industry"],
        general: "Reshaping the environment.",
        light: "Reshape your environment to suit your needs. Build a dam, change the flow, and work hard to construct your success.",
        shadow: "Destruction. You are cutting down too many trees.",
        questions: ["Does my environment support me?", "Am I industrious?"]
      }
    }
  },
  {
    id: "p04",
    name: "Four of Pentacles",
    number: 4,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p04.jpg",
    meta: {
      thoth_title: "Power",
      marseille_name: "Quatre de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Security", "greed", "control", "possession"],
        general: "Holding on tight to money/power.",
        light: "You are safe. You have built a solid foundation. It is okay to be conservative with your resources.",
        shadow: "Greed and hoarding. You are stuck because you refuse to let go. Generosity creates flow.",
        questions: ["What am I afraid to lose?", "Am I being stingy?"]
      },
      thoth: {
        keywords: ["Power", "law", "order", "fortress"],
        general: "Sun in Capricorn; earthly power.",
        light: "Establish stability. Rely on the rules and the structure of the law to protect your assets.",
        shadow: "Tyranny. You are using your power to restrict others.",
        questions: ["Am I secure?", "Is my fortress a prison?"]
      },
      anima: {
        animal: "The Raccoon",
        keywords: ["Scavenger", "hoarding", "clever", "clutching"],
        general: "Holding onto food.",
        light: "It is natural to want security, but acting from a place of scarcity will limit you. Trust that there is enough.",
        shadow: "Theft. You are taking what isn't yours out of fear.",
        questions: ["Is there enough?", "Why am I holding on?"]
      }
    }
  },
  {
    id: "p05",
    name: "Five of Pentacles",
    number: 5,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p05.jpg",
    meta: {
      thoth_title: "Worry",
      marseille_name: "Cinq de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Poverty", "loss", "isolation", "illness"],
        general: "Left out in the cold; financial struggle.",
        light: "Do not suffer in silence. Help is available if you swallow your pride and ask for it. This hardship is temporary.",
        shadow: "Recovery. You are finding your way out of the storm. Or, spiritual poverty.",
        questions: ["Who can help me?", "Is this loss permanent?"]
      },
      thoth: {
        keywords: ["Worry", "anxiety", "trouble", "instability"],
        general: "Mercury in Taurus; intelligence applied to worry.",
        light: "Your worry is making the situation worse. Stabilize your mind first, then stabilize your finances.",
        shadow: "Panic. You are paralyzed by fear of loss.",
        questions: ["Why am I worried?", "Can I fix this?"]
      },
      anima: {
        animal: "The Stray Dog",
        keywords: ["Survival", "cold", "hunger", "exclusion"],
        general: "Alone in the winter.",
        light: "Survival is your only priority right now. Find shelter and warmth. Endurance is a victory in itself.",
        shadow: "Despair. You have given up hope of finding a home.",
        questions: ["Where is shelter?", "Can I survive?"]
      }
    }
  },
  {
    id: "p06",
    name: "Six of Pentacles",
    number: 6,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p06.jpg",
    meta: {
      thoth_title: "Success",
      marseille_name: "Six de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Charity", "generosity", "sharing", "balance"],
        general: "The balance of giving and receiving.",
        light: "Balance the flow. If you have abundance, give. If you are in need, receive with grace. Generosity creates prosperity.",
        shadow: "Strings attached. You are giving to get something in return. Or, debt.",
        questions: ["Am I giving or taking?", "Is it fair?"]
      },
      thoth: {
        keywords: ["Success", "gain", "money", "harmony"],
        general: "Moon in Taurus; temporary success.",
        light: "Success is yours, but remember it is cyclical. Use your current prosperity wisely.",
        shadow: "Arrogance. You think the money will last forever.",
        questions: ["How do I handle success?", "Am I sharing?"]
      },
      anima: {
        animal: "The Clownfish",
        keywords: ["Symbiosis", "partnership", "mutual", "balance"],
        general: "Living in the anemone.",
        light: "Seek a symbiotic relationship. Ensure that your exchanges are mutually beneficial.",
        shadow: "Parasitism. One of you is taking too much.",
        questions: ["Is this relationship equal?", "Who benefits?"]
      }
    }
  },
  {
    id: "p07",
    name: "Seven of Pentacles",
    number: 7,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p07.jpg",
    meta: {
      thoth_title: "Failure",
      marseille_name: "Sept de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Patience", "investment", "waiting", "harvest"],
        general: "Waiting for the seeds to grow.",
        light: "Be patient. You have done the work; now you must let nature take its course. Do not dig up the seeds to see if they are growing.",
        shadow: "Frustration. You are tired of waiting. Or, you realized you planted the wrong seeds.",
        questions: ["Can I wait?", "Is it growing?"]
      },
      thoth: {
        keywords: ["Failure", "labor", "fear", "sloth"],
        general: "Saturn in Taurus; arrested growth.",
        light: "You are facing inertia. Your efforts are not yielding results. It may be time to abandon this barren soil.",
        shadow: "Giving up too soon. You stopped digging right before the gold.",
        questions: ["Should I keep going?", "Is this futile?"]
      },
      anima: {
        animal: "The Spider",
        keywords: ["Web", "waiting", "trust", "stillness"],
        general: "Waiting on the web for a fly.",
        light: "Trust your web. You have built the structure; now wait for the opportunity to come to you.",
        shadow: "Starvation. Nothing is coming. Move the web.",
        questions: ["Is the web strong?", "Am I patient enough?"]
      }
    }
  },
  {
    id: "p08",
    name: "Eight of Pentacles",
    number: 8,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p08.jpg",
    meta: {
      thoth_title: "Prudence",
      marseille_name: "Huit de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Craftsmanship", "work", "skill", "detail"],
        general: "Working hard on the details.",
        light: "Focus on the details. Hone your craft. Success comes from repetitive, high-quality work, not shortcuts.",
        shadow: "Perfectionism. You are obsessing over details that don't matter. Or, dead-end work.",
        questions: ["Am I improving?", "Is this quality work?"]
      },
      thoth: {
        keywords: ["Prudence", "intelligence", "cultivation", "farming"],
        general: "Sun in Virgo; tending the garden.",
        light: "Be prudent. Tend to your affairs with intelligence and care. Harvest the results of your wisdom.",
        shadow: "Over-thinking. You are analyzing the fun out of it.",
        questions: ["Am I being careful?", "What am I cultivating?"]
      },
      anima: {
        animal: "The Woodpecker",
        keywords: ["Pecking", "persistence", "rhythm", "work"],
        general: "Pecking thousands of times to find food.",
        light: "Persistence is key. Keep knocking. Success will come through the rhythmic application of effort.",
        shadow: "Headache. You are banging your head against a wall.",
        questions: ["Why am I knocking?", "Will it open?"]
      }
    }
  },
  {
    id: "p09",
    name: "Nine of Pentacles",
    number: 9,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p09.jpg",
    meta: {
      thoth_title: "Gain",
      marseille_name: "Neuf de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Luxury", "independence", "reward", "security"],
        general: "Enjoying the garden alone.",
        light: "Treat yourself. You have earned this independence and luxury. Enjoy your own company and your success.",
        shadow: "Isolation. You have success but no one to share it with. Or, financial dependence on others.",
        questions: ["Am I independent?", "Can I enjoy this?"]
      },
      thoth: {
        keywords: ["Gain", "luck", "inheritance", "increase"],
        general: "Venus in Virgo; material happiness.",
        light: "You are in a period of increase. Accept the gain and the good luck coming your way.",
        shadow: "Greed. You always want more.",
        questions: ["How much is enough?", "Am I lucky?"]
      },
      anima: {
        animal: "The House Cat",
        keywords: ["Comfort", "luxury", "independence", "grooming"],
        general: "Lounging in a sunbeam.",
        light: "Prioritize your comfort. You don't need anyone else to make you happy. Groom yourself and enjoy the sun.",
        shadow: "Laziness. You are getting fat and soft.",
        questions: ["Am I comfortable?", "Do I need anyone?"]
      }
    }
  },
  {
    id: "p10",
    name: "Ten of Pentacles",
    number: 10,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p10.jpg",
    meta: {
      thoth_title: "Wealth",
      marseille_name: "Dix de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Legacy", "family", "wealth", "tradition"],
        general: "Established family wealth and history.",
        light: "Think long-term. Focus on the legacy you are building for your family. Stick to tradition and established structures.",
        shadow: "Family drama. Squabbling over money or inheritance. Breaking tradition.",
        questions: ["What is my legacy?", "Is my family secure?"]
      },
      thoth: {
        keywords: ["Wealth", "completion", "heaviness", "dullness"],
        general: "Mercury in Virgo; accumulated wealth.",
        light: "You have accumulated much, but be careful it doesn't weigh you down. Wealth is meant to support life, not stifle it.",
        shadow: "Hoarding. You are buried under your stuff.",
        questions: ["Do I own my things or do they own me?", "Is it too heavy?"]
      },
      anima: {
        animal: "The Elephant",
        keywords: ["Memory", "herd", "ancestry", "wisdom"],
        general: "The herd passing down ancient paths.",
        light: "Respect your elders and your history. Your true wealth is the wisdom and support of your 'herd'.",
        shadow: "Burden of history. You are carrying the trauma of your ancestors.",
        questions: ["What am I remembering?", "Who came before me?"]
      }
    }
  },
  {
    id: "p11",
    name: "Page of Pentacles",
    number: 11,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p11.jpg",
    meta: {
      rws_name: "Page of Pentacles",
      thoth_name: "Princess of Disks",
      marseille_name: "Valet de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Student", "opportunity", "study", "pragmatic"],
        general: "The student of the material world.",
        light: "Be practical. It is time to study and learn the ropes. Take a tangible step toward your goal.",
        shadow: "Procrastination. You are dreaming but not doing. Or, you are bored with the details.",
        questions: ["What am I learning?", "Is this practical?"]
      },
      thoth: {
        keywords: ["Pregnancy", "potential", "earth", "growth"],
        general: "The Princess of Disks; Earth of Earth.",
        light: "You are pregnant with potential. Nurture this idea patiently; it needs time to come to term.",
        shadow: "Inertia. Nothing is happening.",
        questions: ["What is growing inside me?", "Can I wait?"]
      },
      anima: {
        animal: "The Fawn",
        keywords: ["Learning", "stumble", "new", "earth"],
        general: "A newborn learning to walk.",
        light: "Be gentle with yourself. You are learning how to navigate the real world. Stumbling is part of the process.",
        shadow: "Vulnerability. You are too new to be safe.",
        questions: ["Am I learning?", "Is it safe to walk?"]
      }
    }
  },
  {
    id: "p12",
    name: "Knight of Pentacles",
    number: 12,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p12.jpg",
    meta: {
      rws_name: "Knight of Pentacles",
      thoth_name: "Prince of Disks",
      marseille_name: "Cavalier de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Hard work", "routine", "reliable", "slow"],
        general: "The slow and steady worker.",
        light: "Slow down. Stick to the routine. Reliability and hard work will get you there, even if it feels boring.",
        shadow: "Stuck. You are in a rut. Or, you are too stubborn to change course.",
        questions: ["Am I moving too slow?", "Can I stick to it?"]
      },
      thoth: {
        keywords: ["Labor", "practical", "builder", "stubborn"],
        general: "The Prince of Disks; Air of Earth.",
        light: "Be practical and steadfast. Build your success brick by brick. Do not be swayed by others.",
        shadow: "Dullness. You are boring and unimaginative.",
        questions: ["Am I building something?", "Is this boring?"]
      },
      anima: {
        animal: "The Ox",
        keywords: ["Plow", "strength", "endurance", "steady"],
        general: "Pulling the plow day after day.",
        light: "Put your head down and plow the field. Do not look for glory; look for the furrow. Your stamina is your strength.",
        shadow: "Servitude. You are working for someone else's gain.",
        questions: ["What am I plowing?", "Can I keep going?"]
      }
    }
  },
  {
    id: "p13",
    name: "Queen of Pentacles",
    number: 13,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p13.jpg",
    meta: {
      rws_name: "Queen of Pentacles",
      thoth_name: "Queen of Disks",
      marseille_name: "Reyne de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Nurturing", "practical", "comfort", "security"],
        general: "The earthy mother; provider.",
        light: "Be practical and nurturing. Create a secure, comfortable environment for yourself and others. Balance work and home.",
        shadow: "Smothering or materialistic. You care more about the house than the people in it.",
        questions: ["Am I providing?", "Is my home happy?"]
      },
      thoth: {
        keywords: ["Fertility", "passive", "instinct", "life"],
        general: "Water of Earth; the desert.",
        light: "Be passive and let things grow. Connect with your senses and the physical pleasures of life.",
        shadow: "Barrenness. The land is dry.",
        questions: ["Is my life fertile?", "Am I enjoying my body?"]
      },
      anima: {
        animal: "The Mother Bear",
        keywords: ["Protector", "cubs", "fierce", "earth"],
        general: "Protecting the cubs.",
        light: "Protect what matters. Be fierce in your provision and gentle in your nurturing. You are the provider.",
        shadow: "Danger. Do not get between the mother and her cubs.",
        questions: ["What am I protecting?", "Am I fierce?"]
      }
    }
  },
  {
    id: "p14",
    name: "King of Pentacles",
    number: 14,
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p14.jpg",
    meta: {
      rws_name: "King of Pentacles",
      thoth_name: "Knight of Disks",
      marseille_name: "Roy de Denier"
    },
    meanings: {
      rws: {
        keywords: ["Wealth", "business", "success", "stability"],
        general: "The successful business owner.",
        light: "Focus on the bottom line. Manage your resources with discipline. You have the ability to create lasting wealth.",
        shadow: "Greed and corruption. You are obsessed with status. Or, you are stubborn and refuse to change.",
        questions: ["Am I successful?", "Is my wealth secure?"]
      },
      thoth: {
        keywords: ["Harvest", "material", "heavy", "farmer"],
        general: "The Knight of Disks (Thoth); Fire of Earth.",
        light: "You are the provider. Your labor brings the harvest. Remain grounded and heavy in your authority.",
        shadow: "Stupidity. You are heavy and slow-witted.",
        questions: ["Is it harvest time?", "Am I working smart?"]
      },
      anima: {
        animal: "The Bull",
        keywords: ["Prize", "power", "weight", "stability"],
        general: "A massive prize bull.",
        light: "Be the rock. Your presence alone provides stability. Use your material power to support those around you.",
        shadow: "Rage. If you poke the bull, you get the horns.",
        questions: ["Am I stable?", "Do I use my power well?"]
      }
    }
  }
];

// Export for use in Node or Frontend
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = tarotDeck;
}

// Assign to global variable for use in main.js
const tarotDeckData = tarotDeck;
