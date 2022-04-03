import { useState } from "react";
import { ChemicalOrganicFormula } from "../classes";
import uploadAndDownload from "./uploadAndDownload";


interface Props{
    isDownload: boolean;
    toggleDownload: () => void;
    formulaList: ChemicalOrganicFormula[];
}

const downloadSetting = {
    name: "",
    type: "svg",
    width: 100,
    height: 100,
    topSVG: "",
    rawSVG: "",
    viewBoxWidth: 100,
    viewBoxHeight: 100,
}

function Download({isDownload, toggleDownload, formulaList}: Props) {
    const preview = getPreview(formulaList);

    function getPreview(formulaList: ChemicalOrganicFormula[]) {
        if(!formulaList.length) return "";

        const points: number[][] = [];
        const coords = getMinMaxCoords(formulaList);
        const width = coords[2]-coords[0];
        const height = coords[3]-coords[1];
        const rawSVG = getMainSVG(formulaList);
        const topSVG = `<svg class="CA_SVG" points="${points.join(" ")}" \
                       version="1.1" xmlns="http://www.w3.org/2000/svg" \
                       xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" \
                       stroke-width="2" stroke="#000" x="0" y="0" \
                       viewBox="0 0 ${width} ${height}" `;
        const previewSVG = topSVG + `width="${width}" height="${height}">`+rawSVG;
        downloadSetting.rawSVG = rawSVG;
        downloadSetting.topSVG = topSVG;
        downloadSetting.viewBoxHeight = height;
        downloadSetting.viewBoxWidth = width;
        downloadSetting.width = width;
        downloadSetting.height = height;
        return previewSVG;


        function getMinMaxCoords(formulaList: ChemicalOrganicFormula[]) {
            //minX, minY, maxX, maxY;
            const coords = [100000, 100000, -1000000, -1000000];
            formulaList.forEach(item => {
                const position = item.getPosition();
                const size = item.getSize();


                if(coords[0] > position.x) coords[0] = position.x;
                if(coords[1] > position.y) coords[1] = position.y;
                if(coords[2] < position.x + size.width) coords[2] = position.x+ size.width;
                if(coords[3] < position.y + size.height) coords[3] = position.y + size.height;
            })

            return coords;
        }


        function getMainSVG(formulaList: ChemicalOrganicFormula[]) {
            const uniqId = (new Date()).getTime().toString();
            const svg = getSVG(formulaList);
            return `<mask id="сlip${uniqId}"><rect x="0" y="0" width="100%" height="100%" fill="#fff" />\
                ${svg.mask}</mask><svg>${svg.text}</svg>${svg.custom}<svg mask="url(#сlip${uniqId})">${svg.svg}</svg></svg>`;``;

            
            function getSVG(formulaList: ChemicalOrganicFormula[]) {
                let custom = "";
                let mask = "";
                let svg = "";
                let text = "";
                formulaList.forEach(item => {
                    const x = +(item.getPosition().x - coords[0]).toFixed(5);
                    const y = +(item.getPosition().y - coords[1]).toFixed(5);
                    const size = item.getSize();
                    const height = size.height;
                    const width = size.width;

                    const rotateSVG = `<svg class="CA_SVG" transform="rotate(${item.angle} ${x+width/2} ${y+height/2})" \
                        x="${x}" y="${y}" viewBox="0 0 ${width} ${height}" width="${width}" \
                        height="${height}" stroke="${item.color}">${item.getRawTemplate()}</svg>`;

                    switch(item.type) {
                        case "text":
                            mask += `<rect x="${x}" y="${y}" width="${width}" height="22" \
                                fill="#000" stroke-width="0" rx="5" ry="5"></rect>`;
                            text += rotateSVG;
                            break;
                        case "custom":
                            custom += rotateSVG;
                            break;
                        default:
                            svg += rotateSVG;
                    }


                    item.getPoints().forEach(itemPoint => {
                        const condition = points.every(points => 
                            itemPoint[0]+x !== points[0] || itemPoint[1]+y !== points[1]);
                        
                        if(condition) points.push([itemPoint[0]+x, itemPoint[1]+y]);
                    });
                });
                return {custom, mask, svg, text};
            }
        }
    }

    const download = () => uploadAndDownload.download.run(downloadSetting);
    return(
        <div className={"download " + (isDownload ? "download_open" : "")} onClick={toggleDownload}>
            <div className="download__inner" onClick={(e) => e.stopPropagation()}>
                <div className="download__svg-container">
                    <svg className="download__svg" viewBox={`0 0 ${downloadSetting.viewBoxWidth} ${downloadSetting.viewBoxHeight}`} dangerouslySetInnerHTML={{__html: preview}}/>
                </div>
                <div className="download__bottom">
                    <div className="download__setting">
                        <div className="download__buttons">
                            <button
                                onClick={() => downloadSetting.type = "svg"}
                                className={
                                    "download__svg-button " +
                                    (downloadSetting.type === "svg" ? "download__svg-button_active" : "")
                                }
                            >SVG</button>
                            <button
                                onClick={() => downloadSetting.type = "png"}
                                className={
                                    "download__png-button " +
                                    (downloadSetting.type === "png" ? "download__png-button_active" : "")
                                }
                            >PNG</button>
                        </div>
                        
                        <input placeholder="имя" value={downloadSetting.name} onChange={(e) => downloadSetting.name = e.target.value} />
                        <div className={
                            "download__input-container " +
                            (downloadSetting.type !== "png" ? "download__input-container_disable" : "")
                        }>
                            <input placeholder="ширина(px)" value={downloadSetting.width} onChange={(e) => downloadSetting.width = +e.target.value} />
                            <input placeholder="высота(px)" value={downloadSetting.height} onChange={(e) => downloadSetting.height = +e.target.value} />
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