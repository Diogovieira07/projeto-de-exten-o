import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectDetails } from './components/ProjectDetails';
import { Gallery } from './components/Gallery';
import { Blog } from './components/Blog';
import { AiAssistant } from './components/AiAssistant';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <ProjectDetails />
        <Gallery />
        <Blog />
        <AiAssistant />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;