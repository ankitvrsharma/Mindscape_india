import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PDFWrapper } from "@/components/shared/PDFWrapper";
import { AIDoubtBox } from "@/components/shared/AIDoubtBox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function CourseDetail() {
  const [, params] = useRoute("/course/:id");
  const courseId = params?.id || "1";

  // Mock data
  const course = {
    title: "Cognitive Psychology: Advanced Concepts",
    instructor: "Dr. A. K. Gupta",
    level: "MA / UGC NET",
    modules: [
      { id: 1, title: "Information Processing Model", completed: true },
      { id: 2, title: "Attention and Perception", completed: true },
      { id: 3, title: "Memory: Encoding and Storage", completed: false },
      { id: 4, title: "Decision Making and Problem Solving", completed: false },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 py-12 container mx-auto px-4">
        <Link href="/courses">
          <Button variant="ghost" className="mb-6 pl-0 hover:pl-0 hover:bg-transparent text-muted-foreground hover:text-primary">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Courses
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">{course.level}</Badge>
                <span className="text-sm text-muted-foreground">by {course.instructor}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">{course.title}</h1>
            </div>

            <PDFWrapper title={course.title}>
              <div className="prose prose-stone max-w-none">
                <h3>Chapter 3: Memory Systems</h3>
                <p>
                  Memory is not a single unitary system but rather a collection of systems with different capacities and functions. The most influential model of memory is the <strong>Multi-Store Model</strong> proposed by Atkinson and Shiffrin (1968).
                </p>
                <h4>1. Sensory Memory</h4>
                <p>
                  Sensory memory retains impressions of sensory information after the original stimuli have ended. It acts as a buffer for stimuli received through the five senses.
                </p>
                <ul>
                  <li><strong>Iconic Memory:</strong> Visual sensory memory (lasts &lt; 0.5 sec)</li>
                  <li><strong>Echoic Memory:</strong> Auditory sensory memory (lasts 3-4 sec)</li>
                </ul>
                <h4>2. Short-Term Memory (STM)</h4>
                <p>
                  STM has a limited capacity (Miller's magic number 7±2 items) and a limited duration (approx. 18-30 seconds). Maintenance rehearsal is required to keep information in STM.
                </p>
                <div className="bg-blue-50 p-4 border-l-4 border-blue-500 my-6 not-prose rounded-r">
                  <p className="text-sm text-blue-800 font-medium">
                    <strong>Key Exam Point:</strong> Recent research by Cowan (2001) suggests the capacity of STM is closer to 4 chunks rather than 7.
                  </p>
                </div>
                <h4>3. Long-Term Memory (LTM)</h4>
                <p>
                  LTM is theoretically unlimited in capacity and duration. It is divided into:
                </p>
                <ul>
                  <li><strong>Explicit (Declarative):</strong> Episodic and Semantic memory.</li>
                  <li><strong>Implicit (Non-declarative):</strong> Procedural memory and Priming.</li>
                </ul>
              </div>
            </PDFWrapper>
            
            <AIDoubtBox />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="font-semibold text-lg mb-4">Course Modules</h3>
                <div className="space-y-3">
                  {course.modules.map((module) => (
                    <div key={module.id} className="flex items-center p-2 rounded hover:bg-secondary/50 transition-colors cursor-pointer group">
                      <div className={`mr-3 ${module.completed ? 'text-green-500' : 'text-muted-foreground'}`}>
                        {module.completed ? <CheckCircle className="w-5 h-5" /> : <div className="w-5 h-5 rounded-full border-2 border-current" />}
                      </div>
                      <span className={`text-sm ${module.completed ? 'text-muted-foreground' : 'text-foreground font-medium'}`}>
                        {module.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
