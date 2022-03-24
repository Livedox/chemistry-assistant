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
        <Layout>
            <TableSolubility />
        </Layout>
        </>
    )
}