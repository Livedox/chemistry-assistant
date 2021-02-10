import { useState } from "react";
import SettingBackground from "./SettingBackground ";
import SettingTextColor from "./SettingTextColor";
import Picker from "../Picker/Picker";
import Checkbox from "./Checkbox";
import getId from "../getId";

export default function Setting({color, setColor, isSettingActive}) {
	const els = ["s", "p", "d", "fTop", "fBottom"];

	const [props, setProps] = useState({
		el: "s",
		type: "background",
		i: 0
	});

	function click(updateColor) {
        let newColor = color;
        if(!(props.el in newColor)) newColor[props.el] = {};
        let obj = {};
        obj[props.type] = updateColor;
        newColor[props.el] = {...newColor[props.el], ...obj};
        localStorage.setItem(`periodicTableColor`, JSON.stringify(newColor));
        
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
								key={getId() + "cback"}
                            />
                        ))}
					</ol>
					<ol>
						{els.map((el, i) => (
                            <SettingTextColor
                                color={color[el] || {}}
                                active={props.type === "color" && props.i === i}
								setProps={() => { setProps({el, type: "color", i})}}
								key={getId() + "ctext"}
                            />
                        ))}
					</ol>
				</div>
				
			</div>
			<div className="colors-by-default" onClick={() => {localStorage.removeItem("periodicTableColor"); setColor({});}}>Восстановить по умолчанию</div>
			<div className="settings-checkboxs" style={{display: "none"}}>
				<Checkbox name="Порядковый номер" />
				<Checkbox name="Радиация" />
				<Checkbox name="Относительная атомная масса" />
				<Checkbox name="Степени окисления" />
				<Checkbox name="Название на русском" />
				<Checkbox name="Название на латыни" />
				<Checkbox name="Длиннопериодная таблица" />
			</div>			
		</div>     
    );
}