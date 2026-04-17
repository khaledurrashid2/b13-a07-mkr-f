import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f7f4",
        }}>
          <Navbar />

          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/"           element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline"   element={<Timeline />} />
              <Route path="/stats"      element={<Stats />} />
              <Route path="*"           element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>

        <Toaster toastOptions={{ style: { zIndex: 9999 } }} />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
