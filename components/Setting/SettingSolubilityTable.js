import SettingBackground from "./SettingBackground ";
import SettingTextColor from "./SettingTextColor";
import Picker from "../Picker/Picker";
import getId from "../getId";
import { useState } from "react";

export default function Setting({color, setColor, isSettingActive}) {
	const els = ["soluble", "insoluble", "slightlySoluble", "decomposes", "hc"];

	const [props, setProps] = useState({
		el: "soluble",
		type: "background",
		i: 0
	});
	function click(updateColor) {
        let newColor = color;
        if(!(props.el in newColor)) newColor[props.el] = {};
        let obj = {};
        obj[props.type] = updateColor;
        newColor[props.el] = {...newColor[props.el], ...obj};
        localStorage.setItem(`solubilityTableColor`, JSON.stringify(newColor));
        
        setColor({...newColor});
	}
    return(
        <div className={isSettingActive ? "settings active" : "settings"}>			
			<div className="color-selection">
				<Picker wh={180} callback={click} />
				<div className="colors">
					<ol>
                        {els.map((el, i) => (
                            <SettingBackground
                                color={color[el] || {}}
                                active={props.type === "background" && props.i === i}
                                setProps={() => { setProps({el, type: "background", i})}}
                                cls={el}
                                key={getId()}
                            />
                        ))}
					</ol>
					<ol>
                        {els.map((el, i) => (
                            <SettingTextColor
                                color={color[el] || {}}
                                active={props.type === "color" && props.i === i}
                                setProps={() => { setProps({el, type: "color", i})}}
                                key={getId()}
                            />
                        ))}
					</ol>
				</div>
				
			</div>
			<div className="colors-by-default" onClick={() => {localStorage.removeItem("solubilityTableColor"); setColor({});}}>Восстановить по умолчанию</div>			
		</div>     
    );
}