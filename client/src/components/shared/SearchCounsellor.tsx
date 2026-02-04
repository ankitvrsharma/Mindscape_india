import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SearchCounsellor({ compact = false }: { compact?: boolean }) {
  const [pincode, setPincode] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setHasSearched(true);
      setLoading(false);
    }, 1000);
  };

  const dummyCounsellors = [
    { name: "Dr. Ananya Sharma", specialization: "Clinical Psychology", exp: "8 Years", rating: 4.9, verified: true, location: "Sector 18, Noida" },
    { name: "Mr. Rajesh Verma", specialization: "Career Counselling", exp: "12 Years", rating: 4.7, verified: true, location: "Connaught Place, Delhi" },
    { name: "Ms. Priya Singh", specialization: "Child Psychology", exp: "5 Years", rating: 4.8, verified: true, location: "Indiranagar, Bangalore" },
  ];

  return (
    <div className={`w-full ${compact ? 'py-6' : 'py-12'} bg-secondary/20 rounded-xl`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
            Find Verified Counsellors Near You
          </h2>
          <p className="text-muted-foreground mb-6">
            Enter your PIN code to connect with RCI licensed professionals in your area.
          </p>
          
          <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Enter PIN Code (e.g. 110001)" 
                className="pl-9 bg-white"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </Button>
          </form>
        </div>

        {hasSearched && (
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4">
            {dummyCounsellors.map((c, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {c.name[0]}
                    </div>
                    {c.verified && (
                      <span className="flex items-center text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                        <CheckCircle className="w-3 h-3 mr-1" /> Verified
                      </span>
                    )}
                  </div>
                  <CardTitle className="mt-4 text-lg">{c.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-primary font-medium mb-1">{c.specialization}</p>
                  <p className="text-muted-foreground mb-3">{c.location}</p>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-muted-foreground">{c.exp} Exp.</span>
                    <span className="flex items-center text-amber-500 font-bold">
                      <Star className="w-4 h-4 mr-1 fill-current" /> {c.rating}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-primary/20 text-primary hover:bg-primary/5">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
