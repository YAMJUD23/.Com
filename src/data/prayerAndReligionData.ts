import { QuizQuestion } from './alphabetData';

export interface WuduStep {
  stepNumber: number;
  titleFr: string;
  obligationType: 'Pilier obligatoire (Farḍ)' | 'Sunnah prophétique recommandée';
  repetition: string;
  descriptionFr: string;
  arabic: string;
  phonetic: string;
  french: string;
}

export interface FivePrayerInfo {
  id: string;
  nameFr: string;
  nameArabic: string;
  namePhonetic: string;
  meaningFr: string;
  fardRakats: number;
  sunnahBefore: number;
  sunnahAfter: number;
  recitationVoice: string;
  timeWindowFr: string;
}

export interface SalatStep {
  stepNumber: number;
  postureFr: string;
  statusFr: 'Pilier (Rukn)' | 'Obligation (Wājib)' | 'Sunnah recommandée';
  actionFr: string;
  arabic: string;
  phonetic: string;
  french: string;
  tipFr: string;
}

export interface IslamicPillarDetail {
  number: number;
  titleFr: string;
  arabic: string;
  phonetic: string;
  french: string;
  summaryFr: string;
  deepPrinciplesFr: string[];
  proofArabic: string;
  proofPhonetic: string;
  proofFrench: string;
}

export interface FiqhStatusItem {
  code: string;
  nameFr: string;
  arabic: string;
  phonetic: string;
  definitionFr: string;
  consequenceFr: string;
  examplesFr: string[];
}

export interface LegalMaximItem {
  number: number;
  titleFr: string;
  arabic: string;
  phonetic: string;
  french: string;
  explanationFr: string;
  concreteCaseFr: string;
}

export interface MaqasidItem {
  number: number;
  titleFr: string;
  arabic: string;
  phonetic: string;
  french: string;
  descriptionFr: string;
  practicalExamplesFr: string;
}

export interface AkhlaqVirtueItem {
  id: string;
  virtueFr: string;
  arabic: string;
  phonetic: string;
  french: string;
  explanationFr: string;
  quoteArabic: string;
  quotePhonetic: string;
  quoteFrench: string;
  sourceFr: string;
}

export interface DailyDuaItem {
  id: string;
  momentFr: string;
  category: 'Matin & Soir' | 'Maison & Mosquée' | 'Repas & Sommeil' | 'Épreuves & Parents';
  arabic: string;
  phonetic: string;
  french: string;
  contextFr: string;
}

export interface SirahMilestone {
  period: string;
  yearHijriOrCe: string;
  titleFr: string;
  arabic: string;
  phonetic: string;
  french: string;
  summaryFr: string;
  lessonFr: string;
}

// ============================================================================
// 1. LES ABLUTIONS (AL-WUḌŪ’) — PAS À PAS
// ============================================================================
export const WUDU_STEPS: WuduStep[] = [
  {
    stepNumber: 1,
    titleFr: 'L’intention dans le cœur (An-Niyyah) & le Bismillâh',
    obligationType: 'Pilier obligatoire (Farḍ)',
    repetition: '1 fois',
    descriptionFr:
      'Formuler dans son cœur l’intention de se purifier pour accomplir la prière (sans la prononcer à voix haute), puis dire « Bismi Llāh » en ouvrant l’eau.',
    arabic: 'بِسْمِ اللَّهِ',
    phonetic: 'Bismi Llāhi',
    french: 'Au nom d’Allah',
    },
  {
    stepNumber: 2,
    titleFr: 'Laver les deux mains jusqu’aux poignets',
    obligationType: 'Sunnah prophétique recommandée',
    repetition: '3 fois',
    descriptionFr:
      'Laver soigneusement les mains jusqu’aux poignets en faisant passer l’eau entre les doigts.',
    arabic: 'غَسْلُ الْكَفَّيْنِ ثَلَاثًا',
    phonetic: 'Ghaslu l-kaffayni thalāthan',
    french: 'Le lavage des deux paumes (mains) trois fois'
  },
  {
    stepNumber: 3,
    titleFr: 'Rincer la bouche (Al-Maḍmaḍah) et le nez (Al-Istinchāq)',
    obligationType: 'Pilier obligatoire (Farḍ)',
    repetition: '3 fois',
    descriptionFr:
      'Prendre de l’eau dans la main droite pour rincer la bouche, puis aspirer légèrement de l’eau dans les narines et la rejeter avec la main gauche.',
    arabic: 'الْمَضْمَضَةُ وَالِاسْتِنْشَاقُ',
    phonetic: 'Al-maḍmaḍatu wa l-istinchāqu',
    french: 'Le rinçage de la bouche et des narines'
  },
  {
    stepNumber: 4,
    titleFr: 'Laver le visage entier',
    obligationType: 'Pilier obligatoire (Farḍ)',
    repetition: '3 fois',
    descriptionFr:
      'Laver le visage depuis la racine des cheveux du front jusqu’au bas du menton, et d’une oreille à l’autre.',
    arabic: 'غَسْلُ الْوَجْهِ كَامِلًا',
    phonetic: 'Ghaslu l-wajhi kāmilan',
    french: 'Le lavage complet du visage'
  },
  {
    stepNumber: 5,
    titleFr: 'Laver les avant-bras jusqu’aux coudes inclus',
    obligationType: 'Pilier obligatoire (Farḍ)',
    repetition: '3 fois chacun (droit puis gauche)',
    descriptionFr:
      'Laver le bras droit du bout des doigts jusqu’au coude inclus (3 fois), puis le bras gauche de la même manière (3 fois).',
    arabic: 'غَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ',
    phonetic: 'Ghaslu l-yadayni ilā l-mirfaqayni',
    french: 'Le lavage des deux bras jusqu’aux coudes inclus'
  },
  {
    stepNumber: 6,
    titleFr: 'Essuyer la tête (Al-Masḥ) et les oreilles',
    obligationType: 'Pilier obligatoire (Farḍ)',
    repetition: '1 seule fois',
    descriptionFr:
      'Mouiller ses mains et les passer du front vers la nuque puis revenir au front, et essuyer l’intérieur des oreilles avec les index et l’extérieur avec les pouces.',
    arabic: 'مَسْحُ الرَّأْسِ وَالْأُذُنَيْنِ مَرَّةً وَاحِدَةً',
    phonetic: 'Masḥu r-ra’si wa l-udhunayni marratan wāḥidatan',
    french: 'L’essuyage de la tête et des deux oreilles une seule fois'
  },
  {
    stepNumber: 7,
    titleFr: 'Laver les deux pieds jusqu’aux chevilles incluses',
    obligationType: 'Pilier obligatoire (Farḍ)',
    repetition: '3 fois chacun (pied droit puis gauche)',
    descriptionFr:
      'Laver le pied droit jusqu’à la cheville incluse en passant entre les orteils, puis le pied gauche.',
    arabic: 'غَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ',
    phonetic: 'Ghaslu r-rijlayni ilā l-ka‘bayni',
    french: 'Le lavage des deux pieds jusqu’aux chevilles'
  },
  {
    stepNumber: 8,
    titleFr: 'Invocation de clôture des ablutions',
    obligationType: 'Sunnah prophétique recommandée',
    repetition: '1 fois à la fin',
    descriptionFr:
      'En prononçant cette invocation après les ablutions, les huit portes du Paradis s’ouvrent au croyant (Hadith rapporté par Muslim).',
    arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
    phonetic: 'Ach-hadu an lā ilāha illa Llāhu waḥdahu lā charīka lah, wa ach-hadu anna Muḥammadan ‘abduhu wa rasūluh. Allāhumma j‘alnī mina t-tawwābīna wa j‘alnī mina l-mutaṭahhirīn',
    french: 'J’atteste qu’il n’y a de divinité digne d’adoration qu’Allah Seul sans associé, et que Muhammad est Son serviteur et Messager. Ô Allah, place-moi parmi ceux qui se repentent et ceux qui se purifient'
  }
];

export const WUDU_NULLIFIERS: Array<{ titleFr: string; detailFr: string; arabic: string; phonetic: string }> = [
  {
    titleFr: '1. Tout ce qui sort des deux voies naturelles',
    detailFr: 'Urine, selles ou gaz intestinal annulent immédiatement les ablutions.',
    arabic: 'الْخَارِجُ مِنَ السَّبِيلَيْنِ',
    phonetic: 'Al-khāriju mina s-sabīlayn'
  },
  {
    titleFr: '2. Le sommeil profond',
    detailFr: 'Dormir profondément au point de perdre conscience (un léger assoupissement assis n’annule pas).',
    arabic: 'النَّوْمُ الْعَمِيقُ',
    phonetic: 'An-nawmu l-‘amīq'
  },
  {
    titleFr: '3. La perte de connaissance',
    detailFr: 'Évanouissement, anesthésie ou perte de lucidité.',
    arabic: 'زَوَالُ الْعَقْلِ',
    phonetic: 'Zawālu l-‘aql'
  },
  {
    titleFr: '4. Le Tayammum (Ablutions sèches en cas d’absence d’eau ou maladie)',
    detailFr: 'Frapper une fois la terre/pierre propre avec les paumes, souffler légèrement, puis essuyer le visage et les deux mains jusqu’aux poignets avec l’intention de prier.',
    arabic: 'التَّيَمُّمُ بِالصَّعِيدِ الطَّيِّبِ',
    phonetic: 'At-Tayammumu bi-ṣ-ṣa‘īdi ṭ-ṭayyib'
  }
];

