import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SearchCounsellor } from "@/components/shared/SearchCounsellor";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, UserCheck, MapPin } from "lucide-react";

export default function Counsellors() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Find Your Mental Health Partner</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Connect with verified, RCI-licensed psychologists and counsellors in your city. Your mental well-being is our priority.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             <Card className="bg-white shadow-lg border-0">
               <CardContent className="pt-6 flex flex-col items-center text-center">
                 <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-600">
                   <ShieldCheck className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-primary mb-2">Verified Professionals</h3>
                 <p className="text-sm text-muted-foreground">All listed counsellors are verified for their educational qualifications and RCI licensure.</p>
               </CardContent>
             </Card>
             <Card className="bg-white shadow-lg border-0">
               <CardContent className="pt-6 flex flex-col items-center text-center">
                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-primary mb-2">Hyper-Local Search</h3>
                 <p className="text-sm text-muted-foreground">Find support right in your neighborhood using our PIN code search system.</p>
               </CardContent>
             </Card>
             <Card className="bg-white shadow-lg border-0">
               <CardContent className="pt-6 flex flex-col items-center text-center">
                 <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
                   <UserCheck className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-primary mb-2">Diverse Specializations</h3>
                 <p className="text-sm text-muted-foreground">From clinical depression to career counseling, find experts for every need.</p>
               </CardContent>
             </Card>
          </div>

          <SearchCounsellor compact={false} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
