import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWork";
import MentorService from "./components/MentorService";
import Problems from "./components/Problems";

const App = () => {
  return (
    <div className="flex flex-col  items-center gap-2 justify-center w-full h-full lg:px-28">
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
