import { ArabicTriad } from './alphabetData';
import { SURAHS_DATA, SurahStudy } from './surahsAndPdfsData';

// ============================================================================
// 1. VALEUR AJOUTÉE ALPHABET : MÉTHODE DES « SQUELETTES + POINTS » & LIAISON PAS-À-PAS
// ============================================================================
export const SKELETON_FAMILIES: {
  familyName: string;
  rule: string;
  members: ArabicTriad[];
}[] = [
  {
    familyName: 'Famille du « Bateau » (ب ت ث ن ي)',
    rule: 'En début et milieu de mot, ces 5 lettres ont exactement le même crochet (بـ). Seul le nombre et la place des points (en bas ou en haut) les distinguent !',
    members: [
      { arabic: 'ب (بـ) — بَابٌ', phonetic: 'Bā’ (1 point en bas) — Bābun', french: 'Son B — Une porte' },
      { arabic: 'ت (تـ) — تُفَّاحٌ', phonetic: 'Tā’ (2 points en haut) — Tuffāḥun', french: 'Son T — Des pommes' },
      { arabic: 'ث (ثـ) — ثَلَاثَةٌ', phonetic: 'Thā’ (3 points en haut) — Thalāthatun', french: 'Son Th — Trois (3)' },
      { arabic: 'ن (نـ) — نَافِذَةٌ', phonetic: 'Nūn (1 point en haut) — Nāfidhatun', french: 'Son N — Une fenêtre' },
      { arabic: 'ي (يـ) — يَدٌ', phonetic: 'Yā’ (2 points en bas) — Yadun', french: 'Son Y / ī — Une main' }
    ]
  },
  {
    familyName: 'Famille de la « Vague » (ج ح خ)',
    rule: 'Même tête triangulaire en début/milieu (حـ). En position isolée ou finale, elles déploient un grand ventre sous la ligne.',
    members: [
      { arabic: 'ج (جـ) — جَارٌ', phonetic: 'Jīm (1 point au cœur) — Jārun', french: 'Son Dj / J — Un voisin' },
      { arabic: 'ح (حـ) — حَلِيبٌ', phonetic: 'Ḥā’ (0 point, souffle chaud) — Ḥalībun', french: 'Son Ḥ — Du lait' },
      { arabic: 'خ (خـ) — خُبْزٌ', phonetic: 'Khā’ (1 point sur la tête) — Khubzun', french: 'Son Kh (jota) — Du pain' }
    ]
  },
  {
    familyName: 'Famille des « Dents » (س ش) & « Boucles Emphatiques » (ص ض · ط ظ)',
    rule: 'Les 3 petites dents de س / ش restent visibles partout. Les emphatiques (ص ض ط ظ) gardent leur boucle ovale dans toutes les positions.',
    members: [
      { arabic: 'س (سـ) — سَيَّارَةٌ', phonetic: 'Sīn (sans point) — Sayyāratun', french: 'Son S — Une voiture' },
      { arabic: 'ش (شـ) — شَايٌ', phonetic: 'Chīn (3 points en haut) — Chāyun', french: 'Son Ch — Du thé' },
      { arabic: 'ص (صـ) — صَبَاحٌ', phonetic: 'Ṣād (boucle sans point) — Ṣabāḥun', french: 'Son Ṣ — Le matin' },
      { arabic: 'ط (طـ) — طَاوِلَةٌ', phonetic: 'Ṭā’ (boucle + mât) — Ṭāwilatun', french: 'Son Ṭ — Une table' }
    ]
  },
  {
    familyName: 'Famille de la « Goutte » (ع غ · ف ق) & « Courbes » (د ذ · ر ز)',
    rule: 'ع et غ se ferment en petit triangle plein au milieu et à la fin (ـعـ / ـغ). ف a 1 point et reste sur la ligne, ق a 2 points et descend en fin de mot.',
    members: [
      { arabic: 'ع (ـعـ) — عَمَلٌ', phonetic: '‘Ayn (sans point) — ‘Amalun', french: 'Son ‘ (gorge) — Un travail' },
      { arabic: 'غ (ـغـ) — غُرْفَةٌ', phonetic: 'Ghayn (1 point) — Ghurfatun', french: 'Son R grasseyé — Une chambre' },
      { arabic: 'ف (فـ) — فُنْدُقٌ', phonetic: 'Fā’ (1 point) — Funduqun', french: 'Son F — Un hôtel' },
      { arabic: 'ق (قـ) — قَهْوَةٌ', phonetic: 'Qāf (2 points) — Qahwatun', french: 'Son Q — Du café' }
    ]
  }
];

