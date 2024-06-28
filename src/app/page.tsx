import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <div className='background bg-slate-100 dark:bg-stone-950'>
        <span className='text-teal-400'></span>
        <span className='text-indigo-400'></span>
        <span className='text-teal-500'></span>
        <span className='text-indigo-500'></span>
        <span className='text-teal-600'></span>
        <span className='text-indigo-600'></span>
        <span className='text-teal-700'></span>
        <span className='text-red-500'></span>
        <span className='text-indigo-700'></span>
        <span className='text-teal-800'></span>
        <span className='text-indigo-800'></span>
        <span className='text-red-400'></span>
        <span className='text-red-500'></span>
        <span className='text-indigo-200'></span>
        <span className='text-teal-200'></span>
        <span className='text-red-600'></span>
        <span className='text-teal-300'></span>
        <span className='text-red-700'></span>
        <span className='text-indigo-300'></span>
        <span className='text-red-300'></span>
      </div>
    </main>
  );
}
