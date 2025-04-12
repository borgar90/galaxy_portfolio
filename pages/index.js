// pages/index.js
import Hero from '../components/sections/Hero';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';
import ServiceSection from '@/components/sections/ServiceSection';
import AboutGrounded from '@/components/sections/AboutGrounded';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CompanyLogos from '@/components/sections/CompanyLogos';





export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <CompanyLogos />
      <ServiceSection />
      <ProjectsSection />
      <About />
      <AboutGrounded />
    </Layout>
  );
}
