import { ArabicTriad, QuizQuestion } from './alphabetData';

export interface VowelLessonItem {
  id: string;
  category: 'courte' | 'longue' | 'tanwin' | 'signe';
  categoryLabel: string;
  symbolOnBa: string;
  arabicName: string;
  phoneticName: string;
  frenchName: string;
  soundValue: string;
  durationRule: string;
  placementRule: string;
  examples: ArabicTriad[];
}

export interface MinimalVowelPair {
  id: string;
  shortWord: ArabicTriad;
  longWord: ArabicTriad;
  pedagogicalPoint: string;
}

export interface GrammarRuleSection {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  keyTerm: ArabicTriad;
  explanation: string;
  tipForTeens: string;
  items: {
    label: string;
    triad: ArabicTriad;
    note: string;
  }[];
}

export const VOWELS_DATA: VowelLessonItem[] = [
  // 1. Voyelles courtes (Al-Harakāt Al-Qaṣīra)
  {
    id: 'fatha',
    category: 'courte',
    categoryLabel: 'Voyelle courte (1 temps)',
    symbolOnBa: 'بَ',
    arabicName: 'فَتْحَةٌ',
    phoneticName: 'Fatḥa',
    frenchName: 'L’ouverture (son « a » court)',
    soundValue: 'a (comme dans « ami »)',
    durationRule: '1 seul temps bref — on ouvre simplement la bouche.',
    placementRule: 'Petit trait oblique placé AU-DESSUS de la lettre.',
    examples: [
      { arabic: 'كَتَبَ', phonetic: 'Kataba', french: 'Il a écrit' },
      { arabic: 'ذَهَبَ', phonetic: 'Dhahaba', french: 'Il est parti / allé' },
      { arabic: 'سَجَدَ', phonetic: 'Sajada', french: 'Il s’est prosterné' }
    ]
  },
  {
    id: 'kasra',
    category: 'courte',
    categoryLabel: 'Voyelle courte (1 temps)',
    symbolOnBa: 'بِ',
    arabicName: 'كَسْرَةٌ',
    phoneticName: 'Kasra',
    frenchName: 'La brisure / le sourire (son « i » court)',
    soundValue: 'i (comme dans « ici »)',
    durationRule: '1 seul temps bref — la bouche sourit légèrement.',
    placementRule: 'Petit trait oblique placé EN DESSOUS de la lettre.',
    examples: [
      { arabic: 'بِسْمِ', phonetic: 'Bismi', french: 'Au nom de' },
      { arabic: 'عَلِمَ', phonetic: '‘Alima', french: 'Il a su / appris' },
      { arabic: 'سَمِعَ', phonetic: 'Sami‘a', french: 'Il a entendu' }
    ]
  },
  {
    id: 'damma',
    category: 'courte',
    categoryLabel: 'Voyelle courte (1 temps)',
    symbolOnBa: 'بُ',
    arabicName: 'ضَمَّةٌ',
    phoneticName: 'Ḍamma',
    frenchName: 'La réunion des lèvres (son « ou » court)',
    soundValue: 'u / ou (comme dans « outil »)',
    durationRule: '1 seul temps bref — les lèvres s’arrondissent.',
    placementRule: 'Petite boucle en forme de mini Wāw (و) placée AU-DESSUS de la lettre.',
    examples: [
      { arabic: 'كُتُبٌ', phonetic: 'Kutubun', french: 'Des livres' },
      { arabic: 'رُسُلٌ', phonetic: 'Rusulun', french: 'Des messagers' },
      { arabic: 'شُكْرٌ', phonetic: 'Chukrun', french: 'Un remerciement' }
    ]
  },

  // 2. Voyelles longues (Al-Mudūd — 2 temps)
  {
    id: 'madd-alif',
    category: 'longue',
    categoryLabel: 'Voyelle longue (2 temps)',
    symbolOnBa: 'بَا',
    arabicName: 'مَدٌّ بِالْأَلِفِ',
    phoneticName: 'Madd bil-Alif',
    frenchName: 'Prolongation en « ā » long (Fatḥa + Alif)',
    soundValue: 'ā (on allonge « aaa » sur 2 temps)',
    durationRule: '2 temps complets : la Fatḥa (ـَ) est prolongée par un Alif (ا) sans voyelle.',
    placementRule: 'Fatḥa sur la lettre + Alif juste après (ex : بَا = Bā).',
    examples: [
      { arabic: 'بَابٌ', phonetic: 'Bābun', french: 'Une porte' },
      { arabic: 'كِتَابٌ', phonetic: 'Kitābun', french: 'Un livre' },
      { arabic: 'سَلَامٌ', phonetic: 'Salāmun', french: 'La paix' }
    ]
  },
  {
    id: 'madd-waw',
    category: 'longue',
    categoryLabel: 'Voyelle longue (2 temps)',
    symbolOnBa: 'بُو',
    arabicName: 'مَدٌّ بِالْوَاوِ',
    phoneticName: 'Madd bil-Wāw',
    frenchName: 'Prolongation en « ū » long (Ḍamma + Wāw)',
    soundValue: 'ū / oû (on allonge « oûû » sur 2 temps)',
    durationRule: '2 temps complets : la Ḍamma (ـُ) est prolongée par un Wāw (و) sans voyelle.',
    placementRule: 'Ḍamma sur la lettre + Wāw juste après (ex : بُو = Bū).',
    examples: [
      { arabic: 'نُورٌ', phonetic: 'Nūrun', french: 'Une lumière' },
      { arabic: 'رَسُولٌ', phonetic: 'Rasūlun', french: 'Un messager' },
      { arabic: 'غَفُورٌ', phonetic: 'Ghafūrun', french: 'Très-Pardonneur' }
    ]
  },
  {
    id: 'madd-ya',
    category: 'longue',
    categoryLabel: 'Voyelle longue (2 temps)',
    symbolOnBa: 'بِي',
    arabicName: 'مَدٌّ بِالْيَاءِ',
    phoneticName: 'Madd bil-Yā’',
    frenchName: 'Prolongation en « ī » long (Kasra + Yā’)',
    soundValue: 'ī / î (on allonge « îîî » sur 2 temps)',
    durationRule: '2 temps complets : la Kasra (ـِ) est prolongée par un Yā’ (ي) sans voyelle.',
    placementRule: 'Kasra sous la lettre + Yā’ juste après (ex : بِي = Bī).',
    examples: [
      { arabic: 'دِينٌ', phonetic: 'Dīnun', french: 'Une religion / voie' },
      { arabic: 'كَرِيمٌ', phonetic: 'Karīmun', french: 'Généreux / noble' },
      { arabic: 'رَحِيمٌ', phonetic: 'Raḥīmun', french: 'Très-Miséricordieux' }
    ]
  },

  // 3. Tanwīn (Les doubles voyelles de fin de nom indéfini)
  {
    id: 'tanwin-damma',
    category: 'tanwin',
    categoryLabel: 'Tanwīn (fin de mot indéfini)',
    symbolOnBa: 'بٌ',
    arabicName: 'تَنْوِينُ الضَّمِّ',
    phoneticName: 'Dammatayn (-un)',
    frenchName: 'Double Ḍamma (son final « -un / -oun »)',
    soundValue: '-un (se prononce comme une Ḍamma suivie d’un « n »)',
    durationRule: 'S’utilise uniquement sur la DERNIÈRE lettre d’un nom indéfini (« un / une »).',
    placementRule: 'Deux petites Ḍamma au-dessus de la dernière lettre du mot.',
    examples: [
      { arabic: 'مَسْجِدٌ', phonetic: 'Masjidun', french: 'Une mosquée' },
      { arabic: 'قَلَمٌ', phonetic: 'Qalamun', french: 'Un stylo' },
      { arabic: 'بَيْتٌ', phonetic: 'Baytun', french: 'Une maison' }
    ]
  },
  {
    id: 'tanwin-fatha',
    category: 'tanwin',
    categoryLabel: 'Tanwīn (fin de mot indéfini)',
    symbolOnBa: 'بًا',
    arabicName: 'تَنْوِينُ الْفَتْحِ',
    phoneticName: 'Fatḥatayn (-an)',
    frenchName: 'Double Fatḥa (son final « -an »)',
    soundValue: '-an (comme « a » + « n »)',
    durationRule: 'Souvent suivi d’un Alif muet de support (ـًا), sauf sur la Tā’ Marbūta (ـةً).',
    placementRule: 'Deux traits obliques au-dessus de la dernière lettre.',
    examples: [
      { arabic: 'شُكْرًا', phonetic: 'Chukran', french: 'Merci' },
      { arabic: 'عَفْوًا', phonetic: '‘Afwan', french: 'De rien / pardon' },
      { arabic: 'أَهْلًا', phonetic: 'Ahlan', french: 'Bienvenue' }
    ]
  },
  {
    id: 'tanwin-kasra',
    category: 'tanwin',
    categoryLabel: 'Tanwīn (fin de mot indéfini)',
    symbolOnBa: 'بٍ',
    arabicName: 'تَنْوِينُ الْكَسْرِ',
    phoneticName: 'Kasratayn (-in)',
    frenchName: 'Double Kasra (son final « -in »)',
    soundValue: '-in (comme « i » + « n »)',
    durationRule: 'Placé sous la dernière lettre d’un nom après une préposition (ex: فِي بَيْتٍ = dans une maison).',
    placementRule: 'Deux traits obliques en dessous de la dernière lettre.',
    examples: [
      { arabic: 'بَيْتٍ', phonetic: 'Baytin', french: 'D’une maison / dans une maison' },
      { arabic: 'خَيْرٍ', phonetic: 'Khayrin', french: 'D’un bien (Bi-khayrin = Bien)' },
      { arabic: 'قَلْبٍ', phonetic: 'Qalbin', french: 'D’un cœur' }
    ]
  },

  // 4. Signes de lecture (Sukūn & Chadda)
  {
    id: 'sukun',
    category: 'signe',
    categoryLabel: 'Signe de lecture',
    symbolOnBa: 'أَبْ',
    arabicName: 'سُكُونٌ',
    phoneticName: 'Sukūn',
    frenchName: 'Le silence / l’arrêt sur la consonne',
    soundValue: 'Consonne pure sans voyelle (ex : أَبْ = Ab)',
    durationRule: 'On prononce uniquement le son de la consonne en s’appuyant sur la syllabe qui précède.',
    placementRule: 'Petit rond (ـْ) posé au-dessus de la lettre.',
    examples: [
      { arabic: 'مِنْ', phonetic: 'Min', french: 'De / depuis' },
      { arabic: 'قَلْبٌ', phonetic: 'Qalbun', french: 'Un cœur (Qal-bun)' },
      { arabic: 'شَمْسٌ', phonetic: 'Chamsun', french: 'Le soleil (Cham-sun)' }
    ]
  },
  {
    id: 'chadda',
    category: 'signe',
    categoryLabel: 'Signe de lecture',
    symbolOnBa: 'رَبٌّ',
    arabicName: 'شَدَّةٌ',
    phoneticName: 'Chadda',
    frenchName: 'Le doublement / l’appui sur la consonne',
    soundValue: 'Double consonne (comme « mm » dans pomme ou « bb » dans Rabb)',
    durationRule: 'Équivaut à 2 lettres identiques qui se suivent : la 1re avec Sukūn, la 2e avec une voyelle.',
    placementRule: 'Petit signe en forme de « w » (ـّ) placé au-dessus de la lettre.',
    examples: [
      { arabic: 'رَبٌّ', phonetic: 'Rabbun', french: 'Un Seigneur / Maître' },
      { arabic: 'أُمٌّ', phonetic: 'Ummun', french: 'Une mère' },
      { arabic: 'مُحَمَّدٌ', phonetic: 'Muḥammadun', french: 'Le Prophète Muhammad (ﷺ)' }
    ]
  }
];