// ============================================================================
// 2. LES 5 PRIÈRES QUOTIDIENNES & LE GUIDE PAS-À-PAS DE LA SALÂT
// ============================================================================
export const FIVE_DAILY_PRAYERS: FivePrayerInfo[] = [
  {
    id: 'fajr',
    nameFr: 'Al-Fajr (Aṣ-Ṣubḥ)',
    nameArabic: 'صَلَاةُ الْفَجْرِ (الصُّبْحِ)',
    namePhonetic: 'Ṣalātu l-Fajr (Aṣ-Ṣubḥ)',
    meaningFr: 'Prière de l’Aube',
    fardRakats: 2,
    sunnahBefore: 2,
    sunnahAfter: 0,
    recitationVoice: 'À voix haute (les 2 Rak‘ât)',
    timeWindowFr: 'De l’apparition de l’aube véritable jusqu’au lever du soleil'
  },
  {
    id: 'dhuhr',
    nameFr: 'Aẓ-ﻈuhr',
    nameArabic: 'صَلَاةُ الظُّهْرِ',
    namePhonetic: 'Ṣalātu ẓ-Ẓuhr',
    meaningFr: 'Prière de la Mi-journée (Midi)',
    fardRakats: 4,
    sunnahBefore: 4,
    sunnahAfter: 2,
    recitationVoice: 'À voix basse (les 4 Rak‘ât)',
    timeWindowFr: 'Après le zénith du soleil jusqu’au moment où l’ombre d’un objet égale sa taille'
  },
  {
    id: 'asr',
    nameFr: 'Al-‘Aṣr',
    nameArabic: 'صَلَاةُ الْعَصْرِ',
    namePhonetic: 'Ṣalātu l-‘Aṣr',
    meaningFr: 'Prière de l’Après-midi',
    fardRakats: 4,
    sunnahBefore: 0,
    sunnahAfter: 0,
    recitationVoice: 'À voix basse (les 4 Rak‘ât)',
    timeWindowFr: 'Du milieu de l’après-midi jusqu’avant le coucher du soleil'
  },
  {
    id: 'maghrib',
    nameFr: 'Al-Maghrib',
    nameArabic: 'صَلَاةُ الْمَغْرِبِ',
    namePhonetic: 'Ṣalātu l-Maghrib',
    meaningFr: 'Prière du Coucher du soleil',
    fardRakats: 3,
    sunnahBefore: 0,
    sunnahAfter: 2,
    recitationVoice: 'Voix haute (2 premières Rak‘ât) + Voix basse (3e Rak‘a)',
    timeWindowFr: 'Juste après le coucher complet du soleil jusqu’à la disparition du crépuscule rouge'
  },
  {
    id: 'isha',
    nameFr: 'Al-‘Ichā’',
    nameArabic: 'صَلَاةُ الْعِشَاءِ',
    namePhonetic: 'Ṣalātu l-‘Ichā’',
    meaningFr: 'Prière de la Nuit',
    fardRakats: 4,
    sunnahBefore: 0,
    sunnahAfter: 2,
    recitationVoice: 'Voix haute (2 premières Rak‘ât) + Voix basse (3e et 4e Rak‘ât) + Witr',
    timeWindowFr: 'De la disparition du crépuscule jusqu’au milieu de la nuit (ou l’aube)'
  }
];

export const SALAT_STEP_BY_STEP: SalatStep[] = [
  {
    stepNumber: 1,
    postureFr: 'Debout face à la Qibla & Takbīrat al-Iḥrām',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Se tenir debout en direction de La Mecque (Qibla), lever les mains au niveau des épaules ou des oreilles et prononcer le Takbîr d’entrée en prière.',
    arabic: 'اللَّهُ أَكْبَرُ',
    phonetic: 'Allāhu akbar',
    french: 'Allah est le Plus Grand',
    tipFr: 'Poser ensuite la main droite sur la main gauche au niveau de la poitrine et regarder l’endroit de prosternation.'
  },
  {
    stepNumber: 2,
    postureFr: 'Invocation d’ouverture (Du‘ā’ al-Istiftāḥ)',
    statusFr: 'Sunnah recommandée',
    actionFr: 'Réciter à voix basse l’invocation d’ouverture avant la Fâtiha (uniquement dans la 1re Rak‘a).',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلَٰهَ غَيْرُكَ',
    phonetic: 'Subḥānaka Llāhumma wa bi-ḥamdika, wa tabāraka smuka, wa ta‘ālā jadduka, wa lā ilāha ghayruk',
    french: 'Gloire et pureté à Toi, ô Allah, et par Ta louange. Béni soit Ton Nom, exaltée soit Ta Majesté, et il n’y a de divinité que Toi',
    tipFr: 'Puis dire à voix basse : « A‘ūdhu bi-Llāhi mina ch-chayṭāni r-rajīm » (Je cherche protection auprès d’Allah contre Satan le banni).'
  },
  {
    stepNumber: 3,
    postureFr: 'Récitation de Sourate Al-Fātiḥa + « Āmīn »',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Réciter posément les 7 versets de Sourate Al-Fātiḥa dans chaque Rak‘a, puis dire « Āmīn » (Ô Allah, exauce !).',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ... — آمِينَ',
    phonetic: 'Bismi Llāhi r-Raḥmāni r-Raḥīm · Al-ḥamdu lillāhi Rabbi l-‘ālamīn... — Āmīn',
    french: 'Au nom d’Allah... Louange à Allah, Seigneur des mondes... — Exauce, ô Allah !',
    tipFr: 'Dans les 1re et 2e Rak‘ât uniquement, réciter ensuite une sourate courte (ex : Al-Ikhlāṣ, Al-‘Aṣr, Al-Kawthar...).'
  },
  {
    stepNumber: 4,
    postureFr: 'L’inclinaison (Ar-Rukū‘)',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Dire « Allāhu akbar », s’incliner le dos bien droit à l’horizontale, les mains posées sur les genoux, et dire 3 fois :',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ (٣ مَرَّاتٍ)',
    phonetic: 'Subḥāna Rabbiya l-‘Aẓīm (3 fois)',
    french: 'Gloire et pureté à mon Seigneur l’Immense (3 fois)',
    tipFr: 'Marquer un temps de calme et d’immobilité (Ṭuma’nīnah) dans l’inclinaison.'
  },
  {
    stepNumber: 5,
    postureFr: 'Le redressement de l’inclinaison (Al-I‘tidāl)',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Se relever complètement en disant « Sami‘a Llāhu li-man ḥamidah », puis une fois debout droit dire « Rabbanā wa laka l-ḥamd ».',
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ — رَبَّنَا وَلَكَ الْحَمْدُ',
    phonetic: 'Sami‘a Llāhu li-man ḥamidah — Rabbanā wa laka l-ḥamd',
    french: 'Allah entend celui qui Le loue — Notre Seigneur, à Toi appartient toute la louange',
    tipFr: 'Bien reprendre la position verticale complète avant de descendre en prosternation.'
  },
  {
    stepNumber: 6,
    postureFr: 'La première prosternation (As-Sujūd)',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Dire « Allāhu akbar » et se prosterner sur 7 membres (le front avec le nez, les 2 paumes, les 2 genoux, les orteils des 2 pieds) en disant 3 fois :',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ (٣ مَرَّاتٍ)',
    phonetic: 'Subḥāna Rabbiya l-A‘lā (3 fois)',
    french: 'Gloire et pureté à mon Seigneur le Très-Haut (3 fois)',
    tipFr: 'Le Prophète ﷺ a dit : « Le moment où le serviteur est le plus proche de son Seigneur est lorsqu’il est prosterné ; multipliez-y donc les invocations. »'
  },
  {
    stepNumber: 7,
    postureFr: 'L’assise entre les deux prosternations (Al-Jalsah)',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Se relever en position assise en disant « Allāhu akbar », poser les mains sur les cuisses et dire :',
    arabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
    phonetic: 'Rabbi ghfir lī, Rabbi ghfir lī',
    french: 'Seigneur pardonne-moi, Seigneur pardonne-moi',
    tipFr: 'On peut ajouter : « Allāhumma ghfir lī, wa rḥamnī, wa hdinī, wa ‘āfinī, wa rzuqnī » (Ô Allah pardonne-moi, fais-moi miséricorde, guide-moi, préserve-moi et accorde-moi ma subsistance).'
  },
  {
    stepNumber: 8,
    postureFr: 'La seconde prosternation & fin de la 1re Rak‘a',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Dire « Allāhu akbar » et accomplir la 2e prosternation exactement comme la première, puis se relever pour la 2e Rak‘a en disant « Allāhu akbar ».',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ (٣ مَرَّاتٍ)',
    phonetic: 'Subḥāna Rabbiya l-A‘lā (3 fois)',
    french: 'Gloire et pureté à mon Seigneur le Très-Haut (3 fois)',
    tipFr: 'Cela complète 1 unité de prière (1 Rak‘a). La 2e Rak‘a se fait exactement pareil à partir de la Fâtiha.'
  },
  {
    stepNumber: 9,
    postureFr: 'Le Tachahhud (At-Taḥiyyāt) à la fin de la 2e Rak‘a',
    statusFr: 'Obligation (Wājib)',
    actionFr: 'Après la 2e prosternation de la 2e Rak‘a, rester assis, lever l’index droit et réciter le Tachahhud :',
    arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    phonetic: 'At-taḥiyyātu lillāhi wa ṣ-ṣalawātu wa ṭ-ṭayyibāt, as-salāmu ‘alayka ayyuhā n-Nabiyyu wa raḥmatu Llāhi wa barakātuh, as-salāmu ‘alaynā wa ‘alā ‘ibādi Llāhi ṣ-ṣāliḥīn, ach-hadu an lā ilāha illa Llāhu wa ach-hadu anna Muḥammadan ‘abduhu wa rasūluh',
    french: 'Les salutations distinguées appartiennent à Allah, ainsi que les prières et les bonnes œuvres. Que la paix soit sur toi, ô Prophète, ainsi que la miséricorde d’Allah et Ses bénédictions. Que la paix soit sur nous et sur les serviteurs vertueux d’Allah. J’atteste qu’il n’y a de divinité qu’Allah et que Muhammad est Son serviteur et Son Messager',
    tipFr: 'Si la prière compte 3 ou 4 Rak‘ât, on se relève ici pour les Rak‘ât suivantes (où l’on récite uniquement Al-Fâtiha à voix basse).'
  },
  {
    stepNumber: 10,
    postureFr: 'La Prière Ibrāhīmique (Aṣ-Ṣalātu l-Ibrāhīmiyyah — Dernière assise)',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Lors de la toute dernière assise de la prière, ajouter après le Tachahhud :',
    arabic: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    phonetic: 'Allāhumma ṣalli ‘alā Muḥammadin wa ‘alā āli Muḥammadin kamā ṣallayta ‘alā Ibrāhīma wa ‘alā āli Ibrāhīma innaka Ḥamīdun Majīd. Allāhumma bārik ‘alā Muḥammadin wa ‘alā āli Muḥammadin kamā bārakta ‘alā Ibrāhīma wa ‘alā āli Ibrāhīma innaka Ḥamīdun Majīd',
    french: 'Ô Allah, accorde Ta grâce à Muhammad et à la famille de Muhammad comme Tu l’as accordée à Ibrâhîm et à la famille d’Ibrâhîm, Tu es certes Digne de louange et de gloire. Ô Allah, bénis Muhammad et la famille de Muhammad comme Tu as béni Ibrâhîm et la famille d’Ibrâhîm, Tu es certes Digne de louange et de gloire',
    tipFr: 'Avant le salut final, il est recommandé de demander protection contre 4 choses (le châtiment de l’Enfer, le châtiment de la tombe, les épreuves de la vie/mort et du faux Messie).'
  },
  {
    stepNumber: 11,
    postureFr: 'Les deux salutations finales (At-Taslīm)',
    statusFr: 'Pilier (Rukn)',
    actionFr: 'Tourner la tête vers la droite puis vers la gauche en disant à chaque fois :',
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
    phonetic: 'As-salāmu ‘alaykum wa raḥmatu Llāh',
    french: 'Que la paix et la miséricorde d’Allah soient sur vous',
    tipFr: 'La prière est alors terminée. On enchaîne avec les invocations après la prière (Astaghfiru Llâh 3 fois + Tasbîḥ).'
  }
];

