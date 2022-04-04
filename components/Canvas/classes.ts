import { getNumberId } from "../getId";

export interface ISize {
    width:number;
    height: number;
}

export interface ICoords {
    x: number,
    y: number
}

const BASE_SVG_TEMPLATE = "<path d='M74.2,8 98.5,50 74.2,92 25.8,92 1.5,50 25.8,8z'/>";
const BASE_POINTS = [[74.2,8], [98.5,50], [74.2,92], [25.8,92], [1.5,50], [25.8,8]];
const BASE_SIZE:ISize = {
    width: 100,
    height: 100,
}

export class ChemicalOrganicFormula {
    private coords: ICoords = {
        x: 20,
        y: 0
    }
    private _angle = 0;
    private _scale = 1;
    readonly id = getNumberId();
    color = "#000";
    size = BASE_SIZE;
    viewBox = BASE_SIZE;
    active = false;
    name = "";
    constructor(
      readonly type: string = "hexagon",
      readonly template: string = BASE_SVG_TEMPLATE,
      readonly points: number[][] = BASE_POINTS,
      size: ISize = BASE_SIZE,  
      name: string = ""
    ) {
        this.type = type;
        this.template = template;
        this.size = size;
        this.viewBox = size;
        this.name = name;
    }

    get scale() {
        return this._scale;
    }

    set scale(scale: number) {
        this._scale = scale;
        if(this._scale > 4) this._scale = 4;
        if(this._scale < 0.2) this._scale = 0.2;
    }

    get angle() {
        return this._angle;
    }

    set angle(deg: number) {
        this._angle = deg;
        if(this._angle >= 360) this._angle = 0;
        if(this._angle <= -360) this._angle = 0;
    }

    setPosition(x:number, y:number) {
        this.coords.x = x;
        this.coords.y = y;
    }

    getPosition() {
        return this.coords;
    }

    getSize() {
        return {width: this.size.width * this.scale, height: this.size.height * this.scale}
    }

    getViewBoxSize() {
        return this.viewBox;
    }

    getPoints() {
        const rad = this._angle * Math.PI/180;
        return this.points.map(item => {
            const w = this.viewBox.width/2;
            const h = this.viewBox.height/2;
            const x = (item[0] - w) * Math.cos(rad) - (item[1] - h) * Math.sin(rad) + w;
            const y = (item[1] - h) * Math.cos(rad) + (item[0] - w) * Math.sin(rad) + h;
            return [x*this._scale, y*this._scale];
        })
    }

    getTemplate() {
        return this.getRawTemplate();
    }

    getRawTemplate() {
        return this.template.replace("REPLACE_COLOR", this.color);;
    }

    getCoordinatesToNearestPointOrNull(coords: ICoords, points: number[][]) {
        let coordinatesToNearestPoint = null;
        const pointsRot = this.getPoints();
        main: for(let i = 0; i < pointsRot.length; i++) {
            for(let j = 0; j < points.length; j++) {
                const coordinatesToPoint = {
                    x: coords.x + points[j][0] - this.coords.x - pointsRot[i][0],
                    y: coords.y + points[j][1] - this.coords.y - pointsRot[i][1]
                }
                
                if(Math.abs(coordinatesToPoint.x) < 15 && Math.abs(coordinatesToPoint.y) < 15) {
                    coordinatesToNearestPoint = coordinatesToPoint;
                    break main;
                }
            }
        }
        return coordinatesToNearestPoint;
    }

    toNearestPoint(coords: ICoords) {
        this.coords.x += coords.x;
        this.coords.y += coords.y;
    }

    checkIntersectionWithRectangle(x: number, y: number, width: number, height: number): boolean {
        return !(
            this.coords.y > (y + height) ||
            y > (this.coords.y + this.getSize().height) ||
            (this.coords.x + this.getSize().width) < x ||
            (x + width) < this.coords.x
        );
    } 
}

export type fontCase = "up" | "normal" | "down";

export interface PartText {
    fontCase: fontCase;
    text: string;
}

export class TextChemicalOrganicFormula extends ChemicalOrganicFormula {
    private parts: PartText[];
    private length: number;
    getTemplate(): string {
        return `<rect x="0" y="0" width="${this.length}" height="22" fill="#fff" stroke-width="0" rx="5" ry="5"></rect>` + this.getRawTemplate();
    }

    getRawTemplate() {
        let text = `<text x="50%" text-anchor="middle" y="17" stroke-width="0" fill="${this.color}" font-family="Arial" class="CA__fillable-part">`;
        let prevDy = 0;
        this.parts.forEach(item => {
            let fontSize = "18px";
            let dy = 0;
            if(item.fontCase === "up" || item.fontCase === "down") {
                fontSize = "14px";
                if(item.fontCase === "up") dy = -7;
                else dy = 5;
            }
            text += `<tspan dy="${dy-prevDy}" style="font-size:${fontSize}">${item.text}</tspan>`;
            prevDy = dy;
        });
        text += "</text>";
        return text;
    }

    constructor(
      parts: PartText[] = [],
    ) {
        super("text","<text x='0' y='15'>Error text<text>",[[getLength(parts)/2, 11]],{width: getLength(parts), height: 22});
        this.parts = parts;
        this.length = getLength(this.parts);
    }
}

function getLength(parts: PartText[]) {
    return parts.reduce((prev, item) => {
        let fontSize = "18px";
        if(item.fontCase === "up" || item.fontCase === "down") fontSize = "14px";
        return prev + getWidthOfText(item.text, fontSize);
    }, 0);
}

function getWidthOfText(txt: string, fontsize: string) {
    const el = document.createElement('span');
    el.style.fontSize = fontsize;
    el.style.fontFamily = "Arial";
    el.innerHTML = txt;
    document.body.appendChild(el);
    const result = el.offsetWidth;
    document.body.removeChild(el);
    return result;
}

export class CustomOrganicFormula extends ChemicalOrganicFormula {
    constructor(
      template: string, 
      points: number[][],
      size: ISize = {width: 100, height: 100},
      name = "",
    ) {
        super("custom",template, points, size, name);
    }
}