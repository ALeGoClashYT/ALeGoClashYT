const quizData = {
  1:[
  {
    question: "In One Piece, what is Luffy's Devil Fruit?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Gomu Gomu no Mi", correct: true },
      { text: "Mera Mera no Mi", correct: false },
      { text: "Hito Hito no Mi", correct: false },
      { text: "Ope Ope no Mi", correct: false }
    ]
  },
  {
    question: "Who killed Hisoka in Hunter x Hunter?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "Gon", correct: false },
      { text: "Chrollo", correct: true },
      { text: "Killua", correct: false },
      { text: "Leorio", correct: false }
    ]
  },
  {
    question: "What is the name of the first sword Zoro uses in One Piece?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "Wado Ichimonji", correct: true },
      { text: "Sandai Kitetsu", correct: false },
      { text: "Shusui", correct: false },
      { text: "Yubashiri", correct: false }
    ]
  },
  {
    question: "In Death Note, who is the second Kira?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Light Yagami", correct: false },
      { text: "Misa Amane", correct: true },
      { text: "L", correct: false },
      { text: "Near", correct: false }
    ]
  },
  {
    question: "What is Naruto's mother's name?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "Kushina Uzumaki", correct: true },
      { text: "Hinata Hyuga", correct: false },
      { text: "Tsunade", correct: false },
      { text: "Sakura Haruno", correct: false }
    ]
  },
  {
    question: "Who taught Goku the Kamehameha?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "Master Roshi", correct: true },
      { text: "King Kai", correct: false },
      { text: "Gohan", correct: false },
      { text: "Piccolo", correct: false }
    ]
  },
  {
    question: "In Attack on Titan, what is the original name of the Founding Titan?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Eren Jaeger", correct: false },
      { text: "Ymir Fritz", correct: true },
      { text: "Zeke Jaeger", correct: false },
      { text: "Historia Reiss", correct: false }
    ]
  },
  {
    question: "Who killed Itachi Uchiha in Naruto?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "Kakashi", correct: false },
      { text: "Sasuke", correct: true },
      { text: "Orochimaru", correct: false },
      { text: "Madara", correct: false }
    ]
  },
  {
  question: "What is Gohan's ultimate form called?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "Ultimate Gohan", correct: true },
    { text: "Super Saiyan 2", correct: false },
    { text: "Super Saiyan 3", correct: false },
    { text: "Super Saiyan kami", correct: false }
  ]
},
  {
    question: "In My Hero Academia, what is Deku's real name?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "Izuku Midoriya", correct: true },
      { text: "Katsuki Bakugo", correct: false },
      { text: "Shoto Todoroki", correct: false },
      { text: "Tenya Iida", correct: false }
    ]
  },
  {
    question: "Who is the main antagonist in Naruto Shippuden?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Madara Uchiha", correct: true },
      { text: "Pain", correct: false },
      { text: "Orochimaru", correct: false },
      { text: "Kabuto", correct: false }
    ]
  },
  {
    question: "What is the name of the Hokage before Naruto?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Tsunade", correct: true },
      { text: "Hiruzen Sarutobi", correct: false },
      { text: "Kakashi", correct: false },
      { text: "Minato", correct: false }
    ]
  },
  {
    question: "In Dragon Ball, who first kills Frieza?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Goku", correct: false },
      { text: "Future Trunks", correct: true },
      { text: "Vegeta", correct: false },
      { text: "Piccolo", correct: false }
    ]
  },
  {
    question: "In One Punch Man, what is Saitama's hero name?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Caped Bald", correct: true },
      { text: "Bald Hero", correct: false },
      { text: "Strong Man", correct: false },
      { text: "Punch King", correct: false }
    ]
  },
  {
  question: "Which sea is Luffy originally from?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "East Blue", correct: true },
    { text: "West Blue", correct: false },
    { text: "North Blue", correct: false },
    { text: "South Blue", correct: false }
  ]
},
  {
    question: "What is the name of Tanjiro's sword style?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "Water Breathing", correct: true },
      { text: "Flame Breathing", correct: false },
      { text: "Thunder Breathing", correct: false },
      { text: "Stone Breathing", correct: false }
    ]
  },
  {
    question: "Who was the first Titan Eren fought?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Armored Titan", correct: false },
      { text: "Colossal Titan", correct: true },
      { text: "Beast Titan", correct: false },
      { text: "Female Titan", correct: false }
    ]
  },
  {
    question: "In Attack on Titan, what is Levi known for?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Cooking abilities", correct: false },
      { text: "His speed and skill", correct: true },
      { text: "Being the main titan", correct: false },
      { text: "Healing powers", correct: false }
    ]
  },
  {
    question: "Which anime features the Phantom Troupe?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Naruto", correct: false },
      { text: "One Piece", correct: false },
      { text: "Hunter x Hunter", correct: true },
      { text: "Bleach", correct: false }
    ]
  },
  {
    question: "In Tokyo Revengers, what gang does Takemichi try to save?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "Black Dragon", correct: false },
      { text: "Kanto Alliance", correct: false },
      { text: "White Snake", correct: false },
      { text: "Tokyo Manji", correct: true }
    ]
  },
  {
    question: "Who trained Luffy to use Haki?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Rayleigh", correct: true },
      { text: "Shanks", correct: false },
      { text: "Roger", correct: false },
      { text: "Sanji", correct: false }
    ]
  },
  {
    question: "What is the name of Naruto's father?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Kakashi Hatake", correct: false },
      { text: "Hiruzen Sarutobi", correct: false },
      { text: "Minato Namikaze", correct: true },
      { text: "Jiraiya", correct: false }
    ]
  },
  {
    question: "Who is the strongest Saiyan?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Goku", correct: true },
      { text: "Vegeta", correct: false },
      { text: "Broly", correct: false },
      { text: "Gohan", correct: false }
    ]
  },
  {
    question: "In Attack on Titan, who is revealed to have the Coordinate power besides Eren?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "Historia Reiss", correct: false },
      { text: "Zeke Yeager", correct: true },
      { text: "Armin Arlert", correct: false },
      { text: "Levi Ackerman", correct: false }
    ]
  },
  {
    question: "In Naruto, who is the first Jinchūriki of the Nine-Tails before Kushina?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "Rin Nohara", correct: false },
      { text: "Minato Namikaze", correct: false },
      { text: "Uzumaki Naruto", correct: false },
      { text: "Mito Uzumaki", correct: true }
    ]
  },
  {
    question: "In Hunter x Hunter, what is the primary ability of Hisoka’s Bungee Gum?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Generating illusions", correct: false },
      { text: "Stretchable and sticky like gum", correct: true },
      { text: "Transforming objects into cards", correct: false },
      { text: "Controlling puppets", correct: false }
    ]
  },
  {
    question: "In One Piece, what is the real reason why Vegapunk created the Pacifista cyborgs?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "To experiment with Artificial Devil Fruits", correct: true },
      { text: "To protect marine bases", correct: false },
      { text: "To hunt down Devil Fruit users", correct: false },
      { text: "To replace the Shichibukai", correct: false }
    ]
  },
  {
  question: "In Attack on Titan, what is the real reason Historia Reiss becomes queen?",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "After overthrowing the fake royal government and revealing the truth", correct: true },
    { text: "To inherit the Founding Titan’s power", correct: false },
    { text: "To unify Marley and Paradis", correct: false },
    { text: "To protect Eren from execution", correct: false }
  ]
},
  {
    question: "In Code Geass, what is the power of Geass given to Lelouch?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Mind reading", correct: false },
      { text: "Time manipulation", correct: false },
      { text: "Absolute obedience to his command", correct: true },
      { text: "Super speed", correct: false }
    ]
  },
{ question: "What is the name of Tanjiro's sister in Demon Slayer?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Nezuko Kamado", correct: true },
  { text: "Shinobu Kocho", correct: false },
  { text: "Mitsuri Kanroji", correct: false },
  { text: "Kanao Tsuyuri", correct: false }
]},

{ question: "Who is the main protagonist of Attack on Titan?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Eren Yeager", correct: true },
  { text: "Levi Ackerman", correct: false },
  { text: "Armin Arlert", correct: false },
  { text: "Reiner Braun", correct: false }
]},

{ question: "What is the name of Luffy's pirate crew?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Straw Hat Pirates", correct: true },
  { text: "Red Hair Pirates", correct: false },
  { text: "Whitebeard Pirates", correct: false },
  { text: "Heart Pirates", correct: false }
]},

{ question: "In Dragon Ball Z, who is Goku's first son?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Gohan", correct: true },
  { text: "Goten", correct: false },
  { text: "Trunks", correct: false },
  { text: "Raditz", correct: false }
]},

{ question: "What is the name of the notebook in Death Note?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Death Note", correct: true },
  { text: "Soul Book", correct: false },
  { text: "Dark Journal", correct: false },
  { text: "Shinigami Scroll", correct: false }
]},

{ question: "Who is known as the 'Hero Killer' in My Hero Academia?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Stain", correct: true },
  { text: "Shigaraki", correct: false },
  { text: "Dabi", correct: false },
  { text: "Overhaul", correct: false }
]},

{ question: "What breathing style does Zenitsu use?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Thunder Breathing", correct: true },
  { text: "Water Breathing", correct: false },
  { text: "Flame Breathing", correct: false },
  { text: "Wind Breathing", correct: false }
]},

{ question: "What is Levi Ackerman's rank in Attack on Titan?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Captain", correct: true },
  { text: "Commander", correct: false },
  { text: "Lieutenant", correct: false },
  { text: "General", correct: false }
]},

{ question: "Who trained Naruto during the time skip?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Jiraiya", correct: true },
  { text: "Kakashi", correct: false },
  { text: "Tsunade", correct: false },
  { text: "Orochimaru", correct: false }
]},

{ question: "What is the name of Ichigo's sword in Bleach?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Zangetsu", correct: true },
  { text: "Senbonzakura", correct: false },
  { text: "Ryujin Jakka", correct: false },
  { text: "Nozarashi", correct: false }
]},

{ question: "Who is the Flame Hashira?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Kyojuro Rengoku", correct: true },
  { text: "Tengen Uzui", correct: false },
  { text: "Sanemi Shinazugawa", correct: false },
  { text: "Muichiro Tokito", correct: false }
]},

{ question: "What is L's real name in Death Note?", basePoints: 20, difficulty: "hard", answers: [
  { text: "L Lawliet", correct: true },
  { text: "Light Yagami", correct: false },
  { text: "Near", correct: false },
  { text: "Mello", correct: false }
]},

{ question: "Who is the founding titan before Eren?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Frieda Reiss", correct: true },
  { text: "Ymir Fritz", correct: false },
  { text: "Grisha Yeager", correct: false },
  { text: "Zeke Yeager", correct: false }
]},

{ question: "What is the name of Gojo's domain expansion?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Unlimited Void", correct: true },
  { text: "Infinite Space", correct: false },
  { text: "Purple Realm", correct: false },
  { text: "Void Collapse", correct: false }
]},

{ question: "Who defeated All Might?", basePoints: 20, difficulty: "hard", answers: [
  { text: "All For One", correct: true },
  { text: "Shigaraki", correct: false },
  { text: "Endeavor", correct: false },
  { text: "Overhaul", correct: false }
]},

{ question: "What is the true identity of Pain?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Nagato", correct: true },
  { text: "Yahiko", correct: false },
  { text: "Obito", correct: false },
  { text: "Madara", correct: false }
]},

{ question: "Who is the captain of the Black Bulls?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Yami Sukehiro", correct: true },
  { text: "Julius Novachrono", correct: false },
  { text: "Fuegoleon", correct: false },
  { text: "Nozel Silva", correct: false }
]},

{ question: "What is the name of the kingdom in Seven Deadly Sins?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Liones", correct: true },
  { text: "Camelot", correct: false },
  { text: "Britannia", correct: false },
  { text: "Valhalla", correct: false }
]},

{ question: "Who is known as the strongest alchemist in Fullmetal Alchemist?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Father", correct: true },
  { text: "Roy Mustang", correct: false },
  { text: "Edward Elric", correct: false },
  { text: "Scar", correct: false }
]},

{ question: "What is Killua's family name?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Zoldyck", correct: true },
  { text: "Freecss", correct: false },
  { text: "Kurta", correct: false },
  { text: "Phantom", correct: false }
]},

{ question: "Who is the captain of Squad 6 in Bleach?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Byakuya Kuchiki", correct: true },
  { text: "Kenpachi Zaraki", correct: false },
  { text: "Toshiro Hitsugaya", correct: false },
  { text: "Soi Fon", correct: false }
]},

{ question: "What is the name of the virtual world in Sword Art Online?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Aincrad", correct: true },
  { text: "Underworld", correct: false },
  { text: "Alfheim", correct: false },
  { text: "Gun Gale", correct: false }
]},

{ question: "Who is the first Hokage?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Hashirama Senju", correct: true },
  { text: "Tobirama Senju", correct: false },
  { text: "Minato Namikaze", correct: false },
  { text: "Hiruzen Sarutobi", correct: false }
]},

{ question: "Who is the leader of the Akatsuki?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Nagato", correct: true },
  { text: "Itachi", correct: false },
  { text: "Obito", correct: false },
  { text: "Madara", correct: false }
]},

{ question: "What is the name of Eren's half-brother?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Zeke Yeager", correct: true },
  { text: "Reiner Braun", correct: false },
  { text: "Falco Grice", correct: false },
  { text: "Porco Galliard", correct: false }
]},

{ question: "What is Sukuna known as?", basePoints: 20, difficulty: "medium", answers: [
  { text: "King of Curses", correct: true },
  { text: "Demon King", correct: false },
  { text: "Curse Lord", correct: false },
  { text: "Shadow King", correct: false }
]},
{ question: "What is the name of Light Yagami's Shinigami?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Ryuk", correct: true },
  { text: "Rem", correct: false },
  { text: "Sidoh", correct: false },
  { text: "Gelus", correct: false }
]},

{ question: "Who is the main villain of Dragon Ball Super (Tournament of Power)?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Jiren", correct: true },
  { text: "Beerus", correct: false },
  { text: "Zamasu", correct: false },
  { text: "Hit", correct: false }
]},

{ question: "What is the name of the strongest Espada?", basePoints: 30, difficulty: "insane", answers: [
  { text: "Coyote Starrk", correct: true },
  { text: "Ulquiorra", correct: false },
  { text: "Grimmjow", correct: false },
  { text: "Barragan", correct: false }
]},

{ question: "What is the true name of the Nine-Tails?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Kurama", correct: true },
  { text: "Shukaku", correct: false },
  { text: "Matatabi", correct: false },
  { text: "Gyuki", correct: false }
]},

{ question: "Who is the author of One Piece?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Eiichiro Oda", correct: true },
  { text: "Masashi Kishimoto", correct: false },
  { text: "Tite Kubo", correct: false },
  { text: "Hajime Isayama", correct: false }
]},

{ question: "What is the name of the demon king in Seven Deadly Sins?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Demon King", correct: true },
  { text: "Chandler", correct: false },
  { text: "Zeldris", correct: false },
  { text: "Meliodas", correct: false }
]},

{ question: "Who is Gon’s father?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Ging Freecss", correct: true },
  { text: "Silva Zoldyck", correct: false },
  { text: "Netero", correct: false },
  { text: "Chrollo", correct: false }
]},

{ question: "What is the name of Erwin Smith’s successor?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Armin Arlert", correct: true },
  { text: "Levi Ackerman", correct: false },
  { text: "Hange Zoe", correct: false },
  { text: "Jean Kirstein", correct: false }
]},

{ question: "What is the name of the cursed spirit manipulator in Jujutsu Kaisen?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Suguru Geto", correct: true },
  { text: "Mahito", correct: false },
  { text: "Nanami", correct: false },
  { text: "Toji", correct: false }
]},

{ question: "Who is the captain of Squad 11?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Kenpachi Zaraki", correct: true },
  { text: "Byakuya Kuchiki", correct: false },
  { text: "Shunsui Kyoraku", correct: false },
  { text: "Mayuri Kurotsuchi", correct: false }
]},

{ question: "What is the name of the final form of Frieza in DBZ?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Final Form Frieza", correct: true },
  { text: "Golden Frieza", correct: false },
  { text: "Black Frieza", correct: false },
  { text: "Ultimate Frieza", correct: false }
]},

{ question: "Who sealed the Nine-Tails inside Naruto?", basePoints: 20, difficulty: "medium", answers: [
  { text: "Minato Namikaze", correct: true },
  { text: "Hiruzen", correct: false },
  { text: "Jiraiya", correct: false },
  { text: "Tsunade", correct: false }
]},

{ question: "What is the name of the main guild in Fairy Tail?", basePoints: 10, difficulty: "easy", answers: [
  { text: "Fairy Tail", correct: true },
  { text: "Blue Pegasus", correct: false },
  { text: "Sabertooth", correct: false },
  { text: "Oracion Seis", correct: false }
]},

{ question: "Who is the traitor in Attack on Titan (Season 2 reveal)?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Reiner Braun", correct: true },
  { text: "Jean", correct: false },
  { text: "Connie", correct: false },
  { text: "Sasha", correct: false }
]},

{ question: "What is the name of the ultimate technique of Naruto and Sasuke together?", basePoints: 30, difficulty: "insane", answers: [
  { text: "Six Paths Chibaku Tensei", correct: true },
  { text: "Rasenshuriken Blaze", correct: false },
  { text: "Indra's Arrow", correct: false },
  { text: "Susanoo Kurama Mode", correct: false }
]},

{ question: "Who is the strongest Hashira?", basePoints: 30, difficulty: "insane", answers: [
  { text: "Gyomei Himejima", correct: true },
  { text: "Sanemi Shinazugawa", correct: false },
  { text: "Kyojuro Rengoku", correct: false },
  { text: "Tengen Uzui", correct: false }
]},

{ question: "What is the name of the Phantom Troupe leader?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Chrollo Lucilfer", correct: true },
  { text: "Hisoka", correct: false },
  { text: "Illumi", correct: false },
  { text: "Feitan", correct: false }
]},

{ question: "Who is the main antagonist of Fullmetal Alchemist: Brotherhood?", basePoints: 20, difficulty: "hard", answers: [
  { text: "Father", correct: true },
  { text: "King Bradley", correct: false },
  { text: "Envy", correct: false },
  { text: "Pride", correct: false }
]},

