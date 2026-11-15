import { ArabicTriad, QuizQuestion } from './alphabetData';

/**
 * ============================================================================
 * PDF 7 : CONJUGAISON COMPLÈTE NIVEAU A2 (PASSÉ, PRÉSENT, FUTUR, IMPÉRATIF & NÉGATIONS)
 * ============================================================================
 */

export interface PronounConjugationRow {
  code: string;
  pronoun: ArabicTriad;
  pastSuffix: string;
  presentPrefixSuffix: string;
  writePast: ArabicTriad;
  writePresent: ArabicTriad;
  writeFuture: ArabicTriad;
}

export const A2_PRONOUN_CONJUGATION_TABLE: PronounConjugationRow[] = [
  {
    code: '1. Je (1re pers. sing.)',
    pronoun: { arabic: 'أَنَا', phonetic: 'Anā', french: 'Je / Moi' },
    pastSuffix: 'ـتُ (-tu)',
    presentPrefixSuffix: 'أَ...ُ (a-...-u)',
    writePast: { arabic: 'كَتَبْتُ', phonetic: 'Katabtu', french: 'J’ai écrit' },
    writePresent: { arabic: 'أَكْتُبُ', phonetic: 'Aktubu', french: 'J’écris' },
    writeFuture: { arabic: 'سَأَكْتُبُ', phonetic: 'Sa-aktubu', french: 'J’écrirai' }
  },
  {
    code: '2. Tu (Masc. sing.)',
    pronoun: { arabic: 'أَنْتَ', phonetic: 'Anta', french: 'Tu (masc.)' },
    pastSuffix: 'ـتَ (-ta)',
    presentPrefixSuffix: 'تَ...ُ (ta-...-u)',
    writePast: { arabic: 'كَتَبْتَ', phonetic: 'Katabta', french: 'Tu as écrit (m.)' },
    writePresent: { arabic: 'تَكْتُبُ', phonetic: 'Taktubu', french: 'Tu écris (m.)' },
    writeFuture: { arabic: 'سَتَكْتُبُ', phonetic: 'Sa-taktubu', french: 'Tu écriras (m.)' }
  },
  {
    code: '3. Tu (Fém. sing.)',
    pronoun: { arabic: 'أَنْتِ', phonetic: 'Anti', french: 'Tu (fém.)' },
    pastSuffix: 'ـتِ (-ti)',
    presentPrefixSuffix: 'تَ...ِينَ (ta-...-īna)',
    writePast: { arabic: 'كَتَبْتِ', phonetic: 'Katabti', french: 'Tu as écrit (f.)' },
    writePresent: { arabic: 'تَكْتُبِينَ', phonetic: 'Taktubīna', french: 'Tu écris (f.)' },
    writeFuture: { arabic: 'سَتَكْتُبِينَ', phonetic: 'Sa-taktubīna', french: 'Tu écriras (f.)' }
  },
  {
    code: '4. Il (3e pers. masc.)',
    pronoun: { arabic: 'هُوَ', phonetic: 'Huwa', french: 'Il / Lui' },
    pastSuffix: 'ـَ (-a racine)',
    presentPrefixSuffix: 'يَ...ُ (ya-...-u)',
    writePast: { arabic: 'كَتَبَ', phonetic: 'Kataba', french: 'Il a écrit' },
    writePresent: { arabic: 'يَكْتُبُ', phonetic: 'Yaktubu', french: 'Il écrit' },
    writeFuture: { arabic: 'سَيَكْتُبُ', phonetic: 'Sa-yaktubu', french: 'Il écrira' }
  },
  {
    code: '5. Elle (3e pers. fém.)',
    pronoun: { arabic: 'هِيَ', phonetic: 'Hiya', french: 'Elle' },
    pastSuffix: 'ـتْ (-at)',
    presentPrefixSuffix: 'تَ...ُ (ta-...-u)',
    writePast: { arabic: 'كَتَبَتْ', phonetic: 'Katabat', french: 'Elle a écrit' },
    writePresent: { arabic: 'تَكْتُبُ', phonetic: 'Taktubu', french: 'Elle écrit' },
    writeFuture: { arabic: 'سَتَكْتُبُ', phonetic: 'Sa-taktubu', french: 'Elle écrira' }
  },
  {
    code: '6. Nous (1re pers. plur.)',
    pronoun: { arabic: 'نَحْنُ', phonetic: 'Naḥnu', french: 'Nous' },
    pastSuffix: 'ـنَا (-nā)',
    presentPrefixSuffix: 'نَ...ُ (na-...-u)',
    writePast: { arabic: 'كَتَبْنَا', phonetic: 'Katabnā', french: 'Nous avons écrit' },
    writePresent: { arabic: 'نَكْتُبُ', phonetic: 'Naktubu', french: 'Nous écrivons' },
    writeFuture: { arabic: 'سَنَكْتُبُ', phonetic: 'Sa-naktubu', french: 'Nous écrirons' }
  },
  {
    code: '7. Vous (Masc. plur.)',
    pronoun: { arabic: 'أَنْتُمْ', phonetic: 'Antum', french: 'Vous (plur.)' },
    pastSuffix: 'ـتُمْ (-tum)',
    presentPrefixSuffix: 'تَ...ُونَ (ta-...-ūna)',
    writePast: { arabic: 'كَتَبْتُمْ', phonetic: 'Katabtum', french: 'Vous avez écrit' },
    writePresent: { arabic: 'تَكْتُبُونَ', phonetic: 'Taktubūna', french: 'Vous écrivez' },
    writeFuture: { arabic: 'سَتَكْتُبُونَ', phonetic: 'Sa-taktubūna', french: 'Vous écrirez' }
  },
  {
    code: '8. Ils (3e pers. masc. pl.)',
    pronoun: { arabic: 'هُمْ', phonetic: 'Hum', french: 'Ils / Eux' },
    pastSuffix: 'ـُوا (-ū)',
    presentPrefixSuffix: 'يَ...ُونَ (ya-...-ūna)',
    writePast: { arabic: 'كَتَبُوا', phonetic: 'Katabū', french: 'Ils ont écrit' },
    writePresent: { arabic: 'يَكْتُبُونَ', phonetic: 'Yaktubūna', french: 'Ils écrivent' },
    writeFuture: { arabic: 'سَيَكْتُبُونَ', phonetic: 'Sa-yaktubūna', french: 'Ils écriront' }
  },
  {
    code: '9. Elles (3e pers. fém. pl.)',
    pronoun: { arabic: 'هُنَّ', phonetic: 'Hunna', french: 'Elles' },
    pastSuffix: 'ـنَ (-na)',
    presentPrefixSuffix: 'يَ...ْنَ (ya-...-na)',
    writePast: { arabic: 'كَتَبْنَ', phonetic: 'Katabna', french: 'Elles ont écrit' },
    writePresent: { arabic: 'يَكْتُبْنَ', phonetic: 'Yaktubna', french: 'Elles écrivent' },
    writeFuture: { arabic: 'سَيَكْتُبْنَ', phonetic: 'Sa-yaktubna', french: 'Elles écriront' }
  },
  {
    code: '10. Vous deux (Duel)',
    pronoun: { arabic: 'أَنْتُمَا', phonetic: 'Antumā', french: 'Vous deux' },
    pastSuffix: 'ـتُمَا (-tumā)',
    presentPrefixSuffix: 'تَ...َانِ (ta-...-āni)',
    writePast: { arabic: 'كَتَبْتُمَا', phonetic: 'Katabtumā', french: 'Vous (2) avez écrit' },
    writePresent: { arabic: 'تَكْتُبَانِ', phonetic: 'Taktubāni', french: 'Vous (2) écrivez' },
    writeFuture: { arabic: 'سَتَكْتُبَانِ', phonetic: 'Sa-taktubāni', french: 'Vous (2) écrirez' }
  }
];

