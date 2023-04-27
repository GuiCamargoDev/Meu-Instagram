import "./Post.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { BsSave } from "react-icons/bs";
import Imagem1 from "./Imagens/Eu.jpg";

export default function Post(props) {
    return (
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor"> <img alt="Pessoa" src={props.ImagemPerfil}></img></div>
                <div className="NomePerfilAutor">{props.NomePerfil}</div>
                <div className="MenuBarraSuperior">...</div>
            </div>
            <div className="ConteudoPost"><img src={props.ImagemPost}></img></div>
            <div className="BarraInferior">
                <div className="icons-1">
                    <div className="icons">
                        <div className="icon">
                            {<AiOutlineHeart />}
                        </div>
                        <div className="icon">{<BiComment />}</div>
                        <div className="icon">{<BsArrowUpRight />}</div>

                    </div>
                    <div className="icon">{<BsSave />}</div>
                </div>
                <div className="like">
                    <div className="foto">
                        <img src={Imagem1} />
                        <div className="txt">
                            <p>Liked by <strong>camargoggui</strong> and 286 others</p>
                        </div>
                    </div>
                </div>
                <div className='Coment'><br></br>
                    <p><strong>Gui</strong> The beauty of nature is simply breathtaking. From the towering trees to the majestic mountains, the natural world has an unrivaled elegance that captivates us all. The colors, textures, and sounds of nature are endlessly varied and inspiring, reminding us of the wondrous diversity of life on this planet.
                    </p>
                </div>
            </div>
        </div>
    )
}