export const MINIMAL_VOWEL_PAIRS: MinimalVowelPair[] = [
  {
    id: 'pair-1',
    shortWord: { arabic: 'جَمَلٌ', phonetic: 'Jamalun', french: 'Un chameau' },
    longWord: { arabic: 'جَمَالٌ', phonetic: 'Jamālun', french: 'La beauté' },
    pedagogicalPoint: 'Allonger le « a » après le Mīm (مَا) transforme « un chameau » en « la beauté » !'
  },
  {
    id: 'pair-2',
    shortWord: { arabic: 'عَلِمَ', phonetic: '‘Alima', french: 'Il a su' },
    longWord: { arabic: 'عَالِمٌ', phonetic: '‘Ālimun', french: 'Un savant / scientifique' },
    pedagogicalPoint: 'L’Alif de prolongation après le ‘Ayn (عَا) indique la personne qui fait l’action (le savant).'
  },
  {
    id: 'pair-3',
    shortWord: { arabic: 'كَتَبَ', phonetic: 'Kataba', french: 'Il a écrit' },
    longWord: { arabic: 'كَاتِبٌ', phonetic: 'Kātibun', french: 'Un écrivain / auteur' },
    pedagogicalPoint: 'Même logique : كَتَبَ (Kataba = il a écrit) devient كَاتِبٌ (Kātibun = un auteur).'
  },
  {
    id: 'pair-4',
    shortWord: { arabic: 'حَكَمَ', phonetic: 'Ḥakama', french: 'Il a jugé / arbitré' },
    longWord: { arabic: 'حَكِيمٌ', phonetic: 'Ḥakīmun', french: 'Sage / Plein de sagesse' },
    pedagogicalPoint: 'Le Madd bil-Yā’ (ـِي / ī long) donne l’adjectif intensif : حَكِيمٌ (Ḥakīmun — Sage).'
  },
  {
    id: 'pair-5',
    shortWord: { arabic: 'صَبَرَ', phonetic: 'Ṣabara', french: 'Il a patienté' },
    longWord: { arabic: 'صَبُورٌ', phonetic: 'Ṣabūrun', french: 'Très patient / endurant' },
    pedagogicalPoint: 'Le Madd bil-Wāw (ـُو / ū long) exprime une grande qualité : صَبُورٌ (Ṣabūrun — Très patient).'
  },
  {
    id: 'pair-6',
    shortWord: { arabic: 'مَلِكٌ', phonetic: 'Malikun', french: 'Un roi / souverain' },
    longWord: { arabic: 'مَالِكٌ', phonetic: 'Mālikun', french: 'Un possesseur / Maître' },
    pedagogicalPoint: 'Présent dans Sourate Al-Fātiha : مَالِكِ يَوْمِ الدِّينِ (Māliki yawmi d-dīn — Maître du Jour de la Rétribution).'
  }
];

