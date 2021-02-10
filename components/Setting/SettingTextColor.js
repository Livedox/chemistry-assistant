export default function SettingTextColor({ color, setProps, active}) {
    return(
        <li className={"setting-text-color" + (active ? " active" : "")} style={{color: color.color}} onClick={setProps}>T</li>
    );
}