export const WORD_DECOMPOSITIONS: {
  lettersJoined: string;
  stepByStepRule: string;
  word: ArabicTriad;
}[] = [
  {
    lettersJoined: 'بـ + ـيـ + ـت = بَيْتٌ',
    stepByStepRule: 'بـ (début) + ـيـ (milieu, 2 points en bas) + ـت (fin ouverte)',
    word: { arabic: 'بَيْتٌ', phonetic: 'Baytun', french: 'Une maison' }
  },
  {
    lettersJoined: 'بـ + ـا + ب = بَابٌ',
    stepByStepRule: 'بـ s’attache à l’Alif (ـا), puis Alif coupe la liaison avant le ب final isolé',
    word: { arabic: 'بَابٌ', phonetic: 'Bābun', french: 'Une porte' }
  },
  {
    lettersJoined: 'قـ + ـهـ + ـو + ة = قَهْوَةٌ',
    stepByStepRule: 'قـ (début) + ـهـ (milieu en nœud) + ـو (non-liante) + ة (Tā’ marbūṭa isolée)',
    word: { arabic: 'قَهْوَةٌ', phonetic: 'Qahwatun', french: 'Un café' }
  },
  {
    lettersJoined: 'هـ + ـا + تـ + ـف = هَاتِفٌ',
    stepByStepRule: 'هـ + ـا (coupure après Alif) + تـ (nouveau départ) + ـف (fin)',
    word: { arabic: 'هَاتِفٌ', phonetic: 'Hātifun', french: 'Un téléphone' }
  },
  {
    lettersJoined: 'سـ + ـيّـ + ـا + ر + ة = سَيَّارَةٌ',
    stepByStepRule: 'سـ + ـيّـ + ـا (coupure) + ر (coupure après Rā’) + ة',
    word: { arabic: 'سَيَّارَةٌ', phonetic: 'Sayyāratun', french: 'Une voiture' }
  },
  {
    lettersJoined: 'مـ + ـفـ + ـتـ + ـا + ح = مِفْتَاحٌ',
    stepByStepRule: '4 lettres soudées (مـفـتـا) puis ح isolé après l’Alif',
    word: { arabic: 'مِفْتَاحٌ', phonetic: 'Miftāḥun', french: 'Une clé' }
  },
  {
    lettersJoined: 'مـ + ـد + يـ + ـنـ + ـة = مَدِينَةٌ',
    stepByStepRule: 'مـ + ـد (Dāl coupe à gauche) + يـ + ـنـ + ـة (attachée)',
    word: { arabic: 'مَدِينَةٌ', phonetic: 'Madīnatun', french: 'Une ville' }
  },
  {
    lettersJoined: 'طـ + ـا + و + لـ + ـة = طَاوِلَةٌ',
    stepByStepRule: 'طـا (coupure) + و (isolée, coupure) + لـة (soudées)',
    word: { arabic: 'طَاوِلَةٌ', phonetic: 'Ṭāwilatun', french: 'Une table' }
  },
  {
    lettersJoined: 'كـ + ـتـ + ـا + ب = كِتَابٌ',
    stepByStepRule: 'كـ change de forme en début/milieu (comme un S incliné) + ـتـ + ـا + ب',
    word: { arabic: 'كِتَابٌ', phonetic: 'Kitābun', french: 'Un livre' }
  },
  {
    lettersJoined: 'قـ + ـلـ + ـم = قَلَمٌ',
    stepByStepRule: 'Aucune lettre non-liante : les 3 lettres (قـلـم) sont attachées d’un seul trait',
    word: { arabic: 'قَلَمٌ', phonetic: 'Qalamun', french: 'Un stylo' }
  },
  {
    lettersJoined: 'مـ + ـطـ + ـعـ + ـم = مَطْعَمٌ',
    stepByStepRule: 'Note le ـعـ au milieu qui se ferme en petit triangle plein',
    word: { arabic: 'مَطْعَمٌ', phonetic: 'Maṭ‘amun', french: 'Un restaurant' }
  },
  {
    lettersJoined: 'شـ + ـا + ر + ع = شَارِعٌ',
    stepByStepRule: 'شـا (coupure) + ر (coupure) + ع (forme finale isolée avec grand ventre)',
    word: { arabic: 'شَارِعٌ', phonetic: 'Chāri‘un', french: 'Une rue' }
  },
  {
    lettersJoined: 'صـ + ـد + يـ + ـق = صَدِيقٌ',
    stepByStepRule: 'صـد (coupure après Dāl) + يـق (Yā’ long + Qāf final)',
    word: { arabic: 'صَدِيقٌ', phonetic: 'Ṣadīqun', french: 'Un ami' }
  },
  {
    lettersJoined: 'حـ + ـلـ + ـيـ + ـب = حَلِيبٌ',
    stepByStepRule: 'Les 4 lettres (حـلـيـب) s’attachent sans aucune interruption',
    word: { arabic: 'حَلِيبٌ', phonetic: 'Ḥalībun', french: 'Du lait' }
  },
  {
    lettersJoined: 'خـ + ـبـ + ـز = خُبْزٌ',
    stepByStepRule: 'خـ + ـبـ (Sukūn sur le Bā’) + ـز (Zāy final)',
    word: { arabic: 'خُبْزٌ', phonetic: 'Khubzun', french: 'Du pain' }
  },
  {
    lettersJoined: 'مـ + ـسـ + ـجـ + ـد = مَسْجِدٌ',
    stepByStepRule: 'مـ + ـسـ (3 dents) + ـجـ + ـد (fin attachée)',
    word: { arabic: 'مَسْجِدٌ', phonetic: 'Masjidun', french: 'Une mosquée' }
  }
];

// ============================================================================
// 2. VALEUR AJOUTÉE VOYELLES : SYLLABES CONCRÈTES, SUKŪN, CHADDA & PAIRES MINIMALES
// ============================================================================
export const READING_MECHANICS_GUIDES: {
  title: string;
  rule: string;
  concreteExamples: ArabicTriad[];
}[] = [
  {
    title: 'Règle 1 — Le Sukūn (ـْـ) : L’arrêt sec sur une consonne (« fermer la syllabe »)',
    rule: 'Une lettre avec un petit rond (ـْـ) se prononce sans aucune voyelle, en s’appuyant sur la syllabe qui précède (ex: مَ [Ma] + كْ [k] = مَكْ [Mak]). Un mot arabe ne commence jamais par un Sukūn.',
    concreteExamples: [
      { arabic: 'مَكْتَبٌ (مَكْ + تَ + بٌ)', phonetic: 'Mak-ta-bun', french: 'Un bureau' },
      { arabic: 'مَطْبَخٌ (مَطْ + بَ + خٌ)', phonetic: 'Maṭ-ba-khun', french: 'Une cuisine' },
      { arabic: 'يَفْهَمُ (يَفْ + هَ + مُ)', phonetic: 'Yaf-ha-mu', french: 'Il comprend' },
      { arabic: 'أَحْمَدُ (أَحْ + مَ + دُ)', phonetic: 'Aḥ-ma-du', french: 'Ahmad (prénom)' }
    ]
  },
  {
    title: 'Règle 2 — La Chadda (ـّـ) : La consonne double (Sukūn + Voyelle)',
    rule: 'Le signe ـّـ fusionne 2 lettres identiques : la 1re est muette (Sukūn) et la 2e porte la voyelle. Attention : si la Kasra est sous la Chadda (ـِّ) ou sous la lettre, c’est le son « i » ; au-dessus (ـَّ), c’est « a » !',
    concreteExamples: [
      { arabic: 'مُعَلِّمٌ (مُ + عَلْ + لِ + مٌ)', phonetic: 'Mu-‘al-li-mun', french: 'Un professeur (L doublé + i)' },
      { arabic: 'سُكَّرٌ (سُكْ + كَ + رٌ)', phonetic: 'Suk-ka-run', french: 'Du sucre (K doublé + a)' },
      { arabic: 'تُفَّاحٌ (تُفْ + فَا + حٌ)', phonetic: 'Tuf-fā-ḥun', french: 'Des pommes (F doublé + ā)' },
      { arabic: 'أُحِبُّ (أُ + حِبْ + بُ)', phonetic: 'U-ḥib-bu', french: 'J’aime (B doublé + u)' }
    ]
  },
  {
    title: 'Règle 3 — Le Tanwīn (ـٌ -un / ـًا -an / ـٍ -in) : Le « Un / Une » à la fin d’un nom indéfini',
    rule: 'En arabe, le mot « un / une » n’existe pas devant le nom : on double simplement la dernière voyelle du mot pour ajouter un son « -n » (jamais écrit avec la lettre ن !). Dès qu’on met « Al- » (le/la), le Tanwīn disparaît.',
    concreteExamples: [
      { arabic: 'بَيْتٌ ← الْبَيْتُ', phonetic: 'Baytun → Al-baytu', french: 'Une maison → La maison (plus de -n !)' },
      { arabic: 'شُكْرًا / عَفْوًا / دَائِمًا', phonetic: 'Chukran / ‘Afwan / Dā’iman', french: 'Merci / De rien / Toujours (-an avec Alif muet)' },
      { arabic: 'مَدْرَسَةٌ / مَدْرَسَةً / مَدْرَسَةٍ', phonetic: 'Madrasatun / -tan / -tin', french: 'Une école (sans Alif après ة)' },
      { arabic: 'فِي بَيْتٍ جَمِيلٍ', phonetic: 'Fī baytin jamīlin', french: 'Dans une belle maison (-in après « fī »)' }
    ]
  }
];

