
import React, { useState } from 'react';
import Exercise1 from '@/components/Exercise1';
import Exercise2 from '@/components/Exercise2';
import Exercise3 from '@/components/Exercise3';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

const Index = () => {
  const [showLesson, setShowLesson] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Les Pronoms Relatifs
          </h1>
          <p className="text-xl text-muted-foreground">
            Exercices sur "qui" et "que"
          </p>
        </header>

        {/* Lesson Section */}
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-primary">Leçon</CardTitle>
                <CardDescription>
                  Les pronoms relatifs "qui" et "que"
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowLesson(!showLesson)}
                className="flex items-center gap-2"
              >
                {showLesson ? (
                  <>
                    <EyeOff className="h-4 w-4" />
                    Masquer
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    Afficher
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          {showLesson && (
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Le pronom "QUI"</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Fonction :</strong> Remplace le sujet</p>
                    <p><strong>Question :</strong> Qui est-ce qui... ?</p>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      <p><strong>Exemple :</strong></p>
                      <p className="text-blue-800">La fille <strong>qui</strong> chante est ma sœur.</p>
                      <p className="text-xs text-blue-600 mt-1">
                        (La fille chante = la fille est le sujet)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Le pronom "QUE"</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Fonction :</strong> Remplace l'objet direct</p>
                    <p><strong>Question :</strong> Qu'est-ce que... ?</p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p><strong>Exemple :</strong></p>
                      <p className="text-green-800">Le livre <strong>que</strong> je lis est intéressant.</p>
                      <p className="text-xs text-green-600 mt-1">
                        (Je lis le livre = le livre est l'objet)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded">
                <h4 className="font-semibold text-amber-800 mb-2">💡 Astuce pour choisir :</h4>
                <p className="text-sm text-amber-700">
                  Essayez de reformuler la phrase : si vous pouvez dire "il/elle + verbe", utilisez <strong>"qui"</strong>. 
                  Si vous pouvez dire "je/tu/il + verbe + quelque chose", utilisez <strong>"que"</strong>.
                </p>
              </div>
            </CardContent>
          )}
        </Card>

        <div className="space-y-12">
          <Exercise1 />
          <Separator className="my-8" />
          <Exercise2 />
          <Separator className="my-8" />
          <Exercise3 />
        </div>

        <footer className="text-center py-8 text-muted-foreground">
          <p>Bonne chance avec vos exercices !</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
