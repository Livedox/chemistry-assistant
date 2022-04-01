import { getNumberId } from "../getId";
import { Setting } from "./Canvas";
import { CustomOrganicFormula } from "./classes";

class Upload {
    run(file: File, callback: (organicFormula: CustomOrganicFormula) => void) {
        if(file.type === "image/svg+xml") {
            this.processSvgAndAddFormula(file, callback);
        } else {
            this.processImgAndAddFormula(file, callback);
        }
    }
    private processSvgAndAddFormula(file: File, callback: (organicFormula: CustomOrganicFormula) => void) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
            const result = reader.result as string;

            const widthMatch = result.match(/width="(\d*.\d+)"/);
            const width = widthMatch ? +widthMatch[1] : 100;

            const heightMatch = result.match(/height="(\d*.\d+)"/);
            const height = heightMatch ? +heightMatch[1] : 100;

            const pointsMatch = result.match(/points="(.*?)"/);
            const points: number[][] = [];
            if(result.includes("CA_SVG") && pointsMatch) {
                pointsMatch[1].split(" ").forEach(item => {
                    const point = item.split(",");
                    points.push([+point[0], +point[1]]);
                })
            }
            callback(new CustomOrganicFormula(result, points, {width, height}, file.name));
        }
    }
    private processImgAndAddFormula(file: File, callback: (organicFormula: CustomOrganicFormula) => void) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            const img = new Image();
            img.src = reader.result as string;
            img.onload = function () {
                const template = `<svg><image width="100%" height="100%" xlink:href="${reader.result}"></image></svg>`;
                const width = img.width < 400 ? img.width : 400;
                const height = img.height < 400 ? img.height : 400;
                
                callback(new CustomOrganicFormula(template, [], {width, height}, file.name));  
            };              
        }  
    }
}

class Download {
    run(setting: Setting) {
        try {
            const finaleSVG = setting.topSVG+`width="${setting.width}" height="${setting.height}">`+setting.rawSVG;
            if(setting.type === "svg")
                this.downloadSVG(finaleSVG, setting);
            else
                this.downloadPNG(finaleSVG, setting);
        } catch (e) {
            alert("Ошибка загрузки (Загрузка в IE не работает, обновите браузер)" + e);
        } 
    }

    private downloadSVG(svg: string, setting: Setting) {
        this.downloadFile("svg", window.URL.createObjectURL(new Blob([svg])), setting);
    }

    private downloadPNG(svg: string, setting: Setting) {
        const image = new Image();
        image.src = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(svg)));
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext("2d");
            context!.drawImage(image, 0, 0);
        
            this.downloadFile("png", canvas.toDataURL("image/png"), setting);
        }
    }

    private downloadFile(type: "svg" | "png", url: string, setting: Setting) {
        const a = document.createElement("a");
        a.download = (setting.name || "formula") + "." + type;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
}

export default {
    upload: new Upload(),
    download: new Download(),
}