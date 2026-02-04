export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Mindscape India" className="h-6 w-6" />
              <span className="font-serif text-lg font-bold text-primary">Mindscape India</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering India's future psychologists with accessible education, verified counselling resources, and cutting-edge study tools.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">MA Psychology Notes</a></li>
              <li><a href="#" className="hover:text-primary">UGC NET Preparation</a></li>
              <li><a href="#" className="hover:text-primary">Clinical Internships</a></li>
              <li><a href="#" className="hover:text-primary">Research Methodologies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Find a Counsellor</a></li>
              <li><a href="#" className="hover:text-primary">University Directory</a></li>
              <li><a href="#" className="hover:text-primary">Student Forum</a></li>
              <li><a href="#" className="hover:text-primary">Events & Webinars</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mindscape India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
