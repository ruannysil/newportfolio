import SectionHome from './components/SectionHome';
import SectionMethodology from './components/SectionMethodology';
import SectionProject from './components/SectionProject';
import SectionUser from './components/SectionUser';
import SectionSkillsAndConection from './components/SectionSkillsAndConection'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-9">
      <SectionHome />
      <SectionUser />
      <SectionMethodology />
      <SectionProject />
      <SectionSkillsAndConection />
    </div>
  );
}
