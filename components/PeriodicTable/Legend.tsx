import Link from "next/link";
import { IChemicalElement } from "../interface";
import chemicalData from "./chemicalData";
import ChemicalElement from "./ChemicalElement";

interface Props {
    element: IChemicalElement;
}

function Legend({element}: Props) {
    return(
        <div className="legend">
            <ChemicalElement element={{...element, class: element.class + " chemical-element_legend"}} />
            <div className="legend__content">
                <div>
                    <div dangerouslySetInnerHTML={{__html: chemicalData[element.symbol as keyof typeof chemicalData].info as string}}></div>
                    <div className="legend__link">
                        <Link href={`./info/${element.symbol}`}>
                            <a>Подробнее ➝</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Legend;