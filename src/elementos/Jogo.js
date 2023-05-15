import palavras from "./palavras.js"

export default function Jogo(props) {
    function pickWord(){
        const random = Math.floor(Math.random() * palavras.length);
        props.setWord(palavras[random]);
        let traços = "";
        for(let i = 0; i < palavras[random].length; i++){
            traços = traços + "_ "
        }
        props.setGS(traços);
        props.setDSB(true);
        props.setDLB(false);
        console.log(palavras[random]);
    }
    return(
        <div className="GameSpace">
            <img className="img_status" alt="Imagem de status" src={props.status1} />
            <button disabled={props.disabled_start_buttons} onClick={pickWord} className="pickword"> Escolher Palavra </button>
            <div className="Adivinhando" > {props.Guess_Status} </div>
        </div>
    );
}