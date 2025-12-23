import CoursesHero from "./hero";
import JEENEET from "./JEENEET";
import CAFoundation from "./CAFoundation";
import SchoolFoundation from "./SchoolFoundation";
import OlympiadCoaching from "./OlympiadCoaching";
import PersonalizedMentorship from "./PersonalizedMentorship";
import CompetitiveExams from "./CompetitiveExams";


export default function CoursePage() {
  return (
    <main>
        <CoursesHero />
        <JEENEET />
        <CAFoundation />
        <SchoolFoundation />
        <OlympiadCoaching />
        <PersonalizedMentorship />
        <CompetitiveExams />
    </main>
  );
}