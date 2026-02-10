import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { SearchCounsellor } from "@/components/shared/SearchCounsellor";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, User, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function ArticleDetail() {
  const [, params] = useRoute("/article/:id");
  const articleId = params?.id || "1";

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Article Header */}
        <div className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
             <Link href="/articles">
              <Button variant="ghost" className="mb-6 pl-0 hover:pl-0 hover:bg-transparent text-muted-foreground hover:text-primary">
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Articles
              </Button>
            </Link>
            <Badge className="bg-primary text-white hover:bg-primary/90 mb-4">Clinical Psychology</Badge>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              The Impact of Mindfulness on Cognitive Behavioral Therapy
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-primary/10">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3">
                    DR
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary">Dr. S. Radhakrishnan</span>
                    <span className="text-xs text-muted-foreground">Senior Clinical Psychologist</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" /> Oct 12, 2024
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-primary/20 text-primary hover:bg-primary/5">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8 rounded-full border-primary/20 text-primary hover:bg-primary/5">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl py-12">
          {/* Article Content */}
          <article className="prose prose-lg prose-headings:font-serif prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 max-w-none">
            <p className="lead text-xl text-muted-foreground font-light mb-8">
              Mindfulness-based interventions have revolutionized how we approach anxiety and depressive disorders. By integrating Eastern contemplative practices with Western clinical psychology, practitioners are seeing profound results.
            </p>
            
            <img 
              src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1200" 
              alt="Meditation" 
              className="w-full h-auto rounded-xl shadow-md my-8"
            />

            <h3>The Integration of Mindfulness and CBT</h3>
            <p>
              Cognitive Behavioral Therapy (CBT) traditionally focuses on changing maladaptive thought patterns. Mindfulness-Based Cognitive Therapy (MBCT), however, encourages patients to <em>observe</em> these thoughts without judgment, rather than immediately trying to change them. This shift from "doing" to "being" is crucial in breaking the cycle of rumination.
            </p>
            
            <blockquote>
              "The goal is not to silence the mind, but to change our relationship with our thoughts."
            </blockquote>

            <h3>Clinical Evidence in the Indian Context</h3>
            <p>
              In recent studies conducted at NIMHANS, patients undergoing MBCT showed a 40% reduction in relapse rates for major depressive disorder compared to those receiving standard care alone. The cultural familiarity with meditation in India often improves adherence to these protocols.
            </p>
            
            <h3>Practical Applications for Counsellors</h3>
            <p>
              For early-career counsellors, integrating simple mindfulness techniques—such as the "3-minute breathing space"—can be an effective tool for grounding clients during sessions of high emotional intensity.
            </p>
          </article>

          <AIDoubtBox />

          {/* Find Counsellor Section */}
          <div className="mt-16 pt-16 border-t">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6 text-center">Need Professional Support?</h3>
            <SearchCounsellor />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