export interface EssentialVerbConjugationA2 {
  infinitiveMeaning: string;
  rootLetters: string;
  past3m: ArabicTriad;
  present3m: ArabicTriad;
  imperative2m: ArabicTriad;
  masdar: ArabicTriad;
}

export const A2_ESSENTIAL_VERBS_8: EssentialVerbConjugationA2[] = [
  {
    infinitiveMeaning: '1. Aller / Partir',
    rootLetters: 'ذ - ه - ب',
    past3m: { arabic: 'ذَهَبَ', phonetic: 'Dhahaba', french: 'Il est allé' },
    present3m: { arabic: 'يَذْهَبُ', phonetic: 'Yadhhabu', french: 'Il va' },
    imperative2m: { arabic: 'اِذْهَبْ !', phonetic: 'Idhhab !', french: 'Va !' },
    masdar: { arabic: 'ذَهَابٌ', phonetic: 'Dhahābun', french: 'Le départ / l’aller' }
  },
  {
    infinitiveMeaning: '2. Comprendre',
    rootLetters: 'ف - ه - م',
    past3m: { arabic: 'فَهِمَ', phonetic: 'Fahima', french: 'Il a compris' },
    present3m: { arabic: 'يَفْهَمُ', phonetic: 'Yafhamu', french: 'Il comprend' },
    imperative2m: { arabic: 'اِفْهَمْ !', phonetic: 'Ifham !', french: 'Comprends !' },
    masdar: { arabic: 'فَهْمٌ', phonetic: 'Fahmun', french: 'La compréhension' }
  },
  {
    infinitiveMeaning: '3. Ouvrir',
    rootLetters: 'ف - ت - ح',
    past3m: { arabic: 'فَتَحَ', phonetic: 'Fataḥa', french: 'Il a ouvert' },
    present3m: { arabic: 'يَفْتَحُ', phonetic: 'Yaftaḥu', french: 'Il ouvre' },
    imperative2m: { arabic: 'اِفْتَحْ !', phonetic: 'Iftaḥ !', french: 'Ouvre !' },
    masdar: { arabic: 'فَتْحٌ', phonetic: 'Fatḥun', french: 'L’ouverture' }
  },
  {
    infinitiveMeaning: '4. Sortir',
    rootLetters: 'خ - ر - ج',
    past3m: { arabic: 'خَرَجَ', phonetic: 'Kharaja', french: 'Il est sorti' },
    present3m: { arabic: 'يَخْرُجُ', phonetic: 'Yakhruju', french: 'Il sort' },
    imperative2m: { arabic: 'اُخْرُجْ !', phonetic: 'Ukhruj !', french: 'Sors !' },
    masdar: { arabic: 'خُرُوجٌ', phonetic: 'Khurūjun', french: 'La sortie' }
  },
  {
    infinitiveMeaning: '5. Revenir / Retourner',
    rootLetters: 'ر - ج - ع',
    past3m: { arabic: 'رَجَعَ', phonetic: 'Raja‘a', french: 'Il est revenu' },
    present3m: { arabic: 'يَرْجِعُ', phonetic: 'Yarji‘u', french: 'Il revient' },
    imperative2m: { arabic: 'اِرْجِعْ !', phonetic: 'Irji‘ !', french: 'Reviens !' },
    masdar: { arabic: 'رُجُوعٌ', phonetic: 'Rujū‘un', french: 'Le retour' }
  },
  {
    infinitiveMeaning: '6. Travailler / Agir',
    rootLetters: 'ع - م - ل',
    past3m: { arabic: 'عَمِلَ', phonetic: '‘Amila', french: 'Il a travaillé' },
    present3m: { arabic: 'يَعْمَلُ', phonetic: 'Ya‘malu', french: 'Il travaille' },
    imperative2m: { arabic: 'اِعْمَلْ !', phonetic: 'I‘mal !', french: 'Travaille !' },
    masdar: { arabic: 'عَمَلٌ', phonetic: '‘Amalun', french: 'Le travail / l’action' }
  },
  {
    infinitiveMeaning: '7. Dire (Verbe concave)',
    rootLetters: 'ق - و - ل',
    past3m: { arabic: 'قَالَ', phonetic: 'Qāla', french: 'Il a dit' },
    present3m: { arabic: 'يَقُولُ', phonetic: 'Yaqūlu', french: 'Il dit' },
    imperative2m: { arabic: 'قُلْ !', phonetic: 'Qul !', french: 'Dis !' },
    masdar: { arabic: 'قَوْلٌ', phonetic: 'Qawlun', french: 'La parole' }
  },
  {
    infinitiveMeaning: '8. Être / Exister (Passé)',
    rootLetters: 'ك - و - ن',
    past3m: { arabic: 'كَانَ', phonetic: 'Kāna', french: 'Il était / fut' },
    present3m: { arabic: 'يَكُونُ', phonetic: 'Yakūnu', french: 'Il est / sera' },
    imperative2m: { arabic: 'كُنْ !', phonetic: 'Kun !', french: 'Sois !' },
    masdar: { arabic: 'كَوْنٌ', phonetic: 'Kawnun', french: 'L’existence / le fait d’être' }
  }
];

export interface NegationRuleA2 {
  particle: ArabicTriad;
  tenseTarget: string;
  grammarEffect: string;
  example: ArabicTriad;
}

export const A2_NEGATION_RULES: NegationRuleA2[] = [
  {
    particle: { arabic: 'لَا', phonetic: 'Lā', french: 'Ne ... pas (Présent)' },
    tenseTarget: 'Présent (Al-Muḍāri‘)',
    grammarEffect: 'Le verbe garde sa voyelle finale -u (Marfū‘)',
    example: {
      arabic: 'لَا أَشْرَبُ الْقَهْوَةَ فِي الْمَسَاءِ',
      phonetic: 'Lā achrabu l-qahwata fī l-masā’i',
      french: 'Je ne bois pas de café le soir'
    }
  },
  {
    particle: { arabic: 'مَا', phonetic: 'Mā', french: 'Ne ... pas (Passé)' },
    tenseTarget: 'Passé (Al-Māḍī)',
    grammarEffect: 'Placé directement devant le verbe au passé',
    example: {
      arabic: 'مَا فَتَحْتُ الْبَابَ الْيَوْمَ',
      phonetic: 'Mā fataḥtu l-bāba l-yawma',
      french: 'Je n’ai pas ouvert la porte aujourd’hui'
    }
  },
  {
    particle: { arabic: 'لَمْ', phonetic: 'Lam', french: 'Ne ... pas (Passé accompli)' },
    tenseTarget: 'Présent apocopé → Sens Passé',
    grammarEffect: 'Met un Sukūn (ْ) à la fin du verbe présent (Majzūm)',
    example: {
      arabic: 'لَمْ يَذْهَبْ إِلَى السُّوقِ أَمْسِ',
      phonetic: 'Lam yadhhab ilā s-sūqi amsi',
      french: 'Il n’est pas allé au marché hier'
    }
  },
  {
    particle: { arabic: 'لَنْ', phonetic: 'Lan', french: 'Ne ... jamais / pas (Futur)' },
    tenseTarget: 'Futur négatif',
    grammarEffect: 'Met une Fatḥa (-a) à la fin du verbe présent (Manṣūb)',
    example: {
      arabic: 'لَنْ أَتَأَخَّرَ عَنِ الدَّرْسِ غَدًا',
      phonetic: 'Lan ata’akhkhara ‘ani d-darsi ghadan',
      french: 'Je ne serai pas en retard au cours demain'
    }
  },
  {
    particle: { arabic: 'لَيْسَ / لَيْسَتْ', phonetic: 'Laysa / Laysat', french: 'N’est pas (Phrase nominale)' },
    tenseTarget: 'Phrase nominale au présent',
    grammarEffect: 'Nie un nom ou un adjectif (l’attribut prend -an)',
    example: {
      arabic: 'الِامْتِحَانُ لَيْسَ صَعْبًا',
      phonetic: 'Al-imtiḥānu laysa ṣa‘ban',
      french: 'L’examen n’est pas difficile'
    }
  }
];