export const THREE_LETTER_READING_WORDS: ArabicTriad[] = [
  { arabic: 'كَتَبَ', phonetic: 'Ka-ta-ba', french: 'Il a écrit' },
  { arabic: 'ذَهَبَ', phonetic: 'Dha-ha-ba', french: 'Il est allé / parti' },
  { arabic: 'خَرَجَ', phonetic: 'Kha-ra-ja', french: 'Il est sorti' },
  { arabic: 'دَخَلَ', phonetic: 'Da-kha-la', french: 'Il est entré' },
  { arabic: 'جَلَسَ', phonetic: 'Ja-la-sa', french: 'Il s’est assis' },
  { arabic: 'فَتَحَ', phonetic: 'Fa-ta-ḥa', french: 'Il a ouvert' },
  { arabic: 'أَكَلَ', phonetic: 'A-ka-la', french: 'Il a mangé' },
  { arabic: 'شَرِبَ', phonetic: 'Cha-ri-ba', french: 'Il a bu' },
  { arabic: 'فَهِمَ', phonetic: 'Fa-hi-ma', french: 'Il a compris' },
  { arabic: 'سَمِعَ', phonetic: 'Sa-mi-‘a', french: 'Il a entendu / écouté' },
  { arabic: 'عَمِلَ', phonetic: '‘A-mi-la', french: 'Il a travaillé' },
  { arabic: 'عَرَفَ', phonetic: '‘A-ra-fa', french: 'Il a su / connu' },
  { arabic: 'قَرَأَ', phonetic: 'Qa-ra-’a', french: 'Il a lu' },
  { arabic: 'سَأَلَ', phonetic: 'Sa-’a-la', french: 'Il a demandé / posé une question' },
  { arabic: 'أَخَذَ', phonetic: 'A-kha-dha', french: 'Il a pris' },
  { arabic: 'وَضَعَ', phonetic: 'Wa-ḍa-‘a', french: 'Il a posé / mis' },
  { arabic: 'رَجَعَ', phonetic: 'Ra-ja-‘a', french: 'Il est revenu' },
  { arabic: 'وَصَلَ', phonetic: 'Wa-ṣa-la', french: 'Il est arrivé' },
  { arabic: 'نَظَرَ', phonetic: 'Na-ẓa-ra', french: 'Il a regardé' },
  { arabic: 'طَبَخَ', phonetic: 'Ṭa-ba-kha', french: 'Il a cuisiné' },
  { arabic: 'غَسَلَ', phonetic: 'Gha-sa-la', french: 'Il a lavé' },
  { arabic: 'دَرَسَ', phonetic: 'Da-ra-sa', french: 'Il a étudié' },
  { arabic: 'سَكَنَ', phonetic: 'Sa-ka-na', french: 'Il a habité' },
  { arabic: 'لَعِبَ', phonetic: 'La-‘i-ba', french: 'Il a joué' },
  { arabic: 'ضَحِكَ', phonetic: 'Ḍa-ḥi-ka', french: 'Il a ri' },
  { arabic: 'فَرِحَ', phonetic: 'Fa-ri-ḥa', french: 'Il s’est réjoui' },
  { arabic: 'كَبُرَ', phonetic: 'Ka-bu-ra', french: 'Il a grandi' },
  { arabic: 'قَرُبَ', phonetic: 'Qa-ru-ba', french: 'Il s’est approché' }
];

export const EXTENDED_MINIMAL_PAIRS: {
  short: ArabicTriad;
  long: ArabicTriad;
  vowelType: string;
}[] = [
  {
    short: { arabic: 'جَمَلٌ', phonetic: 'Jamalun', french: 'Un chameau' },
    long: { arabic: 'جَمَالٌ', phonetic: 'Jamālun', french: 'La beauté' },
    vowelType: 'a (1 tps) → ā (2 tps)'
  },
  {
    short: { arabic: 'كَتَبَ', phonetic: 'Kataba', french: 'Il a écrit' },
    long: { arabic: 'كَاتِبٌ', phonetic: 'Kātibun', french: 'Un écrivain / auteur' },
    vowelType: 'a (1 tps) → ā (2 tps)'
  },
  {
    short: { arabic: 'مَلِكٌ', phonetic: 'Malikun', french: 'Un roi' },
    long: { arabic: 'مَالِكٌ', phonetic: 'Mālikun', french: 'Un propriétaire' },
    vowelType: 'a (1 tps) → ā (2 tps)'
  },
  {
    short: { arabic: 'عَلِمَ', phonetic: '‘Alima', french: 'Il a su' },
    long: { arabic: 'عَالِمٌ', phonetic: '‘Ālimun', french: 'Un savant / chercheur' },
    vowelType: 'a (1 tps) → ā (2 tps)'
  },
  {
    short: { arabic: 'سَلِمَ', phonetic: 'Salima', french: 'Être sain et sauf' },
    long: { arabic: 'سَلَامٌ', phonetic: 'Salāmun', french: 'La paix / Le salut' },
    vowelType: 'a (1 tps) → ā (2 tps)'
  },
  {
    short: { arabic: 'ذَهَبٌ', phonetic: 'Dhahabun', french: 'De l’or' },
    long: { arabic: 'ذَهَابٌ', phonetic: 'Dhahābun', french: 'Un départ / Un aller' },
    vowelType: 'a (1 tps) → ā (2 tps)'
  },
  {
    short: { arabic: 'مَطَرٌ', phonetic: 'Maṭarun', french: 'La pluie' },
    long: { arabic: 'مَطَارٌ', phonetic: 'Maṭārun', french: 'Un aéroport' },
    vowelType: 'a (1 tps) → ā (2 tps)'
  },
  {
    short: { arabic: 'شَرِبَ', phonetic: 'Chariba', french: 'Il a bu' },
    long: { arabic: 'شَارِبٌ', phonetic: 'Chāribun', french: 'Celui qui boit' },
    vowelType: 'a (1 tps) → ā (2 tps)'
  },
  {
    short: { arabic: 'دَرَسَ', phonetic: 'Darasa', french: 'Il a étudié' },
    long: { arabic: 'دُرُوسٌ', phonetic: 'Durūsun', french: 'Des cours / leçons' },
    vowelType: 'u (1 tps) → ū (2 tps)'
  },
  {
    short: { arabic: 'دَخَلَ', phonetic: 'Dakhala', french: 'Il est entré' },
    long: { arabic: 'دُخُولٌ', phonetic: 'Dukhūlun', french: 'L’entrée' },
    vowelType: 'u (1 tps) → ū (2 tps)'
  },
  {
    short: { arabic: 'خَرَجَ', phonetic: 'Kharaja', french: 'Il est sorti' },
    long: { arabic: 'خُرُوجٌ', phonetic: 'Khurūjun', french: 'La sortie' },
    vowelType: 'u (1 tps) → ū (2 tps)'
  },
  {
    short: { arabic: 'صَبَرَ', phonetic: 'Ṣabara', french: 'Il a patienté' },
    long: { arabic: 'صَبُورٌ', phonetic: 'Ṣabūrun', french: 'Très patient' },
    vowelType: 'u (1 tps) → ū (2 tps)'
  },
  {
    short: { arabic: 'كَبُرَ', phonetic: 'Kabura', french: 'Il a grandi' },
    long: { arabic: 'كَبِيرٌ', phonetic: 'Kabīrun', french: 'Grand' },
    vowelType: 'i (1 tps) → ī (2 tps)'
  },
  {
    short: { arabic: 'صَغُرَ', phonetic: 'Ṣaghura', french: 'Il est devenu petit' },
    long: { arabic: 'صَغِيرٌ', phonetic: 'Ṣaghīrun', french: 'Petit' },
    vowelType: 'i (1 tps) → ī (2 tps)'
  },
  {
    short: { arabic: 'قَرُبَ', phonetic: 'Qaruba', french: 'Il s’est approché' },
    long: { arabic: 'قَرِيبٌ', phonetic: 'Qarībun', french: 'Proche' },
    vowelType: 'i (1 tps) → ī (2 tps)'
  },
  {
    short: { arabic: 'بَعُدَ', phonetic: 'Ba‘uda', french: 'Il s’est éloigné' },
    long: { arabic: 'بَعِيدٌ', phonetic: 'Ba‘īdun', french: 'Loin / Éloigné' },
    vowelType: 'i (1 tps) → ī (2 tps)'
  }
];

