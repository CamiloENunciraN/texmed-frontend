import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pagina/Login";
import Dashboard from "./Pagina/DashBoard";
import ClientList from "./Pagina/ClientList";
import ClientSearch from "./Pagina/ClientSearch";
import Opcion from "./Pagina/Opcion";
import ShowMedida from "./Pagina/ShowMedida";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/clientlist" element={<ClientList/>} />
        <Route path="/clientsearch" element={<ClientSearch/>} />
        <Route path="/opcion" element={<Opcion/>} />
        <Route path="/showmedida" element={<ShowMedida/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);