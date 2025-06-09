
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, Eye } from 'lucide-react';

const Exercise1 = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showCorrections, setShowCorrections] = useState<Record<number, boolean>>({});

  const questions = [
    { id: 1, sentence: "La fille ___ parle est ma sœur.", correct: "qui" },
    { id: 2, sentence: "Le livre ___ je lis est intéressant.", correct: "que" },
    { id: 3, sentence: "L'homme ___ travaille ici est gentil.", correct: "qui" },
    { id: 4, sentence: "La voiture ___ tu vois est neuve.", correct: "que" },
    { id: 5, sentence: "Les enfants ___ jouent sont heureux.", correct: "qui" },
    { id: 6, sentence: "Le film ___ nous regardons est drôle.", correct: "que" },
    { id: 7, sentence: "La dame ___ chante bien est ma tante.", correct: "qui" },
    { id: 8, sentence: "Les fleurs ___ elle a achetées sont belles.", correct: "que" },
    { id: 9, sentence: "Le chien ___ aboie appartient au voisin.", correct: "qui" },
    { id: 10, sentence: "La maison ___ ils habitent est grande.", correct: "que" }
  ];

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
    const question = questions.find(q => q.id === questionId);
    return question && answers[questionId] === question.correct;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Exercice 1: Complétez avec "qui" ou "que"</CardTitle>
        <CardDescription>
          Choisissez le pronom relatif correct pour compléter chaque phrase.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="space-y-3 p-4 border rounded-lg bg-card">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-sm text-muted-foreground">
                {question.id}.
              </span>
              <p className="text-base">{question.sentence}</p>
              {submitted && (
                <div className="ml-auto">
                  {isCorrect(question.id) ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              )}
            </div>
            
            <RadioGroup
              value={answers[question.id] || ""}
              onValueChange={(value) => handleAnswerChange(question.id, value)}
              className="flex space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="qui" id={`qui-${question.id}`} />
                <Label htmlFor={`qui-${question.id}`}>qui</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="que" id={`que-${question.id}`} />
                <Label htmlFor={`que-${question.id}`}>que</Label>
              </div>
            </RadioGroup>

            {submitted && !isCorrect(question.id) && (
              <div className="space-y-2">
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
                  <div className="p-3 bg-green-50 border border-green-200 rounded text-sm">
                    <strong>Correction :</strong> {question.correct}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        
        <Button 
          onClick={handleSubmit} 
          className="w-full mt-6"
          disabled={Object.keys(answers).length < questions.length}
        >
          Soumettre les réponses
        </Button>
      </CardContent>
    </Card>
  );
};

export default Exercise1;
