import "./Stories.css";
import Story from "./componentes/Story";
import Imagem1 from "./Imagem/Eu.jpg";
import Imagem2 from "./Imagem/Iago.jpg";
import Imagem3 from "./Imagem/file.jpg";
import Imagem4 from "./Imagem/Prof Gabriel.jpeg"; 
import Imagem5 from "./Imagem/Edu.jpg";
import Imagem6 from "./Imagem/Imagem2.jpg.png";

function Stories() {
    return (
        <div className="Stories">
            <Story NomeConta="Gui" ImgStory={Imagem1} />
            <Story NomeConta="Iago" ImgStory={Imagem2} />
            <Story NomeConta="Pedro" ImgStory={Imagem3} />
            <Story NomeConta="Careca" ImgStory={Imagem4} />
            <Story NomeConta="Edu" ImgStory={Imagem5} />
            <Story NomeConta="Polly" ImgStory={Imagem6} />
        </div>
    )
}

export default Stories;