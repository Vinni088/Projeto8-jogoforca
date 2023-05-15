import palavras from "../palavras.js"
import status from "./status.js";

export default function Jogo(props) {
    function pickWord(){
        if (!props.restart) {
            const random = Math.floor(Math.random() * palavras.length);
            props.setWord(palavras[random]);
            let traços = [];
            for(let i = 0; i < palavras[random].length; i++){
                traços.push("_");
            }
            props.setGS(traços);
            props.setDSB(true);
            props.setDLB(false);
            console.log(palavras[random]);

            /* ajuste: restart */
            props.setResult('Adivinhando');
            props.setLG([]);
            props.setRT(1); 
            props.setWR(1); 
            let nextindex = 0;
            let nextstatus = [...status]
            props.setIndex(nextindex);
            props.setStatus1(nextstatus[nextindex]); 
        } else if(props.restart) {
            props.setIndex(0); 
            props.setStatus1(status[props.index]); 
            props.setWord(''); 
            props.setDSB(false); 
            props.setDLB(true); 
            props.setRT(1); 
            props.setWR(1);
            props.setGS([]); 
            props.setLG([]);
            props.setResult('Adivinhando'); 
            props.setRestart(false); 
            
        }

    }
    return(
        <div className="GameSpace">
            <img data-test="game-image" className="img_status" alt="Imagem de status" src={props.status1} />
            <button data-test="choose-word" disabled={props.disabled_start_buttons} onClick={pickWord} className="pickword"> Escolher Palavra </button>
            <div data-test="word" id="word" className={props.result} > {props.Guess_Status} </div>
        </div>
    );
}