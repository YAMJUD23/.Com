import { ArabicTriad, QuizQuestion } from './alphabetData';

export type VocabCategory =
  | 'foi_priere'
  | 'invocations_salutations'
  | 'famille_ecole'
  | 'nature_temps'
  | 'corps_vie'
  | 'verbes_outils';

export interface VocabItem {
  id: string;
  number: number;
  tier: 100 | 200 | 300;
  category: VocabCategory;
  categoryLabel: string;
  arabic: string;
  phonetic: string;
  french: string;
  example: ArabicTriad;
}

export const VOCAB_CATEGORIES: { id: VocabCategory | 'all'; label: string; arabicSub: ArabicTriad }[] = [
  {
    id: 'all',
    label: 'Tous les thèmes',
    arabicSub: { arabic: 'كُلُّ الْكَلِمَاتِ', phonetic: 'Kullu l-kalimāti', french: 'Tous les mots' }
  },
  {
    id: 'foi_priere',
    label: 'Religion, Foi & Mosquée',
    arabicSub: { arabic: 'الدِّينُ وَالصَّلَاةُ', phonetic: 'Ad-Dīnu wa ṣ-Ṣalātu', french: 'La religion et la prière' }
  },
  {
    id: 'invocations_salutations',
    label: 'Salutations & Invocations',
    arabicSub: { arabic: 'السَّلَامُ وَالدُّعَاءُ', phonetic: 'As-Salāmu wa d-Du‘ā’u', french: 'Le salut et l’invocation' }
  },
  {
    id: 'famille_ecole',
    label: 'Famille, Maison & Études',
    arabicSub: { arabic: 'الْأُسْرَةُ وَالْمَدْرَسَةُ', phonetic: 'Al-Usratu wa l-Madrasatu', french: 'La famille et l’école' }
  },
  {
    id: 'nature_temps',
    label: 'Nature, Univers & Temps',
    arabicSub: { arabic: 'الطَّبِيعَةُ وَالْوَقْتُ', phonetic: 'Aṭ-Ṭabī‘atu wa l-Waqtu', french: 'La nature et le temps' }
  },
  {
    id: 'corps_vie',
    label: 'Cœur, Corps & Quotidien',
    arabicSub: { arabic: 'الْقَلْبُ وَالْحَيَاةُ', phonetic: 'Al-Qalbu wa l-Ḥayātu', french: 'Le cœur et la vie' }
  },
  {
    id: 'verbes_outils',
    label: 'Verbes, Adjectifs & Nombres',
    arabicSub: { arabic: 'الْأَفْعَالُ وَالصِّفَاتُ', phonetic: 'Al-Af‘ālu wa ṣ-Ṣifātu', french: 'Les verbes et les qualités' }
  }
];

