import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/HeaderTest/Layout";
import { server } from "../../config";
import { IInfo } from "../../models/Info";

interface Props {
    data: IInfo;
}

const Info:React.FC<Props> = ({ data }) => {
    return(
        <>
        <Head>
            <title>{data.title}</title>
        </Head>
        <Layout>
            <div className="main">
                <div className="info">
                    <div className="info__inner">
                        <nav className="info__link-container">
                            <Link href="./Fe"><a className="info__link">Железо</a></Link>
                            <Link href="./Zn"><a className="info__link">Цинк</a></Link>
                            <Link href="./H"><a className="info__link">Водород</a></Link>
                            <Link href="./O"><a className="info__link">Кислород</a></Link>
                            <Link href="./alkaline"><a className="info__link">Щелочные металлы</a></Link>
                            <Link href="./alkaline-earth"><a className="info__link">Be, Mg и щелочноземельные металлы</a></Link>
                            <Link href="./chalcogene"><a className="info__link">Халькогены</a></Link>
                            <Link href="./halogen"><a className="info__link">Галогены</a></Link>
                        </nav>
                        <div className="info__main" dangerouslySetInnerHTML={{__html: data.data}}>
                            
                        </div>
                    </div>
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
    if(!res.ok) return { notFound: true }

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