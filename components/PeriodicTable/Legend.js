import chemicalData from "./chemicalData";
import Radiation from "./Radiation";
import getId from "../getId";
const symbolText = `<p>Химический символ - сокращённое буквенное обозначение химических элементов, состоят из первой буквы или первой и одной из следующих букв латинского названия элементов</p>`;
const numberText = `<p>Атомный (порядковый) номер - номер химического элемента в периодической системе элементов. Равен числу протонов и электронов в атоме и определяет положительный заряд ядра</p>`;
const radioactiveText = `<p>Радиоактивен</p>`;
const ArText = `<p>Ar - относительная атомная масса — значение массы атома, выраженное в атомных единицах массы (а.е.м)</p>`;
const oxText = `<p>Степень окисления - вспомогательная условная величина для записи процессов окисления, восстановления и окислительно-восстановительных реакций (указан самый частый показатель)</p>`;
const nameRuText = `<p>Название элемента на русском языке</p>`;
const nameLaText = `<p>Название элемента на латыни</p>`;
export default function Legend({ color, inf, legendIsActive, funs }) {
    let style = null;
    switch (inf.cls.split(" ")[0]) {
        case "p": style = color.p; break;
        case "d": style = color.d; break;
        case "f-top": style = color.fTop; break;
        case "f-bottom": style = color.fBottom;break;
        default: style = color.s;
    }

    return (
        <div className={legendIsActive ? "legend active" : "legend"}>
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 492 492" className="legend-arrow-back" onClick={() => funs.setLegendActive(false)}>
                <path
                    d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
                    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
                    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
                    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
                />
            </svg>
            <div className="legend-information-container">
                <div className="legend-information">
                    <div className={"legend-element " + inf.cls} style={style}>
                        <div className="symbol">
                            <span onMouseOver={(e) => funs.createAlert(e, symbolText)}>
                                {inf.s}
                            </span>
                        </div>
                        <div className="num-and-rad-storage">
                            <div className="number">
                                <span onMouseOver={(e) => funs.createAlert(e, numberText)}>
                                    {inf.n}
                                </span>
                            </div>
                            {inf.r ? (
                                <div className="radioactive">
                                    <div onMouseOver={(e) => funs.createAlert(e, radioactiveText)}>
                                        <Radiation />
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="Ar" onMouseOver={(e) => funs.createAlert(e, ArText)}>{inf.Ar}</div>
                        <div className="oxidation">
                            {inf.oxs.map((ox) => {
                                return <div key={getId() + "lox"}>{ox}</div>;
                            })}
                            <div style={{position:"absolute",top:0,left:0,right:0,bottom:0}} onMouseOver={(e) => funs.createAlert(e, oxText)} />
                        </div>
                        <div className="name-ru" onMouseOver={(e) => funs.createAlert(e, nameRuText)}>{inf.ru}</div>
                        <div className="name-la" onMouseOver={(e) => funs.createAlert(e, nameLaText)}>{inf.la}</div>
                    </div>                 
                    <p className="legend-information-text" dangerouslySetInnerHTML={{__html: chemicalData[inf.s].info,}}></p>
                </div>
            </div>
        </div>
    );
}
