import status from "./status.js";
import alfabeto from "../alfabeto";

export default function Letras(props) {
    function error() {
        
        if( props.index <= 5) {
            let nextindex = props.index + 1;
            props.setIndex(nextindex);
            props.setStatus1(status[nextindex]);
        } else {
            let nextindex = 0;
            props.setIndex(nextindex);
            props.setStatus1(status[nextindex]);
        }
    }
    return(
        <div className="bottom" >
            <ul className="letras">
            { alfabeto.map( (letra) => 
                <li key={letra}>
                <button className="letra" 
                disabled={props.disabled_letter_buttons}
                onClick={error}>
                    {letra} 
                </button>
                </li> ) 
            }
            </ul>
        </div>
    );
}