export const VOCABULARY_ITEMS: VocabItem[] = [
  // =========================================================================
  // PALIER 100 : LES 100 PREMIERS MOTS FONDAMENTAUX (Base Prioritaire A1)
  // =========================================================================
  {
    id: 'v-1',
    number: 1,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'اللَّهُ',
    phonetic: 'Allāhu',
    french: 'Allah (Dieu Unique)',
    example: { arabic: 'اللَّهُ أَكْبَرُ', phonetic: 'Allāhu akbaru', french: 'Allah est le Plus Grand' }
  },
  {
    id: 'v-2',
    number: 2,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'رَبٌّ',
    phonetic: 'Rabbun',
    french: 'Un Seigneur / Éducateur / Maître',
    example: { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', phonetic: 'Al-ḥamdu lillāhi Rabbi l-‘ālamīna', french: 'Louange à Allah, Seigneur des mondes' }
  },
  {
    id: 'v-3',
    number: 3,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'الإِسْلَامُ',
    phonetic: 'Al-Islāmu',
    french: 'L’Islam (la soumission apaisée à Dieu)',
    example: { arabic: 'الإِسْلَامُ دِينُ السَّلَامِ', phonetic: 'Al-Islāmu dīnu s-salāmi', french: 'L’Islam est la religion de la paix' }
  },
  {
    id: 'v-4',
    number: 4,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'إِيمَانٌ',
    phonetic: 'Īmānun',
    french: 'La foi / la croyance sincère',
    example: { arabic: 'الإِيمَانُ فِي الْقَلْبِ', phonetic: 'Al-īmānu fī l-qalbi', french: 'La foi est dans le cœur' }
  },
  {
    id: 'v-5',
    number: 5,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'إِحْسَانٌ',
    phonetic: 'Iḥsānun',
    french: 'L’excellence / la bienfaisance',
    example: { arabic: 'الإِحْسَانُ إِلَى الْوَالِدَيْنِ', phonetic: 'Al-iḥsānu ilā l-wālidayni', french: 'La bienfaisance envers les parents' }
  },
  {
    id: 'v-6',
    number: 6,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'قُرْآنٌ',
    phonetic: 'Qur’ānun',
    french: 'Le Coran (la Récitation sacrée)',
    example: { arabic: 'أَقْرَأُ الْقُرْآنَ الْكَرِيمَ', phonetic: 'Aqra’u l-Qur’āna l-Karīma', french: 'Je lis le Noble Coran' }
  },
  {
    id: 'v-7',
    number: 7,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'نَبِيٌّ',
    phonetic: 'Nabiyyun',
    french: 'Un prophète',
    example: { arabic: 'مُحَمَّدٌ نَبِيُّ الرَّحْمَةِ', phonetic: 'Muḥammadun nabiyyu r-raḥmati', french: 'Muhammad est le prophète de la miséricorde' }
  },
  {
    id: 'v-8',
    number: 8,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'رَسُولٌ',
    phonetic: 'Rasūlun',
    french: 'Un messager / envoyé',
    example: { arabic: 'مُحَمَّدٌ رَسُولُ اللَّهِ', phonetic: 'Muḥammadun rasūlu Llāhi', french: 'Muhammad est le Messager d’Allah' }
  },
  {
    id: 'v-9',
    number: 9,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'مَسْجِدٌ',
    phonetic: 'Masjidun',
    french: 'Une mosquée (lieu de prosternation)',
    example: { arabic: 'أَذْهَبُ إِلَى الْمَسْجِدِ', phonetic: 'Adhhabu ilā l-masjidi', french: 'Je vais à la mosquée' }
  },
  {
    id: 'v-10',
    number: 10,
    tier: 100,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'صَلَاةٌ',
    phonetic: 'Ṣalātun',
    french: 'La prière',
    example: { arabic: 'الصَّلَاةُ نُورٌ', phonetic: 'Aṣ-ṣalātu nūrun', french: 'La prière est une lumière' }
  },
  {
    id: 'v-11',
    number: 11,
    tier: 100,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'السَّلَامُ عَلَيْكُمْ',
    phonetic: 'As-salāmu ‘alaykum',
    french: 'Que la paix soit sur vous',
    example: { arabic: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ', phonetic: 'Wa ‘alaykumu s-salāmu wa raḥmatu Llāhi', french: 'Et sur vous la paix ainsi que la miséricorde d’Allah' }
  },
  {
    id: 'v-12',
    number: 12,
    tier: 100,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'بِسْمِ اللَّهِ',
    phonetic: 'Bismi Llāhi',
    french: 'Au nom d’Allah (avant toute action)',
    example: { arabic: 'أَبْدَأُ دَرْسِي بِسْمِ اللَّهِ', phonetic: 'Abda’u darsī bismi Llāhi', french: 'Je commence mon cours au nom d’Allah' }
  },
  {
    id: 'v-13',
    number: 13,
    tier: 100,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'الْحَمْدُ لِلَّهِ',
    phonetic: 'Al-ḥamdu lillāhi',
    french: 'Louange et gratitude à Allah',
    example: { arabic: 'أَنَا بِخَيْرٍ وَالْحَمْدُ لِلَّهِ', phonetic: 'Anā bi-khayrin wa l-ḥamdu lillāhi', french: 'Je vais bien, louange à Allah' }
  },
  {
    id: 'v-14',
    number: 14,
    tier: 100,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'سُبْحَانَ اللَّهِ',
    phonetic: 'Subḥāna Llāhi',
    french: 'Gloire et pureté à Allah',
    example: { arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', phonetic: 'Subḥāna Llāhi wa bi-ḥamdihi', french: 'Gloire à Allah et par Sa louange' }
  },
  {
    id: 'v-15',
    number: 15,
    tier: 100,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'إِنْ شَاءَ اللَّهُ',
    phonetic: 'In chā’a Llāhu',
    french: 'Si Allah le veut (pour un projet futur)',
    example: { arabic: 'نَلْتَقِي غَدًا إِنْ شَاءَ اللَّهُ', phonetic: 'Naltaqī ghadan in chā’a Llāhu', french: 'Nous nous retrouvons demain si Allah le veut' }
  },
  {
    id: 'v-16',
    number: 16,
    tier: 100,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'مَا شَاءَ اللَّهُ',
    phonetic: 'Mā chā’a Llāhu',
    french: 'Ce qu’Allah a voulu (admiration & gratitude)',
    example: { arabic: 'مَا شَاءَ اللَّهُ، قِرَاءَتُكَ جَمِيلَةٌ', phonetic: 'Mā chā’a Llāhu, qirā’atuka jamīlatun', french: 'Mā chā’a Llāh, ta lecture est belle' }
  },
  {
    id: 'v-17',
    number: 17,
    tier: 100,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'جَزَاكَ اللَّهُ خَيْرًا',
    phonetic: 'Jazāka Llāhu khayran',
    french: 'Qu’Allah te récompense par le bien',
    example: { arabic: 'شُكْرًا يَا أُسْتَاذُ، جَزَاكَ اللَّهُ خَيْرًا', phonetic: 'Chukran yā ustādhu, jazāka Llāhu khayran', french: 'Merci professeur, qu’Allah te récompense en bien' }
  },
  {
    id: 'v-18',
    number: 18,
    tier: 100,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    phonetic: 'Astaghfiru Llāha',
    french: 'Je demande pardon à Allah',
    example: { arabic: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ', phonetic: 'Astaghfiru Llāha wa atūbu ilayhi', french: 'Je demande pardon à Allah et je reviens vers Lui' }
  },
  {
    id: 'v-19',
    number: 19,
    tier: 100,
    category: 'famille_ecole',
    categoryLabel: 'Famille, Maison & Études',
    arabic: 'أَبٌ · أُمٌّ',
    phonetic: 'Abun · Ummun',
    french: 'Un père · Une mère',
    example: { arabic: 'أُحِبُّ أَبِي وَأُمِّي', phonetic: 'Uḥibbu abī wa ummī', french: 'J’aime mon père et ma mère' }
  },
  {
    id: 'v-20',
    number: 20,
    tier: 100,
    category: 'famille_ecole',
    categoryLabel: 'Famille, Maison & Études',
    arabic: 'أَخٌ · أُخْتٌ',
    phonetic: 'Akhun · Ukhtun',
    french: 'Un frère · Une sœur',
    example: { arabic: 'الْمُسْلِمُ أَخُو الْمُسْلِمِ', phonetic: 'Al-muslimu akhū l-muslimi', french: 'Le musulman est le frère du musulman' }
  },
  {
    id: 'v-21',
    number: 21,
    tier: 100,
    category: 'famille_ecole',
    categoryLabel: 'Famille, Maison & Études',
    arabic: 'بَيْتٌ',
    phonetic: 'Baytun',
    french: 'Une maison / un foyer',
    example: { arabic: 'بَيْتُنَا قَرِيبٌ مِنَ الْمَسْجِدِ', phonetic: 'Baytunā qarībun mina l-masjidi', french: 'Notre maison est proche de la mosquée' }
  },
  {
    id: 'v-22',
    number: 22,
    tier: 100,
    category: 'famille_ecole',
    categoryLabel: 'Famille, Maison & Études',
    arabic: 'كِتَابٌ · دَفْتَرٌ',
    phonetic: 'Kitābun · Daftarun',
    french: 'Un livre · Un cahier',
    example: { arabic: 'أَكْتُبُ الدَّرْسَ فِي الدَّفْتَرِ', phonetic: 'Aktubu d-darsa fī d-daftari', french: 'J’écris la leçon dans le cahier' }
  },
  {
    id: 'v-23',
    number: 23,
    tier: 100,
    category: 'famille_ecole',
    categoryLabel: 'Famille, Maison & Études',
    arabic: 'عِلْمٌ · حِكْمَةٌ',
    phonetic: '‘Ilmun · Ḥikmatun',
    french: 'Le savoir (la science) · La sagesse',
    example: { arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ', phonetic: 'Ṭalabu l-‘ilmi farīḍatun', french: 'Rechercher le savoir est un devoir' }
  },
  {
    id: 'v-24',
    number: 24,
    tier: 100,
    category: 'famille_ecole',
    categoryLabel: 'Famille, Maison & Études',
    arabic: 'مَدْرَسَةٌ · مَكْتَبَةٌ',
    phonetic: 'Madrasatun · Maktabatun',
    french: 'Une école · Une bibliothèque',
    example: { arabic: 'أُذَاكِرُ فِي الْمَكْتَبَةِ', phonetic: 'Udhākiru fī l-maktabati', french: 'Je révise à la bibliothèque' }
  },

  // =========================================================================
  // PALIER 200 : PRATIQUE SPIRITUELLE, TEMPS, NATURE & RELATIONS (101 → 200)
  // =========================================================================
  {
    id: 'v-25',
    number: 101,
    tier: 200,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'وُضُوءٌ · طَهَارَةٌ',
    phonetic: 'Wuḍū’un · Ṭahāratun',
    french: 'Les ablutions · La pureté',
    example: { arabic: 'الْوُضُوءُ مِفْتَاحُ الصَّلَاةِ', phonetic: 'Al-wuḍū’u miftāḥu ṣ-ṣalāti', french: 'Les ablutions sont la clé de la prière' }
  },
  {
    id: 'v-26',
    number: 102,
    tier: 200,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'الْفَجْرُ · الظُّهْرُ · الْعَصْرُ',
    phonetic: 'Al-Fajru · Aẓ-Ẓuhru · Al-‘Aṣru',
    french: 'Prière de l’Aube · Midi · Après-midi',
    example: { arabic: 'أُصَلِّي الْفَجْرَ فِي وَقْتِهِ', phonetic: 'Uṣallī l-Fajra fī waqtihi', french: 'Je prie le Fajr à son heure' }
  },
  {
    id: 'v-27',
    number: 103,
    tier: 200,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'الْمَغْرِبُ · الْعِشَاءُ',
    phonetic: 'Al-Maghribu · Al-‘Ichā’u',
    french: 'Prière du Coucher · Prière de la Nuit',
    example: { arabic: 'نَجْتَمِعُ بَعْدَ صَلَاةِ الْمَغْرِبِ', phonetic: 'Najtami‘u ba‘da ṣalāti l-Maghribi', french: 'Nous nous réunissons après la prière du Maghrib' }
  },
  {
    id: 'v-28',
    number: 104,
    tier: 200,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'زَكَاةٌ · صَدَقَةٌ',
    phonetic: 'Zakātun · Ṣadaqatun',
    french: 'L’aumône obligatoire · Le don de charité',
    example: { arabic: 'التَّبَسُّمُ فِي وَجْهِ أَخِيكَ صَدَقَةٌ', phonetic: 'At-tabassumu fī wajhi akhīka ṣadaqatun', french: 'Sourire à ton frère est une aumône' }
  },
  {
    id: 'v-29',
    number: 105,
    tier: 200,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'صِيَامٌ · رَمَضَانُ',
    phonetic: 'Ṣiyāmun · Ramaḍānu',
    french: 'Le jeûne · Le mois de Ramadan',
    example: { arabic: 'شَهْرُ رَمَضَانَ شَهْرُ الْقُرْآنِ', phonetic: 'Chahru Ramaḍāna chahru l-Qur’āni', french: 'Le mois de Ramadan est le mois du Coran' }
  },
  {
    id: 'v-30',
    number: 106,
    tier: 200,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'حَجٌّ · كَعْبَةٌ · قِبْلَةٌ',
    phonetic: 'Ḥajjun · Ka‘batun · Qiblatun',
    french: 'Le pèlerinage · La Kaaba · La direction de prière',
    example: { arabic: 'الْكَعْبَةُ قِبْلَةُ الْمُسْلِمِينَ', phonetic: 'Al-Ka‘batu qiblatu l-muslimīna', french: 'La Kaaba est la direction de prière des musulmans' }
  },
  {
    id: 'v-31',
    number: 107,
    tier: 200,
    category: 'nature_temps',
    categoryLabel: 'Nature, Univers & Temps',
    arabic: 'سَمَاءٌ · أَرْضٌ',
    phonetic: 'Samā’un · Arḍun',
    french: 'Le ciel · La terre',
    example: { arabic: 'خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ', phonetic: 'Khalaqa Llāhu s-samāwāti wa l-arḍa', french: 'Allah a créé les cieux et la terre' }
  },
  {
    id: 'v-32',
    number: 108,
    tier: 200,
    category: 'nature_temps',
    categoryLabel: 'Nature, Univers & Temps',
    arabic: 'شَمْسٌ · قَمَرٌ · نَجْمٌ',
    phonetic: 'Chamsun · Qamarun · Najmun',
    french: 'Le soleil · La lune · Une étoile',
    example: { arabic: 'الشَّمْسُ وَالْقَمَرُ آيَتَانِ', phonetic: 'Ach-chamsu wa l-qamaru āyatāni', french: 'Le soleil et la lune sont deux signes' }
  },
  {
    id: 'v-33',
    number: 109,
    tier: 200,
    category: 'nature_temps',
    categoryLabel: 'Nature, Univers & Temps',
    arabic: 'نُورٌ · ظَلَامٌ',
    phonetic: 'Nūrun · Ẓalāmun',
    french: 'Une lumière · L’obscurité',
    example: { arabic: 'الْعِلْمُ نُورٌ', phonetic: 'Al-‘ilmu nūrun', french: 'La connaissance est une lumière' }
  },
  {
    id: 'v-34',
    number: 110,
    tier: 200,
    category: 'nature_temps',
    categoryLabel: 'Nature, Univers & Temps',
    arabic: 'يَوْمٌ · أُسْبُوعٌ · شَهْرٌ · سَنَةٌ',
    phonetic: 'Yawmun · Usbū‘un · Chahrun · Sanatun',
    french: 'Un jour · Une semaine · Un mois · Une année',
    example: { arabic: 'يَوْمُ الْجُمُعَةِ عِيدُ الْمُسْلِمِينَ', phonetic: 'Yawmu l-jumu‘ati ‘īdu l-muslimīna', french: 'Le vendredi est un jour de fête pour les musulmans' }
  },
  {
    id: 'v-35',
    number: 111,
    tier: 200,
    category: 'nature_temps',
    categoryLabel: 'Nature, Univers & Temps',
    arabic: 'الْيَوْمَ · أَمْسِ · غَدًا',
    phonetic: 'Al-yawma · Amsi · Ghadan',
    french: 'Aujourd’hui · Hier · Demain',
    example: { arabic: 'الْيَوْمَ نَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ', phonetic: 'Al-yawma nata‘allamu l-lughata l-‘arabiyyata', french: 'Aujourd’hui nous apprenons la langue arabe' }
  },
  {
    id: 'v-36',
    number: 112,
    tier: 200,
    category: 'corps_vie',
    categoryLabel: 'Cœur, Corps & Quotidien',
    arabic: 'قَلْبٌ · عَقْلٌ · رُوحٌ',
    phonetic: 'Qalbun · ‘Aqlun · Rūḥun',
    french: 'Un cœur · La raison (l’intelligence) · L’âme',
    example: { arabic: 'قَلْبٌ سَلِيمٌ وَعَقْلٌ حَكِيمٌ', phonetic: 'Qalbun salīmun wa ‘aqlun ḥakīmun', french: 'Un cœur sain et un esprit sage' }
  },
  {
    id: 'v-37',
    number: 113,
    tier: 200,
    category: 'corps_vie',
    categoryLabel: 'Cœur, Corps & Quotidien',
    arabic: 'عَيْنٌ · أُذُنٌ · لِسَانٌ · يَدٌ',
    phonetic: '‘Aynun · Udhunun · Lisānun · Yadun',
    french: 'Un œil · Une oreille · Une langue · Une main',
    example: { arabic: 'أَحْفَظُ لِسَانِي عَنِ الْكَذِبِ', phonetic: 'Aḥfaẓu lisānī ‘ani l-kadhibi', french: 'Je préserve ma langue du mensonge' }
  },
  {
    id: 'v-38',
    number: 114,
    tier: 200,
    category: 'corps_vie',
    categoryLabel: 'Cœur, Corps & Quotidien',
    arabic: 'مَاءٌ · خُبْزٌ · تَمْرٌ · عَسَلٌ',
    phonetic: 'Mā’un · Khubzun · Tamrun · ‘Asalun',
    french: 'De l’eau · Du pain · Des dattes · Du miel',
    example: { arabic: 'أَفْطَرَ النَّبِيُّ عَلَى تَمْرٍ وَمَاءٍ', phonetic: 'Afṭara n-nabiyyu ‘alā tamrin wa mā’in', french: 'Le Prophète rompait son jeûne avec des dattes et de l’eau' }
  },

  // =========================================================================
  // PALIER 300 : VALEURS MORALES, VERBES D'ACTION & EXPRESSIONS A1 (201 → 300)
  // =========================================================================
  {
    id: 'v-39',
    number: 201,
    tier: 300,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'رَحْمَةٌ · مَغْفِرَةٌ',
    phonetic: 'Raḥmatun · Maghfiratun',
    french: 'La miséricorde · Le pardon divin',
    example: { arabic: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي', phonetic: 'Rabbi ghfir lī wa rḥamnī', french: 'Seigneur, pardonne-moi et fais-moi miséricorde' }
  },
  {
    id: 'v-40',
    number: 202,
    tier: 300,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'صَبْرٌ · شُكْرٌ · تَوَكُّلٌ',
    phonetic: 'Ṣabrun · Chukrun · Tawakkulun',
    french: 'La patience · La gratitude · La confiance en Dieu',
    example: { arabic: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', phonetic: 'Inna Llāha ma‘a ṣ-ṣābirīna', french: 'Certes, Allah est avec les patients' }
  },
  {
    id: 'v-41',
    number: 203,
    tier: 300,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'صِدْقٌ · أَمَانَةٌ · عَدْلٌ',
    phonetic: 'Ṣidqun · Amānatun · ‘Adlun',
    french: 'La véracité (franchise) · La loyauté · La justice',
    example: { arabic: 'الصِّدْقُ يَهْدِي إِلَى الْبِرِّ', phonetic: 'Aṣ-ṣidqu yahdī ilā l-birri', french: 'La sincérité mène à la bonté pieuse' }
  },
  {
    id: 'v-42',
    number: 204,
    tier: 300,
    category: 'foi_priere',
    categoryLabel: 'Religion, Foi & Mosquée',
    arabic: 'جَنَّةٌ · آخِرَةٌ · دُنْيَا',
    phonetic: 'Jannatun · Ākhiratun · Dunyā',
    french: 'Le Paradis (Jardin) · L’Au-delà · La vie d’ici-bas',
    example: { arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً', phonetic: 'Rabbanā ātinā fī d-dunyā ḥasanatan wa fī l-ākhirati ḥasanatan', french: 'Notre Seigneur, accorde-nous un bien ici-bas et un bien dans l’au-delà' }
  },
  {
    id: 'v-43',
    number: 205,
    tier: 300,
    category: 'verbes_outils',
    categoryLabel: 'Verbes, Adjectifs & Nombres',
    arabic: 'قَرَأَ (يَقْرَأُ) · كَتَبَ (يَكْتُبُ)',
    phonetic: 'Qara’a (Yaqra’u) · Kataba (Yaktubu)',
    french: 'Lire (Il lit) · Écrire (Il écrit)',
    example: { arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', phonetic: 'Iqra’ bismi Rabbika lladhī khalaqa', french: 'Lis, au nom de ton Seigneur qui a créé' }
  },
  {
    id: 'v-44',
    number: 206,
    tier: 300,
    category: 'verbes_outils',
    categoryLabel: 'Verbes, Adjectifs & Nombres',
    arabic: 'عَلِمَ (يَعْلَمُ) · فَهِمَ (يَفْهَمُ)',
    phonetic: '‘Alima (Ya‘lamu) · Fahima (Yafhamu)',
    french: 'Savoir (Il sait) · Comprendre (Il comprend)',
    example: { arabic: 'أَفْهَمُ الدَّرْسَ جَيِّدًا', phonetic: 'Afhamu d-darsa jayyidan', french: 'Je comprends bien la leçon' }
  },
  {
    id: 'v-45',
    number: 207,
    tier: 300,
    category: 'verbes_outils',
    categoryLabel: 'Verbes, Adjectifs & Nombres',
    arabic: 'ذَهَبَ (يَذْهَبُ) · رَجَعَ (يَرْجِعُ)',
    phonetic: 'Dhahaba (Yadhhabu) · Raja‘a (Yarji‘u)',
    french: 'Aller / Partir · Revenir / Retourner',
    example: { arabic: 'نَذْهَبُ إِلَى الْمَسْجِدِ يَوْمَ السَّبْتِ', phonetic: 'Nadhhabu ilā l-masjidi yawma s-sabti', french: 'Nous allons à la mosquée le samedi' }
  },
  {
    id: 'v-46',
    number: 208,
    tier: 300,
    category: 'verbes_outils',
    categoryLabel: 'Verbes, Adjectifs & Nombres',
    arabic: 'عَمِلَ (يَعْمَلُ) · سَاعَدَ (يُسَاعِدُ)',
    phonetic: '‘Amila (Ya‘malu) · Sā‘ada (Yusā‘idu)',
    french: 'Agir / Travailler · Aider / Soutenir',
    example: { arabic: 'أُسَاعِدُ جَارِي وَصَدِيقِي', phonetic: 'Usā‘idu jārī wa ṣadīqī', french: 'J’aide mon voisin et mon ami' }
  },
  {
    id: 'v-47',
    number: 209,
    tier: 300,
    category: 'verbes_outils',
    categoryLabel: 'Verbes, Adjectifs & Nombres',
    arabic: 'كَبِيرٌ · صَغِيرٌ · جَمِيلٌ · طَيِّبٌ',
    phonetic: 'Kabīrun · Ṣaghīrun · Jamīlun · Ṭayyibun',
    french: 'Grand · Petit · Beau · Bon / Pur',
    example: { arabic: 'الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ', phonetic: 'Al-kalimatu ṭ-ṭayyibatu ṣadaqatun', french: 'La bonne parole est une aumône' }
  },
  {
    id: 'v-48',
    number: 210,
    tier: 300,
    category: 'verbes_outils',
    categoryLabel: 'Verbes, Adjectifs & Nombres',
    arabic: 'وَاحِدٌ (١) · اثْنَانِ (٢) · ثَلَاثَةٌ (٣) · أَرْبَعَةٌ (٤) · خَمْسَةٌ (٥)',
    phonetic: 'Wāḥidun (1) · Ithnāni (2) · Thalāthatun (3) · Arba‘atun (4) · Khamsatun (5)',
    french: 'Un (1) · Deux (2) · Trois (3) · Quatre (4) · Cinq (5)',
    example: { arabic: 'فِي الْيَوْمِ خَمْسُ صَلَوَاتٍ', phonetic: 'Fī l-yawmi khamsu ṣalawātin', french: 'Dans la journée, il y a cinq prières' }
  },
  {
    id: 'v-49',
    number: 211,
    tier: 300,
    category: 'verbes_outils',
    categoryLabel: 'Verbes, Adjectifs & Nombres',
    arabic: 'سِتَّةٌ (٦) · سَبْعَةٌ (٧) · ثَمَانِيَةٌ (٨) · تِسْعَةٌ (٩) · عَشَرَةٌ (١٠)',
    phonetic: 'Sittatun (6) · Sab‘atun (7) · Thamāniyatun (8) · Tis‘atun (9) · ‘Acharatun (10)',
    french: 'Six (6) · Sept (7) · Huit (8) · Neuf (9) · Dix (10)',
    example: { arabic: 'الْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا', phonetic: 'Al-ḥasanatu bi-‘achri amthālihā', french: 'La bonne action est multipliée par dix' }
  },
  {
    id: 'v-50',
    number: 212,
    tier: 300,
    category: 'invocations_salutations',
    categoryLabel: 'Salutations & Invocations',
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    phonetic: 'Rabbi zidnī ‘ilman',
    french: 'Seigneur, augmente ma connaissance (Coran 20:114)',
    example: { arabic: 'أَقُولُ قَبْلَ الدِّرَاسَةِ : رَبِّ زِدْنِي عِلْمًا', phonetic: 'Aqūlu qabla d-dirāsati : Rabbi zidnī ‘ilman', french: 'Je dis avant d’étudier : Seigneur, augmente ma science' }
  }
];

export const VOCABULARY_QUIZ: QuizQuestion[] = [
  {
    id: 'voc-q1',
    question: 'Que signifie l’expression quotidienne الْحَمْدُ لِلَّهِ (Al-ḥamdu lillāhi) ?',
    arabicPrompt: { arabic: 'الْحَمْدُ لِلَّهِ', phonetic: 'Al-ḥamdu lillāhi', french: 'Louange et gratitude à Allah' },
    options: [
      'Louange et gratitude à Allah',
      'Au nom d’Allah',
      'Si Allah le veut',
      'Je demande pardon à Allah'
    ],
    correctIndex: 0,
    explanation: 'الْحَمْدُ لِلَّهِ (Al-ḥamdu lillāhi) exprime la louange et la reconnaissance envers Allah en toute circonstance.'
  },
  {
    id: 'voc-q2',
    question: 'Comment dit-on « La science / le savoir » et « Le cœur » en arabe ?',
    arabicPrompt: { arabic: 'عِلْمٌ · قَلْبٌ', phonetic: '‘Ilmun · Qalbun', french: 'Le savoir · Un cœur' },
    options: [
      'عِلْمٌ (‘Ilmun = Le savoir) et قَلْبٌ (Qalbun = Un cœur)',
      'كِتَابٌ (Kitābun) et بَابٌ (Bābun)',
      'شَمْسٌ (Chamsun) et قَمَرٌ (Qamarun)',
      'مَاءٌ (Mā’un) et خُبْزٌ (Khubzun)'
    ],
    correctIndex: 0,
    explanation: 'عِلْمٌ (‘Ilmun) désigne la science/connaissance, et قَلْبٌ (Qalbun) désigne le cœur.'
  },
  {
    id: 'voc-q3',
    question: 'Que signifie l’invocation coranique des étudiants : رَبِّ زِدْنِي عِلْمًا (Rabbi zidnī ‘ilman) ?',
    arabicPrompt: { arabic: 'رَبِّ زِدْنِي عِلْمًا', phonetic: 'Rabbi zidnī ‘ilman', french: 'Seigneur, augmente ma connaissance' },
    options: [
      'Seigneur, augmente ma connaissance / mon savoir',
      'Seigneur, accorde-nous la pluie',
      'Bienvenue dans notre école',
      'Je vais à la mosquée avec mon frère'
    ],
    correctIndex: 0,
    explanation: 'رَبِّ (Rabbi = Mon Seigneur) + زِدْنِي (zidnī = augmente-moi) + عِلْمًا (‘ilman = en savoir/science).'
  },
  {
    id: 'voc-q4',
    question: 'Dans le hadith « الْوُضُوءُ مِفْتَاحُ الصَّلَاةِ (Al-wuḍū’u miftāḥu ṣ-ṣalāti) », que signifient وُضُوءٌ et صَلَاةٌ ?',
    arabicPrompt: { arabic: 'الْوُضُوءُ وَالصَّلَاةُ', phonetic: 'Al-Wuḍū’u wa ṣ-Ṣalātu', french: 'Les ablutions et la prière' },
    options: [
      'Les ablutions (Al-Wuḍū’) et la prière (Aṣ-Ṣalāt)',
      'Le jeûne et l’aumône',
      'Le matin et le soir',
      'Le livre et le cahier'
    ],
    correctIndex: 0,
    explanation: 'وُضُوءٌ (Wuḍū’un) désigne les ablutions et صَلَاةٌ (Ṣalātun) désigne la prière.'
  },
  {
    id: 'voc-q5',
    question: 'Que veulent dire les mots صَبْرٌ (Ṣabrun) et صِدْقٌ (Ṣidqun) ?',
    arabicPrompt: { arabic: 'صَبْرٌ · صِدْقٌ', phonetic: 'Ṣabrun · Ṣidqun', french: 'La patience · La véracité / sincérité' },
    options: [
      'La patience / endurance (Ṣabrun) et la sincérité / franchise (Ṣidqun)',
      'Le soleil et la lune',
      'Le père et la mère',
      'Hier et demain'
    ],
    correctIndex: 0,
    explanation: 'صَبْرٌ (Ṣabrun) est la patience persévérante, et صِدْقٌ (Ṣidqun) est la sincérité / véracité.'
  },
  {
    id: 'voc-q6',
    question: 'Comment remercie-t-on chaleureusement quelqu’un en lui souhaitant la récompense divine ?',
    arabicPrompt: { arabic: 'جَزَاكَ اللَّهُ خَيْرًا', phonetic: 'Jazāka Llāhu khayran', french: 'Qu’Allah te récompense par le bien' },
    options: [
      'جَزَاكَ اللَّهُ خَيْرًا (Jazāka Llāhu khayran)',
      'غَدًا إِنْ شَاءَ اللَّهُ (Ghadan in chā’a Llāhu)',
      'مَا هَذَا ؟ (Mā hādhā ?)',
      'أَنَا طَالِبٌ (Anā ṭālibun)'
    ],
    correctIndex: 0,
    explanation: 'جَزَاكَ اللَّهُ خَيْرًا (Jazāka Llāhu khayran) signifie « Qu’Allah te récompense par un bien ».'
  }
];