{ question: "What is the name of the strongest form of Ichigo?", basePoints: 30, difficulty: "insane", answers: [
  { text: "Final Getsuga Tensho", correct: true },
  { text: "Bankai Hollow Mode", correct: false },
  { text: "True Shikai", correct: false },
  { text: "Dangai Form", correct: false }
]},

{ question: "Who became the Wizard King in Black Clover after Julius?", basePoints: 30, difficulty: "insane", answers: [
  { text: "No one yet", correct: true },
  { text: "Yami", correct: false },
  { text: "Fuegoleon", correct: false },
  { text: "Nozel", correct: false }
]}
],

  2:[
{
  question: "What is the derivative of f(x) = x³ + 2x?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "3x² + 2", correct: true },
    { text: "x² + 2", correct: false },
    { text: "3x²", correct: false },
    { text: "2x + 3", correct: false }
  ]
},
{
  question: "If 5x - 7 = 18, what is x?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "5", correct: true },
    { text: "6", correct: false },
    { text: "7", correct: false },
    { text: "8", correct: false }
  ]
},
{
  question: "Simplify: (2x²)(3x³)",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "6x⁵", correct: true },
    { text: "5x⁶", correct: false },
    { text: "6x⁶", correct: false },
    { text: "5x⁵", correct: false }
  ]
},
{
  question: "What is the integral of ∫2x dx?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "x² + C", correct: true },
    { text: "2x + C", correct: false },
    { text: "x²/2 + C", correct: false },
    { text: "4x + C", correct: false }
  ]
},
{
  question: "Solve for x: x² - 9 = 0",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "x = 3 or x = -3", correct: true },
    { text: "x = 9", correct: false },
    { text: "x = -9", correct: false },
    { text: "x = 0", correct: false }
  ]
},
{
  question: "What is the sum of the first 10 positive integers?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "55", correct: true },
    { text: "45", correct: false },
    { text: "50", correct: false },
    { text: "60", correct: false }
  ]
},
{
  question: "What is the sum of the first 8 positive integers?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "36", correct: true },
    { text: "45", correct: false },
    { text: "44", correct: false },
    { text: "38", correct: false }
  ]
},
{
  question: "If f(x) = 2x + 3, find f(5)",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "13", correct: true },
    { text: "10", correct: false },
    { text: "15", correct: false },
    { text: "8", correct: false }
  ]
},
{
  question: "Simplify: (x⁴)/(x²)",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "x²", correct: true },
    { text: "x⁶", correct: false },
    { text: "2x²", correct: false },
    { text: "x⁴", correct: false }
  ]
},
{
  question: "What is 15% of 200?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "30", correct: true },
    { text: "25", correct: false },
    { text: "20", correct: false },
    { text: "35", correct: false }
  ]
},
{
  question: "Find the next number in the sequence: .., 8, 13, 21, 34, ...",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "55", correct: true },
    { text: "65", correct: false },
    { text: "56", correct: false },
    { text: "44", correct: false }
  ]
},
{
  question: "Solve: 3x + 5 = 20",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "x = 5", correct: true },
    { text: "x = 10", correct: false },
    { text: "x = 15", correct: false },
    { text: "x = 20", correct: false }
  ]
},
{
  question: "What is the value of 2⁵?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "32", correct: true },
    { text: "25", correct: false },
    { text: "64", correct: false },
    { text: "16", correct: false }
  ]
},
{
  question: "If y = 3x + 2 and x = 4, find y",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "14", correct: true },
    { text: "12", correct: false },
    { text: "10", correct: false },
    { text: "16", correct: false }
  ]
},
{
  question: "Simplify: (x³)²",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "x⁶", correct: true },
    { text: "x⁵", correct: false },
    { text: "x⁹", correct: false },
    { text: "2x³", correct: false }
  ]
},
{
  question: "What is the area of a rectangle with length 6 and width 9?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "54", correct: true },
    { text: "63", correct: false },
    { text: "45", correct: false },
    { text: "72", correct: false }
  ]
},
{
  question: "Factorize: x² - 16",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "(x - 4)(x + 4)", correct: true },
    { text: "(x - 8)(x + 2)", correct: false },
    { text: "(x - 2)(x + 8)", correct: false },
    { text: "(x - 16)(x + 1)", correct: false }
  ]
},
{
  question: "Solve: 2x - 7 = 3",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "x = 5", correct: true },
    { text: "x = 10", correct: false },
    { text: "x = 7", correct: false },
    { text: "x = 2", correct: false }
  ]
},
{
  question: "If f(x) = x², find f(3)",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "9", correct: true },
    { text: "6", correct: false },
    { text: "12", correct: false },
    { text: "8", correct: false }
  ]
},
{
  question: "Solve: 4x + 1 = 9",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "x = 2", correct: true },
    { text: "x = 3", correct: false },
    { text: "x = 1", correct: false },
    { text: "x = 4", correct: false }
  ]
},
{
  question: "What is 15 × 8?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "120", correct: true },
    { text: "115", correct: false },
    { text: "125", correct: false },
    { text: "130", correct: false }
  ]
},

{
  question: "What is the square root of 144?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "12", correct: true },
    { text: "14", correct: false },
    { text: "10", correct: false },
    { text: "16", correct: false }
  ]
},

{
  question: "Solve: 5 + 3 × 2",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "11", correct: true },
    { text: "16", correct: false },
    { text: "13", correct: false },
    { text: "10", correct: false }
  ]
},

{
  question: "What is 20% of 150?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "30", correct: true },
    { text: "25", correct: false },
    { text: "35", correct: false },
    { text: "40", correct: false }
  ]
},

{
  question: "What is 7²?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "49", correct: true },
    { text: "42", correct: false },
    { text: "56", correct: false },
    { text: "64", correct: false }
  ]
},

{
  question: "Solve for x: 2x + 6 = 14",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "4", correct: true },
    { text: "3", correct: false },
    { text: "5", correct: false },
    { text: "6", correct: false }
  ]
},

{
  question: "What is the area of a rectangle with length 8 and width 5?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "40", correct: true },
    { text: "26", correct: false },
    { text: "30", correct: false },
    { text: "45", correct: false }
  ]
},

{
  question: "Simplify: 3(x + 4)",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "3x + 12", correct: true },
    { text: "3x + 4", correct: false },
    { text: "x + 12", correct: false },
    { text: "7x", correct: false }
  ]
},

{
  question: "What is the perimeter of a square with side 9?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "36", correct: true },
    { text: "81", correct: false },
    { text: "18", correct: false },
    { text: "27", correct: false }
  ]
},

{
  question: "What is 2³ × 2²?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "32", correct: true },
    { text: "16", correct: false },
    { text: "64", correct: false },
    { text: "8", correct: false }
  ]
},

{
  question: "Solve: x² = 49",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "7 or -7", correct: true },
    { text: "7", correct: false },
    { text: "-7", correct: false },
    { text: "14", correct: false }
  ]
},

{
  question: "What is the derivative of x²?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "2x", correct: true },
    { text: "x", correct: false },
    { text: "x²", correct: false },
    { text: "2", correct: false }
  ]
},

{
  question: "What is sin(90°)?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "1", correct: true },
    { text: "0", correct: false },
    { text: "0.5", correct: false },
    { text: "-1", correct: false }
  ]
},

{
  question: "Solve: log10(100)",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "2", correct: true },
    { text: "10", correct: false },
    { text: "1", correct: false },
    { text: "100", correct: false }
  ]
},

{
  question: "What is the value of π (approx)?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "3.14", correct: true },
    { text: "3.41", correct: false },
    { text: "2.14", correct: false },
    { text: "3.04", correct: false }
  ]
},

{
  question: "What is the integral of 2x?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "x² + C", correct: true },
    { text: "2x²", correct: false },
    { text: "x²", correct: false },
    { text: "2 + C", correct: false }
  ]
},

{
  question: "Solve: 3x - 5 = 16",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "7", correct: true },
    { text: "6", correct: false },
    { text: "8", correct: false },
    { text: "5", correct: false }
  ]
},

{
  question: "What is 9! (9 factorial)?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "362880", correct: true },
    { text: "40320", correct: false },
    { text: "36280", correct: false },
    { text: "362800", correct: false }
  ]
},

{
  question: "If a triangle has angles 90° and 45°, what is the third angle?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "45°", correct: true },
    { text: "30°", correct: false },
    { text: "60°", correct: false },
    { text: "90°", correct: false }
  ]
},

{
  question: "What is the solution to 1/x = 5?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "1/5", correct: true },
    { text: "5", correct: false },
    { text: "-5", correct: false },
    { text: "0.5", correct: false }
  ]
},
{
  question: "What is 12 × 12?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "144", correct: true },
    { text: "124", correct: false },
    { text: "134", correct: false },
    { text: "154", correct: false }
  ]
},

{
  question: "Solve: 4x = 28",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "7", correct: true },
    { text: "6", correct: false },
    { text: "8", correct: false },
    { text: "9", correct: false }
  ]
},

{
  question: "What is 5³?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "125", correct: true },
    { text: "25", correct: false },
    { text: "75", correct: false },
    { text: "100", correct: false }
  ]
},

{
  question: "Simplify: x² × x³",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "x⁵", correct: true },
    { text: "x⁶", correct: false },
    { text: "x⁹", correct: false },
    { text: "2x⁵", correct: false }
  ]
},

{
  question: "What is the cube root of 27?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "3", correct: true },
    { text: "9", correct: false },
    { text: "6", correct: false },
    { text: "12", correct: false }
  ]
},

{
  question: "Solve: x² - 16 = 0",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "4 or -4", correct: true },
    { text: "16", correct: false },
    { text: "8", correct: false },
    { text: "-16", correct: false }
  ]
},

{
  question: "What is cos(0°)?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "1", correct: true },
    { text: "0", correct: false },
    { text: "-1", correct: false },
    { text: "0.5", correct: false }
  ]
},

{
  question: "Derivative of 3x²?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "6x", correct: true },
    { text: "3x", correct: false },
    { text: "6", correct: false },
    { text: "9x", correct: false }
  ]
},

{
  question: "What is 10% of 450?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "45", correct: true },
    { text: "40", correct: false },
    { text: "50", correct: false },
    { text: "35", correct: false }
  ]
},

{
  question: "Solve: 2x² = 18",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "3 or -3", correct: true },
    { text: "9", correct: false },
    { text: "±9", correct: false },
    { text: "6", correct: false }
  ]
},

{
  question: "What is ln(e)?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "1", correct: true },
    { text: "0", correct: false },
    { text: "e", correct: false },
    { text: "2.71", correct: false }
  ]
},

{
  question: "What is 8²?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "64", correct: true },
    { text: "16", correct: false },
    { text: "72", correct: false },
    { text: "56", correct: false }
  ]
},

{
  question: "Solve: √x = 6",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "36", correct: true },
    { text: "12", correct: false },
    { text: "18", correct: false },
    { text: "30", correct: false }
  ]
},

{
  question: "What is tan(45°)?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "1", correct: true },
    { text: "0", correct: false },
    { text: "0.5", correct: false },
    { text: "√2", correct: false }
  ]
},

{
  question: "What is 6! ?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "720", correct: true },
    { text: "120", correct: false },
    { text: "360", correct: false },
    { text: "600", correct: false }
  ]
},

{
  question: "Solve: 4x - 12 = 0",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "3", correct: true },
    { text: "4", correct: false },
    { text: "2", correct: false },
    { text: "6", correct: false }
  ]
},

{
  question: "What is the area of a circle (r = 7)? (Use π ≈ 3.14)",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "153.86", correct: true },
    { text: "144", correct: false },
    { text: "140", correct: false },
    { text: "160", correct: false }
  ]
},

{
  question: "Derivative of eˣ?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "eˣ", correct: true },
    { text: "x·eˣ", correct: false },
    { text: "1", correct: false },
    { text: "ln(x)", correct: false }
  ]
},

{
  question: "Solve: x³ = 27",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "3", correct: true },
    { text: "9", correct: false },
    { text: "6", correct: false },
    { text: "-3", correct: false }
  ]
},

{
  question: "What is the sum of angles in a triangle?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "180°", correct: true },
    { text: "360°", correct: false },
    { text: "90°", correct: false },
    { text: "270°", correct: false }
  ]
},

{
  question: "What is 11²?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "121", correct: true },
    { text: "111", correct: false },
    { text: "131", correct: false },
    { text: "101", correct: false }
  ]
},

{
  question: "Solve: 7x = 49",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "7", correct: true },
    { text: "6", correct: false },
    { text: "8", correct: false },
    { text: "9", correct: false }
  ]
},

{
  question: "What is log10(1000)?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "3", correct: true },
    { text: "2", correct: false },
    { text: "10", correct: false },
    { text: "1000", correct: false }
  ]
},

{
  question: "What is 3⁴?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "81", correct: true },
    { text: "27", correct: false },
    { text: "64", correct: false },
    { text: "9", correct: false }
  ]
},

{
  question: "Solve: x/4 = 5",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "20", correct: true },
    { text: "15", correct: false },
    { text: "25", correct: false },
    { text: "10", correct: false }
  ]
},

{
  question: "What is 2⁶?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "64", correct: true },
    { text: "32", correct: false },
    { text: "128", correct: false },
    { text: "16", correct: false }
  ]
},

{
  question: "Solve: x² + 5x + 6 = 0",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "-2 or -3", correct: true },
    { text: "2 or 3", correct: false },
    { text: "-6 or -1", correct: false },
    { text: "1 or 6", correct: false }
  ]
},

{
  question: "What is the derivative of 5?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "0", correct: true },
    { text: "5", correct: false },
    { text: "1", correct: false },
    { text: "x", correct: false }
  ]
},

{
  question: "What is 4³?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "64", correct: true },
    { text: "16", correct: false },
    { text: "12", correct: false },
    { text: "32", correct: false }
  ]
},

{
  question: "Solve: 9x + 3 = 30",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "3", correct: true },
    { text: "2", correct: false },
    { text: "4", correct: false },
    { text: "5", correct: false }
  ]
}
],

  3:[
  {
    question: "What is the capital city of Australia?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Brisbane", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Gold", correct: true },
      { text: "Silver", correct: false },
      { text: "Iron", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "China", correct: false },
      { text: "Brazil", correct: true },
      { text: "UK", correct: false },
      { text: "Russia", correct: false }
    ]
  },
  {
    question: "What is the currency of Japan?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Dollar", correct: false },
      { text: "Peso", correct: false }
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "Who discovered penicillin?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "Alexander Fleming", correct: true },
      { text: "Marie Curie", correct: false },
      { text: "Louis Pasteur", correct: false },
      { text: "Thomas Edison", correct: false }
    ]
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "Thailand", correct: false },
      { text: "South Korea", correct: false }
    ]
  },
  {
    question: "How many continents are there on Earth?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Which planet has the most moons?",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Neptune", correct: false }
    ]
  },
  {
    question: "Who is the author of 'Harry Potter' series?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "J.K. Rowling", correct: true },
      { text: "J.R.R. Tolkien", correct: false },
      { text: "George R.R. Martin", correct: false },
      { text: "C.S. Lewis", correct: false }
    ]
  },
  {
    question: "Which language is the most spoken worldwide?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Spanish", correct: false },
      { text: "Hindi", correct: false }
    ]
  },
  {
    question: "What is the smallest country in the world?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false }
    ]
  },
  {
    question: "Who invented the telephone?",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "Alexander Graham Bell", correct: true },
      { text: "Thomas Edison", correct: false },
      { text: "Nikola Tesla", correct: false },
      { text: "Guglielmo Marconi", correct: false }
    ]
  },
  {
    question: "Which organ purifies blood in the human body?",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "Heart", correct: false },
      { text: "Kidney", correct: true },
      { text: "Lungs", correct: false },
      { text: "Liver", correct: false }
    ]
  },
  {
    question: "What is the chemical formula of water?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false }
    ]
  },
  {
    question: "Which is the tallest mountain in the world?",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "K2", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false }
    ]
  },
{
  question: "What is the capital of France?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Paris", correct: true },
    { text: "Rome", correct: false },
    { text: "Madrid", correct: false },
    { text: "Berlin", correct: false }
  ]
},

{
  question: "Which planet is known as the Red Planet?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Mars", correct: true },
    { text: "Venus", correct: false },
    { text: "Jupiter", correct: false },
    { text: "Saturn", correct: false }
  ]
},

{
  question: "Who wrote 'Romeo and Juliet'?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "William Shakespeare", correct: true },
    { text: "Charles Dickens", correct: false },
    { text: "Mark Twain", correct: false },
    { text: "Jane Austen", correct: false }
  ]
},

{
  question: "What is the largest ocean on Earth?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "Pacific Ocean", correct: true },
    { text: "Atlantic Ocean", correct: false },
    { text: "Indian Ocean", correct: false },
    { text: "Arctic Ocean", correct: false }
  ]
},
{
  question: "What is the smallest prime number?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "2", correct: true },
    { text: "1", correct: false },
    { text: "3", correct: false },
    { text: "5", correct: false }
  ]
},
{
  question: "Who developed the theory of relativity?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "Albert Einstein", correct: true },
    { text: "Isaac Newton", correct: false },
    { text: "Galileo Galilei", correct: false },
    { text: "Nikola Tesla", correct: false }
  ]
},

{
  question: "What is the largest desert in the world?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "Antarctic Desert", correct: true },
    { text: "Sahara", correct: false },
    { text: "Arabian Desert", correct: false },
    { text: "Gobi", correct: false }
  ]
},

{
  question: "Which element has atomic number 1?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Hydrogen", correct: true },
    { text: "Helium", correct: false },
    { text: "Oxygen", correct: false },
    { text: "Carbon", correct: false }
  ]
},

{
  question: "What is the longest river in the world?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "Nile River", correct: true },
    { text: "Amazon River", correct: false },
    { text: "Yangtze River", correct: false },
    { text: "Mississippi River", correct: false }
  ]
},

