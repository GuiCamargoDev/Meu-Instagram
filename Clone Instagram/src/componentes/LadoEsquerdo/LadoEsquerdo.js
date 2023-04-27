import "./LadoEsquerdo.css";
import ItemMenu from "./componentes/itemMenu";

import Imagem1 from "./Imagens/Instagram.png";
import Imagem2 from "./Imagens/Eu.jpg";

import { HiHome } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";

export default function LadoEsquerdo() {
    return (
        <div className="LadoEsquerdo">
            <div className="logo">
                <img src={Imagem1} alt="Logo Instagram" />
            </div>
            <div className="menu-principal">
                <ItemMenu icone= { <HiHome />} texto="Home" />

                <ItemMenu icone= { <AiOutlineSearch /> } texto="Search" />

                <ItemMenu icone= { <MdExplore /> } texto="Explore" />

                <ItemMenu icone= { <BsCameraReels /> } texto="Reels" />

                <ItemMenu icone= { <FiMessageSquare /> } texto="Messages" />

                <ItemMenu icone= { <AiFillHeart /> } texto="Notifications" />
                
                <ItemMenu icone= { <IoIosCreate /> } texto="Create" />

            </div>
                    
                <div className="Perfil">
                    <img src={Imagem2} alt="Foto de Guilherme"></img>
                    <ItemMenu texto="Profile" />
                </div>

            
        </div>
    )
}