import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "./styles/modules/Main.module.scss";

const App = () => {
   return (
      <main className={styles.main}>
         <Navbar />
         <Hero />
         <About />
      </main>
   );
};

export default App;
