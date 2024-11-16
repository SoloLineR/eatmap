import { Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import { Toaster } from "sonner";
import Discount from "./pages/Discount";

function App() {
  return (
    <main className=" px-4 min-h-screen flex flex-col">
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discount" element={<Discount />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Toaster />
      <footer className="text-center mt-auto p-6 text-my-red">EatMap</footer>
    </main>
  );
}

export default App;
