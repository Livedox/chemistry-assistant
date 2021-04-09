import React from "react";
import { IColorOptions } from "../interface";

const setting: IColorOptions = {}

const ContextSetting = React.createContext(setting);

export default ContextSetting;