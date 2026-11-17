import test from 'node:test';
import assert from 'node:assert/strict';
import { QURAN_25_SURAHS, QURAN_RECITERS } from '../data/quran25SurahsData';
import {
  DHIKR_PRESETS,
  getPostPrayerStage,
  stepPostPrayerCycle
} from './tasbihLogic';
import {
  WUDU_STEPS,
  FIVE_DAILY_PRAYERS,
  SALAT_STEP_BY_STEP,
  FIVE_PILLARS_ISLAM,
  SIX_PILLARS_IMAN,
  FIQH_FIVE_RULINGS,
  FIVE_LEGAL_MAXIMS,
  FIVE_MAQASID_SHARIA
} from '../data/prayerAndReligionData';

test('QURAN_25_SURAHS contains exactly 25 surahs with complete Arabic, Phonetic, and French verses', () => {
  assert.equal(QURAN_25_SURAHS.length, 25);
  assert.equal(QURAN_25_SURAHS[0].number, 1);
  assert.equal(QURAN_25_SURAHS[1].number, 91);
  assert.equal(QURAN_25_SURAHS[24].number, 114);

  for (const surah of QURAN_25_SURAHS) {
    assert.equal(
      surah.verses.length,
      surah.versesCount,
      `Surah ${surah.number} (${surah.namePhonetic}) verse count mismatch`
    );
    for (const v of surah.verses) {
      assert.ok(v.arabic.length > 0, `Empty arabic in Surah ${surah.number}:${v.number}`);
      assert.ok(v.phonetic.length > 0, `Empty phonetic in Surah ${surah.number}:${v.number}`);
      assert.ok(v.french.length > 0, `Empty french in Surah ${surah.number}:${v.number}`);
    }
  }
});

test('Yasser Al-Dosari reciter is default and formats Surah and Ayah MP3 URLs properly', () => {
  const dossari = QURAN_RECITERS[0];
  assert.equal(dossari.id, 'dossari');
  assert.equal(
    dossari.getSurahAudioUrl(1),
    'https://server11.mp3quran.net/yasser/001.mp3'
  );
  assert.equal(
    dossari.getSurahAudioUrl(112),
    'https://server11.mp3quran.net/yasser/112.mp3'
  );
  assert.equal(
    dossari.getAyahAudioUrl(93, 5),
    'https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/093005.mp3'
  );
});

test('Tasbih post-prayer 33+33+33+1=100 cycle transitions accurately', () => {
  assert.ok(DHIKR_PRESETS.length >= 9);

  let state = { totalBeads: 0, completedCycles: 0 };
  assert.equal(getPostPrayerStage(state.totalBeads).stageIndex, 0);
  assert.equal(getPostPrayerStage(state.totalBeads).preset.id, 'subhanallah');

  // Step 33 times -> reaches stage 1 (Alhamdulillah)
  for (let i = 0; i < 33; i++) {
    state = stepPostPrayerCycle(state);
  }
  assert.equal(state.totalBeads, 33);
  assert.equal(getPostPrayerStage(state.totalBeads).stageIndex, 1);
  assert.equal(getPostPrayerStage(state.totalBeads).preset.id, 'alhamdulillah');
  assert.equal(getPostPrayerStage(state.totalBeads).currentInStage, 0);

  // Step 33 more times -> reaches 66, stage 2 (Allahu Akbar)
  for (let i = 0; i < 33; i++) {
    state = stepPostPrayerCycle(state);
  }
  assert.equal(state.totalBeads, 66);
  assert.equal(getPostPrayerStage(state.totalBeads).stageIndex, 2);
  assert.equal(getPostPrayerStage(state.totalBeads).preset.id, 'allahuakbar');

  // Step 33 more times -> reaches 99, stage 3 (Tahlil 100th)
  for (let i = 0; i < 33; i++) {
    state = stepPostPrayerCycle(state);
  }
  assert.equal(state.totalBeads, 99);
  assert.equal(getPostPrayerStage(state.totalBeads).stageIndex, 3);
  assert.equal(getPostPrayerStage(state.totalBeads).preset.id, 'tahlil-100');
  assert.equal(getPostPrayerStage(state.totalBeads).isCycleComplete, false);

  // 100th bead completes the cycle
  state = stepPostPrayerCycle(state);
  assert.equal(state.totalBeads, 100);
  assert.equal(state.completedCycles, 1);
  assert.equal(getPostPrayerStage(state.totalBeads).isCycleComplete, true);

  // Next click starts a new cycle at bead 1
  state = stepPostPrayerCycle(state);
  assert.equal(state.totalBeads, 1);
  assert.equal(state.completedCycles, 1);
});

test('Prayer and Islamic Principles courses contain complete 3-in-1 triads', () => {
  assert.equal(WUDU_STEPS.length, 8);
  assert.equal(FIVE_DAILY_PRAYERS.length, 5);
  const totalFard = FIVE_DAILY_PRAYERS.reduce((acc, p) => acc + p.fardRakats, 0);
  assert.equal(totalFard, 17);
  assert.equal(SALAT_STEP_BY_STEP.length, 11);
  assert.equal(FIVE_PILLARS_ISLAM.length, 5);
  assert.equal(SIX_PILLARS_IMAN.length, 6);
  assert.equal(FIQH_FIVE_RULINGS.length, 5);
  assert.equal(FIVE_LEGAL_MAXIMS.length, 5);
  assert.equal(FIVE_MAQASID_SHARIA.length, 5);
});

