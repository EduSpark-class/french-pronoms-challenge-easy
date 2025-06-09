
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, XCircle, Eye } from 'lucide-react';

const Exercise3 = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showCorrections, setShowCorrections] = useState<Record<number, boolean>>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);

  const originalQuestions = [
    {
      id: 1,
      sentence1: "J'ai vu un homme.",
      sentence2: "Cet homme courait dans la rue.",
      correct: "J'ai vu un homme qui courait dans la rue.",
      hint: "qui (sujet)"
    },
    {
      id: 2,
      sentence1: "Elle a acheté une robe.",
      sentence2: "Cette robe lui plaît beaucoup.",
      correct: "Elle a acheté une robe qui lui plaît beaucoup.",
      hint: "qui (sujet)"
    },
    {
      id: 3,
      sentence1: "Nous avons visité un musée.",
      sentence2: "Tu m'as recommandé ce musée.",
      correct: "Nous avons visité un musée que tu m'as recommandé.",
      hint: "que (objet direct)"
    },
    {
      id: 4,
      sentence1: "Il y a des étudiants dans la classe.",
      sentence2: "Ces étudiants travaillent beaucoup.",
      correct: "Il y a des étudiants qui travaillent beaucoup dans la classe.",
      hint: "qui (sujet)"
    },
    {
      id: 5,
      sentence1: "J'ai lu un livre.",
      sentence2: "Mon professeur a écrit ce livre.",
      correct: "J'ai lu un livre que mon professeur a écrit.",
      hint: "que (objet direct)"
    },
    {
      id: 6,
      sentence1: "Voici la voiture.",
      sentence2: "Mes parents ont acheté cette voiture.",
      correct: "Voici la voiture que mes parents ont achetée.",
      hint: "que (objet direct)"
    },
    {
      id: 7,
      sentence1: "La fille est ma sœur.",
      sentence2: "Cette fille chante si bien.",
      correct: "La fille qui chante si bien est ma sœur.",
      hint: "qui (sujet)"
    },
    {
      id: 8,
      sentence1: "Nous irons au restaurant.",
      sentence2: "Tu connais ce restaurant.",
      correct: "Nous irons au restaurant que tu connais.",
      hint: "que (objet direct)"
    },
    {
      id: 9,
      sentence1: "Les enfants sont très heureux.",
      sentence2: "Ces enfants ont gagné le concours.",
      correct: "Les enfants qui ont gagné le concours sont très heureux.",
      hint: "qui (sujet)"
    },
    {
      id: 10,
      sentence1: "Elle porte un collier.",
      sentence2: "Sa grand-mère lui a offert ce collier.",
      correct: "Elle porte un collier que sa grand-mère lui a offert.",
      hint: "que (objet direct)"
    }
  ];

  useEffect(() => {
    const shuffled = [...originalQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const toggleCorrection = (questionId: number) => {
    setShowCorrections(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const isCorrect = (questionId: number) => {
    const question = shuffledQuestions.find(q => q.id === questionId);
    const userAnswer = answers[questionId]?.trim().toLowerCase();
    const correctAnswer = question?.correct.toLowerCase();
    
    // More flexible checking - remove extra spaces and punctuation
    const normalizeText = (text: string) => 
      text?.replace(/[.,!?;]/g, '').replace(/\s+/g, ' ').trim();
    
    return question && normalizeText(userAnswer) === normalizeText(correctAnswer);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">
          Exercice 3: Reliez les phrases avec "qui" ou "que"
        </CardTitle>
        <CardDescription>
          Combinez les deux phrases en utilisant le pronom relatif approprié.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {shuffledQuestions.map((question, index) => (
          <div key={question.id} className="space-y-4 p-4 border rounded-lg bg-card">
            <div className="flex items-start space-x-2">
              <span className="font-medium text-sm text-muted-foreground mt-1">
                {index + 1}.
              </span>
              <div className="flex-1 space-y-2">
                <div className="text-sm text-gray-600">
                  <p><strong>Phrase 1 :</strong> {question.sentence1}</p>
                  <p><strong>Phrase 2 :</strong> {question.sentence2}</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Votre réponse :</label>
                  <Textarea
                    placeholder="Écrivez votre phrase combinée ici..."
                    value={answers[question.id] || ""}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    className="min-h-20"
                  />
                </div>
              </div>
              
              {submitted && (
                <div className="ml-2">
                  {isCorrect(question.id) ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              )}
            </div>

            {submitted && !isCorrect(question.id) && (
              <div className="space-y-2 ml-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleCorrection(question.id)}
                  className="text-xs"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Voir la correction
                </Button>
                {showCorrections[question.id] && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded text-sm space-y-1">
                    <p><strong>Réponse correcte :</strong> {question.correct}</p>
                    <p><strong>Indice :</strong> {question.hint}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        
        <Button 
          onClick={handleSubmit} 
          className="w-full mt-6"
          disabled={Object.keys(answers).length < shuffledQuestions.length}
        >
          Soumettre les réponses
        </Button>

        {submitted && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm text-blue-800">
              <strong>Rappel :</strong> "Qui" remplace le sujet, "que" remplace l'objet direct.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Exercise3;
