import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import DownloadApp from './Components/DownloadApp/DownloadApp';
import FAQSection from './Components/FAQSection/FAQSection'

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <FAQSection />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
