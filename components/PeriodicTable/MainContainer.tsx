import Link from "next/link";
import * as React from "react";
import getId from "../getId";
import ChemicalElement from "./ChemicalElement";
import chemicalElements from "./chemicalElements";

function MainContainer() {
    return(
        <div className="periodic-table__main-container">
            <div className="periodic-table__row">
                <Link href="./info/alkaline"><a className="periodic-table__link"><div className="periodic-table__group">1</div></a></Link>
                <div className="periodic-table__group">18</div>
            </div>
            <div className="periodic-table__row">
                <div className="periodic-table__row-inner">
                    <ChemicalElement element={chemicalElements[0]} />
                    <Link href="./info/alkaline-earth"><a className="periodic-table__link"><div className="periodic-table__group">2</div></a></Link>
                </div>
                <div className="periodic-table__row-inner">
                    <div className="periodic-table__group">13</div>
                    <div className="periodic-table__group">14</div>
                    <div className="periodic-table__group">15</div>
                    <Link href="./info/chalcogene"><a className="periodic-table__link"><div className="periodic-table__group">16</div></a></Link>
                    <Link href="./info/halogen"><a className="periodic-table__link"><div className="periodic-table__group">17</div></a></Link>
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
        </div>
    );
}

export default React.memo(MainContainer);