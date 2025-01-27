import Arrow from "./components/Arrow";

const App = () => {
   return (
      <main>
         <div className="arrow-container">
            <Arrow />
            <Arrow direction="right" buttonType="secondary"/>
            <Arrow direction="right" buttonType="primary"/>
            <Arrow direction="left" buttonType="secondary"/>
         </div>
      </main>
   );
};

export default App;