// ============================================================================
// 3. LES 5 PILIERS DE L’ISLAM & LES 6 PILIERS DE LA FOI (APPROFONDIS)
// ============================================================================
export const FIVE_PILLARS_ISLAM: IslamicPillarDetail[] = [
  {
    number: 1,
    titleFr: 'La Double Attestation de Foi (Ach-Chahādatān)',
    arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ',
    phonetic: 'Ach-hadu an lā ilāha illa Llāhu wa ach-hadu anna Muḥammadan Rasūlu Llāh',
    french: 'J’atteste qu’il n’y a de divinité digne d’adoration qu’Allah et j’atteste que Muhammad est le Messager d’Allah',
    summaryFr:
      'Clé d’entrée dans l’Islam reposant sur deux fondements : vouer toute adoration exclusivement à Allah (Ikhlāṣ) et suivre l’enseignement du Prophète ﷺ (Mutāba‘ah).',
    deepPrinciplesFr: [
      'Négation (Lā ilāha = nulle divinité ne mérite l’adoration) suivie de l’Affirmation (illa Llāh = sauf Allah l’Unique).',
      'Implique 7 conditions classiques chez les savants : la science (‘Ilm), la certitude (Yaqīn), l’acceptation (Qabūl), la soumission (Inqiyād), la véracité (Ṣidq), la sincérité (Ikhlāṣ) et l’amour (Maḥabbah).'
    ],
    proofArabic: 'فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ',
    proofPhonetic: 'Fa-‘lam annahu lā ilāha illa Llāh',
    proofFrench: '« Sache donc qu’en vérité il n’y a point de divinité à part Allah » (Coran 47:19)'
  },
  {
    number: 2,
    titleFr: 'L’accomplissement de la Prière (Iqāmatu ṣ-Ṣalāt)',
    arabic: 'إِقَامُ الصَّلَاةِ',
    phonetic: 'Iqāmu ṣ-Ṣalāt',
    french: 'L’accomplissement régulier et attentif des 5 prières quotidiennes',
    summaryFr:
      'Lien direct et quotidien entre le serviteur et son Seigneur, accomplie 5 fois par jour à des heures déterminées avec recueillement (Khuchū‘).',
    deepPrinciplesFr: [
      'Conditions préalables (Churūṭ) : pureté rituelle (Wuḍū’), pureté du corps/vêtement/lieu, couverture de la ‘Awrah, entrée de l’heure, orientation vers la Qibla et intention.',
      'La prière préserve de la turpitude et du blâmable et constitue la première œuvre sur laquelle le croyant sera interrogé.'
    ],
    proofArabic: 'إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا',
    proofPhonetic: 'Inna ṣ-ṣalāta kānat ‘alā l-mu’minīna kitāban mawqūtā',
    proofFrench: '« La prière demeure, pour les croyants, une prescription à des temps déterminés » (Coran 4:103)'
  },
  {
    number: 3,
    titleFr: 'L’Aumône Légale Purificatrice (Ītā’u z-Zakāt)',
    arabic: 'إِيتَاءُ الزَّكَاةِ',
    phonetic: 'Ītā’u z-Zakāt',
    french: 'L’acquittement de l’aumône obligatoire annuelle',
    summaryFr:
      'Droit des pauvres et des nécessiteux sur l’épargne qui atteint le seuil minimal (Niṣāb) et reste détenue pendant une année lunaire complète (Ḥawl).',
    deepPrinciplesFr: [
      'Zakāt al-Māl : 2,5 % (un quarantième) de l’épargne conservée un an au-dessus du Niṣāb (équivalent de 85 g d’or).',
      'Zakāt al-Fiṭr : aumône alimentaire versée à la fin du mois de Ramadan avant la prière de l’Aïd pour purifier le jeûneur et nourrir les démunis.'
    ],
    proofArabic: 'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا',
    proofPhonetic: 'Khudh min amwālihim ṣadaqatan tuṭahhiruhum wa tuzakkīhim bihā',
    proofFrench: '« Prélève de leurs biens une aumône par laquelle tu les purifies et les bénis » (Coran 9:103)'
  },
  {
    number: 4,
    titleFr: 'Le Jeûne du Mois de Ramadan (Ṣawmu Ramaḍān)',
    arabic: 'صَوْمُ شَهْرِ رَمَضَانَ',
    phonetic: 'Ṣawmu chahri Ramaḍān',
    french: 'Le jeûne du neuvième mois du calendrier lunaire',
    summaryFr:
      'S’abstenir de manger, de boire et de tout ce qui rompt le jeûne depuis l’aube véritable (Fajr) jusqu’au coucher du soleil (Maghrib) avec l’intention d’adorer Allah.',
    deepPrinciplesFr: [
      'École de la piété (Taqwā), de la maîtrise de soi, de la patience (Ṣabr) et de la compassion envers ceux qui souffrent de la faim.',
      'Le malade et le voyageur sont dispensés pendant l’épreuve et rattrapent leurs jours plus tard (« Allah veut pour vous la facilité » — Coran 2:185).'
    ],
    proofArabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ... لَعَلَّكُمْ تَتَّقُونَ',
    proofPhonetic: 'Yā ayyuhā lladhīna āmanū kutiba ‘alaykumu ṣ-ṣiyāmu... la‘allakum tattaqūn',
    proofFrench: '« Ô les croyants ! Le jeûne vous a été prescrit... afin que vous atteigniez la piété » (Coran 2:183)'
  },
  {
    number: 5,
    titleFr: 'Le Pèlerinage à la Maison Sacrée (Ḥajju l-Bayt)',
    arabic: 'حَجُّ الْبَيْتِ لِمَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
    phonetic: 'Ḥajju l-Bayti li-mani staṭā‘a ilayhi sabīlā',
    french: 'Le pèlerinage à La Mecque pour celui qui en a la capacité',
    summaryFr:
      'Obligatoire une seule fois dans la vie pour toute personne qui en possède les moyens physiques et financiers.',
    deepPrinciplesFr: [
      'Symbole d’unité et d’égalité universelle : tous les croyants vêtus de blanc (Iḥrām) autour de la Kaaba (Ṭawāf), entre Ṣafā et Marwah (Sa‘y) et sur le mont ‘Arafāt.',
      'Rappelle l’héritage du Prophète Ibrāhīm (Abraham), de son épouse Hājar et de leur fils Ismā‘īl (paix sur eux).'
    ],
    proofArabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
    proofPhonetic: 'Wa lillāhi ‘alā n-nāsi ḥijju l-Bayti mani staṭā‘a ilayhi sabīlā',
    proofFrench: '« Et c’est un devoir envers Allah pour les gens qui en ont les moyens, d’aller faire le pèlerinage de la Maison » (Coran 3:97)'
  }
];