{
  question: "Who was the first man to walk on the Moon?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "Neil Armstrong", correct: true },
    { text: "Buzz Aldrin", correct: false },
    { text: "Yuri Gagarin", correct: false },
    { text: "Michael Collins", correct: false }
  ]
},
{
  question: "Which country is home to the Great Barrier Reef?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "Australia", correct: true },
    { text: "USA", correct: false },
    { text: "Philippines", correct: false },
    { text: "Indonesia", correct: false }
  ]
},

{
  question: "What is the hardest natural substance on Earth?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Diamond", correct: true },
    { text: "Iron", correct: false },
    { text: "Gold", correct: false },
    { text: "Quartz", correct: false }
  ]
},
{
  question: "What is the square root of 144?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "12", correct: true },
    { text: "14", correct: false },
    { text: "10", correct: false },
    { text: "16", correct: false }
  ]
},

{
  question: "Which language has the most native speakers worldwide?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "Mandarin Chinese", correct: true },
    { text: "English", correct: false },
    { text: "Spanish", correct: false },
    { text: "Hindi", correct: false }
  ]
},

{
  question: "What year did World War II end?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "1945", correct: true },
    { text: "1944", correct: false },
    { text: "1939", correct: false },
    { text: "1950", correct: false }
  ]
},
{
  question: "Which organ in the human body pumps blood?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Heart", correct: true },
    { text: "Lungs", correct: false },
    { text: "Brain", correct: false },
    { text: "Liver", correct: false }
  ]
},

{
  question: "Who is known as the Father of Computers?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "Charles Babbage", correct: true },
    { text: "Alan Turing", correct: false },
    { text: "Bill Gates", correct: false },
    { text: "Steve Jobs", correct: false }
  ]
},

{
  question: "Which country gifted the Statue of Liberty to the USA?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "France", correct: true },
    { text: "Germany", correct: false },
    { text: "Italy", correct: false },
    { text: "Spain", correct: false }
  ]
},

{
  question: "What is the freezing point of water in Celsius?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "0", correct: true },
    { text: "10", correct: false },
    { text: "32", correct: false },
    { text: "-10", correct: false }
  ]
},

{
  question: "Which planet has the most moons?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "Saturn", correct: true },
    { text: "Jupiter", correct: false },
    { text: "Neptune", correct: false },
    { text: "Uranus", correct: false }
  ]
},
{
  question: "What is the largest mammal?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Blue Whale", correct: true },
    { text: "Elephant", correct: false },
    { text: "Giraffe", correct: false },
    { text: "Hippopotamus", correct: false }
  ]
},

{
  question: "Which metal is liquid at room temperature?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "Mercury", correct: true },
    { text: "Iron", correct: false },
    { text: "Silver", correct: false },
    { text: "Copper", correct: false }
  ]
},

{
  question: "How many bones are in the adult human body?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "206", correct: true },
    { text: "201", correct: false },
    { text: "210", correct: false },
    { text: "196", correct: false }
  ]
},
{
  question: "What is the main gas found in Earth's atmosphere?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "Nitrogen", correct: true },
    { text: "Oxygen", correct: false },
    { text: "Carbon dioxide", correct: false },
    { text: "Hydrogen", correct: false }
  ]
},

{
  question: "Who painted the ceiling of the Sistine Chapel?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "Michelangelo", correct: true },
    { text: "Raphael", correct: false },
    { text: "Donatello", correct: false },
    { text: "Caravaggio", correct: false }
  ]
},

{
  question: "Which country has the most population in the world (as of recent data)?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "India", correct: true },
    { text: "China", correct: false },
    { text: "USA", correct: false },
    { text: "Indonesia", correct: false }
  ]
},
{
  question: "Which country is home to the Amazon Rainforest?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "Brazil", correct: true },
    { text: "Colombia", correct: false },
    { text: "Peru", correct: false },
    { text: "Argentina", correct: false }
  ]
},
{
  question: "Who was the first President of the United States?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "George Washington", correct: true },
    { text: "Abraham Lincoln", correct: false },
    { text: "Thomas Jefferson", correct: false },
    { text: "John Adams", correct: false }
  ]
},

{
  question: "Which planet is closest to the Sun?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Mercury", correct: true },
    { text: "Venus", correct: false },
    { text: "Earth", correct: false },
    { text: "Mars", correct: false }
  ]
},

{
  question: "What is the largest organ in the human body?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "Skin", correct: true },
    { text: "Liver", correct: false },
    { text: "Heart", correct: false },
    { text: "Lungs", correct: false }
  ]
},

{
  question: "Which element is needed for breathing?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Oxygen", correct: true },
    { text: "Nitrogen", correct: false },
    { text: "Carbon", correct: false },
    { text: "Helium", correct: false }
  ]
},

{
  question: "Which country built the pyramids?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "Egypt", correct: true },
    { text: "Mexico", correct: false },
    { text: "Peru", correct: false },
    { text: "Greece", correct: false }
  ]
},

{
  question: "What is the speed of light in vacuum (approx)?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "300,000 km/s", correct: true },
    { text: "150,000 km/s", correct: false },
    { text: "30,000 km/s", correct: false },
    { text: "3,000 km/s", correct: false }
  ]
},

{
  question: "Who discovered gravity after seeing a falling apple?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "Isaac Newton", correct: true },
    { text: "Albert Einstein", correct: false },
    { text: "Galileo", correct: false },
    { text: "Kepler", correct: false }
  ]
},

{
  question: "Which continent is the Sahara Desert located in?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "Africa", correct: true },
    { text: "Asia", correct: false },
    { text: "Australia", correct: false },
    { text: "South America", correct: false }
  ]
},

{
  question: "What is the boiling point of water in Celsius?",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "100", correct: true },
    { text: "90", correct: false },
    { text: "80", correct: false },
    { text: "120", correct: false }
  ]
},

{
  question: "Which country won the FIFA World Cup in 2018?",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "France", correct: true },
    { text: "Germany", correct: false },
    { text: "Brazil", correct: false },
    { text: "Argentina", correct: false }
  ]
},
{
  question: "Which blood type is known as the universal donor?",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "O negative", correct: true },
    { text: "A positive", correct: false },
    { text: "AB positive", correct: false },
    { text: "B negative", correct: false }
  ]
},

{
  question: "How many players are on a standard soccer team on the field?",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "11", correct: true },
    { text: "10", correct: false },
    { text: "9", correct: false },
    { text: "12", correct: false }
  ]
}
],
  
  4:[
  {
    question: "ما هي أول سورة نزلت كاملة على النبي محمد ﷺ؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "سورة الفاتحة", correct: true },
      { text: "سورة المدثر", correct: false },
      { text: "سورة العلق", correct: false },
      { text: "سورة البقرة", correct: false }
    ]
  },
  {
    question: "من هو الصحابي المعروف بلقب 'سيف الله المسلول'؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "علي بن أبي طالب", correct: false },
      { text: "خالد بن الوليد", correct: true },
      { text: "أبو بكر الصديق", correct: false },
      { text: "عمر بن الخطاب", correct: false }
    ]
  },
  {
    question: "ما هو معنى كلمة 'الإسراء' في القرآن؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "الرحلة الليلية", correct: true },
      { text: "الصلاة الليلية", correct: false },
      { text: "الجهاد الشديد", correct: false },
      { text: "التسرية عن النفس", correct: false }
    ]
  },
  {
    question: "كم عدد آيات القرآن الكريم ؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "6363", correct: false },
      { text: "8424", correct: false },
      { text: "8114", correct: false },
      { text: "6236", correct: true }
    ]
  },
  {
    question: "من هو النبي الذي ابتلعه الحوت وفق القرآن؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "يونس عليه السلام", correct: true },
      { text: "إبراهيم عليه السلام", correct: false },
      { text: "موسى عليه السلام", correct: false },
      { text: "نوح عليه السلام", correct: false }
    ]
  },
  {
    question: "ما هي أطول سورة في القرآن؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "سورة آل عمران", correct: false },
      { text: "سورة النساء", correct: false },
      { text: "سورة يونس", correct: false },
      { text: "سورة البقرة", correct: true }
    ]
  },
  {
    question: "ما اسم خازن النار في القرآن؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "مالك", correct: true },
      { text: "ميكائيل", correct: false },
      { text: "جبريل", correct: false },
      { text: "إسرافيل", correct: false }
    ]
  },
  {
    question: "من هو الصحابي الذي لقبه النبي ﷺ بـ ذو النورين؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "عمر بن الخطاب", correct: false },
      { text: "علي بن أبي طالب", correct: false },
      { text: "عثمان بن عفان", correct: true },
      { text: "سعد بن أبي وقاص", correct: false }
    ]
  },
  {
    question: "ما السورة التي تُعرف باسم سورة العهد؟",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "المائدة", correct: true },
      { text: "النساء", correct: false },
      { text: "آل عمران", correct: false },
      { text: "يوسف", correct: false }
    ]
  },
  {
    question: "من هو الصحابي الذي اهتز لموته عرش الرحمن؟",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "حمزة بن عبد المطلب", correct: false },
      { text: "سعد بن معاذ", correct: true },
      { text: "مصعب بن عمير", correct: false },
      { text: "جعفر بن أبي طالب", correct: false }
    ]
  },
  {
    question: "من هو الصحابي الذي جمع القرآن بعد وفاة النبي ﷺ؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "عمر بن الخطاب", correct: false },
      { text: "أبو بكر الصديق", correct: true },
      { text: "عثمان بن عفان", correct: false },
      { text: "علي بن أبي طالب", correct: false }
    ]
  },
  {
    question: "من هو الصحابي الملقب بترجمان القرآن؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "عبد الله بن عمر", correct: false },
      { text: "عبد الله بن عباس", correct: true },
      { text: "زيد بن ثابت", correct: false },
      { text: "أبيّ بن كعب", correct: false }
    ]
  },
  {
    question: "من هو أول سفير في الإسلام؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "عبد الله بن رواحة", correct: false },
      { text: "مصعب بن عمير", correct: true },
      { text: "معاذ بن جبل", correct: false },
      { text: "عثمان بن عفان", correct: false }
    ]
  },
  {
    question: "ما آخر سورة نزلت كاملة على النبي ﷺ؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "النصر", correct: true },
      { text: "البقرة", correct: false },
      { text: "الكوثر", correct: false },
      { text: "يس", correct: false }
    ]
  },
  {
    question: "من هو الصحابي الذي أشار بحفر الخندق؟",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "سلمان الفارسي", correct: true },
      { text: "أبو بكر الصديق", correct: false },
      { text: "عمر بن الخطاب", correct: false },
      { text: "سعد بن أبي وقاص", correct: false }
    ]
  },
  {
    question: "من قتل مسيلمة الكذاب؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "وحشيّ بن حرب", correct: true },
      { text: "خالد بن الوليد", correct: false },
      { text: "البراء بن مالك", correct: false },
      { text: "أبو دجانة", correct: false }
    ]
  },
  {
    question: "من آخر من مات من العشرة المبشرين بالجنة؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "سعد بن أبي وقاص", correct: true },
      { text: "طلحة بن عبيد الله", correct: false },
      { text: "علي بن أبي طالب", correct: false },
      { text: "عبد الرحمن بن عوف", correct: false }
    ]
  },
  {
    question: "ما هي السورة التي لا تبدأ بالبسملة؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "الفاتحة", correct: false },
      { text: "البقرة", correct: false },
      { text: "التوبة", correct: true },
      { text: "آل عمران", correct: false }
    ]
  },
  {
    question: "أي سورة نزلت كاملةً في ليلة واحدة؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "سورة الفاتحة", correct: false },
      { text: "سورة الأنعام", correct: true },
      { text: "سورة النصر", correct: false },
      { text: "سورة المدثر", correct: false }
    ]
  },
  {
    question: "من هو الصحابي المعروف بحبر الأمة؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "أبي بكر الصديق", correct: false },
      { text: "أبو هريرة", correct: false },
      { text: "عبد الله بن عباس", correct: true },
      { text: "زيد بن حارثة", correct: false }
    ]
  },
  {
    question: "ما اسم أول مسجد بني في الإسلام؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "المسجد النبوي", correct: false },
      { text: "المسجد الحرام", correct: false },
      { text: "مسجد قباء", correct: true },
      { text: "المسجد الأقصى", correct: false }
    ]
  },
  {
    question: "من هو النبي الذي كلمه الله مباشرةً وفق القرآن؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "موسى عليه السلام", correct: true },
      { text: "إبراهيم عليه السلام", correct: false },
      { text: "نوح عليه السلام", correct: false },
      { text: "يونس عليه السلام", correct: false }
    ]
  },
  {
  question: "كم عدد سور القرآن الكريم؟",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "114", correct: true },
    { text: "112", correct: false },
    { text: "110", correct: false },
    { text: "120", correct: false }
  ]
},
{
  question: "ما اسم أم النبي ﷺ؟",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "آمنة بنت وهب", correct: true },
    { text: "خديجة بنت خويلد", correct: false },
    { text: "حليمة السعدية", correct: false },
    { text: "فاطمة بنت أسد", correct: false }
  ]
},
{
  question: "في أي شهر نزل القرآن؟",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "رمضان", correct: true },
    { text: "محرم", correct: false },
    { text: "رجب", correct: false },
    { text: "شعبان", correct: false }
  ]
},
{
  question: "كم عدد أركان الإسلام؟",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "5", correct: true },
    { text: "6", correct: false },
    { text: "4", correct: false },
    { text: "7", correct: false }
  ]
},
{
  question: "من هو أول من آمن من الرجال؟",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "أبو بكر الصديق", correct: true },
    { text: "عمر بن الخطاب", correct: false },
    { text: "عثمان بن عفان", correct: false },
    { text: "علي بن أبي طالب", correct: false }
  ]
},
{
  question: "ما اسم الغار الذي كان يتعبد فيه النبي ﷺ؟",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "غار حراء", correct: true },
    { text: "غار ثور", correct: false },
    { text: "غار أحد", correct: false },
    { text: "غار بدر", correct: false }
  ]
},
{
  question: "من هو الصحابي الملقب بأمين الأمة؟",
  basePoints: 20,
  difficulty: "hard",
  answers: [
    { text: "أبو عبيدة بن الجراح", correct: true },
    { text: "عمر بن الخطاب", correct: false },
    { text: "أبو هريرة", correct: false },
    { text: "معاذ بن جبل", correct: false }
  ]
},
{
  question: "كم عدد أجزاء القرآن؟",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "30", correct: true },
    { text: "28", correct: false },
    { text: "32", correct: false },
    { text: "25", correct: false }
  ]
},
{
  question: "ما أول معركة في الإسلام؟",
  basePoints: 20,
  difficulty: "medium",
  answers: [
    { text: "بدر", correct: true },
    { text: "أحد", correct: false },
    { text: "الخندق", correct: false },
    { text: "حنين", correct: false }
  ]
},
{
  question: "كم عدد الأنبياء المذكورين في القرآن؟",
  basePoints: 30,
  difficulty: "insane",
  answers: [
    { text: "25", correct: true },
    { text: "24", correct: false },
    { text: "30", correct: false },
    { text: "18", correct: false }
  ]
},
  {
    question: "ما اسم والد النبي إبراهيم عليه السلام؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "آزر", correct: true },
      { text: "سام", correct: false },
      { text: "عابر", correct: false },
      { text: "ناحور", correct: false }
    ]
  },
  {
    question: "ما السورة التي تسمى قلب القرآن؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "يس", correct: true },
      { text: "الرحمن", correct: false },
      { text: "الملك", correct: false },
      { text: "الكهف", correct: false }
    ]
  },
  {
    question: "كم عدد أبواب الجنة؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "8", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },
      { text: "5", correct: false }
    ]
  },
  {
    question: "من هو النبي الذي صنع السفينة؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "نوح عليه السلام", correct: true },
      { text: "موسى عليه السلام", correct: false },
      { text: "إبراهيم عليه السلام", correct: false },
      { text: "هود عليه السلام", correct: false }
    ]
  },
  {
    question: "ما اسم زوجة فرعون التي آمنت بموسى عليه السلام؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "آسية بنت مزاحم", correct: true },
      { text: "مريم بنت عمران", correct: false },
      { text: "هاجر", correct: false },
      { text: "صفية", correct: false }
    ]
  },
  {
    question: "ما اسم أول خليفة للمسلمين؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "أبو بكر الصديق", correct: true },
      { text: "عمر بن الخطاب", correct: false },
      { text: "عثمان بن عفان", correct: false },
      { text: "علي بن أبي طالب", correct: false }
    ]
  },
  {
    question: "ما اسم المعركة التي استشهد فيها حمزة بن عبد المطلب؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "أحد", correct: true },
      { text: "بدر", correct: false },
      { text: "الخندق", correct: false },
      { text: "تبوك", correct: false }
    ]
  },
  {
    question: "من هو النبي الذي فُتن في ملكه؟",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "سليمان عليه السلام", correct: true },
      { text: "داود عليه السلام", correct: false },
      { text: "يوسف عليه السلام", correct: false },
      { text: "أيوب عليه السلام", correct: false }
    ]
  },
  {
    question: "ما اسم السورة التي تحدثت عن غزوة بدر؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الأنفال", correct: true },
      { text: "التوبة", correct: false },
      { text: "محمد", correct: false },
      { text: "الفتح", correct: false }
    ]
  },
  {
    question: "كم عدد أيام خلق السماوات والأرض؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "6", correct: true },
      { text: "7", correct: false },
      { text: "5", correct: false },
      { text: "8", correct: false }
    ]
  },
  {
    question: "من هو النبي الذي ابتُلي بالمرض سنين طويلة؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "أيوب عليه السلام", correct: true },
      { text: "يونس عليه السلام", correct: false },
      { text: "يعقوب عليه السلام", correct: false },
      { text: "إسماعيل عليه السلام", correct: false }
    ]
  },
  {
    question: "ما اسم أكبر مسجد في العالم؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "المسجد الحرام", correct: true },
      { text: "المسجد النبوي", correct: false },
      { text: "المسجد الأقصى", correct: false },
      { text: "مسجد قباء", correct: false }
    ]
  },
  {
    question: "من هو الصحابي الذي لقب بالفاروق؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "عمر بن الخطاب", correct: true },
      { text: "أبو بكر الصديق", correct: false },
      { text: "علي بن أبي طالب", correct: false },
      { text: "عثمان بن عفان", correct: false }
    ]
  },
  {
    question: "ما اسم أم المؤمنين التي كانت تُلقب بالصديقة؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "عائشة بنت أبي بكر", correct: true },
      { text: "حفصة بنت عمر", correct: false },
      { text: "أم سلمة", correct: false },
      { text: "سودة بنت زمعة", correct: false }
    ]
  },
  {
    question: "ما اسم المكان الذي هاجر إليه المسلمون أولاً؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "الحبشة", correct: true },
      { text: "المدينة", correct: false },
      { text: "الطائف", correct: false },
      { text: "اليمن", correct: false }
    ]
  },
  {
    question: "ما اسم السورة التي تسمى عروس القرآن؟",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "الرحمن", correct: true },
      { text: "يس", correct: false },
      { text: "الملك", correct: false },
      { text: "الواقعة", correct: false }
    ]
  },
  {
    question: "من هو الصحابي الذي كان شديد الشبه بالنبي ﷺ؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "جعفر بن أبي طالب", correct: true },
      { text: "عبد الله بن مسعود", correct: false },
      { text: "سعد بن أبي وقاص", correct: false },
      { text: "خالد بن الوليد", correct: false }
    ]
  },
  {
    question: "ما اسم أم النبي عيسى عليه السلام؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "مريم", correct: true },
      { text: "هاجر", correct: false },
      { text: "آسية", correct: false },
      { text: "خديجة", correct: false }
    ]
  },
  {
    question: "في أي سنة كانت غزوة الخندق؟",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "السنة الخامسة للهجرة", correct: true },
      { text: "السنة الثالثة", correct: false },
      { text: "السنة الثانية", correct: false },
      { text: "السنة السابعة", correct: false }
    ]
  },
  {
    question: "من هو النبي الذي كلمه الله عند جبل الطور؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "موسى عليه السلام", correct: true },
      { text: "إبراهيم عليه السلام", correct: false },
      { text: "نوح عليه السلام", correct: false },
      { text: "داود عليه السلام", correct: false }
    ]
  },
  {
    question: "ما اسم المعركة التي فُتحت فيها مكة؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "فتح مكة", correct: true },
      { text: "حنين", correct: false },
      { text: "تبوك", correct: false },
      { text: "مؤتة", correct: false }
    ]
  },
  {
    question: "ما اسم أول مسجد بُني في المدينة؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "مسجد قباء", correct: true },
      { text: "المسجد النبوي", correct: false },
      { text: "المسجد الحرام", correct: false },
      { text: "مسجد القبلتين", correct: false }
    ]
  },
  {
    question: "من هو الصحابي الذي نام في فراش النبي ﷺ ليلة الهجرة؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "علي بن أبي طالب", correct: true },
      { text: "أبو بكر الصديق", correct: false },
      { text: "عثمان بن عفان", correct: false },
      { text: "عمر بن الخطاب", correct: false }
    ]
  },
  {
    question: "كم عدد تكبيرات صلاة الجنازة؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: false }
    ]
  },
  {
    question: "من هو النبي الذي أُلقي في النار؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "إبراهيم عليه السلام", correct: true },
      { text: "يوسف عليه السلام", correct: false },
      { text: "لوط عليه السلام", correct: false },
      { text: "هود عليه السلام", correct: false }
    ]
  },
  {
    question: "ما اسم زوجة النبي ﷺ الأولى؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "خديجة بنت خويلد", correct: true },
      { text: "عائشة بنت أبي بكر", correct: false },
      { text: "حفصة بنت عمر", correct: false },
      { text: "سودة بنت زمعة", correct: false }
    ]
  },
  {
    question: "ما اسم السورة التي تُسمى المنجية؟",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "الملك", correct: true },
      { text: "يس", correct: false },
      { text: "الرحمن", correct: false },
      { text: "الكهف", correct: false }
    ]
  },
  {
    question: "من هو النبي الذي فُقد بصره من الحزن؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "يعقوب عليه السلام", correct: true },
      { text: "يوسف عليه السلام", correct: false },
      { text: "أيوب عليه السلام", correct: false },
      { text: "نوح عليه السلام", correct: false }
    ]
  },
  {
    question: "ما اسم العام الذي توفي فيه أبو طالب وخديجة؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "عام الحزن", correct: true },
      { text: "عام الفتح", correct: false },
      { text: "عام الهجرة", correct: false },
      { text: "عام بدر", correct: false }
    ]
  },
  {
    question: "كم عدد الأشهر الحرم؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "4", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "2", correct: false }
    ]
  },
  {
  question: "من هو الصحابي الذي أرسله النبي ﷺ ليتعلم لغة اليهود في المدينة؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "زيد بن ثابت", correct: true },
    { text: "عبد الله بن مسعود", correct: false },
    { text: "أبي بن كعب", correct: false },
    { text: "معاذ بن جبل", correct: false }
  ]
},

