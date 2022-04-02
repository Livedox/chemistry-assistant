import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/Header/Layout";
import { server } from "../../config";
import { IInfo } from "../../models/Info";

interface Props {
    data: IInfo;
}

const Info:React.FC<Props> = ({ data }) => {
    const [active, setActive] = useState(false);
    return(
        <>
        <Head>
            <title>{data.title}</title>
        </Head>
        <Layout>
            <div className="info">               
                <div className="info__inner">
                    <div className="info__main" dangerouslySetInnerHTML={{__html: data.data}}>
                        
                    </div>
                    <nav className="info__container">
                        <div className="info__link-container-active" onClick={() => setActive(!active)}>
                            <div className={"info__triangle " + (active ? "info__triangle_active" : "")}>▸</div><span> {active ? "Скрыть список статей" : "Показать список статей"}</span>
                        </div>
                        <div className={"info__link-container " + (active ? "info__link-container_active" : "")}>
                            <Link href="./Fe"><a className="info__link">Железо</a></Link>
                            <Link href="./Zn"><a className="info__link">Цинк</a></Link>
                            <Link href="./H"><a className="info__link">Водород</a></Link>
                            <Link href="./O"><a className="info__link">Кислород</a></Link>
                            <Link href="./alkaline"><a className="info__link">Щелочные металлы</a></Link>
                            <Link href="./alkaline-earth"><a className="info__link">Be, Mg и щелочноземельные металлы</a></Link>
                            <Link href="./chalcogene"><a className="info__link">Халькогены</a></Link>
                            <Link href="./halogen"><a className="info__link">Галогены</a></Link>
                        </div>    
                    </nav>
                </div>
            </div>
        </Layout>
        </>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(server+"/api/info", {
        method: "POST",
        body: JSON.stringify({id: (context.params as any).id}),
    });

    // returns the default 404 page
    if(!res.ok) return { props: {
        data: {
            title: "В разработке",
            path: "in-dev",
            data: "В разработке"
        } 
    }}

    const data: IInfo = await res.json();
    return {
        props: { data }
    }
    
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export default Info;