export const A2_CONJUGATION_SENTENCES: ArabicTriad[] = [
  {
    arabic: 'أَمْسِ دَرَسْنَا الدَّرْسَ وَفَهِمْنَا الْقَوَاعِدَ جَيِّدًا',
    phonetic: 'Amsi darasnā d-darsa wa fahimnā l-qawā‘ida jayyidan',
    french: 'Hier nous avons étudié la leçon et nous avons bien compris les règles'
  },
  {
    arabic: 'الْآنَ نَكْتُبُ التَّمَارِينَ فِي الدَّفْتَرِ بِهُدُوءٍ',
    phonetic: 'Al-āna naktubu t-tamārīna fī d-daftari bi-hudū’in',
    french: 'Maintenant nous écrivons les exercices dans le cahier calmement'
  },
  {
    arabic: 'غَدًا سَنُسَافِرُ مَعَ الْعَائِلَةِ إِلَى الْمَدِينَةِ الْكَبِيرَةِ',
    phonetic: 'Ghadan sa-nusāfiru ma‘a l-‘ā’ilati ilā l-madīnati l-kabīrati',
    french: 'Demain nous voyagerons avec la famille vers la grande ville'
  },
  {
    arabic: 'يَا أَخِي، اِقْرَأْ هَذَا النَّصَّ وَاحْفَظِ الْكَلِمَاتِ الْجَدِيدَةَ',
    phonetic: 'Yā akhī, iqra’ hādhā n-naṣṣa wa-ḥfaẓi l-kalimāti l-jadīdata',
    french: 'Ô mon frère, lis ce texte et retiens les nouveaux mots'
  },
  {
    arabic: 'كَانَ الجَوُّ بَارِدًا فِي الصَّبَاحِ ثُمَّ أَصْبَحَ جَمِيلًا',
    phonetic: 'Kāna l-jawwu bāridan fī ṣ-ṣabāḥi thumma aṣbaḥa jamīlan',
    french: 'Le temps était froid le matin puis il est devenu beau'
  },
  {
    arabic: 'الْمُسْلِمُونَ يَصُومُونَ شَهْرَ رَمَضَانَ وَيُصَلُّونَ فِي الْمَسْجِدِ',
    phonetic: 'Al-muslimūna yaṣūmūna chahra Ramaḍāna wa yuṣallūna fī l-masjidi',
    french: 'Les musulmans jeûnent le mois de Ramadan et prient à la mosquée'
  }
];

export const PDF7_CONJUGATION_QUIZ: QuizQuestion[] = [
  {
    id: 'q-conj-1',
    question: 'Quelle est la bonne conjugaison de « J’ai écrit » au passé (Al-Māḍī) ?',
    arabicPrompt: { arabic: 'أَنَا كَتَبْتُ', phonetic: 'Anā katabtu', french: 'J’ai écrit' },
    options: [
      'كَتَبْتُ [Katabtu] (terminaison -tu)',
      'كَتَبَ [Kataba] (terminaison -a)',
      'يَكْتُبُ [Yaktubu] (préfixe ya-)',
      'كَتَبُوا [Katabū] (terminaison -ū)'
    ],
    correctIndex: 0,
    explanation: 'Au passé, la 1re personne du singulier (Anā) prend toujours le suffixe -tu : Katabtu.'
  },
  {
    id: 'q-conj-2',
    question: 'Comment exprime-t-on le futur « Nous écrirons » en arabe ?',
    arabicPrompt: { arabic: 'سَنَكْتُبُ', phonetic: 'Sa-naktubu', french: 'Nous écrirons' },
    options: [
      'En ajoutant le préfixe سَـ [Sa-] devant le verbe au présent : سَنَكْتُبُ [Sa-naktubu]',
      'En ajoutant لَا [Lā] devant le verbe',
      'En mettant un Sukūn à la fin du passé',
      'En utilisant لَيْسَ [Laysa]'
    ],
    correctIndex: 0,
    explanation: 'Le préfixe Sa- (ou le mot Sawfa) placé devant le verbe au présent exprime le futur.'
  },
  {
    id: 'q-conj-3',
    question: 'Quelle particule utilise-t-on pour nier une phrase au FUTUR (« Je ne serai pas en retard ») ?',
    arabicPrompt: { arabic: 'لَنْ أَتَأَخَّرَ', phonetic: 'Lan ata’akhkhara', french: 'Je ne serai pas en retard' },
    options: [
      'لَنْ [Lan] + verbe au subjonctif (-a)',
      'مَا [Mā] + verbe au passé',
      'لَيْسَ [Laysa]',
      'إِلَى [Ilā]'
    ],
    correctIndex: 0,
    explanation: 'Lan (لَنْ) exprime la négation au futur et place une Fatḥa (-a) sur la dernière lettre du verbe.'
  },
  {
    id: 'q-conj-4',
    question: 'Que signifie la forme impérative « اِفْتَحْ ! » [Iftaḥ !] ?',
    arabicPrompt: { arabic: 'اِفْتَحِ الْبَابَ !', phonetic: 'Iftaḥi l-bāba !', french: 'Ouvre la porte !' },
    options: [
      'Ouvre ! (Impératif du verbe Fataḥa)',
      'Il a fermé',
      'Nous avons compris',
      'Ils sortiront'
    ],
    correctIndex: 0,
    explanation: 'Iftaḥ ! (اِفْتَحْ) est l’impératif (Al-Amr) du verbe Fataḥa (ouvrir).'
  },
  {
    id: 'q-conj-5',
    question: 'Quelle particule suivie du présent apocopé (Sukūn) exprime la négation au PASSÉ (« Il n’est pas allé ») ?',
    arabicPrompt: { arabic: 'لَمْ يَذْهَبْ', phonetic: 'Lam yadhhab', french: 'Il n’est pas allé' },
    options: [
      'لَمْ [Lam] + verbe avec Sukūn final',
      'سَوْفَ [Sawfa]',
      'نَعَمْ [Na‘am]',
      'مَعَ [Ma‘a]'
    ],
    correctIndex: 0,
    explanation: 'Lam (لَمْ) suivi du présent apocopé (Sukūn final) nie une action dans le passé.'
  },
  {
    id: 'q-conj-6',
    question: 'Que signifie « كَانَ الْجَوُّ بَارِدًا » [Kāna l-jawwu bāridan] ?',
    arabicPrompt: { arabic: 'كَانَ الْجَوُّ بَارِدًا', phonetic: 'Kāna l-jawwu bāridan', french: 'Le temps était froid' },
    options: [
      'Le temps était froid (Kāna met la phrase nominale à l’imparfait/passé)',
      'Le temps sera chaud demain',
      'Où est la maison ?',
      'Je travaille aujourd’hui'
    ],
    correctIndex: 0,
    explanation: 'Kāna (كَانَ) signifie « était / fut » et met l’attribut au cas accusatif (-an : bāridan).'
  }
];

