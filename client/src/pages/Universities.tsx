import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, GraduationCap, ArrowRight, Book } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const universities = [
  {
    id: "du",
    name: "University of Delhi (DU)",
    location: "New Delhi",
    courses: ["MA Psychology", "MA Applied Psychology"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "jmi",
    name: "Jamia Millia Islamia (JMI)",
    location: "New Delhi",
    courses: ["MA Applied Psychology"],
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "bhu",
    name: "Banaras Hindu University (BHU)",
    location: "Varanasi",
    courses: ["MA Psychology"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "aud",
    name: "Ambedkar University Delhi (AUD)",
    location: "New Delhi",
    courses: ["MA Psychology (Psychosocial Clinical Studies)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "tiss",
    name: "Tata Institute of Social Sciences (TISS)",
    location: "Mumbai",
    courses: ["MA Applied Psychology (Clinical/Counseling)"],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Universities() {
  const [search, setSearch] = useState("");

  const filtered = universities.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">University Syllabi</h1>
          <p className="text-muted-foreground text-lg">
            Explore psychology course structures and syllabus articles for top Indian universities.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search universities..." 
              className="pl-9 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(uni => (
            <Card key={uni.id} className="overflow-hidden hover:shadow-lg transition-all border-border/60 group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={uni.image} 
                  alt={uni.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider opacity-80">{uni.location}</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-primary leading-tight">{uni.name}</CardTitle>
                <CardDescription className="flex items-center mt-1">
                  <Book className="w-3 h-3 mr-1" /> Syllabus Repository
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {uni.courses.map((course, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-secondary/20 text-sm">
                      <span className="text-primary font-medium line-clamp-1">{course}</span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Link href={`/university/${uni.id}`}>
                  <Button className="w-full" variant="outline">
                    View Course Modules
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
