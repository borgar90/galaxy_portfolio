// pages/index.js
import Hero from '../components/sections/index/Hero';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';
import ServiceSection from '@/components/sections/index/ServiceSection';
import AboutGrounded from '@/components/sections/index/AboutGrounded';
import ProjectsSection from '@/components/sections/index/ProjectsSection';
import CompanyLogos from '@/components/sections/index/CompanyLogos';
import ContactSection from '@/components/sections/index/ContactSection';





export default function HomePage() {
  return (
    <Layout>
    <div className="bg-black lg:h-[90vh] w-[100vw] overflow-hidden">
      <Hero />
      <CompanyLogos />
    </div>
      <ServiceSection />
      <ProjectsSection />
     
      <AboutGrounded />
      <ContactSection />
    </Layout>
  );
}