/**
 * ============================================================================
 * PDF 8 : EXPRESSION, CONNECTEURS LOGIQUES, HEURE, NOMBRES & DIALOGUES A2
 * ============================================================================
 */

export interface ConnectorA2Item {
  category: string;
  triad: ArabicTriad;
  example: ArabicTriad;
}

export const A2_LOGICAL_CONNECTORS: ConnectorA2Item[] = [
  {
    category: 'Cause',
    triad: { arabic: 'لِأَنَّ', phonetic: 'Li-anna', french: 'Parce que / Car' },
    example: { arabic: 'أَدْرُسُ لِأَنَّ الْعِلْمَ نَافِعٌ', phonetic: 'Adrusu li-anna l-‘ilma nāfi‘un', french: 'J’étudie parce que la science est utile' }
  },
  {
    category: 'Opposition',
    triad: { arabic: 'لَكِنْ / وَلَكِنَّ', phonetic: 'Lākin / Wa-lākinna', french: 'Mais / Cependant' },
    example: { arabic: 'النَّصُّ طَوِيلٌ لَكِنْ وَاضِحٌ', phonetic: 'An-naṣṣu ṭawīlun lākin wāḍiḥun', french: 'Le texte est long mais clair' }
  },
  {
    category: 'But',
    triad: { arabic: 'لِكَيْ / حَتَّى', phonetic: 'Li-kay / Ḥattā', french: 'Pour que / Afin de' },
    example: { arabic: 'أَسْتَيْقِظُ مُبَكِّرًا لِكَيْ أُصَلِّيَ الْفَجْرَ', phonetic: 'Astayqiẓu mubakkiran li-kay uṣalliya l-fajra', french: 'Je me lève tôt afin de prier Al-Fajr' }
  },
  {
    category: 'Temps',
    triad: { arabic: 'عِنْدَمَا / حِينَمَا', phonetic: '‘Indamā / Ḥīnamā', french: 'Lorsque / Quand' },
    example: { arabic: 'عِنْدَمَا أَدْخُلُ الْبَيْتَ أُسَلِّمُ عَلَى أَهْلِي', phonetic: '‘Indamā adkhulu l-bayta usallimu ‘alā ahlī', french: 'Quand j’entre à la maison, je salue ma famille' }
  },
  {
    category: 'Antériorité',
    triad: { arabic: 'قَبْلَ أَنْ', phonetic: 'Qabla an', french: 'Avant de / Avant que' },
    example: { arabic: 'أَتَوَضَّأُ قَبْلَ أَنْ أُصَلِّيَ', phonetic: 'Atawaḍḍa’u qabla an uṣalliya', french: 'Je fais mes ablutions avant de prier' }
  },
  {
    category: 'Postériorité',
    triad: { arabic: 'بَعْدَ أَنْ', phonetic: 'Ba‘da an', french: 'Après avoir / Après que' },
    example: { arabic: 'أَشْكُرُ اللَّهَ بَعْدَ أَنْ آكُلَ', phonetic: 'Achkuru Llāha ba‘da an ākula', french: 'Je remercie Allah après avoir mangé' }
  },
  {
    category: 'Condition',
    triad: { arabic: 'إِذَا / إِنْ', phonetic: 'Idhā / In', french: 'Si (condition réalisable)' },
    example: { arabic: 'إِذَا اجْتَهَدْتَ نَجَحْتَ فِي الِامْتِحَانِ', phonetic: 'Idhā jtahadta najaḥta fī l-imtiḥāni', french: 'Si tu fais des efforts, tu réussiras à l’examen' }
  },
  {
    category: 'Concession',
    triad: { arabic: 'رَغْمَ أَنَّ', phonetic: 'Raghma anna', french: 'Bien que / Malgré que' },
    example: { arabic: 'خَرَجْتُ رَغْمَ أَنَّ الْمَطَرَ غَزِيرٌ', phonetic: 'Kharajtu raghma anna l-maṭara ghazīrun', french: 'Je suis sorti bien que la pluie soit forte' }
  },
  {
    category: 'Durée / Origine',
    triad: { arabic: 'مُنْذُ', phonetic: 'Mundhu', french: 'Depuis / Il y a' },
    example: { arabic: 'أَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ مُنْذُ سَنَتَيْنِ', phonetic: 'Ata‘allamu l-lughata l-‘arabiyyata mundhu sanatayni', french: 'J’apprends la langue arabe depuis deux ans' }
  },
  {
    category: 'Conséquence',
    triad: { arabic: 'لِذَلِكَ / إِذَنْ', phonetic: 'Lidhālika / Idhan', french: 'C’est pourquoi / Donc' },
    example: { arabic: 'هُوَ صَادِقٌ، لِذَلِكَ يَحْتَرِمُهُ النَّاسُ', phonetic: 'Huwa ṣādiqun, lidhālika yaḥtarimuhu n-nāsu', french: 'Il est sincère, c’est pourquoi les gens le respectent' }
  }
];

export interface DialogueA2Block {
  title: string;
  context: string;
  lines: {
    speaker: string;
    triad: ArabicTriad;
  }[];
}

