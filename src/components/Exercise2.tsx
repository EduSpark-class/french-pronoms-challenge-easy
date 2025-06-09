
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, Eye, RotateCcw } from 'lucide-react';

const Exercise2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userSentence, setUserSentence] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [scores, setScores] = useState<boolean[]>([]);

  const sentences = [
    "La femme qui chante est talentueuse",
    "Le livre que tu lis est passionnant",
    "Les enfants qui jouent sont joyeux",
    "La voiture que nous avons achetée est rouge",
    "L'homme qui travaille ici est sympathique",
    "Le film que vous regardez est drôle",
    "La fille qui danse bien est ma cousine",
    "Les fleurs que elle a plantées sont magnifiques",
    "Le chat qui dort sur le canapé est mignon",
    "La maison que ils ont construite est moderne"
  ];

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const words = sentences[currentQuestion].split(' ');
    setAvailableWords(shuffleArray(words));
    setUserSentence([]);
    setSubmitted(false);
    setShowCorrection(false);
  }, [currentQuestion]);

  const addWordToSentence = (word: string, index: number) => {
    setUserSentence(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter((_, i) => i !== index));
  };

  const removeWordFromSentence = (index: number) => {
    const word = userSentence[index];
    setUserSentence(prev => prev.filter((_, i) => i !== index));
    setAvailableWords(prev => [...prev, word]);
  };

  const resetSentence = () => {
    const words = sentences[currentQuestion].split(' ');
    setAvailableWords(shuffleArray(words));
    setUserSentence([]);
  };

  const checkAnswer = () => {
    const correct = userSentence.join(' ') === sentences[currentQuestion];
    setSubmitted(true);
    setScores(prev => {
      const newScores = [...prev];
      newScores[currentQuestion] = correct;
      return newScores;
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < sentences.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const isCorrect = scores[currentQuestion] === true;
  const isIncorrect = scores[currentQuestion] === false;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">
          Exercice 2: Remettez les mots dans l'ordre
        </CardTitle>
        <CardDescription>
          Glissez les mots pour former une phrase correcte avec "qui" ou "que".
        </CardDescription>
        <div className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} sur {sentences.length}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Available words */}
        <div className="space-y-2">
          <h3 className="font-medium">Mots disponibles :</h3>
          <div className="flex flex-wrap gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-16">
            {availableWords.map((word, index) => (
              <Button
                key={`${word}-${index}`}
                variant="outline"
                size="sm"
                onClick={() => addWordToSentence(word, index)}
                className="text-sm hover:bg-blue-50"
              >
                {word}
              </Button>
            ))}
          </div>
        </div>

        {/* User's sentence */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Votre phrase :</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetSentence}
              className="text-xs"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Recommencer
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 p-4 border-2 border-gray-300 rounded-lg min-h-16 bg-gray-50">
            {userSentence.map((word, index) => (
              <Button
                key={`${word}-${index}`}
                variant="secondary"
                size="sm"
                onClick={() => removeWordFromSentence(index)}
                className="text-sm hover:bg-red-100"
              >
                {word}
              </Button>
            ))}
          </div>
        </div>

        {/* Submit and navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            Précédent
          </Button>
          
          <div className="flex items-center space-x-2">
            {submitted && (
              <>
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
              </>
            )}
            
            <Button
              onClick={checkAnswer}
              disabled={userSentence.length === 0 || submitted}
            >
              Vérifier
            </Button>
          </div>

          <Button
            variant="outline"
            onClick={nextQuestion}
            disabled={currentQuestion === sentences.length - 1}
          >
            Suivant
          </Button>
        </div>

        {/* Correction */}
        {submitted && isIncorrect && (
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCorrection(!showCorrection)}
            >
              <Eye className="h-4 w-4 mr-1" />
              Voir la correction
            </Button>
            {showCorrection && (
              <div className="p-4 bg-green-50 border border-green-200 rounded">
                <strong>Phrase correcte :</strong> {sentences[currentQuestion]}
              </div>
            )}
          </div>
        )}

        {/* Progress */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / sentences.length) * 100}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Exercise2;
