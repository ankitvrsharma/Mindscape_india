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
    // Note: In mockup mode, we simulate the Gemini API call.
    // In a real app, this would use the backend with Gemini API keys.
    setTimeout(() => {
      setResponse("Based on the standard psychological curriculum, this concept refers to the cognitive process of encoding, storing, and retrieving information. In the context of your question, it specifically relates to how short-term memory is consolidated into long-term memory through rehearsal and meaningful association.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96">
      <Card className="border-accent/20 bg-accent/5 shadow-2xl overflow-hidden backdrop-blur-md">
        <CardHeader className="bg-accent/10 border-b border-accent/10 pb-4 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="flex items-center text-lg text-accent-foreground font-sans">
            <Bot className="w-5 h-5 mr-2" />
            Mindscape AI Tutor
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 max-h-[400px] overflow-y-auto">
          <p className="text-xs text-muted-foreground mb-3">
            Ask our AI tutor for instant clarification on any concept.
          </p>
          
          <div className="space-y-4">
            <div className="relative">
              <Textarea 
                placeholder="Ask your doubt..."
                className="min-h-[80px] text-sm resize-none bg-white pr-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button 
                size="icon" 
                className="absolute bottom-2 right-2 h-7 w-7 bg-accent hover:bg-accent/90"
                onClick={handleAsk}
                disabled={loading || !query}
              >
                {loading ? <Sparkles className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
              </Button>
            </div>

            {response && (
              <div className="bg-white p-3 rounded-lg border border-border shadow-sm animate-in fade-in slide-in-from-bottom-2">
                <h5 className="font-semibold text-xs mb-1 text-primary flex items-center">
                  <Sparkles className="w-3 h-3 mr-1 text-accent" /> AI Explanation:
                </h5>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {response}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