export const A2_REAL_LIFE_DIALOGUES: DialogueA2Block[] = [
  {
    title: 'Dialogue 1 — Chez le médecin (عِنْدَ الطَّبِيبِ)',
    context: 'Expliquer ses symptômes et comprendre l’ordonnance',
    lines: [
      {
        speaker: 'الطَّبِيبُ (Dr)',
        triad: {
          arabic: 'مَرْحَبًا بِكَ، مِمَّ تَشْكُو الْيَوْمَ ؟',
          phonetic: 'Marḥaban bika, mimmā tachkū l-yawma ?',
          french: 'Bienvenue, de quoi souffres-tu aujourd’hui ?'
        }
      },
      {
        speaker: 'الْمَرِيضُ',
        triad: {
          arabic: 'أَشْعُرُ بِأَلَمٍ فِي الرَّأْسِ وَسُعَالٍ مُنْذُ يَوْمَيْنِ',
          phonetic: 'Ach‘uru bi-alamin fī r-ra’si wa su‘ālin mundhu yawmayni',
          french: 'Je ressens un mal de tête et une toux depuis deux jours'
        }
      },
      {
        speaker: 'الطَّبِيبُ (Dr)',
        triad: {
          arabic: 'خُذْ هَذَا الدَّوَاءَ مَرَّتَيْنِ فِي الْيَوْمِ وَاشْرَبْ مَاءً كَثِيرًا',
          phonetic: 'Khudh hādhā d-dawā’a marratayni fī l-yawmi wa-chrab mā’an kathīran',
          french: 'Prends ce médicament deux fois par jour et bois beaucoup d’eau'
        }
      },
      {
        speaker: 'الْمَرِيضُ',
        triad: {
          arabic: 'شُكْرًا يَا دُكْتُورُ، جَزَاكَ اللَّهُ خَيْرًا',
          phonetic: 'Chukran yā duktūru, jazāka Llāhu khayran',
          french: 'Merci docteur, qu’Allah te récompense en bien'
        }
      }
    ]
  },
  {
    title: 'Dialogue 2 — Au marché & Achats (فِي السُّوقِ وَالْمَتْجَرِ)',
    context: 'Demander le prix, la quantité et payer',
    lines: [
      {
        speaker: 'الْمُشْتَرِي',
        triad: {
          arabic: 'السَّلَامُ عَلَيْكُمْ، بِكَمْ كِيلُو التُّفَّاحِ وَالتَّمْرِ مِنْ فَضْلِكَ ؟',
          phonetic: 'As-salāmu ‘alaykum, bi-kam kīlū t-tuffāḥi wa t-tamri min faḍlika ?',
          french: 'La paix sur vous, à combien est le kilo de pommes et de dattes s’il te plaît ?'
        }
      },
      {
        speaker: 'الْبَائِعُ',
        triad: {
          arabic: 'وَعَلَيْكُمُ السَّلَامُ، التُّفَّاحُ بِثَلَاثَةِ دَنَانِيرَ وَالتَّمْرُ بِعَشَرَةٍ',
          phonetic: 'Wa ‘alaykumu s-salāmu, at-tuffāḥu bi-thalāthati danānīra wa t-tamru bi-‘acharah',
          french: 'Et sur vous la paix, les pommes sont à 3 dinars et les dattes à 10'
        }
      },
      {
        speaker: 'الْمُشْتَرِي',
        triad: {
          arabic: 'أُرِيدُ كِيلُوغْرَامًا مِنَ التَّمْرِ وَنِصْفَ كِيلُو مِنَ التُّفَّاحِ',
          phonetic: 'Urīdu kīlūghrāman mina t-tamri wa niṣfa kīlū mina t-tuffāḥi',
          french: 'Je voudrais un kilogramme de dattes et un demi-kilo de pommes'
        }
      },
      {
        speaker: 'الْبَائِعُ',
        triad: {
          arabic: 'تَفَضَّلْ يَا أَخِي، الْمَجْمُوعُ أَحَدَ عَشَرَ دِينَارًا وَنِصْفٌ',
          phonetic: 'Tafaḍḍal yā akhī, al-majmū‘u aḥada ‘achara dīnāran wa niṣfun',
          french: 'Voici mon frère, le total est de onze dinars et demi'
        }
      }
    ]
  }
];

export const A2_TIME_AND_NUMBERS: ArabicTriad[] = [
  { arabic: 'كَمِ السَّاعَةُ الْآنَ ؟ — السَّاعَةُ الرَّابِعَةُ تَمَامًا', phonetic: 'Kami s-sā‘atu l-āna ? — As-sā‘atu r-rābi‘atu tamāman', french: 'Quelle heure est-il ? — Il est 4 heures pile' },
  { arabic: 'السَّاعَةُ السَّادِسَةُ وَالرُّبْعُ (6h15)', phonetic: 'As-sā‘atu s-sādisatu wa r-rub‘u', french: 'Il est six heures et quart (6h15)' },
  { arabic: 'السَّاعَةُ الثَّامِنَةُ وَالنِّصْفُ صَبَاحًا (8h30)', phonetic: 'As-sā‘atu th-thāminatu wa n-niṣfu ṣabāḥan', french: 'Il est huit heures et demie du matin (8h30)' },
  { arabic: 'السَّاعَةُ التَّاسِعَةُ إِلَّا عَشْرَ دَقَائِقَ (8h50)', phonetic: 'As-sā‘atu t-tāsi‘atu illā ‘achra daqā’iqa', french: 'Il est neuf heures moins dix (8h50)' },
  { arabic: 'أَحَدَ عَشَرَ (11) · اِثْنَا عَشَرَ (12) · خَمْسَةَ عَشَرَ (15)', phonetic: 'Aḥada ‘achara (11) · Ithnā ‘achara (12) · Khamsata ‘achara (15)', french: 'Onze (11) · Douze (12) · Quinze (15)' },
  { arabic: 'عِشْرُونَ (20) · ثَلَاثُونَ (30) · خَمْسُونَ (50) · مِائَةٌ (100) · أَلْفٌ (1000)', phonetic: '‘Ichrūna (20) · Thalāthūna (30) · Khamsūna (50) · Mi’atun (100) · Alfun (1000)', french: '20 · 30 · 50 · 100 · 1000' },
  { arabic: 'فِي رَأْيِي هَذَا الْكِتَابُ مُفِيدٌ جِدًّا', phonetic: 'Fī ra’yī hādhā l-kitābu mufīdun jiddan', french: 'À mon avis, ce livre est très utile' },
  { arabic: 'أَنَا مُوَافِقٌ مَعَكَ تَمَامًا فِي هَذَا الْمَوْضُوعِ', phonetic: 'Anā muwāfiqun ma‘aka tamāman fī hādhā l-mawḍū‘i', french: 'Je suis tout à fait d’accord avec toi sur ce sujet' }
];

