export interface ArabicTriad {
  arabic: string;
  phonetic: string;
  french: string;
}

export interface ArabicLetter {
  id: string;
  order: number;
  arabic: string;
  nameArabic: string;
  namePhonetic: string;
  nameFrench: string;
  frenchEquivalent: string;
  articulationTip: string;
  group: 1 | 2 | 3 | 4;
  groupTitle: string;
  connectsAfter: boolean;
  solarOrLunar: 'lunaire' | 'solaire';
  forms: {
    isolated: string;
    initial: string;
    medial: string;
    final: string;
  };
  exampleWord: ArabicTriad;
  secondExample: ArabicTriad;
}

export interface QuizQuestion {
  id: string;
  question: string;
  arabicPrompt?: ArabicTriad;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const ALPHABET_GROUPS = [
  {
    group: 1 as const,
    title: 'Étape 1 : Alif & Les Lettres « Bateaux »',
    subtitle: 'On commence tout doucement avec les lettres qui partagent la même forme de base.',
    pedagogicalNote:
      'Astuce mémo : ب (1 point en bas), ت (2 points en haut), ث (3 points en haut), ن (1 point au cœur du bol), ي (2 points en bas).'
  },
  {
    group: 2 as const,
    title: 'Étape 2 : Les Trios & Duos Jumeaux',
    subtitle: 'Des lettres qui se ressemblent deux par deux ou trois par trois : seul le point change !',
    pedagogicalNote:
      'Attention : د (Dāl), ذ (Dhāl), ر (Rā) et ز (Zāy) font partie des 6 lettres qui ne s’attachent jamais à gauche.'
  },
  {
    group: 3 as const,
    title: 'Étape 3 : Les Boucles & Sons Emphatiques',
    subtitle: 'Les sons sifflants et les sons graves (emphatiques) propres à la langue arabe.',
    pedagogicalNote:
      'Pour les lettres emphatiques (ص ض ط ظ), la langue se creuse légèrement pour donner un son plus plein et grave.'
  },
  {
    group: 4 as const,
    title: 'Étape 4 : Les Lettres Profondes & Fluides',
    subtitle: 'Les dernières lettres très fréquentes dans les mots du quotidien et du Coran.',
    pedagogicalNote:
      'Bravo ! Avec cette 4e étape, tu connais les 28 lettres de l’alphabet arabe dans leurs 4 positions.'
  }
];

export const ARABIC_ALPHABET: ArabicLetter[] = [
  {
    id: 'alif',
    order: 1,
    arabic: 'ا',
    nameArabic: 'أَلِفٌ',
    namePhonetic: 'Alif',
    nameFrench: 'Lettre Alif (support de voyelle / ā long)',
    frenchEquivalent: 'Son « a » avec Hamza (أَ) ou prolongation « ā »',
    articulationTip: 'Trait vertical simple. C’est une lettre qui ne s’attache jamais à la lettre qui suit (à gauche).',
    group: 1,
    groupTitle: 'Étape 1 : Alif & Les Lettres « Bateaux »',
    connectsAfter: false,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا' },
    exampleWord: { arabic: 'أَسَدٌ', phonetic: 'Asadun', french: 'Un lion' },
    secondExample: { arabic: 'أَبٌ', phonetic: 'Abun', french: 'Un père' }
  },
  {
    id: 'ba',
    order: 2,
    arabic: 'ب',
    nameArabic: 'بَاءٌ',
    namePhonetic: 'Bā’',
    nameFrench: 'Lettre Bā (son B)',
    frenchEquivalent: 'Comme « b » dans bateau',
    articulationTip: 'Forme de barque plate avec 1 seul point placé en dessous.',
    group: 1,
    groupTitle: 'Étape 1 : Alif & Les Lettres « Bateaux »',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' },
    exampleWord: { arabic: 'بَيْتٌ', phonetic: 'Baytun', french: 'Une maison' },
    secondExample: { arabic: 'بَابٌ', phonetic: 'Bābun', french: 'Une porte' }
  },
  {
    id: 'ta',
    order: 3,
    arabic: 'ت',
    nameArabic: 'تَاءٌ',
    namePhonetic: 'Tā’',
    nameFrench: 'Lettre Tā (son T doux)',
    frenchEquivalent: 'Comme « t » dans tapis',
    articulationTip: 'Même barque que le Bā, mais avec 2 points au-dessus (comme deux yeux).',
    group: 1,
    groupTitle: 'Étape 1 : Alif & Les Lettres « Bateaux »',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' },
    exampleWord: { arabic: 'تَمْرٌ', phonetic: 'Tamrun', french: 'Des dattes' },
    secondExample: { arabic: 'تِلْمِيذٌ', phonetic: 'Tilmīdhun', french: 'Un élève' }
  },
  {
    id: 'tha',
    order: 4,
    arabic: 'ث',
    nameArabic: 'ثَاءٌ',
    namePhonetic: 'Thā’',
    nameFrench: 'Lettre Thā (son « th » sur le bout de la langue)',
    frenchEquivalent: 'Comme « th » anglais dans think',
    articulationTip: 'Pose légèrement le bout de la langue entre les dents du haut et du bas et souffle.',
    group: 1,
    groupTitle: 'Étape 1 : Alif & Les Lettres « Bateaux »',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' },
    exampleWord: { arabic: 'ثَوْبٌ', phonetic: 'Thawbun', french: 'Un vêtement / habit' },
    secondExample: { arabic: 'ثَلْجٌ', phonetic: 'Thaljun', french: 'De la neige' }
  },
  {
    id: 'jim',
    order: 5,
    arabic: 'ج',
    nameArabic: 'جِيمٌ',
    namePhonetic: 'Jīm',
    nameFrench: 'Lettre Jīm (son Dj / J)',
    frenchEquivalent: 'Comme « dj » dans djembé ou « j » dans jardin',
    articulationTip: 'Une vague avec un point au milieu du ventre (ou en dessous en début de mot : جـ).',
    group: 2,
    groupTitle: 'Étape 2 : Les Trios & Duos Jumeaux',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' },
    exampleWord: { arabic: 'جَمَلٌ', phonetic: 'Jamalun', french: 'Un chameau' },
    secondExample: { arabic: 'مَسْجِدٌ', phonetic: 'Masjidun', french: 'Une mosquée' }
  },
  {
    id: 'ha',
    order: 6,
    arabic: 'ح',
    nameArabic: 'حَاءٌ',
    namePhonetic: 'Ḥā’',
    nameFrench: 'Lettre Ḥā (souffle chaud de la gorge)',
    frenchEquivalent: 'Comme quand on fait de la buée sur ses lunettes (sans racler)',
    articulationTip: 'Exactement la même forme que ج mais SANS aucun point. Son pur qui vient du milieu de la gorge.',
    group: 2,
    groupTitle: 'Étape 2 : Les Trios & Duos Jumeaux',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' },
    exampleWord: { arabic: 'حَمْدٌ', phonetic: 'Ḥamdun', french: 'Une louange / gratitude' },
    secondExample: { arabic: 'حَلِيبٌ', phonetic: 'Ḥalībun', french: 'Du lait' }
  },
  {
    id: 'kha',
    order: 7,
    arabic: 'خ',
    nameArabic: 'خَاءٌ',
    namePhonetic: 'Khā’',
    nameFrench: 'Lettre Khā (son « kh » / jota espagnole)',
    frenchEquivalent: 'Comme la « jota » espagnole ou « ch » allemand dans Bach',
    articulationTip: 'Même forme que ج et ح mais avec 1 point tout en haut sur la tête.',
    group: 2,
    groupTitle: 'Étape 2 : Les Trios & Duos Jumeaux',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' },
    exampleWord: { arabic: 'خُبْزٌ', phonetic: 'Khubzun', french: 'Du pain' },
    secondExample: { arabic: 'خَيْرٌ', phonetic: 'Khayrun', french: 'Un bien / bienfait' }
  },
  {
    id: 'dal',
    order: 8,
    arabic: 'د',
    nameArabic: 'دَالٌ',
    namePhonetic: 'Dāl',
    nameFrench: 'Lettre Dāl (son D)',
    frenchEquivalent: 'Comme « d » dans date',
    articulationTip: 'Petite équerre posée sur la ligne. Ne s’attache jamais à la lettre qui suit !',
    group: 2,
    groupTitle: 'Étape 2 : Les Trios & Duos Jumeaux',
    connectsAfter: false,
    solarOrLunar: 'solaire',
    forms: { isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد' },
    exampleWord: { arabic: 'دِينٌ', phonetic: 'Dīnun', french: 'Une religion / éthique de vie' },
    secondExample: { arabic: 'دَرْسٌ', phonetic: 'Darsun', french: 'Un cours / une leçon' }
  },
  {
    id: 'dhal',
    order: 9,
    arabic: 'ذ',
    nameArabic: 'ذَالٌ',
    namePhonetic: 'Dhāl',
    nameFrench: 'Lettre Dhāl (son « dh » doux sur la langue)',
    frenchEquivalent: 'Comme « th » anglais dans this / mother',
    articulationTip: 'La jumelle du Dāl avec 1 point au-dessus. Le bout de la langue touche les dents du haut en vibrant.',
    group: 2,
    groupTitle: 'Étape 2 : Les Trios & Duos Jumeaux',
    connectsAfter: false,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ' },
    exampleWord: { arabic: 'ذِكْرٌ', phonetic: 'Dhikrun', french: 'Le rappel / l’invocation' },
    secondExample: { arabic: 'ذَهَبٌ', phonetic: 'Dhahabun', french: 'De l’or' }
  },
  {
    id: 'ra',
    order: 10,
    arabic: 'ر',
    nameArabic: 'رَاءٌ',
    namePhonetic: 'Rā’',
    nameFrench: 'Lettre Rā (son R roulé léger)',
    frenchEquivalent: 'R roulé du bout de la langue (comme en espagnol ou italien)',
    articulationTip: 'Glisse sous la ligne d’écriture comme un toboggan. Ne s’attache pas à gauche.',
    group: 2,
    groupTitle: 'Étape 2 : Les Trios & Duos Jumeaux',
    connectsAfter: false,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر' },
    exampleWord: { arabic: 'رَحْمَةٌ', phonetic: 'Raḥmatun', french: 'Une miséricorde / bonté' },
    secondExample: { arabic: 'رَسُولٌ', phonetic: 'Rasūlun', french: 'Un messager' }
  },
  {
    id: 'zay',
    order: 11,
    arabic: 'ز',
    nameArabic: 'زَايٌ',
    namePhonetic: 'Zāy',
    nameFrench: 'Lettre Zāy (son Z)',
    frenchEquivalent: 'Comme « z » dans zéro',
    articulationTip: 'Jumelle du Rā avec 1 point au-dessus. Ne s’attache pas non plus à gauche.',
    group: 2,
    groupTitle: 'Étape 2 : Les Trios & Duos Jumeaux',
    connectsAfter: false,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز' },
    exampleWord: { arabic: 'زَيْتُونٌ', phonetic: 'Zaytūnun', french: 'Des olives' },
    secondExample: { arabic: 'زَكَاةٌ', phonetic: 'Zakātun', french: 'L’aumône purificatrice' }
  },
  {
    id: 'sin',
    order: 12,
    arabic: 'س',
    nameArabic: 'سِينٌ',
    namePhonetic: 'Sīn',
    nameFrench: 'Lettre Sīn (son S doux)',
    frenchEquivalent: 'Comme « s » dans soleil',
    articulationTip: 'Trois petites dents suivies d’une grande coupe. En début/milieu, elle garde ses 3 petites dents : سـ.',
    group: 3,
    groupTitle: 'Étape 3 : Les Boucles & Sons Emphatiques',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' },
    exampleWord: { arabic: 'سَلَامٌ', phonetic: 'Salāmun', french: 'La paix / le salut' },
    secondExample: { arabic: 'سَمَاءٌ', phonetic: 'Samā’un', french: 'Le ciel' }
  },
  {
    id: 'shin',
    order: 13,
    arabic: 'ش',
    nameArabic: 'شِينٌ',
    namePhonetic: 'Chīn',
    nameFrench: 'Lettre Chīn (son « ch »)',
    frenchEquivalent: 'Comme « ch » dans chemin',
    articulationTip: 'Même forme à 3 dents que Sīn, surmontée de 3 points en triangle.',
    group: 3,
    groupTitle: 'Étape 3 : Les Boucles & Sons Emphatiques',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' },
    exampleWord: { arabic: 'شَمْسٌ', phonetic: 'Chamsun', french: 'Le soleil' },
    secondExample: { arabic: 'شُكْرٌ', phonetic: 'Chukrun', french: 'Le remerciement' }
  },
  {
    id: 'sad',
    order: 14,
    arabic: 'ص',
    nameArabic: 'صَادٌ',
    namePhonetic: 'Ṣād',
    nameFrench: 'Lettre Ṣād (son S grave / emphatique)',
    frenchEquivalent: 'Un « S » grave et plein, bouche arrondie',
    articulationTip: 'Une boucle allongée suivie d’une petite dent : صـ.',
    group: 3,
    groupTitle: 'Étape 3 : Les Boucles & Sons Emphatiques',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' },
    exampleWord: { arabic: 'صَلَاةٌ', phonetic: 'Ṣalātun', french: 'La prière' },
    secondExample: { arabic: 'صَبْرٌ', phonetic: 'Ṣabrun', french: 'La patience / persévérance' }
  },
  {
    id: 'dad',
    order: 15,
    arabic: 'ض',
    nameArabic: 'ضَادٌ',
    namePhonetic: 'Ḍād',
    nameFrench: 'Lettre Ḍād (son D grave / emphatique)',
    frenchEquivalent: 'Un « D » grave et profond (l’arabe est appelé la langue du Ḍād)',
    articulationTip: 'Jumelle du Ṣād avec 1 point au-dessus de la boucle.',
    group: 3,
    groupTitle: 'Étape 3 : Les Boucles & Sons Emphatiques',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' },
    exampleWord: { arabic: 'رَمَضَانُ', phonetic: 'Ramaḍānu', french: 'Le mois de Ramadan' },
    secondExample: { arabic: 'أَرْضٌ', phonetic: 'Arḍun', french: 'La terre' }
  },
  {
    id: 'ta_emph',
    order: 16,
    arabic: 'ط',
    nameArabic: 'طَاءٌ',
    namePhonetic: 'Ṭā’',
    nameFrench: 'Lettre Ṭā (son T grave / emphatique)',
    frenchEquivalent: 'Un « T » grave et résonnant',
    articulationTip: 'Une boucle surmontée d’une barre verticale. Elle garde sa barre dans toutes les positions !',
    group: 3,
    groupTitle: 'Étape 3 : Les Boucles & Sons Emphatiques',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' },
    exampleWord: { arabic: 'طَالِبٌ', phonetic: 'Ṭālibun', french: 'Un étudiant / lycéen' },
    secondExample: { arabic: 'طَرِيقٌ', phonetic: 'Ṭarīqun', french: 'Un chemin / une voie' }
  },
  {
    id: 'dha_emph',
    order: 17,
    arabic: 'ظ',
    nameArabic: 'ظَاءٌ',
    namePhonetic: 'Ẓā’',
    nameFrench: 'Lettre Ẓā (son Dh grave / emphatique)',
    frenchEquivalent: 'Son « dh » (bout de la langue) prononcé de façon grave',
    articulationTip: 'Jumelle du Ṭā avec 1 point à côté de sa barre verticale.',
    group: 3,
    groupTitle: 'Étape 3 : Les Boucles & Sons Emphatiques',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' },
    exampleWord: { arabic: 'ظُهْرٌ', phonetic: 'Ẓuhrun', french: 'Le midi / la prière du Dhuhr' },
    secondExample: { arabic: 'عَظِيمٌ', phonetic: '‘Aẓīmun', french: 'Immense / grandiose' }
  },
  {
    id: 'ayn',
    order: 18,
    arabic: 'ع',
    nameArabic: 'عَيْنٌ',
    namePhonetic: '‘Ayn',
    nameFrench: 'Lettre ‘Ayn (son profond de la gorge)',
    frenchEquivalent: 'Son guttural typique de l’arabe, noté par une apostrophe inversée « ‘ »',
    articulationTip: 'En milieu et fin de mot (ـعـ / ـع), sa petite tête se ferme souvent en triangle.',
    group: 3,
    groupTitle: 'Étape 3 : Les Boucles & Sons Emphatiques',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' },
    exampleWord: { arabic: 'عِلْمٌ', phonetic: '‘Ilmun', french: 'La science / le savoir' },
    secondExample: { arabic: 'عَمَلٌ', phonetic: '‘Amalun', french: 'Une action / un travail' }
  },
  {
    id: 'ghayn',
    order: 19,
    arabic: 'غ',
    nameArabic: 'غَيْنٌ',
    namePhonetic: 'Ghayn',
    nameFrench: 'Lettre Ghayn (proche du R parisien doux)',
    frenchEquivalent: 'Très proche du « r » français dans « rue » ou d’un gargarisme léger',
    articulationTip: 'Facile pour les francophones ! C’est la jumelle du ‘Ayn avec 1 point au-dessus.',
    group: 3,
    groupTitle: 'Étape 3 : Les Boucles & Sons Emphatiques',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' },
    exampleWord: { arabic: 'غَفُورٌ', phonetic: 'Ghafūrun', french: 'Très-Pardonneur' },
    secondExample: { arabic: 'مَغْرِبٌ', phonetic: 'Maghribun', french: 'Le coucher du soleil (Maghrib)' }
  },
  {
    id: 'fa',
    order: 20,
    arabic: 'ف',
    nameArabic: 'فَاءٌ',
    namePhonetic: 'Fā’',
    nameFrench: 'Lettre Fā (son F)',
    frenchEquivalent: 'Comme « f » dans fleur',
    articulationTip: 'Une petite tête ronde posée sur une barque plate avec 1 seul point au-dessus.',
    group: 4,
    groupTitle: 'Étape 4 : Les Lettres Profondes & Fluides',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' },
    exampleWord: { arabic: 'فَجْرٌ', phonetic: 'Fajrun', french: 'L’aube (prière du Fajr)' },
    secondExample: { arabic: 'فَهْمٌ', phonetic: 'Fahmun', french: 'La compréhension' }
  },
  {
    id: 'qaf',
    order: 21,
    arabic: 'ق',
    nameArabic: 'قَافٌ',
    namePhonetic: 'Qāf',
    nameFrench: 'Lettre Qāf (son Q profond du fond du palais)',
    frenchEquivalent: 'Un « K » prononcé tout au fond de la bouche (transcrit Q)',
    articulationTip: 'Ressemble au Fā mais avec 2 points au-dessus et une coupe plus arrondie en position isolée.',
    group: 4,
    groupTitle: 'Étape 4 : Les Lettres Profondes & Fluides',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' },
    exampleWord: { arabic: 'قُرْآنٌ', phonetic: 'Qur’ānun', french: 'Le Coran (la Récitation)' },
    secondExample: { arabic: 'قَلْبٌ', phonetic: 'Qalbun', french: 'Un cœur' }
  },
  {
    id: 'kaf',
    order: 22,
    arabic: 'ك',
    nameArabic: 'كَافٌ',
    namePhonetic: 'Kāf',
    nameFrench: 'Lettre Kāf (son K léger)',
    frenchEquivalent: 'Comme « k » dans kimono ou « c » dans cahier',
    articulationTip: 'En début et milieu de mot, elle change de forme et ressemble à un éclair penché : كـ / ـكـ.',
    group: 4,
    groupTitle: 'Étape 4 : Les Lettres Profondes & Fluides',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك' },
    exampleWord: { arabic: 'كِتَابٌ', phonetic: 'Kitābun', french: 'Un livre' },
    secondExample: { arabic: 'كَرِيمٌ', phonetic: 'Karīmun', french: 'Généreux / noble' }
  },
  {
    id: 'lam',
    order: 23,
    arabic: 'ل',
    nameArabic: 'لَامٌ',
    namePhonetic: 'Lām',
    nameFrench: 'Lettre Lām (son L)',
    frenchEquivalent: 'Comme « l » dans lumière',
    articulationTip: 'Attention : contrairement à l’Alif (ا), le Lām (لـ) s’attache à gauche ! Avec Alif, il forme لا (Lā).',
    group: 4,
    groupTitle: 'Étape 4 : Les Lettres Profondes & Fluides',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' },
    exampleWord: { arabic: 'لَيْلٌ', phonetic: 'Laylun', french: 'Une nuit' },
    secondExample: { arabic: 'لُغَةٌ', phonetic: 'Lughatun', french: 'Une langue / un langage' }
  },
  {
    id: 'mim',
    order: 24,
    arabic: 'م',
    nameArabic: 'مِيمٌ',
    namePhonetic: 'Mīm',
    nameFrench: 'Lettre Mīm (son M)',
    frenchEquivalent: 'Comme « m » dans maman',
    articulationTip: 'Une petite perle ronde posée sur la ligne en début et milieu de mot : مـ / ـمـ.',
    group: 4,
    groupTitle: 'Étape 4 : Les Lettres Profondes & Fluides',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' },
    exampleWord: { arabic: 'مَدْرَسَةٌ', phonetic: 'Madrasatun', french: 'Une école' },
    secondExample: { arabic: 'مَاءٌ', phonetic: 'Mā’un', french: 'De l’eau' }
  },
  {
    id: 'nun',
    order: 25,
    arabic: 'ن',
    nameArabic: 'نُونٌ',
    namePhonetic: 'Nūn',
    nameFrench: 'Lettre Nūn (son N)',
    frenchEquivalent: 'Comme « n » dans nuage',
    articulationTip: 'En début et milieu (نـ / ـنـ), elle ressemble aux lettres bateaux avec 1 point au-dessus.',
    group: 1,
    groupTitle: 'Étape 1 : Alif & Les Lettres « Bateaux »',
    connectsAfter: true,
    solarOrLunar: 'solaire',
    forms: { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' },
    exampleWord: { arabic: 'نُورٌ', phonetic: 'Nūrun', french: 'Une lumière' },
    secondExample: { arabic: 'نَبِيٌّ', phonetic: 'Nabiyyun', french: 'Un prophète' }
  },
  {
    id: 'ha_light',
    order: 26,
    arabic: 'ه',
    nameArabic: 'هَاءٌ',
    namePhonetic: 'Hā’',
    nameFrench: 'Lettre Hā (souffle léger de la poitrine)',
    frenchEquivalent: 'Comme « h » anglais dans hello',
    articulationTip: 'Change de costume selon sa place : ه (isolée), هـ (début), ـهـ (papillon au milieu), ـه (fin).',
    group: 4,
    groupTitle: 'Étape 4 : Les Lettres Profondes & Fluides',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه' },
    exampleWord: { arabic: 'هُدًى', phonetic: 'Hudan', french: 'Une guidée / bonne direction' },
    secondExample: { arabic: 'هِلَالٌ', phonetic: 'Hilālun', french: 'Un croissant de lune' }
  },
  {
    id: 'waw',
    order: 27,
    arabic: 'و',
    nameArabic: 'وَاوٌ',
    namePhonetic: 'Wāw',
    nameFrench: 'Lettre Wāw (son « ou / w » ou voyelle longue ū)',
    frenchEquivalent: 'Comme « w » dans watt / « oi » dans oui, ou son long « oû »',
    articulationTip: 'Boucle avec toboggan. Fait partie des 6 lettres qui ne s’attachent jamais à gauche.',
    group: 4,
    groupTitle: 'Étape 4 : Les Lettres Profondes & Fluides',
    connectsAfter: false,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو' },
    exampleWord: { arabic: 'وَلَدٌ', phonetic: 'Waladun', french: 'Un garçon / enfant' },
    secondExample: { arabic: 'وَقْتٌ', phonetic: 'Waqtun', french: 'Le temps / l’heure' }
  },
  {
    id: 'ya',
    order: 28,
    arabic: 'ي',
    nameArabic: 'يَاءٌ',
    namePhonetic: 'Yā’',
    nameFrench: 'Lettre Yā (son « y » ou voyelle longue ī)',
    frenchEquivalent: 'Comme « y » dans yaourt, ou voyelle longue « î »',
    articulationTip: 'En début et milieu (يـ / ـيـ), c’est une lettre bateau avec 2 points en dessous.',
    group: 1,
    groupTitle: 'Étape 1 : Alif & Les Lettres « Bateaux »',
    connectsAfter: true,
    solarOrLunar: 'lunaire',
    forms: { isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' },
    exampleWord: { arabic: 'يَوْمٌ', phonetic: 'Yawmun', french: 'Un jour' },
    secondExample: { arabic: 'يَدٌ', phonetic: 'Yadun', french: 'Une main' }
  }
];

export const NON_CONNECTING_LETTERS: ArabicTriad[] = [
  { arabic: 'ا', phonetic: 'Alif', french: 'Ne s’attache pas à gauche (ex : بَابٌ - Bābun - Une porte)' },
  { arabic: 'د', phonetic: 'Dāl', french: 'Ne s’attache pas à gauche (ex : دَرْسٌ - Darsun - Un cours)' },
  { arabic: 'ذ', phonetic: 'Dhāl', french: 'Ne s’attache pas à gauche (ex : ذِكْرٌ - Dhikrun - Le rappel)' },
  { arabic: 'ر', phonetic: 'Rā’', french: 'Ne s’attache pas à gauche (ex : رَحْمَةٌ - Raḥmatun - Une miséricorde)' },
  { arabic: 'ز', phonetic: 'Zāy', french: 'Ne s’attache pas à gauche (ex : زَكَاةٌ - Zakātun - L’aumône)' },
  { arabic: 'و', phonetic: 'Wāw', french: 'Ne s’attache pas à gauche (ex : نُورٌ - Nūrun - Une lumière)' }
];

export const ALPHABET_QUIZ: QuizQuestion[] = [
  {
    id: 'alpha-q1',
    question: 'Parmi les lettres « bateaux », laquelle possède 1 seul point placé EN DESSOUS ?',
    arabicPrompt: { arabic: 'بَابٌ', phonetic: 'Bābun', french: 'Une porte' },
    options: [
      'ب (Bā’ — son B)',
      'ت (Tā’ — son T)',
      'ث (Thā’ — son Th)',
      'ن (Nūn — son N)'
    ],
    correctIndex: 0,
    explanation: 'ب (Bā’) a 1 point en bas (comme dans بَيْتٌ / Baytun / Une maison). ت en a 2 en haut, ث en a 3 en haut, et ن en a 1 en haut.'
  },
  {
    id: 'alpha-q2',
    question: 'Quelle est la différence entre ج (Jīm), ح (Ḥā’) et خ (Khā’) ?',
    arabicPrompt: { arabic: 'مَسْجِدٌ · حَمْدٌ · خَيْرٌ', phonetic: 'Masjidun · Ḥamdun · Khayrun', french: 'Mosquée · Louange · Bienfait' },
    options: [
      'ج a un point au milieu/bas, ح n’a aucun point, خ a un point au-dessus',
      'Elles ont toutes le même son mais changent selon la place dans le mot',
      'ح a deux points et خ a trois points',
      'Ce sont des voyelles et non des consonnes'
    ],
    correctIndex: 0,
    explanation: 'Ces 3 lettres jumelles ont exactement le même corps : ج (Jīm = point au centre), ح (Ḥā’ = zéro point, souffle doux), خ (Khā’ = point sur la tête).'
  },
  {
    id: 'alpha-q3',
    question: 'Combien y a-t-il de lettres en arabe qui ne s’attachent JAMAIS à la lettre suivante (à gauche) ?',
    arabicPrompt: { arabic: 'ا · د · ذ · ر · ز · و', phonetic: 'Alif · Dāl · Dhāl · Rā’ · Zāy · Wāw', french: 'Les 6 lettres qui ne tendent pas le bras à gauche' },
    options: [
      '6 lettres (ا د ذ ر ز و)',
      '2 lettres seulement',
      'Toutes les lettres s’attachent des deux côtés',
      '14 lettres'
    ],
    correctIndex: 0,
    explanation: 'Les 6 lettres « autonomes » (ا د ذ ر ز و) s’attachent à la lettre qui précède (à droite), mais jamais à celle qui suit (à gauche).'
  },
  {
    id: 'alpha-q4',
    question: 'Quel son français est très proche de la lettre غ (Ghayn), comme dans مَغْرِبٌ (Maghribun — Coucher du soleil) ?',
    arabicPrompt: { arabic: 'مَغْرِبٌ', phonetic: 'Maghribun', french: 'Le coucher du soleil / Maghrib' },
    options: [
      'Le « r » parisien doux (comme dans « rue »)',
      'Le « b » français',
      'Le « s » sifflant',
      'Le « m » nasal'
    ],
    correctIndex: 0,
    explanation: 'La lettre غ (Ghayn) se prononce au fond de la gorge presque comme le « r » français de « rue » ou « Paris ».'
  },
  {
    id: 'alpha-q5',
    question: 'Dans le mot كِتَابٌ (Kitābun — Un livre), quelle est la première lettre à droite (كـ) ?',
    arabicPrompt: { arabic: 'كِتَابٌ', phonetic: 'Kitābun', french: 'Un livre' },
    options: [
      'ك (Kāf — son K en position de début)',
      'ق (Qāf — son Q)',
      'ل (Lām — son L)',
      'م (Mīm — son M)'
    ],
    correctIndex: 0,
    explanation: 'En début et au milieu d’un mot, la lettre ك (Kāf) prend la forme كـ, comme au début de كِتَابٌ (Kitābun — Un livre).'
  },
  {
    id: 'alpha-q6',
    question: 'Quelle lettre commence le mot صَلَاةٌ (Ṣalātun — La prière) ?',
    arabicPrompt: { arabic: 'صَلَاةٌ', phonetic: 'Ṣalātun', french: 'La prière' },
    options: [
      'ص (Ṣād — le S emphatique / grave)',
      'س (Sīn — le S léger à 3 dents)',
      'ش (Chīn — le son Ch)',
      'ط (Ṭā’ — le T emphatique)'
    ],
    correctIndex: 0,
    explanation: 'صَلَاةٌ (Ṣalātun — La prière) commence par la lettre à boucle ص (Ṣād), qui produit un son « S » grave et arrondi.'
  }
];
