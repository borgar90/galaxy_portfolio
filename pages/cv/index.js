import IntroCV from '@/components/sections/cv/IntroCV';
import Layout from '../../components/layout/Layout';
import SkillsSummary from '@/components/sections/cv/SkillsSummary';
import Education from '@/components/sections/cv/Education';
import WorkExperience from '@/components/sections/cv/WorkExperience';
import TimelineShowcase from '@/components/sections/cv/TimelineShowcase';




export default function HomePage() {
  return (
    <Layout>
      <IntroCV />
      <SkillsSummary />
      <TimelineShowcase />
      <Education />
      <WorkExperience />
    </Layout>
  );
}