export const SIX_PILLARS_IMAN: IslamicPillarDetail[] = [
  {
    number: 1,
    titleFr: 'La Foi en Allah & les 3 Dimensions du Tawḥīd (الْإِيمَانُ بِاللَّهِ)',
    arabic: 'الْإِيمَانُ بِاللَّهِ وَتَوْحِيدُهُ',
    phonetic: 'Al-Īmānu bi-Llāhi wa Tawḥīduh',
    french: 'Croire en Allah et en Son Unicité absolue',
    summaryFr:
      'Fondement suprême de la croyance (‘Aqīdah) : reconnaître l’existence d’Allah et Son Unicité dans Sa Seigneurie, Son adoration et Ses Noms et Attributs.',
    deepPrinciplesFr: [
      '1. Tawḥīd ar-Rubūbiyyah (Unicité de la Seigneurie) : reconnaître qu’Allah Seul est le Créateur (Al-Khāliq), le Pourvoyeur (Ar-Razzāq) et le Gérant souverain de l’univers.',
      '2. Tawḥīd al-Ulūhiyyah (Unicité de l’Adoration) : ne vouer les actes d’adoration (prière, invocation, vœu, crainte révérencielle, espoir) qu’à Allah Seul sans aucun intermédiaire.',
      '3. Tawḥīd al-Asmā’ wa ṣ-Ṣifāt (Unicité des Noms et Attributs) : affirmer les Noms parfaits d’Allah (Ar-Raḥmān, Al-‘Alīm, Al-Ḥakīm, Al-Qadīr...) tels qu’Il Se les est attribués, sans ressemblance avec les créatures.'
    ],
    proofArabic: 'لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ',
    proofPhonetic: 'Laysa ka-mithlihi chay’un wa Huwa s-Samī‘u l-Baṣīr',
    proofFrench: '« Il n’y a rien qui Lui ressemble ; et c’est Lui l’Audient, le Clairvoyant » (Coran 42:11)'
  },
  {
    number: 2,
    titleFr: 'La Foi aux Anges (الْإِيمَانُ بِالْمَلَائِكَةِ)',
    arabic: 'الْإِيمَانُ بِالْمَلَائِكَةِ',
    phonetic: 'Al-Īmānu bi-l-Malā’ikah',
    french: 'Croire aux Anges créés de lumière',
    summaryFr:
      'Créatures spirituelles créées de lumière (Nūr), totalement obéissantes à Allah et chargées de missions précises dans l’univers.',
    deepPrinciplesFr: [
      'Jibrīl (Gabriel) : chargé de transmettre la Révélation divine aux Prophètes.',
      'Mīkā’īl (Michel) : chargé de la pluie et de la végétation ; Isrāfīl : chargé de souffler dans la Trompe ; Kirāman Kātibīn : nobles scribes qui inscrivent les œuvres de chaque être humain.'
    ],
    proofArabic: 'لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ وَيَفْعَلُونَ مَا يُؤْمَرُونَ',
    proofPhonetic: 'Lā ya‘ṣūna Llāha mā amarahum wa yaf‘alūna mā yu’marūn',
    proofFrench: '« Ils ne désobéissent jamais à Allah en ce qu’Il leur commande, et font strictement ce qu’on leur ordonne » (Coran 66:6)'
  },
  {
    number: 3,
    titleFr: 'La Foi aux Livres Révélés (الْإِيمَانُ بِالْكُتُبِ)',
    arabic: 'الْإِيمَانُ بِالْكُتُبِ السَّمَاوِيَّةِ',
    phonetic: 'Al-Īmānu bi-l-Kutubi s-samāwiyyah',
    french: 'Croire aux Écritures descendues d’Allah',
    summaryFr:
      'Croire qu’Allah a révélé des Livres à Ses Messagers comme lumière et guidée pour l’humanité, dont le Coran est le sceau préservé.',
    deepPrinciplesFr: [
      'Les Feuillets (Ṣuḥuf) d’Ibrāhīm, la Torah (At-Tawrāh) confiée à Mūsā (Moïse), les Psaumes (Az-Zabūr) confiés à Dāwūd (David), l’Évangile (Al-Injīl) confié à ‘Īsā (Jésus).',
      'Le Noble Coran (Al-Qur’ān al-Karīm) révélé à Muḥammad ﷺ, préservé mot pour mot dans sa langue arabe originelle.'
    ],
    proofArabic: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
    proofPhonetic: 'Innā naḥnu nazzalnā dh-Dhikra wa innā lahu la-ḥāfiẓūn',
    proofFrench: '« C’est Nous qui avons fait descendre le Rappel (le Coran), et c’est Nous qui en sommes Gardiens » (Coran 15:9)'
  },
  {
    number: 4,
    titleFr: 'La Foi aux Prophètes et Messagers (الْإِيمَانُ بِالرُّسُلِ)',
    arabic: 'الْإِيمَانُ بِالْأَنْبِيَاءِ وَالرُّسُلِ',
    phonetic: 'Al-Īmānu bi-l-Anbiyā’i wa r-Rusul',
    french: 'Croire en tous les Prophètes sans distinction',
    summaryFr:
      'Croire en tous les Messagers envoyés par Allah depuis Ādam jusqu’au dernier d’entre eux, Muḥammad ﷺ.',
    deepPrinciplesFr: [
      '25 Prophètes sont nommés dans le Coran, parmi lesquels les 5 Doués de fermeté (Ūlū l-‘Azm) : Nūḥ (Noé), Ibrāhīm (Abraham), Mūsā (Moïse), ‘Īsā (Jésus) et Muḥammad (paix et salut sur eux tous).',
      'Tous ont appelé au même message central : adorer Allah Seul et pratiquer la justice et la bonté.'
    ],
    proofArabic: 'لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ',
    proofPhonetic: 'Lā nufarriqu bayna aḥadin min rusulih',
    proofFrench: '« Nous ne faisons aucune distinction entre Ses messagers » (Coran 2:285)'
  },
  {
    number: 5,
    titleFr: 'La Foi au Jour Dernier (الْإِيمَانُ بِالْيَوْمِ الْآخِرِ)',
    arabic: 'الْإِيمَانُ بِالْيَوْمِ الْآخِرِ',
    phonetic: 'Al-Īmānu bi-l-Yawmi l-Ākhir',
    french: 'Croire à la Résurrection et au Jugement',
    summaryFr:
      'Croire à la vie après la mort, à la résurrection, à la pesée juste des actes (Al-Mīzān), au Paradis (Al-Jannah) et à l’Enfer (An-Nār).',
    deepPrinciplesFr: [
      'Donne un sens moral profond à l’existence : aucune justice bafouée ni aucun bien accompli en secret n’est perdu auprès d’Allah.',
      'Encourage le croyant à préparer sa rencontre avec Allah par la droiture et le service d’autrui.'
    ],
    proofArabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',
    proofPhonetic: 'Fa-man ya‘mal mithqāla dharratin khayran yarah',
    proofFrench: '« Quiconque fait un bien fût-ce du poids d’un atome, le verra » (Coran 99:7)'
  },
  {
    number: 6,
    titleFr: 'La Foi au Destin et Décret Divin (الْإِيمَانُ بِالْقَدَرِ)',
    arabic: 'الْإِيمَانُ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ',
    phonetic: 'Al-Īmānu bi-l-Qadari khayrihi wa charrih',
    french: 'Croire au Décret divin tout en agissant avec responsabilité',
    summaryFr:
      'Croire en la science parfaite d’Allah tout en prenant les causes concrètes (Al الأخذ بالأسباب) avec courage et responsabilité.',
    deepPrinciplesFr: [
      'Repose sur 4 degrés : 1. La Science absolue d’Allah (Al-‘Ilm), 2. L’Écriture dans la Table Préservée (Al-Kitābah), 3. La Volonté divine (Al-Machī’ah), 4. La Création de toute chose (Al-Khalq).',
      'L’être humain possède un libre choix réel sur ses actes moraux : il prend toutes les précautions (« Attache d’abord ta chamelle, puis place ta confiance en Allah » — Hadith).'
    ],
    proofArabic: 'إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ',
    proofPhonetic: 'Innā kulla chay’in khalaqnāhu bi-qadar',
    proofFrench: '« Nous avons créé toute chose avec mesure » (Coran 54:49)'
  }
];

