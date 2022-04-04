import React from "react";
import useToggle from "../../../hooks/useToggle";
import ColorPicker from "../../Picker/ColorPicker";

interface Props{
    isMenu: boolean;
    color: string;
    name: string;
    type: string;
    changeName: (e: React.ChangeEvent) => void;
    changeColor: (color: string) => void;
}

function Menu({isMenu, color, name, type, changeColor, changeName}: Props) {
    const [isPicker, togglePicker] = useToggle();

    return(
        <div className={"canvas__list-item-menu " + (isMenu ? "canvas__list-item-menu_active":"")}>
            <div className="canvas__list-item-menu-name">
                <input 
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={changeName} />
            </div>
            {type !== "custom" ? <>
                <button className="canvas__list-item-menu-color" onClick={togglePicker}>
                    <div className="canvas__list-item-menu-color-view" style={{background: color}} />
                    {color}
                </button>
                <div className={
                "canvas__list-item-menu-color-picker " +
                (isPicker&&isMenu ? "canvas__list-item-menu-color-picker_active" : "")}>
                    <ColorPicker callback={changeColor} />
                </div>
            </>:""}
            
        </div>
    );
}

export default Menu;