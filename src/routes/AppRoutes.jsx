import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Painel from '../pages/Painel'
import NotFound from '../pages/NotFound'
import Categorias from '../pages/Categorias'
import Produtos from '../pages/Produtos'
import Contatos from "../pages/Contatos";
import CategoriasForm from "../pages/CategoriasForm";



export default function AppRoutes() {
    return (
        <BrowserRouter>
            {/* <Link to="/">Painel</Link> */}
            <Routes>
            <Route index element={<Painel/>} />
            <Route  path="/produtos" element={<Produtos/>}/>
            <Route  path="/categorias" element={<Categorias/>}/>

            <Route path="/contatos" element={<Contatos/>}/>
            <Route path="/contegorias/novo" element={<CategoriasForm/>}/>
            <Route  path="*" element={<NotFound/>}/>


            </Routes>
      </BrowserRouter>
    )
}