// ============================================================================
// 4. PRINCIPES APPROFONDIS : FIQH (5 STATUTS), MAXIMES & MAQĀṢID
// ============================================================================
export const FIQH_FIVE_RULINGS: FiqhStatusItem[] = [
  {
    code: '01 · FARḌ / WĀJIB',
    nameFr: 'L’Obligatoire (Prescrit)',
    arabic: 'الْفَرْضُ / الْوَاجِبُ',
    phonetic: 'Al-Farḍu / Al-Wājibu',
    definitionFr: 'Ce qu’Allah et Son Messager ﷺ ont ordonné de manière ferme et impérative.',
    consequenceFr: 'Son accomplissement par obéissance est récompensé, et son abandon volontaire sans excuse est un péché.',
    examplesFr: ['Les 5 prières quotidiennes', 'Le jeûne de Ramadan', 'La bonté envers les parents (Birr al-Wālidayn)', 'L’honnêteté dans les engagements']
  },
  {
    code: '02 · MUSTAḤABB / SUNNAH',
    nameFr: 'Le Recommandé (Méritoire)',
    arabic: 'الْمُسْتَحَبُّ / السُّنَّةُ / الْمَنْدُوبُ',
    phonetic: 'Al-Mustaḥabbu / As-Sunnah / Al-Mandūbu',
    definitionFr: 'Ce qui est encouragé par la révélation sans être imposé de façon stricte.',
    consequenceFr: 'Celui qui le fait est grandement récompensé, et celui qui ne le fait pas n’encourt aucun péché.',
    examplesFr: ['Les prières surérogatoires (Rawātib)', 'Le sourire et la salutation (As-Salām)', 'Le jeûne du lundi et du jeudi', 'L’aumône volontaire (Ṣadaqah)']
  },
  {
    code: '03 · MUBĀḤ / ḤALĀL',
    nameFr: 'Le Permis (Licite / Neutre)',
    arabic: 'الْمُبَاحُ / الْحَلَالُ',
    phonetic: 'Al-Mubāḥu / Al-Ḥalālu',
    definitionFr: 'Tout acte de la vie courante pour lequel il n’y a ni ordre ni interdiction.',
    consequenceFr: 'Pas de récompense ni de péché en soi, mais devient une adoration s’il est accompagné d’une bonne intention !',
    examplesFr: ['Pratiquer un sport sain', 'Choisir ses plats ou vêtements licites', 'Dormir tôt pour être en forme pour prier et étudier']
  },
  {
    code: '04 · MAKRŪH',
    nameFr: 'Le Déconseillé (Réprouvé)',
    arabic: 'الْمَكْرُوهُ',
    phonetic: 'Al-Makrūhu',
    definitionFr: 'Ce qu’il est préférable de délaisser sans que cela atteigne le degré de l’interdit strict.',
    consequenceFr: 'Celui qui s’en abstient par piété est récompensé ; celui qui le commet n’est pas puni mais perd une perfection.',
    examplesFr: ['Gaspiller de l’eau même en faisant ses ablutions', 'Se retourner inutilement pendant la prière', 'Parler de sujets futiles très tard la nuit']
  },
  {
    code: '05 · ḤARĀM / MAḤẒŪR',
    nameFr: 'L’Interdit (Illicite)',
    arabic: 'الْحَرَامُ / الْمَحْظُورُ',
    phonetic: 'Al-Ḥarāmu / Al-Maḥẓūru',
    definitionFr: 'Ce qu’Allah a formellement interdit pour protéger l’âme, la société et la dignité humaine.',
    consequenceFr: 'S’en abstenir par crainte d’Allah est récompensé ; le commettre expose au péché et nécessite le repentir (Tawbah).',
    examplesFr: ['Le mensonge, la tricherie et l’injustice (ﻈulm)', 'La médisance (Ghībah) et le harcèlement', 'L’alcool, les stupéfiants et l’usure (Ribā)']
  }
];

export const FIVE_LEGAL_MAXIMS: LegalMaximItem[] = [
  {
    number: 1,
    titleFr: 'Les actes ne valent que par leurs intentions',
    arabic: 'الْأُمُورُ بِمَقَاصِدِهَا (إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ)',
    phonetic: 'Al-umūru bi-maqāṣidihā (Innamā l-a‘mālu bi-n-niyyāt)',
    french: 'Les affaires sont jugées selon leurs finalités (Les actes ne valent que par les intentions)',
    explanationFr:
      'Toute action dépend de la sincérité du cœur : une habitude quotidienne (étudier, travailler, manger) devient une adoration si l’intention est noble.',
    concreteCaseFr:
      'Exemple : Réviser ses cours avec l’intention d’être utile à sa famille et à la société est compté comme une bonne action auprès d’Allah.'
  },
  {
    number: 2,
    titleFr: 'La certitude n’est jamais annulée par le doute',
    arabic: 'الْيَقِينُ لَا يَزُولُ بِالشَّكِّ',
    phonetic: 'Al-yaqīnu lā yazūlu bi-ch-chakk',
    french: 'Ce qui est certain ne disparaît pas à cause d’un simple doute',
    explanationFr:
      'Principe fondamental qui protège le croyant contre les scrupules obsessionnels (Waswās) dans les ablutions et la prière.',
    concreteCaseFr:
      'Exemple : Si tu es certain d’avoir fait tes ablutions à 13h, et qu’à 14h tu doutes les avoir perdues sans preuve certaine, tu restes en état de pureté.'
  },
  {
    number: 3,
    titleFr: 'La difficulté appelle la facilité',
    arabic: 'الْمَشَقَّةُ تَجْلِبُ التَّيْسِيرَ',
    phonetic: 'Al-machaqqatu tajlibu t-taysīr',
    french: 'Toute gêne excessive entraîne un allègement légal',
    explanationFr:
      'L’Islam est une religion de miséricorde : lorsqu’une incapacité réelle survient (maladie, voyage, contrainte), les règles s’allègent.',
    concreteCaseFr:
      'Exemple : Prier assis quand on ne peut pas tenir debout, raccourcir les prières de 4 à 2 Rak‘ât en voyage, ou faire le Tayammum en l’absence d’eau.'
  },
  {
    number: 4,
    titleFr: 'Ni nuisance ni préjudice réciproque',
    arabic: 'لَا ضَرَرَ وَلَا ضِرَارَ',
    phonetic: 'Lā ḍarara wa lā ḍirār',
    french: 'Il est interdit de nuire à soi-même ou de nuire à autrui',
    explanationFr:
      'Règle d’or de l’éthique sociale, médicale et écologique en Islam : tout ce qui cause un tort injustifié à autrui ou à sa propre santé est proscrit.',
    concreteCaseFr:
      'Exemple : Ne pas gêner le voisinage en se garant mal devant la mosquée, préserver sa santé et respecter l’environnement.'
  },
  {
    number: 5,
    titleFr: 'La coutume saine fait office de règle',
    arabic: 'الْعَادَةُ مُحَكَّمَةٌ',
    phonetic: 'Al-‘ādatu muḥakkamah',
    french: 'Les usages positifs d’une société sont reconnus tant qu’ils ne contredisent pas un principe moral',
    explanationFr:
      'L’Islam respecte la diversité culturelle, linguistique et sociale des peuples dans tout ce qui est bon et honorable (Al-Ma‘rūf).',
    concreteCaseFr:
      'Exemple : Être pleinement citoyen français tout en vivant sa foi avec dignité, politesse, ponctualité et excellence.'
  }
];

export const FIVE_MAQASID_SHARIA: MaqasidItem[] = [
  {
    number: 1,
    titleFr: '1. La Préservation de la Foi et de la Spiritualité',
    arabic: 'حِفْظُ الدِّينِ',
    phonetic: 'Ḥifẓu d-Dīn',
    french: 'Protéger le lien spirituel avec Allah et la liberté de conscience',
    descriptionFr: 'Nourrir le cœur par la connaissance authentique, la prière, le rappel d’Allah et la sincérité.',
    practicalExamplesFr: 'Apprendre l’arabe pour comprendre le Coran, prier à l’heure, éviter le fanatisme et l’ignorance.'
  },
  {
    number: 2,
    titleFr: '2. La Préservation de la Vie Humaine',
    arabic: 'حِفْظُ النَّفْسِ',
    phonetic: 'Ḥifẓu n-Nafs',
    french: 'Caractère sacré de la vie, de la santé et de l’intégrité physique',
    descriptionFr: 'Sauver une seule vie équivaut à sauver toute l’humanité (Coran 5:32).',
    practicalExamplesFr: 'Prendre soin de son corps, se soigner, respecter le code de la route, secourir les personnes en danger.'
  },
  {
    number: 3,
    titleFr: '3. La Préservation de la Raison et de l’Intellect',
    arabic: 'حِفْظُ الْعَقْلِ',
    phonetic: 'Ḥifẓu l-‘Aql',
    french: 'Valoriser la science, l’esprit critique et protéger le cerveau',
    descriptionFr: 'Le Coran invite sans cesse à méditer (« Ne réfléchissent-ils donc pas ? ») et interdit tout ce qui détruit l’esprit.',
    practicalExamplesFr: 'Exceller dans ses études, vérifier les informations avant de les partager, fuir toute substance intoxicante.'
  },
  {
    number: 4,
    titleFr: '4. La Préservation de la Famille et de la Dignité (L’Honneur)',
    arabic: 'حِفْظُ النَّسْلِ وَالْعِرْضِ',
    phonetic: 'Ḥifẓu n-Nasli wa l-‘Irḍ',
    french: 'Protéger la cellule familiale, la pudeur et la réputation d’autrui',
    descriptionFr: 'Honorer ses parents, renforcer les liens familiaux (Ṣilat ar-Raḥim) et interdire toute diffamation ou cyberharcèlement.',
    practicalExamplesFr: 'Respecter ses parents, défendre l’honneur de son prochain en son absence, refuser les moqueries.'
  },
  {
    number: 5,
    titleFr: '5. La Préservation des Biens et du Travail Honnête',
    arabic: 'حِفْظُ الْمَالِ',
    phonetic: 'Ḥifẓu l-Māl',
    french: 'Encourager le travail licite, la justice économique et la générosité',
    descriptionFr: 'Gagner sa vie honnêtement, respecter le bien public et privé, et partager avec les plus fragiles.',
    practicalExamplesFr: 'Éviter le gaspillage (Isrāf), rendre les objets empruntés (Amānah), travailler avec sérieux.'
  }
];

