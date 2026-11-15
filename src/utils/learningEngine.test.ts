import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ARABIC_ALPHABET,
  ALPHABET_QUIZ,
  NON_CONNECTING_LETTERS
} from '../data/alphabetData';
import {
  VOWELS_DATA,
  MINIMAL_VOWEL_PAIRS,
  GRAMMAR_A1_SECTIONS,
  VOWELS_QUIZ,
  GRAMMAR_A1_QUIZ
} from '../data/vowelsAndGrammarData';
import { VOCABULARY_ITEMS, VOCABULARY_QUIZ } from '../data/vocabularyData';
import {
  SURAHS_DATA,
  PDF_COURSE_SHEETS,
  SURAHS_QUIZ
} from '../data/surahsAndPdfsData';
import {
  validateTriadCompleteness,
  filterAlphabetByGroup,
  buildSyllableCombination,
  filterVocabulary,
  calculateQuizScore
} from './learningEngine';

test('all 28 Arabic letters have complete Arabic + Phonetic + French triads', () => {
  assert.equal(ARABIC_ALPHABET.length, 28);
  for (const letter of ARABIC_ALPHABET) {
    assert.equal(
      validateTriadCompleteness(letter.exampleWord),
      true,
      `Missing triad on letter ${letter.id}`
    );
    assert.equal(
      validateTriadCompleteness(letter.secondExample),
      true,
      `Missing secondExample triad on letter ${letter.id}`
    );
  }
  for (const nc of NON_CONNECTING_LETTERS) {
    assert.equal(validateTriadCompleteness(nc), true);
  }
});

test('all vowels, minimal pairs, grammar rules, vocabulary, surahs, and PDF sheets respect the Arabic + Phonetic + French triad rule', () => {
  for (const v of VOWELS_DATA) {
    assert.ok(v.examples.length >= 3);
    for (const ex of v.examples) {
      assert.equal(validateTriadCompleteness(ex), true);
    }
  }

  for (const pair of MINIMAL_VOWEL_PAIRS) {
    assert.equal(validateTriadCompleteness(pair.shortWord), true);
    assert.equal(validateTriadCompleteness(pair.longWord), true);
  }

  for (const sec of GRAMMAR_A1_SECTIONS) {
    assert.equal(validateTriadCompleteness(sec.keyTerm), true);
    for (const item of sec.items) {
      assert.equal(validateTriadCompleteness(item.triad), true);
    }
  }

  for (const voc of VOCABULARY_ITEMS) {
    assert.equal(
      validateTriadCompleteness({
        arabic: voc.arabic,
        phonetic: voc.phonetic,
        french: voc.french
      }),
      true
    );
    assert.equal(validateTriadCompleteness(voc.example), true);
  }

  for (const surah of SURAHS_DATA) {
    assert.ok(surah.verses.length >= 3);
    for (const verse of surah.verses) {
      assert.equal(
        validateTriadCompleteness({
          arabic: verse.arabic,
          phonetic: verse.phonetic,
          french: verse.french
        }),
        true
      );
    }
    for (const kw of surah.keyWords) {
      assert.equal(validateTriadCompleteness(kw), true);
    }
  }

  assert.equal(PDF_COURSE_SHEETS.length, 12);
  for (const pdf of PDF_COURSE_SHEETS) {
    assert.equal(validateTriadCompleteness(pdf.arabicHeader), true);
    for (const row of pdf.triadTable) {
      assert.equal(validateTriadCompleteness(row), true);
    }
  }
});

test('filterAlphabetByGroup filters by progressive stage and search query', () => {
  const group1 = filterAlphabetByGroup(ARABIC_ALPHABET, 1);
  assert.equal(group1.length, 6); // ا ب ت ث ن ي
  const searchMosquee = filterAlphabetByGroup(ARABIC_ALPHABET, 'all', 'baytun');
  assert.equal(searchMosquee.length, 1);
  assert.equal(searchMosquee[0].id, 'ba');
});