{
  question: "ما اسم السورة التي تسمى سنام القرآن؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "البقرة", correct: true },
    { text: "آل عمران", correct: false },
    { text: "النساء", correct: false },
    { text: "الأعراف", correct: false }
  ]
},

{
  question: "في أي غزوة انشق القمر للنبي ﷺ كمعجزة؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "لم يكن في غزوة بل في مكة", correct: true },
    { text: "غزوة بدر", correct: false },
    { text: "غزوة أحد", correct: false },
    { text: "غزوة الخندق", correct: false }
  ]
},

{
  question: "كم عدد السور التي تبدأ بالحروف المقطعة؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "29", correct: true },
    { text: "27", correct: false },
    { text: "30", correct: false },
    { text: "24", correct: false }
  ]
},

{
  question: "ما هي السورة التي ذكر فيها اسم الله في كل آية؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "المجادلة", correct: true },
    { text: "الإخلاص", correct: false },
    { text: "الكوثر", correct: false },
    { text: "الفلق", correct: false }
  ]
},

{
  question: "كم مرة ذكر اسم جبريل في القرآن صراحة؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "3", correct: true },
    { text: "5", correct: false },
    { text: "7", correct: false },
    { text: "9", correct: false }
  ]
},

{
  question: "ما اسم الجبل الذي استوت عليه سفينة نوح؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "الجودي", correct: true },
    { text: "سيناء", correct: false },
    { text: "حراء", correct: false },
    { text: "أحد", correct: false }
  ]
},

{
  question: "ما اسم السورة التي تسمى المقشقشة؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "الكافرون", correct: true },
    { text: "الإخلاص", correct: false },
    { text: "الفلق", correct: false },
    { text: "الناس", correct: false }
  ]
},

{
  question: "من هو النبي الذي لقب بذو النون؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "يونس عليه السلام", correct: true },
    { text: "أيوب عليه السلام", correct: false },
    { text: "يوسف عليه السلام", correct: false },
    { text: "إدريس عليه السلام", correct: false }
  ]
},

{
  question: "كم مرة ذكر اسم موسى في القرآن؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "136", correct: true },
    { text: "120", correct: false },
    { text: "150", correct: false },
    { text: "100", correct: false }
  ]
},

{
  question: "من هو الصحابي الذي لقبه النبي ﷺ بأمين الأمة؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "أبو عبيدة بن الجراح", correct: true },
    { text: "معاذ بن جبل", correct: false },
    { text: "سعد بن أبي وقاص", correct: false },
    { text: "عبد الرحمن بن عوف", correct: false }
  ]
},

{
  question: "ما السورة التي نزلت كاملة دفعة واحدة وشيعها 70 ألف ملك؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "الأنعام", correct: true },
    { text: "الكهف", correct: false },
    { text: "يس", correct: false },
    { text: "الرحمن", correct: false }
  ]
},

{
  question: "من هو الصحابي الذي قتل أبي جهل؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "معاذ ومعوذ ابنا عفراء", correct: true },
    { text: "علي بن أبي طالب", correct: false },
    { text: "خالد بن الوليد", correct: false },
    { text: "سعد بن أبي وقاص", correct: false }
  ]
},

{
  question: "كم مرة ذكر اسم عيسى في القرآن؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "25", correct: true },
    { text: "30", correct: false },
    { text: "20", correct: false },
    { text: "18", correct: false }
  ]
},

{
  question: "ما السورة التي تسمى المنجية من عذاب القبر؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "الملك", correct: true },
    { text: "يس", correct: false },
    { text: "الرحمن", correct: false },
    { text: "الواقعة", correct: false }
  ]
},

{
  question: "كم عدد الملائكة الذين حملوا عرش الله يوم القيامة؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "ثمانية", correct: true },
    { text: "أربعة", correct: false },
    { text: "سبعة", correct: false },
    { text: "اثنا عشر", correct: false }
  ]
},

{
  question: "ما اسم السورة التي تسمى بني إسرائيل؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "الإسراء", correct: true },
    { text: "الكهف", correct: false },
    { text: "يوسف", correct: false },
    { text: "النحل", correct: false }
  ]
},

{
  question: "كم مرة ذكر اسم مريم في القرآن؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "34", correct: true },
    { text: "30", correct: false },
    { text: "25", correct: false },
    { text: "40", correct: false }
  ]
},

{
  question: "ما السورة التي بدأت باسم ثمرتين؟",
  basePoints: 10,
  difficulty: "easy",
  answers: [
    { text: "التين", correct: true },
    { text: "الأنعام", correct: false },
    { text: "النحل", correct: false },
    { text: "الفيل", correct: false }
  ]
},

{
  question: "ما اسم الملك الموكل بالنفخ في الصور؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "إسرافيل", correct: true },
    { text: "جبريل", correct: false },
    { text: "ميكائيل", correct: false },
    { text: "مالك", correct: false }
  ]
},

{
  question: "كم عدد الملائكة الموكلين بالنار؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "19", correct: true },
    { text: "18", correct: false },
    { text: "20", correct: false },
    { text: "25", correct: false }
  ]
},

{
  question: "في أي غزوة استشهد حمزة بن عبد المطلب؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "غزوة أحد", correct: true },
    { text: "غزوة بدر", correct: false },
    { text: "غزوة الخندق", correct: false },
    { text: "غزوة حنين", correct: false }
  ]
},

{
  question: "من هو الصحابي الذي نام في فراش النبي ليلة الهجرة؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "علي بن أبي طالب", correct: true },
    { text: "أبو بكر الصديق", correct: false },
    { text: "عمر بن الخطاب", correct: false },
    { text: "الزبير بن العوام", correct: false }
  ]
},

{
  question: "ما هي السورة التي تسمى عروس القرآن؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "الرحمن", correct: true },
    { text: "يس", correct: false },
    { text: "الواقعة", correct: false },
    { text: "الملك", correct: false }
  ]
},

{
  question: "كم عدد الغزوات التي قادها النبي ﷺ بنفسه؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "27", correct: true },
    { text: "25", correct: false },
    { text: "30", correct: false },
    { text: "19", correct: false }
  ]
},

{
  question: "من هو النبي الذي سخر الله له الرياح؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "سليمان عليه السلام", correct: true },
    { text: "داود عليه السلام", correct: false },
    { text: "موسى عليه السلام", correct: false },
    { text: "إبراهيم عليه السلام", correct: false }
  ]
},

{
  question: "كم عدد أبواب الجنة؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "8", correct: true },
    { text: "7", correct: false },
    { text: "6", correct: false },
    { text: "9", correct: false }
  ]
},

{
  question: "كم عدد أبواب النار؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "7", correct: true },
    { text: "8", correct: false },
    { text: "6", correct: false },
    { text: "9", correct: false }
  ]
},
{
  question: "كم كان عمر النبي ﷺ عند وفاته؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "63 سنة", correct: true },
    { text: "60 سنة", correct: false },
    { text: "65 سنة", correct: false },
    { text: "70 سنة", correct: false }
  ]
},

{
  question: "من هو أول مؤذن في الإسلام؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "بلال بن رباح", correct: true },
    { text: "عبد الله بن أم مكتوم", correct: false },
    { text: "أبو موسى الأشعري", correct: false },
    { text: "سعد بن أبي وقاص", correct: false }
  ]
},

{
  question: "كم مرة حج النبي ﷺ بعد الهجرة؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "مرة واحدة", correct: true },
    { text: "مرتين", correct: false },
    { text: "ثلاث مرات", correct: false },
    { text: "لم يحج", correct: false }
  ]
},

{
  question: "ما اسم الناقة التي كانت للنبي ﷺ؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "القصواء", correct: true },
    { text: "العنقاء", correct: false },
    { text: "العضباء", correct: false },
    { text: "البرقاء", correct: false }
  ]
},

{
  question: "من هو الصحابي الذي تستحي منه الملائكة؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "عثمان بن عفان", correct: true },
    { text: "علي بن أبي طالب", correct: false },
    { text: "عمر بن الخطاب", correct: false },
    { text: "طلحة بن عبيد الله", correct: false }
  ]
},
{
  question: "ما اسم السورة التي تسمى الفاضحة لأنها فضحت المنافقين؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "التوبة", correct: true },
    { text: "المنافقون", correct: false },
    { text: "الحشر", correct: false },
    { text: "الفتح", correct: false }
  ]
},
{
  question: "ما أول معركة في الإسلام؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "غزوة بدر", correct: true },
    { text: "غزوة أحد", correct: false },
    { text: "غزوة الخندق", correct: false },
    { text: "غزوة تبوك", correct: false }
  ]
},

{
  question: "من هو النبي الذي لقب بخليل الله؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "إبراهيم عليه السلام", correct: true },
    { text: "موسى عليه السلام", correct: false },
    { text: "نوح عليه السلام", correct: false },
    { text: "داود عليه السلام", correct: false }
  ]
},

{
  question: "ما اسم السورة التي تعدل ثلث القرآن؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "الإخلاص", correct: true },
    { text: "الفلق", correct: false },
    { text: "الناس", correct: false },
    { text: "الكافرون", correct: false }
  ]
},

{
  question: "كم سنة استمرت خلافة عمر بن الخطاب؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "10 سنوات", correct: true },
    { text: "8 سنوات", correct: false },
    { text: "12 سنة", correct: false },
    { text: "15 سنة", correct: false }
  ]
},
{
  question: "ما اسم زوجة فرعون التي آمنت بموسى؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "آسية بنت مزاحم", correct: true },
    { text: "مارية القبطية", correct: false },
    { text: "هاجر", correct: false },
    { text: "صفورة", correct: false }
  ]
},

{
  question: "ما اسم السورة التي بدأت وانتهت بالتسبيح؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "الحشر", correct: true },
    { text: "الحديد", correct: false },
    { text: "الصف", correct: false },
    { text: "الجمعة", correct: false }
  ]
},

{
  question: "من هو أول نبي كتب بالقلم؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "إدريس عليه السلام", correct: true },
    { text: "نوح عليه السلام", correct: false },
    { text: "إبراهيم عليه السلام", correct: false },
    { text: "يوسف عليه السلام", correct: false }
  ]
},
{
  question: "كم عدد السجدات في القرآن الكريم؟",
  basePoints: 10,
  difficulty: "Easy",
  answers: [
    { text: "15", correct: true },
    { text: "13", correct: false },
    { text: "17", correct: false },
    { text: "11", correct: false }
  ]
},

{
  question: "ما اسم والد النبي محمد ﷺ؟",
  basePoints: 10,
  difficulty: "Easy",
  answers: [
    { text: "عبد الله", correct: true },
    { text: "عبد المطلب", correct: false },
    { text: "أبو طالب", correct: false },
    { text: "العباس", correct: false }
  ]
},

