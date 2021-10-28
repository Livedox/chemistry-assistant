import { createContext, Dispatch, SetStateAction } from "react";
import { IChemicalElement } from "../interface";

interface ISettingMemo {
    element: IChemicalElement;
    setElement?: Dispatch<SetStateAction<IChemicalElement>>;
}

const ContextElement = createContext<ISettingMemo>({element:{
    symbol: "Po",
    number: "84",
    ar: "208,98",
    oxidation: ["4"],
    nameRu: "Полоний",
    nameLa: "Polonium",
    radioactive: true,
    class: "p",
}});

export default ContextElement;