test('buildSyllableCombination generates accurate short and long vowel syllables', () => {
  const ba = ARABIC_ALPHABET.find((l) => l.id === 'ba')!;
  const shortA = buildSyllableCombination(ba, 'fatha');
  assert.equal(shortA.phoneticSyllable, 'Ba');
  assert.equal(shortA.durationLabel, '1 temps (Voyelle courte)');

  const longA = buildSyllableCombination(ba, 'madd-alif');
  assert.equal(longA.phoneticSyllable, 'Bā');
  assert.equal(longA.durationLabel, '2 temps (Voyelle longue)');
  assert.equal(validateTriadCompleteness(longA.exampleTriad), true);
});

test('filterVocabulary filters across Palier 100, 200, 300 and thematic categories', () => {
  const tier100 = filterVocabulary(VOCABULARY_ITEMS, { tier: 100 });
  assert.ok(tier100.length > 0);
  assert.ok(tier100.every((item) => item.tier === 100));

  const tier200 = filterVocabulary(VOCABULARY_ITEMS, { tier: 200 });
  assert.ok(tier200.length > 0);
  assert.ok(tier200.every((item) => item.tier === 200));

  const tier300 = filterVocabulary(VOCABULARY_ITEMS, { tier: 300 });
  assert.ok(tier300.length > 0);
  assert.ok(tier300.every((item) => item.tier === 300));

  const searchMerci = filterVocabulary(VOCABULARY_ITEMS, {
    searchQuery: 'Jazāka'
  });
  assert.equal(searchMerci.length, 1);
});

test('calculateQuizScore computes score, pass status, and badge accurately', () => {
  const allCorrect: Record<string, number> = {};
  for (const q of ALPHABET_QUIZ) {
    allCorrect[q.id] = q.correctIndex;
  }
  const perfectResult = calculateQuizScore(ALPHABET_QUIZ, allCorrect);
  assert.equal(perfectResult.percentage, 100);
  assert.equal(perfectResult.passed, true);

  const emptyResult = calculateQuizScore(VOWELS_QUIZ, {});
  assert.equal(emptyResult.percentage, 0);
  assert.equal(emptyResult.passed, false);

  assert.ok(GRAMMAR_A1_QUIZ.length >= 5);
  assert.ok(VOCABULARY_QUIZ.length >= 5);
  assert.ok(SURAHS_QUIZ.length >= 5);
});

import {
  VOCAB_200_SUBCATEGORIES,
  ALL_200_WORDS,
  VOCAB_200_QUIZ
} from '../data/vocab200Categorized';
import {
  THREE_LETTER_READING_WORDS,
  LUNAR_LETTERS_TABLE,
  SOLAR_LETTERS_TABLE,
  SENTENCE_BUILDING_FORMULAS,
  REAL_LIFE_DIALOGUES_A1,
  ALL_12_SURAHS
} from '../data/completeCourseData';

test('complete PDF datasets have 200 categorized words (with 22 religion words), 9 subcategories, sentence formulas, dialogues, and full triads', () => {
  assert.equal(VOCAB_200_SUBCATEGORIES.length, 9);
  assert.equal(ALL_200_WORDS.length, 200);

  const religionCat = VOCAB_200_SUBCATEGORIES.find((c) => c.id === 'cat-religion')!;
  assert.equal(religionCat.words.length, 22);

  for (const cat of VOCAB_200_SUBCATEGORIES) {
    assert.equal(validateTriadCompleteness(cat.concreteSentence), true);
  }

  for (const w of ALL_200_WORDS) {
    assert.equal(
      validateTriadCompleteness({
        arabic: w.arabic,
        phonetic: w.phonetic,
        french: w.french
      }),
      true,
      `Missing triad on word #${w.num}`
    );
  }

  assert.equal(VOCAB_200_QUIZ.length, 6);
  assert.equal(SENTENCE_BUILDING_FORMULAS.length, 4);
  assert.equal(REAL_LIFE_DIALOGUES_A1.length, 2);
  assert.equal(THREE_LETTER_READING_WORDS.length, 28);
  assert.equal(LUNAR_LETTERS_TABLE.length, 14);
  assert.equal(SOLAR_LETTERS_TABLE.length, 14);
  assert.equal(ALL_12_SURAHS.length, 12);

  for (const s of ALL_12_SURAHS) {
    assert.ok(s.verses.length >= 3);
    for (const v of s.verses) {
      assert.equal(
        validateTriadCompleteness({
          arabic: v.arabic,
          phonetic: v.phonetic,
          french: v.french
        }),
        true
      );
    }
  }
});

