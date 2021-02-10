import React from "react";
import MenuOpen from "./MenuOpen";
import Menu from "./Menu";
import CalculatorOpen from "./CalculatorOpen";
import Calculator from "../Calculator/Calculator";
import LinkHelp from "./LinkHelp";


export default function Layout({ children }) {
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const [isCalculatorActive, setIsCalculatorActive] = React.useState(false);

    function toggleMenu() {
        setIsOpenMenu(!isOpenMenu);
    }

    function toggleCalculator() {
        setIsCalculatorActive(!isCalculatorActive);
    }

    return(
        <div id="app">
            <header className="header">
                <MenuOpen onChange={toggleMenu} />
                <div className="grow" />
                <CalculatorOpen toggleCalculator={toggleCalculator} />
                {children}
                <LinkHelp />
            </header>
            <Menu active={isOpenMenu} />
            <Calculator toggleCalculator={toggleCalculator} isCalculatorActive={isCalculatorActive}/>
        </div> 
    );
}