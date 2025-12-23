import EnhancementHero from "./hero";
import AcademicStrategy from "./AcademicStrategy";
import LifeSkills from "./LifeSkills";
import SpecialFocusPrograms from "./SpecialFocusPrograms";


export default function EnhancementPage() {
  return (
    <main className="relative w-full min-h-screen bg-gray-50">
        <EnhancementHero />
        <AcademicStrategy />
        <LifeSkills />
        <SpecialFocusPrograms />

    </main>
  );
}
