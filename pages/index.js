import Hero from "../components/Sections/Hero";
import Learning from "../components/Sections/Learning";
import News from "../components/Sections/News";
import Service from "../components/Sections/Service";
import Support from "../components/Sections/Support";

export default function Home() {
  return (
    <div>
      <Hero />
      <News />
      <Learning />
      <Service />
      <Support />
    </div>
  )
}
