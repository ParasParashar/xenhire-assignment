import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWork";
import MentorService from "./components/MentorService";
import Problems from "./components/Problems";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className=" w-full h-full main-scrollbar overflow-y-auto ">
      <main className="px-4 md:px-10 lg:px-32 flex flex-col  items-center gap-2 justify-center main-scrollbar overflow-y-auto">
        <Header />
        <Hero />
        <Problems />
        <HowItWorks />
        <MentorService />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
