import {
  ARABIC_ALPHABET,
  ALPHABET_QUIZ,
  QuizQuestion
} from '../data/alphabetData';
import {
  SKELETON_FAMILIES,
  READING_MECHANICS_GUIDES,
  THREE_LETTER_READING_WORDS,
  EXTENDED_MINIMAL_PAIRS,
  WORD_DECOMPOSITIONS,
  SENTENCE_BUILDING_FORMULAS,
  REAL_LIFE_DIALOGUES_A1,
  LUNAR_LETTERS_TABLE,
  SOLAR_LETTERS_TABLE,
  PRONOUNS_AND_POSSESSIVES_TABLE,
  ESSENTIAL_SENTENCES_A1,
  ALL_12_SURAHS
} from '../data/completeCourseData';
import {
  VOCAB_200_SUBCATEGORIES,
  VOCAB_200_QUIZ
} from '../data/vocab200Categorized';
import {
  VOWELS_DATA,
  VOWELS_QUIZ,
  GRAMMAR_A1_QUIZ
} from '../data/vowelsAndGrammarData';
import { SURAHS_QUIZ } from '../data/surahsAndPdfsData';
import {
  A2_PRONOUN_CONJUGATION_TABLE,
  A2_ESSENTIAL_VERBS_8,
  A2_NEGATION_RULES,
  A2_CONJUGATION_SENTENCES,
  PDF7_CONJUGATION_QUIZ,
  A2_LOGICAL_CONNECTORS,
  A2_REAL_LIFE_DIALOGUES,
  A2_TIME_AND_NUMBERS,
  PDF8_CONVERSATIONS_QUIZ,
  A2_READING_TEXTS,
  A2_ROOT_SYSTEM_TABLE,
  A2_ARABIC_PROVERBS,
  PDF9_READING_QUIZ
} from '../data/arabicA2NewPdfsData';
import {
  WUDU_STEPS,
  WUDU_NULLIFIERS,
  FIVE_DAILY_PRAYERS,
  SALAT_STEP_BY_STEP,
  FIVE_PILLARS_ISLAM,
  SIX_PILLARS_IMAN,
  FIQH_FIVE_RULINGS,
  FIVE_LEGAL_MAXIMS,
  FIVE_MAQASID_SHARIA,
  HIJRI_MONTHS,
  DAILY_DUAS,
  PDF10_PRIERE_QUIZ,
  PDF11_RESUME_ISLAM_QUIZ
} from '../data/prayerAndReligionData';

export function speakArabicText(arabicText: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(arabicText);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.65;
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find((v) => v.lang.toLowerCase().startsWith('ar'));
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }
    window.speechSynthesis.speak(utterance);
  } catch {
    // Ignore speech synthesis errors on unsupported environments
  }
}

export type CompletePdfDocId =
  | 'pdf-alphabet'
  | 'pdf-voyelles'
  | 'pdf-grammaire'
  | 'pdf-vocab300'
  | 'pdf-sourates'
  | 'pdf-cahier-quiz'
  | 'pdf-conjugaison-a2'
  | 'pdf-conversations-a2'
  | 'pdf-textes-lecture-a2'
  | 'pdf-priere-salat'
  | 'pdf-resume-islam';

export interface CompletePdfDocMeta {
  id: CompletePdfDocId;
  code: string;
  title: string;
  subtitle: string;
  pageCount: number;
  summary: string;
}

export const COMPLETE_PDF_DOCUMENTS: CompletePdfDocMeta[] = [
  {
    id: 'pdf-alphabet',
    code: 'ALPHABET',
    title: 'Alphabet Arabe & Formes d’Écriture',
    subtitle: 'Les 28 lettres, familles de squelettes, 4 positions, 16 mots soudés + QCM',
    pageCount: 2,
    summary:
      'Tableau complet des 28 lettres arabes, familles de squelettes, 6 lettres non-liantes, 16 mots soudés et QCM.'
  },
  {
    id: 'pdf-voyelles',
    code: 'VOYELLES',
    title: 'Voyelles, Syllabes & Lecture Fluide',
    subtitle: 'Voyelles courtes/longues, Sukūn, Chadda, Tanwīn, grille des 28 lettres + QCM',
    pageCount: 2,
    summary:
      'Règles de vocalisation (Sukūn, Chadda, Tanwīn), les 11 signes de lecture, grille des 28 lettres, 28 verbes, 16 paires et QCM.'
  },
  {
    id: 'pdf-grammaire',
    code: 'GRAMMAIRE',
    title: 'Grammaire, Pronoms & Construction de Phrases',
    subtitle: 'Construire une phrase, « J’ai / Il y a », Lettres Lunaires & Solaires, Pronoms + QCM',
    pageCount: 2,
    summary:
      'Méthode concrète pour construire ses phrases (sans verbe être, possession, pronoms, conjugaison passé/présent, dialogues réels) et QCM.'
  },
  {
    id: 'pdf-vocab300',
    code: 'VOCABULAIRE',
    title: 'Lexique Essentiel : 200 Mots par Thème',
    subtitle: '200 mots indispensables classés en sous-catégories thématiques + QCM',
    pageCount: 2,
    summary:
      'Organisation claire par thèmes : Salutations, Mots-outils, Famille, Maison & Ville, Nourriture & Corps, Temps, Adjectifs, Verbes et Religion + QCM.'
  },
  {
    id: 'pdf-sourates',
    code: 'SOURATES',
    title: 'Livret des 10 Sourates Courtes Essentielles',
    subtitle: 'Al-Fātiḥa & 9 sourates courtes (Arabe vocalisé · Phonétique · Traduction) + QCM',
    pageCount: 2,
    summary:
      'Les 10 sourates essentielles sur 2 pages A4 en grands caractères : texte arabe vocalisé, transcription phonétique, traduction française et QCM.'
  },
  {
    id: 'pdf-cahier-quiz',
    code: 'EXERCICES',
    title: 'Cahier d’Exercices & Examen Bilan',
    subtitle: 'Exercices pratiques à compléter + Grand QCM Bilan de fin de niveau',
    pageCount: 2,
    summary:
      'Cahier d’exercices pratiques (écriture attachée, traduction de phrases, pronoms/verbes, questions du quotidien) et QCM final.'
  },
  {
    id: 'pdf-conjugaison-a2',
    code: 'CONJUGAISON',
    title: 'Conjugaison aux 4 Temps & Négations',
    subtitle: '10 pronoms, Passé / Présent / Futur / Impératif, verbes piliers & négations + QCM',
    pageCount: 2,
    summary:
      'Tableaux complets de conjugaison aux 4 temps (Māḍī, Muḍāri‘, Mustaqbal, Amr), particules de négation (Lā, Mā, Lam, Lan, Laysa), phrases modèles et QCM.'
  },
  {
    id: 'pdf-conversations-a2',
    code: 'EXPRESSION',
    title: 'Connecteurs Logiques, Heure & Conversations',
    subtitle: 'Connecteurs logiques, dire l’heure, nombres (1–1000), dialogues pratiques + QCM',
    pageCount: 2,
    summary:
      'Outils d’expression : mots de liaison (parce que, mais, avant de, après que, bien que), lire l’heure exacte, nombres et dialogues pratiques complets + QCM.'
  },
  {
    id: 'pdf-textes-lecture-a2',
    code: 'LECTURE',
    title: 'Textes Suivis, Racines & Proverbes Arabes',
    subtitle: 'Textes suivis vocalisés, système des racines de 3 lettres (K-T-B, ‘-L-M...) & proverbes + QCM',
    pageCount: 2,
    summary:
      'Lecture fluide : textes suivis entièrement vocalisés avec traduction ligne par ligne, secret des racines arabes de 3 lettres, proverbes célèbres et QCM.'
  },
  {
    id: 'pdf-priere-salat',
    code: 'PRIÈRE',
    title: 'Guide Complet des Ablutions & de la Prière',
    subtitle: 'Les étapes des Ablutions (Wuḍū’), les 5 Prières, la Ṣalāt pas à pas (Tachahhud) + QCM',
    pageCount: 2,
    summary:
      'Support complet de la Prière et des Ablutions : étapes du Wuḍū’, annulatifs, tableau des 5 prières et déroulement de la Ṣalāt avec formules en arabe vocalisé, phonétique, français et QCM.'
  },
  {
    id: 'pdf-resume-islam',
    code: 'FONDEMENTS',
    title: 'Synthèse des Fondements de l’Islam & du Fiqh',
    subtitle: 'Piliers de l’Islam et de la Foi, Tawḥīd, Statuts du Fiqh, Maximes, Maqāṣid & Invocations + QCM',
    pageCount: 2,
    summary:
      'Synthèse de l’Islam : Piliers de l’Islam, Piliers de la Foi, dimensions du Tawḥīd, statuts du Fiqh, maximes juridiques, Maqāṣid, mois hégiriens, invocations et QCM.'
  }
];

// High-resolution A4 canvas (2x scale = 2480 x 3508 px = 300 DPI print quality!)
const SCALE = 2;
const BASE_W = 1240;
const BASE_H = 1754;
const PAGE_W = Math.round(BASE_W * SCALE);
const PAGE_H = Math.round(BASE_H * SCALE);
const MARGIN_X = 16;
const CONTENT_W = BASE_W - MARGIN_X * 2; // 1208 px usable width!

function createA4Canvas(
  docCode: string,
  docTitle: string,
  pageNum: number,
  totalPages: number
): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = PAGE_W;
  canvas.height = PAGE_H;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(SCALE, SCALE);

  // Crisp White Page
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, BASE_W, BASE_H);

  // Compact Sky-Blue Top Header (56px tall to maximize content area & font sizes)
  ctx.fillStyle = '#0284C7';
  ctx.fillRect(0, 0, BASE_W, 56);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 21px "Outfit", sans-serif';
  ctx.fillText(`${docCode} — ${docTitle}`, MARGIN_X, 36, BASE_W - 190);

  // Page badge on right
  ctx.fillStyle = '#0369A1';
  ctx.fillRect(BASE_W - 164, 10, 148, 36);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '700 18px "IBM Plex Mono", monospace';
  ctx.fillText(`PAGE ${pageNum} / ${totalPages}`, BASE_W - 148, 34);

  // Compact Footer (bottom 22px)
  ctx.fillStyle = '#334155';
  ctx.font = '600 14.5px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    `Programme Complet d’Arabe Littéraire (Niveau A2) — Arabe vocalisé + Phonétique + Français — ${docCode} (Page ${pageNum}/${totalPages})`,
    MARGIN_X,
    BASE_H - 8,
    CONTENT_W
  );

  return { canvas, ctx };
}

function drawQuizBlockOnCanvas(
  ctx: CanvasRenderingContext2D,
  quizTitle: string,
  questions: QuizQuestion[],
  startY: number
): void {
  const boxX = MARGIN_X;
  const boxW = CONTENT_W;
  const maxQuestions = Math.min(questions.length, 4);
  const blockH = BASE_H - 28 - startY;

  ctx.fillStyle = '#F0F9FF';
  ctx.fillRect(boxX, startY, boxW, blockH);
  ctx.strokeStyle = '#0284C7';
  ctx.lineWidth = 2;
  ctx.strokeRect(boxX, startY, boxW, blockH);

  ctx.fillStyle = '#0369A1';
  ctx.fillRect(boxX, startY, boxW, 32);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 17px "Outfit", sans-serif';
  ctx.fillText(
    `QCM D’ÉVALUATION — ${quizTitle.toUpperCase()} (COCHER LA BONNE RÉPONSE)`,
    boxX + 12,
    startY + 22,
    boxW - 24
  );

  const colW = (boxW - 20) / 2;
  const rowH = (blockH - 68) / 2;

  for (let i = 0; i < maxQuestions; i++) {
    const q = questions[i];
    const col = i % 2;
    const row = Math.floor(i / 2);
    const qx = boxX + 6 + col * (colW + 8);
    const qy = startY + 38 + row * rowH;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(qx, qy, colW, rowH - 6);
    ctx.strokeStyle = '#94A3B8';
    ctx.lineWidth = 1;
    ctx.strokeRect(qx, qy, colW, rowH - 6);

    ctx.fillStyle = '#0F172A';
    ctx.font = '700 15.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`Q${i + 1}. ${q.question}`, qx + 10, qy + 22, colW - 20);

    for (let o = 0; o < Math.min(q.options.length, 3); o++) {
      ctx.fillStyle = '#0F172A';
      ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(
        `☐ ${String.fromCharCode(65 + o)}) ${q.options[o]}`,
        qx + 12,
        qy + 46 + o * 23,
        colW - 24
      );
    }
  }

  // Student Name & Teacher Grading line (NO answer key printed!)
  ctx.fillStyle = '#0369A1';
  ctx.font = '700 15px "IBM Plex Mono", monospace';
  ctx.fillText(
    `Nom & Prénom de l’élève : .....................................................   Date : .... / .... / 20....   Note : ..... / ${maxQuestions}`,
    boxX + 12,
    startY + blockH - 9,
    boxW - 24
  );
}

