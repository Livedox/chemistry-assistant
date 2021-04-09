import { IChemicalElement }from "../interface";
import SettingContext from "../Context/ContextSettingPeriodicTabe";
import { useContext } from "react";
import { IColorOptions } from "../interface";
import getId from "../getId";
interface IProps {
    element: IChemicalElement
}

const ChemicalElement: React.FC<IProps> = ({element}) => {
    const classElement: string = "chemical-element " + element.class;
    const context = useContext(SettingContext);
    const key: keyof IColorOptions = element.class.split(" ")[0] as keyof IColorOptions;
    const style: undefined | React.CSSProperties = context[key];
    return (
        <div className={classElement} id={element.symbol} style={style}>
            <div className="chemical-element__storage-row">
                <div className="chemical-element__symbol">{element.symbol}</div>
                <div className="chemical-element__storage-column">
                    <div className="chemical-element__number">{element.number}</div>
                    {element.radioactive && <img className="chemical-element__radiation" src="./img/radiation.svg" alt="" />}
                </div>
            </div>
            <div className="chemical-element__storage-row chemical-element__storage-center">
                <div className="chemical-element__ar">{element.ar}</div>
                <ol className="chemical-element__oxidation">
                    {element.oxidation.map(item => <li key={getId()}>{item}</li>)}
                </ol>
            </div>
            <div className="chemical-element__name-ru">{element.nameRu}</div>
            <div className="chemical-element__name-la">{element.nameLa}</div>
        </div>
    )
}

export default ChemicalElement;