{
  question: "في أي شهر فرض صيام رمضان؟",
  basePoints: 10,
  difficulty: "Easy",
  answers: [
    { text: "شعبان", correct: true },
    { text: "رمضان", correct: false },
    { text: "رجب", correct: false },
    { text: "محرم", correct: false }
  ]
},
{
  question: "كم استمرت دعوة النبي ﷺ في مكة؟",
  basePoints: 20,
  difficulty: "Medium",
  answers: [
    { text: "13 سنة", correct: true },
    { text: "10 سنوات", correct: false },
    { text: "15 سنة", correct: false },
    { text: "20 سنة", correct: false }
  ]
},
{
  question: "كم عدد السنوات التي نامها أصحاب الكهف؟",
  basePoints: 20,
  difficulty: "Hard",
  answers: [
    { text: "309 سنوات", correct: true },
    { text: "300 سنة", correct: false },
    { text: "250 سنة", correct: false },
    { text: "150 سنة", correct: false }
  ]
},
{
  question: "كم عدد المرات التي ذكر فيها اسم النبي محمد ﷺ في القرآن؟",
  basePoints: 30,
  difficulty: "Insane",
  answers: [
    { text: "4", correct: true },
    { text: "5", correct: false },
    { text: "6", correct: false },
    { text: "7", correct: false }
  ]
}
],
    
  5:[
  {
    question: "في أنمي ناروتو، ما اسم القرية المخفية التي ينتمي إليها ناروتو؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "كونوها", correct: true },
      { text: "سونا", correct: false },
      { text: "كيرا", correct: false },
      { text: "أكاتسوكي", correct: false }
    ]
  },
  {
    question: "في أنمي هجوم العمالقة، من هو قائد فرقة الاستطلاع؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "إرين", correct: false },
      { text: "ايروين", correct: true },
      { text: "هانجي", correct: false },
      { text: "ريتز", correct: false }
    ]
  },
  {
    question: "في ون بيس، ما اسم فاكهة لوفي الشيطانية؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "ميرا ميرا نو مي", correct: false },
      { text: "هيتو هيتو نو مي", correct: false },
      { text: "أوبي أوب نو مي", correct: false },
      { text: "جومو جومو نو مي", correct: true }
    ]
  },
  {
    question: "في دراغون بول، ما اسم التقنية التي يستخدمها غوكو لتقوية قوته مؤقتًا؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "كايوجين", correct: false },
      { text: "غينبو", correct: false },
      { text: "كايوكين", correct: true },
      { text: "جيندو", correct: false }
    ]
  },
  {
    question: "في أنمي بليتش، ما اسم السيف الخاص بإيتشيغو؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "زانغيتسو", correct: true },
      { text: "غينتسو", correct: false },
      { text: "كينشي", correct: false },
      { text: "شوسوي", correct: false }
    ]
  },
  {
    question: "في هانتر × هانتر، ما نوع النين الخاصة بجون؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "متخصص", correct: false },
      { text: "متحكم", correct: false },
      { text: "معزز", correct: true },
      { text: "متجسد", correct: false }
    ]
  },
  {
    question: "في ون بيس، ما اسم الجزيرة التي وُلد عليها مونكي دي لوفي؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "جزيرة الفاكهة", correct: false },
      { text: "جزيرة فوجوآ", correct: false },
      { text: "جزيرة غويندورا", correct: false },
      { text: "جزيرة فوشا", correct: true }
    ]
  },
  {
    question: "في أنمي أكاديميا بطلي، ما اسم الشخصية التي لديه قوة التفجير؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "إيزيكورا", correct: false },
      { text: "باكوجو", correct: true },
      { text: "ميودورا", correct: false },
      { text: "تودوروكي", correct: false }
    ]
  },
  {
    question: "في أنمي ون بيس، من هو ملك القراصنة السابق؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "شانكس", correct: false },
      { text: "دوفي", correct: false },
      { text: "كايدو", correct: false },
      { text: "روجر", correct: true }
    ]
  },
  {
    question: "في دراغون بول، مَن مِن هؤلاء أول شخص يستعمل تحول سوبر سايان الحاكم؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "غوكو", correct: true },
      { text: "فيجيتا", correct: false },
      { text: "جوهان", correct: false },
      { text: "برولي", correct: false }
    ]
  },
  {
    question: "في أنمي ناروتو، ما اسم الفريق الذي كان يتألف من ناروتو وساسكي وساكورا؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "الفريق العاشر", correct: false },
      { text: "فريق هاتاكي", correct: false },
      { text: "الفريق السابع", correct: true },
      { text: "فريق كاكاشي", correct: false }
    ]
  },
  {
    question: "في هجوم العمالقة، ما اسم العمالقة الذين يستطيعون التحكم بهم البشر؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "العمالقة المصلّحين", correct: false },
      { text: "العمالقة المتحولون", correct: true },
      { text: "العمالقة الأحرار", correct: false },
      { text: "العمالقة الضخمة", correct: false }
    ]
  },
  {
    question: "في بلاك كلوفر، ما اسم الفصيلة التي ينتمي إليها أستا؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "فصيلة الفتاة السوداء", correct: false },
      { text: "فرقة الثيران السوداء", correct: true },
      { text: "فصيلة الفرسان الذهبية", correct: false },
      { text: "فصيلة الطيف", correct: false }
    ]
  },
  {
    question: "في بليتش، من هو قائد فرقة 13؟",
    basePoints: 20,
    difficulty: "Hard",
    answers: [
      { text: "أوكيتاكي", correct: true },
      { text: "إيتشيغو", correct: false },
      { text: "كينشي", correct: false },
      { text: "غينجو", correct: false }
    ]
  },
  {
    question: "في دراغون بول، ما اسم والد غوكو البيولوجي؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "بارادوك", correct: true },
      { text: "راديتز", correct: false },
      { text: "بيكولو", correct: false },
      { text: "كيامو", correct: false }
    ]
  },
  {
    question: "في أنمي أكاديميا بطلي، ما اسم الطالب الذي يستطيع التحكم بالنار والجليد؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "ميدوريا", correct: false },
      { text: "أولوما", correct: false },
      { text: "كيورا", correct: false },
      { text: "تودوروكي", correct: true }
    ]
  },
  {
    question: "في هانتر × هانتر، ما اسم صديق كورابيكا المقرب؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "ليون", correct: false },
      { text: "كونيغا", correct: false },
      { text: "هيسوكا", correct: false },
      { text: "ليوريو", correct: true }
    ]
  },
  {
    question: "في أنمي ديث نوت، ما اسم المحقق الذي يحاول القبض على كيرا؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "إل", correct: true },
      { text: "ميتسو", correct: false },
      { text: "ريو", correct: false },
      { text: "لايت", correct: false }
    ]
  },
  {
    question: "في أنمي ون بيس، من هو أقوى رجل في العالم؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "كايدو", correct: true },
      { text: "لوفي", correct: false },
      { text: "دوفي", correct: false },
      { text: "شانكس", correct: false }
    ]
  },
  {
    question: "في هجوم العمالقة، من هو العملاق الذي ابتلع والدة إرين؟",
    basePoints: 30,
    difficulty: "insane",
    answers: [
      { text: "العملاق المبتسم ", correct: true },
      { text: "العملاق المصلح", correct: false },
      { text: "العملاق المبتلع", correct: false },
      { text: "العملاق القوي", correct: false }
    ]
  },
{
question: "في ناروتو، ما اسم العين الخاصة بساسكي؟",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "الرينغان", correct: false },
{ text: "البياغوغان", correct: false },
{ text: "الشارينغان", correct: true },
{ text: "التينسيغان", correct: false }
]
},

{
question: "في ون بيس، من هو نائب قائد طاقم قبعة القش؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "سانجي", correct: false },
{ text: "زورو", correct: true },
{ text: "نامي", correct: false },
{ text: "أوسوب", correct: false }
]
},

{
question: "في دراغون بول، ما اسم كوكب السايان؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "كوكب فيجيتا", correct: true },
{ text: "كوكب ناميك", correct: false },
{ text: "كوكب الأرض", correct: false },
{ text: "كوكب كايو", correct: false }
]
},

{
question: "في ديث نوت، ما اسم الشينيغامي الخاص بلايت؟",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "ريوك", correct: true },
{ text: "ريم", correct: false },
{ text: "سيدو", correct: false },
{ text: "جيلوس", correct: false }
]
},

{
question: "في هجوم العمالقة، ما اسم العملاق المدرع؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "راينر", correct: true },
{ text: "بيرتهولد", correct: false },
{ text: "آني", correct: false },
{ text: "زيك", correct: false }
]
},

{
question: "في بليتش، ما اسم قائد فرقة 6؟",
difficulty: "hard",
basePoints: 20,
answers: [
{ text: "كوتشيكي", correct: true },
{ text: "كينباتشي", correct: false },
{ text: "تووشيرو", correct: false },
{ text: "آيزن", correct: false }
]
},

{
question: "في هانتر × هانتر، ما اسم زعيم العناكب؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "كرولو", correct: true },
{ text: "هيسوكا", correct: false },
{ text: "إيلومي", correct: false },
{ text: "جون", correct: false }
]
},

{
question: "في ون بيس، ما اسم سيف زورو الأسطوري؟",
difficulty: "insane",
basePoints: 30,
answers: [
{ text: "إنما", correct: true },
{ text: "شوسوي", correct: false },
{ text: "سانداي كيتتسو", correct: false },
{ text: "إيتشي مونجي", correct: false }
]
},

{
question: "في ناروتو، من هو الهوكاجي الرابع؟",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "ميناتو", correct: true },
{ text: "تسونادي", correct: false },
{ text: "هيروزن", correct: false },
{ text: "كاكاشي", correct: false }
]
},

{
question: "في أكاديمية بطلي، ما اسم البطل رقم 1 قبل أول مايت؟",
difficulty: "insane",
basePoints: 30,
answers: [
{ text: "إنديفر", correct: false },
{ text: "أول مايت", correct: false },
{ text: "نانا شيمورا", correct: true },
{ text: "هوكس", correct: false }
]
},
{
question: "في ناروتو، من هو زعيم منظمة الأكاتسوكي الحقيقي؟",
difficulty: "hard",
basePoints: 20,
answers: [
{ text: "أوبيتو", correct: true },
{ text: "ناغاتو", correct: false },
{ text: "إيتاتشي", correct: false },
{ text: "مادارا", correct: false }
]
},

{
question: "في ون بيس، ما اسم البحرية التي يحملها سموكر؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "موكو موكو نو مي", correct: true },
{ text: "ميرا ميرا نو مي", correct: false },
{ text: "غورو غورو نو مي", correct: false },
{ text: "سونا سونا نو مي", correct: false }
]
},

{
question: "في دراغون بول سوبر، ما اسم حاكم الدمار",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "بيروس", correct: true },
{ text: "ويس", correct: false },
{ text: "زينو", correct: false },
{ text: "كايوا", correct: false }
]
},

{
question: "في بليتش، من هو الخصم الرئيسي في أرك أرانكار؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "آيزن", correct: true },
{ text: "يوها باخ", correct: false },
{ text: "غينجو", correct: false },
{ text: "كينباتشي", correct: false }
]
},

{
question: "في هجوم العمالقة، من هو صاحب العملاق الوحش؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "زيك", correct: true },
{ text: "راينر", correct: false },
{ text: "بيرتهولد", correct: false },
{ text: "آني", correct: false }
]
},

{
question: "في هانتر × هانتر، ما اسم قدرة كورابيكا الخاصة بسلسلته؟",
difficulty: "insane",
basePoints: 30,
answers: [
{ text: "إمبراطور تايم", correct: true },
{ text: "باندِت سيكريت", correct: false },
{ text: "جاجانكن", correct: false },
{ text: "بونغو بونغو", correct: false }
]
},

{
question: "في ون بيس، من هو أول فرد انضم لطاقم لوفي؟",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "زورو", correct: true },
{ text: "نامي", correct: false },
{ text: "سانجي", correct: false },
{ text: "أوسوب", correct: false }
]
},

{
question: "في ناروتو شيبودن، من قتل إيتاتشي؟",
difficulty: "hard",
basePoints: 20,
answers: [
{ text: "ساسكي", correct: true },
{ text: "ناروتو", correct: false },
{ text: "دانزو", correct: false },
{ text: "أوبيتو", correct: false }
]
},

{
question: "في دراغون بول، من هو أقوى اندرويد في أرك سيل؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "سيل", correct: true },
{ text: "أندرويد 18", correct: false },
{ text: "أندرويد 17", correct: false },
{ text: "دكتور جيرو", correct: false }
]
},

{
question: "في ديث نوت، من تولى التحقيق بعد موت إل؟",
difficulty: "hard",
basePoints: 20,
answers: [
{ text: "نير", correct: true },
{ text: "ميلو", correct: false },
{ text: "لايت", correct: false },
{ text: "ماتسودا", correct: false }
]
},

{
question: "في بلاك كلوفر، ما نوع سحر يونو؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "سحر الرياح", correct: true },
{ text: "سحر النار", correct: false },
{ text: "سحر الظلام", correct: false },
{ text: "سحر الحديد", correct: false }
]
},

{
question: "في هجوم العمالقة، من قتل العملاق المدرع في النهاية؟",
difficulty: "insane",
basePoints: 30,
answers: [
{ text: "لم يُقتل", correct: true },
{ text: "إرين", correct: false },
{ text: "ميكاسا", correct: false },
{ text: "ليفاي", correct: false }
]
},

{
question: "في بليتش، ما اسم بنكاي بياكويا؟",
difficulty: "insane",
basePoints: 30,
answers: [
{ text: "سينبونزاكورا كاغيوشي", correct: true },
{ text: "تينسا زانغيتسو", correct: false },
{ text: "دايغورين هيورينمارو", correct: false },
{ text: "ريوجين جاكا", correct: false }
]
},

{
question: "في ون بيس، من هو والد إيس؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "غول دي روجر", correct: true },
{ text: "اللحية البيضاء", correct: false },
{ text: "دراجون", correct: false },
{ text: "غارب", correct: false }
]
},

{
question: "في ناروتو، من هو أول أوتشيها استيقظ المانغيكيو؟",
difficulty: "insane",
basePoints: 30,
answers: [
{ text: "مادارا", correct: true },
{ text: "إيتاتشي", correct: false },
{ text: "ساسكي", correct: false },
{ text: "شيسوي", correct: false }
]
},

{
question: "في دراغون بول سوبر، ما اسم بطولة الأكوان؟",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "بطولة القوة", correct: true },
{ text: "بطولة زينو", correct: false },
{ text: "بطولة الدمار", correct: false },
{ text: "بطولة الملوك", correct: false }
]
},

{
question: "في ديمون سلاير، ما اسم تنفس تانجيرو؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "تنفس الماء", correct: true },
{ text: "تنفس النار", correct: false },
{ text: "تنفس الرعد", correct: false },
{ text: "تنفس الحجر", correct: false }
]
},

{
question: "في جوجوتسو كايسن، ما اسم المعلم الأقوى؟",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "ساتورو", correct: true },
{ text: "سوكونا", correct: false },
{ text: "ميغومي", correct: false },
{ text: "يوتا", correct: false }
]
},

{
question: "في ون بيس، ما اسم سيف ميهوك؟",
difficulty: "hard",
basePoints: 20,
answers: [
{ text: "يورُو", correct: true },
{ text: "إنما", correct: false },
{ text: "شوسوي", correct: false },
{ text: "وادي إيتشي مونجي", correct: false }
]
},

{
question: "في ناروتو، من هو الهوكاجي الثالث؟",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "ساروتوبي", correct: true },
{ text: "تسونادي", correct: false },
{ text: "ميناتو", correct: false },
{ text: "كاكاشي", correct: false }
]
},

{
question: "في هجوم العمالقة، من قتل زيك؟",
difficulty: "hard",
basePoints: 20,
answers: [
{ text: "ليفاي", correct: true },
{ text: "إرين", correct: false },
{ text: "آرمين", correct: false },
{ text: "ميكاسا", correct: false }
]
},

{
question: "في بليتش، من هو قائد فرقة 11؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "زاراكي", correct: true },
{ text: "بياكويا", correct: false },
{ text: "آيزن", correct: false },
{ text: "تووشيرو", correct: false }
]
},

{
question: "في ون بيس، ما اسم جيش دراغون؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "الجيش الثوري", correct: true },
{ text: "القراصنة السود", correct: false },
{ text: "البحرية الخاصة", correct: false },
{ text: "أسطول الإمبراطور", correct: false }
]
},

{
question: "في هانتر × هانتر، من قتل هيسوكا (المرة الأولى)؟",
difficulty: "insane",
basePoints: 30,
answers: [
{ text: "كرولو", correct: true },
{ text: "جون", correct: false },
{ text: "إيلومي", correct: false },
{ text: "كورابيكا", correct: false }
]
},

{
question: "في دراغون بول، ما اسم اندماج غوكو وفيجيتا باستخدام البوتارا؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "فيجيتو", correct: true },
{ text: "غوجيتا", correct: false },
{ text: "غوكيتا", correct: false },
{ text: "فيجوكو", correct: false }
]
},

{
question: "في ناروتو، من قتل جيرايا؟",
difficulty: "hard",
basePoints: 20,
answers: [
{ text: "باين", correct: true },
{ text: "أوروتشيمارو", correct: false },
{ text: "إيتاتشي", correct: false },
{ text: "دانزو", correct: false }
]
},

{
question: "في ون بيس، من هزم كايدو؟",
difficulty: "medium",
basePoints: 20,
answers: [
{ text: "لوفي", correct: true },
{ text: "زورو", correct: false },
{ text: "شانكس", correct: false },
{ text: "اللحية البيضاء", correct: false }
]
},

{
question: "في جوجوتسو كايسن، من هو ملك اللعنات؟",
difficulty: "easy",
basePoints: 10,
answers: [
{ text: "سوكونا", correct: true },
{ text: "غوجو", correct: false },
{ text: "جيغين", correct: false },
{ text: "توغي", correct: false }
]
},

{
question: "في ديمون سلاير، من هو أقوى هاشيرا؟",
difficulty: "insane",
basePoints: 30,
answers: [
{ text: "غيومي", correct: true },
{ text: "رينغوكو", correct: false },
{ text: "توكيـتو", correct: false },
{ text: "شينوبو", correct: false }
]
},

