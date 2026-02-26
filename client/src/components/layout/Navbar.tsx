import { Link, useLocation } from "wouter";
import { Menu, X, Search, BookOpen, Brain, Users, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Universities", path: "/articles", icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { label: "Courses", path: "/courses", icon: <GraduationCap className="w-4 h-4 mr-2" /> },
    { label: "PYQs", path: "/pyqs", icon: <Brain className="w-4 h-4 mr-2" /> },
    { label: "Find Counsellor", path: "/counsellors", icon: <Users className="w-4 h-4 mr-2" /> },
  ];

  const isActive = (path: string) => location.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <img src="/logo.png" alt="Mindscape India" className="h-8 w-8 object-contain" />
            <span className="font-serif text-xl font-bold text-primary tracking-tight">Mindscape India</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.icon}
                {item.label}
              </a>
            </Link>
          ))}
          <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Student Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b bg-background p-4 space-y-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`block py-2 text-sm font-medium ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  {item.label}
                </div>
              </a>
            </Link>
          ))}
          <Button className="w-full">Student Login</Button>
        </div>
      )}
    </nav>
  );
}
