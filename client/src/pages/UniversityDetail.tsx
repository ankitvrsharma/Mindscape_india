import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PDFWrapper } from "@/components/shared/PDFWrapper";
import { AIDoubtBox } from "@/components/shared/AIDoubtBox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Languages, Sparkles } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useState } from "react";

export default function UniversityDetail() {
  const [, params] = useRoute("/university/:id");
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const content = {
    en: {
      title: "Introduction to Social Psychology",
      intro: "Social psychology is the scientific study of how people's thoughts, feelings, and behaviors are influenced by the actual, imagined, or implied presence of others.",
      points: [
        "Social Cognition: How we process social information.",
        "Social Influence: Conformity, compliance, and obedience.",
        "Social Relations: Prejudice, aggression, and attraction."
      ]
    },
    hi: {
      title: "सामाजिक मनोविज्ञान का परिचय",
      intro: "सामाजिक मनोविज्ञान इस बात का वैज्ञानिक अध्ययन है कि लोगों के विचार, भावनाएं और व्यवहार दूसरों की वास्तविक, काल्पनिक या निहित उपस्थिति से कैसे प्रभावित होते हैं।",
      points: [
        "सामाजिक संज्ञान: हम सामाजिक जानकारी को कैसे संसाधित करते हैं।",
        "सामाजिक प्रभाव: अनुरूपता, अनुपालन और आज्ञाकारिता।",
        "सामाजिक संबंध: पूर्वाग्रह, आक्रामकता और आकर्षण।"
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 py-12 container mx-auto px-4 max-w-4xl">
        <Link href="/articles">
          <Button variant="ghost" className="mb-6 pl-0 hover:pl-0 hover:bg-transparent text-muted-foreground hover:text-primary">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Universities
          </Button>
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <Badge className="bg-accent text-white mb-2">Syllabus Module</Badge>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              {content[language].title}
            </h1>
          </div>
          
          <div className="flex items-center bg-secondary/40 p-1 rounded-lg border border-border">
            <Button 
              size="sm" 
              variant={language === "en" ? "default" : "ghost"}
              onClick={() => setLanguage("en")}
              className="px-4"
            >
              English
            </Button>
            <Button 
              size="sm" 
              variant={language === "hi" ? "default" : "ghost"}
              onClick={() => setLanguage("hi")}
              className="px-4 font-hindi"
            >
              हिंदी
            </Button>
          </div>
        </div>

        <PDFWrapper title={content[language].title}>
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center text-accent text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" /> AI-Generated Academic Summary
            </div>
            <p className="lead text-muted-foreground italic">
              {content[language].intro}
            </p>
            <hr />
            <h3>Core Concepts</h3>
            <ul>
              {content[language].points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              This article was synthesized by Mindscape AI based on the official University of Delhi (DU) MA Psychology syllabus.
            </p>
          </div>
        </PDFWrapper>

        <div className="mt-12">
          <AIDoubtBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
