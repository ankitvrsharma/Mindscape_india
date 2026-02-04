import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const allArticles = [
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
  },
  {
    id: "4",
    title: "Neuroplasticity and Learning: New Frontiers",
    excerpt: "Recent neuroscience research reveals surprising flexibility in the adult brain, with implications for lifelong learning and rehabilitation.",
    category: "Neuroscience",
    author: "Dr. Anjali Desai",
    date: "Sep 20, 2024",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "5",
    title: "Ethics in Psychological Counseling",
    excerpt: "Navigating complex ethical dilemmas in the Indian cultural context, balancing confidentiality with family dynamics.",
    category: "Counseling Psychology",
    author: "Rakesh Kumar",
    date: "Sep 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    title: "Social Psychology of Crowd Behavior",
    excerpt: "Examining the mechanisms of deindividuation and conformity in large group settings, with case studies from recent events.",
    category: "Social Psychology",
    author: "Prof. T. Simpson",
    date: "Sep 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800"
  }
];

const categories = ["All", "Clinical Psychology", "Developmental Psychology", "Industrial Psychology", "Neuroscience", "Counseling Psychology", "Social Psychology"];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 py-12 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Journal & Insights</h1>
          <p className="text-muted-foreground text-lg">
            Exploring the depths of human behavior, cognition, and emotion through an academic lens.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              className="pl-9 bg-white" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map(cat => (
              <Badge 
                key={cat} 
                variant={selectedCategory === cat ? "default" : "outline"}
                className={`cursor-pointer ${selectedCategory === cat ? 'bg-primary hover:bg-primary/90' : 'hover:bg-secondary'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-secondary/20 rounded-xl">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
            <Button variant="link" onClick={() => {setSelectedCategory("All"); setSearchQuery("")}}>Clear Filters</Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
