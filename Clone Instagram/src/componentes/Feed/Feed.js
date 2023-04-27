import './Feed.css';
import Imagem1 from "./Imagens/Imagem1.jpeg";
import Imagem2 from "./Imagens/Imagem2.jpeg";
import Imagem3 from "./Imagens/Imagem3.jpeg";
import Imagem4 from "./Imagens/Imagem4.jpeg";
import Imagem5 from "./Imagens/Imagem5.jpeg";
import Imagem6 from "./Imagens/Eu.jpg";
import Imagem7 from "./Imagens/Iago.jpg";
import Imagem8 from "./Imagens/file.jpg";
import Imagem9 from "./Imagens/Prof Gabriel.jpeg"; 
import Imagem10 from "./Imagens/Edu.jpg";
import Imagem11 from "./Imagens/Imagem2.jpg.png";

import Post from './componentes/Post/Post'

export default function Feed() {
    return (
        <div className="Feed">
            <Post NomePerfil="Gui" ImagemPost={Imagem1} ImagemPerfil={Imagem6}></Post>
            <Post NomePerfil="Iago" ImagemPost={Imagem2} ImagemPerfil={Imagem7}/>
            <Post NomePerfil="Pedro" ImagemPost={Imagem3} ImagemPerfil={Imagem8}/>
            <Post NomePerfil="Careca" ImagemPost={Imagem4} ImagemPerfil={Imagem9}/>
            <Post NomePerfil="Edu" ImagemPost={Imagem5} ImagemPerfil={Imagem10}/>
            <Post NomePerfil="Polly" ImagemPost={Imagem11} ImagemPerfil={Imagem11} />     
        </div>
    )
}