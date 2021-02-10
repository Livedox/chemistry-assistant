import SettingOpen from "./SettingOpen";
import Layout from './Layout';

export default function LayoutWithSetting({ toggleSetting }) {
    return(
        <Layout>
            <SettingOpen toggleSetting={toggleSetting} />
        </Layout> 
    );
}