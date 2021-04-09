import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/HeaderTest/Header";

interface Props {
    pageData?: any;
}

const Info:NextPage<Props> = ({ pageData }) => {
    return(
        <>
        <Head>
            <title>{pageData.title}</title>
        </Head>
        <Header></Header>
        <div className="main">
            <div className="info">
                <div className="info__inner">
                    <nav className="info__link-container">
                        <Link href="#"><a className="info__link">Основы химии</a></Link>
                        <Link href="#"><a className="info__link">Водород</a></Link>
                        <Link href="#"><a className="info__link">Цинк</a></Link>
                    </nav>
                    <div className="info__main" dangerouslySetInnerHTML={{__html: pageData.data}}>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


Info.getInitialProps = async ({ query }: NextPageContext) => {
    const res = await fetch("http://localhost:3000/api/info", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({id: query.id})
    });
    const json = await res.json()
    const data = json;
    return { pageData: data.data ?? {} }
}

export default Info;