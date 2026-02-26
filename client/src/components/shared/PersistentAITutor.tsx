import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, X, MessageSquare, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PersistentAITutor() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);

  const handleSend = () => {
    if (!query.trim()) return;
    const userMsg = { role: 'user' as const, text: query };
    setMessages([...messages, userMsg]);
    setQuery("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "I'm your persistent psychology tutor. How can I help you with your syllabus today?" 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-lg">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Mindscape AI Tutor</h4>
                  <p className="text-[10px] text-white/70">Online & Ready to Help</p>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/10" onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-secondary/10">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="bg-accent/10 p-4 rounded-full mb-4">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <h5 className="font-bold text-primary mb-2">How can I help you?</h5>
                  <p className="text-sm text-muted-foreground">Ask me about any psychology concept from your university syllabus.</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' ? 'bg-primary text-white' : 'bg-white border border-border text-primary'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <Input 
                  placeholder="Ask a question..." 
                  className="bg-secondary/20 border-none h-10"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button size="icon" className="h-10 w-10 shrink-0 bg-accent hover:bg-accent/90" onClick={handleSend}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button 
        size="lg" 
        className={`rounded-full h-14 w-14 shadow-2xl transition-all duration-300 ${isOpen ? 'bg-primary scale-0' : 'bg-accent hover:bg-accent/90 scale-100'}`}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
      
      {isOpen && (
         <Button 
          size="lg" 
          className="rounded-full h-14 w-14 shadow-2xl bg-primary hover:bg-primary/90 absolute inset-0"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}
