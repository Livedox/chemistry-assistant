import { useContext } from "react";
import Layout from "../components/HeaderTest/Layout";
import PeriodicTable from "../components/PeriodicTable/PeriodicTable";
import ContextSetting from "../components/Context/ContextSetting";
import {ISetting} from "../components/Context/ContextSetting";
import SettingPeriodicTable from "../components/Setting/SettingPeriodicTable";
import {  useEffect, useState } from "react";
import { ISettingPeriodicTable } from "../components/interface";
import Context from "../components/Context/ContextSettingPeriodicTabe";


export default function Table() {
    const contextSetting:ISetting = useContext(ContextSetting);
    contextSetting.visible = true;
    const [settingState, setSettingState] = useState<ISettingPeriodicTable>({color:{}});
    useEffect(() => {
        const setting = JSON.parse(localStorage.getItem("periodicTable") ?? "{}");
        setSettingState(setting);
    }, []);
    return (
        <Layout>    
            <Context.Provider value={settingState}>
                <SettingPeriodicTable callback={setSettingState} />
                <PeriodicTable/>
            </Context.Provider>
        </Layout>
    )
}