import Navbar from "./pages/Navbar/navbar";
import Intro from "./pages/LandingPage/landingPage";
import Facts from "./pages/AboutMe/facts";
import Works from  "./pages/Works/works";
import ContactForm from './pages/ContactForm/contactForm'
import Header from './pages/ContactForm/header'
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Facts/>
      <Works/>
      <Header />
      <ContactForm />

    </div>
  );
}

export default App;

//same as the .jsx file in 
