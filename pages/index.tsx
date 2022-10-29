import type { GetStaticProps } from 'next';
import Link from 'next/link'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid"
import { PageInfo, Experience, Skill, Project, Social} from '../typings'
import {fetchExperiences} from '../Utils/fetchExperiences';
import {fetchPageInfo} from '../Utils/fetchPageInfo';
import {fetchProjects} from '../Utils/fetchProjects';
import {fetchSkills} from '../Utils/fetchSkills';
import { fetchSocials } from '../Utils/fetchSocials';






 
type Props = {
   pageInfo: PageInfo;
   socials: Social[];
   experiences: Experience[];
   skills: Skill[];
   projects: Project[];
   
 
};




const Home = ({pageInfo, experiences, projects, socials, skills }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen 
                      snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#800080]/40">
      {/* The snap-y and snap mand. is to give it that elastic effect that drags circles back to the center, (given to the parent div) */}
      <Head>
        <title> Portfolio</title>
      </Head>
      {/* Header */}
      <Header socials={socials}/>

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo ={pageInfo}  />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences = {experiences} />
      </section>
      {/* Skills*/}
      <section id='skills' className="snap-start">
        <Skills  skills={skills}/>
      </section>

      {/* projects*/}
      <section id='projects' className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* contact me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-4 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <ArrowUpOnSquareIcon className='text-white  h-10 w-10 animate-pulse' />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();


  return {
    props: {
      pageInfo,
       experiences,
       skills,
       projects,
       socials,


    },

//nextjs will regenerate the page when a request comes in ever 10 seconds
    revalidate: 10,
  };
};
