import Hero from "@/app//components/Hero";
import StudentHighlights from "@/app//components/StudentHighlights";
import AboutPreview from "@/app/components/AboutPreview";
import PillarsOfExcellence from "@/app/components/PillarsOfExcellence";
import CoursesPreview from "@/app/components/CoursesPreview";
import SuccessStories from "@/app/components/SuccessStories";




export default function LandingPage() {
  return (
    <main className="relative w-full min-h-screen bg-gray-50">
      <Hero />
      <StudentHighlights />
      <AboutPreview />
      <CoursesPreview />
      <PillarsOfExcellence />
      <SuccessStories />

    </main>
  );
}



