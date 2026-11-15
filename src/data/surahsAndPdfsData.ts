import { ArabicTriad, QuizQuestion } from './alphabetData';

export interface SurahVerse {
  verseNumber: number;
  arabic: string;
  phonetic: string;
  french: string;
}

export interface SurahStudy {
  id: string;
  surahNumber: number;
  titleArabic: string;
  titlePhonetic: string;
  titleFrench: string;
  revelationPlace: 'Mecquoise' | 'Médinoise';
  versesCount: number;
  teenReflection: string;
  verses: SurahVerse[];
  keyWords: ArabicTriad[];
}

export interface PdfCourseSheet {
  id: string;
  code: string;
  moduleId: 'alphabet' | 'voyelles' | 'grammaire' | 'vocabulaire' | 'sourates' | 'bilan';
  moduleLabel: string;
  title: string;
  subtitle: string;
  arabicHeader: ArabicTriad;
  pagesCount: number;
  fileSize: string;
  levelTag: string;
  summaryPoints: string[];
  triadTable: ArabicTriad[];
  exercisePrompt: string;
}

export const SURAHS_DATA: SurahStudy[] = [
  {
    id: 'al-fatiha',
    surahNumber: 1,
    titleArabic: 'سُورَةُ الْفَاتِحَةِ',
    titlePhonetic: 'Sūratu l-Fātiḥa',
    titleFrench: 'Sourate 1 — L’Ouverture (La Mère du Livre)',
    revelationPlace: 'Mecquoise',
    versesCount: 7,
    teenReflection:
      'Récitée dans chaque unité (Rak‘a) de prière, Al-Fātiḥa est un dialogue direct entre toi et Allah : elle commence par la louange et la gratitude, puis demande la guidée sur le droit chemin.',
    verses: [
      {
        verseNumber: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        phonetic: 'Bismi Llāhi r-Raḥmāni r-Raḥīm',
        french: 'Au nom d’Allah, le Tout-Miséricordieux, le Très-Miséricordieux.'
      },
      {
        verseNumber: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        phonetic: 'Al-ḥamdu lillāhi Rabbi l-‘ālamīn',
        french: 'Louange à Allah, Seigneur des mondes,'
      },
      {
        verseNumber: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        phonetic: 'Ar-Raḥmāni r-Raḥīm',
        french: 'Le Tout-Miséricordieux, le Très-Miséricordieux,'
      },
      {
        verseNumber: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        phonetic: 'Māliki yawmi d-dīn',
        french: 'Maître du Jour de la Rétribution.'
      },
      {
        verseNumber: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        phonetic: 'Iyyāka na‘budu wa iyyāka nasta‘īn',
        french: 'C’est Toi [Seul] que nous adorons, et c’est Toi [Seul] dont nous implorons le secours.'
      },
      {
        verseNumber: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        phonetic: 'Ihdinā ṣ-ṣirāṭa l-mustaqīm',
        french: 'Guide-nous dans le droit chemin,'
      },
      {
        verseNumber: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        phonetic: 'Ṣirāṭa lladhīna an‘amta ‘alayhim ghayri l-maghḍūbi ‘alayhim wa lā ḍ-ḍāllīn',
        french: 'Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.'
      }
    ],
    keyWords: [
      { arabic: 'الْحَمْدُ', phonetic: 'Al-Ḥamdu', french: 'La louange / la reconnaissance' },
      { arabic: 'الْعَالَمِينَ', phonetic: 'Al-‘Ālamīn', french: 'Les mondes / l’univers entier' },
      { arabic: 'يَوْمِ الدِّينِ', phonetic: 'Yawmi d-dīn', french: 'Le Jour de la Rétribution (du Jugement)' },
      { arabic: 'نَعْبُدُ', phonetic: 'Na‘budu', french: 'Nous adorons' },
      { arabic: 'نَسْتَعِينُ', phonetic: 'Nasta‘īn', french: 'Nous demandons l’aide / le secours' },
      { arabic: 'الصِّرَاطَ الْمُسْتَقِيمَ', phonetic: 'Aṣ-Ṣirāṭa l-Mustaqīm', french: 'Le droit chemin' }
    ]
  },
  {
    id: 'al-ikhlas',
    surahNumber: 112,
    titleArabic: 'سُورَةُ الْإِخْلَاصِ',
    titlePhonetic: 'Sūratu l-Ikhlāṣ',
    titleFrench: 'Sourate 112 — Le Monothéisme Pur (La Pureté du Culte)',
    revelationPlace: 'Mecquoise',
    versesCount: 4,
    teenReflection:
      'Cette sourate courte équivaut au tiers du Coran en valeur spirituelle car elle résume parfaitement qui est Allah : Unique, Absolu, au-dessus de toute ressemblance.',
    verses: [
      {
        verseNumber: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        phonetic: 'Qul huwa Llāhu Aḥad',
        french: 'Dis : « Il est Allah, Unique.'
      },
      {
        verseNumber: 2,
        arabic: 'اللَّهُ الصَّمَدُ',
        phonetic: 'Allāhu ṣ-Ṣamad',
        french: 'Allah, Le Seul à être imploré pour ce que nous désirons (L’Absolu).'
      },
      {
        verseNumber: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        phonetic: 'Lam yalid wa lam yūlad',
        french: 'Il n’a jamais engendré, et n’a pas été engendré non plus.'
      },
      {
        verseNumber: 4,
        arabic: 'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
        phonetic: 'Wa lam yakun lahu kufuwan aḥad',
        french: 'Et nul n’est égal à Lui. »'
      }
    ],
    keyWords: [
      { arabic: 'قُلْ', phonetic: 'Qul', french: 'Dis ! (verbe à l’impératif)' },
      { arabic: 'أَحَدٌ', phonetic: 'Aḥadun', french: 'Unique / Un seul' },
      { arabic: 'الصَّمَدُ', phonetic: 'Aṣ-Ṣamadu', french: 'L’Absolu / Celui dont tout dépend' },
      { arabic: 'لَمْ يَلِدْ', phonetic: 'Lam yalid', french: 'Il n’a pas engendré' },
      { arabic: 'كُفُوًا', phonetic: 'Kufuwan', french: 'Un égal / un semblable' }
    ]
  },
  {
    id: 'al-falaq',
    surahNumber: 113,
    titleArabic: 'سُورَةُ الْفَلَقِ',
    titlePhonetic: 'Sūratu l-Falaq',
    titleFrench: 'Sourate 113 — L’Aube Naissante',
    revelationPlace: 'Mecquoise',
    versesCount: 5,
    teenReflection:
      'Première des deux sourates protectrices (Al-Mu‘awwidhatān) : on demande la protection du Seigneur de l’aube contre tous les maux extérieurs et contre la jalousie.',
    verses: [
      {
        verseNumber: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        phonetic: 'Qul a‘ūdhu bi-Rabbi l-falaq',
        french: 'Dis : « Je cherche protection auprès du Seigneur de l’aube naissante,'
      },
      {
        verseNumber: 2,
        arabic: 'مِنْ شَرِّ مَا خَلَقَ',
        phonetic: 'Min charri mā khalaq',
        french: 'contre le mal des êtres qu’Il a créés,'
      },
      {
        verseNumber: 3,
        arabic: 'وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        phonetic: 'Wa min charri ghāsiqin idhā waqab',
        french: 'contre le mal de l’obscurité quand elle s’approfondit,'
      },
      {
        verseNumber: 4,
        arabic: 'وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
        phonetic: 'Wa min charri n-naffāthāti fī l-‘uqad',
        french: 'contre le mal de celles qui soufflent sur les nœuds,'
      },
      {
        verseNumber: 5,
        arabic: 'وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        phonetic: 'Wa min charri ḥāsidin idhā ḥasad',
        french: 'et contre le mal de l’envieux quand il envie. »'
      }
    ],
    keyWords: [
      { arabic: 'أَعُوذُ', phonetic: 'A‘ūdhu', french: 'Je cherche refuge / protection' },
      { arabic: 'الْفَلَقِ', phonetic: 'Al-Falaqi', french: 'L’aube qui fend la nuit' },
      { arabic: 'شَرِّ', phonetic: 'Charri', french: 'Le mal / la nuisance' },
      { arabic: 'خَلَقَ', phonetic: 'Khalaqa', french: 'Il a créé' },
      { arabic: 'حَاسِدٍ', phonetic: 'Ḥāsidin', french: 'Un envieux / jaloux' }
    ]
  },
  {
    id: 'an-nas',
    surahNumber: 114,
    titleArabic: 'سُورَةُ النَّاسِ',
    titlePhonetic: 'Sūratu n-Nās',
    titleFrench: 'Sourate 114 — Les Hommes (L’Humanité)',
    revelationPlace: 'Mecquoise',
    versesCount: 6,
    teenReflection:
      'Dernière sourate du Coran : elle nous apprend à confier notre cœur à Allah pour le protéger des doutes et des mauvaises pensées intérieures (al-waswās).',
    verses: [
      {
        verseNumber: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        phonetic: 'Qul a‘ūdhu bi-Rabbi n-nās',
        french: 'Dis : « Je cherche protection auprès du Seigneur des hommes,'
      },
      {
        verseNumber: 2,
        arabic: 'مَلِكِ النَّاسِ',
        phonetic: 'Maliki n-nās',
        french: 'Le Souverain des hommes,'
      },
      {
        verseNumber: 3,
        arabic: 'إِلَٰهِ النَّاسِ',
        phonetic: 'Ilāhi n-nās',
        french: 'Dieu des hommes,'
      },
      {
        verseNumber: 4,
        arabic: 'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        phonetic: 'Min charri l-waswāsi l-khannās',
        french: 'contre le mal du mauvais conseiller, furtif,'
      },
      {
        verseNumber: 5,
        arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
        phonetic: 'Alladhī yuwaswisu fī ṣudūri n-nās',
        french: 'qui souffle le mal dans les poitrines des hommes,'
      },
      {
        verseNumber: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        phonetic: 'Mina l-jinnati wa n-nās',
        french: 'qu’il soit parmi les djinns ou les hommes. »'
      }
    ],
    keyWords: [
      { arabic: 'النَّاسِ', phonetic: 'An-Nāsi', french: 'Les hommes / les êtres humains' },
      { arabic: 'مَلِكِ', phonetic: 'Maliki', french: 'Le Roi / le Souverain' },
      { arabic: 'إِلَٰهِ', phonetic: 'Ilāhi', french: 'La Divinité adorée' },
      { arabic: 'الْوَسْوَاسِ', phonetic: 'Al-Waswāsi', french: 'Le tentateur qui murmure' },
      { arabic: 'صُدُورِ', phonetic: 'Ṣudūri', french: 'Les poitrines / les cœurs' }
    ]
  },
  {
    id: 'al-asr',
    surahNumber: 103,
    titleArabic: 'سُورَةُ الْعَصْرِ',
    titlePhonetic: 'Sūratu l-‘Aṣr',
    titleFrench: 'Sourate 103 — Le Temps',
    revelationPlace: 'Mecquoise',
    versesCount: 3,
    teenReflection:
      'En 3 versets seulement, cette sourate donne la feuille de route de toute une vie réussie : la foi, les bonnes actions, s’encourager à la vérité et s’encourager à la patience.',
    verses: [
      {
        verseNumber: 1,
        arabic: 'وَالْعَصْرِ',
        phonetic: 'Wa l-‘aṣr',
        french: 'Par le Temps !'
      },
      {
        verseNumber: 2,
        arabic: 'إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ',
        phonetic: 'Inna l-insāna la-fī khusr',
        french: 'L’être humain est certes en perdition,'
      },
      {
        verseNumber: 3,
        arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        phonetic: 'Illā lladhīna āmanū wa ‘amilū ṣ-ṣāliḥāti wa tawāṣaw bi-l-ḥaqqi wa tawāṣaw bi-ṣ-ṣabr',
        french: 'sauf ceux qui croient et accomplissent les bonnes œuvres, s’enjoignent mutuellement la vérité et s’enjoignent mutuellement la patience.'
      }
    ],
    keyWords: [
      { arabic: 'الْعَصْرِ', phonetic: 'Al-‘Aṣri', french: 'Le temps qui passe / l’époque' },
      { arabic: 'الْإِنْسَانَ', phonetic: 'Al-Insāna', french: 'L’être humain' },
      { arabic: 'خُسْرٍ', phonetic: 'Khusrin', french: 'Une perte / perdition' },
      { arabic: 'الصَّالِحَاتِ', phonetic: 'Aṣ-Ṣāliḥāti', french: 'Les bonnes actions utiles' },
      { arabic: 'الْحَقِّ · الصَّبْرِ', phonetic: 'Al-Ḥaqqi · Aṣ-Ṣabri', french: 'La vérité · La patience' }
    ]
  },
  {
    id: 'al-kawthar',
    surahNumber: 108,
    titleArabic: 'سُورَةُ الْكَوْثَرِ',
    titlePhonetic: 'Sūratu l-Kawthar',
    titleFrench: 'Sourate 108 — L’Abondance',
    revelationPlace: 'Mecquoise',
    versesCount: 3,
    teenReflection:
      'La sourate la plus courte du Coran : elle rappelle les bienfaits immenses accordés par Allah et nous invite à y répondre par la prière sincère et le partage.',
    verses: [
      {
        verseNumber: 1,
        arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
        phonetic: 'Innā a‘ṭaynāka l-Kawthar',
        french: 'Nous t’avons certes accordé l’Abondance (et le fleuve du Paradis).'
      },
      {
        verseNumber: 2,
        arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
        phonetic: 'Fa-ṣalli li-Rabbika wa nḥar',
        french: 'Accomplis donc la prière pour ton Seigneur et sacrifie.'
      },
      {
        verseNumber: 3,
        arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
        phonetic: 'Inna chāni’aka huwa l-abtar',
        french: 'Celui qui te hait sera certes sans postérité.'
      }
    ],
    keyWords: [
      { arabic: 'أَعْطَيْنَاكَ', phonetic: 'A‘ṭaynāka', french: 'Nous t’avons donné / accordé' },
      { arabic: 'الْكَوْثَرَ', phonetic: 'Al-Kawthara', french: 'L’abondance de bien (et fleuve du Paradis)' },
      { arabic: 'فَصَلِّ لِرَبِّكَ', phonetic: 'Fa-ṣalli li-Rabbika', french: 'Prie donc pour ton Seigneur' }
    ]
  },
  {
    id: 'an-nasr',
    surahNumber: 110,
    titleArabic: 'سُورَةُ النَّصْرِ',
    titlePhonetic: 'Sūratu n-Naṣr',
    titleFrench: 'Sourate 110 — Le Secours Victorieux',
    revelationPlace: 'Médinoise',
    versesCount: 3,
    teenReflection:
      'Cette sourate enseigne l’humilité dans la réussite : quand un succès arrive, on remercie Allah, on Le célèbre et on Lui demande pardon.',
    verses: [
      {
        verseNumber: 1,
        arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
        phonetic: 'Idhā jā’a naṣru Llāhi wa l-fatḥ',
        french: 'Lorsque vient le secours d’Allah ainsi que la victoire,'
      },
      {
        verseNumber: 2,
        arabic: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
        phonetic: 'Wa ra’ayta n-nāsa yadkhulūna fī dīni Llāhi afwājā',
        french: 'et que tu vois les gens entrer en foule dans la religion d’Allah,'
      },
      {
        verseNumber: 3,
        arabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
        phonetic: 'Fa-sabbiḥ bi-ḥamdi Rabbika wa staghfirhu innahu kāna tawwābā',
        french: 'alors célèbre les louanges de ton Seigneur et implore Son pardon, car Il est Grand Accueillant au repentir.'
      }
    ],
    keyWords: [
      { arabic: 'نَصْرُ اللَّهِ', phonetic: 'Naṣru Llāhi', french: 'Le secours / l’aide d’Allah' },
      { arabic: 'الْفَتْحُ', phonetic: 'Al-Fatḥu', french: 'L’ouverture / la victoire' },
      { arabic: 'يَدْخُلُونَ', phonetic: 'Yadkhulūna', french: 'Ils entrent' },
      { arabic: 'فَسَبِّحْ', phonetic: 'Fa-sabbiḥ', french: 'Glorifie donc' },
      { arabic: 'وَاسْتَغْفِرْهُ', phonetic: 'Wa staghfirhu', french: 'Et demande-Lui pardon' }
    ]
  }
];

