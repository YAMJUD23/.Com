import { ArabicTriad, QuizQuestion } from './alphabetData';

export interface CategorizedWordEntry {
  num: number;
  arabic: string;
  phonetic: string;
  french: string;
  usageNote?: string;
}

export interface VocabSubcategory {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  pageNumber: 1 | 2;
  concreteSentence: ArabicTriad;
  words: CategorizedWordEntry[];
}

export const VOCAB_200_SUBCATEGORIES: VocabSubcategory[] = [
  // ============================================================================
  // PAGE 1 (MOTS 001 À 100) : QUOTIDIEN, CONVERSATION, MOTS-OUTILS, FAMILLE, MAISON
  // ============================================================================
  {
    id: 'cat-salutations',
    code: 'CATÉGORIE 1',
    title: 'Expressions Essentielles, Salutations & Politesse (20 mots)',
    subtitle: 'Les premiers mots indispensables pour saluer, remercier, répondre et engager une conversation.',
    pageNumber: 1,
    concreteSentence: {
      arabic: 'مَرْحَبًا ! كَيْفَ حَالُكَ الْيَوْمَ ؟ — أَنَا بِخَيْرٍ، شُكْرًا جَزِيلًا.',
      phonetic: 'Marḥaban ! Kayfa ḥāluka l-yawma ? — Anā bi-khayrin, chukran jazīlan.',
      french: 'Bonjour / Bienvenue ! Comment vas-tu aujourd’hui ? — Je vais bien, merci beaucoup.'
    },
    words: [
      { num: 1, arabic: 'مَرْحَبًا / أَهْلًا', phonetic: 'Marḥaban / Ahlan', french: 'Bonjour / Bienvenue' },
      { num: 2, arabic: 'صَبَاحُ الْخَيْرِ', phonetic: 'Ṣabāḥu l-khayr', french: 'Bonjour (le matin)' },
      { num: 3, arabic: 'مَسَاءُ الْخَيْرِ', phonetic: 'Masā’u l-khayr', french: 'Bonsoir' },
      { num: 4, arabic: 'تُصْبِحُ عَلَى خَيْرٍ', phonetic: 'Tuṣbiḥu ‘alā khayr', french: 'Bonne nuit' },
      { num: 5, arabic: 'مَعَ السَّلَامَةِ', phonetic: 'Ma‘a s-salāma', french: 'Au revoir' },
      { num: 6, arabic: 'إِلَى اللِّقَاءِ', phonetic: 'Ilā l-liqā’', french: 'À bientôt / Au revoir' },
      { num: 7, arabic: 'نَعَمْ', phonetic: 'Na‘am', french: 'Oui' },
      { num: 8, arabic: 'لَا', phonetic: 'Lā', french: 'Non' },
      { num: 9, arabic: 'مِنْ فَضْلِكَ', phonetic: 'Min faḍlika (m) / -ki (f)', french: 'S’il te plaît / S’il vous plaît' },
      { num: 10, arabic: 'شُكْرًا', phonetic: 'Chukran', french: 'Merci' },
      { num: 11, arabic: 'عَفْوًا', phonetic: '‘Afwan', french: 'De rien / Pardon (excuse-moi)' },
      { num: 12, arabic: 'آسِفٌ / آسِفَةٌ', phonetic: 'Āsifun (m) / Āsifatun (f)', french: 'Désolé(e)' },
      { num: 13, arabic: 'حَسَنًا / طَيِّب', phonetic: 'Ḥasanan / Ṭayyib', french: 'D’accord / Très bien' },
      { num: 14, arabic: 'طَبْعًا / بِالطَّبْعِ', phonetic: 'Ṭab‘an / Bi-ṭ-ṭab‘', french: 'Bien sûr / Évidemment' },
      { num: 15, arabic: 'رُبَّمَا / مُمْكِن', phonetic: 'Rubbamā / Mumkin', french: 'Peut-être / C’est possible' },
      { num: 16, arabic: 'كَيْفَ حَالُكَ ؟', phonetic: 'Kayfa ḥāluka ?', french: 'Comment vas-tu ?' },
      { num: 17, arabic: 'بِخَيْرٍ', phonetic: 'Bi-khayrin', french: 'Bien (je vais bien)' },
      { num: 18, arabic: 'تَفَضَّلْ', phonetic: 'Tafaḍḍal', french: 'Je t’en prie (entre / sers-toi)' },
      { num: 19, arabic: 'مَبْرُوكٌ', phonetic: 'Mabrūkun', french: 'Félicitations !' },
      { num: 20, arabic: 'بِالتَّوْفِيقِ', phonetic: 'Bi-t-tawfīq', french: 'Bon courage / Bonne réussite' }
    ]
  },
  {
    id: 'cat-outils',
    code: 'CATÉGORIE 2',
    title: 'Pronoms, Questions, Prépositions & Mots-Outils (30 mots)',
    subtitle: 'Les mots de liaison qui reviennent dans 90 % des phrases arabes pour situer, relier et poser une question.',
    pageNumber: 1,
    concreteSentence: {
      arabic: 'أَيْنَ الْمِفْتَاحُ ؟ — الْمِفْتَاحُ هُنَا عَلَى الطَّاوِلَةِ مَعَ الْهَاتِفِ.',
      phonetic: 'Ayna l-miftāḥu ? — Al-miftāḥu hunā ‘alā ṭ-ṭāwilati ma‘a l-hātifi.',
      french: 'Où est la clé ? — La clé est ici sur la table avec le téléphone.'
    },
    words: [
      { num: 21, arabic: 'أَنَا', phonetic: 'Anā', french: 'Je / Moi' },
      { num: 22, arabic: 'أَنْتَ / أَنْتِ', phonetic: 'Anta (m.) / Anti (f.)', french: 'Tu / Toi (homme / femme)' },
      { num: 23, arabic: 'هُوَ / هِيَ', phonetic: 'Huwa / Hiya', french: 'Il / Elle' },
      { num: 24, arabic: 'نَحْنُ', phonetic: 'Naḥnu', french: 'Nous' },
      { num: 25, arabic: 'أَنْتُمْ / هُمْ', phonetic: 'Antum / Hum', french: 'Vous / Ils (Eux)' },
      { num: 26, arabic: 'هَذَا / هَذِهِ', phonetic: 'Hādhā (m.) / Hādhihi (f.)', french: 'Ce, ceci / Cette, celle-ci' },
      { num: 27, arabic: 'ذَلِكَ / تِلْكَ', phonetic: 'Dhālika (m.) / Tilka (f.)', french: 'Cela, ce...là / Cette...là' },
      { num: 28, arabic: 'مَنْ ؟', phonetic: 'Man ?', french: 'Qui ? (Qui est-ce ?)' },
      { num: 29, arabic: 'مَا / مَاذَا ؟', phonetic: 'Mā / Mādhā ?', french: 'Quoi ? / Qu’est-ce que ?' },
      { num: 30, arabic: 'أَيْنَ ؟', phonetic: 'Ayna ?', french: 'Où ?' },
      { num: 31, arabic: 'مَتَى ؟', phonetic: 'Matā ?', french: 'Quand ?' },
      { num: 32, arabic: 'كَيْفَ ؟', phonetic: 'Kayfa ?', french: 'Comment ?' },
      { num: 33, arabic: 'لِمَاذَا ؟ / لِأَنَّ', phonetic: 'Limādhā ? / Li’anna', french: 'Pourquoi ? / Parce que' },
      { num: 34, arabic: 'كَمْ ؟', phonetic: 'Kam ?', french: 'Combien ?' },
      { num: 35, arabic: 'هَلْ ؟', phonetic: 'Hal ?', french: 'Est-ce que ? (question Oui/Non)' },
      { num: 36, arabic: 'فِي', phonetic: 'Fī', french: 'Dans / En' },
      { num: 37, arabic: 'عَلَى / تَحْتَ', phonetic: '‘Alā / Taḥta', french: 'Sur / Sous' },
      { num: 38, arabic: 'مِنْ / إِلَى', phonetic: 'Min / Ilā', french: 'De (provenance) / Vers, à' },
      { num: 39, arabic: 'مَعَ / بِدُونِ', phonetic: 'Ma‘a / Bi-dūni', french: 'Avec / Sans' },
      { num: 40, arabic: 'أَمَامَ / وَرَاءَ', phonetic: 'Amāma / Warā’a', french: 'Devant / Derrière' },
      { num: 41, arabic: 'قَبْلَ / بَعْدَ', phonetic: 'Qabla / Ba‘da', french: 'Avant / Après' },
      { num: 42, arabic: 'هُنَا / هُنَاكَ', phonetic: 'Hunā / Hunāka', french: 'Ici / Là-bas (ou « Il y a »)' },
      { num: 43, arabic: 'عِنْدِي / عِنْدَكَ', phonetic: '‘Indī / ‘Indaka', french: 'J’ai (chez moi) / Tu as' },
      { num: 44, arabic: 'وَ / أَوْ', phonetic: 'Wa / Aw', french: 'Et / Ou' },
      { num: 45, arabic: 'لَكِنْ', phonetic: 'Lākin', french: 'Mais' },
      { num: 46, arabic: 'كُلُّ / بَعْضُ', phonetic: 'Kullu / Ba‘ḍu', french: 'Tout, chaque / Certains, quelques' },
      { num: 47, arabic: 'جِدًّا / قَلِيلًا', phonetic: 'Jiddan / Qalīlan', french: 'Très (beaucoup) / Un peu' },
      { num: 48, arabic: 'أَيْضًا / فَقَطْ', phonetic: 'Ayḍan / Faqaṭ', french: 'Aussi / Seulement' },
      { num: 49, arabic: 'دَائِمًا / أَبَدًا', phonetic: 'Dā’iman / Abadan', french: 'Toujours / Jamais' },
      { num: 50, arabic: 'الَّذِي / الَّتِي', phonetic: 'Alladhī (m.) / Allatī (f.)', french: 'Qui / Que (pronom relatif)' }
    ]
  },
  {
    id: 'cat-famille',
    code: 'CATÉGORIE 3',
    title: 'Famille, Personnes & Vie Sociale (22 mots)',
    subtitle: 'Les membres de la famille, les personnes de l’entourage et les métiers courants.',
    pageNumber: 1,
    concreteSentence: {
      arabic: 'أَبِي يَعْمَلُ فِي الْمَدِينَةِ وَأُخْتِي تَدْرُسُ فِي الْجَامِعَةِ.',
      phonetic: 'Abī ya‘malu fī l-madīnati wa ukhtī tadrusu fī l-jāmi‘ati.',
      french: 'Mon père travaille en ville et ma sœur étudie à l’université.'
    },
    words: [
      { num: 51, arabic: 'عَائِلَةٌ / أُسْرَةٌ', phonetic: '‘Ā’ilatun / Usratun', french: 'Une famille' },
      { num: 52, arabic: 'أَبٌ / وَالِدٌ', phonetic: 'Abun / Wālidun', french: 'Un père' },
      { num: 53, arabic: 'أُمٌّ / وَالِدَةٌ', phonetic: 'Ummun / Wālidatun', french: 'Une mère' },
      { num: 54, arabic: 'أَخٌ (إِخْوَةٌ)', phonetic: 'Akhun (pl. Ikhwatun)', french: 'Un frère (des frères)' },
      { num: 55, arabic: 'أُخْتٌ (أَخَوَاتٌ)', phonetic: 'Ukhtun (pl. Akhawātun)', french: 'Une sœur (des sœurs)' },
      { num: 56, arabic: 'ابْنٌ / وَلَدٌ', phonetic: 'Ibnun / Waladun', french: 'Un fils / Un garçon' },
      { num: 57, arabic: 'بِنْتٌ / ابْنَةٌ', phonetic: 'Bintun / Ibnatun', french: 'Une fille' },
      { num: 58, arabic: 'جَدٌّ / جَدَّةٌ', phonetic: 'Jaddun / Jaddatun', french: 'Grand-père / Grand-mère' },
      { num: 59, arabic: 'زَوْجٌ / زَوْجَةٌ', phonetic: 'Zawjun / Zawjatun', french: 'Mari (époux) / Femme (épouse)' },
      { num: 60, arabic: 'عَمٌّ / خَالٌ', phonetic: '‘Ammun / Khālun', french: 'Oncle paternel / Oncle maternel' },
      { num: 61, arabic: 'رَجُلٌ (رِجَالٌ)', phonetic: 'Rajulun (pl. Rijālun)', french: 'Un homme (des hommes)' },
      { num: 62, arabic: 'امْرَأَةٌ (نِسَاءٌ)', phonetic: 'Imra’atun (pl. Nisā’un)', french: 'Une femme (des femmes)' },
      { num: 63, arabic: 'طِفْلٌ (أَطْفَالٌ)', phonetic: 'Ṭiflun (pl. Aṭfālun)', french: 'Un enfant (des enfants)' },
      { num: 64, arabic: 'نَاسٌ / شَخْصٌ', phonetic: 'Nāsun / Chakhṣun', french: 'Les gens / Une personne' },
      { num: 65, arabic: 'صَدِيقٌ / صَدِيقَةٌ', phonetic: 'Ṣadīqun / Ṣadīqatun', french: 'Un ami / Une amie' },
      { num: 66, arabic: 'جَارٌ (جِيرَانٌ)', phonetic: 'Jārun (pl. Jīrānun)', french: 'Un voisin (des voisins)' },
      { num: 67, arabic: 'ضَيْفٌ (ضُيُوفٌ)', phonetic: 'Ḍayfun (pl. Ḍuyūfun)', french: 'Un invité / hôte' },
      { num: 68, arabic: 'مُعَلِّمٌ / أُسْتَاذٌ', phonetic: 'Mu‘allimun / Ustādhun', french: 'Un enseignant / professeur' },
      { num: 69, arabic: 'طَالِبٌ / تِلْمِيذٌ', phonetic: 'Ṭālibun / Tilmīdhun', french: 'Un étudiant / Un élève' },
      { num: 70, arabic: 'طَبِيبٌ / مَرِيضٌ', phonetic: 'Ṭabībun / Marīḍun', french: 'Un médecin / Un malade' },
      { num: 71, arabic: 'عَامِلٌ / مُوَظَّفٌ', phonetic: '‘Āmilun / Muwaẓẓafun', french: 'Un travailleur / Un employé' },
      { num: 72, arabic: 'اسْمٌ / عُمْرٌ', phonetic: 'Ismun / ‘Umrun', french: 'Un nom (prénom) / L’âge' }
    ]
  },
  {
    id: 'cat-maison-ville',
    code: 'CATÉGORIE 4',
    title: 'Maison, Objets du Quotidien, École & Ville (28 mots)',
    subtitle: 'Tous les lieux et objets concrets que l’on utilise chaque jour à la maison, en classe ou dehors.',
    pageNumber: 1,
    concreteSentence: {
      arabic: 'فَتَحْتُ بَابَ الْغُرْفَةِ وَوَضَعْتُ الْكِتَابَ وَالدَّفْتَرَ فِي الْحَقِيبَةِ.',
      phonetic: 'Fataḥtu bāba l-ghurfati wa waḍa‘tu l-kitāba wa d-daftara fī l-ḥaqībati.',
      french: 'J’ai ouvert la porte de la chambre et j’ai mis le livre et le cahier dans le sac.'
    },
    words: [
      { num: 73, arabic: 'بَيْتٌ / مَنْزِلٌ', phonetic: 'Baytun / Manzilun', french: 'Une maison / Un domicile' },
      { num: 74, arabic: 'شَقَّةٌ / غُرْفَةٌ', phonetic: 'Chaqqatun / Ghurfatun', french: 'Un appartement / Une chambre' },
      { num: 75, arabic: 'بَابٌ / نَافِذَةٌ', phonetic: 'Bābun / Nāfidhatun', french: 'Une porte / Une fenêtre' },
      { num: 76, arabic: 'مَطْبَخٌ / حَمَّامٌ', phonetic: 'Maṭbakhun / Ḥammāmun', french: 'Une cuisine / Une salle de bain' },
      { num: 77, arabic: 'طَاوِلَةٌ / كُرْسِيٌّ', phonetic: 'Ṭāwilatun / Kursiyyun', french: 'Une table / Une chaise' },
      { num: 78, arabic: 'سَرِيرٌ / خِزَانَةٌ', phonetic: 'Sarīrun / Khizānatun', french: 'Un lit / Une armoire' },
      { num: 79, arabic: 'مِفْتَاحٌ', phonetic: 'Miftāḥun', french: 'Une clé' },
      { num: 80, arabic: 'هَاتِفٌ / حَاسُوبٌ', phonetic: 'Hātifun / Ḥāsūbun', french: 'Un téléphone / Un ordinateur' },
      { num: 81, arabic: 'سَاعَةٌ / نَظَّارَةٌ', phonetic: 'Sā‘atun / Naẓẓāratun', french: 'Une montre (ou heure) / Des lunettes' },
      { num: 82, arabic: 'مَلَابِسُ / قَمِيصٌ', phonetic: 'Malābisu / Qamīṣun', french: 'Des vêtements / Une chemise' },
      { num: 83, arabic: 'حِذَاءٌ / حَقِيبَةٌ', phonetic: 'Ḥidhā’un / Ḥaqībatun', french: 'Des chaussures / Un sac (valise)' },
      { num: 84, arabic: 'كِتَابٌ / دَفْتَرٌ', phonetic: 'Kitābun / Daftarun', french: 'Un livre / Un cahier' },
      { num: 85, arabic: 'قَلَمٌ / وَرَقَةٌ', phonetic: 'Qalamun / Waraqatun', french: 'Un stylo / Une feuille de papier' },
      { num: 86, arabic: 'كَلِمَةٌ / جُمْلَةٌ', phonetic: 'Kalimatun / Jumlatun', french: 'Un mot / Une phrase' },
      { num: 87, arabic: 'سُؤَالٌ / جَوَابٌ', phonetic: 'Su’ālun / Jawābun', french: 'Une question / Une réponse' },
      { num: 88, arabic: 'لُغَةٌ / دَرْسٌ', phonetic: 'Lughatun / Darsun', french: 'Une langue / Une leçon (un cours)' },
      { num: 89, arabic: 'مَدْرَسَةٌ / جَامِعَةٌ', phonetic: 'Madrasatun / Jāmi‘atun', french: 'Une école / Une université' },
      { num: 90, arabic: 'مَدِينَةٌ / قَرْيَةٌ', phonetic: 'Madīnatun / Qaryatun', french: 'Une ville / Un village' },
      { num: 91, arabic: 'شَارِعٌ / طَرِيقٌ', phonetic: 'Chāri‘un / Ṭarīqun', french: 'Une rue / Une route (chemin)' },
      { num: 92, arabic: 'سُوقٌ / دُكَّانٌ', phonetic: 'Sūqun / Dukkānun', french: 'Un marché / Un magasin (boutique)' },
      { num: 93, arabic: 'مَطْعَمٌ / فُنْدُقٌ', phonetic: 'Maṭ‘amun / Funduqun', french: 'Un restaurant / Un hôtel' },
      { num: 94, arabic: 'مُسْتَشْفَى / صَيْدَلِيَّةٌ', phonetic: 'Mustachfā / Ṣaydaliyyatun', french: 'Un hôpital / Une pharmacie' },
      { num: 95, arabic: 'مَحَطَّةٌ / مَطَارٌ', phonetic: 'Maḥaṭṭatun / Maṭārun', french: 'Une gare (station) / Un aéroport' },
      { num: 96, arabic: 'سَيَّارَةٌ / حَافِلَةٌ', phonetic: 'Sayyāratun / Ḥāfilatun', french: 'Une voiture / Un bus' },
      { num: 97, arabic: 'قِطَارٌ / طَائِرَةٌ', phonetic: 'Qiṭārun / Ṭā’iratun', french: 'Un train / Un avion' },
      { num: 98, arabic: 'عَمَلٌ / شَرِكَةٌ', phonetic: '‘Amalun / Charikatun', french: 'Un travail / Une entreprise' },
      { num: 99, arabic: 'مَالٌ / نُقُودٌ', phonetic: 'Mālun / Nuqūdun', french: 'De l’argent / De la monnaie' },
      { num: 100, arabic: 'بَلَدٌ / عَالَمٌ', phonetic: 'Baladun / ‘Ālamun', french: 'Un pays / Le monde' }
    ]
  },

  // ============================================================================
  // PAGE 2 (MOTS 101 À 200) : NOURRITURE, CORPS, TEMPS, ADJECTIFS, VERBES & RELIGION (22 MOTS)
  // ============================================================================
  {
    id: 'cat-nourriture-corps',
    code: 'CATÉGORIE 5',
    title: 'Nourriture, Boissons, Repas & Corps Humain (20 mots)',
    subtitle: 'Commander un repas, faire les courses et désigner les parties principales du corps.',
    pageNumber: 2,
    concreteSentence: {
      arabic: 'أُرِيدُ كَأْسَ مَاءٍ بَارِدٍ وَفِنْجَانَ قَهْوَةٍ بِدُونِ سُكَّرٍ مِنْ فَضْلِكَ.',
      phonetic: 'Urīdu ka’sa mā’in bāridin wa finjāna qahwatin bi-dūni sukkarin min faḍlika.',
      french: 'Je voudrais un verre d’eau fraîche et une tasse de café sans sucre s’il te plaît.'
    },
    words: [
      { num: 101, arabic: 'مَاءٌ', phonetic: 'Mā’un', french: 'De l’eau' },
      { num: 102, arabic: 'خُبْزٌ', phonetic: 'Khubzun', french: 'Du pain' },
      { num: 103, arabic: 'حَلِيبٌ / جُبْنٌ', phonetic: 'Ḥalībun / Jubnun', french: 'Du lait / Du fromage' },
      { num: 104, arabic: 'لَحْمٌ / دَجَاجٌ', phonetic: 'Laḥmun / Dajājun', french: 'De la viande / Du poulet' },
      { num: 105, arabic: 'سَمَكٌ / بَيْضٌ', phonetic: 'Samakun / Bayḍun', french: 'Du poisson / Des œufs' },
      { num: 106, arabic: 'أَرُزٌّ / خُضَرٌ', phonetic: 'Aruzzun / Khuḍarun', french: 'Du riz / Des légumes' },
      { num: 107, arabic: 'فَاكِهَةٌ / تُفَّاحٌ', phonetic: 'Fākihatun / Tuffāḥun', french: 'Un fruit / Des pommes' },
      { num: 108, arabic: 'شَايٌ / قَهْوَةٌ', phonetic: 'Chāyun / Qahwatun', french: 'Du thé / Du café' },
      { num: 109, arabic: 'سُكَّرٌ / مِلْحٌ', phonetic: 'Sukkarun / Milḥun', french: 'Du sucre / Du sel' },
      { num: 110, arabic: 'زَيْتٌ / عَسَلٌ', phonetic: 'Zaytun / ‘Asalun', french: 'De l’huile / Du miel' },
      { num: 111, arabic: 'فَطُورٌ / غَدَاءٌ / عَشَاءٌ', phonetic: 'Faṭūrun / Ghadā’un / ‘Achā’un', french: 'Petit-déjeuner / Déjeuner / Dîner' },
      { num: 112, arabic: 'كَأْسٌ / صَحْنٌ', phonetic: 'Ka’sun / Ṣaḥnun', french: 'Un verre / Une assiette' },
      { num: 113, arabic: 'رَأْسٌ / وَجْهٌ', phonetic: 'Ra’sun / Wajhun', french: 'Une tête / Un visage' },
      { num: 114, arabic: 'عَيْنٌ / أُذُنٌ', phonetic: '‘Aynun / Udhunun', french: 'Un œil / Une oreille' },
      { num: 115, arabic: 'فَمٌ / أَنْفٌ', phonetic: 'Famun / Anfun', french: 'Une bouche / Un nez' },
      { num: 116, arabic: 'يَدٌ / رِجْلٌ', phonetic: 'Yadun / Rijlun', french: 'Une main (bras) / Un pied (jambe)' },
      { num: 117, arabic: 'قَلْبٌ / بَطْنٌ', phonetic: 'Qalbun / Baṭnun', french: 'Un cœur / Un ventre' },
      { num: 118, arabic: 'ظَهْرٌ / صَدْرٌ', phonetic: 'Ẓahrun / Ṣadrun', french: 'Un dos / Une poitrine' },
      { num: 119, arabic: 'صَوْتٌ / لِسَانٌ', phonetic: 'Ṣawtun / Lisānun', french: 'Une voix (un son) / Une langue' },
      { num: 120, arabic: 'صِحَّةٌ / حَيَاةٌ', phonetic: 'Ṣiḥḥatun / Ḥayātun', french: 'La santé / La vie' }
    ]
  },
  {
    id: 'cat-temps-nombres',
    code: 'CATÉGORIE 6',
    title: 'Temps, Jours, Nature, Couleurs & Chiffres (20 mots)',
    subtitle: 'Se repérer dans le temps, compter, donner l’heure et décrire la météo.',
    pageNumber: 2,
    concreteSentence: {
      arabic: 'سَأُسَافِرُ غَدًا فِي الصَّبَاحِ عَلَى السَّاعَةِ الثَّامِنَةِ.',
      phonetic: 'Sa-usāfiru ghadan fī ṣ-ṣabāḥi ‘alā s-sā‘ati th-thāminati.',
      french: 'Je voyagerai demain matin à huit heures.'
    },
    words: [
      { num: 121, arabic: 'الْيَوْمَ / الْآنَ', phonetic: 'Al-yawma / Al-āna', french: 'Aujourd’hui / Maintenant' },
      { num: 122, arabic: 'أَمْسِ / غَدًا', phonetic: 'Amsi / Ghadan', french: 'Hier / Demain' },
      { num: 123, arabic: 'صَبَاحٌ / مَسَاءٌ', phonetic: 'Ṣabāḥun / Masā’un', french: 'Matin / Soir' },
      { num: 124, arabic: 'نَهَارٌ / لَيْلٌ', phonetic: 'Nahārun / Laylun', french: 'Jour (journée) / Nuit' },
      { num: 125, arabic: 'أُسْبُوعٌ / شَهْرٌ / سَنَةٌ', phonetic: 'Usbū‘un / Chahrun / Sanatun', french: 'Semaine / Mois / Année' },
      { num: 126, arabic: 'وَقْتٌ / دَقِيقَةٌ', phonetic: 'Waqtun / Daqīqatun', french: 'Le temps (moment) / Une minute' },
      { num: 127, arabic: 'شَمْسٌ / قَمَرٌ', phonetic: 'Chamsun / Qamarun', french: 'Le soleil / La lune' },
      { num: 128, arabic: 'سَمَاءٌ / أَرْضٌ', phonetic: 'Samā’un / Arḍun', french: 'Le ciel / La terre' },
      { num: 129, arabic: 'مَطَرٌ / هَوَاءٌ', phonetic: 'Maṭarun / Hawā’un', french: 'La pluie / L’air (le vent)' },
      { num: 130, arabic: 'بَحْرٌ / جَبَلٌ / شَجَرَةٌ', phonetic: 'Baḥrun / Jabalun / Chajaratun', french: 'La mer / La montagne / Un arbre' },
      { num: 131, arabic: 'صَيْفٌ / شِتَاءٌ', phonetic: 'Ṣayfun / Chitā’un', french: 'L’été / L’hiver' },
      { num: 132, arabic: 'أَبْيَضُ / أَسْوَدُ', phonetic: 'Abyaḍu / Aswadu', french: 'Blanc / Noir' },
      { num: 133, arabic: 'أَحْمَرُ / أَزْرَقُ / أَخْضَرُ', phonetic: 'Aḥmaru / Azraqu / Akhḍaru', french: 'Rouge / Bleu / Vert' },
      { num: 134, arabic: 'وَاحِدٌ (١) / اثْنَانِ (٢)', phonetic: 'Wāḥidun (1) / Ithnāni (2)', french: 'Un (1) / Deux (2)' },
      { num: 135, arabic: 'ثَلَاثَةٌ (٣) / أَرْبَعَةٌ (٤)', phonetic: 'Thalāthatun (3) / Arba‘atun (4)', french: 'Trois (3) / Quatre (4)' },
      { num: 136, arabic: 'خَمْسَةٌ (٥) / سِتَّةٌ (٦)', phonetic: 'Khamsatun (5) / Sittatun (6)', french: 'Cinq (5) / Six (6)' },
      { num: 137, arabic: 'سَبْعَةٌ (٧) / ثَمَانِيَةٌ (٨)', phonetic: 'Sab‘atun (7) / Thamāniyatun (8)', french: 'Sept (7) / Huit (8)' },
      { num: 138, arabic: 'تِسْعَةٌ (٩) / عَشَرَةٌ (١٠)', phonetic: 'Tis‘atun (9) / ‘Acharatun (10)', french: 'Neuf (9) / Dix (10)' },
      { num: 139, arabic: 'عِشْرُونَ (٢٠) / خَمْسُونَ (٥٠)', phonetic: '‘Ichrūna (20) / Khamsūna (50)', french: 'Vingt (20) / Cinquante (50)' },
      { num: 140, arabic: 'مِائَةٌ (١٠٠) / أَلْفٌ (١٠٠٠)', phonetic: 'Mi’atun (100) / Alfun (1000)', french: 'Cent (100) / Mille (1000)' }
    ]
  },
  {
    id: 'cat-adjectifs',
    code: 'CATÉGORIE 7',
    title: 'Les 14 Paires d’Adjectifs Contraires Indispensables (14 entrées = 28 adjectifs)',
    subtitle: 'Astuce mémoire : apprendre chaque adjectif avec son contraire direct permet de retenir 2 fois plus vite.',
    pageNumber: 2,
    concreteSentence: {
      arabic: 'هَذَا الدَّرْسُ سَهْلٌ وَمُفِيدٌ، وَلَيْسَ صَعْبًا.',
      phonetic: 'Hādhā d-darsu sahlun wa mufīdun, wa laysa ṣa‘ban.',
      french: 'Cette leçon est facile et utile, et elle n’est pas difficile.'
    },
    words: [
      { num: 141, arabic: 'كَبِيرٌ ≠ صَغِيرٌ', phonetic: 'Kabīrun ≠ Ṣaghīrun', french: 'Grand ≠ Petit' },
      { num: 142, arabic: 'جَدِيدٌ ≠ قَدِيمٌ', phonetic: 'Jadīdun ≠ Qadīmun', french: 'Nouveau (neuf) ≠ Ancien (vieux)' },
      { num: 143, arabic: 'جَيِّدٌ / حَسَنٌ ≠ سَيِّئٌ', phonetic: 'Jayyidun / Ḥasanun ≠ Sayyi’un', french: 'Bon ≠ Mauvais' },
      { num: 144, arabic: 'جَمِيلٌ ≠ قَبِيحٌ', phonetic: 'Jamīlun ≠ Qabīḥun', french: 'Beau ≠ Laid' },
      { num: 145, arabic: 'سَهْلٌ ≠ صَعْبٌ', phonetic: 'Sahlun ≠ Ṣa‘bun', french: 'Facile ≠ Difficile' },
      { num: 146, arabic: 'قَرِيبٌ ≠ بَعِيدٌ', phonetic: 'Qarībun ≠ Ba‘īdun', french: 'Proche ≠ Loin (éloigné)' },
      { num: 147, arabic: 'حَارٌّ / سَاخِنٌ ≠ بَارِدٌ', phonetic: 'Ḥārrun / Sākhinun ≠ Bāridun', french: 'Chaud ≠ Froid' },
      { num: 148, arabic: 'سَرِيعٌ ≠ بَطِيءٌ', phonetic: 'Sarī‘un ≠ Baṭī’un', french: 'Rapide ≠ Lent' },
      { num: 149, arabic: 'كَثِيرٌ ≠ قَلِيلٌ', phonetic: 'Kathīrun ≠ Qalīlun', french: 'Nombreux (beaucoup) ≠ Peu' },
      { num: 150, arabic: 'مَفْتُوحٌ ≠ مُغْلَقٌ', phonetic: 'Maftūḥun ≠ Mughlaqun', french: 'Ouvert ≠ Fermé' },
      { num: 151, arabic: 'طَوِيلٌ ≠ قَصِيرٌ', phonetic: 'Ṭawīlun ≠ Qaṣīrun', french: 'Long (grand) ≠ Court' },
      { num: 152, arabic: 'غَالٍ ≠ رَخِيصٌ', phonetic: 'Ghālin ≠ Rakhīṣun', french: 'Cher (coûteux) ≠ Pas cher' },
      { num: 153, arabic: 'سَعِيدٌ ≠ حَزِينٌ', phonetic: 'Sa‘īdun ≠ Ḥazīnun', french: 'Heureux ≠ Triste' },
      { num: 154, arabic: 'مُهِمٌّ / مُفِيدٌ', phonetic: 'Muhimmun / Mufīdun', french: 'Important / Utile' }
    ]
  },
  {
    id: 'cat-verbes',
    code: 'CATÉGORIE 8',
    title: 'Les 24 Verbes d’Action les Plus Utilisés (Passé + Présent à la 1re personne)',
    subtitle: 'Chaque verbe est donné au passé (il a fait) et au présent avec « Je » (أَ... = je fais) pour parler immédiatement.',
    pageNumber: 2,
    concreteSentence: {
      arabic: 'أَذْهَبُ إِلَى الْمَدْرَسَةِ، أَتَكَلَّمُ بِالْعَرَبِيَّةِ وَأَفْهَمُ الْكَلِمَاتِ.',
      phonetic: 'Adhhabu ilā l-madrasati, atakallamu bi-l-‘arabiyyati wa afhamu l-kalimāti.',
      french: 'Je vais à l’école, je parle en arabe et je comprends les mots.'
    },
    words: [
      { num: 155, arabic: 'ذَهَبَ — أَذْهَبُ', phonetic: 'Dhahaba — Adhhabu', french: 'Aller (Il est allé — Je vais)' },
      { num: 156, arabic: 'جَاءَ — أَجِيءُ', phonetic: 'Jā’a — Ajī’u', french: 'Venir (Il est venu — Je viens)' },
      { num: 157, arabic: 'خَرَجَ — أَخْرُجُ', phonetic: 'Kharaja — Akhruju', french: 'Sortir (Il est sorti — Je sors)' },
      { num: 158, arabic: 'دَخَلَ — أَدْخُلُ', phonetic: 'Dakhala — Adkhulu', french: 'Entrer (Il est entré — J’entre)' },
      { num: 159, arabic: 'رَجَعَ — أَرْجِعُ', phonetic: 'Raja‘a — Arji‘u', french: 'Revenir / Retourner (Je reviens)' },
      { num: 160, arabic: 'جَلَسَ — أَجْلِسُ', phonetic: 'Jalasa — Ajlisu', french: 'S’asseoir (Je m’assois)' },
      { num: 161, arabic: 'أَكَلَ — آكُلُ', phonetic: 'Akala — Ākulu', french: 'Manger (Il a mangé — Je mange)' },
      { num: 162, arabic: 'شَرِبَ — أَشْرَبُ', phonetic: 'Chariba — Achrabu', french: 'Boire (Il a bu — Je bois)' },
      { num: 163, arabic: 'نَامَ — أَنَامُ', phonetic: 'Nāma — Anāmu', french: 'Dormir (Il a dormi — Je dors)' },
      { num: 164, arabic: 'قَالَ — أَقُولُ', phonetic: 'Qāla — Aqūlu', french: 'Dire (Il a dit — Je dis)' },
      { num: 165, arabic: 'تَكَلَّمَ — أَتَكَلَّمُ', phonetic: 'Takallama — Atakallamu', french: 'Parler (Je parle)' },
      { num: 166, arabic: 'سَمِعَ — أَسْمَعُ', phonetic: 'Sami‘a — Asma‘u', french: 'Entendre / Écouter (J’écoute)' },
      { num: 167, arabic: 'رَأَى / نَظَرَ — أَنْظُرُ', phonetic: 'Ra’ā / Naẓara — Anẓuru', french: 'Voir / Regarder (Je regarde)' },
      { num: 168, arabic: 'قَرَأَ — أَقْرَأُ', phonetic: 'Qara’a — Aqra’u', french: 'Lire (Il a lu — Je lis)' },
      { num: 169, arabic: 'كَتَبَ — أَكْتُبُ', phonetic: 'Kataba — Aktubu', french: 'Écrire (Il a écrit — J’écris)' },
      { num: 170, arabic: 'فَهِمَ — أَفْهَمُ', phonetic: 'Fahima — Afhamu', french: 'Comprendre (Je comprends)' },
      { num: 171, arabic: 'عَرَفَ / عَلِمَ — أَعْرِفُ', phonetic: '‘Arafa — A‘rifu', french: 'Savoir / Connaître (Je sais)' },
      { num: 172, arabic: 'أَرَادَ — أُرِيدُ', phonetic: 'Arāda — Urīdu', french: 'Vouloir (Je veux / Je voudrais)' },
      { num: 173, arabic: 'اسْتَطَاعَ — أَسْتَطِيعُ', phonetic: 'Istaṭā‘a — Astaṭī‘u', french: 'Pouvoir (Je peux)' },
      { num: 174, arabic: 'أَحَبَّ — أُحِبُّ', phonetic: 'Aḥabba — Uḥibbu', french: 'Aimer (J’aime)' },
      { num: 175, arabic: 'فَعَلَ / عَمِلَ — أَعْمَلُ', phonetic: 'Fa‘ala / ‘Amila — A‘malu', french: 'Faire / Travailler (Je travaille)' },
      { num: 176, arabic: 'فَتَحَ — أَفْتَحُ / أَغْلَقَ', phonetic: 'Fataḥa — Aftaḥu / Aghlaqa', french: 'Ouvrir (J’ouvre) / Fermer' },
      { num: 177, arabic: 'أَخَذَ — آخُذُ / أَعْطَى', phonetic: 'Akhadha — Ākhudhu / A‘ṭā', french: 'Prendre (Je prends) / Donner' },
      { num: 178, arabic: 'اشْتَرَى — أَشْتَرِي', phonetic: 'Ichtarā — Achtarī', french: 'Acheter (J’achète)' }
    ]
  },
  {
    id: 'cat-religion',
    code: 'CATÉGORIE 9',
    title: 'Religion & Spiritualité — Les 22 Mots Essentiels à Connaître (22 mots)',
    subtitle: 'Une sélection ciblée des 22 termes spirituels majeurs (sans surcharger le vocabulaire général).',
    pageNumber: 2,
    concreteSentence: {
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ — السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ.',
      phonetic: 'Bismi Llāhi r-Raḥmāni r-Raḥīm — As-salāmu ‘alaykum wa raḥmatu Llāh.',
      french: 'Au nom d’Allah, le Tout-Miséricordieux, le Très-Miséricordieux — Que la paix et la miséricorde d’Allah soient sur vous.'
    },
    words: [
      { num: 179, arabic: 'اللَّهُ / رَبٌّ', phonetic: 'Allāhu / Rabbun', french: 'Allah (Dieu) / Le Seigneur' },
      { num: 180, arabic: 'الْقُرْآنُ / آيَةٌ / سُورَةٌ', phonetic: 'Al-Qur’ānu / Āyatun / Sūratun', french: 'Le Coran / Un verset / Une sourate' },
      { num: 181, arabic: 'نَبِيٌّ / رَسُولٌ', phonetic: 'Nabiyyun / Rasūlun', french: 'Un Prophète / Un Messager' },
      { num: 182, arabic: 'الْإِسْلَامُ / الدِّينُ', phonetic: 'Al-Islāmu / Ad-Dīnu', french: 'L’Islam / La religion' },
      { num: 183, arabic: 'الْإِيمَانُ / مُؤْمِنٌ', phonetic: 'Al-Īmānu / Mu’minun', french: 'La foi / Un croyant' },
      { num: 184, arabic: 'الصَّلَاةُ / يُصَلِّي', phonetic: 'Aṣ-Ṣalātu / Yuṣallī', french: 'La prière / Il prie' },
      { num: 185, arabic: 'الْمَسْجِدُ / الْقِبْلَةُ', phonetic: 'Al-Masjidu / Al-Qiblatu', french: 'La mosquée / La direction de prière' },
      { num: 186, arabic: 'الْوُضُوءُ / طَهَارَةٌ', phonetic: 'Al-Wuḍū’u / Ṭahāratun', french: 'Les ablutions / La pureté' },
      { num: 187, arabic: 'الصِّيَامُ / رَمَضَانُ', phonetic: 'Aṣ-Ṣiyāmu / Ramaḍānu', french: 'Le jeûne / Le mois de Ramadan' },
      { num: 188, arabic: 'الزَّكَاةُ / صَدَقَةٌ', phonetic: 'Az-Zakātu / Ṣadaqatun', french: 'L’aumône légale / Une charité' },
      { num: 189, arabic: 'الْحَجُّ / الْكَعْبَةُ', phonetic: 'Al-Ḥajju / Al-Ka‘batu', french: 'Le pèlerinage / La Kaaba' },
      { num: 190, arabic: 'دُعَاءٌ / ذِكْرٌ', phonetic: 'Du‘ā’un / Dhikrun', french: 'Une invocation / Le rappel de Dieu' },
      { num: 191, arabic: 'رَحْمَةٌ / مَغْفِرَةٌ', phonetic: 'Raḥmatun / Maghfiratun', french: 'La miséricorde / Le pardon divin' },
      { num: 192, arabic: 'سَلَامٌ / بَرَكَةٌ', phonetic: 'Salāmun / Barakatun', french: 'La paix / La bénédiction' },
      { num: 193, arabic: 'الْحَقُّ / الْخَيْرُ', phonetic: 'Al-Ḥaqqu / Al-Khayru', french: 'La vérité (le droit) / Le bien' },
      { num: 194, arabic: 'الصَّبْرُ / الشُّكْرُ', phonetic: 'Aṣ-Ṣabru / Ach-Chukru', french: 'La patience / La gratitude' },
      { num: 195, arabic: 'الْجَنَّةُ / الْآخِرَةُ', phonetic: 'Al-Jannatu / Al-Ākhiratu', french: 'Le Paradis / L’Au-delà' },
      { num: 196, arabic: 'مَلَكٌ (مَلَائِكَةٌ)', phonetic: 'Malakun (pl. Malā’ikatun)', french: 'Un ange (les anges)' },
      { num: 197, arabic: 'حَلَالٌ / حَرَامٌ', phonetic: 'Ḥalālun / Ḥarāmun', french: 'Licite (permis) / Illicite (interdit)' },
      { num: 198, arabic: 'تَوْبَةٌ / اسْتِغْفَارٌ', phonetic: 'Tawbatun / Istighfārun', french: 'Le repentir / Demander pardon' },
      { num: 199, arabic: 'الْحَمْدُ لِلَّهِ', phonetic: 'Al-ḥamdu lillāh', french: 'Louange à Allah (Merci mon Dieu)' },
      { num: 200, arabic: 'إِنْ شَاءَ اللَّهُ', phonetic: 'In chā’a Llāh', french: 'Si Allah le veut' }
    ]
  }
];