// ============================================================================
// 3. VALEUR AJOUTÉE GRAMMAIRE : CONSTRUIRE UNE PHRASE A1 + DIALOGUES RÉELS
// ============================================================================
export const SENTENCE_BUILDING_FORMULAS: {
  formulaTitle: string;
  explanation: string;
  patternA: ArabicTriad;
  patternB: ArabicTriad;
}[] = [
  {
    formulaTitle: 'Formule 1 — Phrase Nominale sans verbe « être » (Le... est... vs Un... ...)',
    explanation:
      'En arabe, le verbe « être » au présent ne s’écrit pas ! La différence entre « Une grande maison » et « La maison est grande » tient uniquement à la présence de l’article الْـ (Al-) sur le 1er mot :',
    patternA: {
      arabic: 'بَيْتٌ كَبِيرٌ (Indéfini + Indéfini)',
      phonetic: 'Baytun kabīrun',
      french: 'Une grande maison (épithète : les 2 mots ont -un)'
    },
    patternB: {
      arabic: 'الْبَيْتُ كَبِيرٌ (Défini Al- + Indéfini -un)',
      phonetic: 'Al-baytu kabīrun',
      french: 'La maison [est] grande (sujet défini + attribut indéfini)'
    }
  },
  {
    formulaTitle: 'Formule 2 — Dire « J’ai / Tu as » en arabe avec عِنْدَ (‘Inda = Chez) ou لِـ (Li = À)',
    explanation:
      'L’arabe n’utilise pas de verbe « avoir » au quotidien : on prend le mot عِنْدَ [‘inda = auprès de / chez] et on lui colle le suffixe possessif (-ī, -ka, -ki, -hu, -nā) :',
    patternA: {
      arabic: 'عِنْدِي سَيَّارَةٌ جَدِيدَةٌ وَوَقْتٌ الْيَوْمَ',
      phonetic: '‘Indī sayyāratun jadīdatun wa waqtun l-yawma',
      french: 'J’ai une nouvelle voiture et du temps aujourd’hui'
    },
    patternB: {
      arabic: 'هَلْ عِنْدَكَ سُؤَالٌ ؟ — نَعَمْ، عِنْدِي سُؤَالٌ',
      phonetic: 'Hal ‘indaka su’ālun ? — Na‘am, ‘indī su’ālun',
      french: 'Est-ce que tu as une question ? — Oui, j’ai une question'
    }
  },
  {
    formulaTitle: 'Formule 3 — Dire « Il y a » avec فِي [Fī] ou هُنَاكَ [Hunāka]',
    explanation:
      'Lorsqu’une phrase commence par un complément de lieu (فِي الْبَيْتِ = Dans la maison...) suivi d’un mot indéfini, elle se traduit par « Il y a... » :',
    patternA: {
      arabic: 'فِي الْغُرْفَةِ طَاوِلَةٌ وَكُرْسِيٌّ',
      phonetic: 'Fī l-ghurfati ṭāwilatun wa kursiyyun',
      french: 'Dans la chambre, il y a une table et une chaise'
    },
    patternB: {
      arabic: 'هُنَاكَ مَطْعَمٌ جَيِّدٌ فِي هَذَا الشَّارِعِ',
      phonetic: 'Hunāka maṭ‘amun jayyidun fī hādhā ch-chāri‘i',
      french: 'Il y a un bon restaurant dans cette rue'
    }
  },
  {
    formulaTitle: 'Formule 4 — L’Annexion / Appartenance « Le [A] de [B] » (Al-Iḍāfa)',
    explanation:
      'Pour dire « La clé de la maison » ou « La porte de la voiture », le 1er mot perd son « Al- » et son « -n » (مِفْتَاحُ), et le 2e mot prend « Al- » et la voyelle « -i » (الْبَيْتِ) :',
    patternA: {
      arabic: 'مِفْتَاحُ الْبَيْتِ · بَابُ السَّيَّارَةِ',
      phonetic: 'Miftāḥu l-bayti · Bābu s-sayyārati',
      french: 'La clé de la maison · La porte de la voiture'
    },
    patternB: {
      arabic: 'كِتَابُ الطَّالِبِ · شَارِعُ الْمَدِينَةِ',
      phonetic: 'Kitābu ṭ-ṭālibi · Chāri‘u l-madīnati',
      french: 'Le livre de l’étudiant · La rue de la ville'
    }
  }
];

export const REAL_LIFE_DIALOGUES_A1: {
  title: string;
  context: string;
  lines: { speaker: string; triad: ArabicTriad }[];
}[] = [
  {
    title: 'Dialogue 1 — Se présenter & faire connaissance',
    context: 'Rencontre entre deux personnes (dire son nom, son pays, son métier)',
    lines: [
      {
        speaker: 'A',
        triad: {
          arabic: 'مَرْحَبًا ! مَا اسْمُكَ وَمِنْ أَيْنَ أَنْتَ ؟',
          phonetic: 'Marḥaban ! Mā smuka wa min ayna anta ?',
          french: 'Bonjour ! Quel est ton nom et d’où viens-tu ?'
        }
      },
      {
        speaker: 'B',
        triad: {
          arabic: 'أَهْلًا بِكَ، اسْمِي كَرِيمٌ، أَنَا مِنْ فَرَنْسَا وَأَسْكُنُ فِي بَارِيسَ.',
          phonetic: 'Ahlan bika, ismī Karīmun, anā min Faransā wa askunu fī Bārīs.',
          french: 'Bienvenue à toi, je m’appelle Karim, je viens de France et j’habite à Paris.'
        }
      },
      {
        speaker: 'A',
        triad: {
          arabic: 'تَشَرَّفْنَا ! هَلْ أَنْتَ طَالِبٌ أَوْ تَعْمَلُ ؟',
          phonetic: 'Tacharrafnā ! Hal anta ṭālibun aw ta‘malu ?',
          french: 'Enchanté ! Est-ce que tu es étudiant ou tu travailles ?'
        }
      },
      {
        speaker: 'B',
        triad: {
          arabic: 'أَنَا أَعْمَلُ فِي شَرِكَةٍ وَأَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ.',
          phonetic: 'Anā a‘malu fī charikatin wa ata‘allamu l-lughata l-‘arabiyyata.',
          french: 'Je travaille dans une entreprise et j’apprends la langue arabe.'
        }
      }
    ]
  },
  {
    title: 'Dialogue 2 — Au café / restaurant & demander son chemin',
    context: 'Commander une boisson, demander le prix et s’orienter en ville',
    lines: [
      {
        speaker: 'Client',
        triad: {
          arabic: 'مِنْ فَضْلِكَ، أُرِيدُ قَهْوَةً بِالْحَلِيبِ وَكَأْسَ مَاءٍ بَارِدٍ.',
          phonetic: 'Min faḍlika, urīdu qahwatan bi-l-ḥalībi wa ka’sa mā’in bāridin.',
          french: 'S’il vous plaît, je voudrais un café au lait et un verre d’eau fraîche.'
        }
      },
      {
        speaker: 'Serveur',
        triad: {
          arabic: 'تَفَضَّلْ ! هَلْ تُرِيدُ شَيْئًا آخَرَ ؟',
          phonetic: 'Tafaḍḍal ! Hal turīdu chay’an ākhara ?',
          french: 'Voici (je vous en prie) ! Voulez-vous autre chose ?'
        }
      },
      {
        speaker: 'Client',
        triad: {
          arabic: 'لَا شُكْرًا، بِكَمْ هَذَا ؟ وَأَيْنَ مَحَطَّةُ الْقِطَارِ ؟',
          phonetic: 'Lā chukran, bi-kam hādhā ? Wa ayna maḥaṭṭatu l-qiṭāri ?',
          french: 'Non merci, c’est combien ? Et où se trouve la gare ?'
        }
      },
      {
        speaker: 'Serveur',
        triad: {
          arabic: 'بِخَمْسَةِ دَرَاهِمَ فَقَطْ. الْمَحَطَّةُ قَرِيبَةٌ جِدًّا، أَمَامَ الْفُنْدُقِ.',
          phonetic: 'Bi-khamsati darāhima faqaṭ. Al-maḥaṭṭatu qarībatun jiddan, amāma l-funduqi.',
          french: 'Cinq dirhams seulement. La gare est très proche, devant l’hôtel.'
        }
      }
    ]
  }
];

