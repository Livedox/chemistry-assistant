import React from "react";
export interface ISetting {
    visible: boolean;
    active: boolean;
};

const setting: ISetting = {
    visible: false,
    active: false,
};

const ContextSetting = React.createContext(setting);

export default ContextSetting;