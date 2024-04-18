import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Header />
        <PostList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
