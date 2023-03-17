import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { HomePage } from "./components/HomePage";
import ticket from "./Assets/toppng 1.png";
import { Description } from "./components/Description";
import { Typography } from "@mui/material";

function App() {

  return (
    <div className="root">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<SignIn />} />
          <Route
            path="/Homepage"
            element={
              localStorage.getItem("success") ? (
                <HomePage />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route path="/description/:id" element={<Description />} />
          {/* <Route path="/Homepage" element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