{
question: "في بليتش، من هزم آيزن؟",
difficulty: "hard",
basePoints: 20,
answers: [
{ text: "إيتشيغو", correct: true },
{ text: "بياكويا", correct: false },
{ text: "كينباتشي", correct: false },
{ text: "يوها باخ", correct: false }
]
}
],

  6:[
  {
    question: "ما الشيء الذي كلما أخذت منه يكبر؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الحفرة", correct: true },
      { text: "الوقت", correct: false },
      { text: "العمر", correct: false },
      { text: "الظل", correct: false }
    ]
  },
  {
    question: "ما الشيء الذي يمشي بلا أرجل؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "السيارة", correct: false },
      { text: "القطار", correct: false },
      { text: "الطائرة", correct: false },
      { text: "الساعة", correct: true }
    ]
  },
  {
    question: "له أوراق وليس شجرة، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الكتاب", correct: true },
      { text: "النبات", correct: false },
      { text: "الورقة النقدية", correct: false },
      { text: "الصندوق", correct: false }
    ]
  },
  {
    question: "ما هو الشيء الذي كلما جف زاد وزنه؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الإسفنج", correct: true },
      { text: "الحطب", correct: false },
      { text: "الماء", correct: false },
      { text: "الرمل", correct: false }
    ]
  },
  {
    question: "شيء تستطيع أن تكسره دون لمسه، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الوعد", correct: true },
      { text: "الزجاج", correct: false },
      { text: "العظم", correct: false },
      { text: "القلب", correct: false }
    ]
  },
  {
    question: "له أسنان ولا يعض، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "المشط", correct: true },
      { text: "الفرشاة", correct: false },
      { text: "السكين", correct: false },
      { text: "الموس", correct: false }
    ]
  },
  {
    question: "يمشي بلا أرجل، ويصرخ بلا صوت، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الريح", correct: true },
      { text: "المطر", correct: false },
      { text: "الساعة", correct: false },
      { text: "النهر", correct: false }
    ]
  },
  {
    question: "شيء لا يؤكل ولا يشرب لكن يمكن أن يموت، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الشمع", correct: true },
      { text: "النار", correct: false },
      { text: "النبات", correct: false },
      { text: "الحجر", correct: false }
    ]
  },
  {
    question: "ما الشيء الذي يسمع بلا أذن ويتكلم بلا لسان؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الهاتف", correct: true },
      { text: "الراديو", correct: false },
      { text: "التلفاز", correct: false },
      { text: "الصدى", correct: false }
    ]
  },
  {
    question: "ما هو الشيء الذي يكتب ولا يقرأ؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "القلم", correct: true },
      { text: "الورقة", correct: false },
      { text: "الآلة الكاتبة", correct: false },
      { text: "الكمبيوتر", correct: false }
    ]
  },

  {
    question: "شيء ليس حياً، لكنه ينمو، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "البلورة", correct: true },
      { text: "النبات", correct: false },
      { text: "الجبن", correct: false },
      { text: "العفن", correct: false }
    ]
  },
  {
    question: "له مفتاح لكنه لا يفتح باباً، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "البيانو", correct: true },
      { text: "السيارة", correct: false },
      { text: "الخزانة", correct: false },
      { text: "الكمبيوتر", correct: false }
    ]
  },
  {
    question: "شيء كلما زاد نقص، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "العمر", correct: true },
      { text: "الوزن", correct: false },
      { text: "الماء", correct: false },
      { text: "المال", correct: false }
    ]
  },
  {
    question: "له عين ولا يرى، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الإبرة", correct: true },
      { text: "العاصفة", correct: false },
      { text: "البصلة", correct: false },
      { text: "الزر", correct: false }
    ]
  },
  {
    question: "شيء يوجد أمامك دائماً، لكن لا تراه، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "المستقبل", correct: true },
      { text: "الحاضر", correct: false },
      { text: "الهواء", correct: false },
      { text: "الظل", correct: false }
    ]
  },
  {
    question: "ما الشيء الذي يأكل ولا يشبع؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "النار", correct: true },
      { text: "الماء", correct: false },
      { text: "الحريق", correct: false },
      { text: "الرمل", correct: false }
    ]
  },
  {
    question: "ما الشيء الذي يُكسر بمجرد ذكر اسمه؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الصمت", correct: true },
      { text: "الزجاج", correct: false },
      { text: "الخشب", correct: false },
      { text: "السكينة", correct: false }
    ]
  },
  {
    question: "شيء يسير بلا رجلين، ويبكي بلا عيون، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "السحاب", correct: true },
      { text: "النهر", correct: false },
      { text: "الريح", correct: false },
      { text: "المطر", correct: false }
    ]
  },
  {
    question: "ما هو الشيء الذي يجري ولكن لا يمشي؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الماء", correct: true },
      { text: "الدم", correct: false },
      { text: "الزمن", correct: false },
      { text: "الريح", correct: false }
    ]
  },
  {
    question: "شيء يمكنه الطيران بلا جناح، ما هو؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "الوقت", correct: true },
      { text: "الريح", correct: false },
      { text: "الظل", correct: false },
      { text: "الطائرة", correct: false }
    ]
  },
{
  question: "ما الشيء الذي إذا وضعته في الثلاجة لا يبرد؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الفلفل الحار", correct: true },
    { text: "الماء", correct: false },
    { text: "العصير", correct: false },
    { text: "اللبن", correct: false }
  ]
},
{
  question: "ما الشيء الذي إذا قطعته بكى؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "البصل", correct: true },
    { text: "التفاح", correct: false },
    { text: "الخبز", correct: false },
    { text: "الليمون", correct: false }
  ]
},
{
  question: "شيء إذا دخل الماء لم يبتل، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "الظل", correct: true },
    { text: "الخشب", correct: false },
    { text: "القماش", correct: false },
    { text: "الرمل", correct: false }
  ]
},
{
  question: "ما الشيء الذي كلما زاد اتساعًا قلّ وزنًا؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "البالون", correct: true },
    { text: "الحقيبة", correct: false },
    { text: "الصندوق", correct: false },
    { text: "الكرة", correct: false }
  ]
},
{
  question: "ما هو الشيء الذي يعيش إذا أطعمته ويموت إذا سقيته؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "النار", correct: true },
    { text: "النبات", correct: false },
    { text: "الإنسان", correct: false },
    { text: "السمك", correct: false }
  ]
},
{
  question: "شيء يولد كبيرًا ويموت صغيرًا، ما هو؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الشمعة", correct: true },
    { text: "الشجرة", correct: false },
    { text: "الجبل", correct: false },
    { text: "القمر", correct: false }
  ]
},
{
  question: "ما الشيء الذي إذا قلبته زاد؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "الرقم 6", correct: true },
    { text: "الرقم 3", correct: false },
    { text: "الرقم 5", correct: false },
    { text: "الرقم 9", correct: false }
  ]
},
{
  question: "له رأس ولا عين له، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "الدبوس", correct: true },
    { text: "الإنسان", correct: false },
    { text: "السمكة", correct: false },
    { text: "التمثال", correct: false }
  ]
},
{
  question: "شيء إذا أخذت منه يختفي، ما هو؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "الصورة الفوتوغرافية", correct: false },
    { text: "السر", correct: false },
    { text: "الحفرة", correct: true },
    { text: "النور", correct: false }
  ]
},
{
  question: "ما الشيء الذي لا يمكن كسره؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الابتسامة", correct: true },
    { text: "الزجاج", correct: false },
    { text: "الحديد", correct: false },
    { text: "الحجر", correct: false }
  ]
},

{
  question: "شيء تراه في الليل ثلاث مرات وفي النهار مرة واحدة، ما هو؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "حرف اللام", correct: true },
    { text: "القمر", correct: false },
    { text: "النجوم", correct: false },
    { text: "الظل", correct: false }
  ]
},
{
  question: "ما الشيء الذي يمشي ويقف وليس له أرجل؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الساعة", correct: true },
    { text: "السيارة", correct: false },
    { text: "الإنسان", correct: false },
    { text: "الكلب", correct: false }
  ]
},
{
  question: "له رقبة بلا رأس، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "الزجاجة", correct: true },
    { text: "الإنسان", correct: false },
    { text: "القلم", correct: false },
    { text: "التمثال", correct: false }
  ]
},
{
  question: "شيء تملكه ولكن يستخدمه الآخرون أكثر منك، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "اسمك", correct: true },
    { text: "مالك", correct: false },
    { text: "هاتفك", correct: false },
    { text: "ملابسك", correct: false }
  ]
},
{
  question: "ما الشيء الذي يكتب ولا يرى؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الحبر", correct: true },
    { text: "القلم", correct: false },
    { text: "الورقة", correct: false },
    { text: "الطابعة", correct: false }
  ]
},

