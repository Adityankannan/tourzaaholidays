import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import WhyUs from "./components/WhyUs/WhyUs";
import Stats from "./components/Stats/Stats";
import Packages from "./components/Packages/Packages";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const AppContent = () => (
  <div className="relative bg-dark-900 min-h-screen">
    {/* Fixed Navigation */}
    <Navbar />

    {/* Page Sections */}
    <main>
      <Hero />
      <Destinations />
      <WhyUs />
      <Stats />
      <Packages />
      <Testimonials />
      <Contact />
    </main>

    <Footer />
  </div>
);

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
