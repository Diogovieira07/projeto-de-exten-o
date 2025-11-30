import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual do projeto Soluções Digitais. Posso ajudar com dicas sobre adoção responsável, cuidados básicos com pets ou tecnologia para animais. O que você gostaria de saber?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY; 
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            {
                role: 'user',
                parts: [{ text: userMessage }]
            }
        ],
        config: {
            systemInstruction: "Você é um assistente virtual amigável e especializado do projeto 'Soluções Digitais para Animais Domésticos' do IFCE. Sua missão é fornecer informações úteis sobre saúde animal, dicas de adoção responsável, e como a tecnologia pode ajudar donos de pets. Seja conciso, use emojis ocasionalmente e mantenha um tom educativo e acolhedor. Se a pergunta não for sobre animais ou tecnologia para pets, gentilmente redirecione o assunto."
        }
      });

      const text = response.text || "Desculpe, não consegui processar sua solicitação no momento.";
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error("Error generating content:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Desculpe, estou com dificuldades técnicas no momento. Tente novamente mais tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ia" className="py-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-full mb-4 shadow-lg">
                <Sparkles className="h-6 w-6 text-yellow-300" />
            </div>
          <h2 className="text-3xl font-bold">Assistente Virtual Pet</h2>
          <p className="mt-2 text-teal-100">
            Uma demonstração prática de nossas soluções digitais. Tire suas dúvidas sobre cuidados com pets agora mesmo.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col">
          {/* Chat Header */}
          <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 flex items-center">
            <div className="bg-teal-600 p-2 rounded-full mr-3">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">IA Veterinária (Demo)</h3>
              <p className="text-xs text-gray-500">Powered by Gemini 2.5</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-teal-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-bl-none px-5 py-3 shadow-sm flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin text-teal-600 mr-2" />
                  <span className="text-xs text-gray-500">Digitando...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: Qual a melhor ração para gatos idosos?"
                className="flex-grow text-gray-800 placeholder-gray-400 border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};