export const ALL_200_WORDS: CategorizedWordEntry[] = VOCAB_200_SUBCATEGORIES.flatMap(
  (sub) => sub.words
);

export const VOCAB_200_QUIZ: QuizQuestion[] = [
  {
    id: 'v200-q1',
    question: 'Comment dit-on « S’il te plaît » et « Merci » en arabe dans la vie de tous les jours ?',
    arabicPrompt: {
      arabic: 'مِنْ فَضْلِكَ — شُكْرًا',
      phonetic: 'Min faḍlika — Chukran',
      french: 'S’il te plaît — Merci'
    },
    options: [
      'Min faḍlika (مِنْ فَضْلِكَ) et Chukran (شُكْرًا)',
      'Ghadan (غَدًا) et Amsi (أَمْسِ)',
      'Kabīrun (كَبِيرٌ) et Ṣaghīrun (صَغِيرٌ)',
      'Miftāḥun (مِفْتَاحٌ) et Bābun (بَابٌ)'
    ],
    correctIndex: 0,
    explanation: 'مِنْ فَضْلِكَ [Min faḍlika] signifie « S’il te plaît » et شُكْرًا [Chukran] signifie « Merci ».'
  },
  {
    id: 'v200-q2',
    question: 'Dans la catégorie des mots-outils, que signifient أَيْنَ [Ayna] et مَتَى [Matā] ?',
    arabicPrompt: {
      arabic: 'أَيْنَ ؟ — مَتَى ؟',
      phonetic: 'Ayna ? — Matā ?',
      french: 'Où ? — Quand ?'
    },
    options: [
      'Où ? et Quand ?',
      'Grand et Petit',
      'Aujourd’hui et Demain',
      'Pain et Eau'
    ],
    correctIndex: 0,
    explanation: 'أَيْنَ [Ayna] sert à demander le lieu (« Où ? ») et مَتَى [Matā] sert à demander le moment (« Quand ? »).'
  },
  {
    id: 'v200-q3',
    question: 'Que signifie la phrase concrète : أُرِيدُ كَأْسَ مَاءٍ وَخُبْزًا [Urīdu ka’sa mā’in wa khubzan] ?',
    arabicPrompt: {
      arabic: 'أُرِيدُ كَأْسَ مَاءٍ وَخُبْزًا',
      phonetic: 'Urīdu ka’sa mā’in wa khubzan',
      french: 'Je voudrais un verre d’eau et du pain'
    },
    options: [
      'Je voudrais un verre d’eau et du pain',
      'J’ai ouvert la porte de la maison',
      'Je vais à l’école demain matin',
      'La voiture est devant la gare'
    ],
    correctIndex: 0,
    explanation: 'أُرِيدُ [Urīdu] = Je veux / voudrais, كَأْسَ مَاءٍ [ka’sa mā’in] = un verre d’eau, خُبْزًا [khubzan] = du pain.'
  },
  {
    id: 'v200-q4',
    question: 'Quel est le contraire exact de l’adjectif سَهْلٌ [Sahlun = Facile] et de كَبِيرٌ [Kabīrun = Grand] ?',
    arabicPrompt: {
      arabic: 'سَهْلٌ ≠ صَعْبٌ · كَبِيرٌ ≠ صَغِيرٌ',
      phonetic: 'Sahlun ≠ Ṣa‘bun · Kabīrun ≠ Ṣaghīrun',
      french: 'Facile ≠ Difficile · Grand ≠ Petit'
    },
    options: [
      'صَعْبٌ [Ṣa‘bun = Difficile] et صَغِيرٌ [Ṣaghīrun = Petit]',
      'جَدِيدٌ [Jadīdun] et قَدِيمٌ [Qadīmun]',
      'حَارٌّ [Ḥārrun] et بَارِدٌ [Bāridun]',
      'قَرِيبٌ [Qarībun] et بَعِيدٌ [Ba‘īdun]'
    ],
    correctIndex: 0,
    explanation: 'سَهْلٌ [Sahlun] (facile) s’oppose à صَعْبٌ [Ṣa‘bun] (difficile), et كَبِيرٌ [Kabīrun] (grand) s’oppose à صَغِيرٌ [Ṣaghīrun] (petit).'
  },
  {
    id: 'v200-q5',
    question: 'Parmi les 24 verbes d’action les plus utilisés, que signifient أَفْهَمُ [Afhamu] et أَتَكَلَّمُ [Atakallamu] ?',
    arabicPrompt: {
      arabic: 'أَفْهَمُ — أَتَكَلَّمُ',
      phonetic: 'Afhamu — Atakallamu',
      french: 'Je comprends — Je parle'
    },
    options: [
      'Je comprends et Je parle',
      'Je mange et Je bois',
      'Je sors et J’entre',
      'J’achète et Je vends'
    ],
    correctIndex: 0,
    explanation: 'فَهِمَ / أَفْهَمُ [Afhamu] = Je comprends ; تَكَلَّمَ / أَتَكَلَّمُ [Atakallamu] = Je parle.'
  },
  {
    id: 'v200-q6',
    question: 'Dans la catégorie Religion (22 mots essentiels), que signifient الصَّبْرُ [Aṣ-Ṣabru] et الرَّحْمَةُ [Ar-Raḥmatu] ?',
    arabicPrompt: {
      arabic: 'الصَّبْرُ — الرَّحْمَةُ',
      phonetic: 'Aṣ-Ṣabru — Ar-Raḥmatu',
      french: 'La patience — La miséricorde'
    },
    options: [
      'La patience et La miséricorde',
      'Le jeûne et Le pèlerinage',
      'L’aube et Le soir',
      'La mosquée et La direction'
    ],
    correctIndex: 0,
    explanation: 'الصَّبْرُ [Aṣ-Ṣabru] désigne la patience / persévérance, et الرَّحْمَةُ [Ar-Raḥmatu] désigne la miséricorde / bonté.'
  }
];
