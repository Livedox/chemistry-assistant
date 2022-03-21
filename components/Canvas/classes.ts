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
        x: 0,
        y: 0
    }
    private rotation = 0;
    scale = 1;
    size = BASE_SIZE;
    viewBox = BASE_SIZE;
    active = false;
    constructor(
        readonly id: number = 0,
        readonly type: string = "hexagon",
        readonly template: string = BASE_SVG_TEMPLATE,
        readonly points: number[][] = BASE_POINTS,
        size: ISize = BASE_SIZE,  
        readonly name: string = ""
    ) {
        this.id = id;
        this.type = type;
        this.template = template;
        this.size = size;
        this.viewBox = size;
        this.name = name;
    }

    resize(scale: number) {
        this.scale = scale;
        if(this.scale > 4) this.scale = 4;
        if(this.scale < 0.2) this.scale = 0.2;
    }

    getScale() {
        return this.scale;
    }

    turn(deg:number) {
        this.rotation = deg;
        if(this.rotation >= 360) this.rotation = 0;
        if(this.rotation <= -360) this.rotation = 0;
    }

    getRotation() {
        return this.rotation;
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
        const rad = this.rotation * Math.PI/180;
        return this.points.map(item => {
            const w = this.viewBox.width/2;
            const h = this.viewBox.height/2;
            const x = (item[0] - w) * Math.cos(rad) - (item[1] - h) * Math.sin(rad) + w;
            const y = (item[1] - h) * Math.cos(rad) + (item[0] - w) * Math.sin(rad) + h;
            return [x*this.scale, y*this.scale];
        })
    }

    getTemplate() {
        return this.template;
    }

    getRawTemplate() {
        return this.template;
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

export class TextChemicalOrganicFormula extends ChemicalOrganicFormula {
    text = "";
    getTemplate(): string {
        const textLength = filterTextLength(this.text)*15;
        return `<rect x="0" y="0" width="${textLength}" height="22" fill="#fff" stroke-width="0" rx="5" ry="5"></rect>` + this.getRawTemplate();
    }

    getRawTemplate() {
        const textArray = this.getArrayText(this.text);
        let text = `<text x="50%" text-anchor="middle" y="17" stroke-width="0" fill="black" font-family="Arial" class="CA__fillable-part">`;
        let prevDy = 0;
        textArray.forEach(item => {
            const fontSize = item.dy !== 0 ? "14px" : "18px";
            text += `<tspan dy="${item.dy-prevDy}" style="font-size:${fontSize}">${item.text}</tspan>`;
            prevDy = item.dy;
        });
        text += "</text>";
        return text;
    }

    getArrayText(text:string) {
        const arr = text.split(/(\$\+{)|(\$-{)|(})/).filter(Boolean);
        const result = [];
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] === "$+{")      result.push({dy: -6, text: arr[++i]});
            else if (arr[i] === "$-{") result.push({dy: 4, text: arr[++i]});
            else if (arr[i] !== "}")   result.push({dy: 0, text: arr[i]});
        }
        return result;
    }

    constructor(
        readonly id:number = 0,
        text = "",
    ) {
        super(id,"text","<text x='0' y='15'>Error text<text>",[[filterTextLength(text)*15/2, 11]],{width: filterTextLength(text)*15, height: 22});
        this.text = text;
    }
}

function filterTextLength(text: string) {
    return text.split(/\$\+{|\$-{|}/).filter(Boolean).join("").length;
}

export class CustomChemicalOrganicFormula extends ChemicalOrganicFormula {
    constructor(
        readonly id:number = 0,
        template: string, 
        points: number[][],
        size: ISize = {width: 100, height: 100},
        name = "",
    ) {
        super(id,"custom",template, points, size, name);
    }
}