export const LUNAR_LETTERS_TABLE: { letter: string; name: string; example: ArabicTriad }[] = [
  { letter: 'أ', name: 'Alif', example: { arabic: 'الْأَبُ', phonetic: 'Al-Abu', french: 'Le père' } },
  { letter: 'ب', name: 'Bā’', example: { arabic: 'الْبَيْتُ', phonetic: 'Al-Baytu', french: 'La maison' } },
  { letter: 'ج', name: 'Jīm', example: { arabic: 'الْجَارُ', phonetic: 'Al-Jāru', french: 'Le voisin' } },
  { letter: 'ح', name: 'Ḥā’', example: { arabic: 'الْحَلِيبُ', phonetic: 'Al-Ḥalību', french: 'Le lait' } },
  { letter: 'خ', name: 'Khā’', example: { arabic: 'الْخُبْزُ', phonetic: 'Al-Khubzu', french: 'Le pain' } },
  { letter: 'ع', name: '‘Ayn', example: { arabic: 'الْعَمَلُ', phonetic: 'Al-‘Amalu', french: 'Le travail' } },
  { letter: 'غ', name: 'Ghayn', example: { arabic: 'الْغُرْفَةُ', phonetic: 'Al-Ghurfatu', french: 'La chambre' } },
  { letter: 'ف', name: 'Fā’', example: { arabic: 'الْفُنْدُقُ', phonetic: 'Al-Funduqu', french: 'L’hôtel' } },
  { letter: 'ق', name: 'Qāf', example: { arabic: 'الْقَهْوَةُ', phonetic: 'Al-Qahwatu', french: 'Le café' } },
  { letter: 'ك', name: 'Kāf', example: { arabic: 'الْكِتَابُ', phonetic: 'Al-Kitābu', french: 'Le livre' } },
  { letter: 'م', name: 'Mīm', example: { arabic: 'الْمَدِينَةُ', phonetic: 'Al-Madīnatu', french: 'La ville' } },
  { letter: 'ه', name: 'Hā’', example: { arabic: 'الْهَاتِفُ', phonetic: 'Al-Hātifu', french: 'Le téléphone' } },
  { letter: 'و', name: 'Wāw', example: { arabic: 'الْوَقْتُ', phonetic: 'Al-Waqtu', french: 'Le temps / L’heure' } },
  { letter: 'ي', name: 'Yā’', example: { arabic: 'الْيَوْمُ', phonetic: 'Al-Yawmu', french: 'Le jour' } }
];

export const SOLAR_LETTERS_TABLE: { letter: string; name: string; example: ArabicTriad }[] = [
  { letter: 'ت', name: 'Tā’', example: { arabic: 'التُّفَّاحُ', phonetic: 'At-Tuffāḥu', french: 'Les pommes' } },
  { letter: 'ث', name: 'Thā’', example: { arabic: 'الثَّلْجُ', phonetic: 'Ath-Thalju', french: 'La neige' } },
  { letter: 'د', name: 'Dāl', example: { arabic: 'الدَّرْسُ', phonetic: 'Ad-Darsu', french: 'La leçon / Le cours' } },
  { letter: 'ذ', name: 'Dhāl', example: { arabic: 'الذَّهَبُ', phonetic: 'Adh-Dhahabu', french: 'L’or' } },
  { letter: 'ر', name: 'Rā’', example: { arabic: 'الرَّجُلُ', phonetic: 'Ar-Rajulu', french: 'L’homme' } },
  { letter: 'ز', name: 'Zāy', example: { arabic: 'الزَّيْتُ', phonetic: 'Az-Zaytu', french: 'L’huile' } },
  { letter: 'س', name: 'Sīn', example: { arabic: 'السَّيَّارَةُ', phonetic: 'As-Sayyāratu', french: 'La voiture' } },
  { letter: 'ش', name: 'Chīn', example: { arabic: 'الشَّارِعُ', phonetic: 'Ach-Chāri‘u', french: 'La rue' } },
  { letter: 'ص', name: 'Ṣād', example: { arabic: 'الصَّبَاحُ', phonetic: 'Aṣ-Ṣabāḥu', french: 'Le matin' } },
  { letter: 'ض', name: 'Ḍād', example: { arabic: 'الضَّيْفُ', phonetic: 'Aḍ-Ḍayfu', french: 'L’invité' } },
  { letter: 'ط', name: 'Ṭā’', example: { arabic: 'الطَّاوِلَةُ', phonetic: 'Aṭ-Ṭāwilatu', french: 'La table' } },
  { letter: 'ظ', name: 'Ẓā’', example: { arabic: 'الظُّهْرُ', phonetic: 'Aẓ-Ẓuhru', french: 'Le midi' } },
  { letter: 'ل', name: 'Lām', example: { arabic: 'اللَّيْلُ', phonetic: 'Al-Laylu', french: 'La nuit' } },
  { letter: 'ن', name: 'Nūn', example: { arabic: 'النَّافِذَةُ', phonetic: 'An-Nāfidhatu', french: 'La fenêtre' } }
];