export const GRAMMAR_A1_SECTIONS: GrammarRuleSection[] = [
  {
    id: 'al-solaire-lunaire',
    stepNumber: '01',
    title: 'L’Article Défini « Al- » (ال) : Lettres Lunaires vs Solaires',
    subtitle: 'Comment dire « Le / La / Les » en arabe et savoir quand prononcer le « L ».',
    keyTerm: { arabic: 'الْقَمَرُ وَالشَّمْسُ', phonetic: 'Al-Qamaru wa Ch-Chamsu', french: 'La Lune et le Soleil' },
    explanation:
      'En arabe, « Le / La / Les » s’écrit toujours الـ (Al-) attaché au début du nom. Lorsqu’un nom prend الـ, il perd son Tanwīn final (-un devient -u). Avec les 14 lettres Lunaires, on prononce clairement le L (Al-Qamaru). Avec les 14 lettres Solaires, le L fond dans la première lettre qui prend une Chadda (Ach-Chamsu).',
    tipForTeens:
      'Repère visuel immédiat dans le Coran et les livres : si tu vois un Sukūn sur le Lām (الْـ), prononce « Al- ». Si tu vois une Chadda sur la lettre d’après (الشّـ), double la lettre sans prononcer le L !',
    items: [
      {
        label: 'Lettre Lunaire (on entend le L)',
        triad: { arabic: 'الْقَمَرُ', phonetic: 'Al-Qamaru', french: 'La lune' },
        note: 'Le Qāf (ق) est lunaire : on prononce bien « Al-Qamaru ».'
      },
      {
        label: 'Lettre Lunaire (on entend le L)',
        triad: { arabic: 'الْمَسْجِدُ', phonetic: 'Al-Masjidu', french: 'La mosquée' },
        note: 'מَسْجِدٌ (Masjidun = une mosquée) devient الْمَسْجِدُ (Al-Masjidu = la mosquée).'
      },
      {
        label: 'Lettre Solaire (le L s’assimile)',
        triad: { arabic: 'الشَّمْسُ', phonetic: 'Ach-Chamsu', french: 'Le soleil' },
        note: 'On écrit الـ mais on prononce « Ach-Chamsu » (jamais Al-Chamsu).'
      },
      {
        label: 'Lettre Solaire (le L s’assimile)',
        triad: { arabic: 'السَّلَامُ', phonetic: 'As-Salāmu', french: 'La paix' },
        note: 'Comme dans السَّلَامُ عَلَيْكُمْ (As-salāmu ‘alaykum — Que la paix soit sur vous).'
      },
      {
        label: 'Lettre Solaire (le L s’assimile)',
        triad: { arabic: 'الرَّحْمَنُ الرَّحِيمُ', phonetic: 'Ar-Raḥmānu r-Raḥīmu', french: 'Le Tout-Miséricordieux, le Très-Miséricordieux' },
        note: 'La lettre ر (Rā’) est solaire : on dit « Ar-Raḥmān » avec un R doublé.'
      }
    ]
  },
  {
    id: 'masculin-feminin',
    stepNumber: '02',
    title: 'Le Masculin et le Féminin : La Tā’ Marbūta (ة / ـة)',
    subtitle: 'Reconnaître un mot féminin en un clin d’œil et savoir comment le prononcer à l’arrêt.',
    keyTerm: { arabic: 'تَاءٌ مَرْبُوطَةٌ (ة)', phonetic: 'Tā’ Marbūta', french: 'Le « Tā » attaché (marque du féminin)' },
    explanation:
      'Presque tous les noms et adjectifs féminins en arabe se terminent par la lettre ة (ou ـة quand elle est attachée). On l’appelle Tā’ Marbūta : c’est un Hā (ه) surmonté des 2 points du Tā (ت). En lecture continue, on prononce « -atun ». Quand on s’arrête à la fin de la phrase, on prononce simplement « -a / -ah ».',
    tipForTeens:
      'Pour passer un adjectif ou un métier du masculin au féminin, il suffit presque toujours d’ajouter ـة à la fin !',
    items: [
      {
        label: 'Masculin → Féminin (Étudiant)',
        triad: { arabic: 'طَالِبٌ ← طَالِبَةٌ', phonetic: 'Ṭālibun → Ṭālibatun', french: 'Un étudiant → Une étudiante' },
        note: 'Ajout de la Tā’ Marbūta (ـةٌ) à la fin du mot.'
      },
      {
        label: 'Masculin → Féminin (Croyant / Musulman)',
        triad: { arabic: 'مُسْلِمٌ ← مُسْلِمَةٌ', phonetic: 'Muslimun → Muslimatun', french: 'Un musulman → Une musulmane' },
        note: 'À l’arrêt à l’oral, « Muslimatun » se prononce « Muslima ».'
      },
      {
        label: 'Masculin → Féminin (Enseignant)',
        triad: { arabic: 'مُعَلِّمٌ ← مُعَلِّمَةٌ', phonetic: 'Mu‘allimun → Mu‘allimatun', french: 'Un professeur → Une professeure' },
        note: 'Même règle pour tous les métiers et adjectifs.'
      },
      {
        label: 'Nom féminin courant',
        triad: { arabic: 'مَدْرَسَةٌ كَبِيرَةٌ', phonetic: 'Madrasatun kabīratun', french: 'Une grande école' },
        note: 'L’adjectif كَبِيرَةٌ (kabīratun = grande) s’accorde au féminin avec مَدْرَسَةٌ (madrasatun).'
      }
    ]
  },
  {
    id: 'demonstratifs-phrases',
    stepNumber: '03',
    title: 'Construire sa 1re Phrase : « Hādhā » (هَذَا) & « Hādhihi » (هَذِهِ)',
    subtitle: 'En arabe, le verbe « être » au présent est sous-entendu : 2 mots suffisent pour faire une phrase complète !',
    keyTerm: { arabic: 'هَذَا وَهَذِهِ', phonetic: 'Hādhā wa Hādhihi', french: 'Ceci est (masc.) et Ceci est (fém.)' },
    explanation:
      'Pour dire « C’est un livre » ou « Voici une mosquée », l’arabe n’utilise pas de mot pour « est ». On place simplement هَذَا (Hādhā — pour un mot masculin) ou هَذِهِ (Hādhihi — pour un mot féminin) devant le nom indéfini.',
    tipForTeens:
      'Pour poser une question (« Qu’est-ce que c’est ? »), utilise مَا هَذَا ؟ (Mā hādhā ?). Pour demander « Qui est-ce ? » (pour une personne), utilise مَنْ هَذَا ؟ (Man hādhā ?).',
    items: [
      {
        label: 'Masculin : C’est / Voici',
        triad: { arabic: 'هَذَا كِتَابٌ', phonetic: 'Hādhā kitābun', french: 'Ceci est un livre' },
        note: 'Phrase nominale complète en deux mots.'
      },
      {
        label: 'Féminin : C’est / Voici',
        triad: { arabic: 'هَذِهِ مَدْرَسَةٌ', phonetic: 'Hādhihi madrasatun', french: 'Ceci est une école' },
        note: 'On utilise هَذِهِ (Hādhihi) car مَدْرَسَةٌ se termine par ة.'
      },
      {
        label: 'Question : Qu’est-ce que c’est ?',
        triad: { arabic: 'مَا هَذَا ؟ هَذَا مَسْجِدٌ', phonetic: 'Mā hādhā ? Hādhā masjidun', french: 'Qu’est-ce que c’est ? C’est une mosquée' },
        note: 'مَا (Mā) sert pour les objets et concepts.'
      },
      {
        label: 'Question : Qui est-ce ?',
        triad: { arabic: 'مَنْ هَذَا ؟ هَذَا صَدِيقِي', phonetic: 'Man hādhā ? Hādhā ṣadīqī', french: 'Qui est-ce ? C’est mon ami' },
        note: 'مَنْ (Man) sert pour les êtres humains.'
      }
    ]
  },
  {
    id: 'pronoms-personnels',
    stepNumber: '04',
    title: 'Les 6 Pronoms Personnels Indispensables (Al-Ḍamā’ir)',
    subtitle: 'Dire « Je, Tu (garçon), Tu (fille), Il, Elle, Nous » pour parler de soi et des autres.',
    keyTerm: { arabic: 'أَنَا · أَنْتَ · أَنْتِ · هُوَ · هِيَ · نَحْنُ', phonetic: 'Anā · Anta · Anti · Huwa · Hiya · Naḥnu', french: 'Je · Tu (m.) · Tu (f.) · Il · Elle · Nous' },
    explanation:
      'En arabe, « Tu » change selon qu’on s’adresse à un garçon (أَنْتَ — Anta, avec Fatḥa) ou à une fille (أَنْتِ — Anti, avec Kasra).',
    tipForTeens:
      'Retiens aussi les suffixes possessifs collés à la fin d’un nom : ـِي (-ī = mon/ma, ex: رَبِّي Rabbī = Mon Seigneur) et ـكَ (-ka = ton/ta, ex: دِينُكَ Dīnuka = Ta religion).',
    items: [
      {
        label: 'Je (Garçon ou Fille)',
        triad: { arabic: 'أَنَا طَالِبٌ فِي الْمَسْجِدِ', phonetic: 'Anā ṭālibun fī l-masjidi', french: 'Je suis élève à la mosquée' },
        note: 'أَنَا (Anā) s’utilise aussi bien au masculin qu’au féminin.'
      },
      {
        label: 'Tu (Masculin)',
        triad: { arabic: 'أَنْتَ صَدِيقٌ أَمِينٌ', phonetic: 'Anta ṣadīqun amīnun', french: 'Tu es un ami digne de confiance' },
        note: 'Fatḥa sur le Tā : أَنْتَ (Anta).'
      },
      {
        label: 'Tu (Féminin)',
        triad: { arabic: 'أَنْتِ طَالِبَةٌ مُجْتَهِدَةٌ', phonetic: 'Anti ṭālibatun mujtahidatun', french: 'Tu es une élève sérieuse / appliquée' },
        note: 'Kasra sous le Tā : أَنْتِ (Anti).'
      },
      {
        label: 'Il & Elle',
        triad: { arabic: 'هُوَ أَخِي وَهِيَ أُخْتِي', phonetic: 'Huwa akhī wa hiya ukhtī', french: 'Il est mon frère et elle est ma sœur' },
        note: 'هُوَ (Huwa = Il) · هِيَ (Hiya = Elle).'
      },
      {
        label: 'Nous',
        triad: { arabic: 'نَحْنُ مُسْلِمُونَ', phonetic: 'Naḥnu muslimūna', french: 'Nous sommes musulmans' },
        note: 'نَحْنُ (Naḥnu = Nous).'
      }
    ]
  }
];

