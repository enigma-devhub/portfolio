import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen 
                      snap-y snap-mandatory overflow-scroll z-0">
                      {/* The snap-y and snap mand. is to give it that elastic effect that drags circles back to the center, (given to the parent div) */}
      <Head>
        <title>Enigma's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
        <section id="about" className="snap-center">
          <About/>
        </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience/>
      </section>
      {/* projects */}
      {/* contact me */}

    </div>
  )
}

export default Home
