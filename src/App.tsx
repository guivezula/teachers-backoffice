import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { MyClasses } from "./pages/my-classes/MyClasses";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/minhas-aulas" />} />
        <Route path="minhas-aulas" element={<MyClasses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