export const VOWELS_QUIZ: QuizQuestion[] = [
  {
    id: 'vow-q1',
    question: 'Comment s’appelle la voyelle courte placée EN DESSOUS de la lettre et qui donne le son « i » ?',
    arabicPrompt: { arabic: 'بِسْمِ اللَّهِ', phonetic: 'Bismi Llāhi', french: 'Au nom d’Allah' },
    options: [
      'La Kasra (ـِ — son « i »)',
      'La Fatḥa (ـَ — son « a »)',
      'La Ḍamma (ـُ — son « u / ou »)',
      'Le Sukūn (ـْ — silence)'
    ],
    correctIndex: 0,
    explanation: 'La Kasra (كَسْرَةٌ) se place toujours sous la lettre et se prononce « i », comme dans بِسْمِ (Bismi — Au nom de).'
  },
  {
    id: 'vow-q2',
    question: 'Quelle est la différence de prononciation et de sens entre جَمَلٌ (Jamalun) et جَمَالٌ (Jamālun) ?',
    arabicPrompt: { arabic: 'جَمَلٌ ≠ جَمَالٌ', phonetic: 'Jamalun ≠ Jamālun', french: 'Un chameau ≠ La beauté' },
    options: [
      'جَمَلٌ (a court) signifie « Un chameau » et جَمَالٌ (ā long avec Alif) signifie « La beauté »',
      'Ce sont exactement les mêmes mots écrits différemment',
      'Le premier est au pluriel et le second est au singulier',
      'L’Alif sert uniquement à décorer le mot'
    ],
    correctIndex: 0,
    explanation: 'En arabe, une voyelle longue (2 temps) change complètement le sens du mot : جَمَلٌ (Jamalun = un chameau) vs جَمَالٌ (Jamālun = la beauté).'
  },
  {
    id: 'vow-q3',
    question: 'Que signifie le signe Chadda (ـّ) placé sur le Bā dans le mot رَبٌّ (Rabbun — Un Seigneur) ?',
    arabicPrompt: { arabic: 'رَبٌّ', phonetic: 'Rabbun', french: 'Un Seigneur / Maître' },
    options: [
      'On double la consonne en appuyant dessus (bb)',
      'On ne prononce pas la lettre',
      'On prononce un « n » à la fin',
      'On allonge la voyelle pendant 4 temps'
    ],
    correctIndex: 0,
    explanation: 'La Chadda (شَدَّةٌ) indique que la consonne est doublée : رَبٌّ se lit « Rabbun ».'
  },
  {
    id: 'vow-q4',
    question: 'Comment se lit le Tanwīn final dans le mot شُكْرًا (Chukran — Merci) ?',
    arabicPrompt: { arabic: 'شُكْرًا', phonetic: 'Chukran', french: 'Merci' },
    options: [
      'Avec le son « -an » (Fatḥatayn)',
      'Avec le son « -un » (Dammatayn)',
      'Avec le son « -in » (Kasratayn)',
      'Avec un long « ā » sans « n »'
    ],
    correctIndex: 0,
    explanation: 'Les deux Fatḥa (ـًـا) à la fin du mot forment le Tanwīn Fatḥatayn qui se prononce « -an » : شُكْرًا (Chukran — Merci).'
  },
  {
    id: 'vow-q5',
    question: 'Quelles sont les 3 lettres qui servent à prolonger les voyelles longues (Al-Mudūd) sur 2 temps ?',
    arabicPrompt: { arabic: 'بَا · بُو · بِي', phonetic: 'Bā · Bū · Bī', french: 'Syllabes longues (ā, ū, ī)' },
    options: [
      'Alif (ا pour ā), Wāw (و pour ū) et Yā’ (ي pour ī)',
      'Bā’ (ب), Tā’ (ت) et Thā’ (ث)',
      'Jīm (ج), Ḥā’ (ح) et Khā’ (خ)',
      'Sīn (س), Chīn (ش) et Ṣād (ص)'
    ],
    correctIndex: 0,
    explanation: 'Les 3 lettres de prolongation sont ا (après Fatḥa → ā), و (après Ḍamma → ū) et ي (après Kasra → ī).'
  }
];

