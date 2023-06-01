import "./App.css";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div>
      <Header
        links={[
          "Dashboard",
          "Minhas Aulas",
          "Minha Agenda",
          "Alunos",
          "Suporte",
        ]}
        activeLink="Minhas Aulas"
      />
    </div>
  );
}

export default App;
