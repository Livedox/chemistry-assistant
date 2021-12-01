import Layout from "../components/Header/Layout";
import Canv from "../components/Canvas/Canvas";
import Head from "next/head";

export default function Canvas() {
    return(
        <>
        <Head>
            <title>Редактор химических формул</title>
            <meta
                name="description"
                content="Редактор химических формул."
            />
            <meta
                name="keywords"
                content="Редактор, Химический редактор, Редактор химических формул, Редактор органических формул, Chemistry Assistant"
            />
        </Head>
        <Layout>
            <Canv />
        </Layout>
        </>
    )
}