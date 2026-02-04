import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl?: string;
}

export function ArticleCard({ id, title, excerpt, category, author, date, imageUrl }: ArticleCardProps) {
  return (
    <Link href={`/article/${id}`}>
      <a className="block h-full group">
        <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-card">
          <div className="aspect-[16/9] w-full bg-muted relative overflow-hidden">
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
                <span className="font-serif italic">Mindscape India</span>
              </div>
            )}
            <Badge className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white border-none shadow-sm backdrop-blur">
              {category}
            </Badge>
          </div>
          <CardHeader className="pt-6 pb-2">
            <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between text-xs text-muted-foreground pt-0 mt-auto">
            <div className="flex items-center space-x-4">
              <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {author}</span>
              <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {date}</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}
