import "./Story.css";

export default function Story(props) {
    return (
        <div className="Story">
            <div className="imgStory">
                <img alt="Imagem de Pessoa" src={props.ImgStory} />
            </div>
            <div className="nomeStory">
                <span>{props.NomeConta}</span>
            </div>
        </div>
    )
}