// ============================================================================
// 5. ÉTHIQUE & SPIRITUALITÉ DU CŒUR (AL-AKHLĀQ WA TAZKIYAT AN-NAFS)
// ============================================================================
export const AKHLAQ_VIRTUES: AkhlaqVirtueItem[] = [
  {
    id: 'birr',
    virtueFr: 'La Piété Filiale (Bonté envers les Parents)',
    arabic: 'بِرُّ الْوَالِدَيْنِ',
    phonetic: 'Birru l-Wālidayn',
    french: 'La bienveillance, le respect et la gratitude envers le père et la mère',
    explanationFr:
      'Dans le Coran, Allah associe directement le commandement de L’adorer Seul à la bonté envers les parents. Même un soupir d’agacement (« Ouf ! ») leur est interdit.',
    quoteArabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',
    quotePhonetic: 'Wa qaḍā Rabbuka allā ta‘budū illā iyyāhu wa bi-l-wālidayni iḥsānā',
    quoteFrench: '« Et ton Seigneur a décrété : N’adorez que Lui ; et marquez de la bonté envers les père et mère »',
    sourceFr: 'Sourate Al-Isrā’ (17:23)'
  },
  {
    id: 'sidq',
    virtueFr: 'La Véracité & la Loyauté (Aṣ-Ṣidq wa l-Amānah)',
    arabic: 'الصِّدْقُ وَالْأَمَانَةُ',
    phonetic: 'Aṣ-Ṣidqu wa l-Amānah',
    french: 'Dire la vérité et honorer la confiance confiée',
    explanationFr:
      'Avant même la Révélation, le Prophète ﷺ était surnommé « Aṣ-Ṣādiq Al-Amīn » (Le Véridique, le Digne de confiance). La véracité mène à la piété et au Paradis.',
    quoteArabic: 'إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
    quotePhonetic: 'Inna ṣ-ṣidqa yahdī ilā l-birri, wa inna l-birra yahdī ilā l-Jannah',
    quoteFrench: '« Certes, la véracité mène à la piété, et la piété mène au Paradis »',
    sourceFr: 'Hadith authentique (Al-Bukhārī & Muslim)'
  },
  {
    id: 'sabr-shukr',
    virtueFr: 'La Patience (Aṣ-Ṣabr) & la Gratitude (Ach-Chukr)',
    arabic: 'الصَّبْرُ وَالشُّكْرُ',
    phonetic: 'Aṣ-Ṣabru wa ch-Chukr',
    french: 'Les deux ailes du croyant face aux joies et aux épreuves',
    explanationFr:
      'Le croyant est toujours gagnant : s’il reçoit un bienfait, il remercie Allah (Chukr) ; s’il traverse une épreuve, il patiente avec dignité (Ṣabr).',
    quoteArabic: 'عَجَبًا لِأَمْرِ الْمُؤْمِنِ، إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ',
    quotePhonetic: '‘Ajaban li-amri l-mu’mini, inna amrahu kullahu khayr',
    quoteFrench: '« Que l’affaire du croyant est admirable ! Tout ce qui lui arrive est un bien pour lui »',
    sourceFr: 'Hadith authentique (Muslim)'
  },
  {
    id: 'husn-khuluq',
    virtueFr: 'La Noblesse de Caractère & la Maîtrise de la Colère',
    arabic: 'حُسْنُ الْخُلُقِ وَكَظْمُ الْغَيْظِ',
    phonetic: 'Ḥusnu l-Khuluqi wa Kaẓmu l-Ghayẓ',
    french: 'Le beau comportement, la douceur et le pardon',
    explanationFr:
      'La vraie force ne réside pas dans la violence physique, mais dans la capacité à se maîtriser au moment de la colère et à répondre au mal par ce qui est meilleur.',
    quoteArabic: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
    quotePhonetic: 'Laysa ch-chadīdu bi-ṣ-ṣura‘ati, innamā ch-chadīdu lladhī yamliku nafsahu ‘inda l-ghaḍab',
    quoteFrench: '« Le fort n’est pas celui qui terrasse les gens dans la lutte, mais le fort est celui qui se maîtrise au moment de la colère »',
    sourceFr: 'Hadith authentique (Al-Bukhārī & Muslim)'
  },
  {
    id: 'ukhuwwah',
    virtueFr: 'La Fraternité, le Bon Voisinage & le Respect d’Autrui',
    arabic: 'الْأُخُوَّةُ وَإِكْرَامُ الْجَارِ',
    phonetic: 'Al-Ukhuwwatu wa Ikrāmu l-Jār',
    french: 'Aimer pour son prochain ce que l’on aime pour soi-même',
    explanationFr:
      'L’éthique islamique interdit de mépriser qui que ce soit, ordonne de protéger son voisin et fait du sourire une aumône.',
    quoteArabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
    quotePhonetic: 'Tabassumuka fī wajhi akhīka laka ṣadaqah',
    quoteFrench: '« Ton sourire face à ton frère est pour toi une aumône (Ṣadaqah) »',
    sourceFr: 'Hadith authentique (At-Tirmidhī)'
  },
  {
    id: 'ilm',
    virtueFr: 'La Quête de la Science Utile (Ṭalabu l-‘Ilm)',
    arabic: 'طَلَبُ الْعِلْمِ النَّافِعِ',
    phonetic: 'Ṭalabu l-‘Ilmi n-Nāfi‘',
    french: 'L’apprentissage continu, la curiosité intellectuelle et l’humilité',
    explanationFr:
      'Chercher à comprendre sa religion, les langues et les sciences utiles facilite le chemin vers le Paradis.',
    quoteArabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    quotePhonetic: 'Wa qul Rabbi zidnī ‘ilmā',
    quoteFrench: '« Et dis : Ô mon Seigneur, accrois mes connaissances ! »',
    sourceFr: 'Sourate Ṭā-Hā (20:114)'
  }
];