function drawSectionBar(
  ctx: CanvasRenderingContext2D,
  title: string,
  y: number,
  darkVariant = false
): number {
  ctx.fillStyle = darkVariant ? '#075985' : '#0369A1';
  ctx.fillRect(MARGIN_X, y, CONTENT_W, 32);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 17px "Outfit", sans-serif';
  ctx.fillText(title, MARGIN_X + 12, y + 22, CONTENT_W - 24);
  return y + 38;
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, currentY, maxWidth);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line.trim()) {
    ctx.fillText(line.trim(), x, currentY, maxWidth);
  }
  return currentY + lineHeight;
}

export function downloadCompleteMultiPagePdf(docId: CompletePdfDocId): void {
  if (typeof document === 'undefined') return;

  const canvases: HTMLCanvasElement[] = [];

  // ==========================================================================
  // PDF 1 : ALPHABET ARABE COMPLET & MÉTHODE DE LECTURE (2 PAGES GRAND FORMAT)
  // ==========================================================================
  if (docId === 'pdf-alphabet') {
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-01',
      'L’Alphabet Arabe Complet (28 Lettres) : Équivalents, 4 Positions & Exemples',
      1,
      2
    );
    const colW = (CONTENT_W - 10) / 2;
    const startY = 64;
    const rowH = 118;

    for (let i = 0; i < ARABIC_ALPHABET.length; i++) {
      const l = ARABIC_ALPHABET[i];
      const col = i < 14 ? 0 : 1;
      const r = i < 14 ? i : i - 14;
      const x = MARGIN_X + col * (colW + 10);
      const y = startY + r * rowH;

      ctx1.fillStyle = r % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      ctx1.fillRect(x, y, colW, rowH - 3);
      ctx1.strokeStyle = '#94A3B8';
      ctx1.lineWidth = 1.2;
      ctx1.strokeRect(x, y, colW, rowH - 3);

      // Large Arabic Letter Box
      ctx1.fillStyle = '#E0F2FE';
      ctx1.fillRect(x + 5, y + 5, 68, rowH - 13);
      ctx1.fillStyle = '#0369A1';
      ctx1.font = '700 44px "Noto Naskh Arabic", serif';
      ctx1.fillText(l.arabic, x + 20, y + 70);

      // Line 1: Number + Phonetic Name + French Equivalent (17.5px bold)
      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 17.5px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `${String(l.order).padStart(2, '0')}. ${l.namePhonetic} — ${l.frenchEquivalent}`,
        x + 80,
        y + 27,
        colW - 88
      );

      // Line 2: 4 positions in large 21px Arabic font
      ctx1.fillStyle = '#0369A1';
      ctx1.font = '700 20px "Noto Naskh Arabic", sans-serif';
      ctx1.fillText(
        `Isolée [ ${l.forms.isolated} ] · Début [ ${l.forms.initial} ] · Milieu [ ${l.forms.medial} ] · Fin [ ${l.forms.final} ]`,
        x + 80,
        y + 62,
        colW - 88
      );

      // Line 3: 2 Concrete Examples in 17px bold
      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 16.5px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `• ${l.exampleWord.arabic} [${l.exampleWord.phonetic}] = ${l.exampleWord.french}   • ${l.secondExample.arabic} [${l.secondExample.phonetic}] = ${l.secondExample.french}`,
        x + 80,
        y + 98,
        colW - 88
      );
    }
    canvases.push(c1);

    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-01',
      'Familles de Squelettes, 6 Lettres Non-Liantes, 16 Mots Soudés & QCM Alphabet',
      2,
      2
    );
    let y2 = 82;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 19px "Outfit", sans-serif';
    ctx2.fillText(
      '1. LES 4 FAMILLES DE SQUELETTES & LES 6 LETTRES NON-LIANTES À GAUCHE (ا · د · ذ · ر · ز · و)',
      MARGIN_X,
      y2,
      CONTENT_W
    );
    y2 += 10;

    const halfW = (CONTENT_W - 10) / 2;
    for (let i = 0; i < SKELETON_FAMILIES.length; i++) {
      const fam = SKELETON_FAMILIES[i];
      const col = i % 2;
      const r = Math.floor(i / 2);
      const fx = MARGIN_X + col * (halfW + 10);
      const fy = y2 + r * 106;
      ctx2.fillStyle = '#F8FAFC';
      ctx2.fillRect(fx, fy, halfW, 98);
      ctx2.strokeStyle = '#0284C7';
      ctx2.strokeRect(fx, fy, halfW, 98);

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 16.5px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(fam.familyName, fx + 10, fy + 24, halfW - 20);

      ctx2.fillStyle = '#1E293B';
      ctx2.font = '600 14.5px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(fam.rule, fx + 10, fy + 50, halfW - 20);

      ctx2.fillStyle = '#0369A1';
      ctx2.font = '700 16px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(
        fam.members.map((m) => `${m.arabic} (${m.french})`).join('  ·  '),
        fx + 10,
        fy + 82,
        halfW - 20
      );
    }

    y2 += 232;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 19px "Outfit", sans-serif';
    ctx2.fillText(
      '2. ATELIER PAS-À-PAS : 16 MOTS CONCRETS DU QUOTIDIEN SOUDÉS LETTRE PAR LETTRE',
      MARGIN_X,
      y2
    );
    y2 += 10;

    for (let i = 0; i < WORD_DECOMPOSITIONS.length; i++) {
      const item = WORD_DECOMPOSITIONS[i];
      const col = i < 8 ? 0 : 1;
      const r = i < 8 ? i : i - 8;
      const x = MARGIN_X + col * (halfW + 10);
      const ry = y2 + r * 72;

      ctx2.fillStyle = r % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      ctx2.fillRect(x, ry, halfW, 66);
      ctx2.strokeStyle = '#94A3B8';
      ctx2.strokeRect(x, ry, halfW, 66);

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 21px "Noto Naskh Arabic", serif';
      ctx2.fillText(
        `${item.lettersJoined}   —   [${item.word.phonetic}] = ${item.word.french}`,
        x + 10,
        ry + 28,
        halfW - 20
      );

      ctx2.fillStyle = '#1E293B';
      ctx2.font = '600 14.5px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(item.stepByStepRule, x + 10, ry + 54, halfW - 20);
    }

    drawQuizBlockOnCanvas(ctx2, 'Alphabet & Positions des Lettres', ALPHABET_QUIZ, y2 + 8 * 72 + 10);
    canvases.push(c2);
  }

  // ==========================================================================
  // PDF 2 : VOYELLES COURTES, LONGUES, SUKŪN, CHADDA & SYLLABES (2 PAGES GRAND FORMAT)
  // ==========================================================================
  else if (docId === 'pdf-voyelles') {
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-02',
      'Voyelles Courtes, Longues (Al-Madd), Tanwīn, Sukūn & Chadda',
      1,
      2
    );
    let y = 66;
    const rowH = 108;
    const boxW = CONTENT_W;

    for (const v of VOWELS_DATA) {
      ctx1.fillStyle = '#F8FAFC';
      ctx1.fillRect(MARGIN_X, y, boxW, rowH - 5);
      ctx1.strokeStyle = '#0284C7';
      ctx1.lineWidth = 1.2;
      ctx1.strokeRect(MARGIN_X, y, boxW, rowH - 5);

      // Large Symbol badge
      ctx1.fillStyle = '#E0F2FE';
      ctx1.fillRect(MARGIN_X + 6, y + 6, 94, rowH - 17);
      ctx1.fillStyle = '#0369A1';
      ctx1.font = '700 38px "Noto Naskh Arabic", serif';
      ctx1.fillText(v.symbolOnBa, MARGIN_X + 22, y + 64, 74);

      // Title line (19px bold)
      ctx1.fillStyle = '#0F172A';
      ctx1.font = '800 18.5px "Outfit", sans-serif';
      ctx1.fillText(
        `${v.frenchName}  ·  ${v.arabicName} [${v.phoneticName}]  —  ${v.categoryLabel}`,
        MARGIN_X + 112,
        y + 28,
        boxW - 124
      );

      // Sound & placement rule (16px semibold)
      ctx1.fillStyle = '#1E293B';
      ctx1.font = '600 16px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `${v.soundValue}  —  ${v.placementRule}`,
        MARGIN_X + 112,
        y + 56,
        boxW - 124
      );

      // Examples (18px bold)
      const exStr = v.examples
        .slice(0, 3)
        .map((e) => `${e.arabic} [${e.phonetic}] = ${e.french}`)
        .join('    |    ');
      ctx1.fillStyle = '#0369A1';
      ctx1.font = '700 17.5px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(`Exemples : ${exStr}`, MARGIN_X + 112, y + 88, boxW - 124);

      y += rowH;
    }

    // Bottom of Page 1: Règles 1, 2, 3 (Sukūn, Chadda & Tanwīn)
    const mechY = y + 4;
    const mechColW = (boxW - 16) / 3;
    READING_MECHANICS_GUIDES.forEach((m, idx) => {
      const mx = MARGIN_X + idx * (mechColW + 8);
      const mh = BASE_H - 28 - mechY;
      ctx1.fillStyle = '#F0F9FF';
      ctx1.fillRect(mx, mechY, mechColW, mh);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(mx, mechY, mechColW, mh);
      ctx1.fillStyle = '#0369A1';
      ctx1.font = '800 16px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(m.title, mx + 10, mechY + 24, mechColW - 20);
      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 16px "Plus Jakarta Sans", sans-serif';
      m.concreteExamples.slice(0, 3).forEach((ex, ei) => {
        ctx1.fillText(
          `• ${ex.arabic} [${ex.phonetic}] = ${ex.french}`,
          mx + 10,
          mechY + 58 + ei * 34,
          mechColW - 20
        );
      });
    });

    canvases.push(c1);

    // Page 2: 28 Verbs + 16 Minimal Pairs + Vowels QCM
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-02',
      'Lecture Fluide : 28 Verbes Trilitères, 16 Paires Courte vs Longue & QCM Voyelles',
      2,
      2
    );
    let y2 = 82;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 19px "Outfit", sans-serif';
    ctx2.fillText('1. LECTURE SYLLABIQUE DIRECTE : 28 VERBES D’ACTION COURANTS DE 3 LETTRES', MARGIN_X, y2);
    y2 += 10;

    const vColW = (CONTENT_W - 24) / 4;
    for (let i = 0; i < THREE_LETTER_READING_WORDS.length; i++) {
      const w = THREE_LETTER_READING_WORDS[i];
      const col = i % 4;
      const r = Math.floor(i / 4);
      const x = MARGIN_X + col * (vColW + 8);
      const ry = y2 + r * 58;
      ctx2.fillStyle = '#FFFFFF';
      ctx2.fillRect(x, ry, vColW, 52);
      ctx2.strokeStyle = '#94A3B8';
      ctx2.strokeRect(x, ry, vColW, 52);
      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 23px "Noto Naskh Arabic", serif';
      ctx2.fillText(w.arabic, x + 10, ry + 26);
      ctx2.fillStyle = '#0369A1';
      ctx2.font = '700 15px "IBM Plex Mono", monospace';
      ctx2.fillText(`[${w.phonetic}]`, x + 98, ry + 24, vColW - 106);
      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 15px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(`= ${w.french}`, x + 10, ry + 46, vColW - 20);
    }

    y2 += 7 * 58 + 24;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 19px "Outfit", sans-serif';
    ctx2.fillText('2. COMPARATIF CRUCIAL : 16 PAIRES MINIMALES (1 TEMPS VS 2 TEMPS)', MARGIN_X, y2);
    y2 += 10;

    const halfW = (CONTENT_W - 10) / 2;
    for (let i = 0; i < EXTENDED_MINIMAL_PAIRS.length; i++) {
      const p = EXTENDED_MINIMAL_PAIRS[i];
      const col = i % 2;
      const r = Math.floor(i / 2);
      const x = MARGIN_X + col * (halfW + 10);
      const ry = y2 + r * 54;
      ctx2.fillStyle = r % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      ctx2.fillRect(x, ry, halfW, 48);
      ctx2.strokeStyle = '#0284C7';
      ctx2.strokeRect(x, ry, halfW, 48);
      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 17px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(
        `1 tps : ${p.short.arabic} [${p.short.phonetic}] = ${p.short.french}   →   2 tps : ${p.long.arabic} [${p.long.phonetic}] = ${p.long.french}`,
        x + 10,
        ry + 31,
        halfW - 20
      );
    }

    drawQuizBlockOnCanvas(ctx2, 'Voyelles Courtes, Longues & Syllabes', VOWELS_QUIZ, y2 + 8 * 54 + 10);
    canvases.push(c2);
  }

  // ==========================================================================
  // PDF 3 : GRAMMAIRE CONCRÈTE, CONSTRUCTION DE PHRASES & DIALOGUES (2 PAGES GRAND FORMAT)
  // ==========================================================================
  else if (docId === 'pdf-grammaire') {
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-03',
      'Grammaire Concrète A2 : Construire une Phrase, Article Al- (Lunaires/Solaires) & Pronoms',
      1,
      2
    );
    let y = 80;
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 20px "Outfit", sans-serif';
    ctx1.fillText('1. LES 4 FORMULES CLÉS POUR CONSTRUIRE SES PHRASES EN ARABE', MARGIN_X, y);
    y += 10;

    const halfW = (CONTENT_W - 10) / 2;
    for (let i = 0; i < SENTENCE_BUILDING_FORMULAS.length; i++) {
      const f = SENTENCE_BUILDING_FORMULAS[i];
      const col = i % 2;
      const r = Math.floor(i / 2);
      const fx = MARGIN_X + col * (halfW + 10);
      const fy = y + r * 126;
      ctx1.fillStyle = '#F0F9FF';
      ctx1.fillRect(fx, fy, halfW, 118);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(fx, fy, halfW, 118);

      ctx1.fillStyle = '#0369A1';
      ctx1.font = '800 18px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(f.formulaTitle, fx + 10, fy + 25, halfW - 20);

      ctx1.fillStyle = '#1E293B';
      ctx1.font = '700 15.5px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(f.explanation, fx + 10, fy + 50, halfW - 20);

      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 19px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `• ${f.patternA.arabic} [${f.patternA.phonetic}] = ${f.patternA.french}`,
        fx + 10,
        fy + 80,
        halfW - 20
      );
      ctx1.fillText(
        `• ${f.patternB.arabic} [${f.patternB.phonetic}] = ${f.patternB.french}`,
        fx + 10,
        fy + 108,
        halfW - 20
      );
    }

    y += 266;
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 20px "Outfit", sans-serif';
    ctx1.fillText('2. LES 14 LETTRES LUNAIRES (L PRONONCÉ) & LES 14 LETTRES SOLAIRES (L ASSIMILÉ)', MARGIN_X, y);
    y += 10;

    for (let i = 0; i < 14; i++) {
      const lun = LUNAR_LETTERS_TABLE[i];
      const sol = SOLAR_LETTERS_TABLE[i];
      const ry = y + i * 42;

      ctx1.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      ctx1.fillRect(MARGIN_X, ry, halfW, 39);
      ctx1.strokeStyle = '#94A3B8';
      ctx1.strokeRect(MARGIN_X, ry, halfW, 39);
      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 18.5px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `Lunaire [${lun.letter} ${lun.name}] : ${lun.example.arabic}  [${lun.example.phonetic}]  =  ${lun.example.french}`,
        MARGIN_X + 10,
        ry + 27,
        halfW - 20
      );

      const rx = MARGIN_X + halfW + 10;
      ctx1.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      ctx1.fillRect(rx, ry, halfW, 39);
      ctx1.strokeStyle = '#94A3B8';
      ctx1.strokeRect(rx, ry, halfW, 39);
      ctx1.fillStyle = '#0F172A';
      ctx1.fillText(
        `Solaire [${sol.letter} ${sol.name}] : ${sol.example.arabic}  [${sol.example.phonetic}]  =  ${sol.example.french}`,
        rx + 10,
        ry + 27,
        halfW - 20
      );
    }

    y += 14 * 42 + 22;
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 20px "Outfit", sans-serif';
    ctx1.fillText('3. LES 8 PRONOMS PERSONNELS, SUFFIXES POSSESSIFS & CONJUGAISON (PASSÉ / PRÉSENT)', MARGIN_X, y);
    y += 10;

    for (let i = 0; i < PRONOUNS_AND_POSSESSIVES_TABLE.length; i++) {
      const pr = PRONOUNS_AND_POSSESSIVES_TABLE[i];
      const ry = y + i * 56;
      ctx1.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F0F9FF';
      ctx1.fillRect(MARGIN_X, ry, CONTENT_W, 52);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(MARGIN_X, ry, CONTENT_W, 52);
      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 19px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `${pr.person} : ${pr.detached.arabic} [${pr.detached.phonetic} = ${pr.detached.french}]   |   Possessif ${pr.suffix} : ${pr.attachedExample.arabic} [${pr.attachedExample.phonetic}] = ${pr.attachedExample.french}   |   Passé : ${pr.pastVerb.arabic} [${pr.pastVerb.phonetic}]   |   Présent : ${pr.presentVerb.arabic} [${pr.presentVerb.phonetic}]`,
        MARGIN_X + 12,
        ry + 33,
        CONTENT_W - 24
      );
    }
    canvases.push(c1);

    // Page 2: Real-life Dialogues + 8 Essential Everyday Sentences + Grammar QCM
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-03',
      'Grammaire en Situation A2 : Dialogues Réels du Quotidien, Phrases Clés & QCM Grammaire',
      2,
      2
    );
    let y2 = 80;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 20px "Outfit", sans-serif';
    ctx2.fillText('4. DIALOGUES CONCRETS DE LA VIE COURANTE (SE PRÉSENTER, AU CAFÉ, S’ORIENTER)', MARGIN_X, y2);
    y2 += 10;

    REAL_LIFE_DIALOGUES_A1.forEach((dlg, dIdx) => {
      const dx = MARGIN_X + dIdx * (halfW + 10);
      ctx2.fillStyle = '#F8FAFC';
      ctx2.fillRect(dx, y2, halfW, 342);
      ctx2.strokeStyle = '#0284C7';
      ctx2.strokeRect(dx, y2, halfW, 342);

      ctx2.fillStyle = '#0369A1';
      ctx2.fillRect(dx, y2, halfW, 34);
      ctx2.fillStyle = '#FFFFFF';
      ctx2.font = '800 17px "Outfit", sans-serif';
      ctx2.fillText(dlg.title, dx + 10, y2 + 23, halfW - 20);

      dlg.lines.forEach((line, lIdx) => {
        const ly = y2 + 42 + lIdx * 74;
        ctx2.fillStyle = '#0F172A';
        ctx2.font = '700 22px "Noto Naskh Arabic", serif';
        ctx2.fillText(`${line.speaker} : ${line.triad.arabic}`, dx + 10, ly + 22, halfW - 20);
        ctx2.fillStyle = '#0369A1';
        ctx2.font = '700 16px "IBM Plex Mono", monospace';
        ctx2.fillText(`[${line.triad.phonetic}]`, dx + 10, ly + 44, halfW - 20);
        ctx2.fillStyle = '#0F172A';
        ctx2.font = '700 16px "Plus Jakarta Sans", sans-serif';
        ctx2.fillText(`= ${line.triad.french}`, dx + 10, ly + 64, halfW - 20);
      });
    });

    y2 += 364;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 20px "Outfit", sans-serif';
    ctx2.fillText('5. LES 8 PHRASES MODÈLES INDISPENSABLES DU QUOTIDIEN', MARGIN_X, y2);
    y2 += 10;

    for (let i = 0; i < ESSENTIAL_SENTENCES_A1.length; i++) {
      const s = ESSENTIAL_SENTENCES_A1[i];
      const ry = y2 + i * 76;
      ctx2.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      ctx2.fillRect(MARGIN_X, ry, CONTENT_W, 71);
      ctx2.strokeStyle = '#94A3B8';
      ctx2.strokeRect(MARGIN_X, ry, CONTENT_W, 71);

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 25px "Noto Naskh Arabic", serif';
      ctx2.fillText(`${i + 1}.  ${s.arabic}`, MARGIN_X + 14, ry + 30, CONTENT_W - 28);

      ctx2.fillStyle = '#0369A1';
      ctx2.font = '700 17.5px "IBM Plex Mono", monospace';
      ctx2.fillText(`[${s.phonetic}]   =   ${s.french}`, MARGIN_X + 14, ry + 58, CONTENT_W - 28);
    }

    drawQuizBlockOnCanvas(ctx2, 'Grammaire & Construction de Phrases A2', GRAMMAR_A1_QUIZ, y2 + 8 * 76 + 8);
    canvases.push(c2);
  }

  // ==========================================================================
  // PDF 4 : LES 200 MOTS LES PLUS IMPORTANTS PAR SOUS-CATÉGORIES (2 PAGES GRAND FORMAT)
  // ==========================================================================
  else if (docId === 'pdf-vocab300') {
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-04',
      'Les 200 Mots Arabes les Plus Utilisés (Par Sous-Catégories) — Page 1/2 : Mots #001 à #100',
      1,
      2
    );
    const page1Cats = VOCAB_200_SUBCATEGORIES.filter((c) => c.pageNumber === 1);
    let y1 = 64;
    const colW = (CONTENT_W - 10) / 2;

    for (const cat of page1Cats) {
      ctx1.fillStyle = '#0369A1';
      ctx1.fillRect(MARGIN_X, y1, CONTENT_W, 28);
      ctx1.fillStyle = '#FFFFFF';
      ctx1.font = '800 16px "Outfit", sans-serif';
      ctx1.fillText(
        `${cat.code} — ${cat.title}   |   Exemple : ${cat.concreteSentence.arabic} [${cat.concreteSentence.phonetic}] = ${cat.concreteSentence.french}`,
        MARGIN_X + 10,
        y1 + 20,
        CONTENT_W - 20
      );
      y1 += 30;

      const half = Math.ceil(cat.words.length / 2);
      for (let i = 0; i < cat.words.length; i++) {
        const w = cat.words[i];
        const col = i < half ? 0 : 1;
        const r = i < half ? i : i - half;
        const wx = MARGIN_X + col * (colW + 10);
        const wy = y1 + r * 30;

        ctx1.fillStyle = r % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
        ctx1.fillRect(wx, wy, colW, 29);
        ctx1.strokeStyle = '#CBD5E1';
        ctx1.strokeRect(wx, wy, colW, 29);

        ctx1.fillStyle = '#475569';
        ctx1.font = '700 14px "IBM Plex Mono", monospace';
        ctx1.fillText(String(w.num).padStart(3, '0'), wx + 6, wy + 20);

        ctx1.fillStyle = '#0F172A';
        ctx1.font = '700 20px "Noto Naskh Arabic", serif';
        ctx1.fillText(w.arabic, wx + 46, wy + 21, 165);

        ctx1.fillStyle = '#0369A1';
        ctx1.font = '700 14.5px "IBM Plex Mono", monospace';
        ctx1.fillText(`[${w.phonetic}]`, wx + 216, wy + 20, 175);

        ctx1.fillStyle = '#0F172A';
        ctx1.font = '600 15px "Plus Jakarta Sans", sans-serif';
        ctx1.fillText(w.french, wx + 396, wy + 20, colW - 402);
      }
      y1 += half * 30 + 6;
    }
    canvases.push(c1);

    // Page 2: Subcategories 5 to 9 (Words #101 to #200 including 22 Religion words) + Vocab QCM
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-04',
      'Les 200 Mots Arabes par Sous-Catégories — Page 2/2 : Mots #101 à #200 (dont 22 Mots Religion) & QCM',
      2,
      2
    );
    const page2Cats = VOCAB_200_SUBCATEGORIES.filter((c) => c.pageNumber === 2);
    let y2 = 64;
    for (const cat of page2Cats) {
      ctx2.fillStyle = '#0369A1';
      ctx2.fillRect(MARGIN_X, y2, CONTENT_W, 25);
      ctx2.fillStyle = '#FFFFFF';
      ctx2.font = '800 15.5px "Outfit", sans-serif';
      ctx2.fillText(
        `${cat.code} — ${cat.title}   |   Exemple : ${cat.concreteSentence.arabic} [${cat.concreteSentence.phonetic}]`,
        MARGIN_X + 10,
        y2 + 18,
        CONTENT_W - 20
      );
      y2 += 26;

      const half = Math.ceil(cat.words.length / 2);
      for (let i = 0; i < cat.words.length; i++) {
        const w = cat.words[i];
        const col = i < half ? 0 : 1;
        const r = i < half ? i : i - half;
        const wx = MARGIN_X + col * (colW + 10);
        const wy = y2 + r * 25.5;

        ctx2.fillStyle = r % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
        ctx2.fillRect(wx, wy, colW, 25);
        ctx2.strokeStyle = '#CBD5E1';
        ctx2.strokeRect(wx, wy, colW, 25);

        ctx2.fillStyle = '#475569';
        ctx2.font = '700 13.5px "IBM Plex Mono", monospace';
        ctx2.fillText(String(w.num).padStart(3, '0'), wx + 6, wy + 18);

        ctx2.fillStyle = '#0F172A';
        ctx2.font = '700 18.5px "Noto Naskh Arabic", serif';
        ctx2.fillText(w.arabic, wx + 44, wy + 19, 165);

        ctx2.fillStyle = '#0369A1';
        ctx2.font = '700 14px "IBM Plex Mono", monospace';
        ctx2.fillText(`[${w.phonetic}]`, wx + 214, wy + 18, 175);

        ctx2.fillStyle = '#0F172A';
        ctx2.font = '600 14.5px "Plus Jakarta Sans", sans-serif';
        ctx2.fillText(w.french, wx + 394, wy + 18, colW - 400);
      }
      y2 += half * 25.5 + 5;
    }

    drawQuizBlockOnCanvas(ctx2, 'Les 200 Mots Indispensables par Sous-Catégories', VOCAB_200_QUIZ, y2 + 2);
    canvases.push(c2);
  }

  // ==========================================================================
  // PDF 5 : LES 10 SOURATES COURTES ESSENTIELLES (2 PAGES A4 TRÈS GRAND FORMAT ULTRA-LISIBLE)
  // ==========================================================================
  else if (docId === 'pdf-sourates') {
    const groups = [
      ALL_12_SURAHS.slice(0, 5),
      ALL_12_SURAHS.slice(5, 10)
    ];

    groups.forEach((surahGroup, idx) => {
      const { canvas, ctx } = createA4Canvas(
        'PDF-05',
        `Les 10 Sourates Courtes Essentielles (TRÈS GRAND FORMAT LISIBLE) — Page ${idx + 1}/2`,
        idx + 1,
        2
      );
      let y = 64;
      for (const s of surahGroup) {
        ctx.fillStyle = '#0369A1';
        ctx.fillRect(MARGIN_X, y, CONTENT_W, 33);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '800 18.5px "Outfit", sans-serif';
        ctx.fillText(
          `${s.titleFrench}  ·  [${s.titlePhonetic}]  ·  ${s.titleArabic}   —   Mots-clés : ${s.keyWords.map((k) => `${k.arabic} [${k.phonetic}] = ${k.french}`).join(' · ')}`,
          MARGIN_X + 12,
          y + 23,
          CONTENT_W - 24
        );
        y += 37;

        for (const v of s.verses) {
          ctx.fillStyle = '#F8FAFC';
          ctx.fillRect(MARGIN_X, y - 2, CONTENT_W, 48);
          ctx.strokeStyle = '#CBD5E1';
          ctx.strokeRect(MARGIN_X, y - 2, CONTENT_W, 48);

          ctx.fillStyle = '#0F172A';
          ctx.font = '700 26px "Noto Naskh Arabic", serif';
          ctx.fillText(`(${v.verseNumber})   ${v.arabic}`, MARGIN_X + 12, y + 20, CONTENT_W - 24);
          ctx.fillStyle = '#0369A1';
          ctx.font = '700 17.5px "IBM Plex Mono", monospace';
          ctx.fillText(`[${v.phonetic}]   —   ${v.french}`, MARGIN_X + 12, y + 41, CONTENT_W - 24);
          y += 50;
        }
        y += 6;
      }

      if (idx === 1) {
        drawQuizBlockOnCanvas(ctx, 'Compréhension & Vocabulaire des Sourates', SURAHS_QUIZ, Math.max(y + 4, 1420));
      }
      canvases.push(canvas);
    });
  }

  // ==========================================================================
  // PDF 6 : CAHIER D'EXERCICES PRATIQUES & EXAMEN BILAN A2 (SANS CORRIGÉ — GRAND FORMAT)
  // ==========================================================================
  else if (docId === 'pdf-cahier-quiz') {
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-06',
      'Cahier d’Exercices Pratiques Niveau A2 : Écriture, Phrases Concrètes & Traduction (/ 20 pts)',
      1,
      2
    );
    let y = 68;
    const halfW = (CONTENT_W - 10) / 2;

    // Student info strip
    ctx1.fillStyle = '#F0F9FF';
    ctx1.fillRect(MARGIN_X, y, CONTENT_W, 42);
    ctx1.strokeStyle = '#0284C7';
    ctx1.strokeRect(MARGIN_X, y, CONTENT_W, 42);
    ctx1.fillStyle = '#0F172A';
    ctx1.font = '700 18px "Plus Jakarta Sans", sans-serif';
    ctx1.fillText(
      'Nom & Prénom de l’élève : .........................................................   Date : .... / .... / 20....   Note Page 1 : ..... / 20',
      MARGIN_X + 14,
      y + 27,
      CONTENT_W - 28
    );
    y += 58;

    // Exercice 1
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 19.5px "Outfit", sans-serif';
    ctx1.fillText('EXERCICE 1 — SOUDER LES LETTRES EN ARABE ET ÉCRIRE LE SENS EN FRANÇAIS (/ 5 POINTS)', MARGIN_X, y);
    y += 10;

    for (let i = 0; i < 8; i++) {
      const w = WORD_DECOMPOSITIONS[i];
      const col = i % 2;
      const r = Math.floor(i / 2);
      const x = MARGIN_X + col * (halfW + 10);
      const ry = y + r * 68;

      ctx1.fillStyle = '#F8FAFC';
      ctx1.fillRect(x, ry, halfW, 62);
      ctx1.strokeStyle = '#94A3B8';
      ctx1.strokeRect(x, ry, halfW, 62);

      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 23px "Noto Naskh Arabic", serif';
      ctx1.fillText(`${i + 1}.  ${w.lettersJoined.split('=')[0]}   →   Mot attaché : .........................`, x + 12, ry + 27, halfW - 24);

      ctx1.fillStyle = '#0369A1';
      ctx1.font = '700 17px "IBM Plex Mono", monospace';
      ctx1.fillText(
        `Phonétique : [${w.word.phonetic}]   |   Sens FR : .................................`,
        x + 12,
        ry + 52,
        halfW - 24
      );
    }

    y += 4 * 68 + 24;
    // Exercice 2
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 19.5px "Outfit", sans-serif';
    ctx1.fillText('EXERCICE 2 — TRADUIRE EN ARABE VOCALISÉ ET EN PHONÉTIQUE (/ 5 POINTS)', MARGIN_X, y);
    y += 10;

    const ex2Prompts = [
      '1. Une grande maison  /  La maison est grande',
      '2. Une voiture rapide  /  La voiture est rapide',
      '3. J’ai une clé et un téléphone',
      '4. Où est le téléphone ? Il est sur la table',
      '5. Je voudrais un café chaud et de l’eau froide'
    ];

    ex2Prompts.forEach((promptText, idx) => {
      const ry = y + idx * 72;
      ctx1.fillStyle = '#FFFFFF';
      ctx1.fillRect(MARGIN_X, ry, CONTENT_W, 66);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(MARGIN_X, ry, CONTENT_W, 66);
      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 18.5px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(`${promptText}`, MARGIN_X + 14, ry + 26, CONTENT_W - 28);
      ctx1.fillStyle = '#334155';
      ctx1.font = '700 16.5px "IBM Plex Mono", monospace';
      ctx1.fillText(
        'Arabe : ................................................................   Phonétique : ................................................................',
        MARGIN_X + 14,
        ry + 54,
        CONTENT_W - 28
      );
    });

    y += 5 * 72 + 24;
    // Exercice 3
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 19.5px "Outfit", sans-serif';
    ctx1.fillText('EXERCICE 3 — COMPLÉTER LE POSSESSIF (« MON / TON / SON ») ET CONJUGUER AU PRÉSENT (/ 10 POINTS)', MARGIN_X, y);
    y += 10;

    for (let i = 0; i < 6; i++) {
      const pr = PRONOUNS_AND_POSSESSIVES_TABLE[i];
      const col = i % 2;
      const r = Math.floor(i / 2);
      const x = MARGIN_X + col * (halfW + 10);
      const ry = y + r * 68;
      ctx1.fillStyle = '#F8FAFC';
      ctx1.fillRect(x, ry, halfW, 62);
      ctx1.strokeStyle = '#94A3B8';
      ctx1.strokeRect(x, ry, halfW, 62);
      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 18px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `${pr.person} — Pronom : ${pr.detached.arabic} [${pr.detached.phonetic}] (${pr.detached.french})`,
        x + 12,
        ry + 25,
        halfW - 24
      );
      ctx1.fillStyle = '#1E293B';
      ctx1.font = '700 16px "IBM Plex Mono", monospace';
      ctx1.fillText(
        `Possessif (بَيْت) : ......................   |   Verbe (ذَهَبَ) : ......................`,
        x + 12,
        ry + 51,
        halfW - 24
      );
    }
    canvases.push(c1);

    // Page 2 of PDF-06: Full 10-question Final Exam QCM (WITHOUT answer key)
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-06',
      'Examen Final Bilan A2 : 10 Questions QCM (Alphabet, Voyelles, Grammaire, 200 Mots & Sourates)',
      2,
      2
    );
    const examQuestions: QuizQuestion[] = [
      ...ALPHABET_QUIZ.slice(0, 2),
      ...VOWELS_QUIZ.slice(0, 2),
      ...GRAMMAR_A1_QUIZ.slice(0, 2),
      ...VOCAB_200_QUIZ.slice(0, 2),
      ...SURAHS_QUIZ.slice(0, 2)
    ];

    const startY2 = 68;
    const colW2 = (CONTENT_W - 10) / 2;
    const rowH2 = 316;

    for (let i = 0; i < examQuestions.length; i++) {
      const q = examQuestions[i];
      const col = i % 2;
      const r = Math.floor(i / 2);
      const qx = MARGIN_X + col * (colW2 + 10);
      const qy = startY2 + r * rowH2;

      ctx2.fillStyle = '#FFFFFF';
      ctx2.fillRect(qx, qy, colW2, rowH2 - 8);
      ctx2.strokeStyle = '#0284C7';
      ctx2.lineWidth = 1.4;
      ctx2.strokeRect(qx, qy, colW2, rowH2 - 8);

      ctx2.fillStyle = '#0369A1';
      ctx2.font = '800 17.5px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(`QUESTION ${i + 1} / 10   (..... / 1 pt)`, qx + 12, qy + 26);

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 17px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(q.question, qx + 12, qy + 54, colW2 - 24);

      if (q.arabicPrompt) {
        ctx2.fillStyle = '#F0F9FF';
        ctx2.fillRect(qx + 12, qy + 68, colW2 - 24, 42);
        ctx2.fillStyle = '#0369A1';
        ctx2.font = '700 21px "Noto Naskh Arabic", sans-serif';
        ctx2.fillText(
          `${q.arabicPrompt.arabic}   [${q.arabicPrompt.phonetic}]   =   ${q.arabicPrompt.french}`,
          qx + 20,
          qy + 96,
          colW2 - 40
        );
      }

      q.options.forEach((opt, oIdx) => {
        ctx2.fillStyle = '#0F172A';
        ctx2.font = '600 17px "Plus Jakarta Sans", sans-serif';
        ctx2.fillText(
          `☐  ${String.fromCharCode(65 + oIdx)})  ${opt}`,
          qx + 16,
          qy + 138 + oIdx * 40,
          colW2 - 32
        );
      });
    }

    // Teacher grading box at bottom of Page 2
    const boxY = startY2 + 5 * rowH2 + 2;
    ctx2.fillStyle = '#F0F9FF';
    ctx2.fillRect(MARGIN_X, boxY, CONTENT_W, 44);
    ctx2.strokeStyle = '#0284C7';
    ctx2.strokeRect(MARGIN_X, boxY, CONTENT_W, 44);
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '700 16.5px "IBM Plex Mono", monospace';
    ctx2.fillText(
      'NOTE QCM : ..... / 10   |   NOTE EXERCICES (PAGE 1) : ..... / 20   |   TOTAL BILAN A2 : ..... / 30   |   Appréciation : ............................',
      MARGIN_X + 14,
      boxY + 28,
      CONTENT_W - 28
    );

    canvases.push(c2);
  }

  // ==========================================================================
  // PDF 7 : CONJUGAISON COMPLÈTE NIVEAU A2 & NÉGATIONS (2 PAGES GRAND FORMAT)
  // ==========================================================================
  else if (docId === 'pdf-conjugaison-a2') {
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-07',
      'Conjugaison Complète Niveau A2 : Les 10 Pronoms, Passé, Présent, Futur & 8 Verbes Piliers',
      1,
      2
    );
    let y = 78;
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 20px "Outfit", sans-serif';
    ctx1.fillText('1. TABLEAU DES 10 PRONOMS ET CONJUGAISON AUX 3 TEMPS (MODÈLE : كَتَبَ KATABA — ÉCRIRE)', MARGIN_X, y);
    y += 10;

    for (let i = 0; i < A2_PRONOUN_CONJUGATION_TABLE.length; i++) {
      const row = A2_PRONOUN_CONJUGATION_TABLE[i];
      const ry = y + i * 74;
      ctx1.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F0F9FF';
      ctx1.fillRect(MARGIN_X, ry, CONTENT_W, 70);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(MARGIN_X, ry, CONTENT_W, 70);

      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 20px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `${row.code} : ${row.pronoun.arabic} [${row.pronoun.phonetic} = ${row.pronoun.french}]   |   Passé (${row.pastSuffix}) : ${row.writePast.arabic} [${row.writePast.phonetic}] = ${row.writePast.french}`,
        MARGIN_X + 12,
        ry + 27,
        CONTENT_W - 24
      );

      ctx1.fillStyle = '#0369A1';
      ctx1.font = '700 18.5px "IBM Plex Mono", monospace';
      ctx1.fillText(
        `Présent (${row.presentPrefixSuffix}) : ${row.writePresent.arabic} [${row.writePresent.phonetic}] = ${row.writePresent.french}   |   Futur : ${row.writeFuture.arabic} [${row.writeFuture.phonetic}] = ${row.writeFuture.french}`,
        MARGIN_X + 12,
        ry + 57,
        CONTENT_W - 24
      );
    }

    y += 10 * 74 + 26;
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 20px "Outfit", sans-serif';
    ctx1.fillText('2. LES 8 VERBES PILIERS DU NIVEAU A2 (PASSÉ · PRÉSENT · IMPÉRATIF · NOM D’ACTION)', MARGIN_X, y);
    y += 10;

    const halfW = (CONTENT_W - 10) / 2;
    for (let i = 0; i < A2_ESSENTIAL_VERBS_8.length; i++) {
      const v = A2_ESSENTIAL_VERBS_8[i];
      const col = i % 2;
      const r = Math.floor(i / 2);
      const vx = MARGIN_X + col * (halfW + 10);
      const vy = y + r * 188;

      ctx1.fillStyle = '#F8FAFC';
      ctx1.fillRect(vx, vy, halfW, 180);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(vx, vy, halfW, 180);

      ctx1.fillStyle = '#0369A1';
      ctx1.font = '800 18.5px "Outfit", sans-serif';
      ctx1.fillText(`${v.infinitiveMeaning}   (Racine : ${v.rootLetters})`, vx + 12, vy + 26, halfW - 24);

      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 20px "Noto Naskh Arabic", serif';
      ctx1.fillText(`• Passé : ${v.past3m.arabic} [${v.past3m.phonetic}] = ${v.past3m.french}`, vx + 12, vy + 62, halfW - 24);
      ctx1.fillText(`• Présent : ${v.present3m.arabic} [${v.present3m.phonetic}] = ${v.present3m.french}`, vx + 12, vy + 98, halfW - 24);
      ctx1.fillText(`• Impératif : ${v.imperative2m.arabic} [${v.imperative2m.phonetic}] = ${v.imperative2m.french}`, vx + 12, vy + 134, halfW - 24);
      ctx1.fillStyle = '#0369A1';
      ctx1.font = '700 17px "IBM Plex Mono", monospace';
      ctx1.fillText(`• Maṣdar : ${v.masdar.arabic} [${v.masdar.phonetic}] = ${v.masdar.french}`, vx + 12, vy + 166, halfW - 24);
    }
    canvases.push(c1);

    // Page 2 of PDF-07
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-07',
      'Les 5 Négations en Arabe (Lā, Mā, Lam, Lan, Laysa), Phrases aux 3 Temps & QCM Conjugaison',
      2,
      2
    );
    let y2 = 78;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 20px "Outfit", sans-serif';
    ctx2.fillText('3. LES 5 PARTICULES DE NÉGATION SELON LE TEMPS EN ARABE (NIVEAU A2)', MARGIN_X, y2);
    y2 += 10;

    for (let i = 0; i < A2_NEGATION_RULES.length; i++) {
      const neg = A2_NEGATION_RULES[i];
      const ry = y2 + i * 94;
      ctx2.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F0F9FF';
      ctx2.fillRect(MARGIN_X, ry, CONTENT_W, 88);
      ctx2.strokeStyle = '#0284C7';
      ctx2.strokeRect(MARGIN_X, ry, CONTENT_W, 88);

      ctx2.fillStyle = '#0369A1';
      ctx2.font = '800 20px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(
        `${i + 1}. ${neg.particle.arabic} [${neg.particle.phonetic}] = ${neg.particle.french}   |   Cible : ${neg.tenseTarget} (${neg.grammarEffect})`,
        MARGIN_X + 14,
        ry + 30,
        CONTENT_W - 28
      );

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 22px "Noto Naskh Arabic", serif';
      ctx2.fillText(
        `Exemple : ${neg.example.arabic}   [${neg.example.phonetic}]   =   ${neg.example.french}`,
        MARGIN_X + 14,
        ry + 68,
        CONTENT_W - 28
      );
    }

    y2 += 5 * 94 + 24;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 20px "Outfit", sans-serif';
    ctx2.fillText('4. PHRASES CONCRÈTES CONJUGUÉES AUX DIFFÉRENTS TEMPS (PASSÉ, PRÉSENT, FUTUR & IMPÉRATIF)', MARGIN_X, y2);
    y2 += 10;

    for (let i = 0; i < A2_CONJUGATION_SENTENCES.length; i++) {
      const s = A2_CONJUGATION_SENTENCES[i];
      const ry = y2 + i * 90;
      ctx2.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      ctx2.fillRect(MARGIN_X, ry, CONTENT_W, 84);
      ctx2.strokeStyle = '#94A3B8';
      ctx2.strokeRect(MARGIN_X, ry, CONTENT_W, 84);

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 25px "Noto Naskh Arabic", serif';
      ctx2.fillText(`${i + 1}.  ${s.arabic}`, MARGIN_X + 14, ry + 34, CONTENT_W - 28);

      ctx2.fillStyle = '#0369A1';
      ctx2.font = '700 18px "IBM Plex Mono", monospace';
      ctx2.fillText(`[${s.phonetic}]   =   ${s.french}`, MARGIN_X + 14, ry + 68, CONTENT_W - 28);
    }

    drawQuizBlockOnCanvas(ctx2, 'Conjugaison A2 & Négations', PDF7_CONJUGATION_QUIZ, y2 + 6 * 90 + 10);
    canvases.push(c2);
  }

  // ==========================================================================
  // PDF 8 : EXPRESSION, CONNECTEURS LOGIQUES, HEURE, NOMBRES & DIALOGUES A2 (2 PAGES GRAND FORMAT)
  // ==========================================================================
  else if (docId === 'pdf-conversations-a2') {
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-08',
      'Expression & Connecteurs Logiques A2 : Mots de Liaison & Dialogues Réels (Médecin, Marché)',
      1,
      2
    );
    let y = 78;
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 20px "Outfit", sans-serif';
    ctx1.fillText('1. LES 10 CONNECTEURS LOGIQUES INDISPENSABLES POUR RELIER SES PHRASES (NIVEAU A2)', MARGIN_X, y);
    y += 10;

    for (let i = 0; i < A2_LOGICAL_CONNECTORS.length; i++) {
      const c = A2_LOGICAL_CONNECTORS[i];
      const ry = y + i * 86;
      ctx1.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F0F9FF';
      ctx1.fillRect(MARGIN_X, ry, CONTENT_W, 80);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(MARGIN_X, ry, CONTENT_W, 80);

      ctx1.fillStyle = '#0369A1';
      ctx1.font = '800 19.5px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `[${c.category}]  ${c.triad.arabic}  [${c.triad.phonetic}]  =  ${c.triad.french}`,
        MARGIN_X + 14,
        ry + 28,
        CONTENT_W - 28
      );

      ctx1.fillStyle = '#0F172A';
      ctx1.font = '700 21px "Noto Naskh Arabic", serif';
      ctx1.fillText(
        `Exemple : ${c.example.arabic}   [${c.example.phonetic}]   =   ${c.example.french}`,
        MARGIN_X + 14,
        ry + 62,
        CONTENT_W - 28
      );
    }

    y += 10 * 86 + 26;
    ctx1.fillStyle = '#0369A1';
    ctx1.font = '800 20px "Outfit", sans-serif';
    ctx1.fillText('2. DIALOGUES CONCRETS NIVEAU A2 (CHEZ LE MÉDECIN & AU MARCHÉ)', MARGIN_X, y);
    y += 10;

    const halfW = (CONTENT_W - 10) / 2;
    A2_REAL_LIFE_DIALOGUES.forEach((dlg, dIdx) => {
      const dx = MARGIN_X + dIdx * (halfW + 10);
      ctx1.fillStyle = '#F8FAFC';
      ctx1.fillRect(dx, y, halfW, 690);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(dx, y, halfW, 690);

      ctx1.fillStyle = '#0369A1';
      ctx1.fillRect(dx, y, halfW, 38);
      ctx1.fillStyle = '#FFFFFF';
      ctx1.font = '800 18px "Outfit", sans-serif';
      ctx1.fillText(dlg.title, dx + 12, y + 25, halfW - 24);

      dlg.lines.forEach((line, lIdx) => {
        const ly = y + 48 + lIdx * 158;
        ctx1.fillStyle = '#0F172A';
        ctx1.font = '700 23px "Noto Naskh Arabic", serif';
        ctx1.fillText(`${line.speaker} : ${line.triad.arabic}`, dx + 12, ly + 28, halfW - 24);
        ctx1.fillStyle = '#0369A1';
        ctx1.font = '700 17.5px "IBM Plex Mono", monospace';
        ctx1.fillText(`[${line.triad.phonetic}]`, dx + 12, ly + 68, halfW - 24);
        ctx1.fillStyle = '#0F172A';
        ctx1.font = '700 17.5px "Plus Jakarta Sans", sans-serif';
        ctx1.fillText(`= ${line.triad.french}`, dx + 12, ly + 106, halfW - 24);
      });
    });
    canvases.push(c1);

    // Page 2 of PDF-08
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-08',
      'Lire l’Heure Exacte, Nombres (1 à 1000), Exprimer son Avis & QCM Conversations A2',
      2,
      2
    );
    let y2 = 80;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 20px "Outfit", sans-serif';
    ctx2.fillText('3. LIRE L’HEURE EXACTE, LES NOMBRES (11 À 1000) & EXPRIMER SON OPINION EN ARABE', MARGIN_X, y2);
    y2 += 12;

    for (let i = 0; i < A2_TIME_AND_NUMBERS.length; i++) {
      const item = A2_TIME_AND_NUMBERS[i];
      const ry = y2 + i * 135;
      ctx2.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F0F9FF';
      ctx2.fillRect(MARGIN_X, ry, CONTENT_W, 125);
      ctx2.strokeStyle = '#0284C7';
      ctx2.strokeRect(MARGIN_X, ry, CONTENT_W, 125);

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 26px "Noto Naskh Arabic", serif';
      ctx2.fillText(`${i + 1}.  ${item.arabic}`, MARGIN_X + 16, ry + 45, CONTENT_W - 32);

      ctx2.fillStyle = '#0369A1';
      ctx2.font = '700 19px "IBM Plex Mono", monospace';
      ctx2.fillText(`[${item.phonetic}]`, MARGIN_X + 16, ry + 82, CONTENT_W - 32);

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 19px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(`=  ${item.french}`, MARGIN_X + 16, ry + 112, CONTENT_W - 32);
    }

    drawQuizBlockOnCanvas(ctx2, 'Connecteurs, Heure & Dialogues A2', PDF8_CONVERSATIONS_QUIZ, y2 + 8 * 135 + 14);
    canvases.push(c2);
  }

  // ==========================================================================
  // PDF 9 : TEXTES SUIVIS DE LECTURE A2, RACINES (3 LETTRES) & PROVERBES (2 PAGES GRAND FORMAT)
  // ==========================================================================
  else if (docId === 'pdf-textes-lecture-a2') {
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-09',
      'Lecture de Textes Suivis Niveau A2 (Arabe Vocalisé Grand Format · Phonétique · Traduction)',
      1,
      2
    );
    let y = 76;

    for (const txt of A2_READING_TEXTS) {
      ctx1.fillStyle = '#0369A1';
      ctx1.fillRect(MARGIN_X, y, CONTENT_W, 38);
      ctx1.fillStyle = '#FFFFFF';
      ctx1.font = '800 19px "Outfit", sans-serif';
      ctx1.fillText(`${txt.titleFrench}   —   ${txt.titleArabic}`, MARGIN_X + 14, y + 25, CONTENT_W - 28);
      y += 44;

      for (const s of txt.sentences) {
        ctx1.fillStyle = '#F8FAFC';
        ctx1.fillRect(MARGIN_X, y, CONTENT_W, 122);
        ctx1.strokeStyle = '#94A3B8';
        ctx1.strokeRect(MARGIN_X, y, CONTENT_W, 122);

        ctx1.fillStyle = '#0F172A';
        ctx1.font = '700 26px "Noto Naskh Arabic", serif';
        ctx1.fillText(s.arabic, MARGIN_X + 14, y + 38, CONTENT_W - 28);

        ctx1.fillStyle = '#0369A1';
        ctx1.font = '700 18.5px "IBM Plex Mono", monospace';
        ctx1.fillText(`[${s.phonetic}]`, MARGIN_X + 14, y + 76, CONTENT_W - 28);

        ctx1.fillStyle = '#0F172A';
        ctx1.font = '700 18.5px "Plus Jakarta Sans", sans-serif';
        ctx1.fillText(`= ${s.french}`, MARGIN_X + 14, y + 108, CONTENT_W - 28);
        y += 128;
      }

      ctx1.fillStyle = '#F0F9FF';
      ctx1.fillRect(MARGIN_X, y, CONTENT_W, 38);
      ctx1.strokeStyle = '#0284C7';
      ctx1.strokeRect(MARGIN_X, y, CONTENT_W, 38);
      ctx1.fillStyle = '#0369A1';
      ctx1.font = '700 17.5px "Plus Jakarta Sans", sans-serif';
      ctx1.fillText(
        `Vocabulaire clé : ${txt.keyVocab.map((k) => `${k.arabic} [${k.phonetic}] = ${k.french}`).join('   |   ')}`,
        MARGIN_X + 12,
        y + 25,
        CONTENT_W - 24
      );
      y += 52;
    }
    canvases.push(c1);

    // Page 2 of PDF-09
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-09',
      'Le Système des Racines de 3 Lettres (Al-Juthūr), Proverbes Arabes & QCM Lecture A2',
      2,
      2
    );
    let y2 = 78;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 20px "Outfit", sans-serif';
    ctx2.fillText('1. LE SECRET DES RACINES ARABES DE 3 LETTRES (DEVINER LES MOTS DE LA MÊME FAMILLE)', MARGIN_X, y2);
    y2 += 10;

    for (let i = 0; i < A2_ROOT_SYSTEM_TABLE.length; i++) {
      const r = A2_ROOT_SYSTEM_TABLE[i];
      const ry = y2 + i * 86;
      ctx2.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F0F9FF';
      ctx2.fillRect(MARGIN_X, ry, CONTENT_W, 80);
      ctx2.strokeStyle = '#0284C7';
      ctx2.strokeRect(MARGIN_X, ry, CONTENT_W, 80);

      ctx2.fillStyle = '#0369A1';
      ctx2.font = '800 19.5px "Outfit", sans-serif';
      ctx2.fillText(
        `Racine ${r.rootArabic} (${r.rootMeaning})   →   Verbe : ${r.verb3m.arabic} [${r.verb3m.phonetic}] = ${r.verb3m.french}`,
        MARGIN_X + 14,
        ry + 28,
        CONTENT_W - 28
      );

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 19px "Plus Jakarta Sans", sans-serif';
      ctx2.fillText(
        `Agent : ${r.activeParticiple.arabic} [${r.activeParticiple.phonetic}] = ${r.activeParticiple.french}   |   Objet : ${r.passiveOrObject.arabic} [${r.passiveOrObject.phonetic}] = ${r.passiveOrObject.french}   |   Lieu/Nom : ${r.placeOrNoun.arabic} [${r.placeOrNoun.phonetic}] = ${r.placeOrNoun.french}`,
        MARGIN_X + 14,
        ry + 62,
        CONTENT_W - 28
      );
    }

    y2 += 6 * 86 + 24;
    ctx2.fillStyle = '#0369A1';
    ctx2.font = '800 20px "Outfit", sans-serif';
    ctx2.fillText('2. LES 6 PROVERBES ET SAGESSES ARABES CÉLÈBRES À CONNAÎTRE PAR CŒUR', MARGIN_X, y2);
    y2 += 10;

    for (let i = 0; i < A2_ARABIC_PROVERBS.length; i++) {
      const p = A2_ARABIC_PROVERBS[i];
      const ry = y2 + i * 88;
      ctx2.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#F8FAFC';
      ctx2.fillRect(MARGIN_X, ry, CONTENT_W, 82);
      ctx2.strokeStyle = '#94A3B8';
      ctx2.strokeRect(MARGIN_X, ry, CONTENT_W, 82);

      ctx2.fillStyle = '#0F172A';
      ctx2.font = '700 25px "Noto Naskh Arabic", serif';
      ctx2.fillText(`${i + 1}.  ${p.arabic}`, MARGIN_X + 14, ry + 34, CONTENT_W - 28);

      ctx2.fillStyle = '#0369A1';
      ctx2.font = '700 18px "IBM Plex Mono", monospace';
      ctx2.fillText(`[${p.phonetic}]   =   ${p.french}`, MARGIN_X + 14, ry + 66, CONTENT_W - 28);
    }

    drawQuizBlockOnCanvas(ctx2, 'Lecture A2, Racines & Proverbes', PDF9_READING_QUIZ, y2 + 6 * 88 + 10);
    canvases.push(c2);
  } else if (docId === 'pdf-priere-salat') {
    // PAGE 1 : Les 8 étapes des Ablutions (Al-Wuḍū’), Annulatifs, Tableau des 5 Prières & Début de la Ṣalāt (Étapes 1 à 5)
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-10',
      'GUIDE COMPLET : LES ABLUTIONS (AL-WUḌŪ’) & LA PRIÈRE (AṢ-ṢALĀT)',
      1,
      2
    );
    let y = 78;

    y = drawSectionBar(ctx1, '1. LES 8 ÉTAPES DES ABLUTIONS (الْوُضُوءُ — AL-WUḌŪ’) — DANS L’ORDRE', y);
    const wuduW = Math.floor((CONTENT_W - 10) / 2);
    const wuduH = 116;
    WUDU_STEPS.forEach((step, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const bx = MARGIN_X + col * (wuduW + 10);
      const by = y + row * (wuduH + 6);
      ctx1.fillStyle = idx % 2 === 0 ? '#f8fafc' : '#f0f9ff';
      ctx1.fillRect(bx, by, wuduW, wuduH);
      ctx1.strokeStyle = '#7dd3fc';
      ctx1.strokeRect(bx, by, wuduW, wuduH);

      ctx1.fillStyle = '#0369a1';
      ctx1.font = 'bold 17px Inter, sans-serif';
      ctx1.fillText(`Étape ${step.stepNumber} · ${step.titleFr} (${step.repetition})`, bx + 10, by + 22);

      ctx1.textAlign = 'right';
      ctx1.fillStyle = '#0f172a';
      ctx1.font = 'bold 23px "Noto Naskh Arabic", "Amiri", serif';
      ctx1.fillText(step.arabic.slice(0, 58), bx + wuduW - 10, by + 54);
      ctx1.textAlign = 'left';

      ctx1.fillStyle = '#0284c7';
      ctx1.font = 'bold 15px "JetBrains Mono", monospace';
      ctx1.fillText(step.phonetic.slice(0, 65), bx + 10, by + 80);

      ctx1.fillStyle = '#1e293b';
      ctx1.font = 'bold 15px Inter, sans-serif';
      ctx1.fillText(`Sens : ${step.french.slice(0, 72)}`, bx + 10, by + 104);
    });
    y += 4 * (wuduH + 6) + 8;

    y = drawSectionBar(ctx1, '2. CE QUI ANNULE LES ABLUTIONS & LE TAYAMMUM (ABLUTIONS SÈCHES)', y, true);
    const nulW = Math.floor((CONTENT_W - 12) / 4);
    WUDU_NULLIFIERS.forEach((n, idx) => {
      const bx = MARGIN_X + idx * (nulW + 4);
      ctx1.fillStyle = '#fffbeb';
      ctx1.fillRect(bx, y, nulW, 92);
      ctx1.strokeStyle = '#fcd34d';
      ctx1.strokeRect(bx, y, nulW, 92);

      ctx1.fillStyle = '#92400e';
      ctx1.font = 'bold 15px Inter, sans-serif';
      ctx1.fillText(n.titleFr.slice(0, 32), bx + 8, y + 22);

      ctx1.textAlign = 'right';
      ctx1.fillStyle = '#0f172a';
      ctx1.font = 'bold 21px "Noto Naskh Arabic", "Amiri", serif';
      ctx1.fillText(n.arabic, bx + nulW - 8, y + 48);
      ctx1.textAlign = 'left';

      ctx1.fillStyle = '#0369a1';
      ctx1.font = 'bold 14px "JetBrains Mono", monospace';
      ctx1.fillText(n.phonetic, bx + 8, y + 68);

      ctx1.fillStyle = '#334155';
      ctx1.font = '13.5px Inter, sans-serif';
      ctx1.fillText(n.detailFr.slice(0, 42), bx + 8, y + 86);
    });
    y += 102;

    y = drawSectionBar(ctx1, '3. TABLEAU DES 5 PRIÈRES OBLIGATOIRES QUOTIDIENNES (الصَّلَوَاتُ الْخَمْسُ)', y);
    const prW = Math.floor((CONTENT_W - 16) / 5);
    FIVE_DAILY_PRAYERS.forEach((pr, idx) => {
      const bx = MARGIN_X + idx * (prW + 4);
      ctx1.fillStyle = '#f0f9ff';
      ctx1.fillRect(bx, y, prW, 134);
      ctx1.strokeStyle = '#38bdf8';
      ctx1.strokeRect(bx, y, prW, 134);

      ctx1.fillStyle = '#0369a1';
      ctx1.font = 'bold 16.5px Inter, sans-serif';
      ctx1.fillText(pr.nameFr, bx + 8, y + 22);

      ctx1.textAlign = 'right';
      ctx1.fillStyle = '#0f172a';
      ctx1.font = 'bold 24px "Noto Naskh Arabic", "Amiri", serif';
      ctx1.fillText(pr.nameArabic, bx + prW - 8, y + 52);
      ctx1.textAlign = 'left';

      ctx1.fillStyle = '#0284c7';
      ctx1.font = 'bold 14.5px "JetBrains Mono", monospace';
      ctx1.fillText(pr.namePhonetic, bx + 8, y + 74);

      ctx1.fillStyle = '#0f172a';
      ctx1.font = 'bold 16px Inter, sans-serif';
      ctx1.fillText(`Obligatoire : ${pr.fardRakats} Rak‘āt`, bx + 8, y + 98);

      ctx1.fillStyle = '#334155';
      ctx1.font = 'bold 13.5px Inter, sans-serif';
      ctx1.fillText(pr.recitationVoice.slice(0, 28), bx + 8, y + 122);
    });
    y += 144;

    y = drawSectionBar(ctx1, '4. LA PRIÈRE PAS À PAS (AṢ-ṢALĀT) — ÉTAPES 1 À 5 (DEBOUT, FĀTIḤA & RUKŪ‘)', y, true);
    SALAT_STEP_BY_STEP.slice(0, 5).forEach((st, idx) => {
      const rowH = 122;
      const by = y + idx * (rowH + 6);
      ctx1.fillStyle = idx % 2 === 0 ? '#ffffff' : '#f8fafc';
      ctx1.fillRect(MARGIN_X, by, CONTENT_W, rowH);
      ctx1.strokeStyle = '#cbd5e1';
      ctx1.strokeRect(MARGIN_X, by, CONTENT_W, rowH);

      ctx1.fillStyle = '#0369a1';
      ctx1.font = 'bold 18px Inter, sans-serif';
      ctx1.fillText(`Étape ${st.stepNumber} · ${st.postureFr} [${st.statusFr}]`, MARGIN_X + 12, by + 25);

      ctx1.textAlign = 'right';
      ctx1.fillStyle = '#0f172a';
      ctx1.font = 'bold 25px "Noto Naskh Arabic", "Amiri", serif';
      ctx1.fillText(st.arabic, MARGIN_X + CONTENT_W - 14, by + 58);
      ctx1.textAlign = 'left';

      ctx1.fillStyle = '#0284c7';
      ctx1.font = 'bold 16.5px "JetBrains Mono", monospace';
      ctx1.fillText(`Phonétique : ${st.phonetic}`, MARGIN_X + 12, by + 86);

      ctx1.fillStyle = '#1e293b';
      ctx1.font = 'bold 16.5px Inter, sans-serif';
      ctx1.fillText(`Sens : « ${st.french} »`, MARGIN_X + 12, by + 112);
    });

    canvases.push(c1);

    // PAGE 2 : Suite de la Prière pas à pas (Étapes 6 à 11 : Sujūd, Tachahhud complet, Prière Ibrāhīmique, Taslīm) + QCM
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-10',
      'GUIDE DE LA PRIÈRE : PROSTERNATION, TACHAHHUD, SALĀT IBRĀHĪMIYYAH & QCM',
      2,
      2
    );
    let y2 = 78;

    y2 = drawSectionBar(ctx2, '5. LA PRIÈRE PAS À PAS — ÉTAPES 6 À 11 (SUJŪD, TACHAHHUD & SALUT FINAL)', y2);
    SALAT_STEP_BY_STEP.slice(5, 11).forEach((st, idx) => {
      const isLong = st.stepNumber === 9 || st.stepNumber === 10;
      const rowH = isLong ? 210 : 124;
      ctx2.fillStyle = isLong ? '#f0f9ff' : idx % 2 === 0 ? '#ffffff' : '#f8fafc';
      ctx2.fillRect(MARGIN_X, y2, CONTENT_W, rowH);
      ctx2.strokeStyle = isLong ? '#0284c7' : '#cbd5e1';
      ctx2.lineWidth = isLong ? 2 : 1;
      ctx2.strokeRect(MARGIN_X, y2, CONTENT_W, rowH);
      ctx2.lineWidth = 1;

      ctx2.fillStyle = '#0369a1';
      ctx2.font = 'bold 18.5px Inter, sans-serif';
      ctx2.fillText(`Étape ${st.stepNumber} · ${st.postureFr} [${st.statusFr}]`, MARGIN_X + 12, y2 + 26);

      if (isLong) {
        const arMid = Math.ceil(st.arabic.length / 2);
        const splitSpace = st.arabic.indexOf(' ', arMid);
        const arLine1 = splitSpace > 0 ? st.arabic.slice(0, splitSpace) : st.arabic;
        const arLine2 = splitSpace > 0 ? st.arabic.slice(splitSpace + 1) : '';

        ctx2.textAlign = 'right';
        ctx2.fillStyle = '#0f172a';
        ctx2.font = 'bold 24px "Noto Naskh Arabic", "Amiri", serif';
        ctx2.fillText(arLine1, MARGIN_X + CONTENT_W - 14, y2 + 60);
        if (arLine2) {
          ctx2.fillText(arLine2, MARGIN_X + CONTENT_W - 14, y2 + 94);
        }
        ctx2.textAlign = 'left';

        ctx2.fillStyle = '#0284c7';
        ctx2.font = 'bold 15.5px "JetBrains Mono", monospace';
        let py = y2 + 122;
        py = wrapCanvasText(ctx2, `Phonétique : ${st.phonetic}`, MARGIN_X + 12, py, CONTENT_W - 24, 20);

        ctx2.fillStyle = '#1e293b';
        ctx2.font = 'bold 15.5px Inter, sans-serif';
        wrapCanvasText(ctx2, `Sens : « ${st.french} »`, MARGIN_X + 12, py + 4, CONTENT_W - 24, 20);
      } else {
        ctx2.textAlign = 'right';
        ctx2.fillStyle = '#0f172a';
        ctx2.font = 'bold 26px "Noto Naskh Arabic", "Amiri", serif';
        ctx2.fillText(st.arabic, MARGIN_X + CONTENT_W - 14, y2 + 58);
        ctx2.textAlign = 'left';

        ctx2.fillStyle = '#0284c7';
        ctx2.font = 'bold 17px "JetBrains Mono", monospace';
        ctx2.fillText(`Phonétique : ${st.phonetic}`, MARGIN_X + 12, y2 + 88);

        ctx2.fillStyle = '#1e293b';
        ctx2.font = 'bold 17px Inter, sans-serif';
        ctx2.fillText(`Sens : « ${st.french} »`, MARGIN_X + 12, y2 + 114);
      }
      y2 += rowH + 8;
    });

    drawQuizBlockOnCanvas(ctx2, 'Prière & Ablutions (Wuḍū’ & Ṣalāt)', PDF10_PRIERE_QUIZ, y2 + 4);
    canvases.push(c2);
  } else if (docId === 'pdf-resume-islam') {
    // PAGE 1 : Les 5 Piliers de l’Islam, Les 6 Piliers de la Foi (Īmān) & Les 3 Dimensions du Tawḥīd
    const { canvas: c1, ctx: ctx1 } = createA4Canvas(
      'PDF-11',
      'RÉSUMÉ COMPLET DE L’ISLAM : PILIERS DE L’ISLAM, PILIERS DE LA FOI & TAWḤĪD',
      1,
      2
    );
    let y = 78;

    y = drawSectionBar(ctx1, '1. LES 5 PILIERS DE L’ISLAM (أَرْكَانُ الْإِسْلَامِ الْخَمْسَةُ — ARKĀNU L-ISLĀM)', y);
    FIVE_PILLARS_ISLAM.forEach((pil, idx) => {
      const rowH = 136;
      const by = y + idx * (rowH + 6);
      ctx1.fillStyle = idx % 2 === 0 ? '#f0f9ff' : '#ffffff';
      ctx1.fillRect(MARGIN_X, by, CONTENT_W, rowH);
      ctx1.strokeStyle = '#7dd3fc';
      ctx1.strokeRect(MARGIN_X, by, CONTENT_W, rowH);

      ctx1.fillStyle = '#0369a1';
      ctx1.font = 'bold 18.5px Inter, sans-serif';
      ctx1.fillText(`Pilier ${pil.number} · ${pil.titleFr}`, MARGIN_X + 12, by + 26);

      ctx1.textAlign = 'right';
      ctx1.fillStyle = '#0f172a';
      ctx1.font = 'bold 25px "Noto Naskh Arabic", "Amiri", serif';
      ctx1.fillText(pil.arabic, MARGIN_X + CONTENT_W - 14, by + 56);
      ctx1.textAlign = 'left';

      ctx1.fillStyle = '#0284c7';
      ctx1.font = 'bold 16px "JetBrains Mono", monospace';
      ctx1.fillText(`Phonétique : ${pil.phonetic}`, MARGIN_X + 12, by + 82);

      ctx1.fillStyle = '#1e293b';
      ctx1.font = 'bold 16px Inter, sans-serif';
      ctx1.fillText(`Sens : ${pil.french}`, MARGIN_X + 12, by + 106);

      ctx1.fillStyle = '#475569';
      ctx1.font = '14.5px Inter, sans-serif';
      ctx1.fillText(`À retenir : ${pil.summaryFr.slice(0, 118)}`, MARGIN_X + 12, by + 128);
    });
    y += 5 * 142 + 8;

    y = drawSectionBar(ctx1, '2. LES 6 PILIERS DE LA FOI (أَرْكَانُ الْإِيمَانِ السِّتَّةُ — ARKĀNU L-ĪMĀN)', y, true);
    const imW = Math.floor((CONTENT_W - 12) / 2);
    const imH = 228;
    SIX_PILLARS_IMAN.forEach((im, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const bx = MARGIN_X + col * (imW + 12);
      const by = y + row * (imH + 8);
      ctx1.fillStyle = '#f8fafc';
      ctx1.fillRect(bx, by, imW, imH);
      ctx1.strokeStyle = '#cbd5e1';
      ctx1.strokeRect(bx, by, imW, imH);

      ctx1.fillStyle = '#0f172a';
      ctx1.font = 'bold 17.5px Inter, sans-serif';
      ctx1.fillText(`${im.number}. ${im.titleFr.split('(')[0].trim()}`, bx + 12, by + 26);

      ctx1.textAlign = 'right';
      ctx1.fillStyle = '#0369a1';
      ctx1.font = 'bold 25px "Noto Naskh Arabic", "Amiri", serif';
      ctx1.fillText(im.arabic, bx + imW - 12, by + 60);
      ctx1.textAlign = 'left';

      ctx1.fillStyle = '#0284c7';
      ctx1.font = 'bold 15.5px "JetBrains Mono", monospace';
      ctx1.fillText(im.phonetic, bx + 12, by + 86);

      ctx1.fillStyle = '#1e293b';
      ctx1.font = 'bold 15.5px Inter, sans-serif';
      ctx1.fillText(`Sens : ${im.french}`, bx + 12, by + 112);

      ctx1.fillStyle = '#334155';
      ctx1.font = '14.5px Inter, sans-serif';
      let ty = by + 138;
      ty = wrapCanvasText(ctx1, im.summaryFr, bx + 12, ty, imW - 24, 20);

      ctx1.fillStyle = '#0369a1';
      ctx1.font = 'bold 14px Inter, sans-serif';
      wrapCanvasText(ctx1, `Preuve : ${im.proofFrench}`, bx + 12, ty + 4, imW - 24, 19);
    });

    canvases.push(c1);

    // PAGE 2 : Les 5 Statuts du Fiqh, 5 Grandes Maximes, 5 Maqāṣid, 12 Mois Hégiriens, Invocations & QCM
    const { canvas: c2, ctx: ctx2 } = createA4Canvas(
      'PDF-11',
      'RÉSUMÉ DE L’ISLAM : STATUTS DU FIQH, MAXIMES, MAQĀṢID, INVOCATIONS & QCM',
      2,
      2
    );
    let y2 = 78;

    y2 = drawSectionBar(ctx2, '3. LES 5 STATUTS DES ACTES EN JURISPRUDENCE (الْأَحْكَامُ التَّكْلِيفِيَّةُ الْخَمْسَةُ)', y2);
    const fqW = Math.floor((CONTENT_W - 16) / 5);
    FIQH_FIVE_RULINGS.forEach((fq, idx) => {
      const bx = MARGIN_X + idx * (fqW + 4);
      ctx2.fillStyle = '#f0f9ff';
      ctx2.fillRect(bx, y2, fqW, 146);
      ctx2.strokeStyle = '#7dd3fc';
      ctx2.strokeRect(bx, y2, fqW, 146);

      ctx2.fillStyle = '#0369a1';
      ctx2.font = 'bold 15.5px Inter, sans-serif';
      ctx2.fillText(fq.nameFr, bx + 8, y2 + 22);

      ctx2.textAlign = 'right';
      ctx2.fillStyle = '#0f172a';
      ctx2.font = 'bold 22px "Noto Naskh Arabic", "Amiri", serif';
      ctx2.fillText(fq.arabic, bx + fqW - 8, y2 + 52);
      ctx2.textAlign = 'left';

      ctx2.fillStyle = '#0284c7';
      ctx2.font = 'bold 13.5px "JetBrains Mono", monospace';
      ctx2.fillText(fq.phonetic.slice(0, 26), bx + 8, y2 + 74);

      ctx2.fillStyle = '#1e293b';
      ctx2.font = '13.5px Inter, sans-serif';
      wrapCanvasText(ctx2, fq.definitionFr, bx + 8, y2 + 96, fqW - 16, 17);
    });
    y2 += 156;

    y2 = drawSectionBar(ctx2, '4. LES 5 GRANDES MAXIMES JURIDIQUES & LES 5 FINALITÉS (MAQĀṢID ACH-CHARĪ‘AH)', y2, true);
    const colHalfW = Math.floor((CONTENT_W - 12) / 2);
    FIVE_LEGAL_MAXIMS.forEach((mx, idx) => {
      const by = y2 + idx * 92;
      ctx2.fillStyle = '#f8fafc';
      ctx2.fillRect(MARGIN_X, by, colHalfW, 86);
      ctx2.strokeStyle = '#cbd5e1';
      ctx2.strokeRect(MARGIN_X, by, colHalfW, 86);

      ctx2.fillStyle = '#0369a1';
      ctx2.font = 'bold 15.5px Inter, sans-serif';
      ctx2.fillText(`Maxime ${mx.number} · ${mx.titleFr}`, MARGIN_X + 10, by + 22);

      ctx2.textAlign = 'right';
      ctx2.fillStyle = '#0f172a';
      ctx2.font = 'bold 21px "Noto Naskh Arabic", "Amiri", serif';
      ctx2.fillText(mx.arabic.split('(')[0].trim(), MARGIN_X + colHalfW - 10, by + 48);
      ctx2.textAlign = 'left';

      ctx2.fillStyle = '#0284c7';
      ctx2.font = 'bold 14px "JetBrains Mono", monospace';
      ctx2.fillText(mx.phonetic.split('(')[0].trim(), MARGIN_X + 10, by + 72);
    });

    FIVE_MAQASID_SHARIA.forEach((mq, idx) => {
      const bx = MARGIN_X + colHalfW + 12;
      const by = y2 + idx * 92;
      ctx2.fillStyle = '#f0f9ff';
      ctx2.fillRect(bx, by, colHalfW, 86);
      ctx2.strokeStyle = '#7dd3fc';
      ctx2.strokeRect(bx, by, colHalfW, 86);

      ctx2.fillStyle = '#0369a1';
      ctx2.font = 'bold 15.5px Inter, sans-serif';
      ctx2.fillText(mq.titleFr, bx + 10, by + 22);

      ctx2.textAlign = 'right';
      ctx2.fillStyle = '#0f172a';
      ctx2.font = 'bold 23px "Noto Naskh Arabic", "Amiri", serif';
      ctx2.fillText(mq.arabic, bx + colHalfW - 10, by + 50);
      ctx2.textAlign = 'left';

      ctx2.fillStyle = '#1e293b';
      ctx2.font = 'bold 14.5px Inter, sans-serif';
      ctx2.fillText(`${mq.phonetic} — ${mq.french.slice(0, 48)}`, bx + 10, by + 74);
    });
    y2 += 5 * 92 + 8;

    y2 = drawSectionBar(ctx2, '5. INVOCATIONS QUOTIDIENNES ESSENTIELLES (ADHKĀR DU CROYANT)', y2);
    const duaW = Math.floor((CONTENT_W - 10) / 2);
    DAILY_DUAS.slice(0, 4).forEach((dua, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const bx = MARGIN_X + col * (duaW + 10);
      const by = y2 + row * 116;
      ctx2.fillStyle = '#ffffff';
      ctx2.fillRect(bx, by, duaW, 110);
      ctx2.strokeStyle = '#cbd5e1';
      ctx2.strokeRect(bx, by, duaW, 110);

      ctx2.fillStyle = '#0369a1';
      ctx2.font = 'bold 16px Inter, sans-serif';
      ctx2.fillText(dua.momentFr, bx + 10, by + 22);

      ctx2.textAlign = 'right';
      ctx2.fillStyle = '#0f172a';
      ctx2.font = 'bold 22px "Noto Naskh Arabic", "Amiri", serif';
      ctx2.fillText(dua.arabic.slice(0, 56), bx + duaW - 10, by + 52);
      ctx2.textAlign = 'left';

      ctx2.fillStyle = '#0284c7';
      ctx2.font = 'bold 14px "JetBrains Mono", monospace';
      ctx2.fillText(dua.phonetic.slice(0, 66), bx + 10, by + 78);

      ctx2.fillStyle = '#1e293b';
      ctx2.font = 'bold 14px Inter, sans-serif';
      ctx2.fillText(`« ${dua.french.slice(0, 72)} »`, bx + 10, by + 100);
    });
    y2 += 2 * 116 + 6;

    drawQuizBlockOnCanvas(ctx2, 'Résumé de l’Islam, Piliers & Fiqh', PDF11_RESUME_ISLAM_QUIZ, y2);
    canvases.push(c2);
  }

  const pagesJpegBytes = canvases.map((c) => {
    const dataUrl = c.toDataURL('image/jpeg', 0.95);
    const b64 = dataUrl.split(',')[1];
    return Uint8Array.from(atob(b64), (ch) => ch.charCodeAt(0));
  });

  const pdfBytes = buildMultiPageJpegPdf(pagesJpegBytes, PAGE_W, PAGE_H);
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cours-arabe-a2-${docId}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

