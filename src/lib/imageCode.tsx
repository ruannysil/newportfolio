import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import {TbBrandVscode} from 'react-icons/tb'
interface IconData {
  id: number;
  name: string;
  icon: React.ComponentType<{ size: number }>;
}

const IconImg: IconData[] = [
  {
    id: 1,
    name: 'Html 5',
    icon: FaHtml5,
  },
  {
    id: 2,
    name: 'Css 3',
    icon: FaCss3Alt,
  },
  {
    id: 3,
    name: 'Styled-Comp',
    icon: SiStyledcomponents,
  },
  {
    id: 4,
    name: 'JavaScript',
    icon: FaJs,
  },
  {
    id: 5,
    name: 'Tailwind Css',
    icon: SiTailwindcss,
  },
  {
    id: 6,
    name: 'React js',
    icon: SiReact,
  },
  {
    id: 7,
    name: 'React Native',
    icon: SiReact,
  },
  {
    id: 8,
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    id: 9,
    name: 'Git',
    icon: FaGitAlt,
  },
  {
    id: 10,
    name: 'Github',
    icon: FaGithub,
  },
  {
    id: 11,
    name: 'Vscode',
    icon: TbBrandVscode,
  },
  {
    id: 12,
    name: 'Node Js',
    icon: FaNodeJs,
  },
];

export default IconImg;
