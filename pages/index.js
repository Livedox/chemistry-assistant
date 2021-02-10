import { useEffect, useState } from "react";
import Element from "../components/PeriodicTable/Element";
import Legend from "../components/PeriodicTable/Legend";
import els from "../components/PeriodicTable/elements";
import Period from "../components/PeriodicTable/Period";
import Group from "../components/PeriodicTable/Group";
import Layout from "../components/Header/LayoutWithSetting";
import Setting from "../components/Setting/SettingPeriodicTable";
import Alert from "../components/Alert/Alert";
import GroupPopUp from "../components/PeriodicTable/GroupPopUp";
import popUpText from "../components/PeriodicTable/popUpText";
import PopUp from "../components/PopUp/PopUp";
import Head from 'next/head';

let legendData = {
    s: "Po",
    n: "84",
    r: true,
    Ar: "208,98",
    oxs: ["+4"],
    ru: "Полоний",
    la: "Polonium",
    cls: "p",
};

export default function PeriodicTable() {
    const [color, setColor] = useState({});
    const [inf, setInf] = useState(legendData);
    const [legendIsActive, setLegendActive] = useState(false);
    const [isSettingActive, setSettingAcitve] = useState(false);
    const toggleSetting = () => setSettingAcitve(!isSettingActive);
    const [alertClass, SetAlertClass] = useState("left");
    const [htmlAlert, setHtmlAlert] = useState("");
    const [coords, setCoords] = useState({});
    const [isPopUpActive, setPopUpActive] = useState(false);
    const [htmlPopUp, setHtmlPopUp] = useState("");

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

    function togglePopUp(html) {
        setPopUpActive(!isPopUpActive);
        if(html) setHtmlPopUp(html);
    }

    function changeLegend(element) {
        setInf(element);
        setLegendActive(true);
        legendData = element;
    }

    const funs = {
        setLegendActive,
        createAlert: createAlert
    }
    
    useEffect(() => {
        const color = JSON.parse(localStorage.getItem("periodicTableColor"));
        if (color) setColor(color);
    }, []);
    return (
        <>
        <Head>
            <title>Таблица Менделеева</title>
            <meta
                name="description"
                content="Интерактивная периодическая таблица химических элементов. Создана в помощь при решении заданий по химии для учеников и студентов."
            />
            <meta
                name="keywords"
                content="Periodic table, Table of chemistry elements, Table of Mendeleev, Chemistry assistant, Ипсхэ, Интерактивная таблица Менделеева, Интерактивная периодическая таблица химических элементов, Химический ассистент, Химический помощник, Таблица элементов"
            />
        </Head>
        <Layout toggleSetting={toggleSetting} />
        <div id="main">
            <div className="main-periodic-table">
                <Alert alertClass={alertClass} html={htmlAlert} coords={coords} />
                <PopUp html={htmlPopUp} isPopUpActive={isPopUpActive} togglePopUp={togglePopUp} />           
                <Legend color={color} inf={inf} legendIsActive={legendIsActive} funs={funs} />
                <Setting color={color} setColor={setColor} isSettingActive={isSettingActive} />
                <div className="periodic-table wide-table">
                    <div style={{ position: "relative"}}>
                        <div className="table-flex space-between" style={{marginLeft: "3px", paddingLeft: "0.75vw", boxSizing: "border-box"}}>
                            <GroupPopUp num="1" fun={createAlert} toggle={togglePopUp} html={popUpText.alkaline} />
                            <Group num="18" fun={createAlert} />
                        </div>
                        <div className="table-flex">
                            <Period num="1" fun={createAlert} />
                            <div className="table-flex space-between">
                                <div className="flex">
                                    <Element el={els[0]} st={color.s} changeLegend={changeLegend} />
                                    <GroupPopUp num="2" fun={createAlert} toggle={togglePopUp} html={popUpText.alkalineEarth} />
                                </div>
                                
                                <div className="flex">
                                    <Group num="13" fun={createAlert} />
                                    <Group num="14" fun={createAlert} />
                                    <Group num="15" fun={createAlert} />
                                    <GroupPopUp num="16" fun={createAlert} toggle={togglePopUp} html={popUpText.chalcogene} />
                                    <GroupPopUp num="17" fun={createAlert} toggle={togglePopUp} html={popUpText.halogen} />
                                    <Element el={els[1]} st={color.s} changeLegend={changeLegend} />
                                </div>
                            </div>
                        </div>
                        <div className="table-flex">
                            <Period num="2" fun={createAlert} />
                            <div className="table-flex space-between">
                                <div className="flex">
                                    <Element el={els[2]} st={color.s} changeLegend={changeLegend} />
                                    <Element el={els[3]} st={color.s} changeLegend={changeLegend} />
                                </div>
                                <div className="flex">
                                    <Element el={els[4]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[5]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[6]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[7]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[8]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[9]} st={color.p} changeLegend={changeLegend} />
                                </div>
                            </div>
                        </div>
                        <div className="table-flex">
                            <Period num="3" fun={createAlert} />
                            <div className="table-flex">
                                <Element el={els[10]} st={color.s} changeLegend={changeLegend} />
                                <Element el={els[11]} st={color.s} changeLegend={changeLegend} />
                                <Group num="3" fun={createAlert} />
                                <Group num="4" fun={createAlert} />
                                <Group num="5" fun={createAlert} />
                                <Group num="6" fun={createAlert} />
                                <Group num="7" fun={createAlert} />
                                <Group num="8" fun={createAlert} />
                                <Group num="9" fun={createAlert} />
                                <Group num="10" fun={createAlert} />
                                <Group num="11" fun={createAlert} />
                                <Group num="12" fun={createAlert} />
                                <div className="when-group-hidden"></div>
                                <Element el={els[12]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[13]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[14]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[15]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[16]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[17]} st={color.p} changeLegend={changeLegend} />
                            </div>
                        </div>
                        <div className="table-flex">
                            <Period num="4" fun={createAlert} />
                            <div className="table-flex">
                                <div className="flex">
                                    <Element el={els[18]} st={color.s} changeLegend={changeLegend} />
                                    <Element el={els[19]} st={color.s} changeLegend={changeLegend} />
                                    <Element el={els[20]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[21]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[22]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[23]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[24]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[25]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[26]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[27]} st={color.d} changeLegend={changeLegend} />
                                </div>
                                <div className="flex">
                                    <Element el={els[28]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[29]} st={color.d} changeLegend={changeLegend} />
                                    <Element el={els[30]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[31]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[32]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[33]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[34]} st={color.p} changeLegend={changeLegend} />
                                    <Element el={els[35]} st={color.p} changeLegend={changeLegend} />
                                </div>
                            </div>
                        </div>
                        <div className="table-flex">
                            <Period num="5" fun={createAlert} />
                            <div className="table-flex">
                                <Element el={els[36]} st={color.s} changeLegend={changeLegend} />
                                <Element el={els[37]} st={color.s} changeLegend={changeLegend} />
                                <Element el={els[38]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[39]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[40]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[41]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[42]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[43]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[44]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[45]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[46]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[47]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[48]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[49]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[50]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[51]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[52]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[53]} st={color.p} changeLegend={changeLegend} />
                            </div>
                        </div>
                        <div className="table-flex">
                            <Period num="6" fun={createAlert} />
                            <div className="table-flex">
                                <Element el={els[54]} st={color.s} changeLegend={changeLegend} />
                                <Element el={els[55]} st={color.s} changeLegend={changeLegend} />
                                <Element el={els[56]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[71]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[72]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[73]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[74]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[75]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[76]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[77]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[78]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[79]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[80]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[81]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[82]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[83]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[84]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[85]} st={color.p} changeLegend={changeLegend} />
                            </div>
                        </div>
                        <div className="table-flex">
                            <Period num="7" fun={createAlert} />
                            <div className="table-flex">
                                <Element el={els[86]} st={color.s} changeLegend={changeLegend} />
                                <Element el={els[87]} st={color.s} changeLegend={changeLegend} />
                                <Element el={els[88]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[103]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[104]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[105]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[106]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[107]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[108]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[109]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[110]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[111]} st={color.d} changeLegend={changeLegend} />
                                <Element el={els[112]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[113]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[114]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[115]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[116]} st={color.p} changeLegend={changeLegend} />
                                <Element el={els[117]} st={color.p} changeLegend={changeLegend} />
                            </div>
                        </div>
                        <div style={{paddingLeft: "0.7vw", marginLeft: "3px"}}>
                            <div className="f-top-content">
                                <Element el={els[57]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[58]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[59]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[60]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[61]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[62]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[63]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[64]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[65]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[66]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[67]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[68]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[69]} st={color.fTop} changeLegend={changeLegend} />
                                <Element el={els[70]} st={color.fTop} changeLegend={changeLegend} />
                            </div>
                        </div>
                        <div style={{paddingLeft: "0.7vw", marginLeft: "3px"}}>
                            <div className="f-bottom-content">
                                <Element el={els[89]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[90]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[91]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[92]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[93]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[94]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[95]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[96]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[97]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[98]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[99]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[100]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[101]} st={color.fBottom} changeLegend={changeLegend} />
                                <Element el={els[102]} st={color.fBottom} changeLegend={changeLegend} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}