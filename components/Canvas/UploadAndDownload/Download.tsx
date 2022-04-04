import React, { useState } from "react";
import { ChemicalOrganicFormula } from "../classes";
import uploadAndDownload, { Setting } from "./uploadAndDownload";


interface Props{
    isDownload: boolean;
    toggleDownload: () => void;
    preview: string;
    setting: Setting;
}

function Download({isDownload, toggleDownload, preview, setting}: Props) {
    const [type, setType] = useState<"svg"|"png">("svg");
    const [name, setName] = useState("");
    const [width, setWidth] = useState(setting.width);
    const [height, setHeight] = useState(setting.height);
    const setSVG = () => setType("svg");
    const setPNG = () => setType("png");
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const changeWidth = (e: React.ChangeEvent<HTMLInputElement>) => setWidth(+e.target.value||setting.width);
    const changeHeight = (e: React.ChangeEvent<HTMLInputElement>) => setHeight(+e.target.value||setting.height);
    const download = () => uploadAndDownload.download.run({...setting, type, name, width, height});
    return(
        <div className={"download " + (isDownload ? "download_open" : "")} onClick={toggleDownload}>
            <div className="download__inner" onClick={(e) => e.stopPropagation()}>
                <div className="download__svg-container">
                    <svg className="download__svg" viewBox={`0 0 ${setting.viewBoxWidth} ${setting.viewBoxHeight}`} dangerouslySetInnerHTML={{__html: preview}}/>
                </div>
                <div className="download__bottom">
                    <div className="download__setting">
                        <div className="download__buttons">
                            <button
                              onClick={setSVG}
                              className={"download__svg-button " +(type === "svg" ? "download__svg-button_active" : "")}>
                                SVG
                            </button>
                            <button
                              onClick={setPNG}
                              className={"download__png-button " + (type === "png" ? "download__png-button_active" : "")}>
                                PNG
                            </button>
                        </div>
                        
                        <label>Имя файла: <input placeholder="Имя" value={name} onChange={changeName} /></label>
                        <div className={
                            "download__input-container " +
                            (type !== "png" ? "download__input-container_disable" : "")}>
                            <label>Ширина: <input placeholder="Ширина(px)" value={width} onChange={changeWidth} /></label>
                            <label>Высота: <input placeholder="Высота(px)" value={height} onChange={changeHeight} /></label>
                        </div>
                    </div>
                    <div className="download__button">
                        <button className="download__cancel-button" onClick={toggleDownload}>Отмена</button>
                        <button className="download__download-button" onClick={download}>Скачать</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;