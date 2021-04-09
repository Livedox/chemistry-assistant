import ChemicalElement from "../components/Test/ChemicalElement";
import chemicalElements from "../components/Test/chemicalElements";
import ContextSetting from "../components/Context/ContextSettingPeriodicTabe";
import getId from "../components/getId";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ISettingPeriodicTable } from "../components/interface";

export default function Table() {
    const [settingState, setSettingState] = useState<ISettingPeriodicTable>({});
    useEffect(() => {
        const data: null | string = localStorage.getItem("periodicTable");
        if(data) {      
            const setting: ISettingPeriodicTable = JSON.parse(data);
            setSettingState(setting);
        }
    }, []);
    return (
        <>
            <header className="header">
                <Link href="./">
                    <a className="header__logo-container">
                        <img src="./favicon.ico" alt="" className="header__logo" />
                        <h2 className="header__logo-name">Chemistry Assistant</h2>
                    </a>
                </Link>
                <nav className="nav nav_middle">
                    <Link href="./">
                        <a className="nav__link">
                            <img src="./img/cells.svg" alt="" className="nav__logo-link" />
                            <span className="nav__link-text">Таблица менделеева</span>
                        </a>
                    </Link>
                    <Link href="./table-solubility">
                        <a className="nav__link">
                            <img src="./img/cells.svg" alt="" className="nav__logo-link" />
                            <span className="nav__link-text">Таблица растворимости</span>
                        </a>
                    </Link>
                    <a className="nav__link">
                        <img src="./img/cells.svg" alt="" className="nav__logo-link" />
                        <span className="nav__link-text">Редактор химических формул</span>
                    </a>
                </nav>
                <div className="nav">
                    <a className="nav__link">
                        <img src="./img/cells.svg" alt="" className="nav__logo-link" />
                        <span className="nav__link-text">Калькулятор</span>
                    </a>
                    <a className="nav__link">
                        <img src="./img/cells.svg" alt="" className="nav__logo-link" />
                        <span className="nav__link-text">Помощь</span>
                    </a>
                    <a className="nav__link">
                        <img src="./img/cells.svg" alt="" className="nav__logo-link" />
                        <span className="nav__link-text">Настройки</span>
                    </a>
                </div>
                
            </header>
            <div className="periodic-table">
                <div className="periodic-table__period-container">
                    {[1, 2, 3, 4, 5, 6, 7].map((item: number) => <div className="periodic-table__period">{item}</div>)}
                </div>
                <div className="periodic-table__main-container">
                    <ContextSetting.Provider value={settingState}>
                    <div className="periodic-table__row">
                        <div className="periodic-table__group">1</div>
                        <div className="periodic-table__group">18</div>
                    </div>
                    <div className="periodic-table__row">
                        <div className="periodic-table__row-inner">
                            <ChemicalElement element={chemicalElements[0]} />
                            <div className="periodic-table__group">2</div>
                        </div>
                        <div className="periodic-table__row-inner">
                            <div className="periodic-table__group">13</div>
                            <div className="periodic-table__group">14</div>
                            <div className="periodic-table__group">15</div>
                            <div className="periodic-table__group">16</div>
                            <div className="periodic-table__group">17</div>
                            <ChemicalElement element={chemicalElements[1]} />
                        </div>
                    </div>
                    <div className="periodic-table__row">
                        <div className="periodic-table__row-inner">
                            <ChemicalElement element={chemicalElements[2]} />
                            <ChemicalElement element={chemicalElements[3]} />
                        </div>
                        <div className="periodic-table__row-inner">
                            {chemicalElements.slice(4, 10).map((item) => <ChemicalElement element={item} key={getId()} />)}
                        </div>
                    </div>
                    <div className="periodic-table__row">
                        <ChemicalElement element={chemicalElements[10]} />
                        <ChemicalElement element={chemicalElements[11]} />
                        <div className="periodic-table__group">3</div>
                        <div className="periodic-table__group">4</div>
                        <div className="periodic-table__group">5</div>
                        <div className="periodic-table__group">6</div>
                        <div className="periodic-table__group">7</div>
                        <div className="periodic-table__group">8</div>
                        <div className="periodic-table__group">9</div>
                        <div className="periodic-table__group">10</div>
                        <div className="periodic-table__group">11</div>
                        <div className="periodic-table__group">12</div>
                        {chemicalElements.slice(12, 18).map((item) => <ChemicalElement element={item} key={getId()} />)}
                    </div>
                    <div className="periodic-table__row">
                        {chemicalElements.slice(18, 36).map((item) => <ChemicalElement element={item} key={getId()} />)}
                    </div>
                    <div className="periodic-table__row">
                        {chemicalElements.slice(36, 54).map((item) => <ChemicalElement element={item} key={getId()} />)}
                    </div>
                    <div className="periodic-table__row">
                        {chemicalElements.slice(54, 57).map((item) => <ChemicalElement element={item} key={getId()} />)}
                        {chemicalElements.slice(71, 86).map((item) => <ChemicalElement element={item} key={getId()} />)}
                    </div>
                    <div className="periodic-table__row">
                        {chemicalElements.slice(86, 89).map((item) => <ChemicalElement element={item} key={getId()} />)}
                        {chemicalElements.slice(103, 118).map((item) => <ChemicalElement element={item} key={getId()} />)}
                    </div>
                    <div className="periodic-table__row-bottom periodic-table__row-bottom_top">
                        <div className="periodic-table__row-inner">
                            {chemicalElements.slice(57, 71).map((item) => <ChemicalElement element={item} key={getId()} />)}
                        </div>
                    </div>
                    <div className="periodic-table__row-bottom">
                        <div className="periodic-table__row-inner">
                            {chemicalElements.slice(89, 103).map((item) => <ChemicalElement element={item} key={getId()} />)}
                        </div>
                    </div>
                    </ContextSetting.Provider>
                </div>  
            </div>
        </>
    )
}