export const PDF8_CONVERSATIONS_QUIZ: QuizQuestion[] = [
  {
    id: 'q-conv-1',
    question: 'Quel connecteur logique arabe signifie « Parce que / Car » ?',
    arabicPrompt: { arabic: 'لِأَنَّ', phonetic: 'Li-anna', french: 'Parce que / Car' },
    options: [
      'لِأَنَّ [Li-anna]',
      'قَبْلَ أَنْ [Qabla an] (avant de)',
      'بِكَمْ [Bi-kam] (à combien)',
      'أَمْسِ [Amsi] (hier)'
    ],
    correctIndex: 0,
    explanation: 'Li-anna (لِأَنَّ) introduit la cause (« parce que / car »).'
  },
  {
    id: 'q-conv-2',
    question: 'Que signifie « قَبْلَ أَنْ أُصَلِّيَ » [Qabla an uṣalliya] ?',
    arabicPrompt: { arabic: 'أَتَوَضَّأُ قَبْلَ أَنْ أُصَلِّيَ', phonetic: 'Atawaḍḍa’u qabla an uṣalliya', french: 'Je fais mes ablutions avant de prier' },
    options: [
      'Avant de prier (Qabla an = avant de)',
      'Après avoir prié (Ba‘da an)',
      'Pendant le voyage',
      'Au milieu du marché'
    ],
    correctIndex: 0,
    explanation: 'Qabla an (قَبْلَ أَنْ) signifie « avant de / avant que », tandis que Ba‘da an signifie « après ».'
  },
  {
    id: 'q-conv-3',
    question: 'Comment dit-on « Il est huit heures et demie » en arabe ?',
    arabicPrompt: { arabic: 'السَّاعَةُ الثَّامِنَةُ وَالنِّصْفُ', phonetic: 'As-sā‘atu th-thāminatu wa n-niṣfu', french: 'Il est huit heures et demie' },
    options: [
      'السَّاعَةُ الثَّامِنَةُ وَالنِّصْفُ [As-sā‘atu th-thāminatu wa n-niṣfu]',
      'السَّاعَةُ الْوَاحِدَةُ [As-sā‘atu l-wāḥidatu]',
      'بِكَمْ هَذَا [Bi-kam hādhā]',
      'مُنْذُ يَوْمَيْنِ [Mundhu yawmayni]'
    ],
    correctIndex: 0,
    explanation: 'Ath-thāminatu = la 8e (heure), wa n-niṣfu = et la moitié (et demie).'
  },
  {
    id: 'q-conv-4',
    question: 'Que demande l’acheteur lorsqu’il dit « بِكَمْ كِيلُو التَّمْرِ ؟ » [Bi-kam kīlū t-tamri ?] ?',
    arabicPrompt: { arabic: 'بِكَمْ كِيلُو التَّمْرِ ؟', phonetic: 'Bi-kam kīlū t-tamri ?', french: 'À combien est le kilo de dattes ?' },
    options: [
      'À combien est le kilo de dattes ? (le prix)',
      'Où se trouve la gare ?',
      'Quelle heure est-il ?',
      'Comment t’appelles-tu ?'
    ],
    correctIndex: 0,
    explanation: 'Bi-kam (بِكَمْ) sert à demander le prix (« À combien ? »).'
  },
  {
    id: 'q-conv-5',
    question: 'Que signifie « مُنْذُ سَنَتَيْنِ » [Mundhu sanatayni] ?',
    arabicPrompt: { arabic: 'أَتَعَلَّمُ الْعَرَبِيَّةَ مُنْذُ سَنَتَيْنِ', phonetic: 'Ata‘allamu l-‘arabiyyata mundhu sanatayni', french: 'J’apprends l’arabe depuis deux ans' },
    options: [
      'Depuis deux ans (Mundhu = depuis + sanatayni = duel de sana)',
      'Dans deux jours',
      'Deux cents livres',
      'Avant deux heures'
    ],
    correctIndex: 0,
    explanation: 'Mundhu (مُنْذُ) signifie « depuis », et sanatayni est le duel de sana (année).'
  },
  {
    id: 'q-conv-6',
    question: 'Comment exprime-t-on « À mon avis » en arabe ?',
    arabicPrompt: { arabic: 'فِي رَأْيِي', phonetic: 'Fī ra’yī', french: 'À mon avis / Selon mon opinion' },
    options: [
      'فِي رَأْيِي [Fī ra’yī]',
      'فِي السُّوقِ [Fī s-sūqi]',
      'مَعَ السَّلَامَةِ [Ma‘a s-salāmati]',
      'عِنْدَ الطَّبِيبِ [‘Inda ṭ-ṭabībi]'
    ],
    correctIndex: 0,
    explanation: 'Ra’y (رَأْي) signifie « avis / opinion », et Fī ra’yī signifie « à mon avis ».'
  }
];

/**
 * ============================================================================
 * PDF 9 : LECTURE DE TEXTES SUIVIS A2, SYSTÈME DES RACINES (3 LETTRES) & PROVERBES
 * ============================================================================
 */

export interface ReadingTextA2 {
  id: string;
  titleFrench: string;
  titleArabic: string;
  sentences: ArabicTriad[];
  keyVocab: ArabicTriad[];
}

export const A2_READING_TEXTS: ReadingTextA2[] = [
  {
    id: 'text-1',
    titleFrench: 'Texte 1 — Une journée d’étude et d’entraide en famille',
    titleArabic: 'النَّصُّ الأَوَّلُ : يَوْمُ الدِّرَاسَةِ وَالتَّعَاوُنِ فِي الْعَائِلَةِ',
    sentences: [
      {
        arabic: 'يَسْتَيْقِظُ يُوسُفُ كُلَّ صَبَاحٍ مُبَكِّرًا، فَيَتَوَضَّأُ وَيُصَلِّي صَلَاةَ الْفَجْرِ.',
        phonetic: 'Yastayqiẓu Yūsufu kulla ṣabāḥin mubakkiran, fa-yatawaḍḍa’u wa yuṣallī ṣalāta l-fajri.',
        french: 'Youssef se réveille chaque matin tôt, fait ses ablutions et accomplit la prière d’Al-Fajr.'
      },
      {
        arabic: 'بَعْدَ ذَلِكَ يَتَنَاوَلُ الْفَطُورَ مَعَ وَالِدَيْهِ وَإِخْوَتِهِ، ثُمَّ يَذْهَبُ إِلَى الْمَدْرَسَةِ.',
        phonetic: 'Ba‘da dhālika yatanāwalu l-faṭūra ma‘a wālidayhi wa ikhwatihi, thumma yadhhabu ilā l-madrasati.',
        french: 'Après cela, il prend le petit-déjeuner avec ses parents et ses frères, puis va à l’école.'
      },
      {
        arabic: 'فِي الْمَسَاءِ يَرْجِعُ إِلَى الْبَيْتِ، وَيُسَاعِدُ أُمَّهُ وَأَبَاهُ، وَيُرَاجِعُ دُرُوسَهُ بِنَشَاطٍ.',
        phonetic: 'Fī l-masā’i yarji‘u ilā l-bayti, wa yusā‘idu ummahu wa abāhu, wa yurāji‘u durūsahu bi-nachāṭin.',
        french: 'Le soir il rentre à la maison, aide sa mère et son père, et révise ses cours avec dynamisme.'
      }
    ],
    keyVocab: [
      { arabic: 'يَسْتَيْقِظُ', phonetic: 'Yastayqiẓu', french: 'Il se réveille' },
      { arabic: 'وَالِدَيْهِ', phonetic: 'Wālidayhi', french: 'Ses deux parents' },
      { arabic: 'يُسَاعِدُ', phonetic: 'Yusā‘idu', french: 'Il aide' },
      { arabic: 'يُرَاجِعُ', phonetic: 'Yurāji‘u', french: 'Il révise' }
    ]
  },
  {
    id: 'text-2',
    titleFrench: 'Texte 2 — Le commerçant honnête et la valeur de la confiance',
    titleArabic: 'النَّصُّ الثَّانِي : التَّاجِرُ الأَمِينُ وَقِيمَةُ الصِّدْقِ',
    sentences: [
      {
        arabic: 'كَانَ هُنَاكَ تَاجِرٌ أَمِينٌ يَبِيعُ الطَّعَامَ وَالْفَوَاكِهَ فِي سُوقِ الْمَدِينَةِ.',
        phonetic: 'Kāna hunāka tājirun amīnun yabī‘u ṭ-ṭa‘āma wa l-fawākiha fī sūqi l-madīnati.',
        french: 'Il y avait un commerçant honnête qui vendait de la nourriture et des fruits au marché de la ville.'
      },
      {
        arabic: 'كَانَ لَا يَغُشُّ النَّاسَ أَبَدًا، وَيَزِنُ السِّلَعَ بِالْعَدْلِ وَيَبْتَسِمُ لِلْجَمِيعِ.',
        phonetic: 'Kāna lā yaghuchchu n-nāsa abadan, wa yazinu s-sila‘a bi-l-‘adli wa yabtasimu li-l-jamī‘i.',
        french: 'Il ne trompait jamais les gens, pesait les marchandises avec justice et souriait à tous.'
      },
      {
        arabic: 'فَأَحَبَّهُ أَهْلُ الْمَدِينَةِ وَبَارَكَ اللَّهُ لَهُ فِي رِزْقِهِ وَتِجَارَتِهِ.',
        phonetic: 'Fa-aḥabbahu ahlu l-madīnati wa bāraka Llāhu lahu fī rizqihi wa tijāratihi.',
        french: 'Les habitants de la ville l’aimèrent alors, et Allah bénit sa subsistance et son commerce.'
      }
    ],
    keyVocab: [
      { arabic: 'تَاجِرٌ أَمِينٌ', phonetic: 'Tājirun amīnun', french: 'Commerçant digne de confiance' },
      { arabic: 'لَا يَغُشُّ', phonetic: 'Lā yaghuchchu', french: 'Il ne triche / trompe pas' },
      { arabic: 'بِالْعَدْلِ', phonetic: 'Bi-l-‘adli', french: 'Avec justice / équité' },
      { arabic: 'رِزْقِهِ', phonetic: 'Rizqihi', french: 'Sa subsistance' }
    ]
  },
  {
    id: 'text-3',
    titleFrench: 'Texte 3 — La valeur du temps, de la lecture et de la patience',
    titleArabic: 'النَّصُّ الثَّالِثُ : قِيمَةُ الْوَقْتِ وَالْقِرَاءَةِ وَالصَّبْرِ',
    sentences: [
      {
        arabic: 'الْوَقْتُ كَنزٌ ثَمِينٌ لَا يَعُودُ إِذَا مَضَى، لِذَلِكَ يَجِبُ عَلَى الْإِنْسَانِ أَنْ يَحْفَظَهُ.',
        phonetic: 'Al-waqtu kanzun thamīnun lā ya‘ūdu idhā maḍā, lidhālika yajibu ‘alā l-insāni an yaḥfaẓahu.',
        french: 'Le temps est un trésor précieux qui ne revient pas quand il est passé, c’est pourquoi l’homme doit le préserver.'
      },
      {
        arabic: 'مَنْ يَقْرَأْ كُلَّ يَوْمٍ صَفْحَةً وَاحِدَةً يَتَعَلَّمْ حِكْمَةً جَدِيدَةً وَيَزْدَدْ فَهْمًا.',
        phonetic: 'Man yaqra’ kulla yawmin ṣafḥatan wāḥidatan yata‘allam ḥikmatan jadīdatan wa yazdad fahman.',
        french: 'Celui qui lit chaque jour une seule page apprend une sagesse nouvelle et grandit en compréhension.'
      }
    ],
    keyVocab: [
      { arabic: 'كَنزٌ ثَمِينٌ', phonetic: 'Kanzun thamīnun', french: 'Un trésor précieux' },
      { arabic: 'إِذَا مَضَى', phonetic: 'Idhā maḍā', french: 'Quand il s’est écoulé' },
      { arabic: 'يَجِبُ عَلَى', phonetic: 'Yajibu ‘alā', french: 'Il faut / Il incombe à' },
      { arabic: 'حِكْمَةً', phonetic: 'Ḥikmatan', french: 'Une sagesse' }
    ]
  }
];

