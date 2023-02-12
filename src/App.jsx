import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
const Shift = lazy(() => import("./pages/Shift"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <BrowserRouter>
      {/* <Box> */}
      <NavBar />
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shift/:id" element={<Shift />} />
          {/* <Route path="/shift/:id" element={<About />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Suspense>
      {/* </Box> */}
    </BrowserRouter>
  );
};

export default App;