export const GRAMMAR_A1_QUIZ: QuizQuestion[] = [
  {
    id: 'gram-q1',
    question: 'Pourquoi prononce-t-on « Ach-Chamsu » (الشَّمْسُ — Le soleil) sans entendre le « L » de l’article الـ ?',
    arabicPrompt: { arabic: 'الشَّمْسُ', phonetic: 'Ach-Chamsu', french: 'Le soleil' },
    options: [
      'Parce que ش (Chīn) est une lettre Solaire : le L s’assimile et le ش prend une Chadda',
      'Parce qu’il y a une faute d’impression dans le mot',
      'Parce qu’on ne prononce jamais le L en arabe',
      'Parce que le mot est au pluriel'
    ],
    correctIndex: 0,
    explanation: 'Devant les 14 lettres Solaires (comme ش, س, ر, ت, د, ن...), le L de « Al- » fond dans la lettre suivante qui est doublée : الشَّمْسُ (Ach-Chamsu).'
  },
  {
    id: 'gram-q2',
    question: 'Quelle lettre placée à la fin d’un nom indique presque toujours le FÉMININ singulier ?',
    arabicPrompt: { arabic: 'مَدْرَسَةٌ · صَلَاةٌ · رَحْمَةٌ', phonetic: 'Madrasatun · Ṣalātun · Raḥmatun', french: 'Une école · Une prière · Une miséricorde' },
    options: [
      'La Tā’ Marbūta (ة / ـة)',
      'Le Mīm (م)',
      'Le Wāw (و)',
      'Le Kāf (ك)'
    ],
    correctIndex: 0,
    explanation: 'La Tā’ Marbūta (ة / ـة) est la marque du féminin singulier en arabe.'
  },
  {
    id: 'gram-q3',
    question: 'Comment dit-on « Ceci est une école » en arabe ?',
    arabicPrompt: { arabic: 'هَذِهِ مَدْرَسَةٌ', phonetic: 'Hādhihi madrasatun', french: 'Ceci est une école' },
    options: [
      'هَذِهِ مَدْرَسَةٌ (Hādhihi madrasatun)',
      'هَذَا مَدْرَسَةٌ (Hādhā madrasatun)',
      'أَنَا مَدْرَسَةٌ (Anā madrasatun)',
      'أَنْتَ مَدْرَسَةٌ (Anta madrasatun)'
    ],
    correctIndex: 0,
    explanation: 'Comme مَدْرَسَةٌ (Madrasatun — Une école) est féminin (se termine par ة), on utilise le démonstratif féminin هَذِهِ (Hādhihi).'
  },
  {
    id: 'gram-q4',
    question: 'Quelle est la différence entre أَنْتَ (Anta) et أَنْتِ (Anti) ?',
    arabicPrompt: { arabic: 'أَنْتَ · أَنْتِ', phonetic: 'Anta · Anti', french: 'Tu (masculin) · Tu (féminin)' },
    options: [
      'أَنْتَ (Anta) signifie « Tu » pour un garçon, et أَنْتِ (Anti) signifie « Tu » pour une fille',
      'أَنْتَ veut dire « Je » et أَنْتِ veut dire « Nous »',
      'Les deux s’utilisent uniquement au pluriel',
      'Il n’y a aucune différence'
    ],
    correctIndex: 0,
    explanation: 'Avec Fatḥa (أَنْتَ — Anta), on s’adresse à un garçon. Avec Kasra (أَنْتِ — Anti), on s’adresse à une fille.'
  },
  {
    id: 'gram-q5',
    question: 'Que signifie la phrase : أَنَا طَالِبٌ فِي الْمَسْجِدِ (Anā ṭālibun fī l-masjidi) ?',
    arabicPrompt: { arabic: 'أَنَا طَالِبٌ فِي الْمَسْجِدِ', phonetic: 'Anā ṭālibun fī l-masjidi', french: 'Je suis élève à la mosquée' },
    options: [
      'Je suis élève à la mosquée',
      'Où se trouve la mosquée ?',
      'Le professeur écrit dans le livre',
      'Nous allons à l’école demain'
    ],
    correctIndex: 0,
    explanation: 'أَنَا (Anā = Je) + طَالِبٌ (ṭālibun = un élève/étudiant) + فِي (fī = dans/à) + الْمَسْجِدِ (al-masjidi = la mosquée).'
  }
];
