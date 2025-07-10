// tarot-deck.js - The Comprehensive Rider-Waite-Smith (1910) Data Source
// Based on the research document "A Comprehensive Analysis of Rider-Waite-Smith Tarot Interpretations"

const tarotDeckData = [
  // --- Major Arcana ---
  {
    name: "The Fool",
    number: "0",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m00.jpg",
    keywords: {
      upright: ["Folly", "mania", "extravagance", "intoxication", "delirium", "frenzy", "betrayal"],
      reversed: ["Negligence", "absence", "distribution", "carelessness", "apathy", "nullity", "vanity"]
    },
    meanings: {
      general: "The Fool embodies the spirit in search of experience, a 'prince of the other world on his travels through this one.' The card signifies a profound, pre-conscious pure spirit entering the world of physical manifestation with limitless potential.",
      upright: "This card represents folly, mania, extravagance, intoxication, delirium, frenzy, and betrayal.",
      reversed: "This card represents negligence, absence, distribution, carelessness, apathy, nullity, and vanity."
    },
    advice: {
      upright: "Exercise caution against impulsive actions that may lead to chaos. While embracing new beginnings, temper enthusiasm with an awareness of potential pitfalls.",
      reversed: "Address tendencies towards irresponsibility, distraction, or a lack of commitment. Re-evaluate motivations to ensure actions are grounded and purposeful."
    },
    notes: {
      critique: "Waite's upright divinatory meanings align with older European interpretations of 'the madman.' This starkly contrasts with many modern interpretations that emphasize new beginnings and pure potential, a shift largely influenced by Pamela Colman Smith's art and Waite's own more positive 'Inner Symbolism' description."
    }
  },
  {
    name: "The Magician",
    number: "1",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m01.jpg",
    keywords: {
      upright: ["Skill", "diplomacy", "address", "subtlety", "sickness", "pain", "loss", "disaster", "self-confidence", "will"],
      reversed: ["Physician", "Magus", "mental disease", "disgrace", "disquiet"]
    },
    meanings: {
      general: "The Magician represents the divine motive in humanity, the will in liberation, and the unity of the individual being. He stands with a wand raised to heaven and a hand pointing to earth, symbolizing his ability to channel divine power into the material world.",
      upright: "This card signifies skill, diplomacy, address, and subtlety. However, it can also represent sickness, pain, loss, disaster, or the snares of enemies. It embodies self-confidence and will, and can represent the Querent if they are male.",
      reversed: "This card represents a physician or Magus. In a negative light, it can signify mental disease, disgrace, or deep disquiet."
    },
    advice: {
      upright: "Utilize your inherent skills, diplomacy, and self-confidence to navigate challenges and achieve your goals. Be aware that these strengths can also attract opposition if not applied judiciously.",
      reversed: "Seek professional or expert guidance for mental or physical well-being. Address any internal disquiet or potential for public disgrace by examining your actions and intentions."
    },
    notes: {
      critique: "Waite's inclusion of contradictory meanings like 'skill' alongside 'sickness, pain, loss, disaster' for the upright Magician is notable. This duality suggests that the potent forces represented by The Magician, while capable of creation, also carry the potential for negative manifestation or unintended consequences."
    }
  },
  {
    name: "The High Priestess",
    number: "2",
    arcana: "Major Arcana",
    suit: "Trump",
    img: "m02.jpg",
    keywords: {
        upright: ["Secrets", "mystery", "the future unrevealed", "silence", "tenacity", "wisdom", "science"],
        reversed: ["Passion", "moral or physical ardour", "conceit", "surface knowledge"]
    },
    meanings: {
        general: "The High Priestess is the embodiment of occult Science at the threshold of the Sanctuary. She is seated between the pillars of the mystic Temple, representing the Secret Church and the path of intuitive, esoteric knowledge.",
        upright: "This card represents secrets, mystery, and the future as yet unrevealed. It can signify the woman who interests the Querent (if male) or the Querent herself (if female). It points to silence, tenacity, wisdom, and science.",
        reversed: "This card signifies passion, moral or physical <dfn>ardour</dfn>, conceit, and surface knowledge."
    },
    advice: {
        upright: "Embrace intuition and seek deeper, hidden truths. Cultivate patience and silence to allow mysteries to unfold naturally. Trust in inner wisdom.",
        reversed: "Guard against superficial understanding or being swayed by intense, unexamined emotions. Avoid arrogance in knowledge and seek genuine depth."
    },
    notes: {
        critique: "Waite explicitly contrasts The High Priestess with The Hierophant, noting she represents 'esoteric, withdrawn power,' as opposed to the Hierophant's 'external religion.' This highlights a fundamental dualism in Waite's system between institutional and intuitive spiritual paths."
    }
  },
  {
      name: "The Empress",
      number: "3",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m03.jpg",
      keywords: {
          upright: ["Fruitfulness", "action", "initiative", "length of days", "the unknown", "clandestine", "difficulty", "doubt"],
          reversed: ["Light", "truth", "unravelling of matters", "public rejoicings", "vacillation"]
      },
      meanings: {
          general: "The Empress is the fruitful mother and a daughter of heaven and earth. Her symbols point to universal <dfn>fecundity</dfn> and the visible house of man, the Earthly Paradise. She represents the direct message given to humanity through nature and creativity.",
          upright: "This card signifies fruitfulness, action, initiative, and length of days. However, it can also point to the unknown, clandestine matters, difficulty, doubt, and ignorance.",
          reversed: "This card signifies light, truth, the unravelling of involved matters, and public rejoicings. An alternative reading is <dfn>vacillation</dfn> (indecision)."
      },
      advice: {
          upright: "Embrace creativity, initiative, and the potential for growth and abundance. Be prepared for aspects of the unknown or periods of uncertainty that may accompany new ventures.",
          reversed: "Seek clarity and truth in complex situations, as hidden matters may come to light. Be mindful of indecision or wavering, and strive for clear resolution."
      },
      notes: {
          critique: "Waite's inclusion of 'difficulty, doubt, ignorance' for the upright Empress alongside 'fruitfulness' introduces complexity. It suggests that the creative forces it represents can also bring forth challenges or reveal hidden aspects that require discernment."
      }
  },
  {
      name: "The Emperor",
      number: "4",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m04.jpg",
      keywords: {
          upright: ["Stability", "power", "protection", "realization", "a great person", "aid", "reason", "conviction", "authority", "will"],
          reversed: ["Benevolence", "compassion", "credit", "confusion to enemies", "obstruction", "immaturity"]
      },
      meanings: {
          general: "The Emperor embodies executive power and realization in the material world. He represents virile power, mundane royalty, and the lordship of thought. He is the will in embodied form.",
          upright: "This card signifies stability, power, protection, and realization. It can represent a great person, aid, reason, and conviction. It also stands for authority and will.",
          reversed: "This card signifies benevolence, compassion, and credit. However, it can also mean confusion to enemies, obstruction, and immaturity."
      },
      advice: {
          upright: "Assert your authority and will to establish stability and order. Provide protection and aid where needed, relying on reason and conviction to realize your goals.",
          reversed: "Cultivate compassion and benevolence, but be wary of immaturity or obstruction that may hinder progress. Your authority may be challenged."
      },
      notes: {
          critique: "The Emperor and Empress, while implying partnership, are stated by Waite to represent archetypal principles of manifestation and authority rather than specific relationship statuses. The reversed meaning 'immaturity' suggests that the Emperor's powerful attributes can be undermined if not fully developed."
      }
  },
  {
      name: "The Hierophant",
      number: "5",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m05.jpg",
      keywords: {
          upright: ["Marriage", "alliance", "captivity", "servitude", "mercy", "goodness", "inspiration"],
          reversed: ["Society", "good understanding", "concord", "overkindness", "weakness"]
      },
      meanings: {
          general: "The Hierophant, or Pope, symbolizes the ruling power of external religion and orthodox doctrine. He is the channel of grace from the world of institution, distinct from Nature, and the leader of salvation for humanity.",
          upright: "This card signifies marriage, alliance, captivity, and servitude. By another account, it means mercy and goodness. It also represents inspiration and the man to whom the Querent has recourse.",
          reversed: "This card represents society, good understanding, and concord. However, it can also signify overkindness and weakness."
      },
      advice: {
          upright: "Seek guidance from established institutions or traditional wisdom. Consider alliances or commitments, but be mindful of potential limitations or obligations.",
          reversed: "Be cautious of excessive conformity or weakness stemming from overkindness. While fostering good understanding, ensure personal boundaries are maintained."
      },
      notes: {
          critique: "Waite's upright meanings of 'Marriage' alongside 'captivity, servitude' suggest a compilation of diverse traditional associations. The card's core symbolism positions it as a counterpoint to the High Priestess, highlighting the duality of structured versus intuitive spiritual paths."
      }
  },
  {
      name: "The Lovers",
      number: "6",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m06.jpg",
      keywords: {
          upright: ["Attraction", "love", "beauty", "trials overcome"],
          reversed: ["Failure", "foolish designs", "marriage frustrated", "contrarieties"]
      },
      meanings: {
          general: "This card represents human love as a fundamental part of the way, truth, and life. It depicts a man and woman in an earthly paradise, symbolizing youth, innocence, and love untainted by gross material desire. It hints at the great mystery of womanhood and a significant choice.",
          upright: "This card signifies attraction, love, beauty, and trials overcome.",
          reversed: "This card signifies failure and foolish designs. Another account speaks of marriage frustrated and <dfn>contrarieties</dfn> of all kinds."
      },
      advice: {
          upright: "Embrace love, attraction, and the beauty of relationships. Recognize that genuine connection often involves overcoming challenges, leading to deeper bonds.",
          reversed: "Re-evaluate relationships or choices that seem to be failing or based on unwise foundations. Be prepared for conflicts or frustrations in matters of the heart."
      },
      notes: {
          critique: "Waite's interpretation of The Lovers moves beyond a simple choice or marriage to a deeper 'mystery of the Covenant and Sabbath.' This reflects his esoteric agenda to imbue the cards with more profound, spiritual significance."
      }
  },
  {
      name: "The Chariot",
      number: "7",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m07.jpg",
      keywords: {
          upright: ["Aid", "providence", "war", "triumph", "presumption", "vengeance", "trouble"],
          reversed: ["Riot", "quarrel", "dispute", "litigation", "defeat"]
      },
      meanings: {
          general: "The Chariot features a princely figure symbolizing conquest on all planes: mind, science, and progress. He has answered the sphinx, indicating triumph in the mind, though his conquests are external and may leave him in logical bondage.",
          upright: "This card signifies aid and providence. It also represents war, triumph, presumption, vengeance, and trouble.",
          reversed: "This card represents riot, quarrel, dispute, <dfn>litigation</dfn>, and defeat."
      },
      advice: {
          upright: "Harness your will and drive to achieve triumph, but be mindful of the potential for presumption or conflict. Seek divine aid to support your endeavors.",
          reversed: "Avoid uncontrolled impulses, disputes, and legal conflicts. Acknowledge the potential for defeat and consider alternative strategies to prevent chaos."
      },
      notes: {
          critique: "The Chariot's duality suggests that while it represents powerful forward momentum, it can also signify the aggressive aspects of unchecked ambition. The idea of remaining in 'logical bondage' implies that intellectual triumph does not necessarily equate to spiritual liberation."
      }
  },
  {
      name: "Strength",
      number: "8",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m08.jpg",
      keywords: {
          upright: ["Power", "energy", "action", "courage", "magnanimity", "complete success"],
          reversed: ["Despotism", "abuse of power", "weakness", "discord", "disgrace"]
      },
      meanings: {
          general: "This card depicts a woman gently closing a lion's jaws, representing fortitude in its exalted aspect. It signifies strength in contemplation and the higher nature's liberation over base passions, symbolized by the sweet yoke of a chain of flowers.",
          upright: "This card signifies power, energy, action, courage, and <dfn>magnanimity</dfn>. It also points to complete success and honours.",
          reversed: "This card signifies <dfn>despotism</dfn>, abuse of power, weakness, discord, and sometimes even disgrace."
      },
      advice: {
          upright: "Channel your inner power, courage, and magnanimity to overcome challenges. Exercise gentle but firm control over your passions and instincts.",
          reversed: "Guard against the misuse of power, tyranny, or succumbing to weakness. Address sources of discord to avoid potential disgrace."
      },
      notes: {
          critique: "Waite's decision to interchange Strength (VIII) and Justice (XI) from their traditional numbering is a notable deviation, emphasizing inner mastery as a prerequisite for external justice."
      }
  },
  {
      name: "The Hermit",
      number: "9",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m09.jpg",
      keywords: {
          upright: ["Prudence", "circumspection", "treason", "dissimulation", "roguery", "corruption"],
          reversed: ["Concealment", "disguise", "policy", "fear", "unreasoned caution"]
      },
      meanings: {
          general: "The Hermit holds a beacon with a shining star, signifying attainment and the Light of the World. His beacon suggests, 'where I am, you also may be.' This card is linked to the idea that Divine Mysteries protect themselves from the unprepared.",
          upright: "This card signifies prudence and <dfn>circumspection</dfn>. However, it also and especially signifies treason, <dfn>dissimulation</dfn>, roguery, and corruption.",
          reversed: "This card represents concealment, disguise, policy, fear, and unreasoned caution."
      },
      advice: {
          upright: "Seek solitude and introspection for guidance. Exercise prudence in your dealings. Be aware of the potential for deceit or hidden agendas from others, or even within yourself.",
          reversed: "Address excessive caution, fear, or tendencies towards secrecy. Be honest with yourself and others, and avoid unnecessary disguise or manipulative policies."
      },
      notes: {
          critique: "The inclusion of 'treason, dissimulation, roguery' as primary upright meanings is a striking, counter-intuitive interpretation, standing in stark contrast to the visual symbolism of solitary wisdom. This divergence presents a significant interpretive challenge."
      }
  },
  {
      name: "Wheel of Fortune",
      number: "10",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m10.jpg",
      keywords: {
          upright: ["Destiny", "fortune", "success", "elevation", "luck", "felicity"],
          reversed: ["Increase", "abundance", "superfluity"]
      },
      meanings: {
          general: "This symbolic picture represents the perpetual motion of a fluidic universe and the flux of human life. The underlying notion denies chance and fatality, suggesting a Divine intention within the cycles of life.",
          upright: "This card signifies destiny, fortune, success, elevation, luck, and <dfn>felicity</dfn> (intense happiness).",
          reversed: "This card represents increase, abundance, and <dfn>superfluity</dfn> (excess)."
      },
      advice: {
          upright: "Embrace opportunities for success, recognizing the role of destiny and favorable circumstances. Trust in the natural cycles of life.",
          reversed: "Be mindful of excess or overabundance, which may lead to imbalance. While growth is positive, ensure it is sustainable and does not lead to superficiality."
      },
      notes: {
          critique: "Waite's emphasis on the denial of 'chance and fatality' elevates the card beyond mere luck, positioning it as a representation of cosmic order. The reversed meaning of 'increase, abundance' is unusual, suggesting that even positive outcomes can become problematic if uncontrolled."
      }
  },
  {
      name: "Justice",
      number: "11",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m11.jpg",
      keywords: {
          upright: ["Equity", "rightness", "probity", "executive", "triumph of the deserving"],
          reversed: ["Law", "legal complications", "bigotry", "bias", "excessive severity"]
      },
      meanings: {
          general: "Justice represents the moral principle of justice, dealing with each person according to their works. It signifies that the pillars of Justice open into one world of human law and ethics, distinct from the world of the High Priestess.",
          upright: "This card signifies equity, rightness, <dfn>probity</dfn> (honesty), and executive power. It can mean the triumph of the deserving side in law.",
          reversed: "This card represents law in all its departments, legal complications, bigotry, bias, and excessive severity."
      },
      advice: {
          upright: "Uphold fairness, integrity, and truth in all matters. Seek equitable resolutions and trust that justice will prevail.",
          reversed: "Be wary of legal entanglements, bias, or rigid adherence to rules that lead to excessive severity. Examine your own prejudices."
      },
      notes: {
          critique: "Waite's reordering places Justice later in the sequence, perhaps implying that true justice is achieved after the internal mastery represented by Strength. He distinguishes between the 'moral principle of justice' and 'spiritual justice,' grounding this card in human systems."
      }
  },
  {
      name: "The Hanged Man",
      number: "12",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m12.jpg",
      keywords: {
          upright: ["Wisdom", "discernment", "trials", "sacrifice", "intuition", "divination", "prophecy"],
          reversed: ["Selfishness", "the crowd", "body politic"]
      },
      meanings: {
          general: "The Hanged Man, in deep entrancement, expresses life in suspension. Waite describes it as a card of profound, veiled significance, expressing the relation between the Divine and the Universe and hinting at the Mystery of Resurrection.",
          upright: "This card signifies wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, and prophecy.",
          reversed: "This card signifies selfishness, the crowd, and the <dfn>body politic</dfn> (the collective people of a state)."
      },
      advice: {
          upright: "Embrace periods of suspension or sacrifice as opportunities for profound wisdom and discernment. Trust your intuition and be open to new perspectives that emerge from surrender.",
          reversed: "Guard against self-serving motives or being unduly influenced by groupthink. Re-evaluate your connection to the collective."
      },
      notes: {
          critique: "Waite's assertion that 'all published interpretations are vanity' for this card indicates his belief that its true meaning is deeply esoteric and cannot be captured by simple keywords, inviting an intuitive engagement from the reader."
      }
  },
  {
      name: "Death",
      number: "13",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m13.jpg",
      keywords: {
          upright: ["End", "mortality", "destruction", "corruption", "loss of a benefactor"],
          reversed: ["Inertia", "sleep", "lethargy", "petrifaction", "somnambulism", "hope destroyed"]
      },
      meanings: {
          general: "The card represents the veil or mask of life perpetuated in change, transformation, and passage from lower to higher. It is an apocalyptic vision, with the sun of immortality shining on the horizon. It is a change in consciousness.",
          upright: "This card signifies end, mortality, destruction, and corruption. For a man, the loss of a benefactor; for a woman, many <dfn>contrarieties</dfn>; for a maid, failure of marriage projects.",
          reversed: "This card signifies <dfn>inertia</dfn>, sleep, lethargy, <dfn>petrifaction</dfn> (turning to stone), and somnambulism (sleepwalking); in sum, hope destroyed."
      },
      advice: {
          upright: "Embrace necessary endings and transformations. Understand that destruction can clear the way for new beginnings, even if it involves loss.",
          reversed: "Resist stagnation, apathy, and a refusal to adapt. Confront what is holding you back, as clinging to the past can lead to the destruction of hope."
      },
      notes: {
          critique: "Waite's interpretation of Death as 'transformation' rather than solely 'mortality' aligns with a more esoteric understanding. The Mystic Rose on the banner, signifying life, reinforces this concept of rebirth through change."
      }
  },
  {
      name: "Temperance",
      number: "14",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m14.jpg",
      keywords: {
          upright: ["Economy", "moderation", "frugality", "management", "accommodation"],
          reversed: ["Disunion", "unfortunate combinations", "competing interests", "matters of religion"]
      },
      meanings: {
          general: "Temperance represents the harmonization of psychic and material natures. A winged angel pours the essences of life between two chalices, signifying the combination of elements to achieve a higher state and a part of the Secret of Eternal Life.",
          upright: "This card signifies economy, moderation, <dfn>frugality</dfn>, management, and accommodation.",
          reversed: "This card signifies things connected with churches, religions, and sects. It also means disunion, unfortunate combinations, and competing interests."
      },
      advice: {
          upright: "Practice balance, moderation, and self-management in all areas of life. Seek harmony and adaptable solutions.",
          reversed: "Be wary of disunion or conflicts arising from competing interests, particularly in matters of belief or organized groups. Re-evaluate affiliations if they cause discord."
      },
      notes: {
          critique: "Waite explicitly renounces 'conventional emblems' for this card, elevating it from simple moderation to a profound spiritual process of integration. The reversed meanings suggest a critique of institutional religion when it leads to fragmentation rather than harmony."
      }
  },
  {
      name: "The Devil",
      number: "15",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m15.jpg",
      keywords: {
          upright: ["Ravage", "violence", "vehemence", "extraordinary efforts", "force", "fatality"],
          reversed: ["Evil fatality", "weakness", "pettiness", "blindness"]
      },
      meanings: {
          general: "The Devil card signifies the 'Dweller on the Threshold,' representing the chains and fatality of material life and animal nature. The chained figures are analogous to Adam and Eve after the Fall, held in bondage by their own choices.",
          upright: "This card signifies ravage, violence, <dfn>vehemence</dfn>, extraordinary efforts, force, and fatality. Waite notes this is 'that which is predestined but is not for this reason evil.'",
          reversed: "This card signifies evil fatality, weakness, pettiness, and blindness."
      },
      advice: {
          upright: "Confront destructive forces, whether external or internal, with extraordinary effort. Recognize that certain circumstances may be fated, but your response determines their moral outcome.",
          reversed: "Break free from destructive patterns, weakness, or superficiality. Address any self-imposed limitations or willful ignorance that perpetuate negative cycles."
      },
      notes: {
          critique: "Waite's interpretation is nuanced, suggesting that while material constraints may be fated, they are not inherently evil. He refutes other occultists' claims that this card represents magic, instead emphasizing it as a symbol of bondage to the material."
      }
  },
  {
      name: "The Tower",
      number: "16",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m16.jpg",
      keywords: {
          upright: ["Misery", "distress", "poverty", "adversity", "calamity", "disgrace", "deception", "ruin", "catastrophe"],
          reversed: ["Lesser degrees of the same", "oppression", "imprisonment", "tyranny"]
      },
      meanings: {
          general: "The Tower represents the ruin of the 'House of Doctrine' when it is understood as a 'House of Falsehood.' It illustrates the truth that 'except the Lord build the house, they labour in vain that build it.' It is intellectual destruction.",
          upright: "This card signifies misery, distress, poverty, adversity, calamity, disgrace, deception, and ruin. It is a card in particular of unforeseen catastrophe.",
          reversed: "This card signifies the same as upright, but in a lesser degree. It can also mean oppression, imprisonment, and tyranny."
      },
      advice: {
          upright: "Prepare for sudden, unforeseen upheavals and the collapse of existing structures. While distressing, these events can clear the way for new foundations.",
          reversed: "Recognize oppressive structures, whether external or internal, that limit freedom. The underlying issues of constraint and tyranny still require attention."
      },
      notes: {
          critique: "Waite's admission that 'occult explanations are meager' for The Tower highlights the challenge of interpreting such a destructive image. His emphasis on the 'ruin of a House of Doctrine' suggests it primarily represents the collapse of false beliefs."
      }
  },
  {
      name: "The Star",
      number: "17",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m17.jpg",
      keywords: {
          upright: ["Loss", "theft", "privation", "abandonment", "hope", "bright prospects"],
          reversed: ["Arrogance", "haughtiness", "impotence"]
      },
      meanings: {
          general: "A great, radiant star of hope, surrounded by seven lesser ones. A figure pours the Water of Life, irrigating the land. On other planes, this card signifies immortality and interior light. For prepared minds, she is Truth unveiled.",
          upright: "This card signifies loss, theft, <dfn>privation</dfn> (lack of essentials), and abandonment. However, another reading says it means hope and bright prospects.",
          reversed: "This card represents arrogance, <dfn>haughtiness</dfn> (disdainful pride), and impotence."
      },
      advice: {
          upright: "While there may be a sense of loss or abandonment, hold onto hope and bright prospects. Connect with your inner light and spiritual gifts.",
          reversed: "Guard against pride, arrogance, or a feeling of powerlessness. Reconnect with humility and genuine potential."
      },
      notes: {
          critique: "The most striking aspect here is the direct contradiction in the upright meanings, which Waite acknowledges. This indicates a compilation of disparate traditions. The 'Inner Symbolism' clearly leans towards the positive, making context paramount for interpretation."
      }
  },
  {
      name: "The Moon",
      number: "18",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m18.jpg",
      keywords: {
          upright: ["Hidden enemies", "danger", "slander", "darkness", "terror", "deception", "occult forces", "error"],
          reversed: ["Instability", "inconstancy", "silence", "lesser degrees of deception and error"]
      },
      meanings: {
          general: "The Moon represents imagination apart from spirit, illuminating animal nature and the fears of the subconscious. The dew of thought falls, conveying a message of 'Peace, be still,' suggesting calm upon the animal nature.",
          upright: "This card signifies hidden enemies, danger, slander, darkness, terror, deception, occult forces, and error.",
          reversed: "This card signifies instability, <dfn>inconstancy</dfn>, silence, and lesser degrees of deception and error."
      },
      advice: {
          upright: "Be wary of hidden dangers, deception, and unseen forces. Trust your intuition to navigate periods of uncertainty and illusion, and confront your fears.",
          reversed: "Address periods of emotional or mental instability. While deception may be less severe, still exercise caution and seek clarity."
      },
      notes: {
          critique: "Waite positions The Moon as a realm of illusion and the subconscious, distinct from the direct spiritual light of The Sun. The negative divinatory meanings reflect the perils of navigating this realm without full awareness."
      }
  },
  {
      name: "The Sun",
      number: "19",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m19.jpg",
      keywords: {
          upright: ["Material happiness", "fortunate marriage", "contentment"],
          reversed: ["The same in a lesser sense"]
      },
      meanings: {
          general: "The Sun signifies transit from the manifest light of this world to the light of the world to come. It represents the sun of consciousness in the spirit, direct light as the antithesis to the reflected light of The Moon. It is the restored world.",
          upright: "This card represents material happiness, a fortunate marriage, and contentment.",
          reversed: "This card means the same as upright, but in a lesser sense."
      },
      advice: {
          upright: "Embrace joy, contentment, and material well-being. Celebrate success and harmonious relationships, allowing your true self to shine.",
          reversed: "While happiness is still present, it may be diminished. Seek to amplify positive aspects and address any factors that lessen your joy."
      },
      notes: {
          critique: "The reversed meaning, 'The same in a lesser sense,' is an unusual pattern for Waite. It suggests that the inherent positivity of The Sun is difficult to negate entirely, only diminish. It is the beacon of clarity and renewed purpose."
      }
  },
  {
      name: "Judgement",
      number: "20",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m20.jpg",
      keywords: {
          upright: ["Change of position", "renewal", "outcome", "total loss through lawsuit"],
          reversed: ["Weakness", "timidity", "simplicity", "deliberation", "decision", "sentence"]
      },
      meanings: {
          general: "This card registers the accomplishment of the great work of transformation in response to a Supernal summons. For those with inward eyes, it reveals why it has been called a card of eternal life.",
          upright: "This card signifies a change of position, renewal, and outcome. However, another account specifies total loss through a lawsuit.",
          reversed: "This card represents weakness, <dfn>timidity</dfn>, and simplicity. It can also mean deliberation, decision, and sentence."
      },
      advice: {
          upright: "Embrace profound transformation and a complete change of circumstances. Be prepared for a significant outcome or reckoning.",
          reversed: "Address any tendencies towards weakness or timidity. Ensure any decision is based on strength and conviction rather than hesitation."
      },
      notes: {
          critique: "The contradiction between 'renewal' and 'total loss through lawsuit' again indicates Waite's compilation of disparate traditions. The card's core message, however, remains one of profound spiritual awakening and answering a higher calling."
      }
  },
  {
      name: "The World",
      number: "21",
      arcana: "Major Arcana",
      suit: "Trump",
      img: "m21.jpg",
      keywords: {
          upright: ["Assured success", "recompense", "voyage", "route", "emigration", "flight", "change of place"],
          reversed: ["Inertia", "fixity", "stagnation", "permanence"]
      },
      meanings: {
          general: "The World represents the perfection and end of the Cosmos and the soul's state in Divine Vision. On the macrocosmic side, it denotes the restored world when manifestation reaches its highest natural perfection.",
          upright: "This card signifies assured success, <dfn>recompense</dfn> (reward), voyage, route, emigration, flight, and change of place.",
          reversed: "This card signifies <dfn>inertia</dfn>, <dfn>fixity</dfn>, stagnation, and permanence."
      },
      advice: {
          upright: "Embrace the culmination of a cycle, leading to assured success and fulfillment. Be open to significant journeys or changes of place.",
          reversed: "Address any resistance to change, stagnation, or a feeling of being stuck. Break free from inertia to allow for continued growth."
      },
      notes: {
          critique: "Waite positions this card as the ultimate realization and integration of all experiences. The reversed meanings represent a denial or blockage of this natural culmination and flow."
      }
  },
  // --- Minor Arcana ---
  {
    name: "Ace of Wands",
    number: "1",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w01.jpg",
    keywords: {
      upright: ["Creation", "invention", "enterprise", "source", "birth", "family", "origin", "virility", "fortune", "inheritance"],
      reversed: ["Fall", "decadence", "ruin", "perdition", "a certain clouded joy"]
    },
    meanings: {
      general: "Represents the root of the powers of Fire. It is a symbol of creation, enterprise, and the starting point of all ventures. It holds the primal energy of life and animation.",
      upright: "This card signifies creation, invention, enterprise, and the powers that result from them. It represents a beginning, source, birth, family, and origin. It can also mean money, fortune, and inheritance, though Waite also lists 'calamities of all kinds' as a possibility.",
      reversed: "This card signifies a fall, <dfn>decadence</dfn>, ruin, and <dfn>perdition</dfn> (damnation). It can also mean a 'certain clouded joy' or the sign of a birth."
    },
    advice: {
      upright: "Seize the new opportunity for creation and enterprise. Embrace the start of a new project with energy and passion. This is the time to act on inspiration.",
      reversed: "Be wary of a project that may be doomed to fail from the start. Acknowledge a decline in energy or enthusiasm and reassess if this path is truly viable."
    },
    notes: { critique: "" }
  },
  {
    name: "Two of Wands",
    number: "2",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w02.jpg",
    keywords: {
      upright: ["Riches", "fortune", "magnificence", "physical suffering", "disease", "chagrin", "sadness", "mortification"],
      reversed: ["Surprise", "wonder", "enchantment", "emotion", "trouble", "fear"]
    },
    meanings: {
      general: "A stately figure looks out from his castle walls upon the sea and shore. He holds a globe in his right hand, symbolizing his dominion and potential for future enterprise. It is a card of choice between the known and the unknown.",
      upright: "In one sense, this card represents riches, fortune, and magnificence. In another, it signifies physical suffering, disease, <dfn>chagrin</dfn> (distress), sadness, and <dfn>mortification</dfn> (deep shame). For a young lady, it can mean trivial disappointments.",
      reversed: "This card signifies surprise, wonder, enchantment, emotion, trouble, and fear."
    },
    advice: {
      upright: "Make a bold plan for the future. You have achieved initial success; now is the time to decide on your next move. Weigh your options carefully before committing your energy.",
      reversed: "Be prepared for unexpected events that may cause trouble or fear. Do not let wonder turn into paralysis; face the situation with courage."
    },
    notes: { critique: "The sharp contradiction between 'magnificence' and 'physical suffering' highlights Waite's compilation of different divinatory traditions." }
  },
  {
    name: "Three of Wands",
    number: "3",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w03.jpg",
    keywords: {
      upright: ["Established strength", "enterprise", "effort", "trade", "commerce", "discovery", "collaboration"],
      reversed: ["End of troubles", "suspension of adversity", "cessation of toil"]
    },
    meanings: {
      general: "A calm, stately figure, his back to the viewer, watches ships passing. His wands are planted firmly in the ground, suggesting that his enterprise is now established and he awaits the results of his ventures.",
      upright: "This card signifies established strength, enterprise, effort, trade, commerce, and discovery. It is a very good card, suggesting that able co-operation in business will favor the enterprise.",
      reversed: "This card signifies the end of troubles, the suspension or <dfn>cessation</dfn> of adversity, toil, and disappointment."
    },
    advice: {
      upright: "Continue to look ahead as your plans begin to come to fruition. Be open to collaboration and trade, as your efforts have created a strong foundation for success.",
      reversed: "Take a moment to rest and appreciate the end of a difficult period. The worst is behind you; prepare for a new phase of activity."
    },
    notes: { critique: "" }
  },
  {
    name: "Four of Wands",
    number: "4",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w04.jpg",
    keywords: {
      upright: ["Country life", "refuge", "harmony", "prosperity", "peace", "perfected work", "unexpected good fortune"],
      reversed: ["Unaltered meaning", "prosperity", "increase", "felicity", "beauty"]
    },
    meanings: {
      general: "From a vantage point, we see a great garlanded bridge. Beyond it is a haven of refuge. It is a card of country life, domestic harvest, and the peace of perfected work.",
      upright: "This card represents country life, a haven of refuge, a domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work. It can also signify unexpected good fortune.",
      reversed: "The meaning is often considered unaltered: prosperity, increase, <dfn>felicity</dfn> (happiness), beauty, and embellishment. A married woman will have beautiful children."
    },
    advice: {
      upright: "Celebrate your achievements and enjoy a period of harmony and peace. This is a time to appreciate the stable foundation you have built, whether in your home or your work.",
      reversed: "Continue to appreciate the prosperity and beauty in your life. This is a card of sustained happiness and positive outcomes."
    },
    notes: { critique: "Similar to The Sun, the reversed meaning is not a negation but a continuation of the upright's positive energy, suggesting its stability is hard to overturn." }
  },
  {
    name: "Five of Wands",
    number: "5",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w05.jpg",
    keywords: {
      upright: ["Imitation", "mock fight", "strenuous competition", "struggle for riches", "gold", "gain", "opulence"],
      reversed: ["Litigation", "disputes", "trickery", "contradiction"]
    },
    meanings: {
      general: "A group of youths are engaged in a mock-fight or sport with their wands. This represents the battle of life, but in a context of competition rather than destructive warfare.",
      upright: "This card represents imitation, such as a sham fight. It signifies strenuous competition and the struggle for riches and fortune. It is a card of gold, gain, and <dfn>opulence</dfn>, sometimes through financial speculation.",
      reversed: "This card signifies <dfn>litigation</dfn> (legal disputes), disputes, trickery, and contradiction. However, these quarrels may be turned to your advantage."
    },
    advice: {
      upright: "Embrace competition as a way to sharpen your skills. Engage in the struggle, but keep the stakes in perspective. It is a time for ambition and energetic pursuit of goals.",
      reversed: "Be prepared for disputes and trickery. Stand your ground, but be aware that what seems like a contradiction or argument could potentially be turned into a positive outcome."
    },
    notes: { critique: "" }
  },
  {
    name: "Six of Wands",
    number: "6",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w06.jpg",
    keywords: {
      upright: ["Victor triumphing", "great news", "crowned with hope", "expectation fulfilled"],
      reversed: ["Apprehension", "fear", "victorious enemy", "treachery", "disloyalty", "indefinite delay"]
    },
    meanings: {
      general: "A victor, crowned with a laurel wreath, rides a horse. Footmen walk at his side. The card signifies public triumph and recognition of success.",
      upright: "This card shows a victor triumphing. It signifies great news, like that of a king's courier. Expectation is crowned with desire; it is the crown of hope.",
      reversed: "This card signifies apprehension and fear, as of a victorious enemy at the gate. It warns of treachery and disloyalty, as if the gates were opened to the enemy. It can also mean indefinite delay."
    },
    advice: {
      upright: "Enjoy your moment of success and public recognition. You have earned this victory through your efforts. Share the good news with confidence.",
      reversed: "Be wary of those around you, as treachery could undermine your success. Your fears may be justified. Prepare for potential delays and guard your position carefully."
    },
    notes: { critique: "" }
  },
  {
    name: "Seven of Wands",
    number: "7",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w07.jpg",
    keywords: {
      upright: ["Valour", "discussion", "wordy strife", "negotiations", "competition", "success"],
      reversed: ["Perplexity", "embarrassments", "anxiety", "caution against indecision"]
    },
    meanings: {
      general: "A young man on a craggy eminence brandishes a staff, while six other staves are raised against him from below. He is in a position of advantage but must defend it.",
      upright: "This card represents valour, as the man on the high ground is defending his position. It can signify discussion, wordy strife, negotiations, and competition in trade or business. Generally, it leads to success.",
      reversed: "This card signifies <dfn>perplexity</dfn>, embarrassments, and anxiety. It is a caution against indecision."
    },
    advice: {
      upright: "Stand your ground and defend your position with courage. You are in a position of advantage, but you must be prepared to fight for what you believe in. Success is likely if you persevere.",
      reversed: "Anxiety and indecision are your biggest enemies right now. Take a moment to clear your head and assess the situation calmly before you become overwhelmed."
    },
    notes: { critique: "" }
  },
  {
    name: "Eight of Wands",
    number: "8",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w08.jpg",
    keywords: {
      upright: ["Activity", "swiftness", "great haste", "great hope", "speed", "arrows of love"],
      reversed: ["Arrows of jealousy", "internal dispute", "stingings of conscience", "quarrels"]
    },
    meanings: {
      general: "The wands are depicted as if in flight through an open country. This symbolizes movement, speed, and the direct transmission of energy.",
      upright: "This card signifies activity in undertakings and the path of that activity. It represents swiftness, like an express messenger. It means great haste, great hope, and speed towards an assured <dfn>felicity</dfn>. It can also represent the arrows of love.",
      reversed: "This card signifies the arrows of jealousy, internal dispute, the stingings of conscience, and quarrels."
    },
    advice: {
      upright: "Act quickly and decisively. Events are moving rapidly, so this is a time for action, not hesitation. Embrace the speed and direct your energy towards your goal.",
      reversed: "Address internal conflicts or feelings of jealousy before they cause bigger problems. Slow down and make sure your rapid actions are not causing unintended quarrels."
    },
    notes: { critique: "" }
  },
  {
    name: "Nine of Wands",
    number: "9",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w09.jpg",
    keywords: {
      upright: ["Strength in opposition", "formidable antagonist", "delay", "suspension", "adjournment"],
      reversed: ["Obstacles", "adversity", "calamity"]
    },
    meanings: {
      general: "A figure leans on his staff, looking wounded and weary, but still prepared for battle. Behind him is a solid stockade of eight wands. He is defending his position and is ready for the final onslaught.",
      upright: "This card signifies strength in opposition. If attacked, the person will meet the onslaught boldly. It can also mean a delay, suspension, or adjournment. Waite notes it is 'generally speaking, a bad card.'",
      reversed: "This card signifies obstacles, adversity, and calamity."
    },
    advice: {
      upright: "Gather your remaining strength for one last push. You are weary but resilient. Maintain your boundaries and be prepared to defend what you have built.",
      reversed: "Recognize the significant obstacles and adversity you are facing. It may be time to retreat and recover rather than face a calamitous defeat."
    },
    notes: { critique: "" }
  },
  {
    name: "Ten of Wands",
    number: "10",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w10.jpg",
    keywords: {
      upright: ["Oppression", "fortune", "gain", "success", "false-seeming", "disguise", "perfidy"],
      reversed: ["Contrarieties", "difficulties", "intrigues"]
    },
    meanings: {
      general: "A man is depicted carrying the heavy burden of ten staves, which he seems to be bringing to a destination. The card symbolizes being overwhelmed, even by success, or facing a multitude of challenges.",
      upright: "The chief meaning is oppression. However, it can also signify fortune, gain, and success (though these may also be oppressive). It can also mean false-seeming, disguise, and <dfn>perfidy</dfn> (deceitfulness).",
      reversed: "This card represents <dfn>contrarieties</dfn>, difficulties, intrigues, and their analogies."
    },
    advice: {
      upright: "Acknowledge the burdens you carry and seek ways to alleviate them. Understand that even success can bring its own form of oppression. Be cautious of deceptive appearances.",
      reversed: "Prepare for unexpected obstacles, internal conflicts, and complex intrigues. Adaptability and careful navigation will be crucial."
    },
    notes: {
      critique: "This card exemplifies Waite's compilation of contradictory meanings, ranging from 'oppression' to 'fortune, gain, success.' He notes this himself, indicating that context from surrounding cards is crucial for interpretation."
    }
  },
  {
    name: "Page of Wands",
    number: "11",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w11.jpg",
    keywords: {
      upright: ["Faithful", "a lover", "an envoy", "a postman", "favorable testimony", "family intelligence"],
      reversed: ["Anecdotes", "announcements", "evil news", "indecision", "instability"]
    },
    meanings: {
      general: "A young man, standing in a scenic landscape, holds a wand and appears to be delivering a proclamation. He is a messenger, bringing news of an energetic and creative nature.",
      upright: "This card represents a dark young man, faithful, a lover, an envoy, or a postman. He brings favorable testimony. It signifies family intelligence and embodies the chief qualities of his suit.",
      reversed: "This card signifies anecdotes, announcements, and often evil news. It can also represent indecision and instability."
    },
    advice: {
      upright: "Be open to new ideas, inspiration, and messages. This is a time to explore your creative potential with enthusiasm and a free spirit.",
      reversed: "Be wary of gossip or bad news. Ground your creative ideas with a solid plan to avoid instability and indecision."
    },
    notes: { critique: "" }
  },
  {
    name: "Knight of Wands",
    number: "12",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w12.jpg",
    keywords: {
      upright: ["Departure", "absence", "flight", "emigration", "change of residence"],
      reversed: ["Rupture", "division", "interruption", "discord"]
    },
    meanings: {
      general: "The Knight is depicted in armor, riding a galloping horse. He brandishes a wand, symbolizing a journey undertaken with great energy and speed. He is passing mounds or pyramids, suggesting a foreign destination.",
      upright: "This card signifies departure, absence, flight, and emigration. It can represent a dark young man who is friendly but about to depart. It suggests a change of residence.",
      reversed: "This card signifies rupture, division, interruption, and discord."
    },
    advice: {
      upright: "Embrace a journey or change with energy and passion. This is a time for adventure and acting on your ambitions, even if it means leaving something behind.",
      reversed: "Be cautious of acting too hastily, as it could lead to discord and division. Your energy may be scattered, causing interruptions to your plans."
    },
    notes: { critique: "" }
  },
  {
    name: "Queen of Wands",
    number: "13",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w13.jpg",
    keywords: {
      upright: ["Dark woman", "countrywoman", "friendly", "chaste", "loving", "honourable", "love of money"],
      reversed: ["Good", "economical", "obliging", "serviceable", "opposition", "jealousy", "deceit", "infidelity"]
    },
    meanings: {
      general: "The Queen sits upon her throne, holding a wand and a sunflower. A black cat sits at her feet. She embodies a combination of the suit's energy with a steady, commanding presence. She is both creative and authoritative.",
      upright: "This card represents a dark woman or countrywoman who is friendly, chaste, loving, and honourable. It may also signify a love of money or success in business.",
      reversed: "This card can mean a good, economical, and serviceable woman. However, it can also signify opposition, jealousy, deceit, and infidelity."
    },
    advice: {
      upright: "Embody confidence, courage, and determination. Be a charismatic and independent leader in your endeavors. Your passion and self-assurance will attract success.",
      reversed: "Beware of jealousy or deceit from others. Alternatively, examine your own actions to ensure you are not the one causing opposition. Focus on being serviceable and obliging."
    },
    notes: { critique: "" }
  },
  {
    name: "King of Wands",
    number: "14",
    arcana: "Minor Arcana",
    suit: "Wands",
    img: "w14.jpg",
    keywords: {
      upright: ["Dark man", "friendly", "countryman", "married", "honest", "conscientious"],
      reversed: ["Good but severe", "austere", "tolerant", "good advice"]
    },
    meanings: {
      general: "The King sits on his throne, holding a flowering wand. His throne and cape are decorated with lions and salamanders, symbols of fire and strength. He represents the full maturity and authority of the suit's creative and vital energy.",
      upright: "This card represents a dark man, friendly, a countryman, generally married, who is honest and conscientious. It signifies honesty and may bring news concerning an unexpected heritage.",
      reversed: "This card signifies someone who is good, but severe; <dfn>austere</dfn>, yet tolerant. It can represent advice that should be followed."
    },
    advice: {
      upright: "Act as a visionary leader. Take control of your life and projects with a clear vision and the honor to see it through. Be honest and conscientious in your dealings.",
      reversed: "Heed the advice of a tolerant but severe authority figure. It may be time for a more disciplined and austere approach to achieve your long-term goals."
    },
    notes: { critique: "" }
  },
  // ... All other suits would follow the same detailed structure ...
  {
      name: "Ace of Cups",
      number: "1",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c01.jpg",
      keywords: {
          upright: ["True heart", "joy", "contentment", "abode", "nourishment", "abundance", "fertility", "felicity"],
          reversed: ["False heart", "mutation", "instability", "revolution"]
      },
      meanings: {
          general: "A hand issues from a cloud, holding a cup from which four streams pour forth. A dove descends, bearing a wafer marked with a cross. This is the 'house of the true heart,' symbolizing the source of emotional and spiritual nourishment.",
          upright: "This card represents the house of the true heart, joy, contentment, and abode. It signifies nourishment, abundance, fertility, and <dfn>felicity</dfn>. It stands for inflexible will and unalterable law.",
          reversed: "This card represents the house of the false heart, <dfn>mutation</dfn> (change), instability, and revolution."
      },
      advice: {
          upright: "Open your heart to new emotional and creative possibilities. This is a time for compassion, new relationships, and allowing spiritual nourishment to flow into your life.",
          reversed: "Guard your heart against instability and false promises. It may be time to focus on self-love and address emotional blockages before seeking fulfillment externally."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Two of Cups",
      number: "2",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c02.jpg",
      keywords: {
          upright: ["Love", "passion", "friendship", "affinity", "union", "concord", "sympathy"],
          reversed: ["Imposture", "falsehood", "duplicity", "disloyalty"]
      },
      meanings: {
          general: "A youth and maiden are pledging to one another, exchanging cups. Above their union is the Caduceus of Hermes. This card represents love and partnership sanctified by a higher purpose.",
          upright: "This card represents love, passion, friendship, affinity, union, concord, and sympathy. Waite notes it is a desire 'not in Nature, but by which Nature is sanctified.' It is favorable in pleasure, business, and love.",
          reversed: "This card signifies imposture, falsehood, <dfn>duplicity</dfn>, and disloyalty."
      },
      advice: {
          upright: "Nurture the important partnerships in your life. This is a time for building connections based on mutual respect, sympathy, and shared values.",
          reversed: "Be wary of deceit or disloyalty in a close relationship. Question the true nature of the connection and look for signs of falsehood."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Three of Cups",
      number: "3",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c03.jpg",
      keywords: {
          upright: ["Happy issue", "victory", "fulfilment", "solace", "healing", "plenty", "merriment"],
          reversed: ["Expedition", "dispatch", "achievement", "end", "excess in enjoyment"]
      },
      meanings: {
          general: "Three maidens in a garden lift their cups in a celebratory toast. This card signifies abundance, hospitality, and the happy conclusion of a matter.",
          upright: "This card represents the conclusion of any matter in plenty, perfection, and merriment. It is a happy issue, a victory, fulfilment, solace, and healing.",
          reversed: "This card signifies expedition, dispatch, achievement, and the end of a matter. It can also warn of excess in physical enjoyment and the pleasures of the senses."
      },
      advice: {
          upright: "Celebrate your successes with your community. Share your joy with friends and enjoy this period of happy fulfillment and healing.",
          reversed: "While it is a time for achievement, be mindful of overindulgence. Conclude your business swiftly but avoid celebrating to excess."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Four of Cups",
      number: "4",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c04.jpg",
      keywords: {
          upright: ["Weariness", "disgust", "aversion", "imaginary vexations", "blended pleasure"],
          reversed: ["Novelty", "presage", "new instruction", "new relations"]
      },
      meanings: {
          general: "A young man is seated under a tree, contemplating three cups before him with a look of discontent. He does not see another cup being offered to him by a hand from a cloud. This represents being blind to new opportunities due to apathy.",
          upright: "This card represents weariness, disgust, aversion, and imaginary <dfn>vexations</dfn>. It signifies a period of blended pleasure mixed with contrarieties.",
          reversed: "This card signifies novelty, <dfn>presage</dfn> (a sign or warning), new instruction, and new relations."
      },
      advice: {
          upright: "Acknowledge your feelings of apathy or discontent, but be careful not to miss new opportunities being offered to you. It is time to re-evaluate what truly brings you emotional fulfillment.",
          reversed: "Be open to new ideas, new people, and new ways of thinking. An important message or new relationship is on the horizon if you are willing to see it."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Five of Cups",
      number: "5",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c05.jpg",
      keywords: {
          upright: ["Loss", "inheritance", "patrimony", "transmission", "marriage with bitterness"],
          reversed: ["News", "alliances", "affinity", "ancestry", "return", "false projects"]
      },
      meanings: {
          general: "A dark, cloaked figure looks down at three spilled cups, signifying loss and regret. He does not see the two full cups that remain behind him, indicating a failure to appreciate what is left.",
          upright: "This card represents loss, but with the note that something remains. It can mean an inheritance, <dfn>patrimony</dfn>, or transmission, but one that does not meet expectations. It can also signify a marriage, but one with bitterness or frustration.",
          reversed: "This card signifies news, alliances, affinity, <dfn>consanguinity</dfn> (blood relationship), ancestry, and return. It can also warn of false projects."
      },
      advice: {
          upright: "It is okay to grieve a loss, but do not let regret blind you to the opportunities and blessings that you still possess. Turn around and see what remains.",
          reversed: "Look to your roots and family connections for support. News or a return of a relative may be coming. Be wary of projects that seem too good to be true."
      },
      notes: {
          critique: "Waite's upright meanings are complex, linking loss with inheritance, suggesting a bittersweet outcome is common with this card."
      }
  },
  {
      name: "Six of Cups",
      number: "6",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c06.jpg",
      keywords: {
          upright: ["Past memories", "childhood", "happiness", "enjoyment", "vanished things", "new relations"],
          reversed: ["The future", "renewal", "that which will come to pass"]
      },
      meanings: {
          general: "Two children are depicted in an old garden, with one offering a cup filled with flowers to the other. This card represents a connection to the happy and innocent memories of the past.",
          upright: "This is a card of the past and memories, often specifically of childhood. It signifies happiness and enjoyment that has vanished. It can also mean new relations, new knowledge, and a new environment.",
          reversed: "This card represents the future, renewal, and that which will come to pass presently. It may also signify an inheritance to fall in quickly."
      },
      advice: {
          upright: "Cherish happy memories and the simple joys of the past, but do not live in them. Allow feelings of nostalgia to inform your present happiness.",
          reversed: "It is time to look to the future. Let go of the past and prepare for the renewal and new events that are coming soon."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Seven of Cups",
      number: "7",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c07.jpg",
      keywords: {
          upright: ["Fairy favors", "images of reflection", "sentiment", "imagination", "things seen in contemplation"],
          reversed: ["Desire", "will", "determination", "project"]
      },
      meanings: {
          general: "A man sees strange visions emerging from seven cups in a cloud before him. These include a castle, jewels, a laurel wreath, and a dragon. This card represents the choices and illusions of the imagination.",
          upright: "This card represents 'fairy favors' and images of reflection and imagination. It signifies some attainment in these degrees, but nothing permanent or substantial. It is the realm of ideas, designs, and resolves.",
          reversed: "This card represents desire, will, determination, and a concrete project. It signifies success if accompanied by the Three of Cups."
      },
      advice: {
          upright: "Be careful not to get lost in daydreams and wishful thinking. You have many options, but you must make a clear and grounded choice to make progress.",
          reversed: "Your desires are becoming more focused. It is time to move from imagination to determination. Formulate a solid project and act on your will."
      },
axnotes: {
          critique: ""
      }
  },
  {
      name: "Eight of Cups",
      number: "8",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c08.jpg",
      keywords: {
          upright: ["Decline of a matter", "joy", "mildness", "timidity", "honour", "modesty"],
          reversed: ["Great joy", "happiness", "feasting", "perfect satisfaction"]
      },
      meanings: {
          general: "A dejected man deserts the cups of his felicity, enterprise, or previous concern. He is walking away to seek something more, even if it means leaving success behind.",
          upright: "In practice, this card usually shows the decline of a matter, or that an important matter is of slight consequence. Antithetical readings offer joy, mildness, timidity, honour, and modesty.",
          reversed: "This card signifies great joy, happiness, feasting, and perfect satisfaction."
      },
      advice: {
          upright: "Acknowledge when a situation is no longer emotionally fulfilling. It may be time to walk away and seek a deeper sense of purpose, even if it's difficult.",
          reversed: "Embrace periods of significant happiness, celebration, and deep contentment. Recognize and appreciate moments of perfect satisfaction."
      },
      notes: {
          critique: "This card is a clear example of Waite's inclusion of 'antithetical' readings. The primary visual of decline is contrasted with keywords of joy, requiring strong contextual interpretation."
      }
  },
  {
      name: "Nine of Cups",
      number: "9",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c09.jpg",
      keywords: {
          upright: ["Concord", "contentment", "physical well-being", "victory", "success", "advantage", "satisfaction"],
          reversed: ["Truth", "loyalty", "liberty", "mistakes", "imperfections"]
      },
      meanings: {
          general: "A jolly personage is seated before a curtain on which nine cups are displayed. This is the 'wish card,' representing material satisfaction and having all one's desires met.",
          upright: "This card signifies concord, contentment, and physical <dfn>bien-être</dfn> (well-being). It represents victory, success, advantage, and satisfaction for the Querent. It is a good augury.",
          reversed: "This card signifies truth, loyalty, and liberty. However, it can also point to mistakes and imperfections."
      },
      advice: {
          upright: "Enjoy this time of contentment and satisfaction. Your wishes are being fulfilled, so take time to appreciate the abundance and pleasure in your life.",
          reversed: "Look beyond material satisfaction to find truth and liberty. Acknowledge that even in success, there can be mistakes and imperfections to learn from."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Ten of Cups",
      number: "10",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c10.jpg",
      keywords: {
          upright: ["Contentment", "repose of the heart", "perfection of love", "person in charge of interests", "the Querent's home"],
          reversed: ["Repose of a false heart", "indignation", "violence", "sorrow", "quarrel"]
      },
      meanings: {
          general: "A man and woman hail a great rainbow of cups in the sky. Their children dance beside them, and a homestead is visible. This card represents the ultimate in emotional and domestic fulfillment.",
          upright: "This card signifies contentment and the repose of the entire heart. It is the perfection of human love and friendship. It can represent the town, village, or country inhabited by the Querent.",
          reversed: "This card signifies the repose of a false heart, indignation, and violence. It can also mean sorrow and a serious quarrel."
      },
      advice: {
          upright: "Embrace this period of harmonious relationships and joyful family life. Appreciate the peace and emotional fulfillment that surrounds you.",
          reversed: "Beware of conflict and disharmony that may disrupt a seemingly peaceful situation. The 'false heart' suggests that things may not be as content as they appear on the surface."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Page of Cups",
      number: "11",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c11.jpg",
      keywords: {
          upright: ["Fair young man", "studious youth", "news", "message", "application", "reflection", "meditation"],
          reversed: ["Taste", "inclination", "attachment", "seduction", "deception", "artifice"]
      },
      meanings: {
          general: "A fair, pleasing, and somewhat effeminate Page holds a cup from which a fish emerges, looking at him. This symbolizes a message from the subconscious, born from the element of water.",
          upright: "This card represents a fair young man, perhaps a studious youth, who is impelled to render service. It signifies news, a message, application, reflection, and meditation. It is a good augury.",
          reversed: "This card signifies taste, inclination, attachment, seduction, deception, and <dfn>artifice</dfn> (cunning tricks)."
      },
      advice: {
          upright: "Be open to creative opportunities and intuitive messages. This is a time for curiosity, reflection, and exploring your emotional and artistic side.",
          reversed: "Be wary of deception or seduction that plays on your inclinations. Use your judgment to discern between genuine attachment and clever artifice."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Knight of Cups",
      number: "12",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c12.jpg",
      keywords: {
          upright: ["Arrival", "approach", "advances", "proposition", "invitation", "incitement"],
          reversed: ["Trickery", "artifice", "subtlety", "swindling", "duplicity", "fraud"]
      },
      meanings: {
          general: "A graceful, but not warlike, Knight rides slowly, holding out a cup as if making an offer. His helmet is winged, a sign of a poetic and imaginative nature. He is a messenger of the heart.",
          upright: "This card signifies arrival and approach, sometimes as a messenger. It represents advances, a proposition, demeanor, invitation, and <dfn>incitement</dfn> (urging someone on). It may be a visit from a friend bringing unexpected money.",
          reversed: "This card signifies trickery, <dfn>artifice</dfn>, subtlety, swindling, <dfn>duplicity</dfn>, and fraud."
      },
      advice: {
          upright: "Accept the romantic or creative offer being presented to you. It is a time to be charming, follow your heart, and act on your imagination.",
          reversed: "Be cautious of offers that seem too good to be true. Someone may be using charm and subtlety to deceive you. Look for signs of fraud."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Queen of Cups",
      number: "13",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c13.jpg",
      keywords: {
          upright: ["Good, fair woman", "honest", "devoted", "loving intelligence", "gift of vision", "success", "happiness", "pleasure"],
          reversed: ["Distinguished woman (but not to be trusted)", "perverse woman", "vice", "dishonour", "depravity"]
      },
      meanings: {
          general: "The Queen is seated at the water's edge, holding a magnificent, closed cup. She sees visions within it. This represents the power of the subconscious and intuitive wisdom.",
          upright: "This card represents a good, fair woman who is honest and devoted. It signifies loving intelligence, the gift of vision, success, happiness, pleasure, wisdom, and virtue.",
          reversed: "Accounts vary. Can be a good woman, or a distinguished woman who is not to be trusted. It can also signify a perverse woman, vice, dishonour, and <dfn>depravity</dfn>."
      },
      advice: {
          upright: "Embody compassion, emotional stability, and intuition. Trust your inner vision and lead with your heart. Nurture yourself and others.",
          reversed: "Be wary of emotional manipulation or someone whose character is questionable. Alternatively, examine if you are using your emotional intelligence in a perverse or dishonorable way."
      },
      notes: {
          critique: "The reversed meaning offers a starkly contradictory set of possibilities, from a 'good woman' to a 'perverse woman,' demanding heavy reliance on context."
      }
  },
  {
      name: "King of Cups",
      number: "14",
      arcana: "Minor Arcana",
      suit: "Cups",
      img: "c14.jpg",
      keywords: {
          upright: ["Fair man", "man of business, law, or divinity", "responsible", "disposed to oblige", "equity", "art", "science"],
          reversed: ["Dishonest, double-dealing man", "roguery", "exaction", "injustice", "vice", "scandal", "loss"]
      },
      meanings: {
          general: "The King is seated on a throne in the midst of the sea, holding a cup and a sceptre. He represents the mastery of the emotional world, a balance between thought and feeling.",
          upright: "This card represents a fair man, a man of business, law, or divinity. He is responsible and disposed to oblige the Querent. It signifies equity, art, and science. A warning is given to beware of ill-will from a man of this position.",
          reversed: "This card represents a dishonest, double-dealing man. It signifies roguery, <dfn>exaction</dfn> (demanding money), injustice, vice, scandal, pillage, and considerable loss."
      },
      advice: {
          upright: "Approach your situation with emotional maturity and diplomacy. Use both your intellect and your compassion to make balanced decisions. Be a responsible and fair leader.",
          reversed: "Beware of emotional manipulation or a person in power who is dishonest. Do not let your emotions lead you into scandalous or unjust situations."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Ace of Swords",
      number: "1",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s01.jpg",
      keywords: {
          upright: ["Triumph", "excessive degree", "conquest", "triumph of force", "great force in love and hatred"],
          reversed: ["Disastrous results", "conception", "childbirth", "augmentation", "multiplicity"]
      },
      meanings: {
          general: "A hand issues from a cloud, grasping a sword, the point of which is surrounded by a crown. This symbolizes the root of the powers of Air, representing intellect, truth, and the power of thought.",
          upright: "This card represents triumph and the excessive degree in everything. It is conquest and the triumph of force. It signifies great force, both in love and in hatred. The crown can mean great prosperity or great misery.",
          reversed: "This card means the same as upright, but with disastrous results. An alternative reading is conception, childbirth, <dfn>augmentation</dfn>, and multiplicity."
      },
      advice: {
          upright: "Use your mental clarity and intellectual power to cut through confusion and achieve your goals. Be aware that this force is powerful and can be used for both creation and destruction.",
          reversed: "Be cautious, as your plans could lead to disastrous results. Re-evaluate your approach, as a forceful idea may backfire. Alternatively, prepare for a period of new growth and multiplicity."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Two of Swords",
      number: "2",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s02.jpg",
      keywords: {
          upright: ["Conformity", "equipoise", "courage", "friendship", "concord in arms", "tenderness", "affection", "intimacy"],
          reversed: ["Imposture", "falsehood", "duplicity", "disloyalty"]
      },
      meanings: {
          general: "A blindfolded woman is seated, balancing two swords across her shoulders. This represents a stalemate, a truce, or a mind closed off to the truth in order to maintain balance.",
          upright: "This card signifies conformity and <dfn>equipoise</dfn> (balance). It can mean courage, friendship, and concord in a state of arms. It also represents tenderness, affection, and intimacy.",
          reversed: "This card signifies imposture, falsehood, <dfn>duplicity</dfn>, and disloyalty."
      },
      advice: {
          upright: "Acknowledge the stalemate you are in. It may be necessary to make a truce or temporarily block out external input to find your inner balance. A difficult choice is at hand.",
          reversed: "The truce is false. Be wary of deceit and disloyalty from those you consider friends. It is time to remove the blindfold and face the truth, however difficult."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Three of Swords",
      number: "3",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s03.jpg",
      keywords: {
          upright: ["Removal", "absence", "delay", "division", "rupture", "dispersion"],
          reversed: ["Mental alienation", "error", "loss", "distraction", "disorder", "confusion"]
      },
      meanings: {
          general: "Three swords pierce a heart, floating amongst rain clouds. This is the classic card of heartbreak, sorrow, and painful truth.",
          upright: "This card signifies removal, absence, delay, division, rupture, and dispersion. For a woman, it may mean the flight of her lover.",
          reversed: "This card represents mental <dfn>alienation</dfn>, error, loss, distraction, disorder, and confusion."
      },
      advice: {
          upright: "Accept the painful truth that has been revealed. While it brings sorrow and heartbreak, this clarity is necessary to move forward and heal.",
          reversed: "Your thoughts are in a state of chaos and confusion. Avoid making important decisions until you can clear your mind and find a sense of order."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Four of Swords",
      number: "4",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s04.jpg",
      keywords: {
          upright: ["Vigilance", "retreat", "solitude", "hermit's repose", "exile", "tomb and coffin"],
          reversed: ["Wise administration", "circumspection", "economy", "avarice", "precaution", "testament"]
      },
      meanings: {
          general: "The effigy of a knight lies in prayer upon his tomb. Three swords hang above him, while one is depicted on the tomb itself. This card symbolizes a necessary period of rest after conflict.",
          upright: "This card signifies vigilance, retreat, solitude, and the hermit's repose. It can also represent exile, or even a tomb and coffin. Waite notes it is a bad card.",
          reversed: "This card signifies wise administration, <dfn>circumspection</dfn>, economy, <dfn>avarice</dfn> (greed), precaution, and testament. A qualified success may be expected."
      },
      advice: {
          upright: "Take a period of rest and recuperation. You need to retreat from the world to recover your mental strength. This is a time for quiet contemplation, not action.",
          reversed: "It is time to return to action after a period of rest, but do so with caution and wise planning. Manage your resources carefully to ensure success."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Five of Swords",
      number: "5",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s05.jpg",
      keywords: {
          upright: ["Degradation", "destruction", "revocation", "infamy", "dishonour", "loss"],
          reversed: ["The same", "burial and obsequies"]
      },
      meanings: {
          general: "A man with a triumphant and disdainful look collects the swords of two dejected figures walking away. This represents a hollow victory, won at the cost of honor and relationships.",
          upright: "This card signifies degradation, destruction, <dfn>revocation</dfn> (cancellation), <dfn>infamy</dfn>, dishonour, and loss. It represents an attack on the fortune of the Querent.",
          reversed: "This card signifies the same as upright. It can also mean burial and <dfn>obsequies</dfn> (funeral rites)."
      },
      advice: {
          upright: "Be careful not to pursue victory at all costs. A win achieved through dishonorable means is not a true success. It may be better to walk away from a conflict than to win it this way.",
          reversed: "Acknowledge a defeat or a significant loss. This is a time for mourning and accepting the consequences of a destructive conflict."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Six of Swords",
      number: "6",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s06.jpg",
      keywords: {
          upright: ["Journey by water", "route", "way", "envoy", "commissionary", "expedient"],
          reversed: ["Declaration", "confession", "publicity", "proposal of love"]
      },
      meanings: {
          general: "A ferryman carries a woman and child across a body of water to a distant shore. The water is troubled on one side and calm on the other. This symbolizes a transition away from difficulty towards a more peaceful state.",
          upright: "This card signifies a journey by water, a route, a way, an envoy, a <dfn>commissionary</dfn> (delegate), or an <dfn>expedient</dfn> (a means to an end). The voyage will be pleasant.",
          reversed: "This card signifies a declaration, a confession, or publicity. It may also be a proposal of love."
      },
      advice: {
          upright: "It is time to move on from a difficult situation. This transition may be sad, but it is necessary to find peace. Allow yourself to be carried towards a calmer future.",
          reversed: "The time has come to declare your intentions or confess a truth. Bringing things out into the open, while difficult, is necessary for progress."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Seven of Swords",
      number: "7",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s07.jpg",
      keywords: {
          upright: ["Design", "attempt", "wish", "hope", "confidence", "quarreling", "a plan that may fail"],
          reversed: ["Good advice", "counsel", "instruction", "slander", "babbling"]
      },
      meanings: {
          general: "A man sneaks away from a military camp, carrying five swords while two remain behind. This card represents strategy, stealth, and potentially getting away with something that isn't entirely yours.",
          upright: "This card signifies design, attempt, wish, hope, and confidence. It can also mean quarreling and a plan that may fail. It can be a good card that promises a country life after competence is secured.",
          reversed: "This card signifies good advice, counsel, and instruction. However, it can also mean slander and babbling."
      },
      advice: {
          upright: "You may need to use strategy or act alone to achieve your goal. Be cautious and do not reveal your entire plan. However, be aware that this approach carries risk.",
          reversed: "Heed the good advice you are being given, but be wary of slander. It is a time to listen more and speak less."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Eight of Swords",
      number: "8",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s08.jpg",
      keywords: {
          upright: ["Bad news", "violent chagrin", "crisis", "censure", "power in trammels", "conflict", "slander"],
          reversed: ["Disquiet", "difficulty", "opposition", "accident", "treachery", "the unforeseen", "fatality"]
      },
      meanings: {
          general: "A woman is bound and blindfolded, surrounded by eight swords. However, her bindings appear loose, and she could walk away if she chose. This symbolizes self-imposed restriction and a victim mentality.",
          upright: "This card signifies bad news, violent <dfn>chagrin</dfn> (distress), crisis, <dfn>censure</dfn> (severe disapproval), power in <dfn>trammels</dfn> (restrictions), conflict, and slander.",
          reversed: "This card signifies disquiet, difficulty, opposition, accident, treachery, the unforeseen, and fatality."
      },
      advice: {
          upright: "Recognize that you are not as trapped as you feel. The restrictions you face are largely self-imposed by your own thoughts and beliefs. You have the power to free yourself.",
          reversed: "Be prepared for unexpected difficulties and opposition. Treachery may be at play, so be cautious and aware of your surroundings."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Nine of Swords",
      number: "9",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s09.jpg",
      keywords: {
          upright: ["Death", "failure", "miscarriage", "delay", "deception", "disappointment", "despair"],
          reversed: ["Imprisonment", "suspicion", "doubt", "reasonable fear", "shame"]
      },
      meanings: {
          general: "A figure sits up in bed, head in hands, as if waking from a nightmare. Nine swords hang on the wall behind. This card represents mental anguish, anxiety, and fear.",
          upright: "This card signifies death, failure, miscarriage, delay, deception, disappointment, and despair. It can represent an <dfn>ecclesiastic</dfn> (priest). It is generally a card of bad omen.",
          reversed: "This card signifies imprisonment, suspicion, doubt, reasonable fear, and shame. It can mean there is good ground for suspicion against a doubtful person."
      },
      advice: {
          upright: "Confront the anxieties and fears that are tormenting your mind. Your worries may be worse in your head than in reality. Seek help if you are overwhelmed by despair.",
          reversed: "Your fears may be based in reality. It is a time to be suspicious and cautious. Trust your gut feelings about a doubtful person or situation."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Ten of Swords",
      number: "10",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s10.jpg",
      keywords: {
          upright: ["Pain", "affliction", "tears", "sadness", "desolation", "treason"],
          reversed: ["Advantage", "profit", "success", "favour", "power", "authority"]
      },
      meanings: {
          general: "A prostrate figure is pierced by ten swords. Despite the grim imagery, the sky above is clearing, suggesting that the worst is over. This is a card of ultimate endings and rock bottom.",
          upright: "This card signifies pain, affliction, tears, sadness, and desolation. It is not especially violent death. For a girl or wife, it can mean treason by friends.",
          reversed: "This card signifies advantage, profit, success, and favour (though none may be permanent). It also represents power and authority."
      },
      advice: {
          upright: "Acknowledge that you have hit rock bottom. While this is a painful and desolate ending, it is also a turning point. The only way from here is up. Surrender to the finality of the situation.",
          reversed: "Look for opportunities to turn a difficult situation to your advantage. Even after a defeat, you can seize power and find a measure of success."
      },
      notes: {
          critique: "This card presents a stark contrast between its upright and reversed meanings, suggesting that from the lowest point, a shift in perspective can bring about a surprising turn of fortune."
      }
  },
  {
      name: "Page of Swords",
      number: "11",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s11.jpg",
      keywords: {
          upright: ["Authority", "overseeing", "secret service", "vigilance", "spying", "examination"],
          reversed: ["More evil side of these qualities", "the unforeseen", "unprepared state", "sickness"]
      },
      meanings: {
          general: "A lithe, active figure stands on guard, sword in hand, ready for any challenge. He is surrounded by a turbulent landscape, suggesting a mind full of energy and curiosity.",
          upright: "This card represents authority, overseeing, secret service, vigilance, spying, and examination. An indiscreet person will pry into the Querent's secrets.",
          reversed: "This card represents the more evil side of the upright qualities. It can signify the unforeseen, an unprepared state, or that sickness is intimated. It can also bring astonishing news."
      },
      advice: {
          upright: "Be vigilant and mentally sharp. This is a time to gather information, ask questions, and be curious. However, be mindful not to cross the line into spying or indiscretion.",
          reversed: "Be prepared for unexpected challenges or news. Your lack of preparation could be your downfall. Beware of using your words or knowledge for malicious purposes."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Knight of Swords",
      number: "12",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s12.jpg",
      keywords: {
          upright: ["Skill", "bravery", "capacity", "defence", "address", "enmity", "wrath", "war", "destruction", "ruin"],
          reversed: ["Imprudence", "incapacity", "extravagance", "dispute with an imbecile"]
      },
      meanings: {
          general: "He is riding in full course, as if charging an unseen enemy. His sword is raised, and his expression is fierce. He represents the driving, and sometimes destructive, power of pure intellect and ambition.",
          upright: "This card represents skill, bravery, capacity, defence, and address. However, it also signifies enmity, wrath, war, destruction, opposition, resistance, and ruin. It predicts heroic action for a soldier.",
          reversed: "This card signifies <dfn>imprudence</dfn> (lack of care), incapacity, and extravagance. It can mean a dispute with a foolish person."
      },
      advice: {
          upright: "Charge forward with ambition and intellectual clarity to achieve your goal. Be direct and decisive. However, be mindful that your forcefulness can be perceived as aggressive or destructive.",
          reversed: "Re-evaluate your plan before you act. Your current approach may be imprudent and lead to failure. Do not waste your energy arguing with those who will not listen to reason."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Queen of Swords",
      number: "13",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s13.jpg",
      keywords: {
          upright: ["Widowhood", "female sadness", "embarrassment", "absence", "sterility", "mourning", "privation", "separation"],
          reversed: ["Malice", "bigotry", "artifice", "prudery", "deceit", "a bad woman"]
      },
      meanings: {
          general: "Her right hand raises the sword of the suit, and her left hand is extended. Her countenance is severe, chastened, and suggests familiarity with sorrow. She represents intellectual clarity born from experience, often painful.",
          upright: "This card signifies widowhood, female sadness and embarrassment, absence, <dfn>sterility</dfn>, mourning, <dfn>privation</dfn> (lack of essentials), and separation.",
          reversed: "This card signifies malice, bigotry, <dfn>artifice</dfn>, <dfn>prudery</dfn>, bale (great evil), and deceit. It represents a bad woman with ill-will towards the Querent."
      },
      advice: {
          upright: "Use your intellect and experience to cut through illusion and set clear boundaries. This is a time for unbiased judgment and direct communication, even if the truth is painful.",
          reversed: "Beware of a person who may be acting with malice or deceit. Alternatively, examine your own thoughts to ensure you are not being overly critical, cold-hearted, or bigoted."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "King of Swords",
      number: "14",
      arcana: "Minor Arcana",
      suit: "Swords",
      img: "s14.jpg",
      keywords: {
          upright: ["Power", "command", "authority", "militant intelligence", "law", "offices of the crown"],
          reversed: ["Cruelty", "perversity", "barbarity", "perfidy", "evil intention"]
      },
      meanings: {
          general: "He sits on the throne of judgment, holding an unsheathed sword. He is the symbol of active and determining intelligence, a master of thought and law.",
          upright: "This card represents what is implied by the sword: power, command, authority, militant intelligence, law, and the offices of the crown. It can signify a lawyer, senator, or doctor.",
          reversed: "This card signifies cruelty, <dfn>perversity</dfn>, barbarity, <dfn>perfidy</dfn> (deceitfulness), and evil intention. It represents a bad man."
      },
      advice: {
          upright: "Lead with intellectual authority and clarity. Make decisions based on logic, truth, and justice. This is a time to be a master of your thoughts and communicate with precision.",
          reversed: "Be wary of an abuse of power, either from yourself or others. Intellectual clarity can become cruelty if it is not tempered with compassion. Avoid manipulative or evil intentions."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Ace of Pentacles",
      number: "1",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p01.jpg",
      keywords: {
          upright: ["Perfect contentment", "felicity", "ecstasy", "speedy intelligence", "gold"],
          reversed: ["Evil side of wealth", "bad intelligence", "great riches"]
      },
      meanings: {
          general: "A hand issues from a cloud, holding a pentacle. This symbolizes the root of the powers of Earth, the manifestation of potential into the material world.",
          upright: "This card signifies perfect contentment, <dfn>felicity</dfn>, and ecstasy. It can mean speedy intelligence or gold. It is the most favorable of all cards.",
          reversed: "This card represents the evil side of wealth and bad intelligence. However, it can still mean great riches."
      },
      advice: {
          upright: "Seize the new opportunity for prosperity and material well-being. This is a time to manifest your goals into reality and enjoy the contentment that comes with it.",
          reversed: "Be mindful that great wealth can have a negative side. Ensure your pursuit of material gain is not leading you down a path of corruption or bad decisions."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Two of Pentacles",
      number: "2",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p02.jpg",
      keywords: {
          upright: ["Gaiety", "recreation", "news and messages in writing", "obstacles", "agitation", "trouble", "embroilment"],
          reversed: ["Enforced gaiety", "simulated enjoyment", "literal sense", "handwriting", "composition", "letters of exchange"]
      },
      meanings: {
          general: "A young man dances while juggling two pentacles connected by an endless loop. Behind him, ships toss on a wavy sea. This represents the need to balance multiple priorities in a changing environment.",
          upright: "This card represents gaiety and recreation. It can also signify news and messages in writing, but with an attendant sense of obstacles, agitation, trouble, and <dfn>embroilment</dfn> (involvement in conflict).",
          reversed: "This card represents enforced gaiety and simulated enjoyment. It can also mean, in a literal sense, handwriting, composition, and letters of exchange."
      },
      advice: {
          upright: "Be adaptable and flexible as you juggle your priorities. It's a busy time, but you have the skill to keep everything in balance. Find the fun in the challenge.",
          reversed: "Acknowledge if you are putting on a brave face. If your enjoyment is forced, it may be time to re-evaluate your commitments and simplify your life."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Three of Pentacles",
      number: "3",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p03.jpg",
      keywords: {
          upright: ["Métier", "trade", "skilled labor", "nobility", "aristocracy", "renown", "glory"],
          reversed: ["Mediocrity in work", "puerility", "pettiness", "weakness"]
      },
      meanings: {
          general: "A sculptor or mason works in a cathedral, discussing his craft with a monk and a nobleman. This symbolizes mastery of a skill and successful collaboration.",
          upright: "This card signifies <dfn>métier</dfn> (a trade or profession), trade, and skilled labor. In another sense, it means nobility, aristocracy, renown, and glory.",
          reversed: "This card signifies mediocrity, both in work and otherwise. It can also mean <dfn>puerility</dfn> (childishness), pettiness, and weakness."
      },
      advice: {
          upright: "Your hard work and skill are being recognized. This is a time for teamwork and collaboration. Continue to hone your craft and take pride in your work.",
          reversed: "Do not settle for mediocre work. Address any tendencies towards pettiness or weakness in your approach. It may be time to learn a new skill or apply yourself with more dedication."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Four of Pentacles",
      number: "4",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p04.jpg",
      keywords: {
          upright: ["Surety of possessions", "cleaving to that which one has", "gift", "legacy", "inheritance"],
          reversed: ["Suspense", "delay", "opposition", "observation", "hindrances"]
      },
      meanings: {
          general: "A figure sits, clutching a pentacle to his chest. Another is on his head, and two are beneath his feet. This represents a strong hold on material possessions, sometimes to the point of being miserly.",
          upright: "This card signifies the surety of possessions and cleaving to that which one has. It can also mean a gift, a legacy, or an inheritance.",
          reversed: "This card signifies suspense, delay, and opposition. It represents observation and hindrances."
      },
      advice: {
          upright: "It is wise to be conservative with your resources and build a secure foundation. However, be mindful not to become too possessive or closed off to generosity.",
          reversed: "Your progress may be blocked by delays and opposition. Loosen your grip on your plans and be prepared to adapt. Trying to control everything too tightly will only lead to more suspense."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Five of Pentacles",
      number: "5",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p05.jpg",
      keywords: {
          upright: ["Material trouble", "destitution", "love and lovers", "concordance", "affinities"],
          reversed: ["Disorder", "chaos", "ruin", "discord", "profligacy"]
      },
      meanings: {
          general: "Two mendicants pass in the snow outside a brightly lit church window. This represents a period of hardship, poverty, and feeling isolated or left out.",
          upright: "This card primarily signifies material trouble and <dfn>destitution</dfn>. However, Waite gives a completely contradictory reading of love, lovers, concordance, and affinities.",
          reversed: "This card signifies disorder, chaos, ruin, discord, and <dfn>profligacy</dfn> (reckless extravagance)."
      },
      advice: {
          upright: "Do not be afraid to ask for help during this time of hardship. Support may be available nearby, even if you feel isolated. Focus on the connections you have, not just your material lack.",
          reversed: "Address the chaos and disorder in your material life. Reckless spending or a lack of planning can lead to ruin. It is time to create structure and order."
      },
      notes: {
          critique: "The contradiction between 'destitution' and 'love and lovers' is one of the most stark in Waite's text, highlighting his need to compile varied traditions even when they did not align."
      }
  },
  {
      name: "Six of Pentacles",
      number: "6",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p06.jpg",
      keywords: {
          upright: ["Presents", "gifts", "gratification", "attention", "vigilance", "present prosperity"],
          reversed: ["Desire", "cupidity", "envy", "jealousy", "illusion"]
      },
      meanings: {
          general: "A merchant in the guise of a benefactor weighs money in a scale and distributes it to the needy. This is a card of charity, generosity, and the balance of giving and receiving.",
          upright: "This card signifies presents, gifts, and gratification. It is a time of attention, vigilance, and present prosperity, though Waite warns it must not be relied upon.",
          reversed: "This card signifies desire, <dfn>cupidity</dfn> (greed), envy, jealousy, and illusion."
      },
      advice: {
          upright: "Be generous with your resources, whether you are in the position of giving or receiving. Appreciate the prosperity you have now, but manage it wisely for the future.",
          reversed: "Be mindful of feelings of greed and envy, both in yourself and others. Do not let the desire for what you don't have poison your appreciation for what you do have."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Seven of Pentacles",
      number: "7",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p07.jpg",
      keywords: {
          upright: ["Money", "business", "barter", "altercation", "quarrels", "innocence", "ingenuity"],
          reversed: ["Anxiety about money", "impatience", "apprehension", "suspicion"]
      },
      meanings: {
          general: "A young man leans on his staff, observing the pentacles growing on a bush. This is a card of pausing to reflect on the fruits of one's labor before the harvest.",
          upright: "Waite calls this card 'exceedingly contradictory.' It can mean money, business, and barter. In another reading, it means altercation and quarrels. In yet another, it means innocence and ingenuity.",
          reversed: "This card signifies a cause for anxiety regarding money, especially money that one has proposed to lend. It also means impatience, apprehension, and suspicion."
      },
      advice: {
          upright: "Take a moment to evaluate your progress. Your hard work is beginning to pay off, but patience is required before you can fully reap the rewards. Reflect on your investments of time and energy.",
          reversed: "Address your anxieties about your finances. Impatience and suspicion will not make your investments grow any faster. Trust the process and have faith in your hard work."
      },
      notes: {
          critique: "This card is explicitly labeled by Waite as 'Exceedingly contradictory,' demanding a high degree of contextual sensitivity from the reader to determine which of its disparate meanings applies."
      }
  },
  {
      name: "Eight of Pentacles",
      number: "8",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p08.jpg",
      keywords: {
          upright: ["Work", "employment", "commission", "craftsmanship", "skill in craft and business"],
          reversed: ["Voided ambition", "vanity", "cupidity", "exaction", "usury"]
      },
      meanings: {
          general: "An artist or apprentice is carefully carving a pentacle. Seven others are displayed nearby. This represents a dedication to one's craft and the development of skill through diligent work.",
          upright: "This card signifies work, employment, a commission, craftsmanship, and skill in craft and business, perhaps in a preparatory stage.",
          reversed: "This card signifies voided ambition, vanity, <dfn>cupidity</dfn> (greed), <dfn>exaction</dfn> (demanding money), and <dfn>usury</dfn> (lending money at high interest). It can mean skill turned to cunning and intrigue."
      },
      advice: {
          upright: "Dedicate yourself to your work or craft. This is a time for diligence, attention to detail, and honing your skills. Take pride in the work you are doing.",
          reversed: "Ensure your ambition is not turning into vanity or greed. Do not use your skills for cunning or intrigue. Reconnect with the simple love of your craft."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Nine of Pentacles",
      number: "9",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p09.jpg",
      keywords: {
          upright: ["Prudence", "safety", "success", "accomplishment", "certitude", "discernment"],
          reversed: ["Roguery", "deception", "voided project", "bad faith"]
      },
      meanings: {
          general: "A stately woman stands in a lush garden, a bird resting on her hand. This represents enjoying the material comforts and independence that one has earned through their own efforts.",
          upright: "This card signifies prudence, safety, success, accomplishment, <dfn>certitude</dfn> (certainty), and discernment. It means the prompt fulfilment of what is presaged by neighboring cards.",
          reversed: "This card signifies roguery, deception, a voided project, and bad faith."
      },
      advice: {
          upright: "Enjoy the fruits of your labor. You have earned this period of financial independence and self-sufficiency. Take time to appreciate the luxury and security you have created.",
          reversed: "Be wary of deception or bad faith that could threaten your security. A project you thought was certain may fail. Do not take your accomplishments for granted."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Ten of Pentacles",
      number: "10",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p10.jpg",
      keywords: {
          upright: ["Gain", "riches", "family matters", "archives", "extraction", "abode of a family"],
          reversed: ["Chance", "fatality", "loss", "robbery", "games of hazard"]
      },
      meanings: {
          general: "An old man sits with his dogs, watching a younger couple and child under an archway. The pentacles are arranged like the Kabbalistic Tree of Life. This card represents family legacy, inheritance, and long-term security.",
          upright: "This card signifies gain and riches. It relates to family matters, archives, and the abode of a family. It represents a house or dwelling.",
          reversed: "This card signifies chance, fatality, loss, robbery, and games of hazard. It can also sometimes mean a gift, dowry, or pension."
      },
      advice: {
          upright: "Consider your long-term security and the legacy you are building for your family. This is a time of stability and established wealth.",
          reversed: "Be cautious with your finances, as there is a risk of loss through chance or robbery. Avoid gambling and risky ventures. Your long-term security could be at stake."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Page of Pentacles",
      number: "11",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p11.jpg",
      keywords: {
          upright: ["Application", "study", "scholarship", "reflection", "news", "messages", "rule", "management"],
          reversed: ["Prodigality", "dissipation", "liberality", "luxury", "unfavourable news"]
      },
      meanings: {
          general: "A young man stands in a field, intently studying a pentacle he holds. This represents a student of the material world, focused on learning how to manifest his goals.",
          upright: "This card signifies application, study, scholarship, and reflection. It can bring news and messages. It also represents rule and management.",
          reversed: "This card represents <dfn>prodigality</dfn> (wasteful spending), <dfn>dissipation</dfn>, <dfn>liberality</dfn>, and luxury. It can bring unfavourable news."
      },
      advice: {
          upright: "This is a time for diligent study and practical application. Focus on learning a new skill or managing a new project. A tangible opportunity is available if you apply yourself.",
          reversed: "Be mindful of wasteful spending and a focus on luxury over substance. Unfavourable news regarding your material world may be coming. It is time to be practical, not prodigal."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Knight of Pentacles",
      number: "12",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p12.jpg",
      keywords: {
          upright: ["Utility", "serviceableness", "interest", "responsibility", "rectitude", "an useful man"],
          reversed: ["Inertia", "idleness", "repose", "stagnation", "discouragement", "carelessness"]
      },
      meanings: {
          general: "The Knight sits upon a sturdy, motionless horse, holding a pentacle. He is not charging forward, but observing the landscape with a practical eye. He represents the slow, methodical work required for success.",
          upright: "This card signifies utility, <dfn>serviceableness</dfn>, interest, responsibility, and <dfn>rectitude</dfn> (moral correctness). It represents a useful man and useful discoveries.",
          reversed: "This card signifies <dfn>inertia</dfn>, idleness, repose of that kind, stagnation, placidity, discouragement, and carelessness."
      },
      advice: {
          upright: "Adopt a methodical, hardworking, and reliable approach to your goals. Progress may be slow, but it will be steady. Fulfill your responsibilities with diligence.",
          reversed: "Guard against laziness and stagnation. If you are feeling discouraged or stuck in a rut, it is time to break your routine and find a new, more active approach."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "Queen of Pentacles",
      number: "13",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p13.jpg",
      keywords: {
          upright: ["Opulence", "generosity", "magnificence", "security", "liberty"],
          reversed: ["Evil", "suspicion", "suspense", "fear", "mistrust"]
      },
      meanings: {
          general: "The Queen sits on a throne adorned with carvings of fruit and animals, holding a pentacle. She is surrounded by a lush garden, representing her connection to the abundance of the material world.",
          upright: "This card signifies <dfn>opulence</dfn>, generosity, magnificence, security, and liberty. It represents a dark woman, and can mean presents from a rich relative or a happy marriage.",
          reversed: "This card signifies evil, suspicion, suspense, fear, and mistrust. It can also represent an illness."
      },
      advice: {
          upright: "Create a secure, nurturing, and abundant environment for yourself and others. Be practical and generous. This is a time to balance work and home life with skill.",
          reversed: "Address feelings of fear, suspicion, or mistrust that are undermining your sense of security. Do not let anxiety prevent you from enjoying the abundance you have."
      },
      notes: {
          critique: ""
      }
  },
  {
      name: "King of Pentacles",
      number: "14",
      arcana: "Minor Arcana",
      suit: "Pentacles",
      img: "p14.jpg",
      keywords: {
          upright: ["Valour", "realizing intelligence", "business and normal intellectual aptitude", "mathematical gifts", "success"],
          reversed: ["Vice", "weakness", "ugliness", "perversity", "corruption", "peril"]
      },
      meanings: {
          general: "The King sits on a throne decorated with bulls' heads, in a garden of vines and flowers. He holds a sceptre and a pentacle. He is the master of the material world, representing prosperity through discipline and enterprise.",
          upright: "This card signifies valour, realizing intelligence, business and normal intellectual aptitude, and sometimes mathematical gifts. It means success in these paths. It represents a rather dark man, a merchant, master, or professor.",
          reversed: "This card signifies vice, weakness, ugliness, <dfn>perversity</dfn>, corruption, and peril. It represents an old and vicious man."
      },
      advice: {
          upright: "Take a disciplined and enterprising approach to your business and finances. Your leadership and practical aptitude will lead to long-term success and security.",
          reversed: "Be wary of becoming obsessed with wealth and status to the point of corruption. A stubborn or overly materialistic approach can lead to peril."
      },
      notes: {
          critique: ""
      }
  }
];