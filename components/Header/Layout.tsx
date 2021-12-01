import React, { useState } from "react";
import Header from "./Header";
import Calculator from "../Calculator/Calculator";

interface IProps{
    children: React.ReactNode;
}

const Layout:React.FC<IProps> = ({ children }) => {
    const [isCalculatorActive, toggleCalculator] = useState(false);
    return(
        <>
            <Header toggleCalculator={() => toggleCalculator(!isCalculatorActive)}/>
            <div id="main">
                <Calculator isCalculatorActive={isCalculatorActive} toggleCalculator={() => toggleCalculator(!isCalculatorActive)}/>
                {children}
            </div>
        </>
    )
}

export default Layout;