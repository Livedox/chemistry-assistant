import { useEffect, useState } from "react";
import HeaderCell from "../components/TableSolubility/HeaderCell";
import FixedCell from "../components/TableSolubility/FixedCell";
import Cell from "../components/TableSolubility/Cell";
import Layout from "../components/Header/Layout";
import Alert from "../components/Alert/Alert";
import Head from "next/head";

async function highlightColumnAndRow(e) {
    let table = document.querySelector("#solubility-table");
    let cellIndex = e.target.cellIndex;
    let rowIndex = e.target.parentNode.rowIndex;
    for(let i = 1; i < cellIndex; i++) {
        table.rows[rowIndex].cells[i].classList.toggle("highlighted");
    }
    for(let i = 1; i < rowIndex; i++) {
        table.rows[i].cells[cellIndex].classList.toggle("highlighted");
    }
    e.target.classList.toggle("active");
}


export default function SolubilityTable() {
    const [color, setColor] = useState({});
    const [isSettingActive, setSettingAcitve] = useState(false);
    const [alertClass, SetAlertClass] = useState("left");
    const [htmlAlert, setHtmlAlert] = useState("");
    const [coords, setCoords] = useState({});

    function createAlert(e, html) {
        setHtmlAlert(html);
        const width = document.querySelector(".alert").offsetWidth;
        const targetCoords = e.currentTarget.getBoundingClientRect();
        let left = targetCoords.right + 3;
        if(left + width > document.documentElement.offsetWidth) {
            left = targetCoords.left - width - 3;
            SetAlertClass("active right");
        } else {
            SetAlertClass("active left");
        }
        setCoords({left, top: targetCoords.y});
        e.currentTarget.onmouseleave = () => {
            SetAlertClass("");
        }
    }
    const toggleSetting = () => setSettingAcitve(!isSettingActive);
    useEffect(() => {
        const color = JSON.parse(localStorage.getItem("solubilityTableColor"));
        if (color) setColor(color);
    }, []);
    return (
        <>
        <Head>
            <title>Таблица растворимости</title>
            <meta
                name="description"
                content="Интерактивная периодическая таблица растворимости. Создана в помощь при решении заданий по химии для учеников и студентов."
            />
            <meta
                name="keywords"
                content="Таблица растворимости, Интерактивная таблица растворимости, Solubility Table, Таблица растворимости ЕГЭ, Растворимость вещест ЕГЭ, Растворимость веществ"
            />
        </Head>
        <Layout>
        <Alert alertClass={alertClass} html={htmlAlert} coords={coords} />
            <div className="outer">
                <div className="inner">                              
                    <table id="solubility-table" onMouseOver={(e) => highlightColumnAndRow(e)} onMouseOut={(e) => highlightColumnAndRow(e)}>
                        <thead>
                            <tr>
                                <FixedCell el="A/K" sup="" st={color.hc} />
                                <HeaderCell el="H" sup="+" st={color.hc}  />
                                <HeaderCell el="Li" sup="+" st={color.hc} />
                                <HeaderCell el="K" sup="+" st={color.hc} />
                                <HeaderCell el="Na" sup="+" st={color.hc} />
                                <HeaderCell el="NH₄" sup="+" st={color.hc} />
                                <HeaderCell el="Ba" sup="2+" st={color.hc} />
                                <HeaderCell el="Ca" sup="2+" st={color.hc} />
                                <HeaderCell el="Mg" sup="2+" st={color.hc} />
                                <HeaderCell el="Sr" sup="2+" st={color.hc} />
                                <HeaderCell el="Al" sup="3+" st={color.hc} />
                                <HeaderCell el="Cr" sup="3+" st={color.hc} />
                                <HeaderCell el="Fe" sup="2+" st={color.hc} />
                                <HeaderCell el="Fe" sup="3+" st={color.hc} />
                                <HeaderCell el="Mn" sup="2+" st={color.hc} />
                                <HeaderCell el="Zn" sup="2+" st={color.hc} />
                                <HeaderCell el="Ag" sup="+" st={color.hc} />
                                <HeaderCell el="Hg" sup="2+" st={color.hc} />
                                <HeaderCell el="Pb" sup="2+" st={color.hc} />
                                <HeaderCell el="Sn" sup="2+" st={color.hc} />
                                <HeaderCell el="Cu" sup="2+" st={color.hc} />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <FixedCell el="OH" sup="-" st={color.hc} />
                                <td className="cell"></td>
                                <Cell html="LiOH<br>Гидроксид лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KOH<br>Едкое кали" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaOH<br>Гидроксид натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>OH<br>Гидроксид аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ba(OH)<sub>2</sub><br>Баритовая вода" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ca(OH)<sub>2</sub><br>Гашеная известь<br>Известковая вода/молоко" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="Mg(OH)₂<br>Гидроксид магния" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Sr(OH)<sub>2</sub><br>Гидроксид стронция" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="Al(OH)<sub>3</sub><br>Гидроксид алюминия" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Cr(OH)<sub>3</sub><br>Гидроксид хрома" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe(OH)<sub>2</sub><br>Гидроксид железа (II)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe(OH)<sub>3</sub><br>Гидроксид железа (III)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Mn(OH)<sub>2</sub><br>Гидроксид марганца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Zn(OH)<sub>2</sub><br>Гидроксид цинка" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="AgOH<br>Гидроксид серебра" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Hg(OH)<sub>2</sub><br>Гидроксид ртути" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Pb(OH)<sub>2</sub><br>Гидроксид свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Sn(OH)<sub>2</sub><br>Гидроксид олова" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Cu(OH)<sub>2</sub><br>Гидроксид меди" sol="Н" st={color.insoluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="F" sup="-" st={color.hc} />
                                <Cell html="HF<br>Фтороводород<br>Плавиковая кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiF<br>Фторид лития" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="KF<br>Фторид калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaF<br>Фторид натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>F<br>Фторид аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="BaF<sub>2</sub><br>Фторид бария" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="CaF<sub>2</sub><br>Фторид кальция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="MgF<sub>2</sub><br>Фторид магния" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SrF<sub>2</sub><br>Фторид стронция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="AlF<sub>3</sub><br>Фторид алюминия" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="CrF<sub>3</sub><br>Фторид хрома" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="FeF<sub>2</sub><br>Фторид железа (II)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe<sub>3</sub><br>Фторид железа (III)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="MnF<sub>2</sub><br>Фторид марганца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="ZnF<sub>2</sub><br>Фторид цинка" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="AgF<br>Фторид серебра" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="HgF<sub>2</sub><br>Фторид ртути" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="PbF<sub>2</sub><br>Фторид свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SnF<sub>2</sub><br>Фторид олова" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CuF<sub>2</sub><br>Фторид меди" sol="Р" st={color.soluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="Cl" sup="-" st={color.hc} />
                                <Cell html="HCl<br>Хлороводород<br>Соляная кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiCl<br>Хлорид лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KCl<br>Хлорид калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaCl<br>Хлорид натрия<br>Каменная/поваренная соль" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>Cl<br>Нашатырь" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="BaCl<sub>2</sub><br>Хлорид бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="СaCl<sub>2</sub><br>Хлорид кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="MgCl<sub>2</sub><br>Хлорид магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="SrCl<sub>2</sub><br>Хлорид стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="AlCl<sub>3</sub><br>Хлорид алюминия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CrCl<sub>3</sub><br>Хлорид хрома" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="FeCl<sub>2</sub><br>Хлорид железа (II)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="FeCl<sub>3</sub><br>Хлорид железа (III)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="MnCl<sub>2</sub><br>Хлорид марганца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="ZnCl<sub>2</sub><br>Хлорид цинка" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="AgCl<br>Хлорид серебра" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="HgCl<sub>2</sub><br>Хлорид ртути/сулема" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="PbCl<sub>2</sub><br>Хлорид свинца" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="SnCl<sub>2</sub><br>Хлорид олова" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CuCl<sub>2</sub><br>Хлорид меди" sol="Р" st={color.soluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="Br" sup="-" st={color.hc} />
                                <Cell html="HBr<br>Бромоводород" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiBr<br>Бромид лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KBr<br>Бромид калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaBr<br>Бромид натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>Br<br>Бромид аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="BaBr<sub>2</sub><br>Бромид бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="СaBr<sub>2</sub><br>Бромид кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="MgBr<sub>2</sub><br>Бромид магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="SrBr<sub>2</sub><br>Бромид стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="AlBr<sub>3</sub><br>Бромид алюминия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CrBr<sub>3</sub><br>Бромид хрома" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="FeBr<sub>2</sub><br>Бромид железа (II)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="FeBr<sub>3</sub><br>Бромид железа (III)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="MnBr<sub>2</sub><br>Бромид марганца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="ZnBr<sub>2</sub><br>Бромид цинка" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="AgBr<br>Бромид серебра" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="HgBr<sub>2</sub><br>Бромид ртути" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="PbBr<sub>2</sub><br>Бромид свинца" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="SnBr<sub>2</sub><br>Бромид олова" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="СuBr<sub>2</sub><br>Бромид меди" sol="Р" st={color.soluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="I" sup="-" st={color.hc} />
                                <Cell html="HI<br>Иодоводород" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiI<br>Иодид лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KI<br>Иодид калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaI<br>Иодид натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>I<br>Иодид аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="BaI<sub>2</sub><br>Иодид бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CaI<sub>2</sub><br>Иодид кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="MgI<sub>2</sub><br>Иодид магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="SrI<sub>2</sub><br>Иодид стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="AlI<sub>3</sub><br>Иодид алюминия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CrI<sub>3</sub><br>Иодид хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="FeI<sub>2</sub><br>Иодид железа (II)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="FrI<sub>3</sub><br>Иодид железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="MnI<sub>2</sub><br>Иодид марганца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="ZnI<sub>2</sub><br>Иодид цинка" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="AgI<br>Иодид серебра" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="HgI<sub>2</sub><br>Иодид ртути" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="PbI<sub>2</sub><br>Иодид свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SnI<sub>2</sub><br>Иодид олова" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="CuI<sub>2</sub><br>Иодид меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="S" sup="2-" st={color.hc} />
                                <Cell html="H<sub>2</sub>S<br>Сероводород" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Li<sub>2</sub>S<br>Сульфид лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="K<sub>2</sub>S<br>Сульфид калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Na<sub>2</sub>S<br>Сульфид натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(NH<sub>4</sub>)<sub>2</sub>S<br>Сульфид аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="BaS<br>Сульфид бария" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="CaS<br>Сульфид кальция" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="MgS<br>Сульфид магния" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="SrS<br>Сульфид стронция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Al<sub>2</sub>S<sub>3</sub><br>Сульфид алюминия" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr<sub>2</sub>S<sub>3</sub><br>Сульфид хрома" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="FeS<br>Сульфид железа (II)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe<sub>2</sub>S<sub>3</sub><br>Сульфид железа (III)" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="MnS<br>Сульфид марганца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="ZnS<br>Сульфид цинка" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Ag<sub>2</sub>S<br>Сульфид серебра" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="HgS<br>Сульфид ртути" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="PbS<br>Сульфид свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SnS<br>Сульфид олова" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="CuS<br>Сульфид меди" sol="Н" st={color.insoluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="HS" sup="-" st={color.hc} />
                                <Cell html="ll" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiHS<br>Гидросульфид лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KHS<br>Гидросульфид калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaHS<br>Гидросульфид натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>HS<br>Гидросульфид аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ba(HS)<sub>2</sub><br>Гидросульфид бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ca(HS)<sub>2</sub><br>Гидросульфид кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Mg(HS)<sub>2</sub><br>Гидросульфид магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Sr(HS)<sub>2</sub><br>Гидросульфид стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Al(HS)<sub>3</sub><br>Гидросульфид алюминия" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr(HS)<sub>3</sub><br>Гидросульфид хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HS)<sub>2</sub><br>Гидросульфид железа (II)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HS)<sub>3</sub><br>Гидросульфид железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Mn(HS)<sub>2</sub><br>Гидросульфид марганца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Zn(HS)<sub>2</sub><br>Гидросульфид цинка" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="AgHS<br>Гидросульфид серебра" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Hg(HS)<sub>2</sub><br>Гидросульфид ртути" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Pb(HS)<sub>2</sub><br>Гидросульфид свинца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Sn(HS)<sub>2</sub><br>Гидросульфид олова" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cu(HS)<sub>2</sub><br>Гидросульфид меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="SO₄" sup="2-" st={color.hc} />
                                <Cell html="H<sub>2</sub>SO<sub>4</sub><br>Серная кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Li<sub>2</sub>SO<sub>4</sub><br>Сульфат лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="K<sub>2</sub>SO<sub>4</sub><br>Сульфат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Na<sub>2</sub>SO<sub>4</sub><br>Сульфат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub><br>Сульфат аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="BaSO<sub>4</sub><br>Сульфат бария<br>Барит" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="CaSO<sub>4</sub><br>Сульфат кальция" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="MgSO<sub>4</sub><br>Сульфат магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="SrSO<sub>4</sub><br>Сульфат стронция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub><br>Сульфат алюминия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub><br>Сульфат хрома" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="FeSO<sub>4</sub><br>Сульфат железа (II)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub><br>Сульфат железа (III)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="MnSO<sub>4</sub><br>Сульфат марганца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="ZnSO<sub>4</sub><br>Сульфат цинка" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ag<sub>2</sub>SO<sub>4</sub><br>Сульфат серебра" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="HgSO<sub>4</sub><br>Сульфат ртути" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="PbSO<sub>4</sub><br>Сульфат свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SnSO<sub>4</sub><br>Сульфат олова" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CuSO<sub>4</sub><br>Сульфат меди" sol="Р" st={color.soluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="HSO₄" sup="-" st={color.hc} />
                                <Cell html="LiHSO<sub>4</sub><br>Гидросульфат лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KHSO<sub>4</sub><br>Гидросульфат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaHSO<sub>4</sub><br>Гидросульфат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>HSO<sub>4</sub><br>Гидросульфат аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ba(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат бария" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Ca(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат кальция" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Mg(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат магния" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Sr(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат стронция" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Al(HSO<sub>4</sub>)<sub>3</sub><br>Гидросульфат алюминия (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr(HSO<sub>4</sub>)<sub>3</sub><br>Гидросульфат хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат железа (II)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HSO<sub>4</sub>)<sub>3</sub><br>Гидросульфат железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HSO<sub>4</sub>)<sub>3</sub><br>Гидросульфат железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Mn(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат марганца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Zn(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат цинка" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="AgHSO<sub>4</sub><br>Гидросульфат серебра" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Hg(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат ртути" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Pb(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Sn(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат олова" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cu(HSO<sub>4</sub>)<sub>2</sub><br>Гидросульфат меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="SO₃" sup="2-" st={color.hc} />
                                <Cell html="H<sub>2</sub>SO<sub>3</sub><br>Сернистая кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Li<sub>2</sub>SO<sub>3</sub><br>Сульфит лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="K<sub>2</sub>SO<sub>3</sub><br>Сульфит калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Na<sub>2</sub>SO<sub>3</sub><br>Сульфит натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(NH<sub>4</sub>)<sub>2</sub>SO<sub>3</sub><br>Сульфит аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="BaSO<sub>3</sub><br>Сульфит бария" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="СaSO<sub>3</sub><br>Сульфит кальция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="MgSO<sub>3</sub><br>Сульфит магния" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="SrSO<sub>3</sub><br>Сульфит стронция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Al<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub><br>Сульфит алюминия" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub><br>Сульфит хрома" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="FeSO<sub>3</sub><br>Сульфит железа (II)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub><br>Сульфит железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="MnSO<sub>3</sub><br>Сульфит марганца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="ZnSO<sub>3</sub><br>Сульфит цинка" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="Ag<sub>2</sub>SO<sub>3</sub><br>Сульфит серебра" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="HgSO<sub>3</sub><br>Сульфит ртути" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="PbSO<sub>3</sub><br>Сульфит свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SnSO<sub>3</sub><br>Сульфит олова" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="CuSO<sub>3</sub><br>Сульфит меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="HSO₃" sup="2-" st={color.hc} />
                                <Cell html="ll" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiHSO<sub>3</sub><br>Гидросульфит лития" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="KHSO<sub>3</sub><br>Гидросульфит калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaHSO<sub>3</sub><br>Гидросульфит натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>HSO<sub>3</sub><br>Гидросульфит аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ba(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ca(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Mg(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Sr(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Al(HSO<sub>3</sub>)<sub>3</sub><br>Гидросульфит алюминия" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr(HSO<sub>3</sub>)<sub>3</sub><br>Гидросульфит хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит железа (II)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HSO<sub>3</sub>)<sub>3</sub><br>Гидросульфит железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Mn(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит марганца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Zn(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит цинка" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="AgHSO<sub>3</sub><br>Гидросульфит серебра" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Hg(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит ртути" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Pb(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит свинца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Sn(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит олова" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cu(HSO<sub>3</sub>)<sub>2</sub><br>Гидросульфит меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="NO₃" sup="-" st={color.hc} />
                                <Cell html="HNO<sub>3</sub><br>Азотная кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiNO<sub>3</sub><br>Нитрат лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KNO<sub>3</sub><br>Нитрат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaNO<sub>3</sub><br>Нитрат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>NO<sub>3</sub><br>Нитрат аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ba(NO<sub>3</sub>)<sub>2</sub><br>Нитрат бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ca(NO<sub>3</sub>)<sub>2</sub><br>Нитрат кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Mg(NO<sub>3</sub>)<sub>2</sub><br>Нитрат магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Sr(NO<sub>3</sub>)<sub>2</sub><br>Нитрат стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Al(NO<sub>3</sub>)<sub>3</sub><br>Нитрат алюминия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Cr(NO<sub>3</sub>)<sub>3</sub><br>Нитрат хрома" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Fe(NO<sub>3</sub>)<sub>2</sub><br>Нитрат железа (II)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Fe(NO<sub>3</sub>)<sub>3</sub><br>Нитрат железа (III)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Mn(NO<sub>3</sub>)<sub>2</sub><br>Нитрат марганца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Zn(NO<sub>3</sub>)<sub>2</sub><br>Нитрат цинка" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="AgNO<sub>3</sub><br>Нитрат серебра<br>Ляпис" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Hg(NO<sub>3</sub>)<sub>2</sub><br>Нитрат ртути" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Pb(NO<sub>3</sub>)<sub>2</sub><br>Нитрат свинца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Sn(NO<sub>3</sub>)<sub>2</sub><br>Нитрат олова" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cu(NO<sub>3</sub>)<sub>2</sub><br>Нитрат меди" sol="Р" st={color.soluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="NO₂" sup="-" st={color.hc} />
                                <Cell html="HNO<sub>2</sub><br>Азотистая кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiNO<sub>2</sub><br>Нитрит лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KNO<sub>2</sub><br>Нитрит калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaNO<sub>2</sub><br>Нитрит натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>NO<sub>2</sub><br>Нитрит аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ba(NO<sub>2</sub>)<sub>2</sub><br>Нитрит бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ca(NO<sub>2</sub>)<sub>2</sub><br>Нитрит кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Mg(NO<sub>2</sub>)<sub>2</sub><br>Нитрит магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Sr(NO<sub>2</sub>)<sub>2</sub><br>Нитрит стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Al(NO<sub>3</sub>)<sub>3</sub><br>Нитрит алюминия" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr(NO<sub>3</sub>)<sub>3</sub><br>Нитрит хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(NO<sub>3</sub>)<sub>3</sub><br>Нитрит железа (II)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(NO<sub>3</sub>)<sub>3</sub><br>Нитрит железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Mn(NO<sub>2</sub>)<sub>2</sub><br>Нитрит марганца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Zn(NO<sub>2</sub>)<sub>2</sub><br>Нитрит цинка" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="AgNO<sub>2</sub><br>Нитрит серебра" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Hg(NO<sub>2</sub>)<sub>2</sub><br>Нитрит ртути" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Pb(NO<sub>2</sub>)<sub>2</sub><br>Нитрит свинца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Sn(NO<sub>2</sub>)<sub>2</sub><br>Нитрит олова" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cu(NO<sub>2</sub>)<sub>2</sub><br>Нитрит меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="PO₄" sup="3-" st={color.hc} />
                                <Cell html="H<sub>3</sub>PO<sub>4</sub><br>Ортофосфорная кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Li<sub>3</sub>PO<sub>4</sub><br>Фосфат лития" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="K<sub>3</sub>PO<sub>4</sub><br>Фосфат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Na<sub>3</sub>PO<sub>4</sub><br>Фосфат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(NH<sub>4</sub>)<sub>3</sub>PO<sub>4</sub><br>Нитрит аммония" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат бария" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат кальция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат магния" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Sr<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат стронция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="AlPO<sub>4</sub><br>Фосфат алюминия" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="CrPO<sub>4</sub><br>Фосфат хрома" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат железа (II)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="FePO<sub>4</sub><br>Фосфат железа (III)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Mn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат марганца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Zn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат цинка" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Ag<sub>3</sub>PO<sub>4</sub><br>Фосфат серебра" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Hg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат ртути" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Pb<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Sn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат олова" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Cu<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub><br>Фосфат меди" sol="Н" st={color.insoluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="HPO₄" sup="2-" st={color.hc} />
                                <Cell html="H<sub>3</sub>PO<sub>4</sub><br>Ортофосфорная кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Li<sub>2</sub>HPO<sub>4</sub><br>Гидрофосфат лития" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="K<sub>2</sub>HPO<sub>4</sub><br>Гидрофосфат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Na<sub>2</sub>HPO<sub>4</sub><br>Гидрофосфат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(NH<sub>4</sub>)<sub>2</sub>HPO<sub>4</sub><br>Гидрофосфат аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ba(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат бария" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Ca(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат кальция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Mg(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат магния" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="Sr(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат стронция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Al(HPO<sub>4</sub>)<sub>3</sub><br>Гидрофосфат алюминия" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr(HPO<sub>4</sub>)<sub>3</sub><br>Гидрофосфат хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат железа (II)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe(HPO<sub>4</sub>)<sub>3</sub><br>Гидрофосфат железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Mn<sub>2</sub>HPO<sub>4</sub><br>Гидрофосфат марганца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Zn<sub>2</sub>HPO<sub>4</sub><br>Гидрофосфат цинка" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Ag<sub>2</sub>HPO<sub>4</sub><br>Гидрофосфат серебра" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Hg(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат ртути" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Pb(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат свинца" sol="М" st={color.slightlySoluble}  fun={createAlert}/>
                                <Cell html="Sn(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат олова" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Cu(HPO<sub>4</sub>)<sub>2</sub><br>Гидрофосфат меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="CO₃" sup="2-" st={color.hc} />
                                <Cell html="H<sub>2</sub>CO<sub>3</sub><br>Угольная кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Li<sub>2</sub>CO<sub>3</sub><br>Карбонат лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="K<sub>2</sub>CO<sub>3</sub><br>Карбонат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Na<sub>2</sub>CO<sub>3</sub><br>Карбонат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub><br>Карбонат аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="BaCO<sub>3</sub><br>Карбонат бария" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="CaCO<sub>3</sub><br>Карбонат кальция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="MgCO<sub>3</sub><br>Карбонат магния" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SrCO<sub>3</sub><br>Карбонат стронция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Al<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub><br>Карбонат алюминия" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub><br>Карбонат хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="FeCO<sub>3</sub><br>Карбонат железа (II)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub><br>Карбонат железа (III)" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="MnCO<sub>3</sub><br>Карбонат марганца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="ZnCO<sub>3</sub><br>Карбонат цинка" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Ag<sub>2</sub>СO<sub>3</sub><br>Карбонат серебра" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="HgCO<sub>3</sub><br>Карбонат ртути" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="PbCO<sub>3</sub><br>Карбонат свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SnCO<sub>3</sub><br>Карбонат олова" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="CuCO<sub>3</sub><br>Карбонат меди" sol="Н" st={color.insoluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="HCO₃" sup="-" st={color.hc} />
                                <Cell html="ll" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="LiHCO<sub>3</sub><br>Гидрокарбонат лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="KHCO<sub>3</sub><br>Гидрокарбонат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NaHCO<sub>3</sub><br>Гидрокарбонат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="NH<sub>4</sub>HCO<sub>3</sub><br>Гидрокарбонат аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ba(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Ca(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Mg(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Sr(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Al(HCO<sub>3</sub>)<sub>3</sub><br>Гидрокарбонат алюминия" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Fe(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат железа (II)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Fe(HCO<sub>3</sub>)<sub>3</sub><br>Гидрокарбонат железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Mn(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат марганца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Zn(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат цинка" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="AgHCO<sub>3</sub><br>Гидрокарбонат серебра" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Hg(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат ртути" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Pb(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат свинца" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Sn(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат олова" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cu(HCO<sub>3</sub>)<sub>2</sub><br>Гидрокарбонат меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="CH₃COO" sup="-" st={color.hc} />
                                <Cell html="CH<sub>3</sub>COOH<br>Этановая кислота<br>Уксусная кислота" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CH<sub>3</sub>COOLi<br>Ацетат лития" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CH<sub>3</sub>COOK<br>Ацетат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CH<sub>3</sub>COONa<br>Ацетат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CH<sub>3</sub>COONH<sub>4</sub><br>Ацетат аммония" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Ba<br>Ацетат бария" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Ca<br>Ацетат кальция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Mg<br>Ацетат магния" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Sr<br>Ацетат стронция" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>3</sub>Al<br>Ацетат алюминия" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>3</sub>Cr<br>Ацетат хрома" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Fe<br>Ацетат железа (II)" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>3</sub>Fe<br>Ацетат железа (III)" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Mn<br>Ацетат марганца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Zn<br>Ацетат цинка" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="CH<sub>3</sub>COOAg<br>Ацетат серебра" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Hg<br>Ацетат ртути" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Pb<br>Ацетат свинца" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Sn<br>Ацетат олова" sol="-" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="(CH<sub>3</sub>COO)<sub>2</sub>Cu<br>Ацетат меди" sol="Р" st={color.soluble}  fun={createAlert}/>
                            </tr>
                            <tr>
                                <FixedCell el="SiO₃" sup="2-" st={color.hc} />
                                <Cell html="H<sub>2</sub>SiO<sub>3</sub><br>Кремниевая кислота" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Li<sub>2</sub>SiO<sub>3</sub><br>Силикат лития" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="K<sub>2</sub>SiO<sub>3</sub><br>Силикат калия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="Na<sub>2</sub>SiO<sub>3</sub><br>Силикат натрия" sol="Р" st={color.soluble}  fun={createAlert}/>
                                <Cell html="(NH<sub>4</sub>)<sub>2</sub>SiO<sub>3</sub><br>Силикат аммония" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="(NH<sub>4</sub>)<sub>2</sub>SiO<sub>3</sub><br>Силикат аммония" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="CaSiO<sub>3</sub><br>Силикат кальция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="MgSiO<sub>3</sub><br>Силикат магния" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SrSiO<sub>3</sub><br>Силикат стронция" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Al<sub>2</sub>(SiO<sub>3</sub>)<sub>3</sub><br>Силикат алюминия" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="Cr<sub>2</sub>(SiO<sub>3</sub>)<sub>3</sub><br>Силикат хрома" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="FeSiO<sub>3</sub><br>Силикат железа (II)" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Fe<sub>2</sub>(SiO<sub>3</sub>)<sub>3</sub><br>Силикат железа (III)" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="MnSiO<sub>3</sub><br>Силикат марганца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="ZnSiO<sub>3</sub><br>Силикат цинка" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="Ag<sub>2</sub>SiO<sub>3</sub><br>Силикат серебра" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="HgSiO<sub>3</sub><br>Силикат ртути" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="PbSiO<sub>3</sub><br>Силикат свинца" sol="Н" st={color.insoluble}  fun={createAlert}/>
                                <Cell html="SnSiO<sub>3</sub><br>Силикат олова" sol="?" st={color.decomposes}   fun={createAlert}/>
                                <Cell html="CuSiO<sub>3</sub><br>Силикат меди" sol="?" st={color.decomposes}   fun={createAlert}/>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
        </>
    )
}