export const PRONOUNS_AND_POSSESSIVES_TABLE: {
  person: string;
  detached: ArabicTriad;
  suffix: string;
  attachedExample: ArabicTriad;
  pastVerb: ArabicTriad;
  presentVerb: ArabicTriad;
}[] = [
  {
    person: '1re sing. (Je)',
    detached: { arabic: 'أَنَا', phonetic: 'Anā', french: 'Je / Moi' },
    suffix: 'ـِي (-ī)',
    attachedExample: { arabic: 'بَيْتِي · اسْمِي', phonetic: 'Baytī · Ismī', french: 'Ma maison · Mon nom' },
    pastVerb: { arabic: 'ذَهَبْتُ', phonetic: 'Dhahabtu', french: 'Je suis allé(e)' },
    presentVerb: { arabic: 'أَذْهَبُ', phonetic: 'Adhhabu', french: 'Je vais' }
  },
  {
    person: '2e masc. sing.',
    detached: { arabic: 'أَنْتَ', phonetic: 'Anta', french: 'Tu (homme)' },
    suffix: 'ـكَ (-ka)',
    attachedExample: { arabic: 'بَيْتُكَ · اسْمُكَ', phonetic: 'Baytuka · Ismuka', french: 'Ta maison · Ton nom (m.)' },
    pastVerb: { arabic: 'ذَهَبْتَ', phonetic: 'Dhahabta', french: 'Tu es allé (m.)' },
    presentVerb: { arabic: 'تَذْهَبُ', phonetic: 'Tadhhabu', french: 'Tu vas (m.)' }
  },
  {
    person: '2e fém. sing.',
    detached: { arabic: 'أَنْتِ', phonetic: 'Anti', french: 'Tu (femme)' },
    suffix: 'ـكِ (-ki)',
    attachedExample: { arabic: 'بَيْتُكِ · اسْمُكِ', phonetic: 'Baytuki · Ismuki', french: 'Ta maison · Ton nom (f.)' },
    pastVerb: { arabic: 'ذَهَبْتِ', phonetic: 'Dhahabti', french: 'Tu es allée (f.)' },
    presentVerb: { arabic: 'تَذْهَبِينَ', phonetic: 'Tadhhabīna', french: 'Tu vas (f.)' }
  },
  {
    person: '3e masc. sing.',
    detached: { arabic: 'هُوَ', phonetic: 'Huwa', french: 'Il / Lui' },
    suffix: 'ـهُ (-hu)',
    attachedExample: { arabic: 'بَيْتُهُ · اسْمُهُ', phonetic: 'Baytuhu · Ismuhu', french: 'Sa maison · Son nom (à lui)' },
    pastVerb: { arabic: 'ذَهَبَ', phonetic: 'Dhahaba', french: 'Il est allé' },
    presentVerb: { arabic: 'يَذْهَبُ', phonetic: 'Yadhhabu', french: 'Il va' }
  },
  {
    person: '3e fém. sing.',
    detached: { arabic: 'هِيَ', phonetic: 'Hiya', french: 'Elle' },
    suffix: 'ـهَا (-hā)',
    attachedExample: { arabic: 'بَيْتُهَا · اسْمُهَا', phonetic: 'Baytuhā · Ismuhā', french: 'Sa maison · Son nom (à elle)' },
    pastVerb: { arabic: 'ذَهَبَتْ', phonetic: 'Dhahabat', french: 'Elle est allée' },
    presentVerb: { arabic: 'تَذْهَبُ', phonetic: 'Tadhhabu', french: 'Elle va' }
  },
  {
    person: '1re plur. (Nous)',
    detached: { arabic: 'نَحْنُ', phonetic: 'Naḥnu', french: 'Nous' },
    suffix: 'ـنَا (-nā)',
    attachedExample: { arabic: 'بَيْتُنَا · بَلَدُنَا', phonetic: 'Baytunā · Baladunā', french: 'Notre maison · Notre pays' },
    pastVerb: { arabic: 'ذَهَبْنَا', phonetic: 'Dhahabnā', french: 'Nous sommes allés' },
    presentVerb: { arabic: 'نَذْهَبُ', phonetic: 'Nadhhabu', french: 'Nous allons' }
  },
  {
    person: '2e plur. (Vous)',
    detached: { arabic: 'أَنْتُمْ', phonetic: 'Antum', french: 'Vous (pluriel)' },
    suffix: 'ـكُمْ (-kum)',
    attachedExample: { arabic: 'بَيْتُكُمْ · سَيَّارَتُكُمْ', phonetic: 'Baytukum · Sayyāratukum', french: 'Votre maison · Votre voiture' },
    pastVerb: { arabic: 'ذَهَبْتُمْ', phonetic: 'Dhahabtum', french: 'Vous êtes allés' },
    presentVerb: { arabic: 'تَذْهَبُونَ', phonetic: 'Tadhhabūna', french: 'Vous allez' }
  },
  {
    person: '3e plur. (Ils)',
    detached: { arabic: 'هُمْ', phonetic: 'Hum', french: 'Ils / Eux' },
    suffix: 'ـهُمْ (-hum)',
    attachedExample: { arabic: 'بَيْتُهُمْ · عَمَلُهُمْ', phonetic: 'Baytuhum · ‘Amaluhum', french: 'Leur maison · Leur travail' },
    pastVerb: { arabic: 'ذَهَبُوا', phonetic: 'Dhahabū', french: 'Ils sont allés' },
    presentVerb: { arabic: 'يَذْهَبُونَ', phonetic: 'Yadhhabūna', french: 'Ils vont' }
  }
];

export const GRAMMAR_TOOLKIT_TABLE: { category: string; items: ArabicTriad[] }[] = [
  {
    category: 'Démonstratifs & Genre (Masculin / Féminin en ة)',
    items: [
      { arabic: 'هَذَا طَالِبٌ ذَكِيٌّ', phonetic: 'Hādhā ṭālibun dhakiyyun', french: 'C’est un étudiant intelligent (masc.)' },
      { arabic: 'هَذِهِ طَالِبَةٌ ذَكِيَّةٌ', phonetic: 'Hādhihi ṭālibatun dhakiyyatun', french: 'C’est une étudiante intelligente (fém. + ة)' },
      { arabic: 'ذَلِكَ الْفُنْدُقُ بَعِيدٌ', phonetic: 'Dhālika l-funduqu ba‘īdun', french: 'Cet hôtel-là est loin (masculin éloigné)' },
      { arabic: 'تِلْكَ السَّيَّارَةُ سَرِيعَةٌ', phonetic: 'Tilka s-sayyāratu sarī‘atun', french: 'Cette voiture-là est rapide (féminin éloigné)' }
    ]
  },
  {
    category: 'Questions Concrètes du Quotidien',
    items: [
      { arabic: 'أَيْنَ تَسْكُنُ ؟ — أَسْكُنُ فِي الْمَدِينَةِ', phonetic: 'Ayna taskunu ? — Askunu fī l-madīnati', french: 'Où habites-tu ? — J’habite en ville' },
      { arabic: 'مَاذَا تَفْعَلُ الْآنَ ؟', phonetic: 'Mādhā taf‘alu l-āna ?', french: 'Que fais-tu maintenant ?' },
      { arabic: 'مَتَى يَبْدَأُ الدَّرْسُ ؟', phonetic: 'Matā yabda’u d-darsu ?', french: 'Quand commence le cours ?' },
      { arabic: 'بِكَمْ هَذَا الْكِتَابُ ؟', phonetic: 'Bi-kam hādhā l-kitābu ?', french: 'Combien coûte ce livre ?' }
    ]
  },
  {
    category: 'Les 4 Négations (Présent, Passé, Futur, Nominal)',
    items: [
      { arabic: 'لَا أَفْهَمُ / لَا أَعْرِفُ', phonetic: 'Lā afhamu / Lā a‘rifu', french: 'Je ne comprends pas / Je ne sais pas (Présent : Lā)' },
      { arabic: 'مَا ذَهَبْتُ أَمْسِ', phonetic: 'Mā dhahabtu amsi', french: 'Je ne suis pas allé hier (Passé : Mā)' },
      { arabic: 'لَنْ أَتَأَخَّرَ غَدًا', phonetic: 'Lan ata’akhkhara ghadan', french: 'Je ne serai pas en retard demain (Futur : Lan)' },
      { arabic: 'الْمَطْعَمُ لَيْسَ بَعِيدًا', phonetic: 'Al-maṭ‘amu laysa ba‘īdan', french: 'Le restaurant n’est pas loin (Nominal : Laysa)' }
    ]
  }
];

