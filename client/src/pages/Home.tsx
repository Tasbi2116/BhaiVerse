import HeroSection from '../components/home/HeroSection'
import MissionVision from '../components/home/MissionVision'
import HowWeWork from '../components/home/HowWeWork'
import TechStack from '../components/home/TechStack'
import StatsSection from '../components/home/StatsSection'
export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionVision />
      <HowWeWork />
      <TechStack />
      <StatsSection />
    </main>
  )
}