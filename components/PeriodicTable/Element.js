import getId from "../getId";
import Radiation from "./Radiation";

export default function Element({ el, st, changeLegend}) {
    return(
        <div className="element-storage" id={el.s} onClick={() => changeLegend(el)} >
            <div className={"element " + el.cls} style={st}>
                <div className="symbol">{ el.s }</div>
                <div className="num-and-rad-storage">
                    <div className="number">{ el.n }</div>
                    {el.r ? 
                    <div className="radioactive">
                        <Radiation />
                    </div> : ""}
                </div>				
                <div className="Ar">{ el.Ar }</div>
                <ol className="oxidation">
                    {el.oxs.map(ox => {
                        return <li key={getId() + "ox"}> {ox} </li>
                    })}
                </ol>
                <div className="name-ru">{ el.ru }</div>
                <div className="name-la">{ el.la }</div>
            </div>
	    </div>
    );
}