export const ESSENTIAL_SENTENCES_A1: ArabicTriad[] = [
  { arabic: 'مَرْحَبًا ! اسْمِي يُوسُفُ وَأَنَا أَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ.', phonetic: 'Marḥaban ! Ismī Yūsufu wa anā ata‘allamu l-lughata l-‘arabiyyata.', french: 'Bonjour ! Je m’appelle Youssef et j’apprends la langue arabe.' },
  { arabic: 'مِنْ فَضْلِكَ، هَلْ تَتَكَلَّمُ بِبُطْءٍ ؟ أَنَا مُبْتَدِئٌ.', phonetic: 'Min faḍlika, hal tatakallamu bi-buṭ’in ? Anā mubtadi’un.', french: 'S’il te plaît, peux-tu parler lentement ? Je suis débutant.' },
  { arabic: 'مَا مَعْنَى هَذِهِ الْكَلِمَةِ بِالْفَرَنْسِيَّةِ ؟', phonetic: 'Mā ma‘nā hādhihi l-kalimati bi-l-faransiyyati ?', french: 'Quelle est la signification de ce mot en français ?' },
  { arabic: 'أَسْكُنُ فِي شَقَّةٍ قَرِيبَةٍ مِنْ مَحَطَّةِ الْقِطَارِ.', phonetic: 'Askunu fī chaqqatin qarībatin min maḥaṭṭati l-qiṭāri.', french: 'J’habite dans un appartement proche de la gare.' },
  { arabic: 'أَشْرَبُ الْقَهْوَةَ فِي الصَّبَاحِ ثُمَّ أَذْهَبُ إِلَى الْعَمَلِ بِالسَّيَّارَةِ.', phonetic: 'Achrabu l-qahwata fī ṣ-ṣabāḥi thumma adhhabu ilā l-‘amali bi-s-sayyārati.', french: 'Je bois le café le matin puis je vais au travail en voiture.' },
  { arabic: 'عِنْدِي أَخٌ وَأُخْتٌ، وَنَحْنُ نَزُورُ جَدِّي وَجَدَّتِي كُلَّ أُسْبُوعٍ.', phonetic: '‘Indī akhun wa ukhtun, wa naḥnu nazūru jaddī wa jaddatī kulla usbū‘in.', french: 'J’ai un frère et une sœur, et nous rendons visite à mes grands-parents chaque semaine.' },
  { arabic: 'أُرِيدُ أَنْ أَشْتَرِيَ خُبْزًا سَاخِنًا وَفَوَاكِهَ مِنَ السُّوقِ.', phonetic: 'Urīdu an achtariya khubzan sākhinan wa fawākiha mina s-sūqi.', french: 'Je voudrais acheter du pain chaud et des fruits au marché.' },
  { arabic: 'الطَّقْسُ جَمِيلٌ الْيَوْمَ، الشَّمْسُ مُشْرِقَةٌ وَالسَّمَاءُ زَرْقَاءُ.', phonetic: 'Aṭ-ṭaqsu jamīlun l-yawma, ach-chamsu muchriqatun wa s-samā’u zarqā’u.', french: 'Il fait beau aujourd’hui, le soleil brille et le ciel est bleu.' }
];

