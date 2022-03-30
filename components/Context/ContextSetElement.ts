import { createContext, Dispatch, SetStateAction } from "react";
import { IChemicalElement } from "../interface";

const ContextSetElement = createContext<Dispatch<SetStateAction<IChemicalElement>>>
    ((value: SetStateAction<IChemicalElement>) => {});

export default ContextSetElement;