function buildMultiPageJpegPdf(
  pagesJpegBytes: Uint8Array[],
  imgWidth: number,
  imgHeight: number
): Uint8Array {
  const pageWidth = 595.28; // A4 pt
  const pageHeight = 841.89; // A4 pt

  const encoder = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [];
  let currentLength = 0;

  const pushStr = (str: string) => {
    const bytes = encoder.encode(str);
    chunks.push(bytes);
    currentLength += bytes.length;
  };

  const pushBytes = (bytes: Uint8Array) => {
    chunks.push(bytes);
    currentLength += bytes.length;
  };

  const recordObj = () => {
    offsets.push(currentLength);
  };

  pushStr('%PDF-1.3\n%\xFF\xFF\xFF\xFF\n');

  // Object 1: Catalog
  recordObj();
  pushStr('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  const pageCount = pagesJpegBytes.length;
  const kidsRefs = pagesJpegBytes.map((_, i) => `${3 + i * 3} 0 R`).join(' ');

  // Object 2: Pages
  recordObj();
  pushStr(`2 0 obj\n<< /Type /Pages /Kids [${kidsRefs}] /Count ${pageCount} >>\nendobj\n`);

  for (let i = 0; i < pageCount; i++) {
    const pageObjId = 3 + i * 3;
    const imgObjId = 4 + i * 3;
    const contentObjId = 5 + i * 3;
    const jpegBytes = pagesJpegBytes[i];

    recordObj();
    pushStr(
      `${pageObjId} 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /XObject << /Im0 ${imgObjId} 0 R >> >> /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents ${contentObjId} 0 R >>\nendobj\n`
    );

    recordObj();
    pushStr(
      `${imgObjId} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${imgWidth} /Height ${imgHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`
    );
    pushBytes(jpegBytes);
    pushStr('\nendstream\nendobj\n');

    const contentStream = `q\n${pageWidth} 0 0 ${pageHeight} 0 0 cm\n/Im0 Do\nQ\n`;
    recordObj();
    pushStr(
      `${contentObjId} 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}endstream\nendobj\n`
    );
  }

  const xrefOffset = currentLength;
  pushStr(`xref\n0 ${offsets.length + 1}\n0000000000 65535 f \n`);
  for (const off of offsets) {
    pushStr(`${String(off).padStart(10, '0')} 00000 n \n`);
  }
  pushStr(
    `trailer\n<< /Size ${offsets.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`
  );

  const output = new Uint8Array(currentLength);
  let pos = 0;
  for (const chunk of chunks) {
    output.set(chunk, pos);
    pos += chunk.length;
  }
  return output;
}
