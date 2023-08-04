import SectionHome from './components/SectionHome';
import SectionMethodology from './components/SectionMethodology';
import SectionUser from './components/SectionUser';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-9">
      <SectionHome />
      <SectionUser />
      <SectionMethodology />
    </div>
  );
}
