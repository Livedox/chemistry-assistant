import Layout from "../components/Header/Layout";
import Head from "next/head";
import TableSolubility from "../components/TableSolubility/TableSolubility";

export default function SolubilityTable() {
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
        <div style={{position: "absolute", height: "100%", width: "100%", overflow: "auto"}}>
            <div style={{position: "absolute", height: "100%", width: "100%", marginTop: "30px"}}>
                <div style={{position: "sticky", left: 0, width: "30px", height: "700px", background: "#0000ff"}}>
                    12
                </div>
            </div>
            <div style={{position: "sticky", top: 0, width: "2000px", height: "30px", background: "#ff0000"}}>12</div>
            <div style={{height: "1000px", marginTop: "30px", marginLeft: "30px"}}>33</div>
        </div>
        </>
    )
}