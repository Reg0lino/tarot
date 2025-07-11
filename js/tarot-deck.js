const tarotDeckData = [
  // --- Major Arcana ---
{
    name: "The Fool",
    number: "0",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m00.jpg",
    keywords: {
    upright: ["New beginnings", "potential", "innocence", "spontaneity", "adventure", "leap of faith"],
    reversed: ["Hesitation", "holding back", "fear of the unknown", "risk-aversion", "recklessness"]
    },
    meanings: {
    general: "The Fool embodies the spirit in search of experience. The card signifies a profound, pre-conscious pure spirit entering the world of physical manifestation with limitless potential.",
    upright: "This card represents new beginnings, boundless potential, and the start of a journey. It encourages optimism and a willingness to take a leap of faith, trusting that the universe will provide support.",
    reversed: "This card represents hesitation, holding back due to fear, or acting with recklessness. It suggests a need to re-evaluate motivations to ensure actions are grounded and purposeful."
    },
    advice: {
    upright: "Embrace new beginnings with an open heart. Trust your instincts and be willing to take a leap of faith into the unknown, but temper your enthusiasm with awareness.",
    reversed: "Address tendencies towards irresponsibility or fear of the unknown. Re-evaluate your motivations to ensure your actions are grounded and purposeful, not reckless."
    }
},
{
    name: "The Magician",
    number: "1",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m01.jpg",
    keywords: {
    upright: ["Manifestation", "willpower", "resourcefulness", "skill", "action", "concentration"],
    reversed: ["Manipulation", "trickery", "illusion", "untapped potential", "poor planning"]
    },
    meanings: {
    general: "The Magician represents the power to manifest one's desires by using the tools and resources available. He symbolizes the connection between the spiritual and material worlds.",
    upright: "This card signifies your ability to turn ideas into reality through determination and willpower. It points to having all the necessary skills and resources to achieve your goal.",
    reversed: "This card represents a misuse of power, such as manipulation or trickery. Alternatively, it can signify untapped potential, illusion, or poor planning that hinders manifestation."
    },
    advice: {
    upright: "Utilize your inherent skills, resourcefulness, and willpower to navigate challenges and achieve your goals. This is the time to act and turn your vision into reality.",
    reversed: "Address any internal disquiet or potential for deceit. Examine your actions and intentions to ensure you are using your power ethically and effectively."
    }
},
{
    name: "The High Priestess",
    number: "2",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m02.jpg",
    keywords: {
        upright: ["Intuition", "subconscious", "mystery", "inner wisdom", "spirituality", "secrets"],
        reversed: ["Secrets revealed", "repressed intuition", "superficiality", "confusion", "ignoring your gut"]
    },
    meanings: {
        general: "The High Priestess is the guardian of the subconscious and unconscious wisdom. She represents the path of intuitive, esoteric knowledge and things yet to be revealed.",
        upright: "This card represents intuition, the subconscious mind, and knowledge that is hidden or esoteric. It encourages you to trust your inner voice and look beyond the obvious to find deeper truths.",
        reversed: "This card signifies repressed intuition or a disconnection from your inner self. Important secrets may be revealed, or you may be struggling with confusion and ignoring your gut feelings."
    },
    advice: {
        upright: "Embrace intuition and seek deeper, hidden truths. Cultivate patience and silence to allow mysteries to unfold naturally. Trust in your inner wisdom.",
        reversed: "Guard against superficial understanding or being swayed by intense emotions. Reconnect with your intuition and avoid making decisions based on fear or confusion."
    }
},
{
    name: "The Empress",
    number: "3",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m03.jpg",
    keywords: {
        upright: ["Nurturing", "fertility", "abundance", "creativity", "femininity", "nature", "growth"],
        reversed: ["Creative block", "dependence", "smothering", "insecurity", "neglect"]
    },
    meanings: {
        general: "The Empress is a powerful symbol of feminine energy, creativity, fertility, and abundance. She represents the nurturing force that brings ideas, projects, and life into being.",
        upright: "This card signifies a period of growth, creativity, and abundance. It encourages a connection with nature, your senses, and the people you care for to foster harmony and fruitfulness.",
        reversed: "This card can indicate a creative block, a feeling of insecurity, or disharmony in your life. It may also point to smothering behavior or an over-dependence on others."
    },
    advice: {
        upright: "Embrace your creativity and the potential for growth and abundance. Nurture your ideas and relationships, and connect with the beauty of the natural world.",
        reversed: "Address creative blocks or feelings of insecurity. Focus on self-care and finding harmony. Ensure your nurturing instincts are not becoming smothering or creating dependence."
    }
},
{
    name: "The Emperor",
    number: "4",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m04.jpg",
    keywords: {
        upright: ["Authority", "structure", "stability", "leadership", "self-discipline", "strategy"],
        reversed: ["Tyranny", "rigidity", "domination", "lack of discipline", "abuse of power"]
    },
    meanings: {
        general: "The Emperor symbolizes structure, stability, and the establishment of order from chaos. He represents the importance of self-discipline, strategic thinking, and responsibility.",
        upright: "This card signifies a time to embrace your own authority and leadership. It points to the successful creation of solid foundations in your life through discipline and strategic action.",
        reversed: "This card warns against an abuse of power, excessive control, or a lack of self-discipline. It can represent a tyrannical figure or a descent into chaos due to a lack of structure."
    },
    advice: {
        upright: "Assert your authority and will to establish stability and order. Provide protection where needed, relying on reason and conviction to realize your goals.",
        reversed: "Cultivate compassion and flexible authority. Be wary of becoming too rigid or tyrannical, or, conversely, of letting a lack of discipline undermine your progress."
    }
},
{
    name: "The Hierophant",
    number: "5",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m05.jpg",
    keywords: {
        upright: ["Tradition", "mentorship", "spiritual guidance", "education", "institutions", "belief systems"],
        reversed: ["Rebellion", "non-conformity", "challenging the status quo", "dogma", "personal ethics"]
    },
    meanings: {
        general: "The Hierophant acts as a bridge between the divine and humanity, representing tradition, spiritual wisdom, and mentorship. He is a channel for established knowledge.",
        upright: "This card often points to a desire for learning from established institutions or a trusted teacher. It encourages exploring belief systems that provide structure and a sense of belonging.",
        reversed: "This card represents a challenge to tradition and the status quo. It encourages you to question established norms and develop your own personal belief system, free from dogma."
    },
    advice: {
        upright: "Seek guidance from established institutions or traditional wisdom. Consider alliances or commitments that align with your values, and be open to learning from a mentor.",
        reversed: "Trust your own moral compass. Challenge conventions that no longer serve you, but ensure your personal beliefs are well-considered and not just a reaction against the norm."
    }
},
{
    name: "The Lovers",
    number: "6",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m06.jpg",
    keywords: {
        upright: ["Love", "harmony", "partnership", "choices", "value alignment", "union"],
        reversed: ["Disharmony", "misalignment of values", "conflict", "poor choices", "indecision"]
    },
    meanings: {
        general: "The Lovers card represents connection, harmony, and the importance of choice. It can represent a deep, soul-level partnership or a crossroads where a choice must be made.",
        upright: "This card signifies a beautiful union based on shared values and mutual respect. On a personal level, it represents making a significant choice that aligns with your core beliefs.",
        reversed: "This card points to disharmony in relationships or a conflict in your personal values. It can signify a poor choice or a period of indecision that is creating conflict."
    },
    advice: {
        upright: "Embrace love, attraction, and the beauty of relationships. Make choices that are in true alignment with your heart and values to create harmony within and without.",
        reversed: "Re-evaluate relationships or choices that seem to be based on unwise foundations. Be prepared for conflicts or frustrations, and seek to resolve misalignments in your values."
    }
},
{
    name: "The Chariot",
    number: "7",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m07.jpg",
    keywords: {
        upright: ["Willpower", "determination", "drive", "success", "control", "ambition"],
        reversed: ["Lack of direction", "loss of control", "aggression", "obstacles", "self-discipline needed"]
    },
    meanings: {
        general: "The Chariot represents a major victory achieved through determination, willpower, and self-control. It symbolizes the ability to steer opposing forces in a single, focused direction.",
        upright: "This card signifies a time to move forward with ambition and determination. By harnessing your willpower and maintaining focus, you can overcome obstacles and achieve success.",
        reversed: "This card indicates a loss of control or a lack of direction. Your ambitions may be thwarted by obstacles or scattered energy. It calls for greater self-discipline."
    },
    advice: {
        upright: "Harness your willpower and drive to achieve triumph, but be mindful of the potential for presumption or conflict. Use focus and self-control to steer your path to victory.",
        reversed: "Avoid uncontrolled impulses, disputes, and scattered energy. Acknowledge a potential loss of direction and consider alternative strategies to prevent chaos and defeat."
    }
},
{
    name: "Strength",
    number: "8",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m08.jpg",
    keywords: {
        upright: ["Inner strength", "courage", "compassion", "focus", "patience", "self-control"],
        reversed: ["Self-doubt", "weakness", "lack of control", "raw emotion", "aggression"]
    },
    meanings: {
        general: "This card represents true strength, which comes not from force, but from compassion, patience, and self-control. It is about gently taming one's own inner passions and instincts.",
        upright: "This card points to your ability to overcome life's obstacles with courage and a calm spirit. It signifies leading with your heart and exercising gentle but firm control over your impulses.",
        reversed: "This card suggests a struggle with self-doubt or raw, uncontrolled emotions. It may indicate a need to reconnect with your inner fortitude and approach challenges with more patience."
    },
    advice: {
        upright: "Channel your inner power, courage, and compassion to overcome challenges. Exercise gentle but firm control over your passions and instincts.",
        reversed: "Guard against acting from a place of weakness or raw emotion. Address sources of self-doubt to reconnect with your inner strength and avoid potential disgrace."
    }
},
{
    name: "The Hermit",
    number: "9",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m09.jpg",
    keywords: {
        upright: ["Introspection", "soul-searching", "inner guidance", "solitude", "wisdom"],
        reversed: ["Isolation", "loneliness", "withdrawal", "being out of touch", "paranoia"]
    },
    meanings: {
        general: "The Hermit represents a necessary period of introspection and soul-searching. By stepping back from the noise of daily life, one can turn inward to find their own inner wisdom and truth.",
        upright: "This card encourages you to seek solitude for guidance and enlightenment. It is a time for deep contemplation and listening to your own inner voice away from outside influences.",
        reversed: "This card warns that your period of solitude may be turning into unhealthy isolation. It can signify loneliness, paranoia, or being too withdrawn from the world."
    },
    advice: {
        upright: "Seek solitude and introspection for guidance. Take time away from the everyday world to connect with your inner wisdom and find the answers you seek.",
        reversed: "Address excessive caution, fear, or tendencies towards unhealthy isolation. Be honest with yourself and others, and avoid becoming completely disconnected."
    }
},
{
    name: "Wheel of Fortune",
    number: "10",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m10.jpg",
    keywords: {
        upright: ["Cycles", "change", "luck", "fate", "turning points", "destiny", "opportunities"],
        reversed: ["Bad luck", "negative cycles", "stagnation", "resistance to change", "setbacks"]
    },
    meanings: {
        general: "The Wheel of Fortune signifies that life is always in motion and at a turning point. It is a reminder of destiny and that a significant change is underway.",
        upright: "This card suggests a turn of fate, often for the better. It points to cycles, opportunities, and the interconnectedness of life's ups and downs. Embrace the change that is coming.",
        reversed: "This card indicates a period of bad luck or stagnation. You may be resisting a necessary change or feel like you are stuck in a negative cycle. It warns of unforeseen setbacks."
    },
    advice: {
        upright: "Embrace opportunities for success, recognizing the role of destiny and favorable circumstances. Trust in the natural cycles of life and be prepared for a significant turning point.",
        reversed: "Be mindful of resistance to change, which can lead to imbalance or stagnation. While challenging, accepting the turn of the wheel is necessary for continued growth."
    }
},
{
    name: "Justice",
    number: "11",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m11.jpg",
    keywords: {
        upright: ["Justice", "fairness", "truth", "cause and effect", "law", "clarity", "integrity"],
        reversed: ["Unfairness", "dishonesty", "lack of accountability", "bias", "karmic imbalance"]
    },
    meanings: {
        general: "Justice represents truth, fairness, and the law of cause and effect. It reminds you that your actions have consequences and that the truth will eventually come to light.",
        upright: "This card calls for integrity, accountability, and making decisions with clarity and impartiality. It signifies that a fair and just outcome can be expected if you act with honesty.",
        reversed: "This card points to an unfair situation, dishonesty, or a lack of accountability. It can warn of legal complications or a situation where bias is preventing the truth from being seen."
    },
    advice: {
        upright: "Uphold fairness, integrity, and truth in all matters. Seek equitable resolutions and trust that your actions will lead to a just outcome.",
        reversed: "Be wary of legal entanglements, bias, or a lack of accountability. Examine your own prejudices and ensure you are acting with integrity, even if others are not."
    }
},
{
    name: "The Hanged Man",
    number: "12",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m12.jpg",
    keywords: {
        upright: ["Surrender", "new perspectives", "letting go", "suspension", "sacrifice", "wisdom"],
        reversed: ["Stalling", "resistance to change", "needless sacrifice", "indecision", "martyrdom"]
    },
    meanings: {
        general: "The Hanged Man represents a voluntary pause and surrender to gain a new perspective. By letting go of control, you can achieve profound wisdom and breakthroughs.",
        upright: "This card encourages you to embrace periods of suspension or sacrifice as opportunities for enlightenment. Trust your intuition and be open to the new perspectives that emerge from surrender.",
        reversed: "This card signifies a resistance to change or a period of stalling. You may be making needless sacrifices or playing the martyr, avoiding a necessary decision or action."
    },
    advice: {
        upright: "Embrace a period of pause as an opportunity for profound wisdom and discernment. Let go of your need to control and be open to seeing things from a completely new angle.",
        reversed: "Guard against self-serving motives or being unduly influenced by groupthink. Re-evaluate your connection to the collective and avoid making sacrifices for the wrong reasons."
    }
},
{
    name: "Death",
    number: "13",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m13.jpg",
    keywords: {
        upright: ["Endings", "transformation", "transition", "change", "letting go", "closing a chapter"],
        reversed: ["Resistance to change", "fear of endings", "stagnation", "holding on to the past"]
    },
    meanings: {
        general: "This card points to a profound and necessary transformation. It represents the end of one chapter to make way for the beginning of another, clearing away the old to make room for the new.",
        upright: "This card signifies a major ending, such as the end of a job, relationship, or belief system. While this change can be difficult, it is necessary for your growth and rebirth.",
        reversed: "This card indicates a strong resistance to a necessary change. You may be clinging to the past out of fear, leading to stagnation and preventing new opportunities from emerging."
    },
    advice: {
        upright: "Embrace necessary endings and transformations. Understand that destruction can clear the way for new beginnings, even if it involves loss.",
        reversed: "Resist stagnation, apathy, and a refusal to adapt. Confront what is holding you back, as clinging to the past can lead to the destruction of hope."
    }
},
{
    name: "Temperance",
    number: "14",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m14.jpg",
    keywords: {
        upright: ["Balance", "moderation", "patience", "purpose", "harmony", "integration"],
        reversed: ["Imbalance", "excess", "extremes", "disharmony", "lack of long-term vision"]
    },
    meanings: {
        general: "Temperance represents balance, patience, and finding the middle path. It signifies a period of blending diverse elements in your life to create something new and valuable.",
        upright: "This card calls for you to remain calm and composed, even in stressful situations. By integrating different aspects of yourself, you can find harmony and a sense of purpose.",
        reversed: "This card warns of imbalance and excess. You may be swinging between extremes, leading to disharmony. It calls for a more moderate and patient approach."
    },
    advice: {
        upright: "Practice balance, moderation, and self-management in all areas of life. Seek harmony and adaptable solutions by blending different elements together.",
        reversed: "Be wary of disunion or conflicts arising from competing interests or extreme behavior. Re-evaluate your approach if it is causing discord and seek a more balanced path."
    }
},
{
    name: "The Devil",
    number: "15",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m15.jpg",
    keywords: {
        upright: ["Bondage", "addiction", "materialism", "negative patterns", "temptation", "shadow self"],
        reversed: ["Breaking free", "liberation", "reclaiming power", "detachment", "self-awareness"]
    },
    meanings: {
        general: "The Devil represents our own self-imposed limitations, addictions, and negative patterns. It is a mirror to the unhealthy attachments that restrict us.",
        upright: "This card points to feelings of entrapment, addiction, or being a slave to materialism. It asks you to confront your shadow self and acknowledge the chains you have placed on yourself.",
        reversed: "This card signifies the process of breaking free from negative patterns or addictions. It is a moment of self-awareness where you reclaim your power and detach from unhealthy influences."
    },
    advice: {
        upright: "Confront destructive forces, whether external or internal, with extraordinary effort. Recognize that your response to your circumstances determines their moral outcome.",
        reversed: "Break free from destructive patterns, weakness, or superficiality. Address any self-imposed limitations or willful ignorance that perpetuate negative cycles."
    }
},
{
    name: "The Tower",
    number: "16",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m16.jpg",
    keywords: {
        upright: ["Sudden upheaval", "chaos", "revelation", "awakening", "destruction", "radical change"],
        reversed: ["Avoiding disaster", "resisting change", "fear of the unknown", "delaying the inevitable"]
    },
    meanings: {
        general: "The Tower signifies a sudden, radical, and disruptive change. It represents the collapse of false structures, illusions, and beliefs built on a weak foundation.",
        upright: "This card points to a moment of shocking upheaval and chaos. While distressing, this event is a form of brutal grace, shattering illusions to allow you to rebuild on a stronger, more authentic foundation.",
        reversed: "This card indicates a resistance to a necessary but disruptive change. You may be trying to avoid disaster, but in doing so, you are only delaying the inevitable collapse."
    },
    advice: {
        upright: "Prepare for sudden, unforeseen upheavals and the collapse of existing structures. While distressing, these events can clear the way for new, more authentic foundations.",
        reversed: "Recognize oppressive structures, whether external or internal, that limit freedom. Avoiding change now will only lead to a more difficult collapse later."
    }
},
{
    name: "The Star",
    number: "17",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m17.jpg",
    keywords: {
        upright: ["Hope", "healing", "inspiration", "serenity", "renewal", "spiritual guidance"],
        reversed: ["Discouragement", "loss of faith", "despair", "disconnection", "lack of motivation"]
    },
    meanings: {
        general: "Coming after the upheaval of The Tower, The Star is a card of renewed hope, healing, and spiritual guidance. It is a reminder that you are blessed and connected to the divine.",
        upright: "This card signals a peaceful, loving phase where you can restore your faith in yourself and the universe. It encourages you to be open to new ideas and trust that your dreams can come true.",
        reversed: "This card signifies a period of discouragement or a loss of faith. You may feel disconnected from your purpose and lack the motivation to move forward."
    },
    advice: {
        upright: "Hold onto hope and bright prospects, especially after a period of turmoil. Connect with your inner light and spiritual gifts to guide you toward healing.",
        reversed: "Guard against pride, despair, or a feeling of powerlessness. Reconnect with humility and genuine potential to restore your faith."
    }
},
{
    name: "The Moon",
    number: "18",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m18.jpg",
    keywords: {
        upright: ["Intuition", "illusion", "fear", "anxiety", "dreams", "subconscious"],
        reversed: ["Release of fear", "clarity", "truth revealed", "secrets exposed", "confusion subsiding"]
    },
    meanings: {
        general: "The Moon represents intuition, dreams, and the subconscious mind. It illuminates the path to higher consciousness but can also bring up deep-seated fears and anxieties.",
        upright: "This card warns that things may not be what they seem. You must trust your intuition to see beyond illusion and navigate this period of uncertainty and subconscious fears.",
        reversed: "This card signifies that secrets are being revealed and confusion is subsiding. You are releasing your fears and finding the clarity to distinguish fantasy from reality."
    },
    advice: {
        upright: "Be wary of hidden dangers, deception, and unseen forces. Trust your intuition to navigate periods of uncertainty and illusion, and confront your fears.",
        reversed: "Address periods of emotional or mental instability. While deception may be less severe, still exercise caution and seek clarity by facing your fears."
    }
},
{
    name: "The Sun",
    number: "19",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m19.jpg",
    keywords: {
        upright: ["Joy", "success", "celebration", "positivity", "vitality", "confidence", "clarity"],
        reversed: ["Blocked happiness", "lack of clarity", "pessimism", "self-doubt", "temporary setbacks"]
    },
    meanings: {
        general: "The Sun is one of the most positive cards in the deck, representing success, joy, and vitality. It radiates with optimism and clarity, illuminating your path.",
        upright: "This card signifies a time of celebration, freedom, and pure happiness. It allows you to express your authentic self with confidence, assuring you that things will work out.",
        reversed: "This card points to temporary setbacks or a feeling of pessimism that is blocking your happiness. You may be struggling with self-doubt, which is diminishing your natural vitality."
    },
    advice: {
        upright: "Embrace joy, contentment, and well-being. Celebrate your success and harmonious relationships, allowing your true self to shine with confidence.",
        reversed: "While happiness is still present, it may be diminished. Seek to amplify positive aspects and address any factors, like self-doubt, that lessen your joy."
    }
},
{
    name: "Judgement",
    number: "20",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m20.jpg",
    keywords: {
        upright: ["Reckoning", "awakening", "rebirth", "higher calling", "forgiveness", "absolution"],
        reversed: ["Self-doubt", "guilt", "ignoring the call", "stagnation", "fear of change"]
    },
    meanings: {
        general: "Judgement signifies a profound spiritual awakening and a period of self-reflection. It is about a personal reckoning that allows you to heal and be reborn into a new level of consciousness.",
        upright: "This card is a call to rise, review your life, and let go of the past through forgiveness. It is not about external punishment but about answering a higher calling to be true to yourself.",
        reversed: "This card represents ignoring a higher calling due to self-doubt or guilt. It warns that refusing to learn from your past will lead to stagnation."
    },
    advice: {
        upright: "Embrace profound transformation and a complete change of circumstances. Be prepared for a significant outcome or reckoning that allows for a spiritual rebirth.",
        reversed: "Address any tendencies towards weakness, guilt, or self-doubt. Ensure any decision is based on strength and conviction rather than hesitation or fear of change."
    }
},
{
    name: "The World",
    number: "21",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m21.jpg",
    keywords: {
        upright: ["Completion", "integration", "accomplishment", "fulfillment", "wholeness", "celebration"],
        reversed: ["Lack of closure", "incompletion", "unfinished business", "emptiness", "shortcuts"]
    },
    meanings: {
        general: "The World represents the successful completion of a major life cycle and a profound sense of accomplishment. It signifies integration, wholeness, and fulfillment.",
        upright: "This card celebrates your achievements and the attainment of a long-sought-after goal. It signals both a satisfying conclusion and the readiness for a new beginning.",
        reversed: "This card points to a lack of closure or a feeling of incompletion. You may have taken shortcuts, leaving you with unfinished business and a sense of emptiness."
    },
    advice: {
        upright: "Embrace the culmination of a cycle, leading to assured success and fulfillment. Be open to celebrating your journey and preparing for the next chapter.",
        reversed: "Address any resistance to change, stagnation, or a feeling of being stuck. Break free from inertia to allow for the natural culmination and flow of your life's cycles."
    }
},
{
    name: "Ace of Wands",
    number: "1",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w01.jpg",
    keywords: {
        upright: ["Inspiration", "potential", "creative spark", "new idea", "passion", "growth"],
        reversed: ["Lack of inspiration", "delays", "creative blocks", "missed opportunities", "hesitation"]
    },
    meanings: {
        general: "The Ace of Wands represents a moment of pure inspiration and potential. It is the creative spark that initiates a new project, passion, or journey.",
        upright: "This card encourages you to act on your ideas with courage and enthusiasm. It symbolizes the beginning of a period of significant growth, passion, and creative energy.",
        reversed: "This card signifies a creative block or a lack of motivation. A new idea may be delayed or fizzle out due to hesitation or a lack of passion."
    },
    advice: {
        upright: "Seize the new opportunity for creation and enterprise. Embrace the start of a new project with energy and passion. This is the time to act on your inspiration.",
        reversed: "Be wary of a project that may be doomed to fail from the start. Acknowledge a decline in energy or enthusiasm and reassess if this path is truly viable."
    }
},
{
    name: "Two of Wands",
    number: "2",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w02.jpg",
    keywords: {
        upright: ["Future planning", "decision-making", "foresight", "discovery", "ambition"],
        reversed: ["Fear of the unknown", "lack of planning", "playing it safe", "indecisiveness"]
    },
    meanings: {
        general: "The Two of Wands represents a moment of foresight and planning for the future. Having achieved an initial success, you are now contemplating your next move.",
        upright: "This card encourages you to step out of your comfort zone and make bold decisions to expand your world. It is a time for weighing your options and choosing your path.",
        reversed: "This card indicates that fear of the unknown or a lack of planning is holding you back. You may be playing it safe and letting opportunities pass you by."
    },
    advice: {
        upright: "Make a bold plan for the future. You have achieved initial success; now is the time to decide on your next move. Weigh your options carefully before committing your energy.",
        reversed: "Be prepared for unexpected events that may cause trouble or fear. Do not let indecision lead to paralysis; face the situation with courage."
    }
},
{
    name: "Three of Wands",
    number: "3",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w03.jpg",
    keywords: {
        upright: ["Progress", "expansion", "foresight", "looking ahead", "initial success", "long-term vision"],
        reversed: ["Delays", "setbacks", "lack of foresight", "unexpected obstacles", "frustration"]
    },
    meanings: {
        general: "The Three of Wands signifies that your plans are now in motion, and you are beginning to see the first signs of progress. It is a card of foresight and expansion.",
        upright: "This card encourages you to look ahead with confidence as your efforts start to pay off. It indicates that opportunities are unfolding, often as a result of your courage.",
        reversed: "This card points to unexpected delays or setbacks. A lack of foresight may have created obstacles, leading to frustration with your progress."
    },
    advice: {
        upright: "Continue to look ahead as your plans begin to come to fruition. Be open to collaboration and trade, as your efforts have created a strong foundation for success.",
        reversed: "Take a moment to rest and appreciate the end of a difficult period. If you are facing delays, use this time to reassess your strategy before moving forward."
    }
},
{
    name: "Four of Wands",
    number: "4",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w04.jpg",
    keywords: {
        upright: ["Celebration", "harmony", "homecoming", "community", "stability", "joyful milestone"],
        reversed: ["Lack of harmony", "unstable foundations", "private celebration", "conflict at home"]
    },
    meanings: {
        general: "The Four of Wands is a card of joyful celebration, harmony, and stability. It represents a safe and secure environment where you can relax and enjoy the fruits of your labor.",
        upright: "This card often signifies a happy milestone, such as a homecoming, wedding, or the successful completion of a project, shared with a supportive community.",
        reversed: "This card indicates a lack of harmony or instability in your home or community. A celebration may be private or feel hollow due to underlying conflicts."
    },
    advice: {
        upright: "Celebrate your achievements and enjoy a period of harmony and peace. This is a time to appreciate the stable foundation you have built, whether in your home or your work.",
        reversed: "Address any instability or lack of harmony in your environment. While positive aspects may still be present, they are undermined by conflict that needs resolution."
    }
},
{
    name: "Five of Wands",
    number: "5",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w05.jpg",
    keywords: {
        upright: ["Competition", "conflict", "disagreements", "debate", "rivalry", "diverse opinions"],
        reversed: ["Avoiding conflict", "finding common ground", "resolving disputes", "inner conflict"]
    },
    meanings: {
        general: "The Five of Wands represents conflict, competition, and disagreements. It depicts a scene where different ideas and egos are clashing, often as a catalyst for growth.",
        upright: "This card signifies a spirited debate or rivalry. While frustrating, this conflict can challenge everyone involved to sharpen their positions and fight for what they believe in.",
        reversed: "This card indicates a desire to avoid conflict, which may or may not be healthy. It can also point to the successful resolution of a dispute or an ongoing inner conflict."
    },
    advice: {
        upright: "Embrace competition as a way to sharpen your skills. Engage in the struggle, but keep the stakes in perspective. It is a time for ambition and energetic pursuit of goals.",
        reversed: "Be prepared for disputes, but seek to find common ground. Stand your ground, but be aware that what seems like a contradiction could be turned into a positive outcome."
    }
},
{
    name: "Six of Wands",
    number: "6",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w06.jpg",
    keywords: {
        upright: ["Public recognition", "victory", "success", "self-confidence", "progress", "acclaim"],
        reversed: ["Private victory", "self-doubt", "lack of recognition", "fall from grace", "arrogance"]
    },
    meanings: {
        general: "The Six of Wands is a card of public victory, success, and acclaim. It signifies that your hard work has been recognized by others, bringing a well-deserved moment in the spotlight.",
        upright: "This card boosts your self-confidence and encourages you to be proud of your accomplishments as you continue to progress on your journey toward your goals.",
        reversed: "This card can signify a fall from grace or a lack of public recognition. Alternatively, it can represent a private victory that is meaningful to you but unknown to others."
    },
    advice: {
        upright: "Enjoy your moment of success and public recognition. You have earned this victory through your efforts. Share the good news with confidence.",
        reversed: "Be wary of arrogance or letting success go to your head. If you are experiencing self-doubt, take time to celebrate your private victories and build your confidence from within."
    }
    },
    {
    name: "Seven of Wands",
    number: "7",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w07.jpg",
    keywords: {
        upright: ["Challenge", "standing your ground", "courage", "conviction", "perseverance"],
        reversed: ["Giving up", "feeling overwhelmed", "backing down", "lack of confidence", "being shouted down"]
    },
    meanings: {
        general: "The Seven of Wands represents a moment when you must stand up for your beliefs, achievements, or position. You are being challenged by others, but you are in a position of advantage.",
        upright: "This card calls for courage, perseverance, and the conviction to defend what you have worked hard to create. It is a test of your resolve and belief in yourself.",
        reversed: "This card signifies feeling overwhelmed and wanting to give up. You may be backing down from a challenge due to a lack of confidence or feeling like your voice is not being heard."
    },
    advice: {
        upright: "Stand your ground and defend your position with courage. You are in a position of advantage, but you must be prepared to fight for what you believe in. Success is likely if you persevere.",
        reversed: "Anxiety and indecision are your biggest enemies right now. Take a moment to clear your head and assess the situation calmly before you become overwhelmed or give up."
    }
    },
    {
    name: "Eight of Wands",
    number: "8",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w08.jpg",
    keywords: {
        upright: ["Speed", "rapid action", "movement", "communication", "progress", "swift change"],
        reversed: ["Delays", "frustration", "stagnation", "resistance", "miscommunication", "slowing down"]
    },
    meanings: {
        general: "The Eight of Wands signifies a period of rapid movement, progress, and swift action. Obstacles are clearing, and events are accelerating toward a conclusion.",
        upright: "This card often points to important news or messages arriving quickly, as well as the potential for travel. It is a sign to act decisively and go with the fast-flowing energy.",
        reversed: "This card indicates frustrating delays and stagnation. Progress is slowing down, possibly due to miscommunication or resistance to the natural flow of events."
    },
    advice: {
        upright: "Act quickly and decisively. Events are moving rapidly, so this is a time for action, not hesitation. Embrace the speed and direct your energy towards your goal.",
        reversed: "Address internal conflicts or miscommunications that are causing delays. Slow down and make sure your actions are well-considered to avoid quarrels and frustration."
    }
},
{
    name: "Nine of Wands",
    number: "9",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w09.jpg",
    keywords: {
        upright: ["Resilience", "perseverance", "courage", "last stand", "persistence", "boundaries"],
        reversed: ["Feeling overwhelmed", "giving up", "paranoia", "fatigue", "defensiveness"]
    },
    meanings: {
        general: "The Nine of Wands is a card of resilience and perseverance. You are battle-weary and have been through a lot, but you are still standing and ready to face the final challenge.",
        upright: "This card signifies a final test of your courage before you reach your goal. It encourages you to gather your last reserves of strength, maintain your boundaries, and push through.",
        reversed: "This card indicates that you are feeling overwhelmed and on the verge of giving up. Fatigue and past struggles may be leading to paranoia or extreme defensiveness."
    },
    advice: {
        upright: "Gather your remaining strength for one last push. You are weary but resilient. Maintain your boundaries and be prepared to defend what you have built.",
        reversed: "Recognize the significant obstacles and adversity you are facing. It may be time to retreat and recover rather than face a calamitous defeat from sheer exhaustion."
    }
},
{
    name: "Ten of Wands",
    number: "10",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w10.jpg",
    keywords: {
        upright: ["Burden", "responsibility", "hard work", "being overwhelmed", "stress", "obligation"],
        reversed: ["Delegating", "letting go of burdens", "release", "finding support", "collapse"]
    },
    meanings: {
        general: "The Ten of Wands signifies being burdened and overwhelmed with responsibilities, often as a result of past success. The weight of these obligations has become oppressive.",
        upright: "This card is a clear sign that you have taken on too much. It is a call to evaluate your workload, learn to say 'no', and find a way to manage your stress to avoid burnout.",
        reversed: "This card represents the act of releasing your burdens, perhaps by delegating or simply letting go. Alternatively, it can signify a total collapse under the weight of pressure."
    },
    advice: {
        upright: "Acknowledge the burdens you carry and seek ways to alleviate them. Understand that even success can bring its own form of oppression. Learn to delegate or say no.",
        reversed: "Prepare for unexpected obstacles and learn to release what you cannot control. Sharing your burdens through delegation will be crucial for moving forward."
    }
},
{
    name: "Page of Wands",
    number: "11",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w11.jpg",
    keywords: {
        upright: ["Enthusiasm", "exploration", "creative spark", "new ideas", "free spirit", "inspiration"],
        reversed: ["Creative blocks", "lack of direction", "hesitation", "uninspired ideas", "restlessness"]
    },
    meanings: {
        general: "The Page of Wands represents the initial spark of a new idea or passion. It embodies a free-spirited, exploratory energy that encourages you to follow your inspiration.",
        upright: "This card invites you to embrace your creative potential with enthusiasm and a sense of wonder, without worrying too much about the final destination or outcome.",
        reversed: "This card points to creative blocks or a lack of clear direction. You may feel restless and uninspired, hesitating to pursue a new path or idea."
    },
    advice: {
        upright: "Be open to new ideas, inspiration, and messages. This is a time to explore your creative potential with enthusiasm and a free spirit.",
        reversed: "Be wary of gossip or bad news. Ground your creative ideas with a solid plan to avoid instability and indecision. Address your restlessness productively."
    }
},
{
    name: "Knight of Wands",
    number: "12",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w12.jpg",
    keywords: {
        upright: ["Action", "energy", "passion", "adventure", "impulsiveness", "haste", "ambition"],
        reversed: ["Recklessness", "delays", "frustration", "scattered energy", "arrogance"]
    },
    meanings: {
        general: "The Knight of Wands is the embodiment of energy, passion, and action. He charges ahead with confidence and ambition, eager for adventure and new challenges.",
        upright: "This card encourages you to pursue your goals with vigor. While its energy is inspiring, it can also be impulsive, so it advises you to look before you leap.",
        reversed: "This card warns of acting with recklessness or arrogance. Your energy may be scattered, leading to frustrating delays and interruptions to your plans."
    },
    advice: {
        upright: "Embrace a journey or change with energy and passion. This is a time for adventure and acting on your ambitions, even if it means leaving something behind.",
        reversed: "Be cautious of acting too hastily, as it could lead to discord and division. Your energy may be scattered, causing interruptions to your plans. Temper your passion with a plan."
    }
},
{
    name: "Queen of Wands",
    number: "13",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w13.jpg",
    keywords: {
        upright: ["Confidence", "charisma", "independence", "courage", "passion", "determination"],
        reversed: ["Self-doubt", "insecurity", "jealousy", "demanding", "intimidation", "burnout"]
    },
    meanings: {
        general: "The Queen of Wands is a charismatic, courageous, and fiercely independent leader. She is confident and determined, able to command attention while remaining warm and approachable.",
        upright: "This card encourages you to embrace your own power and passion. It is a time to be bold in your ambitions and to lead your life with a vibrant and self-assured energy.",
        reversed: "This card can point to feelings of insecurity or self-doubt that are holding you back. Alternatively, it can signify that your confident energy is becoming intimidating or demanding."
    },
    advice: {
        upright: "Embody confidence, courage, and determination. Be a charismatic and independent leader in your endeavors. Your passion and self-assurance will attract success.",
        reversed: "Beware of jealousy or deceit from others. Alternatively, examine your own actions to ensure you are not the one causing opposition. Focus on being serviceable and obliging."
    }
},
{
    name: "King of Wands",
    number: "14",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w14.jpg",
    keywords: {
        upright: ["Visionary leadership", "mastery", "confidence", "taking action", "enterprise", "honour"],
        reversed: ["Arrogance", "impulsiveness", "tyrannical", "lack of vision", "poor leadership"]
    },
    meanings: {
        general: "The King of Wands represents the mastery of creative energy and visionary leadership. He is a natural leader who inspires others through his confidence and clear direction.",
        upright: "This card encourages you to take charge of your life with a bold vision, to act on your ambitions, and to lead with honor and integrity.",
        reversed: "This card warns of becoming arrogant, impulsive, or tyrannical. A lack of clear vision or poor leadership can cause plans to fail and alienate others."
    },
    advice: {
        upright: "Act as a visionary leader. Take control of your life and projects with a clear vision and the honor to see it through. Be honest and conscientious in your dealings.",
        reversed: "Heed the advice of a tolerant but severe authority figure. It may be time for a more disciplined and austere approach to achieve your long-term goals."
    }
},
{
    name: "Ace of Cups",
    number: "1",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c01.jpg",
    keywords: {
        upright: ["New love", "emotional awakening", "compassion", "creativity", "intuition"],
        reversed: ["Repressed emotions", "blocked creativity", "emotional loss", "feeling empty"]
    },
    meanings: {
        general: "The Ace of Cups represents a powerful surge of new emotional beginnings. It is an invitation to open your heart to love, compassion, and creative expression.",
        upright: "This card signifies a time of deep connection, whether in a new relationship, a renewed sense of spirituality, or a burst of intuition. It is an opportunity to give and receive love freely.",
        reversed: "This card indicates that you may be repressing your emotions or feeling emotionally empty. Creative and intuitive signals may be blocked, leading to a sense of loss."
    },
    advice: {
        upright: "Open your heart to new emotional and creative possibilities. This is a time for compassion, new relationships, and allowing spiritual nourishment to flow into your life.",
        reversed: "Guard your heart against instability. It may be time to focus on self-love and address emotional blockages before seeking fulfillment externally."
    }
},
{
    name: "Two of Cups",
    number: "2",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c02.jpg",
    keywords: {
        upright: ["Partnership", "mutual respect", "connection", "harmony", "attraction", "shared values"],
        reversed: ["Disharmony", "disconnection", "imbalance", "miscommunication", "broken trust"]
    },
    meanings: {
        general: "The Two of Cups signifies a beautiful, harmonious partnership built on mutual respect and emotional connection. It is about two coming together to create something stronger.",
        upright: "This card often represents a romantic relationship, but it can also point to a deep friendship or a successful business partnership based on shared values.",
        reversed: "This card warns of a disconnection or imbalance in a key relationship. Disharmony and miscommunication may be leading to broken trust."
    },
    advice: {
        upright: "Nurture the important partnerships in your life. This is a time for building connections based on mutual respect, sympathy, and shared values.",
        reversed: "Be wary of deceit or disloyalty in a close relationship. Question the true nature of the connection and look for signs of falsehood or imbalance."
    }
},
{
    name: "Three of Cups",
    number: "3",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c03.jpg",
    keywords: {
        upright: ["Celebration", "friendship", "community", "collaboration", "happy reunions"],
        reversed: ["Gossip", "overindulgence", "isolation", "stifled creativity", "disharmony"]
    },
    meanings: {
        general: "The Three of Cups is a card of joyful celebration and the power of friendship. It represents happiness shared with a supportive community.",
        upright: "This card often signifies a party, a collaborative success, or a happy reunion. It encourages you to connect with your 'chosen family' and celebrate your bonds.",
        reversed: "This card can indicate that a social circle is becoming toxic with gossip. It can also warn of overindulgence or a feeling of isolation from your community."
    },
    advice: {
        upright: "Celebrate your successes with your community. Share your joy with friends and enjoy this period of happy fulfillment and healing.",
        reversed: "While it is a time for achievement, be mindful of overindulgence or toxic group dynamics. Conclude your business swiftly but avoid celebrating to excess."
    }
    },
    {
    name: "Four of Cups",
    number: "4",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c04.jpg",
    keywords: {
        upright: ["Apathy", "contemplation", "disconnection", "introspection", "re-evaluation"],
        reversed: ["Breaking out of a rut", "new perspective", "accepting an offer", "renewed motivation"]
    },
    meanings: {
        general: "The Four of Cups signifies a period of apathy, withdrawal, and contemplation. You may be feeling disconnected or uninspired by the opportunities around you.",
        upright: "This card often serves as a prompt to turn inward and re-evaluate what truly brings you emotional fulfillment. Be careful not to miss a genuine offer being presented.",
        reversed: "This card indicates you are breaking free from a period of apathy. You are ready to accept a new offer and have found a renewed sense of motivation and perspective."
    },
    advice: {
        upright: "Acknowledge your feelings of apathy or discontent, but be careful not to miss new opportunities being offered to you. It is time to re-evaluate what truly brings you emotional fulfillment.",
        reversed: "Be open to new ideas, new people, and new ways of thinking. An important message or new relationship is on the horizon if you are willing to see it."
    }
},
{
    name: "Five of Cups",
    number: "5",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c05.jpg",
    keywords: {
        upright: ["Loss", "grief", "regret", "disappointment", "sadness", "focusing on the negative"],
        reversed: ["Moving on", "acceptance", "forgiveness", "healing", "seeing the positive"]
    },
    meanings: {
        general: "The Five of Cups represents grief, loss, and disappointment. It highlights a tendency to focus on what has been lost while overlooking what remains.",
        upright: "While it is important to honor your feelings of sadness, this card gently reminds you that if you can shift your perspective, you will see that not all is lost.",
        reversed: "This card signifies a significant step in the healing process. You are beginning to accept your loss, forgive, and recognize the positive aspects that remain in your life."
    },
    advice: {
        upright: "It is okay to grieve a loss, but do not let regret blind you to the opportunities and blessings that you still possess. Turn around and see what remains.",
        reversed: "Look to your roots and family connections for support. News or a return of a relative may be coming. Be wary of projects that seem too good to be true."
    }
},
{
    name: "Six of Cups",
    number: "6",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c06.jpg",
    keywords: {
        upright: ["Nostalgia", "happy memories", "childhood", "innocence", "reunion", "simple joys"],
        reversed: ["Stuck in the past", "unrealistic expectations", "moving on", "leaving home"]
    },
    meanings: {
        general: "The Six of Cups is a card of nostalgia, innocence, and happy memories. It often points to a reunion with people or places from your past, or a longing for simpler times.",
        upright: "This card can bring comfort and happiness, but it also asks you to consider how your past is influencing your present, for better or for worse.",
        reversed: "This card warns of being stuck in the past and idealizing it to the point where it prevents you from moving forward. It is time to focus on the present and future."
    },
    advice: {
        upright: "Cherish happy memories and the simple joys of the past, but do not live in them. Allow feelings of nostalgia to inform your present happiness.",
        reversed: "It is time to look to the future. Let go of the past and prepare for the renewal and new events that are coming soon. Do not let nostalgia hold you back."
    }
},
{
    name: "Seven of Cups",
    number: "7",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c07.jpg",
    keywords: {
        upright: ["Choices", "opportunities", "fantasy", "wishful thinking", "imagination", "illusion"],
        reversed: ["Feeling overwhelmed", "lack of choice", "clarity", "reality check", "making a decision"]
    },
    meanings: {
        general: "The Seven of Cups represents a moment of being presented with multiple choices and opportunities. However, these options may be based on fantasy or illusion rather than reality.",
        upright: "This card warns against getting lost in daydreams and wishful thinking, urging you to ground yourself and make a clear, conscious decision about what to pursue.",
        reversed: "This card signifies a moment of clarity after being overwhelmed by choices. You are cutting through the illusion, facing reality, and making a grounded decision."
    },
    advice: {
        upright: "Be careful not to get lost in daydreams and wishful thinking. You have many options, but you must make a clear and grounded choice to make progress.",
        reversed: "Your desires are becoming more focused. It is time to move from imagination to determination. Formulate a solid project and act on your will."
    }
},
{
    name: "Eight of Cups",
    number: "8",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c08.jpg",
    keywords: {
        upright: ["Walking away", "disillusionment", "moving on", "abandonment", "soul-searching"],
        reversed: ["Stagnation", "fear of change", "avoidance", "staying in a bad situation", "indecision"]
    },
    meanings: {
        general: "The Eight of Cups signifies a turning point where you must walk away from a situation that is no longer emotionally fulfilling, even if it looks good on the surface.",
        upright: "This card represents the courage to abandon the familiar in search of a higher purpose or deeper satisfaction, even if the path ahead is uncertain.",
        reversed: "This card indicates you are staying in a negative situation out of fear of change. It warns that this avoidance and indecision will only lead to deeper stagnation."
    },
    advice: {
        upright: "Acknowledge when a situation is no longer emotionally fulfilling. It may be time to walk away and seek a deeper sense of purpose, even if it's difficult.",
        reversed: "Evaluate what is truly holding you back. Are you staying out of fear or comfort? It may be time to confront the difficult decision to move on."
    }
},
{
    name: "Nine of Cups",
    number: "9",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c09.jpg",
    keywords: {
        upright: ["Wishes fulfilled", "satisfaction", "contentment", "pleasure", "gratitude"],
        reversed: ["Smugness", "dissatisfaction", "materialism", "unfulfilled wishes", "boasting"]
    },
    meanings: {
        general: "Often called the 'wish fulfillment' card, the Nine of Cups represents deep emotional satisfaction and contentment. It signifies having all one's desires met.",
        upright: "This card signifies a time when your wishes are coming true, and you are able to enjoy the pleasures of life. It encourages gratitude for your blessings.",
        reversed: "This card warns that satisfaction may be turning into smugness or materialism. It can also point to unfulfilled wishes and deep dissatisfaction."
    },
    advice: {
        upright: "Enjoy this time of contentment and satisfaction. Your wishes are being fulfilled, so take time to appreciate the abundance and pleasure in your life.",
        reversed: "Look beyond material satisfaction to find truth and liberty. Acknowledge that even in success, there can be mistakes and imperfections to learn from."
    }
},
{
    name: "Ten of Cups",
    number: "10",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c10.jpg",
    keywords: {
        upright: ["Harmony", "lasting happiness", "family", "homecoming", "emotional fulfillment"],
        reversed: ["Disharmony at home", "broken relationships", "domestic conflict", "unrealistic expectations"]
    },
    meanings: {
        general: "The Ten of Cups represents ultimate emotional fulfillment and harmonious relationships. It is the picture of a happy family, lasting love, and a joyful home life.",
        upright: "This card signifies a deep sense of connection, alignment with your values, and the attainment of the lasting happiness you have been working toward.",
        reversed: "This card points to conflict and disharmony in the home or close relationships. The picture-perfect ideal may be shattered by unrealistic expectations or broken trust."
    },
    advice: {
        upright: "Embrace this period of harmonious relationships and joyful family life. Appreciate the peace and emotional fulfillment that surrounds you.",
        reversed: "Beware of conflict and disharmony that may disrupt a seemingly peaceful situation. The 'false heart' suggests that things may not be as content as they appear on the surface."
    }
},
{
    name: "Page of Cups",
    number: "11",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c11.jpg",
    keywords: {
        upright: ["Creative opportunities", "intuition", "emotional messages", "curiosity", "sensitivity"],
        reversed: ["Emotional immaturity", "creative blocks", "insecurity", "moodiness", "escapism"]
    },
    meanings: {
        general: "The Page of Cups arrives with a message from your heart or intuition. It represents a new creative idea, an unexpected emotional opportunity, or an invitation to explore your feelings.",
        upright: "This card encourages you to be open to your intuition and to approach your creative and emotional life with childlike curiosity and a sense of wonder.",
        reversed: "This card can point to emotional immaturity or using escapism to avoid dealing with feelings. Creative messages may be blocked by insecurity or moodiness."
    },
    advice: {
        upright: "Be open to creative opportunities and intuitive messages. This is a time for curiosity, reflection, and exploring your emotional and artistic side.",
        reversed: "Be wary of deception or seduction that plays on your inclinations. Use your judgment to discern between genuine attachment and clever artifice."
    }
},
{
    name: "Knight of Cups",
    number: "12",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c12.jpg",
    keywords: {
        upright: ["Romance", "charm", "an offer", "an invitation", "idealism", "following the heart"],
        reversed: ["Unrealistic expectations", "moodiness", "emotional manipulation", "disappointment"]
    },
    meanings: {
        general: "The Knight of Cups is a classic romantic, an idealist who leads with their heart. He represents an invitation, a proposition (romantic or creative), or a charming artistic person.",
        upright: "This card encourages you to act on your feelings and pursue your creative visions, but reminds you to stay grounded and not get lost in pure fantasy.",
        reversed: "This card warns of being swept away by unrealistic fantasies. An offer may not be what it seems, or a person's charm may be a form of emotional manipulation."
    },
    advice: {
        upright: "Accept the romantic or creative offer being presented to you. It is a time to be charming, follow your heart, and act on your imagination.",
        reversed: "Be cautious of offers that seem too good to be true. Someone may be using charm and subtlety to deceive you. Look for signs of fraud."
    }
},
{
    name: "Queen of Cups",
    number: "13",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c13.jpg",
    keywords: {
        upright: ["Emotional intelligence", "intuition", "compassion", "empathy", "nurturing", "calmness"],
        reversed: ["Emotional insecurity", "being overwhelmed", "co-dependency", "martyrdom"]
    },
    meanings: {
        general: "The Queen of Cups represents a deep mastery of the emotional and intuitive realms. She is compassionate and empathetic, able to connect with others while maintaining inner calm.",
        upright: "This card encourages you to trust your intuition, to nurture yourself and others, and to lead with your heart. It signifies a time of emotional stability and intelligence.",
        reversed: "This card indicates that you are feeling emotionally insecure or overwhelmed. It warns against becoming co-dependent or playing the martyr in your relationships."
    },
    advice: {
        upright: "Embody compassion, emotional stability, and intuition. Trust your inner vision and lead with your heart. Nurture yourself and others.",
        reversed: "Be wary of emotional manipulation or someone whose character is questionable. Alternatively, examine if you are using your emotional intelligence in a perverse or dishonorable way."
    }
},
{
    name: "King of Cups",
    number: "14",
    arcana: "Minor Arcana",
    suit: "Cups",
    img: "c14.jpg",
    keywords: {
        upright: ["Emotional maturity", "compassion", "diplomacy", "self-control", "balance"],
        reversed: ["Emotional manipulation", "moodiness", "volatility", "repression", "out of touch"]
    },
    meanings: {
        general: "The King of Cups represents the mastery of the emotional realm. He is a compassionate and diplomatic leader who balances his heart and his head, offering wise counsel.",
        upright: "This card signifies emotional maturity and self-control. It encourages you to take responsibility for your feelings and act with both kindness and clarity.",
        reversed: "This card warns of emotional manipulation or volatility. It can represent someone who is out of touch with their feelings or who uses them to control others."
    },
    advice: {
        upright: "Approach your situation with emotional maturity and diplomacy. Use both your intellect and your compassion to make balanced decisions. Be a responsible and fair leader.",
        reversed: "Beware of emotional manipulation or a person in power who is dishonest. Do not let your emotions lead you into scandalous or unjust situations."
    }
},
{
    name: "Ace of Swords",
    number: "1",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s01.jpg",
    keywords: {
        upright: ["Breakthrough", "clarity", "truth", "new idea", "mental power", "focus"],
        reversed: ["Confusion", "lack of clarity", "misinformation", "poor decisions", "mental fog"]
    },
    meanings: {
        general: "The Ace of Swords represents a powerful breakthrough in understanding. It is a moment of pure mental clarity that cuts through confusion and reveals the truth.",
        upright: "This card signifies a new idea, a new perspective, or a new plan that has the power to bring success. It encourages you to use your intellect with focus, honesty, and precision.",
        reversed: "This card indicates a period of mental fog or confusion. Misinformation or poor communication may be blocking your path forward, leading to flawed decisions."
    },
    advice: {
        upright: "Use your mental clarity and intellectual power to cut through confusion and achieve your goals. Be aware that this force is powerful and can be used for both creation and destruction.",
        reversed: "Be cautious, as your plans could lead to disastrous results. Re-evaluate your approach, as a forceful idea may backfire. Seek clarity before acting."
    }
},
{
    name: "Two of Swords",
    number: "2",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s02.jpg",
    keywords: {
        upright: ["Stalemate", "difficult choice", "avoidance", "truce", "denial", "indecision"],
        reversed: ["Indecision", "confusion", "information overload", "seeing the truth", "making a choice"]
    },
    meanings: {
        general: "The Two of Swords represents a stalemate or a difficult choice you are trying to avoid. By being 'blindfolded,' you are deliberately blocking out information to maintain peace.",
        upright: "This card signifies a necessary truce, but warns that you cannot remain in this state of indecision forever. A difficult choice must be made to move forward.",
        reversed: "This card suggests that the blindfold is coming off. You are being forced to face the truth and can no longer avoid the decision, however difficult it may be."
    },
    advice: {
        upright: "Acknowledge the stalemate you are in. It may be necessary to make a truce or temporarily block out external input to find your inner balance. A difficult choice is at hand.",
        reversed: "The truce may be false. Be wary of deceit. It is time to remove the blindfold and face the truth, however difficult, to end the stalemate."
    }
},
{
    name: "Three of Swords",
    number: "3",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s03.jpg",
    keywords: {
        upright: ["Heartbreak", "painful truth", "sorrow", "grief", "separation", "betrayal"],
        reversed: ["Releasing pain", "forgiveness", "healing", "recovery", "holding onto sorrow"]
    },
    meanings: {
        general: "The Three of Swords represents a painful but necessary truth that leads to heartbreak, sorrow, or grief. It is the piercing 'aha!' moment of a painful realization.",
        upright: "While deeply upsetting, the clarity this card brings is ultimately liberating, as it removes illusion and allows the process of true healing to begin.",
        reversed: "This card signifies the recovery process after a period of heartbreak. It is about releasing pain, forgiving, and slowly moving toward healing."
    },
    advice: {
        upright: "Accept the painful truth that has been revealed. While it brings sorrow and heartbreak, this clarity is necessary to move forward and heal.",
        reversed: "Your thoughts are in a state of chaos and confusion. Avoid making important decisions until you can clear your mind and find a sense of order and forgiveness."
    }
},
{
    name: "Four of Swords",
    number: "4",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s04.jpg",
    keywords: {
        upright: ["Rest", "recuperation", "contemplation", "meditation", "sanctuary", "taking a break"],
        reversed: ["Burnout", "exhaustion", "avoiding rest", "re-entering the world", "restlessness"]
    },
    meanings: {
        general: "The Four of Swords signifies a necessary period of rest, contemplation, and mental recuperation. After a period of conflict or stress, it is an invitation to retreat and recharge.",
        upright: "This card is a sign to take a break. It is a time for quiet reflection and meditation, allowing you to recover your strength before returning to the challenges of the world.",
        reversed: "This card warns of burnout and exhaustion from avoiding necessary rest. Alternatively, it can signify that a period of rest is over and it is time to re-enter the world."
    },
    advice: {
        upright: "Take a period of rest and recuperation. You need to retreat from the world to recover your mental strength. This is a time for quiet contemplation, not action.",
        reversed: "It is time to return to action after a period of rest, but do so with caution and wise planning. Manage your resources carefully to ensure success."
    }
},
{
    name: "Five of Swords",
    number: "5",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s05.jpg",
    keywords: {
        upright: ["Conflict", "hollow victory", "defeat", "dishonor", "winning at all costs", "discord"],
        reversed: ["Reconciliation", "moving on", "ending conflict", "releasing resentment", "forgiveness"]
    },
    meanings: {
        general: "The Five of Swords represents a conflict where winning comes at too high a cost. It points to a hollow victory achieved through aggression or dishonor, leaving everyone feeling defeated.",
        upright: "This card serves as a warning about the consequences of unbridled ambition and encourages you to choose your battles wisely, recognizing that sometimes it's better to walk away.",
        reversed: "This card signifies a desire to end conflict and move on. It is a time for reconciliation, releasing resentment, and seeking a peaceful resolution."
    },
    advice: {
        upright: "Be careful not to pursue victory at all costs. A win achieved through dishonorable means is not a true success. It may be better to walk away from a conflict than to win it this way.",
        reversed: "Acknowledge a defeat or a significant loss. This is a time for mourning and accepting the consequences of a destructive conflict to allow for reconciliation."
    }
},
{
    name: "Six of Swords",
    number: "6",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s06.jpg",
    keywords: {
        upright: ["Transition", "moving on", "rite of passage", "leaving baggage behind", "finding refuge"],
        reversed: ["Stuck in the past", "emotional baggage", "resistance to change", "unfinished business"]
    },
    meanings: {
        general: "The Six of Swords represents a necessary transition, often a sad but hopeful journey from a place of turmoil to one of peace and clarity.",
        upright: "This card is about leaving difficulties behind and moving toward a more stable future. While there may be a sense of loss, it is a positive sign that you are on the path to healing.",
        reversed: "This card indicates that you are resisting a necessary transition. You may be unable to let go of the past, carrying emotional baggage that prevents you from finding peace."
    },
    advice: {
        upright: "It is time to move on from a difficult situation. This transition may be sad, but it is necessary to find peace. Allow yourself to be carried towards a calmer future.",
        reversed: "The time has come to declare your intentions or confess a truth. Address your emotional baggage so that you can finally move on from the past."
    }
},
{
    name: "Seven of Swords",
    number: "7",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s07.jpg",
    keywords: {
        upright: ["Strategy", "stealth", "resourcefulness", "acting alone", "deception", "betrayal"],
        reversed: ["Confession", "facing the truth", "clearing one's conscience", "getting caught"]
    },
    meanings: {
        general: "The Seven of Swords signifies a need for strategy, discretion, and sometimes stealth. You may feel the need to act alone or bend the rules to achieve your goals.",
        upright: "This card carries a warning about deception and betrayal. It encourages you to be resourceful but to act with a clear conscience, as shortcuts can have unintended consequences.",
        reversed: "This card indicates that a secret is being revealed. It can represent a confession, getting caught, or the decision to face the truth and clear your conscience."
    },
    advice: {
        upright: "You may need to use strategy or act alone to achieve your goal. Be cautious and do not reveal your entire plan. However, be aware that this approach carries risk.",
        reversed: "Heed the good advice you are being given, but be wary of slander. It is a time to listen more and speak less, and to face the truth of a situation."
    }
},
{
    name: "Eight of Swords",
    number: "8",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s08.jpg",
    keywords: {
        upright: ["Self-imposed restriction", "victim mentality", "feeling trapped", "limiting beliefs"],
        reversed: ["Breaking free", "release", "challenging beliefs", "taking control", "empowerment"]
    },
    meanings: {
        general: "The Eight of Swords represents a state of feeling trapped and powerless, but this restriction comes from your own limiting beliefs and perspective, not external circumstances.",
        upright: "The bindings in this card are loose, and the swords can be walked away from. It is a powerful reminder that you have the ability to free yourself by challenging your own thoughts.",
        reversed: "This card signifies a moment of empowerment. You are challenging your limiting beliefs, releasing your fears, and recognizing that you have the power to break free."
    },
    advice: {
        upright: "Recognize that you are not as trapped as you feel. The restrictions you face are largely self-imposed by your own thoughts and beliefs. You have the power to free yourself.",
        reversed: "Be prepared for unexpected difficulties and opposition. Treachery may be at play, but you have the power to release yourself from the situation by facing it directly."
    }
},
{
    name: "Nine of Swords",
    number: "9",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s09.jpg",
    keywords: {
        upright: ["Anxiety", "fear", "nightmares", "worry", "despair", "mental anguish"],
        reversed: ["Facing your fears", "seeking help", "release from anxiety", "unfounded fears"]
    },
    meanings: {
        general: "Often called the 'nightmare card,' the Nine of Swords signifies deep anxiety, fear, and mental anguish that keep you up at night. Your worries have become overwhelming.",
        upright: "This card often points out that your fears are happening in your mind, not necessarily in reality. It is a call to share your burdens and challenge the thoughts tormenting you.",
        reversed: "This card represents the process of facing your fears and seeking help. You are finding ways to release your anxiety, often by realizing your fears were exaggerated."
    },
    advice: {
        upright: "Confront the anxieties and fears that are tormenting your mind. Your worries may be worse in your head than in reality. Seek help if you are overwhelmed by despair.",
        reversed: "Your fears may be based in reality. It is a time to be suspicious and cautious. Trust your gut feelings about a doubtful person or situation, but seek evidence."
    }
},
{
    name: "Ten of Swords",
    number: "10",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s10.jpg",
    keywords: {
        upright: ["Rock bottom", "final ending", "betrayal", "painful conclusion", "surrender", "burnout"],
        reversed: ["Recovery", "healing", "resisting the end", "a close call", "moving on"]
    },
    meanings: {
        general: "The Ten of Swords represents a painful but final ending. You have hit rock bottom, and the situation is over. It is a card of liberation through surrender.",
        upright: "While it signifies betrayal, loss, and the pain of defeat, the sun is rising in the background, signaling that the worst is now over and the only way to go is up.",
        reversed: "This card signifies a process of recovery after hitting rock bottom. It can also represent a near-disaster that was avoided at the last minute, or resisting a necessary ending."
    },
    advice: {
        upright: "Acknowledge that you have hit rock bottom. While this is a painful and desolate ending, it is also a turning point. The only way from here is up. Surrender to the finality.",
        reversed: "Look for opportunities to turn a difficult situation to your advantage. Even after a defeat, you can seize power and find a measure of success by learning from it."
    }
},
{
    name: "Page of Swords",
    number: "11",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s11.jpg",
    keywords: {
        upright: ["Curiosity", "thirst for knowledge", "new ideas", "communication", "restlessness"],
        reversed: ["Scattered thoughts", "gossip", "defensiveness", "speaking without thinking", "cynicism"]
    },
    meanings: {
        general: "The Page of Swords embodies a restless, curious, and energetic mind. Full of new ideas, this Page has a thirst for knowledge and a desire to communicate.",
        upright: "This card represents an energy of asking questions, seeking truth, and learning new things. While this energy is brilliant, be mindful not to become scattered or use words carelessly.",
        reversed: "This card warns against speaking without thinking. It can signify defensiveness, a cynical attitude, or engaging in malicious gossip, stemming from scattered or insecure thoughts."
    },
    advice: {
        upright: "Be vigilant and mentally sharp. This is a time to gather information, ask questions, and be curious. However, be mindful not to cross the line into indiscretion.",
        reversed: "Be prepared for unexpected challenges or news. Your lack of preparation could be your downfall. Beware of using your words or knowledge for malicious purposes."
    }
},
{
    name: "Knight of Swords",
    number: "12",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s12.jpg",
    keywords: {
        upright: ["Ambition", "drive", "focus", "quick thinking", "directness", "assertiveness"],
        reversed: ["Recklessness", "arrogance", "aggression", "tactlessness", "burnout"]
    },
    meanings: {
        general: "The Knight of Swords is a force of focused, intellectual energy, charging forward to achieve a goal with speed and determination. He represents ambition and quick thinking.",
        upright: "This card encourages you to be direct and assertive in pursuing your goals. However, in his haste, the Knight can be tactless, so it advises tempering your charge with foresight.",
        reversed: "This card warns of acting with recklessness, arrogance, or aggression. This approach can lead to burnout and alienate others, undermining your own goals."
    },
    advice: {
        upright: "Charge forward with ambition and intellectual clarity to achieve your goal. Be direct and decisive. However, be mindful that your forcefulness can be perceived as aggressive.",
        reversed: "Re-evaluate your plan before you act. Your current approach may be imprudent and lead to failure. Do not waste your energy arguing with those who will not listen to reason."
    }
},
{
    name: "Queen of Swords",
    number: "13",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s13.jpg",
    keywords: {
        upright: ["Intellectual clarity", "independence", "sharp boundaries", "unbiased truth"],
        reversed: ["Coldness", "cruelty", "bitterness", "resentment", "gossip", "manipulation"]
    },
    meanings: {
        general: "The Queen of Swords is a powerful archetype of intellectual clarity and independence. She uses her sharp mind to cut through illusion and get to the heart of the matter.",
        upright: "This card encourages you to think independently and communicate with direct, unbiased precision. She values truth, honesty, and clear boundaries, often born from past sorrows.",
        reversed: "This card can represent a person who uses their intelligence for cruelty or manipulation. It warns against becoming cold, bitter, or engaging in malicious gossip."
    },
    advice: {
        upright: "Use your intellect and experience to cut through illusion and set clear boundaries. This is a time for unbiased judgment and direct communication, even if the truth is painful.",
        reversed: "Beware of a person who may be acting with malice or deceit. Alternatively, examine your own thoughts to ensure you are not being overly critical, cold-hearted, or bigoted."
    }
},
{
    name: "King of Swords",
    number: "14",
    arcana: "Minor Arcana",
    suit: "Swords",
    img: "s14.jpg",
    keywords: {
        upright: ["Intellectual authority", "truth", "clarity", "logic", "ethical judgment", "objectivity"],
        reversed: ["Misuse of power", "manipulation", "irrationality", "coldness", "tyrannical"]
    },
    meanings: {
        general: "The King of Swords represents the pinnacle of intellectual authority and clarity. He is a master of truth and logic, making decisions based on facts rather than emotion.",
        upright: "This card encourages you to embody this energy, using your intellect to lead with fairness, articulate your vision clearly, and cut through confusion.",
        reversed: "This card warns of a misuse of intellectual power. It can represent a manipulative or tyrannical figure who is cold, irrational, and controlling."
    },
    advice: {
        upright: "Lead with intellectual authority and clarity. Make decisions based on logic, truth, and justice. This is a time to be a master of your thoughts and communicate with precision.",
        reversed: "Be wary of an abuse of power, either from yourself or others. Intellectual clarity can become cruelty if it is not tempered with compassion. Avoid manipulative intentions."
    }
},
{
    name: "Ace of Pentacles",
    number: "1",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p01.jpg",
    keywords: {
        upright: ["New opportunity", "manifestation", "prosperity", "abundance", "grounding"],
        reversed: ["Missed opportunity", "poor planning", "lack of foresight", "shortsightedness"]
    },
    meanings: {
        general: "The Ace of Pentacles is a seed of opportunity being offered in the material world. It signifies a new job, a financial gift, a new home, or a project with potential for prosperity.",
        upright: "This card encourages you to seize this chance for abundance. It is a time to ground your plans in reality and begin the work needed to manifest your goals.",
        reversed: "This card indicates a missed opportunity or a venture that failed due to poor planning. It warns against making shortsighted decisions regarding your resources."
    },
    advice: {
        upright: "Seize the new opportunity for prosperity and material well-being. This is a time to manifest your goals into reality and enjoy the contentment that comes with it.",
        reversed: "Be mindful that great wealth can have a negative side. Ensure your pursuit of material gain is not leading you down a path of corruption or bad decisions."
    }
},
{
    name: "Two of Pentacles",
    number: "2",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p02.jpg",
    keywords: {
        upright: ["Balancing priorities", "adaptability", "flexibility", "time management", "juggling"],
        reversed: ["Disorganization", "overwhelm", "poor financial management", "dropping the ball"]
    },
    meanings: {
        general: "The Two of Pentacles represents the act of juggling multiple priorities, often related to finances, work, and home life. It is a card of adaptability and flexibility.",
        upright: "This card reminds you to stay nimble as you navigate a busy or unpredictable period. It encourages you to find a rhythm and manage your time and resources effectively.",
        reversed: "This card signifies that you are feeling overwhelmed and disorganized. You may be struggling to manage your finances or dropping the ball on important responsibilities."
    },
    advice: {
        upright: "Be adaptable and flexible as you juggle your priorities. It's a busy time, but you have the skill to keep everything in balance. Find the fun in the challenge.",
        reversed: "Acknowledge if you are putting on a brave face. If your enjoyment is forced, it may be time to re-evaluate your commitments and simplify your life."
    }
},
{
    name: "Three of Pentacles",
    number: "3",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p03.jpg",
    keywords: {
        upright: ["Teamwork", "collaboration", "craftsmanship", "skill", "recognition", "implementation"],
        reversed: ["Poor collaboration", "lack of synergy", "mediocre work", "no recognition"]
    },
    meanings: {
        general: "The Three of Pentacles is a card of teamwork, collaboration, and the successful application of skill. Your unique talents are recognized and valued as part of a larger project.",
        upright: "This card encourages you to work with others, to learn from your collaborators, and to take pride in the high-quality work you are creating together.",
        reversed: "This card points to a lack of teamwork or synergy. It can signify mediocre work due to poor collaboration or a feeling that your skills are not being recognized."
    },
    advice: {
        upright: "Your hard work and skill are being recognized. This is a time for teamwork and collaboration. Continue to hone your craft and take pride in your work.",
        reversed: "Do not settle for mediocre work. Address any tendencies towards pettiness or weakness in your approach. It may be time to apply yourself with more dedication."
    }
},
{
    name: "Four of Pentacles",
    number: "4",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p04.jpg",
    keywords: {
        upright: ["Security", "stability", "conservation", "possessiveness", "control", "scarcity mindset"],
        reversed: ["Generosity", "releasing control", "financial insecurity", "reckless spending", "openness"]
    },
    meanings: {
        general: "The Four of Pentacles represents a strong desire for security and control over one's material world. It can manifest as being conservative, but also as hoarding out of fear.",
        upright: "This card asks you to examine if your need for control is blocking you from generosity and the flow of abundance. It points to a scarcity mindset and possessiveness.",
        reversed: "This card signifies a release of control, often leading to generosity and openness. However, it can also warn of financial insecurity due to reckless spending."
    },
    advice: {
        upright: "It is wise to be conservative with your resources and build a secure foundation. However, be mindful not to become too possessive or closed off to generosity.",
        reversed: "Your progress may be blocked by delays and opposition. Loosen your grip on your plans and be prepared to adapt. Trying to control everything too tightly will only lead to more suspense."
    }
},
{
    name: "Five of Pentacles",
    number: "5",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p05.jpg",
    keywords: {
        upright: ["Hardship", "poverty", "isolation", "financial loss", "insecurity", "feeling left out"],
        reversed: ["Recovery from hardship", "finding help", "forgiveness", "positive change", "end of isolation"]
    },
    meanings: {
        general: "The Five of Pentacles signifies a period of hardship, financial loss, and insecurity. It represents a feeling of being isolated and left out in the cold.",
        upright: "This card shows that help and sanctuary may be nearby, even if you can't see it. It encourages you to swallow your pride and ask for help to overcome your hardship.",
        reversed: "This card signifies a recovery from hardship. You are finding the help you need, and the period of isolation is coming to an end. It represents positive change and hope."
    },
    advice: {
        upright: "Do not be afraid to ask for help during this time of hardship. Support may be available nearby, even if you feel isolated. Focus on connections, not just material lack.",
        reversed: "Address the chaos and disorder in your material life. Reckless spending or a lack of planning can lead to ruin. It is time to create structure and order."
    }
},
{
    name: "Six of Pentacles",
    number: "6",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p06.jpg",
    keywords: {
        upright: ["Generosity", "charity", "giving and receiving", "financial help", "balance", "patronage"],
        reversed: ["Unequal exchange", "strings attached", "debt", "greed", "misusing power"]
    },
    meanings: {
        general: "The Six of Pentacles is a card of generosity, charity, and the dynamic of giving and receiving. It encourages a balanced and fair flow of resources.",
        upright: "This card can represent receiving financial help or being in a position to help others. It calls for fairness and equality in all exchanges.",
        reversed: "This card warns of an unequal exchange. A gift may have strings attached, or it can point to greed and the misuse of financial power over others."
    },
    advice: {
        upright: "Be generous with your resources, whether you are in the position of giving or receiving. Appreciate the prosperity you have now, but manage it wisely for the future.",
        reversed: "Be mindful of feelings of greed and envy, both in yourself and others. Do not let the desire for what you don't have poison your appreciation for what you do have."
    }
},
{
    name: "Seven of Pentacles",
    number: "7",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p07.jpg",
    keywords: {
        upright: ["Patience", "long-term vision", "investment", "perseverance", "assessment"],
        reversed: ["Impatience", "frustration", "wasted effort", "lack of long-term vision", "giving up"]
    },
    meanings: {
        general: "The Seven of Pentacles represents a moment of pause to assess your progress. You have invested time and energy, and now you must review the results before the final harvest.",
        upright: "This card urges you to be patient and ensure your long-term strategy is sound before continuing your efforts. It is a time for reflection on your investments.",
        reversed: "This card warns against impatience and frustration. You may be tempted to give up on a long-term project because you are not seeing immediate results."
    },
    advice: {
        upright: "Take a moment to evaluate your progress. Your hard work is beginning to pay off, but patience is required before you can fully reap the rewards. Reflect on your investments.",
        reversed: "Address your anxieties about your finances. Impatience and suspicion will not make your investments grow any faster. Trust the process and have faith in your hard work."
    }
},
{
    name: "Eight of Pentacles",
    number: "8",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p08.jpg",
    keywords: {
        upright: ["Skill development", "mastery", "diligence", "craftsmanship", "apprenticeship"],
        reversed: ["Perfectionism", "repetitive work", "mediocre quality", "lack of passion", "feeling stuck"]
    },
    meanings: {
        general: "The Eight of Pentacles is about dedication to your craft. It signifies a period of diligent work, honing your skills, and paying close attention to detail.",
        upright: "Whether you are an apprentice learning a new skill or a master perfecting your work, this card encourages you to take pride in what you do and commit yourself to high standards.",
        reversed: "This card can signify that your work has become repetitive and lacks passion. It also warns against perfectionism that is preventing you from completing your tasks."
    },
    advice: {
        upright: "Dedicate yourself to your work or craft. This is a time for diligence, attention to detail, and honing your skills. Take pride in the work you are doing.",
        reversed: "Ensure your ambition is not turning into vanity or greed. Do not use your skills for cunning or intrigue. Reconnect with the simple love of your craft."
    }
},
{
    name: "Nine of Pentacles",
    number: "9",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p09.jpg",
    keywords: {
        upright: ["Self-sufficiency", "financial independence", "abundance", "discipline", "luxury"],
        reversed: ["Financial dependence", "superficiality", "recklessness", "living beyond your means"]
    },
    meanings: {
        general: "The Nine of Pentacles represents enjoying the fruits of your labor in a state of graceful self-sufficiency. You have worked hard to achieve financial independence and security.",
        upright: "This card encourages you to savor the comfort, luxury, and freedom that your efforts have created. It is a testament to your discipline and hard work.",
        reversed: "This card warns of living beyond your means or becoming financially dependent on others. It can point to a superficial enjoyment of luxury without a solid foundation."
    },
    advice: {
        upright: "Enjoy the fruits of your labor. You have earned this period of financial independence and self-sufficiency. Take time to appreciate the luxury and security you have created.",
        reversed: "Be wary of deception or bad faith that could threaten your security. A project you thought was certain may fail. Do not take your accomplishments for granted."
    }
},
{
    name: "Ten of Pentacles",
    number: "10",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p10.jpg",
    keywords: {
        upright: ["Legacy", "inheritance", "family wealth", "long-term security", "tradition", "stability"],
        reversed: ["Family conflict", "financial instability", "breaking tradition", "fleeting success"]
    },
    meanings: {
        general: "The Ten of Pentacles represents the pinnacle of material world success, viewed through the lens of family and legacy. It signifies long-term financial stability and tradition.",
        upright: "This card points to a solid foundation that supports not just you, but your entire family structure. It is a card of lasting, established wealth and security.",
        reversed: "This card can indicate a conflict over family wealth or a break from tradition. It warns that success may be fleeting if it lacks a stable, long-term foundation."
    },
    advice: {
        upright: "Consider your long-term security and the legacy you are building for your family. This is a time of stability and established wealth.",
        reversed: "Be cautious with your finances, as there is a risk of loss through chance or robbery. Avoid gambling and risky ventures. Your long-term security could be at stake."
    }
},
{
    name: "Page of Pentacles",
    number: "11",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p11.jpg",
    keywords: {
        upright: ["New opportunity", "learning", "manifestation", "curiosity", "grounding a new idea"],
        reversed: ["Procrastination", "lack of commitment", "missed opportunities", "unrealistic plans"]
    },
    meanings: {
        general: "The Page of Pentacles is the eternal student, eager to learn practical skills. This card brings a message of a new, tangible opportunity, like a job or course of study.",
        upright: "This card encourages you to be studious and grounded as you explore how to turn your dreams into reality. It is a time for diligent application.",
        reversed: "This card signifies a lack of commitment or procrastination that is causing you to miss opportunities. Your plans may be unrealistic and lack a solid grounding."
    },
    advice: {
        upright: "This is a time for diligent study and practical application. Focus on learning a new skill or managing a new project. A tangible opportunity is available if you apply yourself.",
        reversed: "Be mindful of wasteful spending and a focus on luxury over substance. Unfavourable news regarding your material world may be coming. It is time to be practical."
    }
},
{
    name: "Knight of Pentacles",
    number: "12",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p12.jpg",
    keywords: {
        upright: ["Hard work", "routine", "diligence", "reliability", "patience", "methodical"],
        reversed: ["Boredom", "stagnation", "laziness", "feeling stuck", "stubbornness"]
    },
    meanings: {
        general: "The Knight of Pentacles is the most patient and diligent of the Knights. He represents a methodical, routine-based approach to achieving his goals.",
        upright: "This card encourages you to stick to your tasks with dedication and trustworthiness. Progress may be slow, but it will be steady and reliable.",
        reversed: "This card signifies that a routine has become mind-numbing boredom, leading to stagnation and laziness. It warns against being too stubborn to change your methods."
    },
    advice: {
        upright: "Adopt a methodical, hardworking, and reliable approach to your goals. Progress may be slow, but it will be steady. Fulfill your responsibilities with diligence.",
        reversed: "Guard against laziness and stagnation. If you are feeling discouraged or stuck in a rut, it is time to break your routine and find a new, more active approach."
    }
},
{
    name: "Queen of Pentacles",
    number: "13",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p13.jpg",
    keywords: {
        upright: ["Nurturing", "practical", "resourceful", "financially secure", "down-to-earth"],
        reversed: ["Self-care neglect", "smothering", "financial dependence", "work-life imbalance"]
    },
    meanings: {
        general: "The Queen of Pentacles is a nurturing and practical figure who provides comfort and security. She is skilled at managing the material world, creating a warm and stable environment.",
        upright: "This card encourages a down-to-earth, caring, and resourceful approach to life. It is about balancing work and home life with skill and generosity.",
        reversed: "This card points to a work-life imbalance or a neglect of self-care. It can also warn of smothering others with your care or becoming financially dependent."
    },
    advice: {
        upright: "Create a secure, nurturing, and abundant environment for yourself and others. Be practical and generous. This is a time to balance work and home life with skill.",
        reversed: "Address feelings of fear, suspicion, or mistrust that are undermining your sense of security. Do not let anxiety prevent you from enjoying the abundance you have."
    }
},
{
    name: "King of Pentacles",
    number: "14",
    arcana: "Minor Arcana",
    suit: "Pentacles",
    img: "p14.jpg",
    keywords: {
        upright: ["Abundance", "prosperity", "security", "mastery", "leadership", "dependable"],
        reversed: ["Greed", "materialism", "stubbornness", "misuse of resources", "instability"]
    },
    meanings: {
        general: "The King of Pentacles represents the pinnacle of material success and mastery. He is a confident and dependable leader who has built a prosperous enterprise.",
        upright: "This card signifies financial security, abundance, and the wisdom to maintain and grow your wealth through discipline and skill.",
        reversed: "This card warns of becoming overly materialistic, greedy, or stubborn. It can point to a misuse of resources that threatens your long-term stability."
    },
    advice: {
        upright: "Take a disciplined and enterprising approach to your business and finances. Your leadership and practical aptitude will lead to long-term success and security.",
        reversed: "Be wary of becoming obsessed with wealth and status to the point of corruption. A stubborn or overly materialistic approach can lead to peril."
    }
}
];