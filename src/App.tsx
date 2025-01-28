import About from "./components/About";
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
      </main>
   );
};

export default App;
   