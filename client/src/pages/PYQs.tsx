import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PDFWrapper } from "@/components/shared/PDFWrapper";
import { AIDoubtBox } from "@/components/shared/AIDoubtBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Eye } from "lucide-react";
import { useState } from "react";

const pyqData = {
  "du": [
    { year: 2023, paper: "MA Psychology Entrance", code: "DU-MA-23" },
    { year: 2022, paper: "MA Psychology Entrance", code: "DU-MA-22" },
    { year: 2021, paper: "MA Psychology Entrance", code: "DU-MA-21" },
  ],
  "jmi": [
    { year: 2023, paper: "MA Applied Psychology", code: "JMI-AP-23" },
    { year: 2022, paper: "MA Applied Psychology", code: "JMI-AP-22" },
  ],
  "ugc": [
    { year: 2023, cycle: "June", paper: "Psychology Paper II", code: "UGC-JUN-23" },
    { year: 2022, cycle: "Dec", paper: "Psychology Paper II", code: "UGC-DEC-22" },
  ]
};

export default function PYQs() {
  const [selectedPaper, setSelectedPaper] = useState<any | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Previous Year Questions</h1>
          <p className="text-muted-foreground text-lg">
            Practice with authentic past papers from major universities and competitive exams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="font-serif text-lg">Select Exam / University</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="du" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="du">DU</TabsTrigger>
                    <TabsTrigger value="jmi">JMI</TabsTrigger>
                    <TabsTrigger value="ugc">UGC NET</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="du" className="space-y-2">
                    {pyqData.du.map((item, idx) => (
                      <Button 
                        key={idx} 
                        variant={selectedPaper?.code === item.code ? "default" : "outline"} 
                        className="w-full justify-start"
                        onClick={() => setSelectedPaper(item)}
                      >
                        <FileText className="w-4 h-4 mr-2" /> {item.year} - {item.paper}
                      </Button>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="jmi" className="space-y-2">
                    {pyqData.jmi.map((item, idx) => (
                      <Button 
                        key={idx} 
                        variant={selectedPaper?.code === item.code ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setSelectedPaper(item)}
                      >
                        <FileText className="w-4 h-4 mr-2" /> {item.year} - {item.paper}
                      </Button>
                    ))}
                  </TabsContent>

                  <TabsContent value="ugc" className="space-y-2">
                    {pyqData.ugc.map((item, idx) => (
                      <Button 
                        key={idx} 
                        variant={selectedPaper?.code === item.code ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setSelectedPaper(item)}
                      >
                        <FileText className="w-4 h-4 mr-2" /> {item.year} {item.cycle} - {item.paper}
                      </Button>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {selectedPaper ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-primary">{selectedPaper.paper} ({selectedPaper.year})</h2>
                    <p className="text-muted-foreground text-sm">Code: {selectedPaper.code}</p>
                  </div>
                </div>

                <PDFWrapper title={`${selectedPaper.paper} ${selectedPaper.year}`}>
                  <div className="prose max-w-none p-4">
                    <h3 className="text-center border-b pb-4 mb-6 uppercase tracking-widest text-sm text-muted-foreground">
                      Part A - General Psychology
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Q1. Which of the following is NOT a Gestalt principle of organization?</p>
                        <ul className="list-[upper-alpha] list-inside space-y-1 text-sm text-muted-foreground pl-4">
                          <li>Proximity</li>
                          <li>Similarity</li>
                          <li>Closure</li>
                          <li>Accommodation</li>
                        </ul>
                        <p className="text-xs text-green-600 font-medium mt-2 pt-2 border-t border-dashed">Correct Answer: (D)</p>
                      </div>

                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Q2. Who proposed the concept of 'General Adaptation Syndrome'?</p>
                        <ul className="list-[upper-alpha] list-inside space-y-1 text-sm text-muted-foreground pl-4">
                          <li>Hans Selye</li>
                          <li>Walter Cannon</li>
                          <li>Richard Lazarus</li>
                          <li>Sigmund Freud</li>
                        </ul>
                         <p className="text-xs text-green-600 font-medium mt-2 pt-2 border-t border-dashed">Correct Answer: (A)</p>
                      </div>

                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Q3. The range of scores is:</p>
                        <ul className="list-[upper-alpha] list-inside space-y-1 text-sm text-muted-foreground pl-4">
                          <li>A measure of central tendency</li>
                          <li>A measure of variability</li>
                          <li>A measure of correlation</li>
                          <li>None of the above</li>
                        </ul>
                         <p className="text-xs text-green-600 font-medium mt-2 pt-2 border-t border-dashed">Correct Answer: (B)</p>
                      </div>
                    </div>
                  </div>
                </PDFWrapper>

                <AIDoubtBox />
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-secondary/20 rounded-xl border-2 border-dashed border-border/60">
                <FileText className="w-16 h-16 text-muted-foreground/40 mb-4" />
                <h3 className="text-xl font-medium text-muted-foreground">Select a paper to view</h3>
                <p className="text-sm text-muted-foreground/60 max-w-xs text-center mt-2">
                  Choose a university and year from the sidebar to access previous year questions.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
