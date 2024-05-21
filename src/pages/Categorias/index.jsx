import { Link } from "react-router-dom";
import Menu from "../../layouts/Menu";

export default function Categorias () {
    return (
        <>
            <Menu/>
            <h1>Categorias</h1>
            <Link to="/contegorias/novo" className="btn btn-sucess btn-sm">Nova Categorias</Link>
        </>
    )
}