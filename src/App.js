import About from './components/About';
import BackToTop from './components/BackToTop';
import Blog from './components/Blog';
import Booking from './components/Booking';
import Carousel from './components/Carousel';
import Copyright from './components/Copyright';
import Destinations from './components/Destinations';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Packages from './components/Packages';
import Registration from './components/Registration';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      {/* <!-- Topbar --> */}
      <Topbar />

      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- Carousel  --> */}
      <Carousel />

      {/* <!-- Booking --> */}
      <Booking />

      {/* <!-- About --> */}
      <About />

      {/* <!-- Features --> */}
      <Features />

      {/* <!-- Destinations --> */}
      <Destinations />

      {/* <!-- Services  --> */}
      <Services />

      {/* <!-- Packages --> */}
      <Packages />

      {/* <!-- Registration --> */}
      <Registration />

      {/* <!-- Team --> */}
      <Team />

      {/* <!-- Testimonials --> */}
      <Testimonials />

      {/* <!-- Blog --> */}
      <Blog />

      {/* <!-- Footer --> */}
      <Footer />

      {/* <!-- Copyright --> */}
      <Copyright />

      <BackToTop />

    </div >


  );
}

export default App;