// ============================================================================
// 6. REPÈRES DE LA SĪRAH DU PROPHÈTE ﷺ & CALENDRIER HÉGIRIEN
// ============================================================================
export const SIRAH_MILESTONES: SirahMilestone[] = [
  {
    period: 'Étape 1 · La Mecque',
    yearHijriOrCe: '570 apr. J.-C. (Année de l’Éléphant)',
    titleFr: 'Naissance à La Mecque & jeunesse exemplaire (« Al-Amīn »)',
    arabic: 'مَوْلِدُ النَّبِيِّ ﷺ بِمَكَّةَ الْمُكَرَّمَةِ',
    phonetic: 'Mawlidu n-Nabiyyi ﷺ bi-Makkata l-Mukarramah',
    french: 'Naissance du Prophète ﷺ à La Mecque honorée',
    summaryFr:
      'Né orphelin de père (‘Abdullāh), élevé par sa mère Āminah, son grand-père ‘Abdul-Muṭṭalib puis son oncle Abū Ṭālib. Connu de toute La Mecque pour sa droiture et son honnêteté.',
    lessonFr: 'La crédibilité morale et la probité précèdent toute responsabilité.'
  },
  {
    period: 'Étape 2 · Grotte de Ḥirā’',
    yearHijriOrCe: '610 apr. J.-C. (40 ans)',
    titleFr: 'La Première Révélation : « Iqra’ ! » (Lis !)',
    arabic: 'نُزُولُ الْوَحْيِ فِي غَارِ حِرَاءٍ',
    phonetic: 'Nuzūlu l-waḥyi fī ghāri Ḥirā’',
    french: 'La descente de la Révélation dans la grotte de Ḥirâ’',
    summaryFr:
      'L’Ange Jibrīl apporte les premiers versets de Sourate Al-‘Alaq. Son épouse Khadījah (qu’Allah l’agrée) le soutient immédiatement et croit en lui.',
    lessonFr: 'L’Islam commence par la lecture, la connaissance et le soutien familial.'
  },
  {
    period: 'Étape 3 · Patience à La Mecque',
    yearHijriOrCe: '610 – 622 apr. J.-C. (13 ans)',
    titleFr: 'L’appel au Tawḥīd, la justice sociale et l’endurance',
    arabic: 'الصَّبْرُ وَالدَّعْوَةُ بِالْحِكْمَةِ',
    phonetic: 'Aṣ-Ṣabru wa d-da‘watu bi-l-ḥikmah',
    french: 'La patience et l’appel avec sagesse',
    summaryFr:
      'Malgré les persécutions contre les faibles et les compagnons (comme Bilāl, la famille de Yāsir), le Prophète ﷺ enseigne la patience, l’affranchissement des esclaves et le voyage nocturne (Al-Isrā’ wa l-Mi‘rāj où les 5 prières sont prescrites).',
    lessonFr: 'Ne jamais répondre à l’injustice par la haine ; rester ferme sur ses principes.'
  },
  {
    period: 'Étape 4 · L’Hégire vers Médine',
    yearHijriOrCe: '622 apr. J.-C. (An 1 de l’Hégire)',
    titleFr: 'L’Hégire (Al-Hijrah) et la Constitution de Médine',
    arabic: 'الْهِجْرَةُ النَّبَوِيَّةُ إِلَى الْمَدِينَةِ الْمُنَوَّرَةِ',
    phonetic: 'Al-Hijratu n-Nabawiyyatu ilā l-Madīnati l-Munawwarah',
    french: 'L’émigration prophétique vers Médine l’Illuminée',
    summaryFr:
      'Construction de la Mosquée de Médine, fraternisation entre les Muhājirūn (émigrés) et les Anṣār (auxiliaires), et rédaction du Pacte de Médine garantissant le vivre-ensemble.',
    lessonFr: 'La mosquée est un lieu de prière, d’éducation, de fraternité et de paix civique.'
  },
  {
    period: 'Étape 5 · Pardon & Parachèvement',
    yearHijriOrCe: 'An 8 à An 11 de l’Hégire (630 – 632)',
    titleFr: 'L’ouverture pacifique de La Mecque & le Sermon d’Adieu',
    arabic: 'الْعَفْوُ الْعَامُّ وَحَجَّةُ الْوَدَاعِ',
    phonetic: 'Al-‘Afwu l-‘āmmu wa Ḥajjatu l-Wadā‘',
    french: 'Le pardon général et le Pèlerinage d’Adieu',
    summaryFr:
      'Lors du retour à La Mecque, le Prophète ﷺ accorde le pardon général (« Allez, vous êtes libres ! »). Lors du Pèlerinage d’Adieu, il proclame l’égalité de tous les êtres humains et la sacralité de la vie et des biens.',
    lessonFr: 'Le sommet de la victoire est le pardon, l’humilité et l’égalité universelle.'
  }
];

export const HIJRI_MONTHS: Array<{ number: number; arabic: string; phonetic: string; frenchNote: string; isSacred: boolean }> = [
  { number: 1, arabic: 'مُحَرَّمٌ', phonetic: 'Muḥarram', frenchNote: '1er mois de l’année hégirienne (contient le jour de ‘Āchūrā’ le 10)', isSacred: true },
  { number: 2, arabic: 'صَفَرٌ', phonetic: 'Ṣafar', frenchNote: '2e mois lunaire', isSacred: false },
  { number: 3, arabic: 'رَبِيعٌ الْأَوَّلُ', phonetic: 'Rabī‘ al-Awwal', frenchNote: 'Mois de la naissance et de l’Hégire du Prophète ﷺ', isSacred: false },
  { number: 4, arabic: 'رَبِيعٌ الثَّانِي', phonetic: 'Rabī‘ ath-Thānī', frenchNote: '4e mois lunaire', isSacred: false },
  { number: 5, arabic: 'جُمَادَى الْأُولَى', phonetic: 'Jumādā l-Ūlā', frenchNote: '5e mois lunaire', isSacred: false },
  { number: 6, arabic: 'جُمَادَى الْآخِرَةُ', phonetic: 'Jumādā l-Ākhirah', frenchNote: '6e mois lunaire', isSacred: false },
  { number: 7, arabic: 'رَجَبٌ', phonetic: 'Rajab', frenchNote: 'Mois sacré préparant à Cha‘bān et Ramaḍān', isSacred: true },
  { number: 8, arabic: 'شَعْبَانُ', phonetic: 'Cha‘bān', frenchNote: 'Mois précédant Ramaḍān (préparation spirituelle)', isSacred: false },
  { number: 9, arabic: 'رَمَضَانُ', phonetic: 'Ramaḍān', frenchNote: 'Mois du jeûne obligatoire et de la révélation du Coran', isSacred: false },
  { number: 10, arabic: 'شَوَّالٌ', phonetic: 'Chawwāl', frenchNote: 'Débute par l’Aïd al-Fiṭr (+ 6 jours de jeûne recommandés)', isSacred: false },
  { number: 11, arabic: 'ذُو الْقَعْدَةِ', phonetic: 'Dhū l-Qa‘dah', frenchNote: 'Mois sacré précédant le Pèlerinage', isSacred: true },
  { number: 12, arabic: 'ذُو الْحِجَّةِ', phonetic: 'Dhū l-Ḥijjah', frenchNote: 'Mois sacré du Pèlerinage (Ḥajj), du jour de ‘Arafāt et de l’Aïd al-Aḍḥā', isSacred: true }
];

// ============================================================================
// 7. LA CITADELLE DU CROYANT — INVOCATIONS QUOTIDIENNES (ADHKĀR)
// ============================================================================
export const DAILY_DUAS: DailyDuaItem[] = [
  {
    id: 'dua-morning',
    momentFr: 'Le matin au réveil',
    category: 'Matin & Soir',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    phonetic: 'Al-ḥamdu lillāhi lladhī aḥyānā ba‘da mā amātanā wa ilayhi n-nuchūr',
    french: 'Louange à Allah qui nous a redonné la vie après nous avoir fait dormir (mourir), et c’est vers Lui que se fera la résurrection.',
    contextFr: 'À dire dès que l’on ouvre les yeux le matin.'
  },
  {
    id: 'dua-sleep',
    momentFr: 'Le soir avant de dormir',
    category: 'Repas & Sommeil',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    phonetic: 'Bi-smika Llāhumma amūtu wa aḥyā',
    french: 'C’est en Ton nom, ô Allah, que je meurs (m’endors) et que je vis.',
    contextFr: 'À dire en se couchant sur le côté droit, après avoir récité Al-Ikhlāṣ, Al-Falaq et An-Nās.'
  },
  {
    id: 'dua-before-meal',
    momentFr: 'Avant de manger ou boire',
    category: 'Repas & Sommeil',
    arabic: 'بِسْمِ اللَّهِ (فَإِنْ نَسِيَ فِي أَوَّلِهِ فَلْيَقُلْ : بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ)',
    phonetic: 'Bismi Llāh (et en cas d’oubli au début : Bismi Llāhi awwalahu wa ākhirah)',
    french: 'Au nom d’Allah (et si l’on a oublié au début : Au nom d’Allah à son début et à sa fin).',
    contextFr: 'Manger avec la main droite et prendre ce qui est devant soi.'
  },
  {
    id: 'dua-after-meal',
    momentFr: 'Après avoir mangé',
    category: 'Repas & Sommeil',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    phonetic: 'Al-ḥamdu lillāhi lladhī aṭ‘amanī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah',
    french: 'Louange à Allah qui m’a nourri de ce repas et me l’a accordé sans force ni puissance de ma part.',
    contextFr: 'Cause de pardon des péchés passés (rapporté par Abū Dāwūd et At-Tirmidhī).'
  },
  {
    id: 'dua-leave-home',
    momentFr: 'En sortant de la maison',
    category: 'Maison & Mosquée',
    arabic: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    phonetic: 'Bismi Llāhi, tawakkaltu ‘alā Llāhi, wa lā ḥawla wa lā quwwata illā bi-Llāh',
    french: 'Au nom d’Allah, je place ma confiance en Allah, et il n’y a de force ni de puissance que par Allah.',
    contextFr: 'On lui dit alors : « Tu es guidé, pris en charge et protégé. »'
  },
  {
    id: 'dua-enter-mosque',
    momentFr: 'En entrant à la mosquée (pied droit)',
    category: 'Maison & Mosquée',
    arabic: 'بِسْمِ اللَّهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَىٰ رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    phonetic: 'Bismi Llāhi wa ṣ-ṣalātu wa s-salāmu ‘alā Rasūli Llāh, Allāhumma ftaḥ lī abwāba raḥmatik',
    french: 'Au nom d’Allah, paix et bénédiction sur le Messager d’Allah. Ô Allah, ouvre-moi les portes de Ta miséricorde.',
    contextFr: 'En sortant de la mosquée (pied gauche), on dit : « Allāhumma innī as’aluka min faḍlik » (Ô Allah, je Te demande de Ta grâce).'
  },
  {
    id: 'dua-parents',
    momentFr: 'Invocation pour ses parents',
    category: 'Épreuves & Parents',
    arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    phonetic: 'Rabbi rḥamhumā kamā rabbayānī ṣaghīrā',
    french: '« Ô mon Seigneur, fais-leur à tous deux miséricorde comme ils m’ont élevé tout petit. »',
    contextFr: 'Invocation coranique (Sourate Al-Isrā’, 17:24) à réciter chaque jour pour son père et sa mère.'
  },
  {
    id: 'dua-exam-ease',
    momentFr: 'Face à une tâche difficile ou un examen',
    category: 'Épreuves & Parents',
    arabic: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا',
    phonetic: 'Allāhumma lā sahla illā mā ja‘altahu sahlan, wa Anta taj‘alu l-ḥazna idhā chi’ta sahlā',
    french: 'Ô Allah, rien n’est facile sauf ce que Tu as rendu facile, et Tu rends le difficile facile si Tu le veux.',
    contextFr: 'Excellente invocation avant un contrôle, une révision ou une épreuve.'
  }
];

