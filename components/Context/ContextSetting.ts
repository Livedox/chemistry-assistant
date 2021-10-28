import React, { Dispatch, SetStateAction } from "react";
export interface ISetting {
    visible: boolean;
    active: boolean;
};

interface ISettingMemo {
    settingActive: ISetting;
    setSettingActiveState?: Dispatch<SetStateAction<ISetting>>;
}

const ContextSetting = React.createContext<ISettingMemo>({settingActive:{visible:false, active:false}});

export default ContextSetting;