import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Sparkles, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AIDoubtBox() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = () => {
    if (!query) return;
    setLoading(true);
    // Simulate AI delay
    setTimeout(() => {
      setResponse("Based on the standard psychological curriculum, this concept refers to the cognitive process of encoding, storing, and retrieving information. In the context of your question, it specifically relates to how short-term memory is consolidated into long-term memory through rehearsal and meaningful association.");
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="border-accent/20 bg-accent/5 overflow-hidden">
      <CardHeader className="bg-accent/10 border-b border-accent/10 pb-4">
        <CardTitle className="flex items-center text-lg text-accent-foreground font-sans">
          <Bot className="w-5 h-5 mr-2" />
          Mindscape AI Tutor
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-4">
          Stuck on a concept? Ask our AI tutor for instant clarification on course topics.
        </p>
        
        <div className="space-y-4">
          <div className="relative">
            <Textarea 
              placeholder="Ex: Explain the difference between Classical and Operant Conditioning..."
              className="min-h-[100px] resize-none bg-white pr-12"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button 
              size="icon" 
              className="absolute bottom-3 right-3 h-8 w-8 bg-accent hover:bg-accent/90"
              onClick={handleAsk}
              disabled={loading || !query}
            >
              {loading ? <Sparkles className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </div>

          {response && (
            <div className="bg-white p-4 rounded-lg border border-border shadow-sm animate-in fade-in slide-in-from-top-2">
              <h5 className="font-semibold text-sm mb-2 text-primary flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-accent" /> AI Explanation:
              </h5>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {response}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
