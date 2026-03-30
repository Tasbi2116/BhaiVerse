import AboutHero from '../components/about/AboutHero'
import CompanyStory from '../components/about/CompanyStory'
import CoreValues from '../components/about/CoreValues'
import Timeline from '../components/about/Timeline'
import WhyChooseUs from '../components/about/WhyChooseUs'
import TeamSnapshot from '../components/about/TeamSnapshot'
export default function About() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      <Timeline />
      <WhyChooseUs />
      <TeamSnapshot />
    </main>
  )
}