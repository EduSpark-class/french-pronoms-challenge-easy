
import React from 'react';
import Exercise1 from '@/components/Exercise1';
import Exercise2 from '@/components/Exercise2';
import Exercise3 from '@/components/Exercise3';
import { Separator } from '@/components/ui/separator';

const Index = () => {
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
