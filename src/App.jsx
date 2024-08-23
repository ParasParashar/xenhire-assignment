import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWork";
import MentorService from "./components/MentorService";
import Problems from "./components/Problems";

const App = () => {
  return (
    <div className="flex flex-col  items-center gap-2 justify-center w-full h-full px-4 md:px-10 lg:px-32">
      <Header />
      <Hero />
      <Problems />
      <HowItWorks />
      <MentorService />
      {/* <Testimonials /> */}
    </div>
  );
};

export default App;
