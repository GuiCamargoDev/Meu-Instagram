import "./LadoDireito.css";

import Imagem1 from "./Imagens/Eu.jpg";
import Imagem2 from "./Imagens/Edu.jpg";
import Imagem3 from "./Imagens/Iago.jpg";
import Imagem4 from "./Imagens/Imagem2.jpg.png";
import Imagem5 from "./Imagens/Prof Gabriel.jpeg";
import Imagem6 from "./Imagens/file.jpg";

export default function LadoDireito() {
    return (
        <div className="LadoDireito">
            <div className="juntos">
                <div className="junto">
                    <div className="perfil">
                        <img src={Imagem1} alt="Imagem de Guilherme" />
                        <div className="des">
                            <p>camargoggui<br></br>Guilherme Camargo</p>
                        </div>
                    </div>
                </div>
                <p>Suggested for you</p>
                <div className="junto-2">
                    <div className="ped-1">
                        <img src={Imagem2}></img>
                    </div>
                    <div className="esc-1">
                        <p>Eduardo.bar</p><p>followed by <strong>Iago.kid123</strong> +39 more</p>
                    </div>
                </div>
                <div className="junto-3">
                    <div className="ped-1">
                        <img src={Imagem6}></img>
                    </div>
                    <div className="esc-1">
                        <p>Mc Pedro</p><p>followed by <strong>careca.cabelo</strong> +89 more</p>
                    </div>
                </div>
                <div className="junto-4">
                    <div className="ped-1">
                        <img src={Imagem3}></img>
                    </div>
                    <div className="esc-1">
                        <p>Iago.kid123</p><p>followed by <strong>mc Pedro</strong> +10 more</p>
                    </div>
                </div>
                <div className="junto-5">
                    <div className="ped-1">
                        <img src={Imagem5}></img>
                    </div>
                    <div className="esc-1">
                        <p>Careca.Cabelo</p><p>followed by <strong>eduardo.bar</strong> +43 more</p>
                    </div>
                </div>
            </div>
        </div >
    )
}