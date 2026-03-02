import Hero from './sections/Hero';
import FeaturedCourses from './sections/FeaturedCourses';
import Stats from './sections/Stats';
import CallToAction from './sections/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Stats />
      <CallToAction />
    </>
  );
}