import { COMPLETE_PDF_DOCUMENTS } from './pdfGenerator';
import {
  A2_PRONOUN_CONJUGATION_TABLE,
  A2_ESSENTIAL_VERBS_8,
  A2_NEGATION_RULES,
  PDF7_CONJUGATION_QUIZ,
  A2_LOGICAL_CONNECTORS,
  A2_REAL_LIFE_DIALOGUES,
  PDF8_CONVERSATIONS_QUIZ,
  A2_READING_TEXTS,
  A2_ROOT_SYSTEM_TABLE,
  A2_ARABIC_PROVERBS,
  PDF9_READING_QUIZ
} from '../data/arabicA2NewPdfsData';
import {
  PDF10_PRIERE_QUIZ,
  PDF11_RESUME_ISLAM_QUIZ
} from '../data/prayerAndReligionData';

test('COMPLETE_PDF_DOCUMENTS contains 11 complete 2-page PDFs (22 pages A4) including Priere, Resume Islam, and Alphabet', () => {
  assert.equal(COMPLETE_PDF_DOCUMENTS.length, 11);
  const totalPages = COMPLETE_PDF_DOCUMENTS.reduce((acc, doc) => acc + doc.pageCount, 0);
  assert.equal(totalPages, 22);

  const ids = COMPLETE_PDF_DOCUMENTS.map((d) => d.id);
  assert.ok(ids.includes('pdf-alphabet'));
  assert.ok(ids.includes('pdf-priere-salat'));
  assert.ok(ids.includes('pdf-resume-islam'));

  assert.equal(A2_PRONOUN_CONJUGATION_TABLE.length, 10);
  assert.equal(A2_ESSENTIAL_VERBS_8.length, 8);
  assert.equal(A2_NEGATION_RULES.length, 5);
  assert.equal(PDF7_CONJUGATION_QUIZ.length, 6);

  assert.equal(A2_LOGICAL_CONNECTORS.length, 10);
  assert.equal(A2_REAL_LIFE_DIALOGUES.length, 2);
  assert.equal(PDF8_CONVERSATIONS_QUIZ.length, 6);

  assert.equal(A2_READING_TEXTS.length, 3);
  assert.equal(A2_ROOT_SYSTEM_TABLE.length, 6);
  assert.equal(A2_ARABIC_PROVERBS.length, 6);
  assert.equal(PDF9_READING_QUIZ.length, 6);

  assert.equal(PDF10_PRIERE_QUIZ.length, 6);
  assert.equal(PDF11_RESUME_ISLAM_QUIZ.length, 6);
});

import fs from 'node:fs';
import path from 'node:path';
import {
  SHARED_ORIGINAL_PDF_DOCUMENTS,
  ORIGINAL_A1_THREE_DIALOGUES,
  TWENTY_FIVE_PROPHETS_QURAN,
  QUESTIONNAIRE_ISLAM_9_QUESTIONS
} from '../data/sharedOriginalPdfsData';

test('SHARED_ORIGINAL_PDF_DOCUMENTS contains the 4 untouched student PDFs categorized into Arabe (1) and Religion (3)', () => {
  assert.equal(SHARED_ORIGINAL_PDF_DOCUMENTS.length, 4);

  const arabeDocs = SHARED_ORIGINAL_PDF_DOCUMENTS.filter((d) => d.domain === 'arabe');
  const religionDocs = SHARED_ORIGINAL_PDF_DOCUMENTS.filter((d) => d.domain === 'religion');
  assert.equal(arabeDocs.length, 1);
  assert.equal(religionDocs.length, 3);

  for (const doc of SHARED_ORIGINAL_PDF_DOCUMENTS) {
    const filePath = path.join(process.cwd(), 'public', 'assets', 'aistudio', doc.assetFileName);
    assert.ok(fs.existsSync(filePath), `Missing original PDF file at ${filePath}`);

    for (let p = 1; p <= doc.pageCount; p++) {
      const pageImgPath = path.join(
        process.cwd(),
        'public',
        'assets',
        'original-pdf-pages',
        `${doc.pageImagePrefix}${p}.png`
      );
      assert.ok(fs.existsSync(pageImgPath), `Missing rendered page image at ${pageImgPath}`);
    }
  }

  assert.equal(ORIGINAL_A1_THREE_DIALOGUES.length, 3);
  assert.equal(TWENTY_FIVE_PROPHETS_QURAN.length, 25);
  assert.equal(QUESTIONNAIRE_ISLAM_9_QUESTIONS.length, 9);
});

import { QURAN_LARGE_PDF_PACKS } from './pdfGenerator';

test('QURAN_LARGE_PDF_PACKS covers all 25 Surahs across 10 dedicated large-print PDF booklets', () => {
  assert.equal(QURAN_LARGE_PDF_PACKS.length, 10);

  const allCoveredSurahs = QURAN_LARGE_PDF_PACKS.flatMap((p) => p.surahNumbers);
  assert.equal(allCoveredSurahs.length, 25);
  assert.equal(new Set(allCoveredSurahs).size, 25);

  // Verify specific groupings requested by the user
  const pack1 = QURAN_LARGE_PDF_PACKS.find((p) => p.id === 'coran-pdf-fatiha-falaq-nas')!;
  assert.deepEqual(pack1.surahNumbers, [1, 113, 114]);

  const pack2 = QURAN_LARGE_PDF_PACKS.find((p) => p.id === 'coran-pdf-kafirun-kawthar-nasr')!;
  assert.deepEqual(pack2.surahNumbers, [109, 108, 110]);

  const pack3 = QURAN_LARGE_PDF_PACKS.find((p) => p.id === 'coran-pdf-ikhlas-masad-maun')!;
  assert.deepEqual(pack3.surahNumbers, [112, 111, 107]);

  const packChams = QURAN_LARGE_PDF_PACKS.find((p) => p.id === 'coran-pdf-chams')!;
  assert.deepEqual(packChams.surahNumbers, [91]);
});


