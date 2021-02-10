import React from "react";
import getId from "../getId";

export default function CalculatorResult({ resultElements }) {
    return(
        <table id="calculator-result-elements">
            <thead>
                <tr className="calculator-row">
                    <th className="calculator-column">Элемент</th><th className="calculator-column">Атомная масса</th>
                    <th className="calculator-column">Количество</th><th className="calculator-column">Результат</th>
                </tr>
            </thead>
            <tbody>
                {resultElements.map(item => {
                    return (
                        <tr className="calculator-row" key={getId()}>
                            <td className="calculator-column">{item[0]}</td><td className="calculator-column">{item[1].Ar}</td>
                            <td className="calculator-column">{item[1].amount}</td><td className="calculator-column">{item[1].mass}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}