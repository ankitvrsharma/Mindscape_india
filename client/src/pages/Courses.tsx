import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const courses = [
  {
    id: "c1",
    title: "MA Psychology Entrance Preparation",
    description: "Comprehensive coverage of general psychology, research methods, and statistics for DU, JMI, and BHU entrance exams.",
    instructor: "Dr. A. K. Gupta",
    duration: "12 Weeks",
    students: 1250,
    rating: 4.8,
    level: "Entrance",
    tags: ["Entrance", "Theory"]
  },
  {
    id: "c2",
    title: "UGC NET Paper II Psychology",
    description: "Targeted preparation for the National Eligibility Test with unit-wise detailed notes and mock tests.",
    instructor: "Prof. Meera Nair",
    duration: "16 Weeks",
    students: 890,
    rating: 4.9,
    level: "Advanced",
    tags: ["Competitive", "Research"]
  },
  {
    id: "c3",
    title: "Introduction to Clinical Diagnosis",
    description: "Learn the fundamentals of ICD-11 and DSM-5 diagnostic criteria with case studies.",
    instructor: "Dr. S. Radhakrishnan",
    duration: "8 Weeks",
    students: 600,
    rating: 4.7,
    level: "Intermediate",
    tags: ["Clinical", "Practical"]
  },
  {
    id: "c4",
    title: "Statistics for Behavioral Sciences",
    description: "Master SPSS and R for psychological research. From t-tests to ANOVA and Regression.",
    instructor: "Vikram Malhotra",
    duration: "10 Weeks",
    students: 450,
    rating: 4.6,
    level: "Intermediate",
    tags: ["Statistics", "Research"]
  },
  {
    id: "c5",
    title: "Counseling Skills & Ethics",
    description: "Developing core micro-skills for effective counseling: empathy, active listening, and ethical boundaries.",
    instructor: "Priya Singh",
    duration: "6 Weeks",
    students: 720,
    rating: 4.8,
    level: "Beginner",
    tags: ["Counseling", "Practical"]
  },
  {
    id: "c6",
    title: "Cognitive Psychology: Advanced Concepts",
    description: "Deep dive into memory models, attention, perception, and problem-solving mechanisms.",
    instructor: "Dr. Anjali Desai",
    duration: "8 Weeks",
    students: 540,
    rating: 4.7,
    level: "MA / UGC NET",
    tags: ["Theory", "Cognitive"]
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Syllabus Guides</h1>
          <p className="text-muted-foreground text-lg">
            Detailed in-depth explanations of MA Psychology syllabi from top Indian universities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <Card key={course.id} className="flex flex-col hover:shadow-lg transition-all duration-300 border-border/60">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-secondary text-primary font-medium border-secondary-foreground/10">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-amber-500 text-sm font-bold">
                    <Star className="w-4 h-4 mr-1 fill-current" /> {course.rating}
                  </div>
                </div>
                <CardTitle className="font-serif text-xl text-primary">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" /> {course.instructor}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" /> {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" /> {course.students} Learners
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t">
                <Link href={`/course/${course.id}`}>
                  <Button className="w-full group">
                    Read Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
