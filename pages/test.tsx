import { useContext, useMemo } from "react";
import Layout from "../components/HeaderTest/Layout";
import PeriodicTable from "../components/PeriodicTable/PeriodicTable";
import ContextSetting from "../components/Context/ContextSetting";
import SettingPeriodicTable from "../components/Setting/SettingPeriodicTable";
import {  useEffect, useState } from "react";
import { ISettingPeriodicTable } from "../components/interface";
import Context from "../components/Context/ContextSettingPeriodicTabe";
import { ISetting } from "../components/Context/ContextSetting";

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
        <ContextSetting.Provider value={value}>
            <Layout>    
                <Context.Provider value={settingState}>
                    <SettingPeriodicTable callback={setSettingState} />
                    <PeriodicTable/>
                </Context.Provider>
            </Layout>
        </ContextSetting.Provider>
    )
}