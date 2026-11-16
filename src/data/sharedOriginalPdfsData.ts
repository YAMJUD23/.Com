export type SharedPdfDomain = 'arabe' | 'religion';

export type SharedOriginalPdfId =
  | 'original-arabe-a1-12p'
  | 'original-priere-1p'
  | 'original-islam-az-3p'
  | 'original-questionnaire-islam-2p';

export interface SharedOriginalPdfDocument {
  id: SharedOriginalPdfId;
  domain: SharedPdfDomain;
  code: string;
  title: string;
  subtitle: string;
  pageCount: number;
  assetFileName: string;
  downloadFileName: string;
  pageImagePrefix: string;
  summary: string;
  highlights: string[];
}

export const SHARED_ORIGINAL_PDF_DOCUMENTS: SharedOriginalPdfDocument[] = [
  {
    id: 'original-arabe-a1-12p',
    domain: 'arabe',
    code: 'DOC-AR-01',
    title: 'Cours de Langue Arabe – Niveau A1 (12 pages)',
    subtitle: 'Alphabet, voyelles, pronoms, phrases verbales/nominales, objets, animaux & 3 dialogues',
    pageCount: 12,
    assetFileName: '916218149-Cours-Arabe-A1-Basique__8__2d31bcdd.pdf',
    downloadFileName: 'Cours-de-Langue-Arabe-Niveau-A1.pdf',
    pageImagePrefix: 'arabe-a1-page-',
    summary:
      'Support officiel de 12 pages partagé avec les élèves : les 28 lettres isolées, voyelles courtes et longues, pronoms personnels et possessifs (singulier, duel, pluriel), phrases verbales et nominales, noms des objets et animaux, et 3 dialogues complets (Mohammed & Sami autour du Ḥajj et de la visite de La Mecque).',
    highlights: [
      'Page 1 : Objectifs & 1. Alphabet Arabe – Lettres isolées',
      'Pages 2–3 : Voyelles courtes/longues, Pronoms personnels, Expressions & Pronoms possessifs',
      'Pages 3–5 : Phrases verbales et nominales, Noms des objets (15) & Noms des animaux (15)',
      'Pages 5–12 : Dialogues 1, 2 et 3 complets (Mohammed & Sami)'
    ]
  },
  {
    id: 'original-priere-1p',
    domain: 'religion',
    code: 'DOC-REL-01',
    title: 'Fiche Résumé Pratique : Comment Faire la Prière (As-Salât)',
    subtitle: 'Toutes les étapes et les phrases importantes sur une seule page (Français · Phonétique · Arabe)',
    pageCount: 1,
    assetFileName: 'Resume_Pratique_Priere_1_Page_d704c239.pdf',
    downloadFileName: 'Fiche_Resume_Pratique_Priere_1_Page.pdf',
    pageImagePrefix: 'priere-1p-page-',
    summary:
      'Fiche pratique recto (1 page) partagée avec les élèves : les 5 prières obligatoires et nombre de Rak‘at, les 4 conditions avant de prier, le tableau des 8 étapes d’une Rak‘a, Sourate Al-Fâtiha verset par verset, At-Tahiyyât & Salât Ibrâhîmiyya, et les Adhkâr après le salut final.',
    highlights: [
      '1. Les 5 Prières Obligatoires & 2. Les 4 Conditions avant de prier',
      '3. Tableau complet des 8 étapes d’une unité de prière (Rak‘a)',
      '4. Sourate Al-Fâtiha (7 versets : Français · Phonétique · Arabe)',
      '5. At-Tahiyyât & Salât Ibrâhîmiyya + 6. Adhkâr après le salut final'
    ]
  },
  {
    id: 'original-islam-az-3p',
    domain: 'religion',
    code: 'DOC-REL-02',
    title: 'L’Islam de A à Z — الملخص الأساسي عن الإسلام (3 pages)',
    subtitle: 'Guide de révision bilingue (Français – Arabe) en 16 chapitres sur 3 pages',
    pageCount: 3,
    assetFileName: 'Resume_islam_francais_arabe__2__bc3ac02f.pdf',
    downloadFileName: 'Resume_Islam_De_A_a_Z_Francais_Arabe.pdf',
    pageImagePrefix: 'islam-az-page-',
    summary:
      'Document de synthèse bilingue Français-Arabe (3 pages) partagé avec les élèves : définition de l’Islam, les 5 piliers de l’Islam, les 6 piliers de la Foi, les 25 prophètes mentionnés dans le Coran, les anges et Livres révélés, sourates à apprendre, les 5 prières et la purification, Ramadan et Zakat, les 5 catégories juridiques, Tawhid/Shirk/Repentir, bon comportement, Jour dernier, invocations, vie du Prophète ﷺ, les 4 écoles et ordre conseillé pour apprendre.',
    highlights: [
      'Page 1 : Chapitres 1 à 5 (Définition, 5 Piliers, 6 Piliers de la Foi, les 25 Prophètes, Anges & Livres)',
      'Page 2 : Chapitres 6 à 10 (Sourates à apprendre, 5 Prières & Wudu, Ramadan & Zakat, 5 Statuts juridiques, Tawhid)',
      'Page 3 : Chapitres 11 à 16 (Bon comportement, Jour dernier, Invocations, Vie du Prophète ﷺ, 4 Écoles & Conclusion)'
    ]
  },
  {
    id: 'original-questionnaire-islam-2p',
    domain: 'religion',
    code: 'DOC-REL-03',
    title: 'Questionnaire — Les Grandes Lignes de l’Islam (2 pages)',
    subtitle: 'Support de révision et d’évaluation bilingue (Français – Arabe) · 9 Questions (Barème / 20)',
    pageCount: 2,
    assetFileName: 'Questionnaire_Grandes_Lignes_Islam_82d29fff.pdf',
    downloadFileName: 'Questionnaire_Grandes_Lignes_Islam.pdf',
    pageImagePrefix: 'questionnaire-page-',
    summary:
      'Fiche d’évaluation officielle de 2 pages (notée sur 20) partagée avec les élèves : Question 1 (les 5 piliers de l’Islam), Question 2 (les 6 piliers de la Foi), Question 3 (définition de la Sunna), Question 4 (les Prophètes dans le Coran), Question 5 (relier les 4 Livres révélés à leurs Prophètes), Question 6 (tableau des 5 prières et nombre de Rak‘at), Question 7 (invocations du quotidien), Question 8 (vie du Prophète Muhammad ﷺ), Question 9 (Zakat et Sadaqa).',
    highlights: [
      'Page 1/2 : Questions 1 à 4 (5 Piliers, 6 Piliers de la Foi, Sunna, Prophètes)',
      'Page 2/2 : Questions 5 à 9 (Livres révélés, Tableau des 5 prières, Invocations, Sîra, Zakat & Sadaqa)'
    ]
  }
];