export const PDF_COURSE_SHEETS: PdfCourseSheet[] = [
  {
    id: 'pdf-01-alphabet-bateaux',
    code: 'FICHE-A1-01',
    moduleId: 'alphabet',
    moduleLabel: 'Module 1 · Alphabet',
    title: 'Cours Arabe A1 Basique — Page 1 : L’Alphabet en douceur (Lettres Bateaux & Jumelles)',
    subtitle: 'Support officiel 13-17 ans · Équivalents phonétiques français & lignes d’écriture',
    arabicHeader: { arabic: 'الْحُرُوفُ الْأَبْجَدِيَّةُ (١)', phonetic: 'Al-Ḥurūfu l-Abjadiyya (1)', french: 'Les lettres de l’alphabet — Partie 1' },
    pagesCount: 4,
    fileSize: '420 Ko',
    levelTag: 'Débutant A1.1',
    summaryPoints: [
      'Tableau des 14 premières lettres (ا à ض) avec leur équivalent sonore exact en français.',
      'Règle visuelle des lettres « bateaux » (ب ت ث ن ي) selon le nombre et la place des points.',
      'Mots d’exemples avec la règle des 3 colonnes : Arabe vocalisé + Phonétique + Sens en français.'
    ],
    triadTable: [
      { arabic: 'أَسَدٌ', phonetic: 'Asadun', french: 'Un lion (Lettre Alif ا)' },
      { arabic: 'بَيْتٌ', phonetic: 'Baytun', french: 'Une maison (Lettre Bā’ ب)' },
      { arabic: 'تَمْرٌ', phonetic: 'Tamrun', french: 'Des dattes (Lettre Tā’ ت)' },
      { arabic: 'مَسْجِدٌ', phonetic: 'Masjidun', french: 'Une mosquée (Lettre Jīm ج)' },
      { arabic: 'حَمْدٌ', phonetic: 'Ḥamdun', french: 'Une louange (Lettre Ḥā’ ح)' },
      { arabic: 'دَرْسٌ', phonetic: 'Darsun', french: 'Un cours / une leçon (Lettre Dāl د)' }
    ],
    exercisePrompt: 'Exercice d’atelier : Entoure en bleu ciel les lettres qui possèdent un point en dessous et relie chaque mot arabe à sa transcription phonétique.'
  },
  {
    id: 'pdf-02-alphabet-positions',
    code: 'FICHE-A1-02',
    moduleId: 'alphabet',
    moduleLabel: 'Module 1 · Alphabet',
    title: 'Cours Arabe A1 Basique — Page 2 : Les 4 Positions (Isolée, Début, Milieu, Fin)',
    subtitle: 'Comprendre comment les lettres s’attachent et repérer les 6 lettres autonomes',
    arabicHeader: { arabic: 'أَشْكَالُ الْحُرُوفِ فِي الْكَلِمَةِ', phonetic: 'Achkālu l-ḥurūfi fī l-kalima', french: 'Les formes des lettres dans le mot' },
    pagesCount: 5,
    fileSize: '510 Ko',
    levelTag: 'Débutant A1.1',
    summaryPoints: [
      'Grille complète des 28 lettres dans leurs 4 positions (Isolée, Début, Milieu, Fin).',
      'Focus spécial sur les 6 lettres qui ne tendent jamais le bras à gauche : ا د ذ ر ز و.',
      'Décomposition lettre par lettre de 12 mots courants (كِتَابٌ، مَدْرَسَةٌ، قَلْبٌ، نُورٌ).'
    ],
    triadTable: [
      { arabic: 'كـ + ـتـ + ـا + ب = كِتَابٌ', phonetic: 'K + t + ā + b = Kitābun', french: 'Un livre' },
      { arabic: 'مـ + ـسـ + ـجـ + ـد = مَسْجِدٌ', phonetic: 'M + s + j + d = Masjidun', french: 'Une mosquée' },
      { arabic: 'قـ + ـلـ + ـب = قَلْبٌ', phonetic: 'Q + l + b = Qalbun', french: 'Un cœur' },
      { arabic: 'نـ + ـو + ر = نُورٌ', phonetic: 'N + ū + r = Nūrun', french: 'Une lumière' }
    ],
    exercisePrompt: 'Exercice : Détache les lettres des mots suivants (سَلَامٌ · قَلَمٌ · شَمْسٌ) et écris leur transcription phonétique.'
  },
  {
    id: 'pdf-03-voyelles-courtes',
    code: 'FICHE-A1-03',
    moduleId: 'voyelles',
    moduleLabel: 'Module 2 · Voyelles',
    title: 'Cours Arabe A1 Complet — Les Voyelles Courtes (Fatḥa, Kasra, Ḍamma) & Sukūn',
    subtitle: 'Lire ses premières syllabes et ses premiers verbes de 3 lettres sans hésiter',
    arabicHeader: { arabic: 'الْحَرَكَاتُ الْقَصِيرَةُ وَالسُّكُونُ', phonetic: 'Al-Ḥarakātu l-Qaṣīratu wa s-Sukūn', french: 'Les voyelles courtes et le silence' },
    pagesCount: 4,
    fileSize: '390 Ko',
    levelTag: 'Fondations A1.1',
    summaryPoints: [
      'Explication visuelle de Fatḥa (ـَ = a), Kasra (ـِ = i), Ḍamma (ـُ = u/ou) et Sukūn (ـْ = consonne pure).',
      'Tableau syllabique complet pour s’entraîner à voix haute en 5 minutes par jour.',
      'Lecture guidée de 15 mots de 3 lettres avec transcription phonétique et traduction.'
    ],
    triadTable: [
      { arabic: 'كَتَبَ', phonetic: 'Kataba', french: 'Il a écrit (3 Fatḥa)' },
      { arabic: 'عَلِمَ', phonetic: '‘Alima', french: 'Il a su (Fatḥa + Kasra + Fatḥa)' },
      { arabic: 'كُتُبٌ', phonetic: 'Kutubun', french: 'Des livres (Ḍamma + Ḍamma + Tanwīn)' },
      { arabic: 'مِنْ · عَنْ', phonetic: 'Min · ‘An', french: 'De / Depuis · Au sujet de (avec Sukūn)' }
    ],
    exercisePrompt: 'Exercice oral & écrit : Lis chaque mot à voix haute puis écris sa transcription phonétique française (ex: سَجَدَ → Sajada).'
  },
  {
    id: 'pdf-04-voyelles-longues-tanwin',
    code: 'FICHE-A1-04',
    moduleId: 'voyelles',
    moduleLabel: 'Module 2 · Voyelles',
    title: 'Cours Arabe A1 Complet — Voyelles Longues (Al-Madd), Tanwīn & Chadda',
    subtitle: 'Maîtriser le rythme des 2 temps (ā, ū, ī) et les terminaisons (-un, -an, -in)',
    arabicHeader: { arabic: 'الْمُدُودُ وَالتَّنْوِينُ وَالشَّدَّةُ', phonetic: 'Al-Mudūdu wa t-Tanwīnu wa ch-Chadda', french: 'Prolongations, doubles voyelles et appui' },
    pagesCount: 6,
    fileSize: '580 Ko',
    levelTag: 'Fondations A1.2',
    summaryPoints: [
      'Comparatif visuel Voyelle Courte (1 temps) vs Voyelle Longue (2 temps : بَا / بُو / بِي).',
      'Les 3 formes du Tanwīn en fin de nom indéfini : ـٌ (-un), ـًـا (-an), ـٍ (-in).',
      'La Chadda (ـّ) : comment appuyer sur la lettre doublée (ex: رَبٌّ Rabbun).'
    ],
    triadTable: [
      { arabic: 'جَمَلٌ ≠ جَمَالٌ', phonetic: 'Jamalun ≠ Jamālun', french: 'Un chameau ≠ La beauté' },
      { arabic: 'عَلِمَ ≠ عَالِمٌ', phonetic: '‘Alima ≠ ‘Ālimun', french: 'Il a su ≠ Un savant' },
      { arabic: 'شُكْرًا · عَفْوًا', phonetic: 'Chukran · ‘Afwan', french: 'Merci · De rien (Tanwīn -an)' },
      { arabic: 'رَبٌّ · أُمٌّ', phonetic: 'Rabbun · Ummun', french: 'Un Seigneur · Une mère (Chadda)' }
    ],
    exercisePrompt: 'Exercice : Souligne les voyelles longues dans les mots proposés et indique si la prolongation est en Alif (ā), Wāw (ū) ou Yā’ (ī).'
  },
  {
    id: 'pdf-05-grammaire-solaire-lunaire',
    code: 'FICHE-A1-05',
    moduleId: 'grammaire',
    moduleLabel: 'Module 3 · Bases A1',
    title: 'Cours Arabe A1 Complet — Article « Al- » (Lettres Solaires & Lunaires) et Genre',
    subtitle: 'Comprendre pourquoi on dit Al-Qamaru mais Ach-Chamsu, et repérer le féminin (ة)',
    arabicHeader: { arabic: 'الْحُرُوفُ الْقَمَرِيَّةُ وَالشَّمْسِيَّةُ', phonetic: 'Al-Ḥurūfu l-Qamariyya wa ch-Chamsiyya', french: 'Les lettres lunaires et solaires' },
    pagesCount: 5,
    fileSize: '490 Ko',
    levelTag: 'Grammaire A1.2',
    summaryPoints: [
      'Tableau des 14 lettres Lunaires (L prononcé) et des 14 lettres Solaires (L assimilé avec Chadda).',
      'Règle de disparition du Tanwīn quand le nom prend الـ (كِتَابٌ Kitābun → الْكِتَابُ Al-Kitābu).',
      'Formation du féminin avec la Tā’ Marbūta (ة) et utilisation de هَذَا (Hādhā) / هَذِهِ (Hādhihi).'
    ],
    triadTable: [
      { arabic: 'الْقَمَرُ · الْمَسْجِدُ', phonetic: 'Al-Qamaru · Al-Masjidu', french: 'La lune · La mosquée (Lunaires)' },
      { arabic: 'الشَّمْسُ · السَّلَامُ', phonetic: 'Ach-Chamsu · As-Salāmu', french: 'Le soleil · La paix (Solaires)' },
      { arabic: 'هَذَا طَالِبٌ', phonetic: 'Hādhā ṭālibun', french: 'Ceci est un étudiant (Masculin)' },
      { arabic: 'هَذِهِ طَالِبَةٌ', phonetic: 'Hādhihi ṭālibatun', french: 'Ceci est une étudiante (Féminin)' }
    ],
    exercisePrompt: 'Exercice : Ajoute الـ devant chaque mot et écris sa prononciation exacte (Al- ou assimilation solaire).'
  },
  {
    id: 'pdf-06-grammaire-pronoms-dialogues',
    code: 'FICHE-A1-06',
    moduleId: 'grammaire',
    moduleLabel: 'Module 3 · Bases A1',
    title: 'Cours Arabe A1 Complet — Pronoms Personnels, Prépositions & Premiers Dialogues',
    subtitle: 'Se présenter en arabe, poser des questions simples et dialoguer entre jeunes à la mosquée',
    arabicHeader: { arabic: 'الضَّمَائِرُ وَالْحِوَارُ الْيَوْمِيُّ', phonetic: 'Aḍ-Ḍamā’iru wa l-Ḥiwāru l-Yawmiyyu', french: 'Les pronoms et le dialogue quotidien' },
    pagesCount: 6,
    fileSize: '540 Ko',
    levelTag: 'Expression A1.2',
    summaryPoints: [
      'Les 6 pronoms sujets indispensables : أَنَا (Anā), أَنْتَ (Anta), أَنْتِ (Anti), هُوَ (Huwa), هِيَ (Hiya), نَحْنُ (Naḥnu).',
      'Les prépositions de lieu et de lien : فِي (fī = dans), مِنْ (min = de), إِلَى (ilā = vers), مَعَ (ma‘a = avec).',
      'Dialogue complet bilingue + phonétique entre deux adolescents à la Mosquée SALEM.'
    ],
    triadTable: [
      { arabic: 'أَنَا طَالِبٌ فِي الْمَسْجِدِ', phonetic: 'Anā ṭālibun fī l-masjidi', french: 'Je suis élève à la mosquée' },
      { arabic: 'كَيْفَ حَالُكَ ؟', phonetic: 'Kayfa ḥāluka ?', french: 'Comment vas-tu ? (à un garçon)' },
      { arabic: 'أَنَا بِخَيْرٍ وَالْحَمْدُ لِلَّهِ', phonetic: 'Anā bi-khayrin wa l-ḥamdu lillāhi', french: 'Je vais bien, louange à Allah' },
      { arabic: 'مَا اسْمُكَ ؟ اسْمِي يَاسِينُ', phonetic: 'Mā smuka ? Ismī Yāsīnu', french: 'Quel est ton prénom ? Mon prénom est Yassine' }
    ],
    exercisePrompt: 'Exercice : Rédige 3 phrases en arabe (avec phonétique et traduction) pour te présenter : ton prénom, ta ville et ton cours.'
  },
  {
    id: 'pdf-07-vocabulaire-100',
    code: 'FICHE-A1-07',
    moduleId: 'vocabulaire',
    moduleLabel: 'Module 4 · Vocabulaire',
    title: 'Livret PDF — Les 100 Premiers Mots Indispensables (Palier 100 · Foi & Quotidien)',
    subtitle: 'Chaque mot en Arabe vocalisé + Transcription Phonétique + Sens en Français + Phrase d’exemple',
    arabicHeader: { arabic: 'مِائَةُ كَلِمَةٍ أَسَاسِيَّةٍ (١٠٠)', phonetic: 'Mi’atu kalimatin asāsiyyatin (100)', french: 'Les 100 mots de base indispensables' },
    pagesCount: 8,
    fileSize: '680 Ko',
    levelTag: 'Vocabulaire Palier 100',
    summaryPoints: [
      'Les mots clés de la foi, de la mosquée, des salutations et des invocations quotidiennes.',
      'Le vocabulaire de la famille proche (père, mère, frère, sœur) et de la salle de classe.',
      'Format spécial révision rapide pour ados (13-17 ans) avec colonne d’auto-évaluation.'
    ],
    triadTable: [
      { arabic: 'السَّلَامُ عَلَيْكُمْ', phonetic: 'As-salāmu ‘alaykum', french: 'Que la paix soit sur vous' },
      { arabic: 'الْحَمْدُ لِلَّهِ', phonetic: 'Al-ḥamdu lillāhi', french: 'Louange à Allah' },
      { arabic: 'صَلَاةٌ · مَسْجِدٌ', phonetic: 'Ṣalātun · Masjidun', french: 'La prière · Une mosquée' },
      { arabic: 'عِلْمٌ · كِتَابٌ', phonetic: '‘Ilmun · Kitābun', french: 'Le savoir · Un livre' }
    ],
    exercisePrompt: 'Défi Palier 100 : Coche les mots que tu connais par cœur et teste-toi en cachant la colonne française.'
  },
  {
    id: 'pdf-08-vocabulaire-200',
    code: 'FICHE-A1-08',
    moduleId: 'vocabulaire',
    moduleLabel: 'Module 4 · Vocabulaire',
    title: 'Livret PDF — Palier 200 Mots : Prières, Temps, Nature & Vie Quotidienne',
    subtitle: 'Enrichir son vocabulaire pour comprendre les rappels, les horaires de prière et la nature',
    arabicHeader: { arabic: 'مِائَتَا كَلِمَةٍ مُهِمَّةٍ (٢٠٠)', phonetic: 'Mi’atā kalimatin muhimmatin (200)', french: 'Les 200 mots importants (Palier 2)' },
    pagesCount: 10,
    fileSize: '790 Ko',
    levelTag: 'Vocabulaire Palier 200',
    summaryPoints: [
      'Le lexique des 5 prières quotidiennes (Al-Fajr, Aẓ-Ẓuhr, Al-‘Aṣr, Al-Maghrib, Al-‘Ichā’) et des ablutions (Al-Wuḍū’).',
      'Les repères du temps (jour, semaine, mois, aujourd’hui, demain) et de l’univers (ciel, terre, soleil, lune, lumière).',
      'Le corps humain, le cœur (Al-Qalb) et la nourriture saine mentionnée dans la tradition.'
    ],
    triadTable: [
      { arabic: 'الْوُضُوءُ وَالطَّهَارَةُ', phonetic: 'Al-Wuḍū’u wa ṭ-Ṭahāratu', french: 'Les ablutions et la pureté' },
      { arabic: 'سَمَاءٌ · أَرْضٌ · نُورٌ', phonetic: 'Samā’un · Arḍun · Nūrun', french: 'Ciel · Terre · Lumière' },
      { arabic: 'قَلْبٌ · عَقْلٌ · لِسَانٌ', phonetic: 'Qalbun · ‘Aqlun · Lisānun', french: 'Cœur · Raison · Langue' },
      { arabic: 'الْيَوْمَ · غَدًا', phonetic: 'Al-yawma · Ghadan', french: 'Aujourd’hui · Demain' }
    ],
    exercisePrompt: 'Exercice : Associe chaque prière quotidienne à son moment de la journée en français et en phonétique.'
  },
  {
    id: 'pdf-09-vocabulaire-300',
    code: 'FICHE-A1-09',
    moduleId: 'vocabulaire',
    moduleLabel: 'Module 4 · Vocabulaire',
    title: 'Livret PDF — Palier 300 Mots : Valeurs Spirituelles, Verbes d’Action & Nombres',
    subtitle: 'Atteindre les 300 mots A1 complets pour comprendre les versets courants et former des phrases',
    arabicHeader: { arabic: 'ثَلَاثُمِائَةِ كَلِمَةٍ شَامِلَةٍ (٣٠٠)', phonetic: 'Thalāthumi’ati kalimatin chāmilatin (300)', french: 'Le répertoire complet des 300 mots A1' },
    pagesCount: 12,
    fileSize: '940 Ko',
    levelTag: 'Vocabulaire Palier 300',
    summaryPoints: [
      'Les grandes qualités éthiques : الصَّبْرُ (la patience), الصِّدْقُ (la franchise), الرَّحْمَةُ (la miséricorde), الْعَدْلُ (la justice).',
      'Les 25 verbes d’action les plus fréquents au passé et au présent (lire, écrire, savoir, aller, aider).',
      'Les nombres de 1 à 10 et les adjectifs courants avec leurs contraires.'
    ],
    triadTable: [
      { arabic: 'صَبْرٌ · صِدْقٌ · رَحْمَةٌ', phonetic: 'Ṣabrun · Ṣidqun · Raḥmatun', french: 'Patience · Sincérité · Miséricorde' },
      { arabic: 'قَرَأَ (يَقْرَأُ) · كَتَبَ (يَكْتُبُ)', phonetic: 'Qara’a (Yaqra’u) · Kataba (Yaktubu)', french: 'Lire · Écrire' },
      { arabic: 'رَبِّ زِدْنِي عِلْمًا', phonetic: 'Rabbi zidnī ‘ilman', french: 'Seigneur, augmente ma connaissance' },
      { arabic: 'وَاحِدٌ · اثْنَانِ · ثَلَاثَةٌ', phonetic: 'Wāḥidun · Ithnāni · Thalāthatun', french: 'Un (1) · Deux (2) · Trois (3)' }
    ],
    exercisePrompt: 'Exercice bilan : Construis 4 phrases complètes en combinant un pronom, un verbe et un nom du Palier 300.'
  },
  {
    id: 'pdf-10-sourate-fatiha',
    code: 'FICHE-A1-10',
    moduleId: 'sourates',
    moduleLabel: 'Module 5 · Sourates',
    title: 'Fiche Sourate Al-Fātiḥa — Mot à Mot, Phonétique & Explication pour Ados',
    subtitle: 'Comprendre chaque mot que l’on récite 17 fois par jour dans la prière',
    arabicHeader: { arabic: 'تَفْسِيرُ سُورَةِ الْفَاتِحَةِ', phonetic: 'Tafsīru Sūrati l-Fātiḥa', french: 'Compréhension de Sourate Al-Fātiḥa' },
    pagesCount: 4,
    fileSize: '460 Ko',
    levelTag: 'Coran & Sens',
    summaryPoints: [
      'Les 7 versets en grand caractère arabe vocalisé avec transcription phonétique ligne par ligne.',
      'Découpage lexical mot à mot pour ne plus jamais réciter sans comprendre.',
      'Conseils de prononciation (Tajwīd simplifié : attention au Ḥā de Al-Ḥamdu et au Ṣād de Aṣ-Ṣirāṭ).'
    ],
    triadTable: [
      { arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', phonetic: 'Bismi Llāhi r-Raḥmāni r-Raḥīm', french: 'Au nom d’Allah, le Tout-Miséricordieux, le Très-Miséricordieux' },
      { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', phonetic: 'Al-ḥamdu lillāhi Rabbi l-‘ālamīn', french: 'Louange à Allah, Seigneur des mondes' },
      { arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', phonetic: 'Iyyāka na‘budu wa iyyāka nasta‘īn', french: 'C’est Toi Seul que nous adorons et dont nous implorons le secours' },
      { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', phonetic: 'Ihdinā ṣ-ṣirāṭa l-mustaqīm', french: 'Guide-nous dans le droit chemin' }
    ],
    exercisePrompt: 'Exercice : Relie chaque verset d’Al-Fātiḥa à sa traduction française et entoure les lettres Solaires.'
  },
  {
    id: 'pdf-11-sourates-protectrices',
    code: 'FICHE-A1-11',
    moduleId: 'sourates',
    moduleLabel: 'Module 5 · Sourates',
    title: 'Livret Juz ‘Amma Ados — Al-Ikhlāṣ, Al-Falaq, An-Nās, Al-‘Aṣr, Al-Kawthar & An-Naṣr',
    subtitle: 'Texte arabe vocalisé, transcription phonétique française et vocabulaire expliqué',
    arabicHeader: { arabic: 'قِصَارُ السُّوَرِ لِلشَّبَابِ', phonetic: 'Qiṣāru s-Suwari li-ch-Chabāb', french: 'Les courtes sourates pour les jeunes' },
    pagesCount: 8,
    fileSize: '720 Ko',
    levelTag: 'Coran & Sens',
    summaryPoints: [
      '6 sourates essentielles présentées avec la règle stricte : Arabe + Phonétique + Traduction française.',
      'Encadré « Le message pour ton quotidien d’ado » sur chaque sourate.',
      'Glossaire des 25 mots coraniques clés présents dans ces sourates.'
    ],
    triadTable: [
      { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', phonetic: 'Qul huwa Llāhu Aḥad', french: 'Dis : Il est Allah, Unique (Al-Ikhlāṣ)' },
      { arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', phonetic: 'Qul a‘ūdhu bi-Rabbi l-falaq', french: 'Dis : Je cherche protection auprès du Seigneur de l’aube (Al-Falaq)' },
      { arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', phonetic: 'Qul a‘ūdhu bi-Rabbi n-nās', french: 'Dis : Je cherche protection auprès du Seigneur des hommes (An-Nās)' },
      { arabic: 'وَالْعَصْرِ · إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ', phonetic: 'Wa l-‘aṣr · Inna l-insāna la-fī khusr', french: 'Par le Temps ! L’homme est certes en perdition (Al-‘Aṣr)' }
    ],
    exercisePrompt: 'Exercice : Explique avec tes propres mots les 4 conditions de réussite citées dans la Sourate Al-‘Aṣr.'
  },
  {
    id: 'pdf-12-cahier-bilan-a1',
    code: 'FICHE-A1-12',
    moduleId: 'bilan',
    moduleLabel: 'Module 6 · Programme Complet',
    title: 'Cahier d’Exercices & Évaluation Finale — Programme Arabe A1 Complet (Mosquée SALEM)',
    subtitle: 'Récapitulatif annuel pour les 13-17 ans : Alphabet, Voyelles, Grammaire, 300 Mots & Sourates',
    arabicHeader: { arabic: 'مُرَاجَعَةُ الْمُسْتَوَى الْأَوَّلِ (A1)', phonetic: 'Murāja‘atu l-Mustawā l-Awwal (A1)', french: 'Révision générale du Niveau A1' },
    pagesCount: 10,
    fileSize: '850 Ko',
    levelTag: 'Bilan A1 Complet',
    summaryPoints: [
      'Synthèse visuelle en 2 pages de toutes les règles vues durant l’année.',
      '40 questions d’entraînement progressives avec corrigé détaillé pour réviser à la maison.',
      'Attestation de réussite du Niveau A1 de la Mosquée SALEM de Saint-Sulpice.'
    ],
    triadTable: [
      { arabic: 'الْحُرُوفُ وَالْحَرَكَاتُ', phonetic: 'Al-Ḥurūfu wa l-Ḥarakātu', french: 'Les lettres et les voyelles' },
      { arabic: 'الْكَلِمَاتُ وَالْجُمَلُ', phonetic: 'Al-Kalimātu wa l-Jumalu', french: 'Les mots et les phrases' },
      { arabic: 'الْفَهْمُ وَالتَّدَبُّرُ', phonetic: 'Al-Fahmu wa t-Tadabburu', french: 'La compréhension et la méditation' },
      { arabic: 'النَّجَاحُ وَالتَّفَوُّقُ', phonetic: 'An-Najāḥu wa t-Tafawwuqu', french: 'La réussite et l’excellence' }
    ],
    exercisePrompt: 'Épreuve blanche A1 : Passe le quiz de validation dans chaque module du site avant de remplir ce cahier.'
  }
];

export const SURAHS_QUIZ: QuizQuestion[] = [
  {
    id: 'sur-q1',
    question: 'Dans Sourate Al-Fātiḥa, que signifie le verset إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (Iyyāka na‘budu wa iyyāka nasta‘īn) ?',
    arabicPrompt: { arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', phonetic: 'Iyyāka na‘budu wa iyyāka nasta‘īn', french: 'C’est Toi Seul que nous adorons et dont nous implorons le secours' },
    options: [
      'C’est Toi [Seul] que nous adorons, et c’est Toi [Seul] dont nous implorons le secours',
      'Louange à Allah, Seigneur des mondes',
      'Guide-nous dans le droit chemin',
      'Maître du Jour de la Rétribution'
    ],
    correctIndex: 0,
    explanation: 'نَعْبُدُ (Na‘budu) signifie « nous adorons » et نَسْتَعِينُ (Nasta‘īn) signifie « nous demandons l’aide / le secours ».'
  },
  {
    id: 'sur-q2',
    question: 'Que signifie اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (Ihdinā ṣ-ṣirāṭa l-mustaqīm) dans Sourate Al-Fātiḥa ?',
    arabicPrompt: { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', phonetic: 'Ihdinā ṣ-ṣirāṭa l-mustaqīm', french: 'Guide-nous dans le droit chemin' },
    options: [
      'Guide-nous dans le droit chemin',
      'Au nom d’Allah, le Tout-Miséricordieux',
      'Dis : Il est Allah, Unique',
      'Par le Temps !'
    ],
    correctIndex: 0,
    explanation: 'اهْدِنَا (Ihdinā = Guide-nous) + الصِّرَاطَ (Aṣ-Ṣirāṭa = le chemin / la voie) + الْمُسْتَقِيمَ (Al-Mustaqīma = droit).'
  },
  {
    id: 'sur-q3',
    question: 'Quelle sourate commence par قُلْ هُوَ اللَّهُ أَحَدٌ (Qul huwa Llāhu Aḥad — Dis : Il est Allah, Unique) ?',
    arabicPrompt: { arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', phonetic: 'Qul huwa Llāhu Aḥad', french: 'Dis : « Il est Allah, Unique »' },
    options: [
      'Sourate Al-Ikhlāṣ (سُورَةُ الْإِخْلَاصِ — Le Monothéisme Pur, n°112)',
      'Sourate Al-Falaq (سُورَةُ الْفَلَقِ — L’Aube Naissante, n°113)',
      'Sourate An-Nās (سُورَةُ النَّاسِ — Les Hommes, n°114)',
      'Sourate Al-‘Aṣr (سُورَةُ الْعَصْرِ — Le Temps, n°103)'
    ],
    correctIndex: 0,
    explanation: 'قُلْ هُوَ اللَّهُ أَحَدٌ (Qul huwa Llāhu Aḥad) est le premier verset de Sourate Al-Ikhlāṣ (n°112).'
  },
  {
    id: 'sur-q4',
    question: 'Que signifie le verbe أَعُوذُ (A‘ūdhu) au début de Sourate Al-Falaq et Sourate An-Nās ?',
    arabicPrompt: { arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', phonetic: 'Qul a‘ūdhu bi-Rabbi l-falaq', french: 'Dis : Je cherche protection auprès du Seigneur de l’aube' },
    options: [
      'Je cherche protection / refuge',
      'Je lis / je récite',
      'Je remercie',
      'Je voyage'
    ],
    correctIndex: 0,
    explanation: 'أَعُوذُ (A‘ūdhu) signifie « Je cherche protection / refuge » auprès d’Allah.'
  },
  {
    id: 'sur-q5',
    question: 'Dans Sourate Al-‘Aṣr (سُورَةُ الْعَصْرِ), quelles sont les 4 qualités de ceux qui réussissent ?',
    arabicPrompt: { arabic: 'آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', phonetic: 'Āmanū wa ‘amilū ṣ-ṣāliḥāti wa tawāṣaw bi-l-ḥaqqi wa tawāṣaw bi-ṣ-ṣabr', french: 'La foi, les bonnes œuvres, s’encourager à la vérité et s’encourager à la patience' },
    options: [
      'La foi, les bonnes œuvres, s’enjoindre la vérité (Al-Ḥaqq) et s’enjoindre la patience (Aṣ-Ṣabr)',
      'La richesse, la célébrité, la force et la rapidité',
      'Voyager, construire, vendre et acheter',
      'Lire uniquement sans agir'
    ],
    correctIndex: 0,
    explanation: 'Sourate Al-‘Aṣr cite ces 4 piliers : la foi (Āmanū), les bonnes actions (Aṣ-Ṣāliḥāt), le conseil mutuel dans la vérité (Al-Ḥaqq) et dans la patience (Aṣ-Ṣabr).'
  },
  {
    id: 'sur-q6',
    question: 'Dans Sourate An-Nās (سُورَةُ النَّاسِ), que signifie le mot النَّاسِ (An-Nāsi) ?',
    arabicPrompt: { arabic: 'رَبِّ النَّاسِ · مَلِكِ النَّاسِ', phonetic: 'Rabbi n-nās · Maliki n-nās', french: 'Seigneur des hommes · Souverain des hommes' },
    options: [
      'Les hommes / l’humanité',
      'Les étoiles',
      'Les montagnes',
      'Les arbres'
    ],
    correctIndex: 0,
    explanation: 'النَّاسُ (An-Nāsu) signifie « les gens / les êtres humains ».'
  }
];