export interface ArabicRootFamilyRow {
  rootArabic: string;
  rootMeaning: string;
  verb3m: ArabicTriad;
  activeParticiple: ArabicTriad;
  passiveOrObject: ArabicTriad;
  placeOrNoun: ArabicTriad;
}

export const A2_ROOT_SYSTEM_TABLE: ArabicRootFamilyRow[] = [
  {
    rootArabic: 'ك - ت - ب (K-T-B)',
    rootMeaning: 'Notion d’écriture',
    verb3m: { arabic: 'كَتَبَ', phonetic: 'Kataba', french: 'Il a écrit' },
    activeParticiple: { arabic: 'كَاتِبٌ', phonetic: 'Kātibun', french: 'Écrivain / Auteur (Fā‘il)' },
    passiveOrObject: { arabic: 'مَكْتُوبٌ', phonetic: 'Maktūbun', french: 'Écrit / Destin (Maf‘ūl)' },
    placeOrNoun: { arabic: 'مَكْتَبٌ / مَكْتَبَةٌ', phonetic: 'Maktabun / Maktabatun', french: 'Bureau / Bibliothèque (Maf‘al)' }
  },
  {
    rootArabic: 'ع - ل - م (‘-L-M)',
    rootMeaning: 'Notion de savoir',
    verb3m: { arabic: 'عَلِمَ', phonetic: '‘Alima', french: 'Il a su' },
    activeParticiple: { arabic: 'عَالِمٌ', phonetic: '‘Ālimun', french: 'Savant / Érudit' },
    passiveOrObject: { arabic: 'مَعْلُومٌ', phonetic: 'Ma‘lūmun', french: 'Connu / Information' },
    placeOrNoun: { arabic: 'عِلْمٌ / مُعَلِّمٌ', phonetic: '‘Ilmun / Mu‘allimun', french: 'Science / Enseignant' }
  },
  {
    rootArabic: 'س - ل - م (S-L-M)',
    rootMeaning: 'Notion de paix & salut',
    verb3m: { arabic: 'سَلِمَ / أَسْلَمَ', phonetic: 'Salima / Aslama', french: 'Être sain / Se soumettre' },
    activeParticiple: { arabic: 'مُسْلِمٌ', phonetic: 'Muslimun', french: 'Musulman (apaisé/soumis)' },
    passiveOrObject: { arabic: 'سَلِيمٌ', phonetic: 'Salīmun', french: 'Sain / Pur (Qalb salīm)' },
    placeOrNoun: { arabic: 'سَلَامٌ / إِسْلَامٌ', phonetic: 'Salāmun / Islāmun', french: 'Paix / Islam' }
  },
  {
    rootArabic: 'د - ر - س (D-R-S)',
    rootMeaning: 'Notion d’étude',
    verb3m: { arabic: 'دَرَسَ', phonetic: 'Darasa', french: 'Il a étudié' },
    activeParticiple: { arabic: 'دَارِسٌ / مُدَرِّسٌ', phonetic: 'Dārisun / Mudarrisun', french: 'Étudiant / Professeur' },
    passiveOrObject: { arabic: 'مَدْرُوسٌ', phonetic: 'Madrūsun', french: 'Étudié' },
    placeOrNoun: { arabic: 'مَدْرَسَةٌ / دَرْسٌ', phonetic: 'Madrasatun / Darsun', french: 'École / Cours' }
  },
  {
    rootArabic: 'ح - م - د (Ḥ-M-D)',
    rootMeaning: 'Notion de louange',
    verb3m: { arabic: 'حَمِدَ', phonetic: 'Ḥamida', french: 'Il a loué / remercié' },
    activeParticiple: { arabic: 'حَامِدٌ', phonetic: 'Ḥāmidun', french: 'Celui qui loue' },
    passiveOrObject: { arabic: 'مَحْمُودٌ / مُحَمَّدٌ', phonetic: 'Maḥmūdun / Muḥammadun', french: 'Digne de louange / Loué' },
    placeOrNoun: { arabic: 'حَمْدٌ', phonetic: 'Ḥamdun', french: 'La louange (Al-ḥamdu)' }
  },
  {
    rootArabic: 'ع - م - ل (‘-M-L)',
    rootMeaning: 'Notion de travail',
    verb3m: { arabic: 'عَمِلَ', phonetic: '‘Amila', french: 'Il a travaillé / agi' },
    activeParticiple: { arabic: 'عَامِلٌ', phonetic: '‘Āmilun', french: 'Travailleur / Ouvrier' },
    passiveOrObject: { arabic: 'مَعْمُولٌ', phonetic: 'Ma‘mūlun', french: 'Fait / Mis en pratique' },
    placeOrNoun: { arabic: 'مَعْمَلٌ / عَمَلٌ', phonetic: 'Ma‘malun / ‘Amalun', french: 'Atelier / Travail' }
  }
];

