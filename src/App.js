import { Nav, MainSection, Footer, MainSection2 } from "./components";
import "./index.css";

function App() {
  return (
    <>
      <div className="app ">
        <div className="nav1">
          <Nav />
        </div>
        <div className="mainSectionApp">
          <MainSection />
        </div>
        <div className="mainSectionApp2">
          <MainSection2 />
        </div>
        <Footer />
      </div>

      
    </>
  );
}

export default App;
