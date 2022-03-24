import React, { useMemo } from "react";
import Layout from "../components/Header/Layout";
import PeriodicTable from "../components/PeriodicTable/PeriodicTable";
import ContextSetting from "../components/Context/ContextSetting";
import SettingPeriodicTable from "../components/Setting/SettingPeriodicTable";
import {  useEffect, useState } from "react";
import { ISettingPeriodicTable } from "../components/interface";
import Context from "../components/Context/ContextSettingPeriodicTabe";
import { ISetting } from "../components/Context/ContextSetting";
import Head from "next/head";

export default function Table() {
    const setting: ISetting = {
        visible: true,
        active: false,
    };
    
    const [settingActive, setSettingActiveState] = useState(setting);
    const value = useMemo(
        () => ({ settingActive, setSettingActiveState }), 
        [settingActive]
    );
    
    const [settingState, setSettingState] = useState<ISettingPeriodicTable>({color:{}});
    useEffect(() => {
        const setting = JSON.parse(localStorage.getItem("periodicTable") ?? "{}");
        setSettingState(setting);
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
        <ContextSetting.Provider value={value}>
            <Layout>    
                <Context.Provider value={settingState}>
                    <SettingPeriodicTable callback={setSettingState} />
                    <PeriodicTable/>
                </Context.Provider>
            </Layout>
        </ContextSetting.Provider>
        </>
    )
}