export const PDF10_PRIERE_QUIZ: QuizQuestion[] = [
  {
    id: 'q-pdf10-1',
    question: 'Combien d’unités obligatoires (Rak‘āt Farḍ) comporte la prière du Maghrib (صَلَاةُ الْمَغْرِبِ — Ṣalātu l-Maghrib) ?',
    options: ['2 Rak‘āt', '3 Rak‘āt', '4 Rak‘āt', '5 Rak‘āt'],
    correctIndex: 1,
    explanation: 'La prière d’Al-Maghrib comporte 3 Rak‘āt obligatoires (2 à voix haute et la 3e à voix basse).'
  },
  {
    id: 'q-pdf10-2',
    question: 'Que récite-t-on 3 fois pendant l’inclinaison (الرُّكُوعُ — Ar-Rukū‘) ?',
    options: [
      'Subḥāna Rabbiya l-‘Aẓīm (سُبْحَانَ رَبِّيَ الْعَظِيمِ)',
      'Subḥāna Rabbiya l-A‘lā (سُبْحَانَ رَبِّيَ الْأَعْلَىٰ)',
      'Sami‘a Llāhu li-man ḥamidah (سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ)',
      'Rabbi ghfir lī (رَبِّ اغْفِرْ لِي)'
    ],
    correctIndex: 0,
    explanation: 'Dans l’inclinaison (Ar-Rukū‘), on dit 3 fois « Subḥāna Rabbiya l-‘Aẓīm » (Gloire à mon Seigneur l’Immense).'
  },
  {
    id: 'q-pdf10-3',
    question: 'Que récite-t-on 3 fois pendant la prosternation (السُّجُودُ — As-Sujūd) sur les 7 membres ?',
    options: [
      'Subḥāna Rabbiya l-A‘lā (سُبْحَانَ رَبِّيَ الْأَعْلَىٰ)',
      'Subḥāna Rabbiya l-‘Aẓīm (سُبْحَانَ رَبِّيَ الْعَظِيمِ)',
      'Allāhu akbar (اللَّهُ أَكْبَرُ)',
      'As-salāmu ‘alaykum (السَّلَامُ عَلَيْكُمْ)'
    ],
    correctIndex: 0,
    explanation: 'Dans la prosternation (As-Sujūd), on dit 3 fois « Subḥāna Rabbiya l-A‘lā » (Gloire à mon Seigneur le Très-Haut).'
  },
  {
    id: 'q-pdf10-4',
    question: 'Quelle sourate est un pilier obligatoire (Rukn) dans chaque unité (Rak‘a) de la prière ?',
    options: [
      'Sourate Al-Fātiḥa (سُورَةُ الْفَاتِحَةِ)',
      'Sourate Al-Ikhlāṣ (سُورَةُ الْإِخْلَاصِ)',
      'Sourate Al-Kawthar (سُورَةُ الْكَوْثَرِ)',
      'Sourate Al-‘Aṣr (سُورَةُ الْعَصْرِ)'
    ],
    correctIndex: 0,
    explanation: 'Il n’y a pas de prière valide sans la récitation de Sourate Al-Fātiḥa dans chaque Rak‘a.'
  },
  {
    id: 'q-pdf10-5',
    question: 'Comment appelle-t-on les ablutions sèches avec la terre/pierre propre en cas d’absence d’eau ou de maladie ?',
    options: [
      'At-Tayammum (التَّيَمُّمُ)',
      'Al-Ghusl (الْغُسْلُ)',
      'At-Tachahhud (التَّشَهُّدُ)',
      'At-Taslīm (التَّسْلِيمُ)'
    ],
    correctIndex: 0,
    explanation: 'At-Tayammum (التَّيَمُّمُ) remplace les ablutions à l’eau lorsqu’on est malade ou privé d’eau.'
  },
  {
    id: 'q-pdf10-6',
    question: 'Par quel acte et quelle formule clôture-t-on la prière à droite puis à gauche (At-Taslīm) ?',
    options: [
      'As-salāmu ‘alaykum wa raḥmatu Llāh (السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ)',
      'Allāhu akbar (اللَّهُ أَكْبَرُ)',
      'Al-ḥamdu lillāh (الْحَمْدُ لِلَّهِ)',
      'Astaghfiru Llāh (أَسْتَغْفِرُ اللَّهَ)'
    ],
    correctIndex: 0,
    explanation: 'La prière se termine par les deux salutations finales (At-Taslīm) à droite puis à gauche.'
  }
];

export const PDF11_RESUME_ISLAM_QUIZ: QuizQuestion[] = [
  {
    id: 'q-pdf11-1',
    question: 'Combien y a-t-il de Piliers de l’Islam (أَرْكَانُ الْإِسْلَامِ) et de Piliers de la Foi (أَرْكَانُ الْإِيمَانِ) ?',
    options: [
      '5 Piliers de l’Islam et 6 Piliers de la Foi',
      '6 Piliers de l’Islam et 5 Piliers de la Foi',
      '5 Piliers de l’Islam et 5 Piliers de la Foi',
      '4 Piliers de l’Islam et 7 Piliers de la Foi'
    ],
    correctIndex: 0,
    explanation: 'L’Islam repose sur 5 piliers pratiques (Chahādah, Ṣalāt, Zakāt, Ṣawm, Ḥajj) et la Foi (Īmān) sur 6 piliers.'
  },
  {
    id: 'q-pdf11-2',
    question: 'Quel est le taux annuel de la Zakāt al-Māl (زَكَاةُ الْمَالِ) sur l’épargne ayant atteint le Niṣāb pendant un an ?',
    options: ['2,5 % (un quarantième)', '10 %', '5 %', '20 %'],
    correctIndex: 0,
    explanation: 'La Zakāt al-Māl s’élève à 2,5 % (1/40e) de l’épargne conservée une année lunaire au-dessus du Niṣāb.'
  },
  {
    id: 'q-pdf11-3',
    question: 'Que signifie la grande maxime juridique « الْيَقِينُ لَا يَزُولُ بِالشَّكِّ — Al-yaqīnu lā yazūlu bi-ch-chakk » ?',
    options: [
      'La certitude n’est jamais annulée par le doute',
      'La difficulté appelle la facilité',
      'Les actes ne valent que par les intentions',
      'Ni nuisance ni préjudice réciproque'
    ],
    correctIndex: 0,
    explanation: 'Ce qui est certain (ex. avoir fait ses ablutions) n’est pas annulé par un simple doute (chakk).'
  },
  {
    id: 'q-pdf11-4',
    question: 'Parmi les 5 statuts du Fiqh, comment appelle-t-on un acte recommandé qui procure une récompense sans que son abandon soit un péché ?',
    options: [
      'Mustaḥabb / Sunnah (الْمُسْتَحَبُّ / السُّنَّةُ)',
      'Farḍ / Wājib (الْفَرْضُ / الْوَاجِبُ)',
      'Makrūh (الْمَكْرُوهُ)',
      'Ḥarām (الْحَرَامُ)'
    ],
    correctIndex: 0,
    explanation: 'Le Mustaḥabb (ou Sunnah / Mandūb) est l’acte méritoire recommandé.'
  },
  {
    id: 'q-pdf11-5',
    question: 'Quelles sont les 5 grandes finalités (Maqāṣid ach-Charī‘ah — مَقَاصِدُ الشَّرِيعَةِ) que l’Islam protège ?',
    options: [
      'La Foi (Dīn), la Vie (Nafs), la Raison (‘Aql), la Famille/Dignité (Nasl/‘Irḍ) et les Biens (Māl)',
      'Uniquement le commerce et les contrats',
      'Uniquement la langue arabe et la poésie',
      'Uniquement le voyage et l’astronomie'
    ],
    correctIndex: 0,
    explanation: 'Les 5 Maqāṣid protègent la foi, la vie humaine, la raison, la dignité familiale et les biens.'
  },
  {
    id: 'q-pdf11-6',
    question: 'Quelle invocation coranique récite-t-on pour ses parents (« رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا — Rabbi rḥamhumā kamā rabbayānī ṣaghīrā ») ?',
    options: [
      'Ô mon Seigneur, fais-leur à tous deux miséricorde comme ils m’ont élevé tout petit',
      'Louange à Allah qui nous a redonné la vie après notre sommeil',
      'Ô Allah, ouvre-moi les portes de Ta miséricorde',
      'Au nom d’Allah, je place ma confiance en Allah'
    ],
    correctIndex: 0,
    explanation: 'C’est l’invocation coranique (Sourate Al-Isrā’, 17:24) en faveur du père et de la mère.'
  }
];

