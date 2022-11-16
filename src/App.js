import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Tour from "./components/Tour";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Tour />
    </div>
  );
}

export default App;
