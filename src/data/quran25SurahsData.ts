export interface QuranVerseItem {
  number: number;
  arabic: string;
  phonetic: string;
  french: string;
}

export interface QuranSurah25Item {
  number: number;
  nameArabic: string;
  namePhonetic: string;
  nameFrench: string;
  revelationType: 'Mecquoise' | 'Médinoise';
  versesCount: number;
  summaryFr: string;
  verses: QuranVerseItem[];
}

export interface QuranReciter {
  id: string;
  nameFr: string;
  nameAr: string;
  styleFr: string;
  /** Returns full surah MP3 URL (padded 3 digits, e.g. 001.mp3) */
  getSurahAudioUrl: (surahNumber: number) => string;
  /** Returns single verse MP3 URL (padded SSSAAA.mp3, e.g. 112001.mp3) */
  getAyahAudioUrl: (surahNumber: number, ayahNumber: number) => string;
}

const pad3 = (n: number): string => String(n).padStart(3, '0');

export const QURAN_RECITERS: QuranReciter[] = [
  {
    id: 'dossari',
    nameFr: 'Cheikh Yasser Al-Dosari',
    nameAr: 'الشيخ ياسر الدوسري',
    styleFr: 'Imam de la Grande Mosquée de La Mecque (Al-Masjid Al-Ḥarâm) — Récitation émouvante & articulée',
    getSurahAudioUrl: (s) => `https://server11.mp3quran.net/yasser/${pad3(s)}.mp3`,
    getAyahAudioUrl: (s, a) =>
      `https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/${pad3(s)}${pad3(a)}.mp3`
  },
  {
    id: 'alafasy',
    nameFr: 'Cheikh Mishary Rashid Al-Afasy',
    nameAr: 'الشيخ مشاري راشد العفاسي',
    styleFr: 'Récitation claire & mélodieuse (Koweït)',
    getSurahAudioUrl: (s) => `https://server8.mp3quran.net/afs/${pad3(s)}.mp3`,
    getAyahAudioUrl: (s, a) =>
      `https://everyayah.com/data/Alafasy_128kbps/${pad3(s)}${pad3(a)}.mp3`
  },
  {
    id: 'husary',
    nameFr: 'Cheikh Mahmoud Khalil Al-Husary',
    nameAr: 'الشيخ محمود خليل الحصري',
    styleFr: 'Référence pédagogique pour l’apprentissage du Tajwîd',
    getSurahAudioUrl: (s) => `https://server13.mp3quran.net/husr/${pad3(s)}.mp3`,
    getAyahAudioUrl: (s, a) =>
      `https://everyayah.com/data/Husary_128kbps/${pad3(s)}${pad3(a)}.mp3`
  },
  {
    id: 'ghamdi',
    nameFr: 'Cheikh Saad Al-Ghamdi',
    nameAr: 'الشيخ سعد الغامدي',
    styleFr: 'Voix posée et très suivie pour la mémorisation',
    getSurahAudioUrl: (s) => `https://server7.mp3quran.net/s_gmd/${pad3(s)}.mp3`,
    getAyahAudioUrl: (s, a) =>
      `https://everyayah.com/data/Ghamadi_40kbps/${pad3(s)}${pad3(a)}.mp3`
  }
];

