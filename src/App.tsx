import Arrow from "./components/Arrow";
import Button from "./components/Button";

const App = () => {
   return (
      <main>
         <div className="arrow-container">
            <Arrow direction="left" />
            <Button />
         </div>
      </main>
   );
};

export default App;
