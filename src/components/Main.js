import About from '../components/About';
import Services from '../components/Services';
import AboutCards from './about/AboutCards';
// import Contact from '../components/Contact';
// import Login_app from './Login_app';
import Instructors from './industry/IndustryCards';
import UseCaseCards from './useCases/UseCaseCards';

function Main() {
  return (
    <>
      <main>
        {/* <Services /> */}
        <UseCaseCards />
        <Instructors />
        <AboutCards />
        {/* <About /> */}
      </main>
    </>
  );
}
export default Main;
