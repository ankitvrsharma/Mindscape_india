import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PDFWrapperProps {
  children: React.ReactNode;
  title: string;
}

export function PDFWrapper({ children, title }: PDFWrapperProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!contentRef.current) return;

    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your download.",
      });

      const element = contentRef.current;
      const canvas = await html2canvas(element, {
        scale: 2, // Improve quality
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff"
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.9);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      // Adjust height based on aspect ratio to fit width
      const imgHeightPdf = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, imgHeightPdf);
      pdf.save(`${title.replace(/\s+/g, "_")}.pdf`);

      toast({
        title: "Download Complete",
        description: "Your PDF has been saved successfully.",
      });
    } catch (error) {
      console.error("PDF Generation Error", error);
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: "Could not generate PDF. Please try again.",
      });
    }
  };

  return (
    <div className="relative group">
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button onClick={handleDownload} variant="outline" className="shadow-sm bg-white/90 backdrop-blur text-primary border-primary/20">
          <Download className="w-4 h-4 mr-2" />
          Save as PDF
        </Button>
      </div>
      <div ref={contentRef} className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-border/50 min-h-[600px]">
        {children}
        <div className="mt-8 pt-8 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center"><FileText className="w-3 h-3 mr-1" /> Mindscape India Course Material</span>
          <span>© {new Date().getFullYear()} Mindscape India</span>
        </div>
      </div>
    </div>
  );
}
