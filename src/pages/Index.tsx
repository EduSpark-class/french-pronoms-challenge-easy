
import React, { useState } from 'react';
import Exercise1 from '@/components/Exercise1';
import Exercise2 from '@/components/Exercise2';
import Exercise3 from '@/components/Exercise3';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const Index = () => {
  const [isLessonOpen, setIsLessonOpen] = useState(true);

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

        <Collapsible open={isLessonOpen} onOpenChange={setIsLessonOpen}>
          <Card className="w-full">
            <CardHeader>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full flex items-center justify-between p-0 h-auto">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle className="text-2xl text-primary">
                      Leçon : Les pronoms relatifs "qui" et "que"
                    </CardTitle>
                  </div>
                  {isLessonOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="space-y-4 text-sm md:text-base">
                <p className="text-muted-foreground leading-relaxed">
                  Les pronoms relatifs relient deux phrases pour éviter la répétition.
                  Ils remplacent un mot (un nom ou un pronom) déjà mentionné, et introduisent une proposition relative.
                </p>
                
                <div className="space-y-6">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                      ✅ 1. <span className="bg-green-200 px-2 py-1 rounded mx-2 font-bold">"Qui"</span> = sujet du verbe qui suit
                    </h3>
                    <p className="text-green-700 mb-3">
                      • Il remplace une personne ou une chose qui <span className="bg-green-200 px-1 rounded font-semibold">fait l'action</span>.
                    </p>
                    <p className="font-medium text-green-800 mb-3">
                      📌 Structure : <span className="bg-green-100 px-2 py-1 rounded font-mono">[nom] + qui + [verbe]</span>
                    </p>
                    <div className="space-y-2">
                      <p className="text-green-700">🔷 Exemples:</p>
                      <ul className="space-y-1 ml-4">
                        <li className="text-green-700">
                          • J'ai un ami <span className="bg-green-200 px-1 rounded font-semibold">qui</span> parle chinois.
                          <br />
                          <span className="text-sm text-green-600 ml-2">→ (L'ami parle chinois)</span>
                        </li>
                        <li className="text-green-700">
                          • C'est une voiture <span className="bg-green-200 px-1 rounded font-semibold">qui</span> roule vite.
                          <br />
                          <span className="text-sm text-green-600 ml-2">→ (La voiture roule vite)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                      ✅ 2. <span className="bg-blue-200 px-2 py-1 rounded mx-2 font-bold">"Que"</span> = complément d'objet direct (COD)
                    </h3>
                    <p className="text-blue-700 mb-3">
                      • Il remplace une personne ou une chose qui <span className="bg-blue-200 px-1 rounded font-semibold">reçoit l'action</span>.
                    </p>
                    <p className="font-medium text-blue-800 mb-3">
                      📌 Structure : <span className="bg-blue-100 px-2 py-1 rounded font-mono">[nom] + que + [sujet + verbe]</span>
                    </p>
                    <div className="space-y-2">
                      <p className="text-blue-700">🔷 Exemples:</p>
                      <ul className="space-y-1 ml-4">
                        <li className="text-blue-700">
                          • Le livre <span className="bg-blue-200 px-1 rounded font-semibold">que</span> je lis est intéressant.
                          <br />
                          <span className="text-sm text-blue-600 ml-2">→ (Je lis le livre)</span>
                        </li>
                        <li className="text-blue-700">
                          • La chanson <span className="bg-blue-200 px-1 rounded font-semibold">que</span> tu écoutes est belle.
                          <br />
                          <span className="text-sm text-blue-600 ml-2">→ (Tu écoutes la chanson)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

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