function getNormalizedBaseUrl(): string {
  const baseUrl =
    typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL
      ? import.meta.env.BASE_URL
      : '/';
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}

export function getOriginalPdfAssetUrl(assetFileName: string): string {
  return `${getNormalizedBaseUrl()}assets/aistudio/${assetFileName}`;
}

export function getOriginalPdfPageImageUrl(pageImagePrefix: string, pageNumber: number): string {
  return `${getNormalizedBaseUrl()}assets/original-pdf-pages/${pageImagePrefix}${pageNumber}.png`;
}

export async function downloadOriginalUntouchedPdf(doc: SharedOriginalPdfDocument): Promise<void> {
  if (typeof document === 'undefined') return;
  const assetUrl = getOriginalPdfAssetUrl(doc.assetFileName);
  try {
    const response = await fetch(assetUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = doc.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
  } catch {
    const link = document.createElement('a');
    link.href = assetUrl;
    link.download = doc.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// ============================================================================
// DONNÉES FIDÈLES DES 4 DOCUMENTS ORIGINAUX POUR LECTURE DIRECTE SUR LE SITE
// ============================================================================

export interface OriginalA1DialogueLine {
  num: number;
  speakerAr: string;
  speakerFr: string;
  arabic: string;
  phonetic: string;
  french: string;
}

export interface OriginalA1Dialogue {
  id: string;
  titleFr: string;
  titleAr: string;
  lines: OriginalA1DialogueLine[];
}

export const ORIGINAL_A1_PRONOUNS_PERSONAL = [
  { category: 'Singulier', arabic: 'أَنَا', french: 'Je (m/f)', phonetic: 'anā' },
  { category: 'Singulier', arabic: 'أَنْتَ', french: 'Tu (m)', phonetic: 'anta' },
  { category: 'Singulier', arabic: 'أَنْتِ', french: 'Tu (f)', phonetic: 'anti' },
  { category: 'Singulier', arabic: 'هُوَ', french: 'Il', phonetic: 'huwa' },
  { category: 'Singulier', arabic: 'هِيَ', french: 'Elle', phonetic: 'hiya' },
  { category: 'Duel', arabic: 'أَنْتُمَا', french: 'Vous deux (m/f)', phonetic: 'antumā' },
  { category: 'Duel', arabic: 'هُمَا', french: 'Ils deux / Elles deux', phonetic: 'humā' },
  { category: 'Pluriel', arabic: 'نَحْنُ', french: 'Nous', phonetic: 'naḥnu' },
  { category: 'Pluriel', arabic: 'أَنْتُمْ', french: 'Vous (m)', phonetic: 'antum' },
  { category: 'Pluriel', arabic: 'أَنْتُنَّ', french: 'Vous (f)', phonetic: 'antunna' },
  { category: 'Pluriel', arabic: 'هُمْ', french: 'Ils', phonetic: 'hum' },
  { category: 'Pluriel', arabic: 'هُنَّ', french: 'Elles', phonetic: 'hunna' }
];

export const ORIGINAL_A1_PRONOUNS_POSSESSIVE = [
  { category: 'Singulier', french: 'Mon livre', suffix: 'ـي', phonetic: 'ī / ya', exampleAr: 'كِتَابِي', examplePhon: 'kitābī' },
  { category: 'Singulier', french: 'Ton livre (m)', suffix: 'ـكَ', phonetic: 'ka', exampleAr: 'كِتَابُكَ', examplePhon: 'kitābuka' },
  { category: 'Singulier', french: 'Ton livre (f)', suffix: 'ـكِ', phonetic: 'ki', exampleAr: 'كِتَابُكِ', examplePhon: 'kitābuki' },
  { category: 'Singulier', french: 'Son livre (m)', suffix: 'ـهُ', phonetic: 'hu', exampleAr: 'كِتَابُهُ', examplePhon: 'kitābuhu' },
  { category: 'Singulier', french: 'Son livre (f)', suffix: 'ـهَا', phonetic: 'hā', exampleAr: 'كِتَابُهَا', examplePhon: 'kitābuhā' },
  { category: 'Duel', french: 'Votre livre (à vous deux)', suffix: 'ـكُمَا', phonetic: 'kumā', exampleAr: 'كِتَابُكُمَا', examplePhon: 'kitābukumā' },
  { category: 'Duel', french: 'Leur livre (à eux deux)', suffix: 'ـهُمَا', phonetic: 'humā', exampleAr: 'كِتَابُهُمَا', examplePhon: 'kitābuhumā' },
  { category: 'Pluriel', french: 'Notre livre', suffix: 'ـنَا', phonetic: 'nā', exampleAr: 'كِتَابُنَا', examplePhon: 'kitābunā' },
  { category: 'Pluriel', french: 'Votre livre (m)', suffix: 'ـكُمْ', phonetic: 'kum', exampleAr: 'كِتَابُكُمْ', examplePhon: 'kitābukum' },
  { category: 'Pluriel', french: 'Votre livre (f)', suffix: 'ـكُنَّ', phonetic: 'kunna', exampleAr: 'كِتَابُكُنَّ', examplePhon: 'kitābukunna' },
  { category: 'Pluriel', french: 'Leur livre (m)', suffix: 'ـهُمْ', phonetic: 'hum', exampleAr: 'كِتَابُهُمْ', examplePhon: 'kitābuhum' },
  { category: 'Pluriel', french: 'Leur livre (f)', suffix: 'ـهُنَّ', phonetic: 'hunna', exampleAr: 'كِتَابُهُنَّ', examplePhon: 'kitābuhunna' }
];

export const ORIGINAL_A1_SENTENCES = [
  { type: 'Phrase verbale', arabic: 'قَرَأَ الوَلَدُ الكِتَابَ', phonetic: 'qara’a al-waladu al-kitāba', french: 'Le garçon a lu le livre.' },
  { type: 'Phrase verbale', arabic: 'أَكَلَتِ البِنْتُ التُّفَّاحَةَ', phonetic: 'akalat al-bintu at-tuffāḥata', french: 'La fille a mangé la pomme.' },
  { type: 'Phrase verbale', arabic: 'ذَهَبَ الرَّجُلُ إِلَى السُّوقِ', phonetic: 'dhahaba ar-rajulu ilā as-sūqi', french: 'L’homme est allé au marché.' },
  { type: 'Phrase verbale', arabic: 'شَرِبَ الطِّفْلُ المَاءَ', phonetic: 'shariba aṭ-ṭiflu al-mā’a', french: 'L’enfant a bu l’eau.' },
  { type: 'Phrase verbale', arabic: 'كَتَبَ الطَّالِبُ الدَّرْسَ', phonetic: 'kataba aṭ-ṭālibu ad-darsa', french: 'L’élève a écrit la leçon.' },
  { type: 'Phrase nominale', arabic: 'السَّمَاءُ صَافِيَةٌ', phonetic: 'as-samā’u ṣāfiyatun', french: 'Le ciel est clair.' },
  { type: 'Phrase nominale', arabic: 'البَيْتُ كَبِيرٌ', phonetic: 'al-baytu kabīrun', french: 'La maison est grande.' },
  { type: 'Phrase nominale', arabic: 'المُعَلِّمُ نَشِيطٌ', phonetic: 'al-mu‘allimu nashīṭun', french: 'Le professeur est actif.' },
  { type: 'Phrase nominale', arabic: 'البِنْتُ جَمِيلَةٌ', phonetic: 'al-bintu jamīlatun', french: 'La fille est belle.' },
  { type: 'Phrase nominale', arabic: 'الوَلَدُ مُجْتَهِدٌ', phonetic: 'al-waladu mujtahidun', french: 'Le garçon est travailleur.' }
];

export const ORIGINAL_A1_OBJECTS_AND_ANIMALS = {
  objects: [
    { french: 'Livre', arabic: 'كِتَابٌ', phonetic: 'kitābun' },
    { french: 'Stylo', arabic: 'قَلَمٌ', phonetic: 'qalamun' },
    { french: 'Table', arabic: 'طَاوِلَةٌ', phonetic: 'ṭāwilatun' },
    { french: 'Chaise', arabic: 'كُرْسِيٌّ', phonetic: 'kursiyyun' },
    { french: 'Porte', arabic: 'بَابٌ', phonetic: 'bābun' },
    { french: 'Fenêtre', arabic: 'نَافِذَةٌ', phonetic: 'nāfidhatun' },
    { french: 'Clé', arabic: 'مِفْتَاحٌ', phonetic: 'miftāḥun' },
    { french: 'Sac', arabic: 'حَقِيبَةٌ', phonetic: 'ḥaqībatun' },
    { french: 'Téléphone', arabic: 'هَاتِفٌ', phonetic: 'hātifun' },
    { french: 'Ordinateur', arabic: 'حَاسُوبٌ', phonetic: 'ḥāsūbun' },
    { french: 'Maison', arabic: 'بَيْتٌ', phonetic: 'baytun' },
    { french: 'Voiture', arabic: 'سَيَّارَةٌ', phonetic: 'sayyāratun' },
    { french: 'Route', arabic: 'طَرِيقٌ', phonetic: 'ṭarīqun' },
    { french: 'Verre', arabic: 'كَأْسٌ', phonetic: 'ka’sun' },
    { french: 'Eau', arabic: 'مَاءٌ', phonetic: 'mā’un' }
  ],
  animals: [
    { french: 'Lion', arabic: 'أَسَدٌ', phonetic: 'asadun' },
    { french: 'Chien', arabic: 'كَلْبٌ', phonetic: 'kalbun' },
    { french: 'Chat', arabic: 'قِطٌّ', phonetic: 'qiṭṭun' },
    { french: 'Cheval', arabic: 'حِصَانٌ', phonetic: 'ḥiṣānun' },
    { french: 'Vache', arabic: 'بَقَرَةٌ', phonetic: 'baqaratun' },
    { french: 'Mouton', arabic: 'خَرُوفٌ', phonetic: 'kharūfun' },
    { french: 'Chèvre', arabic: 'مَعْزَةٌ', phonetic: 'ma‘zatun' },
    { french: 'Chameau', arabic: 'جَمَلٌ', phonetic: 'jamalun' },
    { french: 'Âne', arabic: 'حِمَارٌ', phonetic: 'ḥimārun' },
    { french: 'Éléphant', arabic: 'فِيلٌ', phonetic: 'fīlun' },
    { french: 'Oiseau', arabic: 'طَائِرٌ', phonetic: 'ṭā’irun' },
    { french: 'Poisson', arabic: 'سَمَكٌ', phonetic: 'samakun' },
    { french: 'Souris', arabic: 'فَأْرٌ', phonetic: 'fa’run' },
    { french: 'Serpent', arabic: 'ثُعْبَانٌ', phonetic: 'thu‘bānun' },
    { french: 'Loup', arabic: 'ذِئْبٌ', phonetic: 'dhi’bun' }
  ]
};

export const ORIGINAL_A1_THREE_DIALOGUES: OriginalA1Dialogue[] = [
  {
    id: 'diag-1',
    titleFr: 'Dialogue 1 : Mohammed et Sami (Projet du Ḥajj)',
    titleAr: 'حِوَار ١ : مُحَمَّد وَسَامِي',
    lines: [
      {
        num: 1,
        speakerAr: 'مُحَمَّد',
        speakerFr: 'Mohammed',
        arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ.',
        phonetic: 'As-salāmu ‘alaykum wa raḥmatu llāhi wa barakātuh',
        french: 'Que la paix, la miséricorde et les bénédictions d’Allah soient sur vous.'
      },
      {
        num: 2,
        speakerAr: 'سَامِي',
        speakerFr: 'Sami',
        arabic: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ.',
        phonetic: 'Wa-‘alaykumu s-salāmu wa raḥmatu llāhi wa barakātuh',
        french: 'Et que sur vous soient la paix, la miséricorde et les bénédictions d’Allah.'
      },
      {
        num: 3,
        speakerAr: 'مُحَمَّد',
        speakerFr: 'Mohammed',
        arabic: 'أَنْتَ تُرِيدُ الحَجَّ؟',
        phonetic: 'Anta turīdu l-ḥajja?',
        french: 'Veux-tu faire le ḥajj ?'
      },
      {
        num: 4,
        speakerAr: 'سَامِي',
        speakerFr: 'Sami',
        arabic: 'نَعَمْ، أَنَا أُرِيدُهُ لِنَفْسِي.',
        phonetic: 'Na‘am, anā urīduhu linafsī.',
        french: 'Oui, je le veux pour moi.'
      },
      {
        num: 5,
        speakerAr: 'مُحَمَّد',
        speakerFr: 'Mohammed',
        arabic: 'نَجْمَعُ أَمْوَالَنَا لِحَجِّنَا.',
        phonetic: 'Najma‘u amwālanā li-ḥajjinā.',
        french: 'Rassemblons notre argent pour notre ḥajj.'
      },
      {
        num: 6,
        speakerAr: 'سَامِي',
        speakerFr: 'Sami',
        arabic: 'هَذَا هَدَفُنَا، وَنِيَّتُنَا لِلَّهِ.',
        phonetic: 'Hādhā hadafunā, wa niyyatunā li-llāh.',
        french: 'C’est notre objectif, et notre intention pour Allah.'
      },
      {
        num: 7,
        speakerAr: 'مُحَمَّد',
        speakerFr: 'Mohammed',
        arabic: 'مَالِي قَلِيلٌ، لَكِنْ نَصْبِرْ.',
        phonetic: 'Mālī qalīlun, lākin naṣbir.',
        french: 'Mon argent est peu, mais soyons patients.'
      },
      {
        num: 8,
        speakerAr: 'سَامِي',
        speakerFr: 'Sami',
        arabic: 'وَأَنَا أُسَاعِدُكَ مِنْ مَالِي.',
        phonetic: 'Wa-anā usā‘iduka min mālī.',
        french: 'Et moi, je t’aide avec mon argent.'
      },
      {
        num: 9,
        speakerAr: 'مُحَمَّد',
        speakerFr: 'Mohammed',
        arabic: 'نَحْنُ شُرَكَاءُ فِي الخَيْرِ.',
        phonetic: 'Naḥnu shurakā’u fī l-khayr.',
        french: 'Nous sommes partenaires dans le bien.'
      },
      {
        num: 10,
        speakerAr: 'سَامِي',
        speakerFr: 'Sami',
        arabic: 'بِإِذْنِهِ نَبْلُغُ حَجَّنَا.',
        phonetic: 'Bi-idhnihi nablughu ḥajjanā.',
        french: 'Avec Sa permission, nous atteindrons notre ḥajj.'
      }
    ]
  },
  {
    id: 'diag-2',
    titleFr: 'Dialogue 2 : Un Marocain rencontre un Mecquois (Pages 7 à 10)',
    titleAr: 'حِوَار ٢ : مَغْرِبِيٌّ يَلْتَقِي مَكِّيًّا',
    lines: [
      {
        num: 1,
        speakerAr: 'المَغْرِبِيّ',
        speakerFr: 'Le Marocain',
        arabic: 'أَنَا مُحَمَّدٌ مِنَ المَغْرِبِ، هَذِهِ أَوَّلُ زِيَارَتِي لِمَكَّةَ.',
        phonetic: 'Anā muḥammadun mina l-maghribi, hādhihi awwalu ziyāratī li-makkah.',
        french: 'Je suis Mohammed du Maroc, c’est ma première visite à La Mecque.'
      },
      {
        num: 2,
        speakerAr: 'المَكِّيّ',
        speakerFr: 'Le Mecquois',
        arabic: 'أَهْلًا وَسَهْلًا، أَنَا سَامِي مِنْ أَهْلِ مَكَّةَ، يُسْعِدُنِي لِقَاؤُكَ.',
        phonetic: 'Ahlan wa sahlan, anā sāmī min ahli makkah, yus‘idunī liqā’uka.',
        french: 'Bienvenue, je suis Sami de La Mecque, ravi de te rencontrer.'
      },
      {
        num: 3,
        speakerAr: 'المَغْرِبِيّ',
        speakerFr: 'Le Marocain',
        arabic: 'أَتَمَنَّى أَنْ أَرَى الكَعْبَةَ عَلَى هُدُوءٍ، مَا نَصِيحَتُكَ؟',
        phonetic: 'Atamannā an arā l-ka‘bata ‘alā hudū’, mā naṣīḥatuka?',
        french: 'J’aimerais voir la Kaaba calmement, que me conseilles-tu ?'
      },
      {
        num: 4,
        speakerAr: 'المَكِّيّ',
        speakerFr: 'Le Mecquois',
        arabic: 'اخْتَرْ وَقْتَ السَّحَرِ أَوْ بَعْدَ الفَجْرِ، الزِّحَامُ يَكُونُ أَقَلَّ.',
        phonetic: 'Ikhtar waqt as-saḥar aw ba‘da l-fajr, az-ziḥāmu yakūnu aqalla.',
        french: 'Choisis le moment avant l’aube ou juste après fajr, il y a moins d’affluence.'
      },
      {
        num: 5,
        speakerAr: 'المَغْرِبِيّ',
        speakerFr: 'Le Marocain',
        arabic: 'هَلْ تُرِينِي أَقْرَبَ مَدْخَلٍ لِلطَّوَافِ وَالسَّعْيِ؟',
        phonetic: 'Hal turīnī aqraba madkhalin liṭ-ṭawāfi wa s-sa‘y?',
        french: 'Peux-tu m’indiquer l’entrée la plus proche pour le ṭawāf et le sa‘y ?'
      },
      {
        num: 6,
        speakerAr: 'المَكِّيّ',
        speakerFr: 'Le Mecquois',
        arabic: 'مِنْ هُنَا بَابُ المَلِكِ عَبْدِ العَزِيزِ، وَالإِشَارَاتُ وَاضِحَةٌ دَاخِلًا.',
        phonetic: 'Min hunā bābu l-maliki ‘abdi l-‘azīz, wa l-ishārātu wāḍiḥatun dākhilan.',
        french: 'Par ici se trouve la porte du Roi Abdelaziz, et la signalisation est claire à l’intérieur.'
      },
      {
        num: 7,
        speakerAr: 'المَغْرِبِيّ',
        speakerFr: 'Le Marocain',
        arabic: 'أُحِبُّ أَنْ أَتَذَوَّقَ أَطْعِمَتَكُمْ، مَاذَا تَنْصَحُنِي أَوَّلًا؟',
        phonetic: 'Uḥibbu an atadhawwaqa aṭ‘imatakum, mādhā tanṣaḥunī awwalan?',
        french: 'J’aimerais goûter vos plats, que me conseilles-tu d’abord ?'
      },
      {
        num: 8,
        speakerAr: 'المَكِّيّ',
        speakerFr: 'Le Mecquois',
        arabic: 'جَرِّبِ المَعْصُوبَ وَالسَّمْبُوسَةَ، وَكُبَّةً حَارَّةً إِنْ أَحْبَبْتَ.',
        phonetic: 'Jarribi l-ma‘ṣūba wa s-sambūsata, wa kubbatan ḥārratan in aḥbabta.',
        french: 'Essaie le ma‘ṣoub et les samboussas, et une kubba épicée si tu aimes.'
      },
      {
        num: 9,
        speakerAr: 'المَغْرِبِيّ',
        speakerFr: 'Le Marocain',
        arabic: 'وَعِنْدَنَا الطَّاجِنُ وَالحَرِيرَةُ، سَأَدْعُوكَ لِتَذُوقَهُمَا.',
        phonetic: 'Wa ‘indanā ṭ-ṭājinu wa l-ḥarīrah, sa-ad‘ūka li-tadhūqahumā.',
        french: 'Chez nous, il y a le tajine et la harira, je t’inviterai à les goûter.'
      },
      {
        num: 10,
        speakerAr: 'المَكِّيّ',
        speakerFr: 'Le Mecquois',
        arabic: 'بِكُلِّ سُرُورٍ، نَدْخُلُ مُبَكِّرَيْنِ وَنُصَلِّي سُنَنًا قَبْلَ الجَمَاعَةِ.',
        phonetic: 'Bi-kulli surūrin, nadkhulu mubakkirayn wa nuṣallī sunanan qabla l-jamā‘ah.',
        french: 'Avec plaisir, entrons tôt et prions des prières surérogatoires avant l’office.'
      }
    ]
  },
  {
    id: 'diag-3',
    titleFr: 'Dialogue 3 : Organisation de la visite au Haram (Pages 10 à 12)',
    titleAr: 'حِوَار ٣ : فِي الحَرَمِ المَكِّيِّ',
    lines: [
      {
        num: 1,
        speakerAr: 'المَغْرِبِيّ',
        speakerFr: 'Le Marocain',
        arabic: 'اِسْمِي مُحَمَّدٌ، وَبِلَادِي المَغْرِبُ. هَذِهِ أَوَّلُ زِيَارَتِي لِحَرَمِكُمْ.',
        phonetic: 'Ismī muḥammadun, wa bilādī al-maghrib. Hādhihi awwalu ziyāratī li-ḥaramikum.',
        french: 'Je m’appelle Mohammed, et mon pays est le Maroc. C’est ma première visite à votre Haram.'
      },
      {
        num: 2,
        speakerAr: 'المَكِّيّ',
        speakerFr: 'Le Mecquois',
        arabic: 'اِسْمِي سَامِي، وَمَدِينَتِي مَكَّةُ. بُيُوتُنَا قَرِيبَةٌ مِنْ مَسْجِدِنَا الحَرَامِ.',
        phonetic: 'Ismī sāmī, wa madīnatī makkah. Buyūtunā qarībatun min masjidinā al-ḥarām.',
        french: 'Je m’appelle Sami, et ma ville est La Mecque. Nos maisons sont proches de notre Mosquée sacrée.'
      },
      {
        num: 3,
        speakerAr: 'المَغْرِبِيّ',
        speakerFr: 'Le Marocain',
        arabic: 'قَلْبِي يَشْتَاقُ لِرُؤْيَةِ كَعْبَتِكُمْ.',
        phonetic: 'Qalbī yashtāqu li-ru’yati ka‘batikum.',
        french: 'Mon cœur aspire à voir votre Kaaba.'
      },
      {
        num: 4,
        speakerAr: 'المَكِّيّ',
        speakerFr: 'Le Mecquois',
        arabic: 'طَرِيقُكُمْ مِنْ هَذَا البَابِ، وَخُطُوَاتُكُمْ آمِنَةٌ.',
        phonetic: 'Ṭarīqukum min hādhā l-bāb, wa khuṭuwātukum āminah.',
        french: 'Votre chemin passe par cette porte, et vos pas sont en sécurité.'
      },
      {
        num: 5,
        speakerAr: 'المَغْرِبِيّ',
        speakerFr: 'Le Marocain',
        arabic: 'هَلْ تُشَارِكُنِي وِرْدِي بَعْدَ الفَجْرِ؟',
        phonetic: 'Hal tushārikunī wirdī ba‘da l-fajr?',
        french: 'Partages-tu ma lecture quotidienne après l’aube ?'
      },
      {
        num: 6,
        speakerAr: 'المَكِّيّ',
        speakerFr: 'Le Mecquois',
        arabic: 'سَأُتَابِعُ وِرْدَكَ، وَتُتَابِعُ وِرْدِي. فُرْصَتُنَا عَظِيمَةٌ؛ نُخْلِصُ نِيَّاتِنَا لِرَبِّنَا.',
        phonetic: 'Sa-’utābi‘u wirdaka, wa tutābi‘u wirdī. Furṣatunā ‘aẓīmah; nukhliṣu niyyātinā li-rabbinā.',
        french: 'Je suivrai ton wird, et tu suivras le mien. Notre occasion est grande ; rendons sincères nos intentions pour notre Seigneur.'
      }
    ]
  }
];

export const TWENTY_FIVE_PROPHETS_QURAN = [
  { num: 1, fr: 'Adam', ar: 'آدَم' },
  { num: 2, fr: 'Idris', ar: 'إِدْرِيس' },
  { num: 3, fr: 'Noé', ar: 'نُوح' },
  { num: 4, fr: 'Houd', ar: 'هُود' },
  { num: 5, fr: 'Salih', ar: 'صَالِح' },
  { num: 6, fr: 'Abraham', ar: 'إِبْرَاهِيم' },
  { num: 7, fr: 'Loth', ar: 'لُوط' },
  { num: 8, fr: 'Ismaël', ar: 'إِسْمَاعِيل' },
  { num: 9, fr: 'Isaac', ar: 'إِسْحَاق' },
  { num: 10, fr: 'Jacob', ar: 'يَعْقُوب' },
  { num: 11, fr: 'Joseph', ar: 'يُوسُف' },
  { num: 12, fr: 'Chou‘ayb', ar: 'شُعَيْب' },
  { num: 13, fr: 'Job', ar: 'أَيُّوب' },
  { num: 14, fr: 'Dhul-Kifl', ar: 'ذُو الكِفْل' },
  { num: 15, fr: 'Moïse', ar: 'مُوسَى' },
  { num: 16, fr: 'Aaron', ar: 'هَارُون' },
  { num: 17, fr: 'David', ar: 'دَاوُود' },
  { num: 18, fr: 'Salomon', ar: 'سُلَيْمَان' },
  { num: 19, fr: 'Élie', ar: 'إِلْيَاس' },
  { num: 20, fr: 'Élisée', ar: 'اليَسَع' },
  { num: 21, fr: 'Jonas', ar: 'يُونُس' },
  { num: 22, fr: 'Zacharie', ar: 'زَكَرِيَّا' },
  { num: 23, fr: 'Jean (Yahya)', ar: 'يَحْيَى' },
  { num: 24, fr: 'Jésus (‘Issa)', ar: 'عِيسَى' },
  { num: 25, fr: 'Muhammad ﷺ', ar: 'مُحَمَّد ﷺ' }
];

export const QUESTIONNAIRE_ISLAM_9_QUESTIONS = [
  {
    num: 1,
    points: '4 points',
    titleFr: 'Les cinq piliers de l’Islam',
    titleAr: 'أَرْكَانُ الإِسْلَامِ الخَمْسَة',
    prompt: 'Quels sont les 5 piliers de l’Islam ? (Le 4ème pilier « SIYAM — Le jeûne du mois de Ramadan / صَوْمُ رَمَضَانَ » est déjà rempli sur la fiche, complète les 4 autres) :',
    items: [
      '1. ..........................................................................................................',
      '2. ..........................................................................................................',
      '3. ..........................................................................................................',
      '4. SIYAM — Le jeûne du mois de Ramadan (صَوْمُ رَمَضَانَ)',
      '5. ..........................................................................................................'
    ]
  },
  {
    num: 2,
    points: '2,5 points',
    titleFr: 'Les six piliers de la Foi — Al-Iman',
    titleAr: 'أَرْكَانُ الإِيمَانِ السِّتَّة',
    prompt: 'Quels sont les 6 piliers de la Foi ? (Le 3ème pilier « CROIRE AUX LIVRES RÉVÉLÉS / الإِيمَانُ بِالكُتُبِ » est déjà rempli sur la fiche, complète les 5 autres) :',
    items: [
      '1. ..........................................................................................................',
      '2. ..........................................................................................................',
      '3. CROIRE AUX LIVRES RÉVÉLÉS (الإِيمَانُ بِالكُتُبِ)',
      '4. ..........................................................................................................',
      '5. ..........................................................................................................',
      '6. ..........................................................................................................'
    ]
  },
  {
    num: 3,
    points: '1,5 point',
    titleFr: 'Définition du mot « Sunna »',
    titleAr: 'السُّنَّة',
    prompt: 'D’après la partie 1 du cours (« Mots essentiels »), que désigne le mot Sunna (السُّنَّة) en Islam ?',
    items: ['Réponse : ..........................................................................................................']
  },
  {
    num: 4,
    points: '3 points',
    titleFr: 'Les Prophètes mentionnés dans le Coran',
    titleAr: 'الأَنْبِيَاءُ فِي القُرْآن',
    prompt: 'Réponds aux 3 questions suivantes :',
    items: [
      'a) Combien de prophètes sont mentionnés dans le Coran ? .............................................',
      'b) Qui est le premier être humain et le premier prophète selon l’Islam ? ..........................',
      'c) Qui est le dernier prophète envoyé par Allah ? .....................................................'
    ]
  },
  {
    num: 5,
    points: '2 points',
    titleFr: 'Les Livres révélés et leurs Prophètes',
    titleAr: 'الكُتُبُ السَّمَاوِيَّة',
    prompt: 'Relie chaque Livre révélé au Prophète à qui Allah l’a transmis :',
    items: [
      '1. La Torah (التَّوْرَاة)  ←→  • Jésus / ‘Issa (عِيسَى) · • Moïse / Moussa (مُوسَى) · • Muhammad ﷺ · • David / Dawoud (دَاوُد)',
      '2. Les Psaumes / Zabour (الزَّبُور)',
      '3. L’Évangile / Injeel (الإِنْجِيل)',
      '4. Le Coran (القُرْآن)'
    ]
  },
  {
    num: 6,
    points: '2,5 points',
    titleFr: 'Les 5 prières obligatoires et le nombre de Rak‘at',
    titleAr: 'الصَّلَوَاتُ الخَمْس',
    prompt: 'Complète le tableau suivant en indiquant le nombre d’unités (Rak‘at) obligatoires pour chaque prière :',
    items: [
      '1. Fajr (Aube — الفَجْر) : .................. Rak‘at',
      '2. Dhuhr (Midi — الظُّهْر) : .................. Rak‘at',
      '3. Asr (Après-midi — العَصْر) : .................. Rak‘at',
      '4. Maghrib (Coucher du soleil — المَغْرِب) : .................. Rak‘at',
      '5. Isha (Nuit — العِشَاء) : .................. Rak‘at'
    ]
  },
  {
    num: 7,
    points: '2 points',
    titleFr: 'Les invocations et rappels du quotidien',
    titleAr: 'الأَذْكَارُ اليَوْمِيَّة',
    prompt: 'Que signifient ces formules en français (ou à quel moment le musulman les prononce-t-il) ?',
    items: [
      '1. Bismillâh (بِسْمِ اللَّهِ) : .....................................................................................',
      '2. Al-hamdu lillâh (الحَمْدُ لِلَّهِ) : ..............................................................................',
      '3. Astaghfirullâh (أَسْتَغْفِرُ اللَّهَ) : ..............................................................................',
      '4. Incha Allah (إِنْ شَاءَ اللَّهُ) : ..................................................................................'
    ]
  },
  {
    num: 8,
    points: '1,5 point',
    titleFr: 'La vie du Prophète Muhammad ﷺ',
    titleAr: 'السِّيرَةُ النَّبَوِيَّة',
    prompt: 'Réponds aux 3 questions suivantes sur la vie du Prophète ﷺ :',
    items: [
      'a) Dans quelle ville est né le Prophète Muhammad ﷺ (vers l’an 570) ? ................................',
      'b) Quel est le nom de l’ange qui lui a transmis la révélation du Coran ? ............................',
      'c) Vers quelle ville a-t-il émigré lors de l’Hégire (Hijra) en 622 ? ..................................'
    ]
  },
  {
    num: 9,
    points: '1 point',
    titleFr: 'La Zakat et la Sadaqa',
    titleAr: 'الزَّكَاةُ وَالصَّدَقَة',
    prompt: 'Réponds aux 2 questions suivantes :',
    items: [
      'a) Quelle est la différence entre la Zakat et la Sadaqa ? ............................................',
      'b) Quel est le taux habituel de la Zakat sur l’épargne (en %) ? ......................................'
    ]
  }
];
