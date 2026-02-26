import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Universities from "@/pages/Universities";
import UniversityDetail from "@/pages/UniversityDetail";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import PYQs from "@/pages/PYQs";
import Counsellors from "@/pages/Counsellors";
import { PersistentAITutor } from "@/components/shared/PersistentAITutor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles" component={Universities} />
      <Route path="/university/:id" component={UniversityDetail} />
      <Route path="/courses" component={Courses} />
      <Route path="/course/:id" component={CourseDetail} />
      <Route path="/pyqs" component={PYQs} />
      <Route path="/counsellors" component={Counsellors} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen">
          <Router />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
