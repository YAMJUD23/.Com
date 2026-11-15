import { ArabicLetter, ArabicTriad, QuizQuestion } from '../data/alphabetData';
import { VocabCategory, VocabItem } from '../data/vocabularyData';

export type SyllableVowelKey =
  | 'fatha'
  | 'kasra'
  | 'damma'
  | 'madd-alif'
  | 'madd-waw'
  | 'madd-ya'
  | 'tanwin-un'
  | 'tanwin-an'
  | 'tanwin-in';

export interface CombinedSyllableResult {
  arabicSyllable: string;
  phoneticSyllable: string;
  frenchDescription: string;
  durationLabel: string;
  exampleTriad: ArabicTriad;
}

export function validateTriadCompleteness(triad: ArabicTriad): boolean {
  return (
    typeof triad.arabic === 'string' &&
    triad.arabic.trim().length > 0 &&
    typeof triad.phonetic === 'string' &&
    triad.phonetic.trim().length > 0 &&
    typeof triad.french === 'string' &&
    triad.french.trim().length > 0
  );
}

export function filterAlphabetByGroup(
  letters: ArabicLetter[],
  group: 1 | 2 | 3 | 4 | 'all',
  searchQuery = ''
): ArabicLetter[] {
  const q = searchQuery.trim().toLowerCase();
  return letters.filter((letter) => {
    const matchesGroup = group === 'all' || letter.group === group;
    if (!matchesGroup) return false;
    if (!q) return true;
    return (
      letter.arabic.includes(q) ||
      letter.namePhonetic.toLowerCase().includes(q) ||
      letter.nameFrench.toLowerCase().includes(q) ||
      letter.exampleWord.phonetic.toLowerCase().includes(q) ||
      letter.exampleWord.french.toLowerCase().includes(q)
    );
  });
}

function getBaseConsonantPhonetic(letter: ArabicLetter): string {
  const map: Record<string, string> = {
    alif: '',
    ba: 'B',
    ta: 'T',
    tha: 'Th',
    jim: 'J',
    ha: 'Ḥ',
    kha: 'Kh',
    dal: 'D',
    dhal: 'Dh',
    ra: 'R',
    zay: 'Z',
    sin: 'S',
    shin: 'Ch',
    sad: 'Ṣ',
    dad: 'Ḍ',
    ta_emph: 'Ṭ',
    dha_emph: 'Ẓ',
    ayn: '‘',
    ghayn: 'Gh',
    fa: 'F',
    qaf: 'Q',
    kaf: 'K',
    lam: 'L',
    mim: 'M',
    nun: 'N',
    ha_light: 'H',
    waw: 'W',
    ya: 'Y'
  };
  return map[letter.id] ?? letter.namePhonetic.slice(0, 1);
}

export function buildSyllableCombination(
  letter: ArabicLetter,
  vowelKey: SyllableVowelKey
): CombinedSyllableResult {
  const basePhonetic = getBaseConsonantPhonetic(letter);
  const baseChar = letter.id === 'alif' ? 'أ' : letter.arabic;

  switch (vowelKey) {
    case 'fatha':
      return {
        arabicSyllable: `${baseChar}\u064E`,
        phoneticSyllable: `${basePhonetic}a`,
        frenchDescription: `Son court « ${basePhonetic}a » (Fatḥa — ouverture sur 1 temps)`,
        durationLabel: '1 temps (Voyelle courte)',
        exampleTriad: letter.exampleWord
      };
    case 'kasra':
      return {
        arabicSyllable: `${letter.id === 'alif' ? 'إ' : baseChar}\u0650`,
        phoneticSyllable: `${basePhonetic}i`,
        frenchDescription: `Son court « ${basePhonetic}i » (Kasra — sourire sur 1 temps)`,
        durationLabel: '1 temps (Voyelle courte)',
        exampleTriad: letter.exampleWord
      };
    case 'damma':
      return {
        arabicSyllable: `${baseChar}\u064F`,
        phoneticSyllable: `${basePhonetic}u`,
        frenchDescription: `Son court « ${basePhonetic}u / ${basePhonetic}ou » (Ḍamma — sur 1 temps)`,
        durationLabel: '1 temps (Voyelle courte)',
        exampleTriad: letter.exampleWord
      };
    case 'madd-alif':
      return {
        arabicSyllable: letter.id === 'alif' ? 'آ' : letter.id === 'lam' ? 'لَا' : `${baseChar}\u064Eا`,
        phoneticSyllable: `${basePhonetic}ā`,
        frenchDescription: `Son long « ${basePhonetic}ā » prolongé 2 temps avec Alif`,
        durationLabel: '2 temps (Voyelle longue)',
        exampleTriad: letter.secondExample
      };
    case 'madd-waw':
      return {
        arabicSyllable: `${baseChar}\u064Fو`,
        phoneticSyllable: `${basePhonetic}ū`,
        frenchDescription: `Son long « ${basePhonetic}ū / ${basePhonetic}oû » prolongé 2 temps avec Wāw`,
        durationLabel: '2 temps (Voyelle longue)',
        exampleTriad: letter.secondExample
      };
    case 'madd-ya':
      return {
        arabicSyllable: `${letter.id === 'alif' ? 'إ' : baseChar}\u0650ي`,
        phoneticSyllable: `${basePhonetic}ī`,
        frenchDescription: `Son long « ${basePhonetic}ī / ${basePhonetic}î » prolongé 2 temps avec Yā’`,
        durationLabel: '2 temps (Voyelle longue)',
        exampleTriad: letter.secondExample
      };
    case 'tanwin-un':
      return {
        arabicSyllable: `${baseChar}\u064C`,
        phoneticSyllable: `${basePhonetic}un`,
        frenchDescription: `Terminaison indéfinie « -${basePhonetic.toLowerCase()}un » (Dammatayn)`,
        durationLabel: 'Fin de nom indéfini',
        exampleTriad: letter.exampleWord
      };
    case 'tanwin-an':
      return {
        arabicSyllable: `${baseChar}\u064Bا`,
        phoneticSyllable: `${basePhonetic}an`,
        frenchDescription: `Terminaison indéfinie « -${basePhonetic.toLowerCase()}an » (Fatḥatayn)`,
        durationLabel: 'Fin de nom indéfini',
        exampleTriad: letter.exampleWord
      };
    case 'tanwin-in':
      return {
        arabicSyllable: `${letter.id === 'alif' ? 'إ' : baseChar}\u064D`,
        phoneticSyllable: `${basePhonetic}in`,
        frenchDescription: `Terminaison indéfinie « -${basePhonetic.toLowerCase()}in » (Kasratayn)`,
        durationLabel: 'Fin de nom indéfini',
        exampleTriad: letter.exampleWord
      };
  }
}

