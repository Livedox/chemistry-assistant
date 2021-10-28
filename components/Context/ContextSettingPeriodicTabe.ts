import React from "react";
import { ISettingPeriodicTable } from "../interface";

const setting: ISettingPeriodicTable = {}

const ContextSetting = React.createContext(setting);

export default ContextSetting;