import ResultsHero from "./hero";
import ResultCategories from "./ResultCategories";
export default function ResultsPage() {
  return (
    <main className="relative w-full min-h-screen bg-gray-50">
        <ResultsHero />
        <ResultCategories />
    </main>
  );
}