export function filterVocabulary(
  items: VocabItem[],
  options: {
    tier?: 100 | 200 | 300 | 'all';
    category?: VocabCategory | 'all';
    searchQuery?: string;
  }
): VocabItem[] {
  const { tier = 'all', category = 'all', searchQuery = '' } = options;
  const q = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    // When user picks Palier 100, show tier 100.
    // When user picks Palier 200, show tier 200 (or cumulative if 'all').
    if (tier !== 'all' && item.tier !== tier) {
      return false;
    }
    if (category !== 'all' && item.category !== category) {
      return false;
    }
    if (!q) return true;
    return (
      item.arabic.includes(q) ||
      item.phonetic.toLowerCase().includes(q) ||
      item.french.toLowerCase().includes(q) ||
      item.example.arabic.includes(q) ||
      item.example.phonetic.toLowerCase().includes(q) ||
      item.example.french.toLowerCase().includes(q)
    );
  });
}

export interface QuizScoreResult {
  correctCount: number;
  totalCount: number;
  answeredCount: number;
  percentage: number;
  passed: boolean;
  badgeLabel: string;
  encouragementMessage: string;
}

export function calculateQuizScore(
  questions: QuizQuestion[],
  selectedAnswers: Record<string, number>
): QuizScoreResult {
  const totalCount = questions.length;
  if (totalCount === 0) {
    return {
      correctCount: 0,
      totalCount: 0,
      answeredCount: 0,
      percentage: 0,
      passed: false,
      badgeLabel: 'Aucun quiz',
      encouragementMessage: ''
    };
  }

  let correctCount = 0;
  let answeredCount = 0;

  for (const q of questions) {
    const chosen = selectedAnswers[q.id];
    if (typeof chosen === 'number') {
      answeredCount += 1;
      if (chosen === q.correctIndex) {
        correctCount += 1;
      }
    }
  }

  const percentage = Math.round((correctCount / totalCount) * 100);
  const passed = percentage >= 60;

  let badgeLabel = 'À consolider';
  let encouragementMessage =
    'Continue doucement ! Relis la fiche PDF de la section puis retente le quiz.';

  if (percentage === 100) {
    badgeLabel = 'Maîtrise Excellente · Mā chā’a Llāh';
    encouragementMessage =
      'Bravo ! Tu as un sans-faute sur cette section. Tu peux passer sereinement à l’étape suivante.';
  } else if (percentage >= 80) {
    badgeLabel = 'Très Bon Niveau Validé';
    encouragementMessage =
      'Très belle réussite ! Les bases de cette section sont bien acquises.';
  } else if (percentage >= 60) {
    badgeLabel = 'Section Validée';
    encouragementMessage =
      'Bon travail ! Tu as validé l’essentiel. Jette un coup d’œil aux explications pour viser le 100 %.';
  }

  return {
    correctCount,
    totalCount,
    answeredCount,
    percentage,
    passed,
    badgeLabel,
    encouragementMessage
  };
}
