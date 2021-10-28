import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/HeaderTest/Header";
import Layout from "../../components/HeaderTest/Layout";
import { server } from "../../config";

interface Props {
    pageData?: any;
}

const Info:NextPage<Props> = ({ pageData }) => {
    return(
        <>
        <Head>
            <title>{pageData.title}</title>
        </Head>
        <Layout>
            <div className="main">
                <div className="info">
                    <div className="info__inner">
                        <nav className="info__link-container">
                            <Link href="#"><a className="info__link">Основы химии</a></Link>
                            <Link href="#"><a className="info__link">Водород</a></Link>
                            <Link href="#"><a className="info__link">Цинк</a></Link>
                        </nav>
                        <div className="info__main" dangerouslySetInnerHTML={{__html: pageData.data || pageData.body}}>
                            
                        </div>
                        <h2>В разработке</h2>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}


Info.getInitialProps = async ({ query }: NextPageContext) => {
    const res = await fetch(server+"/api/info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({id: query.id})
    });
    try{
        console.log(res);
        const json = await res.json();
        console.log(json);
        const data = json;
        return { pageData: data.data ?? {} }
    } catch (e) {
        console.log(e);
    }
    return {pageData:{title:"Сейчас не доступно"}};
}

export default Info;