import palavras from "./palavras.js"

export default function Jogo(props) {
    function pickWord(){
        const random = Math.floor(Math.random() * palavras.length);
        props.setWord(palavras[random])
        props.setDSB(true);
        props.setDLB(false);
    }
    return(
        <div className="GameSpace">
            <img className="img_status" alt="Imagem de status" src={props.status1} />
            <button disabled={props.disabled_start_buttons} onClick={pickWord} className="pickword"> Escolher Palavra </button>
            <div className="Adivinhando" > {props.word} </div>
        </div>
    );
}