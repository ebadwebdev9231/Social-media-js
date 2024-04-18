import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default App;
