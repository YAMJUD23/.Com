import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, Award, HelpCircle, XCircle } from 'lucide-react';
import { QuizQuestion } from '../data/alphabetData';
import { calculateQuizScore } from '../utils/learningEngine';
import { ArabicTriadBlock } from './ArabicTriadBlock';

interface SectionQuizProps {
  sectionId: string;
  sectionTitle: string;
  questions: QuizQuestion[];
  onQuizCompleted?: (sectionId: string, percentage: number) => void;
}

export const SectionQuiz: React.FC<SectionQuizProps> = ({
  sectionId,
  sectionTitle,
  questions,
  onQuizCompleted
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const result = calculateQuizScore(questions, selectedAnswers);
    if (onQuizCompleted) {
      onQuizCompleted(sectionId, result.percentage);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const scoreResult = calculateQuizScore(questions, selectedAnswers);
  const allAnswered = scoreResult.answeredCount === questions.length;

  return (
    <section
      aria-labelledby={`quiz-heading-${sectionId}`}
      className="mt-12 bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 shadow-xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sky-100">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
            QCM DE VALIDATION DE LA CATÉGORIE · TEST INTERACTIF & IMPRIMABLE
          </p>
          <h3
            id={`quiz-heading-${sectionId}`}
            className="mt-0.5 text-lg sm:text-xl font-bold text-slate-900"
          >
            {sectionTitle}
          </h3>
          <p className="mt-0.5 text-xs text-slate-600">
            Coche tes réponses directement ci-dessous (ou sur la feuille imprimée) pour vérifier ta maîtrise du cours.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-mono-tabular text-slate-600">
            Répondu : {scoreResult.answeredCount}/{questions.length}
          </span>
          {submitted && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Recommencer le quiz
            </button>
          )}
        </div>
      </div>

      {/* Questions list */}
      <div className="mt-6 space-y-6">
        {questions.map((q, idx) => {
          const chosenIndex = selectedAnswers[q.id];
          const isCorrect = submitted && chosenIndex === q.correctIndex;

          return (
            <div
              key={q.id}
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-base font-semibold text-slate-900">
                  <span className="font-mono-tabular text-sky-700 mr-2">
                    0{idx + 1}.
                  </span>
                  {q.question}
                </h4>
                {submitted && (
                  <span className="text-xs font-semibold shrink-0 flex items-center gap-1">
                    {isCorrect ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Correct
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> À revoir
                      </span>
                    )}
                  </span>
                )}
              </div>

              {q.arabicPrompt && (
                <ArabicTriadBlock
                  triad={q.arabicPrompt}
                  size="sm"
                  labelPrefix="Support de la question (Arabe · Phonétique · Sens) :"
                />
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt, optIdx) => {
                  const isSelected = chosenIndex === optIdx;
                  const isRightAnswer = q.correctIndex === optIdx;

                  let btnClass =
                    'bg-white text-slate-800 border-slate-200 hover:border-sky-300 hover:bg-sky-50/40';

                  if (!submitted && isSelected) {
                    btnClass =
                      'bg-sky-600 text-white border-sky-600 font-semibold';
                  } else if (submitted) {
                    if (isRightAnswer) {
                      btnClass =
                        'bg-emerald-50 text-emerald-950 border-emerald-400 font-semibold';
                    } else if (isSelected && !isRightAnswer) {
                      btnClass =
                        'bg-rose-50 text-rose-900 border-rose-300';
                    } else {
                      btnClass = 'bg-white/60 text-slate-500 border-slate-200';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`text-left px-4 py-3 rounded-lg border text-sm transition-colors flex items-center justify-between gap-2 ${btnClass}`}
                    >
                      <span>{opt}</span>
                      {submitted && isRightAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="pt-2 text-xs text-slate-700 bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="font-semibold text-sky-800">
                    Explication pédagogique :{' '}
                  </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit or Score Summary */}
      <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {!submitted ? (
          <>
            <p className="text-xs text-slate-600 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
              {allAnswered
                ? 'Toutes les questions sont remplies. Clique sur « Valider mes réponses » pour voir ton score.'
                : `Sélectionne une réponse pour chaque question (${scoreResult.answeredCount}/${questions.length} répondues).`}
            </p>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={scoreResult.answeredCount === 0}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 disabled:bg-slate-200 disabled:text-slate-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Valider mes réponses ({scoreResult.answeredCount}/{questions.length})
            </button>
          </>
        ) : (
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-sky-50/80 border border-sky-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-slate-900 font-mono-tabular">
                  Score : {scoreResult.correctCount} / {scoreResult.totalCount} ({scoreResult.percentage} %) · {scoreResult.badgeLabel}
                </p>
                <p className="text-xs text-slate-700 mt-0.5">
                  {scoreResult.encouragementMessage}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Refaire ce quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
