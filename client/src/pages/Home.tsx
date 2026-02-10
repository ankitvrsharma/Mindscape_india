import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, GraduationCap, Brain } from "lucide-react"; // Added Brain here

export default function Home() {
  const featuredArticles = [
    {
      id: "1",
      title: "The Impact of Mindfulness on Cognitive Behavioral Therapy",
      excerpt: "Exploring how integrating mindfulness practices can enhance the effectiveness of traditional CBT methods for anxiety disorders.",
      category: "Clinical Psychology",
      author: "Dr. S. Radhakrishnan",
      date: "Oct 12, 2024",
      imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "2",
      title: "Understanding Child Development in the Digital Age",
      excerpt: "A comprehensive look at how screen time and digital social interactions are reshaping early childhood developmental milestones.",
      category: "Developmental Psychology",
      author: "Prof. Meera Nair",
      date: "Oct 08, 2024",
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "3",
      title: "Organizational Psychology: Remote Work Dynamics",
      excerpt: "Analyzing the psychological shifts in employee motivation and team cohesion in post-pandemic remote work environments.",
      category: "Industrial Psychology",
      author: "Vikram Malhotra",
      date: "Sep 28, 2024",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const featuredCourses = [
    { id: "c1", title: "MA Psychology Entrance Prep", modules: 12, students: 1200 },
    { id: "c2", title: "UGC NET Paper II Psychology", modules: 24, students: 850 },
    { id: "c3", title: "Introduction to Clinical Diagnosis", modules: 8, students: 600 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent-foreground uppercase bg-accent rounded-full">
            The Premier Psychology Platform
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Bridging Minds, <br className="hidden md:block" />
            Empowering Future Psychologists
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-10 font-light">
            Comprehensive resources for MA Psychology students, aspiring counsellors, and mental health professionals across India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12 w-full sm:w-auto">
                Syllabus Guides
              </Button>
            </Link>
            <Link href="/counsellors">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 h-12 w-full sm:w-auto">
                Find a Counsellor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Syllabus Explanations</h2>
              <p className="text-muted-foreground">Expert guides for MA Psychology students.</p>
            </div>
            <Link href="/articles">
              <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary/80 hover:bg-primary/5">
                View All Guides <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link href="/articles">
              <Button variant="ghost" className="text-primary">
                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Master Your Subject</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Our courses are designed by university professors to align with the latest MA Psychology syllabi across major Indian universities like DU, JMI, BHU, and AUD.
              </p>
              <ul className="space-y-4 mb-8">
                {featuredCourses.map(course => (
                  <li key={course.id} className="flex items-center p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors border border-transparent hover:border-border cursor-pointer">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{course.title}</h4>
                      <p className="text-xs text-muted-foreground">{course.modules} Modules • {course.students} Students</p>
                    </div>
                    <ArrowRight className="ml-auto w-4 h-4 text-muted-foreground" />
                  </li>
                ))}
              </ul>
              <Link href="/courses">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Browse All Courses
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 transform rotate-3 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Students learning" 
                className="relative rounded-2xl shadow-xl border border-border"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-border max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="flex -space-x-2 mr-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="font-bold text-primary">2,500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students advancing their psychology careers with Mindscape India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <Brain className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Deepen Your Understanding?</h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Join thousands of students and professionals accessing the best psychology resources in India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/pyqs">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 border-none">
                Practice PYQs
              </Button>
            </Link>
             <Link href="/courses">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