export const ADDITIONAL_SURAHS: SurahStudy[] = [
  {
    id: 'al-fil',
    surahNumber: 105,
    titleArabic: 'سُورَةُ الْفِيلِ',
    titlePhonetic: 'Sūratu l-Fīl',
    titleFrench: 'Sourate 105 — L’Éléphant',
    revelationPlace: 'Mecquoise',
    versesCount: 5,
    teenReflection: 'Rappelle la protection de la Kaaba contre l’armée d’Abraha.',
    verses: [
      { verseNumber: 1, arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ', phonetic: 'Alam tara kayfa fa‘ala Rabbuka bi-aṣḥābi l-fīl', french: 'N’as-tu pas vu comment ton Seigneur a agi envers les gens de l’Éléphant ?' },
      { verseNumber: 2, arabic: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ', phonetic: 'Alam yaj‘al kaydahum fī taḍlīl', french: 'N’a-t-Il pas rendu leur ruse complètement vaine ?' },
      { verseNumber: 3, arabic: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ', phonetic: 'Wa arsala ‘alayhim ṭayran abābīl', french: 'Et envoyé sur eux des oiseaux par volées,' },
      { verseNumber: 4, arabic: 'تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ', phonetic: 'Tarmīhim bi-ḥijāratin min sijjīl', french: 'qui leur lançaient des pierres d’argile brûlante ?' },
      { verseNumber: 5, arabic: 'فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ', phonetic: 'Fa-ja‘alahum ka-‘aṣfin ma’kūl', french: 'Et Il les a rendus semblables à de la paille mâchée.' }
    ],
    keyWords: [
      { arabic: 'أَلَمْ تَرَ', phonetic: 'Alam tara', french: 'N’as-tu pas vu' },
      { arabic: 'الْفِيلِ', phonetic: 'Al-Fīli', french: 'L’éléphant' },
      { arabic: 'طَيْرًا', phonetic: 'Ṭayran', french: 'Des oiseaux' },
      { arabic: 'حِجَارَةٍ', phonetic: 'Ḥijāratin', french: 'Des pierres' }
    ]
  },
  {
    id: 'quraych',
    surahNumber: 106,
    titleArabic: 'سُورَةُ قُرَيْشٍ',
    titlePhonetic: 'Sūratu Quraych',
    titleFrench: 'Sourate 106 — Les Quraych',
    revelationPlace: 'Mecquoise',
    versesCount: 4,
    teenReflection: 'Invite à remercier Dieu pour la subsistance (contre la faim) et la sécurité (contre la peur).',
    verses: [
      { verseNumber: 1, arabic: 'لِإِيلَافِ قُرَيْشٍ', phonetic: 'Li-īlāfi Quraych', french: 'À cause du pacte des Quraych,' },
      { verseNumber: 2, arabic: 'إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ', phonetic: 'Īlāfihim riḥlata ch-chitā’i wa ṣ-ṣayf', french: 'de leur habitude des voyages d’hiver et d’été,' },
      { verseNumber: 3, arabic: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ', phonetic: 'Fal-ya‘budū Rabba hādhā l-bayt', french: 'qu’ils adorent donc le Seigneur de cette Maison (la Kaaba),' },
      { verseNumber: 4, arabic: 'الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ', phonetic: 'Alladhī aṭ‘amahum min jū‘in wa āmanahum min khawf', french: 'qui les a nourris contre la faim et rassurés de la crainte.' }
    ],
    keyWords: [
      { arabic: 'الشِّتَاءِ وَالصَّيْفِ', phonetic: 'Ach-Chitā’i wa ṣ-Ṣayfi', french: 'L’hiver et l’été' },
      { arabic: 'هَٰذَا الْبَيْتِ', phonetic: 'Hādhā l-Bayti', french: 'Cette Maison' },
      { arabic: 'جُوعٍ · خَوْفٍ', phonetic: 'Jū‘in · Khawfin', french: 'La faim · La peur' }
    ]
  },
  {
    id: 'al-maun',
    surahNumber: 107,
    titleArabic: 'سُورَةُ الْمَاعُونِ',
    titlePhonetic: 'Sūratu l-Mā‘ūn',
    titleFrench: 'Sourate 107 — L’Entraide',
    revelationPlace: 'Mecquoise',
    versesCount: 7,
    teenReflection: 'Relie la foi à la solidarité envers l’orphelin et le pauvre.',
    verses: [
      { verseNumber: 1, arabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ', phonetic: 'Ara’ayta lladhī yukadhdhibu bi-d-dīn', french: 'As-tu vu celui qui traite de mensonge la Rétribution ?' },
      { verseNumber: 2, arabic: 'فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ', phonetic: 'Fa-dhālika lladhī yadu‘‘u l-yatīm', french: 'C’est bien lui qui repousse l’orphelin,' },
      { verseNumber: 3, arabic: 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ', phonetic: 'Wa lā yaḥuḍḍu ‘alā ṭa‘āmi l-miskīn', french: 'et qui n’encourage point à nourrir le pauvre.' },
      { verseNumber: 4, arabic: 'فَوَيْلٌ لِلْمُصَلِّينَ', phonetic: 'Fa-waylun li-l-muṣallīn', french: 'Malheur donc à ceux qui prient,' },
      { verseNumber: 5, arabic: 'الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ', phonetic: 'Alladhīna hum ‘an ṣalātihim sāhūn', french: 'tout en étant négligents de leur prière,' },
      { verseNumber: 6, arabic: 'الَّذِينَ هُمْ يُرَاءُونَ', phonetic: 'Alladhīna hum yurā’ūn', french: 'qui sont pleins d’ostentation,' },
      { verseNumber: 7, arabic: 'وَيَمْنَعُونَ الْمَاعُونَ', phonetic: 'Wa yamna‘ūna l-mā‘ūn', french: 'et refusent l’ustensile (l’entraide).' }
    ],
    keyWords: [
      { arabic: 'الْيَتِيمَ', phonetic: 'Al-Yatīma', french: 'L’orphelin' },
      { arabic: 'الْمِسْكِينِ', phonetic: 'Al-Miskīni', french: 'Le pauvre' },
      { arabic: 'سَاهُونَ', phonetic: 'Sāhūna', french: 'Négligents' }
    ]
  },
  {
    id: 'al-kafirun',
    surahNumber: 109,
    titleArabic: 'سُورَةُ الْكَافِرُونَ',
    titlePhonetic: 'Sūratu l-Kāfirūn',
    titleFrench: 'Sourate 109 — Les Infidèles',
    revelationPlace: 'Mecquoise',
    versesCount: 6,
    teenReflection: 'Affirme la sincérité de la foi et le respect mutuel.',
    verses: [
      { verseNumber: 1, arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ', phonetic: 'Qul yā ayyuhā l-kāfirūn', french: 'Dis : « Ô vous les infidèles !' },
      { verseNumber: 2, arabic: 'لَا أَعْبُدُ مَا تَعْبُدُونَ', phonetic: 'Lā a‘budu mā ta‘budūn', french: 'Je n’adore pas ce que vous adorez.' },
      { verseNumber: 3, arabic: 'وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ', phonetic: 'Wa lā antum ‘ābidūna mā a‘bud', french: 'Et vous n’êtes pas adorateurs de ce que j’adore.' },
      { verseNumber: 4, arabic: 'وَلَا أَنَا عَابِدٌ مَا عَبَدْتُمْ', phonetic: 'Wa lā anā ‘ābidun mā ‘abadtum', french: 'Je ne suis pas adorateur de ce que vous avez adoré.' },
      { verseNumber: 5, arabic: 'وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ', phonetic: 'Wa lā antum ‘ābidūna mā a‘bud', french: 'Et vous n’êtes pas adorateurs de ce que j’adore.' },
      { verseNumber: 6, arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ', phonetic: 'Lakum dīnukum wa liya dīn', french: 'À vous votre religion, et à moi ma religion. »' }
    ],
    keyWords: [
      { arabic: 'لَا أَعْبُدُ', phonetic: 'Lā a‘budu', french: 'Je n’adore pas' },
      { arabic: 'دِينُكُمْ · دِينِ', phonetic: 'Dīnukum · Dīni', french: 'Votre religion · Ma religion' }
    ]
  },
  {
    id: 'al-masad',
    surahNumber: 111,
    titleArabic: 'سُورَةُ الْمَسَدِ',
    titlePhonetic: 'Sūratu l-Masad',
    titleFrench: 'Sourate 111 — Les Fibres',
    revelationPlace: 'Mecquoise',
    versesCount: 5,
    teenReflection: 'Montre que la fortune ne sert à rien face à l’injustice.',
    verses: [
      { verseNumber: 1, arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ', phonetic: 'Tabbat yadā Abī Lahabin wa tabb', french: 'Que périssent les deux mains d’Abū Lahab et que lui-même périsse !' },
      { verseNumber: 2, arabic: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ', phonetic: 'Mā aghnā ‘anhu māluhu wa mā kasab', french: 'Sa fortune ne lui sert à rien, ni ce qu’il a acquis.' },
      { verseNumber: 3, arabic: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ', phonetic: 'Sa-yaṣlā nāran dhāta lahab', french: 'Il brûlera dans un Feu plein de flammes,' },
      { verseNumber: 4, arabic: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ', phonetic: 'Wa mra’atuhu ḥammālata l-ḥaṭab', french: 'de même que sa femme, la porteuse de bois,' },
      { verseNumber: 5, arabic: 'فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ', phonetic: 'Fī jīdihā ḥablun min masad', french: 'à son cou une corde de fibres.' }
    ],
    keyWords: [
      { arabic: 'يَدَا', phonetic: 'Yadā', french: 'Les deux mains' },
      { arabic: 'مَالُهُ', phonetic: 'Māluhu', french: 'Sa richesse' },
      { arabic: 'حَبْلٌ', phonetic: 'Ḥablun', french: 'Une corde' }
    ]
  }
];

export const ALL_12_SURAHS: SurahStudy[] = [
  SURAHS_DATA[0], // 1. Al-Fātiḥa
  SURAHS_DATA[1], // 112. Al-Ikhlāṣ
  SURAHS_DATA[2], // 113. Al-Falaq
  SURAHS_DATA[3], // 114. An-Nās
  SURAHS_DATA[4], // 103. Al-‘Aṣr
  SURAHS_DATA[5], // 108. Al-Kawthar
  SURAHS_DATA[6], // 110. An-Naṣr
  ADDITIONAL_SURAHS[3], // 109. Al-Kāfirūn
  ADDITIONAL_SURAHS[1], // 106. Quraych
  ADDITIONAL_SURAHS[2], // 107. Al-Mā‘ūn
  ADDITIONAL_SURAHS[0], // 105. Al-Fīl
  ADDITIONAL_SURAHS[4]  // 111. Al-Masad
];
