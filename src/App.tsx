import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import styles from "./styles/modules/Main.module.scss";

const App = () => {
   return (
      <main className={styles.main}>
         <Navbar />
         <Hero />
         <About />
         <Portfolio />
         <Contact />
         <Navbar />
      </main>
   );
};

export default App;
   