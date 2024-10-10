import { Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <main className=" px-4 min-h-screen flex flex-col">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <footer className="text-center mt-auto p-6 text-my-red">EatMap</footer>
    </main>
  );
}

export default App;
