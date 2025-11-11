import { useState, useRef, useEffect, FormEvent } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Send, Bot, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

const suggestionPrompts = [
  "What's a mutual fund?",
  "Explain SIPs in simple terms",
  "How do I diversify my portfolio?",
];

const AIChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey || apiKey.includes('YOUR_API_KEY')) {
      setApiKeyMissing(true);
      setMessages([
        {
          id: 'api-key-warning',
          text: "Welcome! To activate the AI assistant, please add your Google Gemini API key to the .env file in your project's root directory.",
          sender: 'ai',
        }
      ]);
    } else {
      setApiKeyMissing(false);
      setMessages([
        {
          id: 'initial-greeting',
          text: "Hello! I'm Fin, your AI financial assistant powered by Google Gemini. How can I help you today?",
          sender: 'ai',
        }
      ]);
    }
  }, []);

  const handleSendMessage = async (e: FormEvent, messageText?: string) => {
    e.preventDefault();
    if (apiKeyMissing) return;
    const text = messageText || input;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY!);
      const model = genAI.getGenerativeModel({ model: "Gemini 2.5 Flash-Lite"});
      
      const chatHistory = messages
        .filter(m => m.id !== 'initial-greeting' && m.id !== 'api-key-warning')
        .map(m => ({
          role: m.sender === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
      }));

      const chat = model.startChat({
        history: chatHistory,
      });

      const result = await chat.sendMessage(text);
      const response = result.response;
      const aiResponseText = response.text();

      if (aiResponseText) {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponseText,
          sender: 'ai',
        };
        setMessages((prev) => [...prev, aiResponse]);
      } else {
        throw new Error("No response from AI.");
      }

    } catch (error) {
      console.error("Google Gemini API Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. This could be due to an invalid API key or a network issue. Please check your key and try again.",
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <header className="h-16 flex-shrink-0 flex items-center px-6 border-b border-card-border">
          <h1 className="text-xl font-semibold text-text-primary">AI Financial Assistant</h1>
        </header>
        {apiKeyMissing && (
            <div className="p-4 bg-yellow-500/10 text-yellow-400 text-sm flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                <span><b>Action Required:</b> Your Google Gemini API key is missing. Please add it to the <b>.env</b> file.</span>
            </div>
        )}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-lg p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-card border border-card-border text-text-secondary rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br />') }}></p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                  </div>
                   <div className="bg-card border border-card-border text-text-secondary rounded-xl rounded-bl-none p-3 flex items-center gap-2">
                       <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-0"></span>
                       <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></span>
                       <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></span>
                   </div>
               </motion.div>
            )}
             <div ref={messagesEndRef} />
          </div>
          
          {messages.length <= 1 && !isLoading && !apiKeyMissing && (
            <div className="mt-8">
              <p className="text-sm text-text-tertiary mb-3 text-center">Or try one of these suggestions:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestionPrompts.map(prompt => (
                  <button key={prompt} onClick={(e) => handleSendMessage(e, prompt)} className="px-4 py-2 bg-card border border-card-border rounded-full text-sm text-text-secondary hover:bg-primary/20 hover:text-text-primary transition-colors">
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

        </main>
        <footer className="p-4 border-t border-card-border">
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={apiKeyMissing ? "API Key required..." : "Ask Fin anything..."}
              className="flex-1"
              disabled={isLoading || apiKeyMissing}
            />
            <Button type="submit" disabled={isLoading || !input.trim() || apiKeyMissing} className="w-auto px-4">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </footer>
      </div>
    </DashboardLayout>
  );
};

export default AIChatPage;