export const A2_ARABIC_PROVERBS: ArabicTriad[] = [
  {
    arabic: 'مَنْ جَدَّ وَجَدَ، وَمَنْ زَرَعَ حَصَدَ',
    phonetic: 'Man jadda wajada, wa man zara‘a ḥaṣada',
    french: 'Qui fait des efforts trouve, et qui sème récolte'
  },
  {
    arabic: 'الصَّبْرُ مِفْتَاحُ الْفَرَجِ',
    phonetic: 'Aṣ-ṣabru miftāḥu l-faraji',
    french: 'La patience est la clé de la délivrance'
  },
  {
    arabic: 'الْعِلْمُ فِي الصِّغَرِ كَالنَّقْشِ فِي الْحَجَرِ',
    phonetic: 'Al-‘ilmu fī ṣ-ṣighari ka-n-naqchi fī l-ḥajari',
    french: 'L’apprentissage dans la jeunesse est comme la gravure dans la pierre'
  },
  {
    arabic: 'الْوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ',
    phonetic: 'Al-waqtu ka-s-sayfi in lam taqṭa‘hu qaṭa‘aka',
    french: 'Le temps est comme l’épée : si tu ne le tranches pas, il te tranche'
  },
  {
    arabic: 'الصَّدِيقُ وَقْتَ الضِّيقِ',
    phonetic: 'Aṣ-ṣadīqu waqta ḍ-ḍīqi',
    french: 'C’est dans le moment d’épreuve qu’on reconnaît l’ami véritable'
  },
  {
    arabic: 'خَيْرُ الْكَلَامِ مَا قَلَّ وَدَلَّ',
    phonetic: 'Khayru l-kalāmi mā qalla wa dalla',
    french: 'La meilleure parole est celle qui est concise et pleine de sens'
  }
];

export const PDF9_READING_QUIZ: QuizQuestion[] = [
  {
    id: 'q-read-1',
    question: 'Dans le système des racines arabes, de quelle racine de 3 lettres viennent « مَكْتَبَةٌ » (bibliothèque), « كَاتِبٌ » (écrivain) et « كِتَابٌ » (livre) ?',
    arabicPrompt: { arabic: 'ك - ت - ب', phonetic: 'K - T - B (Kataba)', french: 'Racine de l’écriture' },
    options: [
      'La racine ك - ت - ب [K-T-B] liée à l’écriture',
      'La racine خ - ر - ج [Kh-R-J] liée à la sortie',
      'La racine ش - ر - ب [Ch-R-B] liée à la boisson',
      'La racine ح - م - د [Ḥ-M-D] liée à la louange'
    ],
    correctIndex: 0,
    explanation: 'Tous ces mots partagent les 3 consonnes radicales K-T-B dans le même ordre.'
  },
  {
    id: 'q-read-2',
    question: 'Quel schème (modèle) désigne le LIEU de l’action en arabe (ex. المَكْتَبُ le bureau, المَدْرَسَةُ l’école) ?',
    arabicPrompt: { arabic: 'مَفْعَلٌ / مَفْعَلَةٌ', phonetic: 'Maf‘alun / Maf‘alatun', french: 'Nom de lieu (Ism al-Makān)' },
    options: [
      'Le préfixe مَـ [Ma-] sur le modèle مَفْعَل [Maf‘al]',
      'Le suffixe -ūna du pluriel',
      'La particule لَنْ [Lan]',
      'Le pronom نَحْنُ [Naḥnu]'
    ],
    correctIndex: 0,
    explanation: 'Le préfixe Ma- (مَفْعَل / مَفْعَلَة) forme le nom de lieu : Darasa (étudier) → Madrasa (école).'
  },
  {
    id: 'q-read-3',
    question: 'Dans le Texte 2, que signifie « تَاجِرٌ أَمِينٌ » [Tājirun amīnun] ?',
    arabicPrompt: { arabic: 'تَاجِرٌ أَمِينٌ', phonetic: 'Tājirun amīnun', french: 'Un commerçant honnête / digne de confiance' },
    options: [
      'Un commerçant honnête / digne de confiance',
      'Un voyageur pressé',
      'Une grande bibliothèque',
      'Un examen facile'
    ],
    correctIndex: 0,
    explanation: 'Tājirun signifie commerçant et Amīnun signifie honnête / digne de confiance.'
  },
  {
    id: 'q-read-4',
    question: 'Que signifie le célèbre proverbe arabe « مَنْ جَدَّ وَجَدَ » [Man jadda wajada] ?',
    arabicPrompt: { arabic: 'مَنْ جَدَّ وَجَدَ', phonetic: 'Man jadda wajada', french: 'Qui fait des efforts trouve (réussit)' },
    options: [
      'Qui fait des efforts trouve (celui qui persévère réussit)',
      'Il fait beau aujourd’hui',
      'La porte est ouverte',
      'Le train part à huit heures'
    ],
    correctIndex: 0,
    explanation: 'Man (celui qui) jadda (s’efforce sérieusement) wajada (trouve / réussit).'
  },
  {
    id: 'q-read-5',
    question: 'Que signifie le proverbe « الصَّبْرُ مِفْتَاحُ الْفَرَجِ » [Aṣ-ṣabru miftāḥu l-faraji] ?',
    arabicPrompt: { arabic: 'الصَّبْرُ مِفْتَاحُ الْفَرَجِ', phonetic: 'Aṣ-ṣabru miftāḥu l-faraji', french: 'La patience est la clé de la délivrance' },
    options: [
      'La patience est la clé de la délivrance / du soulagement',
      'La clé de la maison est sur la table',
      'L’école commence le matin',
      'Le marché est fermé le soir'
    ],
    correctIndex: 0,
    explanation: 'Aṣ-ṣabru = la patience, miftāḥu = la clé, al-faraji = du soulagement / de l’issue heureuse.'
  },
  {
    id: 'q-read-6',
    question: 'Dans le Texte 1, que signifie le verbe « يُرَاجِعُ دُرُوسَهُ » [Yurāji‘u durūsahu] ?',
    arabicPrompt: { arabic: 'يُرَاجِعُ دُرُوسَهُ', phonetic: 'Yurāji‘u durūsahu', french: 'Il révise ses cours / ses leçons' },
    options: [
      'Il révise ses cours / ses leçons',
      'Il achète des fruits',
      'Il ferme la fenêtre',
      'Il attend le bus'
    ],
    correctIndex: 0,
    explanation: 'Yurāji‘u signifie « il révise » et durūsahu est le pluriel de dars (leçons/cours) + -hu (ses).'
  }
];