export const QURAN_25_SURAHS: QuranSurah25Item[] = [
  {
    number: 1,
    nameArabic: 'سُورَةُ الْفَاتِحَةِ',
    namePhonetic: 'Al-Fātiḥa',
    nameFrench: 'L’Ouverture (Le Prologue)',
    revelationType: 'Mecquoise',
    versesCount: 7,
    summaryFr:
      'Pilier obligatoire de chaque unité de prière (Rak‘a). Elle réunit la louange d’Allah, Son unicité et la demande de guidée sur le droit chemin.',
    verses: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        phonetic: 'Bismi Llāhi r-Raḥmāni r-Raḥīm',
        french: 'Au nom d’Allah, le Tout-Miséricordieux, le Très-Miséricordieux.'
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        phonetic: 'Al-ḥamdu lillāhi Rabbi l-‘ālamīn',
        french: 'Louange à Allah, Seigneur de l’univers (des mondes).'
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        phonetic: 'Ar-Raḥmāni r-Raḥīm',
        french: 'Le Tout-Miséricordieux, le Très-Miséricordieux.'
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        phonetic: 'Māliki yawmi d-dīn',
        french: 'Maître (Souverain) du Jour de la Rétribution.'
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        phonetic: 'Iyyāka na‘budu wa iyyāka nasta‘īn',
        french: 'C’est Toi [Seul] que nous adorons, et c’est Toi [Seul] dont nous implorons le secours.'
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        phonetic: 'Ihdinā ṣ-ṣirāṭa l-mustaqīm',
        french: 'Guide-nous dans le droit chemin,'
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        phonetic: 'Ṣirāṭa lladhīna an‘amta ‘alayhim ghayri l-maghḍūbi ‘alayhim wa lā ḍ-ḍāllīn',
        french: 'Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.'
      }
    ]
  },
  {
    number: 91,
    nameArabic: 'سُورَةُ الشَّمْسِ',
    namePhonetic: 'Ach-Chams',
    nameFrench: 'Le Soleil',
    revelationType: 'Mecquoise',
    versesCount: 15,
    summaryFr:
      'Sourate majeure sur la purification de l’âme (Tazkiyat an-Nafs) : réussit celui qui purifie son âme, et échoue celui qui la corrompt.',
    verses: [
      { number: 1, arabic: 'وَالشَّمْسِ وَضُحَاهَا', phonetic: 'Wa ch-chamsi wa ḍuḥāhā', french: 'Par le soleil et par sa clarté !' },
      { number: 2, arabic: 'وَالْقَمَرِ إِذَا تَلَاهَا', phonetic: 'Wa l-qamari idhā talāhā', french: 'Et par la lune quand elle le suit !' },
      { number: 3, arabic: 'وَالنَّهَارِ إِذَا جَلَّاهَا', phonetic: 'Wa n-nahāri idhā jallāhā', french: 'Et par le jour quand il l’éclaire !' },
      { number: 4, arabic: 'وَاللَّيْلِ إِذَا يَغْشَاهَا', phonetic: 'Wa l-layli idhā yaghchāhā', french: 'Et par la nuit quand elle l’enveloppe !' },
      { number: 5, arabic: 'وَالسَّمَاءِ وَمَا بَنَاهَا', phonetic: 'Wa s-samā’i wa mā banāhā', french: 'Et par le ciel et Celui qui l’a édifié !' },
      { number: 6, arabic: 'وَالْأَرْضِ وَمَا طَحَاهَا', phonetic: 'Wa l-arḍi wa mā ṭaḥāhā', french: 'Et par la terre et Celui qui l’a étendue !' },
      { number: 7, arabic: 'وَنَفْسٍ وَمَا سَوَّاهَا', phonetic: 'Wa nafsin wa mā sawwāhā', french: 'Et par l’âme et Celui qui l’a harmonieusement façonnée,' },
      { number: 8, arabic: 'فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا', phonetic: 'Fa-alhamahā fujūrahā wa taqwāhā', french: 'Et lui a alors inspiré son immoralité ainsi que sa piété !' },
      { number: 9, arabic: 'قَدْ أَفْلَحَ مَن زَكَّاهَا', phonetic: 'Qad aflaḥa man zakkāhā', french: 'A certes réussi celui qui la purifie,' },
      { number: 10, arabic: 'وَقَدْ خَابَ مَن دَسَّاهَا', phonetic: 'Wa qad khāba man dassāhā', french: 'Et a certes échoué celui qui la corrompt.' },
      { number: 11, arabic: 'كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا', phonetic: 'Kadhdhabat Thamūdu bi-ṭaghwāhā', french: 'Les Thamûd ont crié au mensonge par leur transgression,' },
      { number: 12, arabic: 'إِذِ انبَعَثَ أَشْقَاهَا', phonetic: 'Idhi nba‘atha achqāhā', french: 'Lorsque le plus misérable d’entre eux se leva,' },
      { number: 13, arabic: 'فَقَالَ لَهُمْ رَسُولُ اللَّهِ نَاقَةَ اللَّهِ وَسُقْيَاهَا', phonetic: 'Fa-qāla lahum Rasūlu Llāhi nāqata Llāhi wa suqyāhā', french: 'Le Messager d’Allah leur dit alors : « Préservez la chamelle d’Allah et son abreuvage ! »' },
      { number: 14, arabic: 'فَكَذَّبُوهُ فَعَقَرُوهَا فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنبِهِمْ فَسَوَّاهَا', phonetic: 'Fa-kadhdhabūhu fa-‘aqarūhā fa-damdama ‘alayhim Rabbuhum bi-dhanbihim fa-sawwāhā', french: 'Mais ils le traitèrent de menteur et la tuèrent ; leur Seigneur les détruisit alors pour leur péché et étendit le châtiment sur tous,' },
      { number: 15, arabic: 'وَلَا يَخَافُ عُقْبَاهَا', phonetic: 'Wa lā yakhāfu ‘uqbāhā', french: 'Sans craindre les conséquences de cette punition.' }
    ]
  },
  {
    number: 92,
    nameArabic: 'سُورَةُ اللَّيْلِ',
    namePhonetic: 'Al-Layl',
    nameFrench: 'La Nuit',
    revelationType: 'Mecquoise',
    versesCount: 21,
    summaryFr:
      'Met en parallèle deux attitudes humaines : celui qui donne avec générosité et craint Allah (vers la facilité) et celui qui s’enrichit avec avarice.',
    verses: [
      { number: 1, arabic: 'وَاللَّيْلِ إِذَا يَغْشَىٰ', phonetic: 'Wa l-layli idhā yaghchā', french: 'Par la nuit quand elle enveloppe tout !' },
      { number: 2, arabic: 'وَالنَّهَارِ إِذَا تَجَلَّىٰ', phonetic: 'Wa n-nahāri idhā tajallā', french: 'Par le jour quand il resplendit !' },
      { number: 3, arabic: 'وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ', phonetic: 'Wa mā khalaqa dh-dhakara wa l-unthā', french: 'Et par Celui qui a créé le mâle et la femelle !' },
      { number: 4, arabic: 'إِنَّ سَعْيَكُمْ لَشَتَّىٰ', phonetic: 'Inna sa‘yakum la-chattā', french: 'Vos efforts sont certes divergents.' },
      { number: 5, arabic: 'فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ', phonetic: 'Fa-ammā man a‘ṭā wa ttaqā', french: 'Quant à celui qui donne et craint [Allah],' },
      { number: 6, arabic: 'وَصَدَّقَ بِالْحُسْنَىٰ', phonetic: 'Wa ṣaddaqa bi-l-ḥusnā', french: 'Et déclare véridique la plus belle récompense,' },
      { number: 7, arabic: 'فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ', phonetic: 'Fa-sanuyassiruhu li-l-yusrā', french: 'Nous lui faciliterons la voie vers la plus grande facilité.' },
      { number: 8, arabic: 'وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ', phonetic: 'Wa ammā man bakhila wa staghnā', french: 'Et quant à celui qui se montre avare et se croit suffisant,' },
      { number: 9, arabic: 'وَكَذَّبَ بِالْحُسْنَىٰ', phonetic: 'Wa kadhdhaba bi-l-ḥusnā', french: 'Et traite de mensonge la plus belle récompense,' },
      { number: 10, arabic: 'فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ', phonetic: 'Fa-sanuyassiruhu li-l-‘usrā', french: 'Nous lui faciliterons la voie vers la plus grande difficulté,' },
      { number: 11, arabic: 'وَمَا يُغْنِي عَنْهُ مَالُهُ إِذَا تَرَدَّىٰ', phonetic: 'Wa mā yughnī ‘anhu māluhu idhā taraddā', french: 'Et ses biens ne lui serviront à rien quand il sera précipité.' },
      { number: 12, arabic: 'إِنَّ عَلَيْنَا لَلْهُدَىٰ', phonetic: 'Inna ‘alaynā la-l-hudā', french: 'C’est à Nous qu’appartient certes de guider,' },
      { number: 13, arabic: 'وَإِنَّ لَنَا لَلْآخِرَةَ وَالْأُولَىٰ', phonetic: 'Wa inna lanā la-l-ākhirata wa l-ūlā', french: 'Et c’est à Nous qu’appartiennent la vie dernière et la vie présente.' },
      { number: 14, arabic: 'فَأَنذَرْتُكُمْ نَارًا تَلَظَّىٰ', phonetic: 'Fa-andhartukum nāran talaẓẓā', french: 'Je vous ai donc avertis d’un Feu qui flambe,' },
      { number: 15, arabic: 'لَا يَصْلَاهَا إِلَّا الْأَشْقَى', phonetic: 'Lā yaṣlāhā illā l-achqā', french: 'Où ne brûlera que le plus malheureux,' },
      { number: 16, arabic: 'الَّذِي كَذَّبَ وَتَوَلَّىٰ', phonetic: 'Alladhī kadhdhaba wa tawallā', french: 'Qui dément et tourne le dos ;' },
      { number: 17, arabic: 'وَسَيُجَنَّبُهَا الْأَتْقَى', phonetic: 'Wa sayujannabuhā l-atqā', french: 'Alors qu’en sera écarté le plus pieux,' },
      { number: 18, arabic: 'الَّذِي يُؤْتِي مَالَهُ يَتَزَكَّىٰ', phonetic: 'Alladhī yu’tī mālahu yatazakkā', french: 'Qui donne ses biens pour se purifier,' },
      { number: 19, arabic: 'وَمَا لِأَحَدٍ عِندَهُ مِن نِّعْمَةٍ تُجْزَىٰ', phonetic: 'Wa mā li-aḥadin ‘indahu min ni‘matin tujzā', french: 'Sans attendre de personne aucune faveur en retour,' },
      { number: 20, arabic: 'إِلَّا ابْتِغَاءَ وَجْهِ رَبِّهِ الْأَعْلَىٰ', phonetic: 'Illā btighā’a wajhi Rabbihi l-A‘lā', french: 'Mais uniquement pour rechercher la Face de son Seigneur le Très-Haut ;' },
      { number: 21, arabic: 'وَلَسَوْفَ يَرْضَىٰ', phonetic: 'Wa la-sawfa yarḍā', french: 'Et certes, il sera bientôt pleinement satisfait.' }
    ]
  },
  {
    number: 93,
    nameArabic: 'سُورَةُ الضُّحَىٰ',
    namePhonetic: 'Aḍ-Ḍuḥā',
    nameFrench: 'Le Jour Montant (La Clarté du Matin)',
    revelationType: 'Mecquoise',
    versesCount: 11,
    summaryFr:
      'Sourate de réconfort révélée au Prophète ﷺ : Allah n’abandonne jamais Son serviteur, protège l’orphelin, soutient le démuni et invite à proclamer Ses bienfaits.',
    verses: [
      { number: 1, arabic: 'وَالضُّحَىٰ', phonetic: 'Wa ḍ-ḍuḥā', french: 'Par le jour montant (la clarté du matin) !' },
      { number: 2, arabic: 'وَاللَّيْلِ إِذَا سَجَىٰ', phonetic: 'Wa l-layli idhā sajā', french: 'Et par la nuit quand elle s’étend dans le calme !' },
      { number: 3, arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ', phonetic: 'Mā wadda‘aka Rabbuka wa mā qalā', french: 'Ton Seigneur ne t’a ni abandonné, ni détesté.' },
      { number: 4, arabic: 'وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ', phonetic: 'Wa la-l-ākhiratu khayrun laka mina l-ūlā', french: 'La vie dernière t’est, certes, meilleure que la vie présente.' },
      { number: 5, arabic: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ', phonetic: 'Wa la-sawfa yu‘ṭīka Rabbuka fa-tarḍā', french: 'Ton Seigneur t’accordera certes [Ses faveurs], et alors tu seras satisfait.' },
      { number: 6, arabic: 'أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ', phonetic: 'A-lam yajidka yatīman fa-āwā', french: 'Ne t’a-t-Il pas trouvé orphelin ? Alors Il t’a accueilli !' },
      { number: 7, arabic: 'وَوَجَدَكَ ضَالًّا فَهَدَىٰ', phonetic: 'Wa wajadaka ḍāllan fa-hadā', french: 'Ne t’a-t-Il pas trouvé cherchant ta voie ? Alors Il t’a guidé !' },
      { number: 8, arabic: 'وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ', phonetic: 'Wa wajadaka ‘ā’ilan fa-aghnā', french: 'Ne t’a-t-Il pas trouvé démuni ? Alors Il t’a enrichi !' },
      { number: 9, arabic: 'فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ', phonetic: 'Fa-amma l-yatīma fa-lā taqhar', french: 'Quant à l’orphelin, donc, ne le maltraite pas ;' },
      { number: 10, arabic: 'وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ', phonetic: 'Wa amma s-sā’ila fa-lā tanhar', french: 'Et quant au demandeur, ne le repousse pas ;' },
      { number: 11, arabic: 'وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ', phonetic: 'Wa ammā bi-ni‘mati Rabbika fa-ḥaddith', french: 'Et quant au bienfait de ton Seigneur, proclame-le.' }
    ]
  },
  {
    number: 94,
    nameArabic: 'سُورَةُ الشَّرْحِ',
    namePhonetic: 'Ach-Charḥ (Al-Inchirāḥ)',
    nameFrench: 'L’Ouverture de la Poitrine (L’Apaisement)',
    revelationType: 'Mecquoise',
    versesCount: 8,
    summaryFr:
      'Sourate de l’espoir : « À côté de la difficulté est, certes, une facilité ! » — apaisement du cœur et persévérance dans l’adoration.',
    verses: [
      { number: 1, arabic: 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ', phonetic: 'A-lam nachraḥ laka ṣadrak', french: 'N’avons-Nous pas ouvert pour toi ta poitrine ?' },
      { number: 2, arabic: 'وَوَضَعْنَا عَنكَ وِزْرَكَ', phonetic: 'Wa waḍa‘nā ‘anka wizrak', french: 'Et ne t’avons-Nous pas déchargé du fardeau' },
      { number: 3, arabic: 'الَّذِي أَنقَضَ ظَهْرَكَ', phonetic: 'Alladhī anqaḍa ẓahrak', french: 'Qui accablait ton dos ?' },
      { number: 4, arabic: 'وَرَفَعْنَا لَكَ ذِكْرَكَ', phonetic: 'Wa rafa‘nā laka dhikrak', french: 'Et exalté pour toi ta renommée ?' },
      { number: 5, arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', phonetic: 'Fa-inna ma‘a l-‘usri yusrā', french: 'À côté de la difficulté est, certes, une facilité !' },
      { number: 6, arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا', phonetic: 'Inna ma‘a l-‘usri yusrā', french: 'Oui, à côté de la difficulté est, certes, une facilité !' },
      { number: 7, arabic: 'فَإِذَا فَرَغْتَ فَانصَبْ', phonetic: 'Fa-idhā faraghta fa-nṣab', french: 'Quand tu te libères, donc, lève-toi [pour adorer],' },
      { number: 8, arabic: 'وَإِلَىٰ رَبِّكَ فَارْغَب', phonetic: 'Wa ilā Rabbika fa-rghab', french: 'Et à ton Seigneur aspire avec ferveur.' }
    ]
  },
  {
    number: 95,
    nameArabic: 'سُورَةُ التِّينِ',
    namePhonetic: 'At-Tīn',
    nameFrench: 'Le Figuier',
    revelationType: 'Mecquoise',
    versesCount: 8,
    summaryFr:
      'Allah a créé l’être humain dans la plus belle et parfaite forme ; seuls la foi et les bonnes œuvres préservent sa dignité.',
    verses: [
      { number: 1, arabic: 'وَالتِّينِ وَالزَّيْتُونِ', phonetic: 'Wa t-tīni wa z-zaytūn', french: 'Par le figuier et l’olivier !' },
      { number: 2, arabic: 'وَطُورِ سِينِينَ', phonetic: 'Wa Ṭūri Sīnīn', french: 'Et par le Mont Sînîn (Sinaï) !' },
      { number: 3, arabic: 'وَهَٰذَا الْبَلَدِ الْأَمِينِ', phonetic: 'Wa hādhā l-baladi l-amīn', french: 'Et par cette Cité sûre (La Mecque) !' },
      { number: 4, arabic: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ', phonetic: 'Laqad khalaqnā l-insāna fī aḥsani taqwīm', french: 'Nous avons certes créé l’homme dans la forme la plus parfaite.' },
      { number: 5, arabic: 'ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ', phonetic: 'Thumma radadnāhu asfala sāfilīn', french: 'Ensuite, Nous l’avons ramené au niveau le plus bas,' },
      { number: 6, arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ', phonetic: 'Illā lladhīna āmanū wa ‘amilū ṣ-ṣāliḥāti fa-lahum ajrun ghayru mamnūn', french: 'Sauf ceux qui croient et accomplissent les bonnes œuvres : ceux-là auront une récompense ininterrompue.' },
      { number: 7, arabic: 'فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ', phonetic: 'Fa-mā yukadhdhibuka ba‘du bi-d-dīn', french: 'Après cela, qu’est-ce qui te fait traiter la Rétribution de mensonge ?' },
      { number: 8, arabic: 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ', phonetic: 'A-laysa Llāhu bi-aḥkami l-ḥākimīn', french: 'Allah n’est-Il pas le plus Sage des juges ?' }
    ]
  },
  {
    number: 96,
    nameArabic: 'سُورَةُ الْعَلَقِ',
    namePhonetic: 'Al-‘Alaq (Iqra’)',
    nameFrench: 'L’Adhérence (Lis !)',
    revelationType: 'Mecquoise',
    versesCount: 19,
    summaryFr:
      'Les 5 premiers versets constituent la toute première révélation du Coran dans la grotte de Ḥirâ’ : « Lis, au nom de ton Seigneur qui a créé ! »',
    verses: [
      { number: 1, arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', phonetic: 'Iqra’ bismi Rabbika lladhī khalaq', french: 'Lis, au nom de ton Seigneur qui a créé,' },
      { number: 2, arabic: 'خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ', phonetic: 'Khalaqa l-insāna min ‘alaq', french: 'Qui a créé l’homme d’une adhérence.' },
      { number: 3, arabic: 'اقْرَأْ وَرَبُّكَ الْأَكْرَمُ', phonetic: 'Iqra’ wa Rabbuka l-Akram', french: 'Lis ! Ton Seigneur est le Très-Noble,' },
      { number: 4, arabic: 'الَّذِي عَلَّمَ بِالْقَلَمِ', phonetic: 'Alladhī ‘allama bi-l-qalam', french: 'Qui a enseigné par la plume (le calame),' },
      { number: 5, arabic: 'عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ', phonetic: '‘Allama l-insāna mā lam ya‘lam', french: 'A enseigné à l’homme ce qu’il ne savait pas.' },
      { number: 6, arabic: 'كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَىٰ', phonetic: 'Kallā inna l-insāna la-yaṭghā', french: 'Prenez garde ! Vraiment l’homme devient rebelle,' },
      { number: 7, arabic: 'أَن رَّآهُ اسْتَغْنَىٰ', phonetic: 'An ra’āhu staghnā', french: 'Dès qu’il estime qu’il peut se suffire à lui-même.' },
      { number: 8, arabic: 'إِنَّ إِلَىٰ رَبِّكَ الرُّجْعَىٰ', phonetic: 'Inna ilā Rabbika r-ruj‘ā', french: 'Mais c’est vers ton Seigneur qu’est le retour.' },
      { number: 9, arabic: 'أَرَأَيْتَ الَّذِي يَنْهَىٰ', phonetic: 'A-ra’ayta lladhī yanhā', french: 'As-tu vu celui qui interdit' },
      { number: 10, arabic: 'عَبْدًا إِذَا صَلَّىٰ', phonetic: '‘Abdan idhā ṣallā', french: 'À un serviteur d’Allah de célébrer la prière ?' },
      { number: 11, arabic: 'أَرَأَيْتَ إِن كَانَ عَلَى الْهُدَىٰ', phonetic: 'A-ra’ayta in kāna ‘alā l-hudā', french: 'Vois-tu s’il est sur la bonne voie,' },
      { number: 12, arabic: 'أَوْ أَمَرَ بِالتَّقْوَىٰ', phonetic: 'Aw amara bi-t-taqwā', french: 'Ou s’il ordonne la piété ?' },
      { number: 13, arabic: 'أَرَأَيْتَ إِن كَذَّبَ وَتَوَلَّىٰ', phonetic: 'A-ra’ayta in kadhdhaba wa tawallā', french: 'Vois-tu s’il dément et tourne le dos ?' },
      { number: 14, arabic: 'أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَىٰ', phonetic: 'A-lam ya‘lam bi-anna Llāha yarā', french: 'Ne sait-il pas qu’Allah voit tout ?' },
      { number: 15, arabic: 'كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ', phonetic: 'Kallā la-in lam yantahi la-nasfa‘an bi-n-nāṣiyah', french: 'Mais non ! S’il ne cesse pas, Nous le saisirons certes par le toupet,' },
      { number: 16, arabic: 'نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ', phonetic: 'Nāṣiyatin kādhibatin khāṭi’ah', french: 'Un toupet menteur et pécheur !' },
      { number: 17, arabic: 'فَلْيَدْعُ نَادِيَهُ', phonetic: 'Fa-l-yad‘u nādiyah', french: 'Qu’il appelle donc son assemblée !' },
      { number: 18, arabic: 'سَنَدْعُ الزَّبَانِيَةَ', phonetic: 'Sanad‘u z-zabāniyah', french: 'Nous appellerons les gardiens [de l’Enfer].' },
      { number: 19, arabic: 'كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِب', phonetic: 'Kallā lā tuṭi‘hu wa sjud wa qtarib', french: 'Non ! Ne lui obéis pas ; mais prosterne-toi et rapproche-toi [d’Allah] !' }
    ]
  },
  {
    number: 97,
    nameArabic: 'سُورَةُ الْقَدْرِ',
    namePhonetic: 'Al-Qadr',
    nameFrench: 'La Destinée (La Nuit du Destin)',
    revelationType: 'Mecquoise',
    versesCount: 5,
    summaryFr:
      'Célèbre Laylat al-Qadr (la Nuit du Destin pendant le mois de Ramadan), durant laquelle le Coran fut descendu : une nuit meilleure que mille mois.',
    verses: [
      { number: 1, arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', phonetic: 'Innā anzalnāhu fī laylati l-qadr', french: 'Nous l’avons certes fait descendre (le Coran) pendant la Nuit du Destin.' },
      { number: 2, arabic: 'وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ', phonetic: 'Wa mā adrāka mā laylatu l-qadr', french: 'Et qui te dira ce qu’est la Nuit du Destin ?' },
      { number: 3, arabic: 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ', phonetic: 'Laylatu l-qadri khayrun min alfi chahr', french: 'La Nuit du Destin est meilleure que mille mois.' },
      { number: 4, arabic: 'تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ', phonetic: 'Tanazzalu l-malā’ikatu wa r-rūḥu fīhā bi-idhni Rabbihim min kulli amr', french: 'Durant celle-ci descendent les Anges ainsi que l’Esprit (Jibrîl), par permission de leur Seigneur pour tout ordre.' },
      { number: 5, arabic: 'سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ', phonetic: 'Salāmun hiya ḥattā maṭla‘i l-fajr', french: 'Elle est paix et salut jusqu’à l’apparition de l’aube.' }
    ]
  },
  {
    number: 98,
    nameArabic: 'سُورَةُ الْبَيِّنَةِ',
    namePhonetic: 'Al-Bayyinah',
    nameFrench: 'La Preuve Évidente',
    revelationType: 'Médinoise',
    versesCount: 8,
    summaryFr:
      'Définit le cœur de la religion pure (verset 5) : adorer Allah avec sincérité (Ikhlāṣ), accomplir la prière (Ṣalāt) et acquitter la Zakāt.',
    verses: [
      { number: 1, arabic: 'لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ الْبَيِّنَةُ', phonetic: 'Lam yakuni lladhīna kafarū min ahli l-kitābi wa l-muchrikīna munfakkīna ḥattā ta’tiyahumu l-bayyinah', french: 'Les infidèles parmi les gens du Livre, ainsi que les Associateurs, ne cessaient pas de mécroire jusqu’à ce que leur vienne la Preuve évidente :' },
      { number: 2, arabic: 'رَسُولٌ مِّنَ اللَّهِ يَتْلُو صُحُفًا مُّطَهَّرَةً', phonetic: 'Rasūlun mina Llāhi yatlū ṣuḥufan muṭahharah', french: 'Un Messager, de la part d’Allah, qui leur récite des feuilles purifiées,' },
      { number: 3, arabic: 'فِيهَا كُتُبٌ قَيِّمَةٌ', phonetic: 'Fīhā kutubun qayyimah', french: 'Dans lesquelles se trouvent des prescriptions d’une rectitude parfaite.' },
      { number: 4, arabic: 'وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ', phonetic: 'Wa mā tafarraqa lladhīna ūtū l-kitāba illā min ba‘di mā jā’athumu l-bayyinah', french: 'Et ceux à qui le Livre a été donné ne se sont divisés qu’après que la Preuve leur fut venue.' },
      { number: 5, arabic: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ ۚ وَذَٰلِكَ دِينُ الْقَيِّمَةِ', phonetic: 'Wa mā umirū illā li-ya‘budū Llāha mukhliṣīna lahu d-dīna ḥunafā’a wa yuqīmū ṣ-ṣalāta wa yu’tū z-zakāta wa dhālika dīnu l-qayyimah', french: 'Il ne leur a été commandé, cependant, que d’adorer Allah, Lui vouant un culte exclusif, d’accomplir la prière et d’acquitter la Zakât. Et voilà la religion de droiture.' },
      { number: 6, arabic: 'إِنَّ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ فِي نَارِ جَهَنَّمَ خَالِدِينَ فِيهَا ۚ أُولَٰئِكَ هُمْ شَرُّ الْبَرِيَّةِ', phonetic: 'Inna lladhīna kafarū min ahli l-kitābi wa l-muchrikīna fī nāri jahannama khālidīna fīhā ulā’ika hum charru l-bariyyah', french: 'Les infidèles parmi les gens du Livre, ainsi que les Associateurs, iront au feu de l’Enfer, pour y demeurer éternellement. Ceux-là sont les pires de la création.' },
      { number: 7, arabic: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ هُمْ خَيْرُ الْبَرِيَّةِ', phonetic: 'Inna lladhīna āmanū wa ‘amilū ṣ-ṣāliḥāti ulā’ika hum khayru l-bariyyah', french: 'Quant à ceux qui croient et accomplissent les bonnes œuvres, ce sont les meilleurs de toute la création.' },
      { number: 8, arabic: 'جَزَاؤُهُمْ عِندَ رَبِّهِمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۖ رَّضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ لِمَنْ خَشِيَ رَبَّهُ', phonetic: 'Jazā’uhum ‘inda Rabbihim jannātu ‘adnin tajrī min taḥtihā l-anhāru khālidīna fīhā abadan raḍiya Llāhu ‘anhum wa raḍū ‘anhu dhālika li-man khachiya Rabbah', french: 'Leur récompense auprès d’Allah sera les Jardins d’Éden, sous lesquels coulent les ruisseaux, pour y demeurer éternellement. Allah les agrée et ils L’agréent. Telle sera la récompense de celui qui craint son Seigneur.' }
    ]
  },
  {
    number: 99,
    nameArabic: 'سُورَةُ الزَّلْزَلَةِ',
    namePhonetic: 'Az-Zalzalah',
    nameFrench: 'Le Tremblement de Terre (La Secousse)',
    revelationType: 'Médinoise',
    versesCount: 8,
    summaryFr:
      'Rappelle la responsabilité morale absolue : « Quiconque fait un bien fût-ce du poids d’un atome le verra, et quiconque fait un mal fût-ce du poids d’un atome le verra. »',
    verses: [
      { number: 1, arabic: 'إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا', phonetic: 'Idhā zulzilati l-arḍu zilzālahā', french: 'Quand la terre tremblera d’un violent tremblement,' },
      { number: 2, arabic: 'وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا', phonetic: 'Wa akhrajati l-arḍu athqālahā', french: 'Et que la terre fera sortir ses fardeaux,' },
      { number: 3, arabic: 'وَقَالَ الْإِنسَانُ مَا لَهَا', phonetic: 'Wa qāla l-insānu mā lahā', french: 'Et que l’homme dira : « Qu’a-t-elle ? »' },
      { number: 4, arabic: 'يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا', phonetic: 'Yawma’idhin tuḥaddithu akhbārahā', french: 'Ce jour-là, elle contera son histoire,' },
      { number: 5, arabic: 'بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا', phonetic: 'Bi-anna Rabbaka awḥā lahā', french: 'Selon ce que ton Seigneur lui aura révélé.' },
      { number: 6, arabic: 'يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَالَهُمْ', phonetic: 'Yawma’idhin yaṣduru n-nāsu achtātan li-yuraw a‘mālahum', french: 'Ce jour-là, les gens sortiront séparément pour que leur soient montrées leurs œuvres.' },
      { number: 7, arabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ', phonetic: 'Fa-man ya‘mal mithqāla dharratin khayran yarah', french: 'Quiconque fait un bien fût-ce du poids d’un atome, le verra,' },
      { number: 8, arabic: 'وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ', phonetic: 'Wa man ya‘mal mithqāla dharratin charran yarah', french: 'Et quiconque fait un mal fût-ce du poids d’un atome, le verra.' }
    ]
  },
  {
    number: 100,
    nameArabic: 'سُورَةُ الْعَادِيَاتِ',
    namePhonetic: 'Al-‘Ādiyāt',
    nameFrench: 'Les Coursiers Rapides',
    revelationType: 'Mecquoise',
    versesCount: 11,
    summaryFr:
      'Met en garde contre l’ingratitude de l’homme envers son Seigneur et son attachement excessif aux biens matériels.',
    verses: [
      { number: 1, arabic: 'وَالْعَادِيَاتِ ضَبْحًا', phonetic: 'Wa l-‘ādiyāti ḍabḥā', french: 'Par les coursiers qui galopent en haletant,' },
      { number: 2, arabic: 'فَالْمُورِيَاتِ قَدْحًا', phonetic: 'Fa-l-mūriyāti qadḥā', french: 'Qui font jaillir des étincelles en frappant le sol,' },
      { number: 3, arabic: 'فَالْمُغِيرَاتِ صُبْحًا', phonetic: 'Fa-l-mughīrāti ṣubḥā', french: 'Qui s’élancent au matin,' },
      { number: 4, arabic: 'فَأَثَرْنَ بِهِ نَقْعًا', phonetic: 'Fa-atharna bihi naq‘ā', french: 'Et font ainsi voler la poussière,' },
      { number: 5, arabic: 'فَوَسَطْنَ بِهِ جَمْعًا', phonetic: 'Fa-wasaṭna bihi jam‘ā', french: 'Et pénètrent au centre de la troupe !' },
      { number: 6, arabic: 'إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ', phonetic: 'Inna l-insāna li-Rabbihi la-kanūd', french: 'L’homme est, certes, très ingrat envers son Seigneur,' },
      { number: 7, arabic: 'وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ', phonetic: 'Wa innahu ‘alā dhālika la-chahīd', french: 'Et il en est lui-même témoin,' },
      { number: 8, arabic: 'وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ', phonetic: 'Wa innahu li-ḥubbi l-khayri la-chadīd', french: 'Et pour l’amour des richesses il est certes ardent.' },
      { number: 9, arabic: 'أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِي الْقُبُورِ', phonetic: 'A-fa-lā ya‘lamu idhā bu‘thira mā fī l-qubūr', french: 'Ne sait-il donc pas que lorsque ce qui est dans les tombes sera bouleversé,' },
      { number: 10, arabic: 'وَحُصِّلَ مَا فِي الصُّدُورِ', phonetic: 'Wa ḥuṣṣila mā fī ṣ-ṣudūr', french: 'Et que sera dévoilé ce qui est dans les poitrines,' },
      { number: 11, arabic: 'إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ', phonetic: 'Inna Rabbahum bihim yawma’idhin la-khabīr', french: 'Ce jour-là, leur Seigneur sera certes Parfaitement Connaisseur d’eux ?' }
    ]
  },
  {
    number: 101,
    nameArabic: 'سُورَةُ الْقَارِعَةِ',
    namePhonetic: 'Al-Qāri‘ah',
    nameFrench: 'Le Fracas (Le Jour du Jugement)',
    revelationType: 'Mecquoise',
    versesCount: 11,
    summaryFr:
      'Décrit la pesée des actes (Al-Mīzān) au Jour de la Résurrection : celui dont les bonnes œuvres pèsent lourd connaîtra une vie heureuse.',
    verses: [
      { number: 1, arabic: 'الْقَارِعَةُ', phonetic: 'Al-Qāri‘ah', french: 'Le Fracas !' },
      { number: 2, arabic: 'مَا الْقَارِعَةُ', phonetic: 'Mā l-Qāri‘ah', french: 'Qu’est-ce que le Fracas ?' },
      { number: 3, arabic: 'وَمَا أَدْرَاكَ مَا الْقَارِعَةُ', phonetic: 'Wa mā adrāka mā l-Qāri‘ah', french: 'Et qui te dira ce qu’est le Fracas ?' },
      { number: 4, arabic: 'يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ', phonetic: 'Yawma yakūnu n-nāsu ka-l-farāchi l-mabthūth', french: 'C’est le jour où les gens seront comme des papillons éparpillés,' },
      { number: 5, arabic: 'وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ', phonetic: 'Wa takūnu l-jibālu ka-l-‘ihni l-manfūch', french: 'Et où les montagnes seront comme de la laine cardée.' },
      { number: 6, arabic: 'فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ', phonetic: 'Fa-ammā man thaqulat mawāzīnuh', french: 'Quant à celui dont la balance sera lourde [de bonnes œuvres],' },
      { number: 7, arabic: 'فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ', phonetic: 'Fa-huwa fī ‘īchatin rāḍiyah', french: 'Il sera dans une vie agréable et satisfaisante ;' },
      { number: 8, arabic: 'وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ', phonetic: 'Wa ammā man khaffat mawāzīnuh', french: 'Et quant à celui dont la balance sera légère,' },
      { number: 9, arabic: 'فَأُمُّهُ هَاوِيَةٌ', phonetic: 'Fa-ummuhu Hāwiyah', french: 'Sa demeure sera l’abîme (Hâwiyah).' },
      { number: 10, arabic: 'وَمَا أَدْرَاكَ مَا هِيَهْ', phonetic: 'Wa mā adrāka mā hiyah', french: 'Et qui te dira ce que c’est ?' },
      { number: 11, arabic: 'نَارٌ حَامِيَةٌ', phonetic: 'Nārun ḥāmiyah', french: 'C’est un Feu extrêmement ardent.' }
    ]
  },
  {
    number: 102,
    nameArabic: 'سُورَةُ التَّكَاثُرِ',
    namePhonetic: 'At-Takāthur',
    nameFrench: 'La Course aux Richesses',
    revelationType: 'Mecquoise',
    versesCount: 8,
    summaryFr:
      'Avertit contre l’étourdissement causé par la rivalité matérielle et rappelle que l’être humain sera interrogé sur les bienfaits reçus.',
    verses: [
      { number: 1, arabic: 'أَلْهَاكُمُ التَّكَاثُرُ', phonetic: 'Alhākumu t-takāthur', french: 'La course aux richesses vous distrait,' },
      { number: 2, arabic: 'حَتَّىٰ زُرْتُمُ الْمَقَابِرَ', phonetic: 'Ḥattā zurtumu l-maqābir', french: 'Jusqu’à ce que vous visitiez les tombes.' },
      { number: 3, arabic: 'كَلَّا سَوْفَ تَعْلَمُونَ', phonetic: 'Kallā sawfa ta‘lamūn', french: 'Mais non ! Vous saurez bientôt !' },
      { number: 4, arabic: 'ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ', phonetic: 'Thumma kallā sawfa ta‘lamūn', french: 'Encore une fois ! Vous saurez bientôt !' },
      { number: 5, arabic: 'كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ', phonetic: 'Kallā law ta‘lamūna ‘ilma l-yaqīn', french: 'Sûrement ! Si vous saviez de science certaine,' },
      { number: 6, arabic: 'لَتَرَوُنَّ الْجَحِيمَ', phonetic: 'La-tarawunna l-jaḥīm', french: 'Vous verrez certes la Fournaise,' },
      { number: 7, arabic: 'ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ', phonetic: 'Thumma la-tarawunnahā ‘ayna l-yaqīn', french: 'Puis vous la verrez certes, de l’œil de la certitude,' },
      { number: 8, arabic: 'ثُمَّ لَتُسْأَلُنَّ يَوْمَئِذٍ عَنِ النَّعِيمِ', phonetic: 'Thumma la-tus’alunna yawma’idhin ‘ani n-na‘īm', french: 'Puis, assurément, vous serez interrogés, ce jour-là, sur les délices (bienfaits).' }
    ]
  },
  {
    number: 103,
    nameArabic: 'سُورَةُ الْعَصْرِ',
    namePhonetic: 'Al-‘Aṣr',
    nameFrench: 'Le Temps',
    revelationType: 'Mecquoise',
    versesCount: 3,
    summaryFr:
      'Boussole complète du croyant en 3 versets : la foi (Îmân), les œuvres utiles (Ṣāliḥāt), l’entraide dans la vérité (Ḥaqq) et la patience (Ṣabr).',
    verses: [
      { number: 1, arabic: 'وَالْعَصْرِ', phonetic: 'Wa l-‘aṣr', french: 'Par le Temps !' },
      { number: 2, arabic: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ', phonetic: 'Inna l-insāna la-fī khusr', french: 'L’homme est certes en perdition,' },
      { number: 3, arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', phonetic: 'Illā lladhīna āmanū wa ‘amilū ṣ-ṣāliḥāti wa tawāṣaw bi-l-ḥaqqi wa tawāṣaw bi-ṣ-ṣabr', french: 'Sauf ceux qui croient et accomplissent les bonnes œuvres, s’enjoignent mutuellement la vérité et s’enjoignent mutuellement la patience.' }
    ]
  },
  {
    number: 104,
    nameArabic: 'سُورَةُ الْهُمَزَةِ',
    namePhonetic: 'Al-Humazah',
    nameFrench: 'Les Calomniateurs (Les Médisants)',
    revelationType: 'Mecquoise',
    versesCount: 9,
    summaryFr:
      'Condamne sévèrement la médisance, la moquerie (al-humazah wa l-lumazah) et l’arrogance de celui qui croit que son argent le rendra immortel.',
    verses: [
      { number: 1, arabic: 'وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ', phonetic: 'Waylun li-kulli humazatin lumazah', french: 'Malheur à tout calomniateur diffamateur (moqueur),' },
      { number: 2, arabic: 'الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ', phonetic: 'Alladhī jama‘a mālan wa ‘addadah', french: 'Qui amasse une fortune et la compte sans cesse,' },
      { number: 3, arabic: 'يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ', phonetic: 'Yaḥsabu anna mālahu akhladah', french: 'Pensant que sa fortune le rendra immortel.' },
      { number: 4, arabic: 'كَلَّا ۖ لَيُنبَذَنَّ فِي الْحُطَمَةِ', phonetic: 'Kallā la-yunbadhanna fī l-Ḥuṭamah', french: 'Mais non ! Il sera certes jeté dans la Ḥuṭamah (le Feu broyeur).' },
      { number: 5, arabic: 'وَمَا أَدْرَاكَ مَا الْحُطَمَةُ', phonetic: 'Wa mā adrāka mā l-Ḥuṭamah', french: 'Et qui te dira ce qu’est la Ḥuṭamah ?' },
      { number: 6, arabic: 'نَارُ اللَّهِ الْمُوقَدَةُ', phonetic: 'Nāru Llāhi l-mūqadah', french: 'Le Feu attisé d’Allah,' },
      { number: 7, arabic: 'الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ', phonetic: 'Allatī taṭṭali‘u ‘alā l-af’idah', french: 'Qui monte jusqu’aux cœurs.' },
      { number: 8, arabic: 'إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ', phonetic: 'Innahā ‘alayhim mu’ṣadah', french: 'Il se refermera sur eux,' },
      { number: 9, arabic: 'فِي عَمَدٍ مُّمَدَّدَةٍ', phonetic: 'Fī ‘amadin mumaddadah', french: 'En colonnes (entraves) étendues.' }
    ]
  },
  {
    number: 105,
    nameArabic: 'سُورَةُ الْفِيلِ',
    namePhonetic: 'Al-Fīl',
    nameFrench: 'L’Éléphant',
    revelationType: 'Mecquoise',
    versesCount: 5,
    summaryFr:
      'Rappelle comment Allah a protégé la Kaaba contre l’armée de l’éléphant l’année de la naissance du Prophète Muhammad ﷺ.',
    verses: [
      { number: 1, arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ', phonetic: 'A-lam tara kayfa fa‘ala Rabbuka bi-aṣḥābi l-fīl', french: 'N’as-tu pas vu comment ton Seigneur a agi envers les gens de l’Éléphant ?' },
      { number: 2, arabic: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ', phonetic: 'A-lam yaj‘al kaydahum fī taḍlīl', french: 'N’a-t-Il pas rendu leur ruse complètement vaine ?' },
      { number: 3, arabic: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ', phonetic: 'Wa arsala ‘alayhim ṭayran abābīl', french: 'Et envoyé sur eux des oiseaux par volées,' },
      { number: 4, arabic: 'تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ', phonetic: 'Tarmīhim bi-ḥijāratin min sijjīl', french: 'Qui leur lançaient des pierres d’argile brûlante ?' },
      { number: 5, arabic: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ', phonetic: 'Fa-ja‘alahum ka-‘aṣfin ma’kūl', french: 'Et Il les a rendus semblables à de la paille mâchée.' }
    ]
  },
  {
    number: 106,
    nameArabic: 'سُورَةُ قُرَيْشٍ',
    namePhonetic: 'Quraych',
    nameFrench: 'Les Quraych',
    revelationType: 'Mecquoise',
    versesCount: 4,
    summaryFr:
      'Invite à adorer le Seigneur de la Kaaba en reconnaissance pour deux immenses bienfaits : la subsistance (contre la faim) et la sécurité (contre la peur).',
    verses: [
      { number: 1, arabic: 'لِإِيلَافِ قُرَيْشٍ', phonetic: 'Li-īlāfi Quraych', french: 'Pour l’entente et la sécurité des Quraych,' },
      { number: 2, arabic: 'إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ', phonetic: 'Īlāfihim riḥlata ch-chitā’i wa ṣ-ṣayf', french: 'Dans leurs caravanes d’hiver et d’été.' },
      { number: 3, arabic: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ', phonetic: 'Fa-l-ya‘budū Rabba hādhā l-Bayt', french: 'Qu’ils adorent donc le Seigneur de cette Maison (la Kaaba),' },
      { number: 4, arabic: 'الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ', phonetic: 'Alladhī aṭ‘amahum min jū‘in wa āmanahum min khawf', french: 'Qui les a nourris contre la faim et rassurés de la crainte !' }
    ]
  },
  {
    number: 107,
    nameArabic: 'سُورَةُ الْمَاعُونِ',
    namePhonetic: 'Al-Mā‘ūn',
    nameFrench: 'L’Ustensile (L’Entraide)',
    revelationType: 'Mecquoise',
    versesCount: 7,
    summaryFr:
      'Relie directement la foi sincère à la solidarité humaine : prendre soin de l’orphelin, nourrir le pauvre, prier avec présence du cœur et aider autrui.',
    verses: [
      { number: 1, arabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ', phonetic: 'A-ra’ayta lladhī yukadhdhibu bi-d-dīn', french: 'Vois-tu celui qui traite de mensonge la Rétribution ?' },
      { number: 2, arabic: 'فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ', phonetic: 'Fa-dhālika lladhī yadu‘‘u l-yatīm', french: 'C’est bien lui qui repousse l’orphelin,' },
      { number: 3, arabic: 'وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ', phonetic: 'Wa lā yaḥuḍḍu ‘alā ṭa‘āmi l-miskīn', french: 'Et qui n’encourage point à nourrir le pauvre.' },
      { number: 4, arabic: 'فَوَيْلٌ لِّلْمُصَلِّينَ', phonetic: 'Fa-waylun li-l-muṣallīn', french: 'Malheur donc à ceux qui prient,' },
      { number: 5, arabic: 'الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ', phonetic: 'Alladhīna hum ‘an ṣalātihim sāhūn', french: 'Tout en étant négligents envers leur prière,' },
      { number: 6, arabic: 'الَّذِينَ هُمْ يُرَاءُونَ', phonetic: 'Alladhīna hum yurā’ūn', french: 'Qui sont pleins d’ostentation,' },
      { number: 7, arabic: 'وَيَمْنَعُونَ الْمَاعُونَ', phonetic: 'Wa yamna‘ūna l-mā‘ūn', french: 'Et refusent l’ustensile (le moindre service à autrui).' }
    ]
  },
  {
    number: 108,
    nameArabic: 'سُورَةُ الْكَوْثَرِ',
    namePhonetic: 'Al-Kawthar',
    nameFrench: 'L’Abondance',
    revelationType: 'Mecquoise',
    versesCount: 3,
    summaryFr:
      'La sourate la plus courte du Coran (3 versets) : annonce du bien abondant (et du fleuve Al-Kawthar au Paradis), prière et sacrifice pour Allah.',
    verses: [
      { number: 1, arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', phonetic: 'Innā a‘ṭaynāka l-Kawthar', french: 'Nous t’avons certes accordé l’Abondance (le fleuve Al-Kawthar).' },
      { number: 2, arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', phonetic: 'Fa-ṣalli li-Rabbika wa nḥar', french: 'Accomplis donc la prière pour ton Seigneur et sacrifie.' },
      { number: 3, arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ', phonetic: 'Inna chāni’aka huwa l-abtar', french: 'Celui qui te hait sera certes sans postérité.' }
    ]
  },
  {
    number: 109,
    nameArabic: 'سُورَةُ الْكَافِرُونَ',
    namePhonetic: 'Al-Kāfirūn',
    nameFrench: 'Les Infidèles',
    revelationType: 'Mecquoise',
    versesCount: 6,
    summaryFr:
      'Sourate de la sincérité du culte (Tawḥīd al-‘Ibādah) et de la clarté spirituelle : « À vous votre religion, et à moi ma religion. »',
    verses: [
      { number: 1, arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ', phonetic: 'Qul yā ayyuhā l-kāfirūn', french: 'Dis : « Ô vous les infidèles !' },
      { number: 2, arabic: 'لَا أَعْبُدُ مَا تَعْبُدُونَ', phonetic: 'Lā a‘budu mā ta‘budūn', french: 'Je n’adore pas ce que vous adorez.' },
      { number: 3, arabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ', phonetic: 'Wa lā antum ‘ābidūna mā a‘bud', french: 'Et vous n’êtes pas adorateurs de ce que j’adore.' },
      { number: 4, arabic: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ', phonetic: 'Wa lā anā ‘ābidun mā ‘abadtum', french: 'Je ne suis pas adorateur de ce que vous avez adoré.' },
      { number: 5, arabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ', phonetic: 'Wa lā antum ‘ābidūna mā a‘bud', french: 'Et vous n’êtes pas adorateurs de ce que j’adore.' },
      { number: 6, arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ', phonetic: 'Lakum dīnukum wa liya dīn', french: 'À vous votre religion, et à moi ma religion. »' }
    ]
  },
  {
    number: 110,
    nameArabic: 'سُورَةُ النَّصْرِ',
    namePhonetic: 'An-Naṣr',
    nameFrench: 'Le Secours Victorieux',
    revelationType: 'Médinoise',
    versesCount: 3,
    summaryFr:
      'Enseigne l’humilité au moment de la réussite : célébrer la louange d’Allah et Lui demander pardon.',
    verses: [
      { number: 1, arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ', phonetic: 'Idhā jā’a naṣru Llāhi wa l-fatḥ', french: 'Lorsque vient le secours d’Allah ainsi que la victoire,' },
      { number: 2, arabic: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا', phonetic: 'Wa ra’ayta n-nāsa yadkhulūna fī dīni Llāhi afwājā', french: 'Et que tu vois les gens entrer en foule dans la religion d’Allah,' },
      { number: 3, arabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا', phonetic: 'Fa-sabbiḥ bi-ḥamdi Rabbika wa staghfirhu innahu kāna Tawwābā', french: 'Alors célèbre les louanges de ton Seigneur et implore Son pardon, car Il est Grand Accueillant au repentir.' }
    ]
  },
  {
    number: 111,
    nameArabic: 'سُورَةُ الْمَسَدِ',
    namePhonetic: 'Al-Masad',
    nameFrench: 'Les Fibres',
    revelationType: 'Mecquoise',
    versesCount: 5,
    summaryFr:
      'Montre que ni la fortune ni le rang social ne protègent celui qui combat la vérité avec injustice et orgueil.',
    verses: [
      { number: 1, arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ', phonetic: 'Tabbat yadā Abī Lahabin wa tabb', french: 'Que périssent les deux mains d’Abû Lahab et que lui-même périsse !' },
      { number: 2, arabic: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ', phonetic: 'Mā aghnā ‘anhu māluhu wa mā kasab', french: 'Sa fortune ne lui sert à rien, ni ce qu’il a acquis.' },
      { number: 3, arabic: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ', phonetic: 'Sa-yaṣlā nāran dhāta lahab', french: 'Il brûlera dans un Feu plein de flammes,' },
      { number: 4, arabic: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ', phonetic: 'Wa mra’atuhu ḥammālata l-ḥaṭab', french: 'De même que sa femme, la porteuse de bois,' },
      { number: 5, arabic: 'فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ', phonetic: 'Fī jīdihā ḥablun min masad', french: 'À son cou, une corde de fibres.' }
    ]
  },
  {
    number: 112,
    nameArabic: 'سُورَةُ الْإِخْلَاصِ',
    namePhonetic: 'Al-Ikhlāṣ',
    nameFrench: 'Le Monothéisme Pur (La Pureté du Culte)',
    revelationType: 'Mecquoise',
    versesCount: 4,
    summaryFr:
      'Équivaut au tiers du Coran : affirmation pure de l’Unicité d’Allah (Tawḥīd), l’Absolu, qui n’engendre pas et n’est pas engendré.',
    verses: [
      { number: 1, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', phonetic: 'Qul Huwa Llāhu Aḥad', french: 'Dis : « Il est Allah, Unique.' },
      { number: 2, arabic: 'اللَّهُ الصَّمَدُ', phonetic: 'Allāhu ṣ-Ṣamad', french: 'Allah, Le Seul à être imploré pour ce que nous désirons (l’Absolu).' },
      { number: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', phonetic: 'Lam yalid wa lam yūlad', french: 'Il n’a jamais engendré, n’a pas été engendré non plus.' },
      { number: 4, arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', phonetic: 'Wa lam yakun lahu kufuwan aḥad', french: 'Et nul n’est égal à Lui. »' }
    ]
  },
  {
    number: 113,
    nameArabic: 'سُورَةُ الْفَلَقِ',
    namePhonetic: 'Al-Falaq',
    nameFrench: 'L’Aube Naissante',
    revelationType: 'Mecquoise',
    versesCount: 5,
    summaryFr:
      'Première des deux sourates protectrices (Al-Mu‘awwidhatān) : chercher refuge auprès du Seigneur de l’aube contre tout mal extérieur et l’envie.',
    verses: [
      { number: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', phonetic: 'Qul a‘ūdhu bi-Rabbi l-falaq', french: 'Dis : « Je cherche protection auprès du Seigneur de l’aube naissante,' },
      { number: 2, arabic: 'مِن شَرِّ مَا خَلَقَ', phonetic: 'Min charri mā khalaq', french: 'Contre le mal des êtres qu’Il a créés,' },
      { number: 3, arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', phonetic: 'Wa min charri ghāsiqin idhā waqab', french: 'Contre le mal de l’obscurité quand elle s’approfondit,' },
      { number: 4, arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', phonetic: 'Wa min charri n-naffāthāti fī l-‘uqad', french: 'Contre le mal de celles qui soufflent sur les nœuds,' },
      { number: 5, arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', phonetic: 'Wa min charri ḥāsidin idhā ḥasad', french: 'Et contre le mal de l’envieux quand il envie. »' }
    ]
  },
  {
    number: 114,
    nameArabic: 'سُورَةُ النَّاسِ',
    namePhonetic: 'An-Nās',
    nameFrench: 'Les Hommes',
    revelationType: 'Mecquoise',
    versesCount: 6,
    summaryFr:
      'Seconde sourate protectrice et clôture du Noble Coran : demander protection au Seigneur, Souverain et Dieu des hommes contre les tentations du cœur.',
    verses: [
      { number: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', phonetic: 'Qul a‘ūdhu bi-Rabbi n-nās', french: 'Dis : « Je cherche protection auprès du Seigneur des hommes,' },
      { number: 2, arabic: 'مَلِكِ النَّاسِ', phonetic: 'Maliki n-nās', french: 'Le Souverain des hommes,' },
      { number: 3, arabic: 'إِلَٰهِ النَّاسِ', phonetic: 'Ilāhi n-nās', french: 'Dieu des hommes,' },
      { number: 4, arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', phonetic: 'Min charri l-waswāsi l-khannās', french: 'Contre le mal du tentateur furtif,' },
      { number: 5, arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', phonetic: 'Alladhī yuwaswisu fī ṣudūri n-nās', french: 'Qui souffle le mal dans les poitrines des hommes,' },
      { number: 6, arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', phonetic: 'Mina l-jinnati wa n-nās', french: 'Qu’il soit parmi les djinns ou parmi les hommes. »' }
    ]
  }
];