{
  question: "شيء لا يمشي إلا بالضرب، ما هو؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "المسمار", correct: true },
    { text: "السيارة", correct: false },
    { text: "الحصان", correct: false },
    { text: "الكرة", correct: false }
  ]
},
{
  question: "ما الشيء الذي يزداد كلما أخذت منه؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الحفرة", correct: true },
    { text: "المال", correct: false },
    { text: "الوقت", correct: false },
    { text: "الرمل", correct: false }
  ]
},
{
  question: "له أجنحة ولا يطير، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "المروحة", correct: true },
    { text: "الطائر", correct: false },
    { text: "الطائرة", correct: false },
    { text: "الفراشة", correct: false }
  ]
},
{
  question: "ما الشيء الذي ينام ولا يغلق عينيه؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "السمك", correct: true },
    { text: "الإنسان", correct: false },
    { text: "القط", correct: false },
    { text: "الكلب", correct: false }
  ]
},
{
  question: "شيء كلما اقتربت منه ابتعد، ما هو؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "الأفق", correct: true },
    { text: "الظل", correct: false },
    { text: "الشمس", correct: false },
    { text: "الضوء", correct: false }
  ]
},
{
  question: "شيء إذا نظفتَه أصبح أسود، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "السبورة", correct: true },
    { text: "المرآة", correct: false },
    { text: "النافذة", correct: false },
    { text: "الطبق", correct: false }
  ]
},
{
  question: "ما الشيء الذي يدور حول نفسه باستمرار ولا يدوخ؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الأرض", correct: true },
    { text: "الإنسان", correct: false },
    { text: "العجلة", correct: false },
    { text: "المروحة", correct: false }
  ]
},
{
  question: "شيء له قلب ولا ينبض، ما هو؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الخس", correct: true },
    { text: "الإنسان", correct: false },
    { text: "الحجر", correct: false },
    { text: "الشجرة", correct: false }
  ]
},
{
  question: "ما الشيء الذي إذا دخلته عميت؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "الظلام", correct: true },
    { text: "الغرفة", correct: false },
    { text: "النفق", correct: false },
    { text: "الكهف", correct: false }
  ]
},
{
  question: "شيء موجود في السماء وإذا أضفت له حرفًا أصبح في الأرض، ما هو؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "نجم → منجم", correct: true },
    { text: "قمر → قمره", correct: false },
    { text: "شمس → شمسه", correct: false },
    { text: "سحاب → سحابه", correct: false }
  ]
},
{
  question: "ما الشيء الذي كلما ضغطت عليه صرخ؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الجرس", correct: true },
    { text: "الوسادة", correct: false },
    { text: "الكتاب", correct: false },
    { text: "الزر", correct: false }
  ]
},
{
  question: "شيء يحمل طعامه فوق رأسه، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "النخلة", correct: true },
    { text: "الجمل", correct: false },
    { text: "الإنسان", correct: false },
    { text: "الشجرة", correct: false }
  ]
},
{
  question: "ما الشيء الذي كلما طال قصر؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الشمعة", correct: true },
    { text: "الحبل", correct: false },
    { text: "الطريق", correct: false },
    { text: "القلم", correct: false }
  ]
},
{
  question: "شيء إذا أكلته كاملًا تستفيد، وإذا أكلت نصفه تموت، ما هو؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "السمسم (حبة السمسم)", correct: false },
    { text: "السمكة السامة", correct: false },
    { text: "السم", correct: false },
    { text: "الدواء", correct: true }
  ]
},
{
  question: "ما الشيء الذي إذا فقدتَه لا يمكنك استرجاعه؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الوقت", correct: true },
    { text: "المال", correct: false },
    { text: "الهاتف", correct: false },
    { text: "الكتاب", correct: false }
  ]
},
{
  question: "شيء يمر خلال الزجاج دون أن يكسره، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "الضوء", correct: true },
    { text: "الماء", correct: false },
    { text: "الحجر", correct: false },
    { text: "الهواء", correct: false }
  ]
},
{
  question: "ما الشيء الذي كلما أخذت منه نقص؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "العمر", correct: true },
    { text: "الحفرة", correct: false },
    { text: "الرمل", correct: false },
    { text: "الماء", correct: false }
  ]
},
{
  question: "شيء لا يدخل إلا إذا ضربته، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "المسمار", correct: true },
    { text: "الكرة", correct: false },
    { text: "المفتاح", correct: false },
    { text: "الهواء", correct: false }
  ]
},
{
  question: "ما الشيء الذي يتكلم جميع لغات العالم؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "الصدى", correct: true },
    { text: "الإنترنت", correct: false },
    { text: "المترجم", correct: false },
    { text: "الراديو", correct: false }
  ]
},
{
  question: "شيء لا يمكن رؤيته لكنه يملأ المكان، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "الهواء", correct: true },
    { text: "النور", correct: false },
    { text: "الظل", correct: false },
    { text: "الماء", correct: false }
  ]
},
{
  question: "ما الشيء الذي يكتب اسمه ولا يقرأه؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "القلم", correct: true },
    { text: "الكاتب", correct: false },
    { text: "الطالب", correct: false },
    { text: "المعلم", correct: false }
  ]
},
{
  question: "شيء إذا زاد نقص، ما هو؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "العمر", correct: true },
    { text: "المال", correct: false },
    { text: "الطعام", correct: false },
    { text: "الماء", correct: false }
  ]
},
{
  question: "ما الشيء الذي يولد مرة ويموت مرة؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الإنسان", correct: true },
    { text: "القمر", correct: false },
    { text: "النبات", correct: false },
    { text: "الشمس", correct: false }
  ]
},
{
  question: "شيء إذا وضعتَه في الماء لا يبتل، ما هو؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "الظل", correct: true },
    { text: "القماش", correct: false },
    { text: "الخشب", correct: false },
    { text: "الورق", correct: false }
  ]
},
{
  question: "ما الشيء الذي لا يبتل حتى لو غمرته بالماء؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الضوء", correct: true },
    { text: "الرمل", correct: false },
    { text: "الحجر", correct: false },
    { text: "الحديد", correct: false }
  ]
}
],
    
  7:[
  {question:"I speak without a mouth and hear without ears. What am I?", difficulty:"medium", basePoints:20, answers:[
    {text:"A ghost", correct:false},
    {text:"An echo", correct:true},
    {text:"A shadow", correct:false},
    {text:"A thought", correct:false}
  ]},

  {question:"I have keys but no locks. What am I?", difficulty:"easy", basePoints:10, answers:[
    {text:"A map", correct:false},
    {text:"A piano", correct:true},
    {text:"A safe", correct:false},
    {text:"A diary", correct:false}
  ]},

  {question:"What comes once in a minute, twice in a moment, but never in a thousand years?", difficulty:"hard", basePoints:20, answers:[
    {text:"The letter M", correct:true},
    {text:"A second", correct:false},
    {text:"A moon", correct:false},
    {text:"A century", correct:false}
  ]},

  {question:"I’m tall when I’m young, and I’m short when I’m old. What am I?", difficulty:"easy", basePoints:10, answers:[
    {text:"A candle", correct:true},
    {text:"A tree", correct:false},
    {text:"A pencil", correct:false},
    {text:"A mountain", correct:false}
  ]},

  {question:"The more of this you take, the more you leave behind. What is it?", difficulty:"medium", basePoints:20, answers:[
    {text:"Footsteps", correct:true},
    {text:"Time", correct:false},
    {text:"Memories", correct:false},
    {text:"Shadows", correct:false}
  ]},

  {question:"I have cities but no houses, forests but no trees, and water but no fish. What am I?", difficulty:"hard", basePoints:20, answers:[
    {text:"A map", correct:true},
    {text:"A painting", correct:false},
    {text:"A dream", correct:false},
    {text:"A book", correct:false}
  ]},

  {question:"What can travel around the world while staying in a corner?", difficulty:"medium", basePoints:20, answers:[
    {text:"A stamp", correct:true},
    {text:"A shadow", correct:false},
    {text:"A coin", correct:false},
    {text:"An airplane", correct:false}
  ]},

  {question:"What has a heart that doesn’t beat?", difficulty:"hard", basePoints:20, answers:[
    {text:"An artichoke", correct:true},
    {text:"A robot", correct:false},
    {text:"A clock", correct:false},
    {text:"A stone", correct:false}
  ]},

  {question:"What has hands but can’t clap?", difficulty:"easy", basePoints:10, answers:[
    {text:"A clock", correct:true},
    {text:"A doll", correct:false},
    {text:"A robot", correct:false},
    {text:"A glove", correct:false}
  ]},

  {question:"What has one eye but cannot see?", difficulty:"easy", basePoints:10, answers:[
    {text:"A needle", correct:true},
    {text:"A hurricane", correct:false},
    {text:"A storm", correct:false},
    {text:"A telescope", correct:false}
  ]},

  {question:"I am always hungry, I must always be fed. The finger I touch will soon turn red. What am I?", difficulty:"medium", basePoints:20, answers:[
    {text:"Fire", correct:true},
    {text:"Water", correct:false},
    {text:"Wind", correct:false},
    {text:"Ice", correct:false}
  ]},

  {question:"The more you take from me, the bigger I get. What am I?", difficulty:"medium", basePoints:20, answers:[
    {text:"A hole", correct:true},
    {text:"A shadow", correct:false},
    {text:"A balloon", correct:false},
    {text:"A cloud", correct:false}
  ]},

  {question:"What has a neck but no head?", difficulty:"easy", basePoints:10, answers:[
    {text:"A bottle", correct:true},
    {text:"A giraffe", correct:false},
    {text:"A shirt", correct:false},
    {text:"A tree", correct:false}
  ]},

  {question:"What is always in front of you but can’t be seen?", difficulty:"medium", basePoints:20, answers:[
    {text:"The future", correct:true},
    {text:"The past", correct:false},
    {text:"Air", correct:false},
    {text:"Time", correct:false}
  ]},

  {question:"I’m found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?", difficulty:"hard", basePoints:20, answers:[
    {text:"Yarn", correct:true},
    {text:"Plastic", correct:false},
    {text:"Paper", correct:false},
    {text:"Metal", correct:false}
  ]},

  {question:"What goes up but never comes down?", difficulty:"easy", basePoints:10, answers:[
    {text:"Age", correct:true},
    {text:"Smoke", correct:false},
    {text:"Balloon", correct:false},
    {text:"Sun", correct:false}
  ]},

  {question:"What begins with T, ends with T, and has T in it?", difficulty:"medium", basePoints:20, answers:[
    {text:"A teapot", correct:true},
    {text:"A tent", correct:false},
    {text:"Time", correct:false},
    {text:"Trust", correct:false}
  ]},

  {question:"I’m light as a feather, yet the strongest person can’t hold me for more than 5 minutes. What am I?", difficulty:"hard", basePoints:20, answers:[
    {text:"Breath", correct:true},
    {text:"Air", correct:false},
    {text:"Water", correct:false},
    {text:"Fire", correct:false}
  ]},

  {question:"I have branches, but no fruit, trunk or leaves. What am I?", difficulty:"medium", basePoints:20, answers:[
    {text:"A bank", correct:true},
    {text:"A tree", correct:false},
    {text:"A library", correct:false},
    {text:"A river", correct:false}
  ]},

  {question:"What can fill a room but takes up no space?", difficulty:"easy", basePoints:10, answers:[
    {text:"Light", correct:true},
    {text:"Air", correct:false},
    {text:"Sound", correct:false},
    {text:"Heat", correct:false}
  ]},
  {
  question: "What has an eye but cannot see, and a needle but cannot sew?",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "A hurricane", correct: true },
    { text: "A sewing kit", correct: false },
    { text: "A robot", correct: false },
    { text: "A telescope", correct: false }
  ]
},
{
  question: "What gets wetter the more it dries?",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "A towel", correct: true },
    { text: "Rain", correct: false },
    { text: "A sponge", correct: false },
    { text: "A river", correct: false }
  ]
},
{
  question: "What has legs but doesn’t walk?",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "A table", correct: true },
    { text: "A dog", correct: false },
    { text: "A chairperson", correct: false },
    { text: "A robot", correct: false }
  ]
},
{
  question: "What can run but never walks, has a mouth but never talks?",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "A river", correct: true },
    { text: "A cheetah", correct: false },
    { text: "A clock", correct: false },
    { text: "Wind", correct: false }
  ]
},
{
  question: "What has many teeth but cannot bite?",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "A comb", correct: true },
    { text: "A dog", correct: false },
    { text: "A zipper", correct: false },
    { text: "A saw", correct: false }
  ]
},
{
  question: "What can you catch but not throw?",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "A cold", correct: true },
    { text: "A ball", correct: false },
    { text: "A fish", correct: false },
    { text: "A shadow", correct: false }
  ]
},
{
  question: "What has a ring but no finger?",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "A phone", correct: true },
    { text: "A bell", correct: false },
    { text: "A planet", correct: false },
    { text: "A coin", correct: false }
  ]
},
{
  question: "What can you break, even if you never pick it up or touch it?",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "A promise", correct: true },
    { text: "Glass", correct: false },
    { text: "A stick", correct: false },
    { text: "A plate", correct: false }
  ]
},
{
  question: "What has a face and two hands but no arms or legs?",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "A clock", correct: true },
    { text: "A doll", correct: false },
    { text: "A statue", correct: false },
    { text: "A mirror", correct: false }
  ]
},
{
  question: "What building has the most stories?",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "A library", correct: true },
    { text: "A school", correct: false },
    { text: "A hotel", correct: false },
    { text: "A hospital", correct: false }
  ]
},
{
  question: "What invention lets you look right through a wall?",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "A window", correct: true },
    { text: "X-ray", correct: false },
    { text: "A mirror", correct: false },
    { text: "A camera", correct: false }
  ]
},
{
  question: "What goes through cities and fields but never moves?",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "A road", correct: true },
    { text: "A river", correct: false },
    { text: "A train", correct: false },
    { text: "Wind", correct: false }
  ]
},
{
  question: "If you drop me, I crack. If you smile at me, I smile back. What am I?",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "A mirror", correct: true },
    { text: "A phone", correct: false },
    { text: "An egg", correct: false },
    { text: "A window", correct: false }
  ]
},
{
  question: "What has four fingers and a thumb but isn’t alive?",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "A glove", correct: true },
    { text: "A hand", correct: false },
    { text: "A robot", correct: false },
    { text: "A doll", correct: false }
  ]
},
{
  question: "What begins with an E but only contains one letter?",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "An envelope", correct: true },
    { text: "An email", correct: false },
    { text: "Earth", correct: false },
    { text: "Engine", correct: false }
  ]
},
{
  question: "What is full of holes but still holds water?",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "A sponge", correct: true },
    { text: "A net", correct: false },
    { text: "A bucket", correct: false },
    { text: "A basket", correct: false }
  ]
},
{
  question: "What has a bottom at the top?",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "Your legs", correct: true },
    { text: "A bottle", correct: false },
    { text: "A mountain", correct: false },
    { text: "A tree", correct: false }
  ]
},
{
  question: "What comes down but never goes up?",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "Rain", correct: true },
    { text: "Age", correct: false },
    { text: "Smoke", correct: false },
    { text: "A balloon", correct: false }
  ]
},
{
  question: "What has a spine but no bones?",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "A book", correct: true },
    { text: "A snake", correct: false },
    { text: "A human", correct: false },
    { text: "A fish", correct: false }
  ]
},
{
  question: "What is so fragile that saying its name breaks it?",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "Silence", correct: true },
    { text: "Glass", correct: false },
    { text: "Ice", correct: false },
    { text: "Paper", correct: false }
  ]
}
],
  
  8:[
  {
    question: "ما هو العنصر الكيميائي الذي يرمز له بـ Fe؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "فوسفور", correct: false },
      { text: "حديد", correct: true },
      { text: "فضة", correct: false },
      { text: "فلور", correct: false }
    ]
  },

  {
    question: "من هو مؤلف رواية 'الحرب والسلم'؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "تولستوي", correct: true },
      { text: "دوستويفسكي", correct: false },
      { text: "شكسبير", correct: false },
      { text: "نجيب محفوظ", correct: false }
    ]
  },

  {
    question: "أي دولة لديها أكبر عدد من البراكين النشطة؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "إندونيسيا", correct: true },
      { text: "اليابان", correct: false },
      { text: "الولايات المتحدة", correct: false },
      { text: "إيطاليا", correct: false }
    ]
  },

  {
    question: "ما هو أسرع حيوان بري؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "الفهد", correct: true },
      { text: "الظبي", correct: false },
      { text: "الأسد", correct: false },
      { text: "الجاموس", correct: false }
    ]
  },

  {
    question: "ما هو الكوكب الأقرب إلى الشمس؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "الزهرة", correct: false },
      { text: "المريخ", correct: false },
      { text: "عطارد", correct: true },
      { text: "الأرض", correct: false }
    ]
  },

  {
    question: "ما هو أطول نهر في العالم؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "الأمازون", correct: false },
      { text: "النيل", correct: true },
      { text: "الكونغو", correct: false },
      { text: "اليانغتسي", correct: false }
    ]
  },

  {
    question: "من هو مكتشف القوانين الأساسية للحركة؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "أينشتاين", correct: false },
      { text: "نيوتن", correct: true },
      { text: "جاليليو", correct: false },
      { text: "كبلر", correct: false }
    ]
  },

  {
    question: "أي دولة اخترعت ورق الطباعة؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "مصر", correct: false },
      { text: "الصين", correct: true },
      { text: "اليابان", correct: false },
      { text: "ألمانيا", correct: false }
    ]
  },

  {
    question: "ما هو العضو الأكبر في جسم الإنسان؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "القلب", correct: false },
      { text: "الجلد", correct: true },
      { text: "الكبد", correct: false },
      { text: "الرئة", correct: false }
    ]
  },

  {
    question: "ما هو أعمق محيط على الأرض؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "الأطلسي", correct: false },
      { text: "الهادئ", correct: true },
      { text: "الهندي", correct: false },
      { text: "الشمالي", correct: false }
    ]
  },

  {
    question: "من هو مؤسس علم النفس الحديث؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "سيغموند فرويد", correct: true },
      { text: "كارل يونغ", correct: false },
      { text: "بافلوف", correct: false },
      { text: "أدلر", correct: false }
    ]
  },

  {
    question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "المشتري", correct: true },
      { text: "زحل", correct: false },
      { text: "الأرض", correct: false },
      { text: "نبتون", correct: false }
    ]
  },

  {
    question: "أي لغة كانت لغة الإمبراطورية الرومانية؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "اليونانية", correct: false },
      { text: "اللاتينية", correct: true },
      { text: "الأرامية", correct: false },
      { text: "العبرية", correct: false }
    ]
  },

  {
    question: "ما هو الكوكب الأحمر؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "المريخ", correct: true },
      { text: "الزهرة", correct: false },
      { text: "عطارد", correct: false },
      { text: "المشتري", correct: false }
    ]
  },

  {
    question: "أي دولة لديها أكبر عدد من الأهرامات؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "مصر", correct: false },
      { text: "السودان", correct: true },
      { text: "المكسيك", correct: false },
      { text: "العراق", correct: false }
    ]
  },

  {
    question: "ما هي أصغر وحدة في جسم الإنسان؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "الخلية", correct: true },
      { text: "الأنسجة", correct: false },
      { text: "الأعضاء", correct: false },
      { text: "العضلات", correct: false }
    ]
  },

  {
    question: "أي من هذه المعادن أثقل؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "الذهب", correct: true },
      { text: "الحديد", correct: false },
      { text: "الألمنيوم", correct: false },
      { text: "النحاس", correct: false }
    ]
  },

  {
    question: "ما هي عاصمة أيسلندا؟",
    basePoints: 20,
    difficulty: "hard",
    answers: [
      { text: "ريكيافيك", correct: true },
      { text: "أوسلو", correct: false },
      { text: "ستوكهولم", correct: false },
      { text: "هلسنكي", correct: false }
    ]
  },

  {
    question: "ما هو الغاز الذي يشكل معظم الغلاف الجوي للأرض؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "الأكسجين", correct: false },
      { text: "النيتروجين", correct: true },
      { text: "الهيليوم", correct: false },
      { text: "ثاني أكسيد الكربون", correct: false }
    ]
  },

  {
    question: "ما هو أول عنصر في الجدول الدوري؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "الهيدروجين", correct: true },
      { text: "الليثيوم", correct: false },
      { text: "الأكسجين", correct: false },
      { text: "النيتروجين", correct: false }
    ]
  },

  {
    question: "ما هو أكبر حيوان على وجه الأرض؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "الحوت الأزرق", correct: true },
      { text: "الفيل الأفريقي", correct: false },
      { text: "القرش الأبيض", correct: false },
      { text: "الزرافة", correct: false }
    ]
  },

  {
    question: "ما هي أصغر قارة في العالم؟",
    basePoints: 10,
    difficulty: "easy",
    answers: [
      { text: "أستراليا", correct: true },
      { text: "أوروبا", correct: false },
      { text: "أمريكا الجنوبية", correct: false },
      { text: "أنتاركتيكا", correct: false }
    ]
  },

  {
    question: "ما هو الكوكب الذي له أكبر نظام حلقات؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "زحل", correct: true },
      { text: "المشتري", correct: false },
      { text: "أورانوس", correct: false },
      { text: "نبتون", correct: false }
    ]
  },

  {
    question: "ما هي الدولة التي تُعرف ببلاد الألف بحيرة؟",
    basePoints: 20,
    difficulty: "medium",
    answers: [
      { text: "فنلندا", correct: true },
      { text: "كندا", correct: false },
      { text: "روسيا", correct: false },
      { text: "إيطاليا", correct: false }
    ]
  },
{
  question: "ما هو الكوكب المعروف باسم الكوكب الأزرق؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الأرض", correct: true },
    { text: "نبتون", correct: false },
    { text: "المريخ", correct: false },
    { text: "الزهرة", correct: false }
  ]
},
{
  question: "من رسم لوحة الموناليزا؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "ليوناردو دا فينشي", correct: true },
    { text: "بيكاسو", correct: false },
    { text: "فان جوخ", correct: false },
    { text: "مايكل أنجلو", correct: false }
  ]
},
{
  question: "ما هو أسرع طائر في العالم؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "الصقر الشاهين", correct: true },
    { text: "النسر", correct: false },
    { text: "الحمام", correct: false },
    { text: "البطريق", correct: false }
  ]
},
{
  question: "في أي قارة تقع البرازيل؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "أمريكا الجنوبية", correct: true },
    { text: "أفريقيا", correct: false },
    { text: "أوروبا", correct: false },
    { text: "آسيا", correct: false }
  ]
},
{
  question: "ما هو أكبر محيط في العالم؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "المحيط الهادئ", correct: true },
    { text: "الأطلسي", correct: false },
    { text: "الهندي", correct: false },
    { text: "المتجمد الشمالي", correct: false }
  ]
},
{
  question: "من هو مخترع المصباح الكهربائي؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "توماس إديسون", correct: true },
    { text: "تسلا", correct: false },
    { text: "نيوتن", correct: false },
    { text: "غاليليو", correct: false }
  ]
},
{
  question: "ما هو أكبر صحراء في العالم؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "القارة القطبية الجنوبية", correct: true },
    { text: "الصحراء الكبرى", correct: false },
    { text: "صحراء غوبي", correct: false },
    { text: "صحراء كالاهاري", correct: false }
  ]
},
{
  question: "كم عدد كواكب المجموعة الشمسية؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "8", correct: true },
    { text: "9", correct: false },
    { text: "7", correct: false },
    { text: "10", correct: false }
  ]
},
{
  question: "ما هو أطول جبل في العالم فوق مستوى سطح البحر؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "إيفرست", correct: true },
    { text: "كي2", correct: false },
    { text: "كانغشينجونغا", correct: false },
    { text: "ماكينلي", correct: false }
  ]
},
{
  question: "ما هي العملة الرسمية لليابان؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الين", correct: true },
    { text: "الوون", correct: false },
    { text: "الدولار", correct: false },
    { text: "اليوان", correct: false }
  ]
},
{
  question: "من هو أول إنسان وصل إلى القمر؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "نيل أرمسترونغ", correct: true },
    { text: "باز ألدرين", correct: false },
    { text: "يوري غاغارين", correct: false },
    { text: "مايكل كولينز", correct: false }
  ]
},
{
  question: "ما هو العنصر الذي يُستخدم في صناعة الزجاج أساسًا؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "السيليكون", correct: true },
    { text: "الكربون", correct: false },
    { text: "الحديد", correct: false },
    { text: "الذهب", correct: false }
  ]
},
{
  question: "أي دولة تُعرف بأرض الشمس المشرقة؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "اليابان", correct: true },
    { text: "الصين", correct: false },
    { text: "كوريا", correct: false },
    { text: "تايلاند", correct: false }
  ]
},
{
  question: "ما هو أضخم كائن حي على الأرض؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الحوت الأزرق", correct: true },
    { text: "فطر العسل العملاق", correct: false },
    { text: "الفيل", correct: false },
    { text: "الحوت الأحدب", correct: false }
  ]
},
{
  question: "في أي دولة يقع برج بيزا المائل؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "إيطاليا", correct: true },
    { text: "فرنسا", correct: false },
    { text: "إسبانيا", correct: false },
    { text: "البرتغال", correct: false }
  ]
},
{
  question: "ما هو الغاز المسؤول عن ظاهرة الاحتباس الحراري بدرجة أكبر؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "ثاني أكسيد الكربون", correct: true },
    { text: "الأكسجين", correct: false },
    { text: "النيتروجين", correct: false },
    { text: "الهيدروجين", correct: false }
  ]
},
{
  question: "من هو مؤلف رواية '1984'؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "جورج أورويل", correct: true },
    { text: "ألدوس هكسلي", correct: false },
    { text: "تولستوي", correct: false },
    { text: "همنغواي", correct: false }
  ]
},
{
  question: "ما هو أطول حيوان بري؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الزرافة", correct: true },
    { text: "الفيل", correct: false },
    { text: "الجمل", correct: false },
    { text: "الحصان", correct: false }
  ]
},
{
  question: "كم عدد عظام جسم الإنسان البالغ تقريبًا؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "206", correct: true },
    { text: "210", correct: false },
    { text: "198", correct: false },
    { text: "250", correct: false }
  ]
},
{
  question: "ما هو أسرع كوكب دورانًا حول نفسه؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "المشتري", correct: true },
    { text: "الأرض", correct: false },
    { text: "المريخ", correct: false },
    { text: "عطارد", correct: false }
  ]
},
{
  question: "ما هي أكبر دولة في العالم من حيث المساحة؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "روسيا", correct: true },
    { text: "كندا", correct: false },
    { text: "الصين", correct: false },
    { text: "الولايات المتحدة", correct: false }
  ]
},
{
  question: "من هو مكتشف البنسلين؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "ألكسندر فليمنغ", correct: true },
    { text: "لويس باستور", correct: false },
    { text: "ماري كوري", correct: false },
    { text: "داروين", correct: false }
  ]
},
{
  question: "ما هو أكبر عضو داخلي في جسم الإنسان؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الكبد", correct: true },
    { text: "القلب", correct: false },
    { text: "الرئة", correct: false },
    { text: "المعدة", correct: false }
  ]
},
{
  question: "أي كوكب يُعرف باسم العملاق الغازي؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "المشتري", correct: true },
    { text: "المريخ", correct: false },
    { text: "عطارد", correct: false },
    { text: "الزهرة", correct: false }
  ]
},
{
  question: "في أي عام بدأت الحرب العالمية الثانية؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "1939", correct: true },
    { text: "1914", correct: false },
    { text: "1945", correct: false },
    { text: "1929", correct: false }
  ]
},
{
  question: "ما هو أسرع حيوان بحري؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "سمكة أبو شراع", correct: true },
    { text: "القرش الأبيض", correct: false },
    { text: "الدلفين", correct: false },
    { text: "الحوت الأزرق", correct: false }
  ]
},
{
  question: "ما هي عاصمة كندا؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "أوتاوا", correct: true },
    { text: "تورونتو", correct: false },
    { text: "فانكوفر", correct: false },
    { text: "مونتريال", correct: false }
  ]
},
{
  question: "ما هو أطول عظم في جسم الإنسان؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "عظم الفخذ", correct: true },
    { text: "العمود الفقري", correct: false },
    { text: "الذراع", correct: false },
    { text: "الجمجمة", correct: false }
  ]
},
{
  question: "أي عنصر يُستخدم في صناعة الأقلام الرصاص؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الكربون (الجرافيت)", correct: true },
    { text: "الرصاص", correct: false },
    { text: "الحديد", correct: false },
    { text: "الزنك", correct: false }
  ]
},
{
  question: "من هو صاحب نظرية النسبية؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "أينشتاين", correct: true },
    { text: "نيوتن", correct: false },
    { text: "غاليليو", correct: false },
    { text: "كبلر", correct: false }
  ]
},
{
  question: "ما هو أكبر قمر في المجموعة الشمسية؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "غانيميد", correct: true },
    { text: "تيتان", correct: false },
    { text: "القمر", correct: false },
    { text: "أوروبا", correct: false }
  ]
},
{
  question: "في أي قارة تقع دولة النرويج؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "أوروبا", correct: true },
    { text: "آسيا", correct: false },
    { text: "أفريقيا", correct: false },
    { text: "أمريكا الشمالية", correct: false }
  ]
},
{
  question: "ما هو العنصر الكيميائي الذي رمزه O؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "الأكسجين", correct: true },
    { text: "الذهب", correct: false },
    { text: "الأوزون", correct: false },
    { text: "الهيدروجين", correct: false }
  ]
},
{
  question: "من هو مؤلف مسرحية 'روميو وجولييت'؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "ويليام شكسبير", correct: true },
    { text: "تولستوي", correct: false },
    { text: "هاملت", correct: false },
    { text: "ديكنز", correct: false }
  ]
},
{
  question: "ما هو أكبر محيط من حيث العمق؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "المحيط الهادئ", correct: true },
    { text: "الأطلسي", correct: false },
    { text: "الهندي", correct: false },
    { text: "المتجمد الجنوبي", correct: false }
  ]
},
{
  question: "كم عدد ألوان قوس قزح؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "7", correct: true },
    { text: "6", correct: false },
    { text: "8", correct: false },
    { text: "5", correct: false }
  ]
},
{
  question: "أي دولة تُعرف ببلاد التانغو؟",
  basePoints: 20,
  difficulty:
  "hard",
  answers: [
    { text: "الأرجنتين", correct: true },
    { text: "إسبانيا", correct: false },
    { text: "البرازيل", correct: false },
    { text: "المكسيك", correct: false }
  ]
},
{
  question: "ما هو الجهاز المسؤول عن ضخ الدم في جسم الإنسان؟",
  basePoints: 10,
  difficulty:
  "easy",
  answers: [
    { text: "القلب", correct: true },
    { text: "الرئة", correct: false },
    { text: "الكبد", correct: false },
    { text: "الدماغ", correct: false }
  ]
},
{
  question: "من هو أول رئيس للولايات المتحدة الأمريكية؟",
  basePoints: 20,
  difficulty:
  "medium",
  answers: [
    { text: "جورج واشنطن", correct: true },
    { text: "أبراهام لينكولن", correct: false },
    { text: "توماس جيفرسون", correct: false },
    { text: "جون آدامز", correct: false }
  ]
},
{
  question: "ما هو أندر فصائل الدم؟",
  basePoints: 30,
  difficulty:
  "insane",
  answers: [
    { text: "AB-", correct: true },
    { text: "O+", correct: false },
    { text: "A+", correct: false },
    { text: "B+", correct: false }
  ]
}
],
  
  9:[
  {question:"What does CSS stand for?", difficulty:"easy", basePoints:10, answers:[
    {text:"Computer Style Sheets", correct:false},
    {text:"Creative Style Sheets", correct:false},
    {text:"Cascading Style Sheets", correct:true},
    {text:"Colorful Style Sheets", correct:false}
  ]},

  {question:"Which HTML tag is used for the largest heading?", difficulty:"easy", basePoints:10, answers:[
    {text:"<h1>", correct:true},
    {text:"<heading>", correct:false},
    {text:"<head>", correct:false},
    {text:"<h6>", correct:false}
  ]},

  {question:"Which CSS property changes the text color?", difficulty:"easy", basePoints:10, answers:[
    {text:"font-style", correct:false},
    {text:"text-color", correct:false},
    {text:"color", correct:true},
    {text:"background-color", correct:false}
  ]},

  {question:"Which HTML attribute is used to define inline styles?", difficulty:"easy", basePoints:10, answers:[
    {text:"class", correct:false},
    {text:"style", correct:true},
    {text:"font", correct:false},
    {text:"styles", correct:false}
  ]},

  {question:"How do you select an element with id 'main' in CSS?", difficulty:"medium", basePoints:20, answers:[
    {text:".main", correct:false},
    {text:"#main", correct:true},
    {text:"main", correct:false},
    {text:"*main", correct:false}
  ]},

  {question:"Which property is used to change the background color?", difficulty:"easy", basePoints:10, answers:[
    {text:"background-color", correct:true},
    {text:"color", correct:false},
    {text:"bgcolor", correct:false},
    {text:"background-style", correct:false}
  ]},

  {question:"Which HTML tag is used to create a hyperlink?", difficulty:"easy", basePoints:10, answers:[
    {text:"<link>", correct:false},
    {text:"<a>", correct:true},
    {text:"<href>", correct:false},
    {text:"<hyperlink>", correct:false}
  ]},

  {question:"Which CSS property controls the element's width?", difficulty:"easy", basePoints:10, answers:[
    {text:"width", correct:true},
    {text:"size", correct:false},
    {text:"length", correct:false},
    {text:"max-width", correct:false}
  ]},

  {question:"Which HTML tag is used to display an image?", difficulty:"easy", basePoints:10, answers:[
    {text:"<img>", correct:true},
    {text:"<image>", correct:false},
    {text:"<pic>", correct:false},
    {text:"<src>", correct:false}
  ]},

  {question:"Which CSS property is used to make text bold?", difficulty:"medium", basePoints:20, answers:[
    {text:"font-weight", correct:true},
    {text:"text-style", correct:false},
    {text:"font-style", correct:false},
    {text:"bold", correct:false}
  ]},

  {question:"How do you select all <p> elements in CSS?", difficulty:"medium", basePoints:20, answers:[
    {text:"p", correct:true},
    {text:".p", correct:false},
    {text:"#p", correct:false},
    {text:"*p", correct:false}
  ]},

  {question:"Which HTML tag is used for a paragraph?", difficulty:"easy", basePoints:10, answers:[
    {text:"<p>", correct:true},
    {text:"<para>", correct:false},
    {text:"<pg>", correct:false},
    {text:"<text>", correct:false}
  ]},

  {question:"Which CSS property adds space inside an element?", difficulty:"medium", basePoints:20, answers:[
    {text:"margin", correct:false},
    {text:"padding", correct:true},
    {text:"spacing", correct:false},
    {text:"gap", correct:false}
  ]},

  {question:"Which HTML tag is used for an unordered list?", difficulty:"easy", basePoints:10, answers:[
    {text:"<ol>", correct:false},
    {text:"<ul>", correct:true},
    {text:"<li>", correct:false},
    {text:"<list>", correct:false}
  ]},

  {question:"Which CSS property sets the font of an element?", difficulty:"medium", basePoints:20, answers:[
    {text:"font-style", correct:false},
    {text:"font-family", correct:true},
    {text:"text-font", correct:false},
    {text:"font-weight", correct:false}
  ]},

  {question:"How do you make list bullets square in CSS?", difficulty:"hard", basePoints:20, answers:[
    {text:"list-style-type: square;", correct:true},
    {text:"list: square;", correct:false},
    {text:"marker: square;", correct:false},
    {text:"bullet-shape: square;", correct:false}
  ]},

  {question:"Which HTML attribute specifies alternate text for an image?", difficulty:"medium", basePoints:20, answers:[
    {text:"alt", correct:true},
    {text:"title", correct:false},
    {text:"src", correct:false},
    {text:"text", correct:false}
  ]},

  {question:"Which CSS property changes the left margin?", difficulty:"medium", basePoints:20, answers:[
    {text:"margin-left", correct:true},
    {text:"padding-left", correct:false},
    {text:"indent", correct:false},
    {text:"left-margin", correct:false}
  ]},

  {question:"Which HTML element creates a line break?", difficulty:"easy", basePoints:10, answers:[
    {text:"<break>", correct:false},
    {text:"<lb>", correct:false},
    {text:"<br>", correct:true},
    {text:"<line>", correct:false}
  ]},

  {question:"Which CSS property controls element visibility without removing its space?", difficulty:"hard", basePoints:20, answers:[
    {text:"display", correct:false},
    {text:"visibility", correct:true},
    {text:"opacity", correct:false},
    {text:"hidden", correct:false}
  ]},

  {question:"Which HTML tag defines a table row?", difficulty:"medium", basePoints:20, answers:[
    {text:"<tr>", correct:true},
    {text:"<table-row>", correct:false},
    {text:"<td>", correct:false},
    {text:"<th>", correct:false}
  ]},

  {question:"Which CSS property controls the height of an element?", difficulty:"easy", basePoints:10, answers:[
    {text:"height", correct:true},
    {text:"size", correct:false},
    {text:"max-height", correct:false},
    {text:"line-height", correct:false}
  ]},

  {question:"Which HTML tag is used for a table header cell?", difficulty:"medium", basePoints:20, answers:[
    {text:"<th>", correct:true},
    {text:"<thead>", correct:false},
    {text:"<header>", correct:false},
    {text:"<table-head>", correct:false}
  ]},

  {question:"Which CSS property changes the spacing between letters?", difficulty:"medium", basePoints:20, answers:[
    {text:"letter-spacing", correct:true},
    {text:"word-spacing", correct:false},
    {text:"text-spacing", correct:false},
    {text:"spacing", correct:false}
  ]},

  {question:"How do you write a comment in HTML?", difficulty:"easy", basePoints:10, answers:[
    {text:"<!-- comment -->", correct:true},
    {text:"// comment", correct:false},
    {text:"/* comment */", correct:false},
    {text:"# comment", correct:false}
  ]},

  {question:"Which CSS property adds shadow to text?", difficulty:"hard", basePoints:20, answers:[
    {text:"text-shadow", correct:true},
    {text:"shadow-text", correct:false},
    {text:"box-shadow", correct:false},
    {text:"font-shadow", correct:false}
  ]},

  {question:"Which HTML element defines the footer of a page?", difficulty:"easy", basePoints:10, answers:[
    {text:"<footer>", correct:true},
    {text:"<bottom>", correct:false},
    {text:"<foot>", correct:false},
    {text:"<section>", correct:false}
  ]},

  {question:"Which CSS property aligns text horizontally?", difficulty:"medium", basePoints:20, answers:[
    {text:"text-align", correct:true},
    {text:"align-text", correct:false},
    {text:"text-position", correct:false},
    {text:"horizontal-align", correct:false}
  ]},

  {question:"Which HTML attribute defines the URL of a link?", difficulty:"easy", basePoints:10, answers:[
    {text:"href", correct:true},
    {text:"src", correct:false},
    {text:"link", correct:false},
    {text:"url", correct:false}
  ]},

  {question:"Which CSS property creates rounded corners?", difficulty:"medium", basePoints:20, answers:[
    {text:"border-radius", correct:true},
    {text:"radius-border", correct:false},
    {text:"corner-radius", correct:false},
    {text:"round-corners", correct:false}
  ]},

  {question:"Which HTML tag creates an ordered list?", difficulty:"easy", basePoints:10, answers:[
    {text:"<ol>", correct:true},
    {text:"<ul>", correct:false},
    {text:"<li>", correct:false},
    {text:"<list>", correct:false}
  ]},
  {question:"Which CSS property changes the font size?", difficulty:"easy", basePoints:10, answers:[
    {text:"font-size", correct:true},
    {text:"text-size", correct:false},
    {text:"size", correct:false},
    {text:"font-style", correct:false}
  ]},

  {question:"Which HTML tag is used to create a checkbox?", difficulty:"medium", basePoints:20, answers:[
    {text:"<input type='checkbox'>", correct:true},
    {text:"<checkbox>", correct:false},
    {text:"<check>", correct:false},
    {text:"<box>", correct:false}
  ]},

  {question:"Which CSS property controls the stacking order of elements?", difficulty:"hard", basePoints:20, answers:[
    {text:"z-index", correct:true},
    {text:"position", correct:false},
    {text:"stack", correct:false},
    {text:"layer", correct:false}
  ]},

  {question:"Which HTML tag is used to embed JavaScript?", difficulty:"easy", basePoints:10, answers:[
    {text:"<script>", correct:true},
    {text:"<js>", correct:false},
    {text:"<javascript>", correct:false},
    {text:"<code>", correct:false}
  ]},

  {question:"Which CSS property makes an element a flex container?", difficulty:"medium", basePoints:20, answers:[
    {text:"display: flex;", correct:true},
    {text:"flex: true;", correct:false},
    {text:"position: flex;", correct:false},
    {text:"flex-container: yes;", correct:false}
  ]},

  {question:"Which HTML tag is used for inserting a video?", difficulty:"medium", basePoints:20, answers:[
    {text:"<video>", correct:true},
    {text:"<media>", correct:false},
    {text:"<movie>", correct:false},
    {text:"<mp4>", correct:false}
  ]},

  {question:"Which CSS property changes the cursor type?", difficulty:"medium", basePoints:20, answers:[
    {text:"cursor", correct:true},
    {text:"pointer-style", correct:false},
    {text:"mouse", correct:false},
    {text:"hover-type", correct:false}
  ]},

  {question:"Which HTML tag is used to create a dropdown list?", difficulty:"medium", basePoints:20, answers:[
    {text:"<select>", correct:true},
    {text:"<dropdown>", correct:false},
    {text:"<option-list>", correct:false},
    {text:"<input type='list'>", correct:false}
  ]},

  {question:"Which CSS property sets the maximum width?", difficulty:"easy", basePoints:10, answers:[
    {text:"max-width", correct:true},
    {text:"maximum-width", correct:false},
    {text:"limit-width", correct:false},
    {text:"width-max", correct:false}
  ]},

  {question:"Which HTML tag defines metadata about the document?", difficulty:"hard", basePoints:20, answers:[
    {text:"<meta>", correct:true},
    {text:"<data>", correct:false},
    {text:"<info>", correct:false},
    {text:"<head-info>", correct:false}
  ]},

  {question:"Which CSS property is used to hide an element completely?", difficulty:"medium", basePoints:20, answers:[
    {text:"display: none;", correct:true},
    {text:"visibility: hidden;", correct:false},
    {text:"opacity: 0;", correct:false},
    {text:"hidden: true;", correct:false}
  ]},

  {question:"Which HTML tag is used to create a form?", difficulty:"easy", basePoints:10, answers:[
    {text:"<form>", correct:true},
    {text:"<input-form>", correct:false},
    {text:"<fieldset>", correct:false},
    {text:"<submit>", correct:false}
  ]},

  {question:"Which CSS property sets space between lines of text?", difficulty:"medium", basePoints:20, answers:[
    {text:"line-height", correct:true},
    {text:"text-spacing", correct:false},
    {text:"font-gap", correct:false},
    {text:"spacing", correct:false}
  ]},

  {question:"Which HTML input type is used for email addresses?", difficulty:"easy", basePoints:10, answers:[
    {text:"type='email'", correct:true},
    {text:"type='mail'", correct:false},
    {text:"type='text'", correct:false},
    {text:"type='address'", correct:false}
  ]},

  {question:"Which CSS property changes the background image?", difficulty:"medium", basePoints:20, answers:[
    {text:"background-image", correct:true},
    {text:"image-bg", correct:false},
    {text:"bg-image", correct:false},
    {text:"background-photo", correct:false}
  ]},

  {question:"Which HTML tag defines navigation links?", difficulty:"medium", basePoints:20, answers:[
    {text:"<nav>", correct:true},
    {text:"<navigation>", correct:false},
    {text:"<links>", correct:false},
    {text:"<menu-bar>", correct:false}
  ]},

  {question:"Which CSS property controls overflow content?", difficulty:"hard", basePoints:20, answers:[
    {text:"overflow", correct:true},
    {text:"flow", correct:false},
    {text:"content-flow", correct:false},
    {text:"clip", correct:false}
  ]},

  {question:"Which HTML tag is used for audio files?", difficulty:"medium", basePoints:20, answers:[
    {text:"<audio>", correct:true},
    {text:"<sound>", correct:false},
    {text:"<music>", correct:false},
    {text:"<mp3>", correct:false}
  ]},

  {question:"Which CSS property applies a blur effect?", difficulty:"insane", basePoints:30, answers:[
    {text:"filter: blur();", correct:true},
    {text:"blur-effect", correct:false},
    {text:"background-blur", correct:false},
    {text:"effect: blur;", correct:false}
  ]},

  {question:"Which HTML tag defines a section in a document?", difficulty:"easy", basePoints:10, answers:[
    {text:"<section>", correct:true},
    {text:"<part>", correct:false},
    {text:"<div-section>", correct:false},
    {text:"<area>", correct:false}
  ]},

  {question:"Which CSS property changes text to uppercase?", difficulty:"medium", basePoints:20, answers:[
    {text:"text-transform", correct:true},
    {text:"font-case", correct:false},
    {text:"uppercase", correct:false},
    {text:"text-style", correct:false}
  ]},

  {question:"Which HTML tag is used to group block elements?", difficulty:"easy", basePoints:10, answers:[
    {text:"<div>", correct:true},
    {text:"<span>", correct:false},
    {text:"<group>", correct:false},
    {text:"<block>", correct:false}
  ]},

  {question:"Which CSS property fixes an element relative to the viewport?", difficulty:"hard", basePoints:20, answers:[
    {text:"position: fixed;", correct:true},
    {text:"position: absolute;", correct:false},
    {text:"fixed: true;", correct:false},
    {text:"lock-position;", correct:false}
  ]},

  {question:"Which HTML tag is used for emphasized text?", difficulty:"medium", basePoints:20, answers:[
    {text:"<em>", correct:true},
    {text:"<i>", correct:false},
    {text:"<strong>", correct:false},
    {text:"<mark>", correct:false}
  ]},

  {question:"Which CSS property creates space outside an element?", difficulty:"easy", basePoints:10, answers:[
    {text:"margin", correct:true},
    {text:"padding", correct:false},
    {text:"border", correct:false},
    {text:"spacing", correct:false}
  ]},

  {question:"Which HTML tag defines important text?", difficulty:"medium", basePoints:20, answers:[
    {text:"<strong>", correct:true},
    {text:"<important>", correct:false},
    {text:"<b>", correct:false},
    {text:"<imp>", correct:false}
  ]},

  {question:"Which CSS property rotates an element?", difficulty:"hard", basePoints:20, answers:[
    {text:"transform: rotate();", correct:true},
    {text:"rotate-element;", correct:false},
    {text:"rotation;", correct:false},
    {text:"element-rotate;", correct:false}
  ]},

  {question:"Which HTML tag creates a horizontal rule?", difficulty:"easy", basePoints:10, answers:[
    {text:"<hr>", correct:true},
    {text:"<line>", correct:false},
    {text:"<rule>", correct:false},
    {text:"<break-line>", correct:false}
  ]},

  {question:"Which CSS property sets transparency?", difficulty:"medium", basePoints:20, answers:[
    {text:"opacity", correct:true},
    {text:"visibility", correct:false},
    {text:"transparent", correct:false},
    {text:"alpha", correct:false}
  ]},

  {question:"Which HTML tag defines a label for an input?", difficulty:"medium", basePoints:20, answers:[
    {text:"<label>", correct:true},
    {text:"<input-label>", correct:false},
    {text:"<caption>", correct:false},
    {text:"<title>", correct:false}
  ]},

  {question:"Which CSS property creates a grid layout?", difficulty:"hard", basePoints:20, answers:[
    {text:"display: grid;", correct:true},
    {text:"layout: grid;", correct:false},
    {text:"grid: true;", correct:false},
    {text:"position: grid;", correct:false}
  ]},

  {question:"Which HTML tag is used for inline text container?", difficulty:"easy", basePoints:10, answers:[
    {text:"<span>", correct:true},
    {text:"<div>", correct:false},
    {text:"<inline>", correct:false},
    {text:"<text>", correct:false}
  ]}
]
};
