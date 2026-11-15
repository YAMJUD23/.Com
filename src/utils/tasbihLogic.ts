export interface DhikrPreset {
  id: string;
  titleFr: string;
  arabic: string;
  phonetic: string;
  french: string;
  defaultTarget: number;
  virtueFr: string;
  category: 'apres-priere' | 'quotidien' | 'pardon-protection';
}

export const DHIKR_PRESETS: DhikrPreset[] = [
  {
    id: 'subhanallah',
    titleFr: '1. Le Tasbîḥ (Gloire à Allah)',
    arabic: 'سُبْحَانَ اللَّهِ',
    phonetic: 'Subḥāna Llāhi',
    french: 'Gloire et pureté à Allah (exempt de toute imperfection)',
    defaultTarget: 33,
    virtueFr: '1re étape après chaque prière obligatoire (33 fois).',
    category: 'apres-priere'
  },
  {
    id: 'alhamdulillah',
    titleFr: '2. Le Taḥmîd (Louange à Allah)',
    arabic: 'الْحَمْدُ لِلَّهِ',
    phonetic: 'Al-ḥamdu lillāhi',
    french: 'Toutes les louanges et la gratitude appartiennent à Allah',
    defaultTarget: 33,
    virtueFr: '2e étape après chaque prière obligatoire (33 fois). « Remplit la balance des bonnes actions. »',
    category: 'apres-priere'
  },
  {
    id: 'allahuakbar',
    titleFr: '3. Le Takbîr (Grandeur d’Allah)',
    arabic: 'اللَّهُ أَكْبَرُ',
    phonetic: 'Allāhu akbaru',
    french: 'Allah est le Plus Grand',
    defaultTarget: 33,
    virtueFr: '3e étape après chaque prière obligatoire (33 fois, ou 34 fois avant de dormir).',
    category: 'apres-priere'
  },
  {
    id: 'tahlil-100',
    titleFr: '4. Le Tahlîl (Clôture de la centaine)',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    phonetic: 'Lā ilāha illa Llāhu waḥdahu lā charīka lah, lahu l-mulku wa lahu l-ḥamdu wa huwa ‘alā kulli chay’in qadīr',
    french: 'Il n’y a de divinité digne d’adoration qu’Allah Seul, sans associé ; à Lui la royauté, à Lui la louange et Il est Omnipotent',
    defaultTarget: 1,
    virtueFr: '100e parole après les 3×33 : « Ses péchés lui sont pardonnés fussent-ils aussi nombreux que l’écume de la mer » (Muslim).',
    category: 'apres-priere'
  },
  {
    id: 'istighfar',
    titleFr: '5. L’Istighfâr (Demande de pardon)',
    arabic: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    phonetic: 'Astaghfiru Llāha wa atūbu ilayhi',
    french: 'Je demande pardon à Allah et je me repens à Lui',
    defaultTarget: 100,
    virtueFr: 'Le Prophète ﷺ demandait pardon à Allah plus de 70 à 100 fois par jour.',
    category: 'pardon-protection'
  },
  {
    id: 'subhanallahi-wabihamdihi',
    titleFr: '6. Les deux paroles légères sur la langue',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
    phonetic: 'Subḥāna Llāhi wa bi-ḥamdihi, Subḥāna Llāhi l-‘Aẓīm',
    french: 'Gloire et louange à Allah, Gloire à Allah l’Immense',
    defaultTarget: 100,
    virtueFr: '« Deux paroles légères sur la langue, lourdes dans la balance et aimées du Tout-Miséricordieux » (Al-Bukhârî & Muslim).',
    category: 'quotidien'
  },
  {
    id: 'hawqala',
    titleFr: '7. La Ḥawqala (Trésor du Paradis)',
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    phonetic: 'Lā ḥawla wa lā quwwata illā bi-Llāhi',
    french: 'Il n’y a de force ni de puissance que par Allah',
    defaultTarget: 33,
    virtueFr: '« C’est un trésor parmi les trésors du Paradis » (Al-Bukhârî & Muslim).',
    category: 'pardon-protection'
  },
  {
    id: 'salat-nabi',
    titleFr: '8. La Prière sur le Prophète ﷺ',
    arabic: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ',
    phonetic: 'Allāhumma ṣalli wa sallim ‘alā nabiyyinā Muḥammad',
    french: 'Ô Allah, accorde Ta grâce et Ta paix à notre Prophète Muhammad',
    defaultTarget: 33,
    virtueFr: '« Celui qui prie sur moi une fois, Allah prie sur lui dix fois » (Muslim).',
    category: 'quotidien'
  },
  {
    id: 'hasbunallah',
    titleFr: '9. Confiance & Sérénité (Tawakkul)',
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    phonetic: 'Ḥasbunā Llāhu wa ni‘ma l-Wakīl',
    french: 'Allah nous suffit, Il est notre Meilleur Garant',
    defaultTarget: 33,
    virtueFr: 'Parole prononcée par Ibrâhîm (paix sur lui) et par le Prophète Muhammad ﷺ face aux épreuves.',
    category: 'pardon-protection'
  }
];

export interface PostPrayerCycleState {
  totalBeads: number; // 0 to 100
  completedCycles: number;
}

export interface PostPrayerStageInfo {
  stageIndex: number; // 0, 1, 2, 3
  preset: DhikrPreset;
  currentInStage: number;
  stageTarget: number;
  isCycleComplete: boolean;
}

export function getPostPrayerStage(totalBeads: number): PostPrayerStageInfo {
  const clamped = Math.max(0, Math.min(100, totalBeads));
  if (clamped < 33) {
    return {
      stageIndex: 0,
      preset: DHIKR_PRESETS[0],
      currentInStage: clamped,
      stageTarget: 33,
      isCycleComplete: false
    };
  }
  if (clamped < 66) {
    return {
      stageIndex: 1,
      preset: DHIKR_PRESETS[1],
      currentInStage: clamped - 33,
      stageTarget: 33,
      isCycleComplete: false
    };
  }
  if (clamped < 99) {
    return {
      stageIndex: 2,
      preset: DHIKR_PRESETS[2],
      currentInStage: clamped - 66,
      stageTarget: 33,
      isCycleComplete: false
    };
  }
  return {
    stageIndex: 3,
    preset: DHIKR_PRESETS[3],
    currentInStage: clamped === 100 ? 1 : 0,
    stageTarget: 1,
    isCycleComplete: clamped === 100
  };
}

export function stepPostPrayerCycle(state: PostPrayerCycleState): PostPrayerCycleState {
  if (state.totalBeads >= 100) {
    // Restart a fresh cycle starting at bead 1
    return {
      totalBeads: 1,
      completedCycles: state.completedCycles
    };
  }
  const nextBeads = state.totalBeads + 1;
  return {
    totalBeads: nextBeads,
    completedCycles: nextBeads === 100 ? state.completedCycles + 1 : state.completedCycles
  };
}
