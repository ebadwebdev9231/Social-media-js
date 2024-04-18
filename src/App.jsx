import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="d-flex">
      <Sidebar selectedTab={selectedTab} onSelectedTab={setSelectedTab} />
      <div className="w-100">
        <Header />
        {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
  );
};

export default App;
