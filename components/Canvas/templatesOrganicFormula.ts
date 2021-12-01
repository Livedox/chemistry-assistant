interface IViewBox {
    width: number;
    height: number;
}

export interface ITemplateOrganicFormula {
    type: string;
    svg: string;
    points: number[][];
    viewBox?: IViewBox;
}

const templates: ITemplateOrganicFormula[] = [
    {
        type: "hexagon",
        svg: `<path d="M74.2,8 98.5,50 74.2,92 25.8,92 1.5,50 25.8,8z"/>`,
        points: [[74.2,8], [98.5,50], [74.2,92], [25.8,92], [1.5,50], [25.8,8]]
    },
    {
        type: "hexagonLine",
        svg: `<path d="M74.2,8 98.5,50 74.2,92 25.8,92 1.5,50 25.8,8z"/><line x1="94" y1="50" x2="72" y2="87"/>`,
        points: [[74.2,8], [98.5,50], [74.2,92], [25.8,92], [1.5,50], [25.8,8]]
    },
    {
        type: "hexagonDoubleLine",
        svg: `<path d="M74.2,8 98.5,50 74.2,92 25.8,92 1.5,50 25.8,8z"/><line x1="94" y1="50" x2="72" y2="87"/><line x1="28" y1="12" x2="6" y2="50"/>`,
        points: [[74.2,8], [98.5,50], [74.2,92], [25.8,92], [1.5,50], [25.8,8]]
    },
    {
        type: "hexagonDoubleLineV2",
        svg: `<path d="M74.2,8 98.5,50 74.2,92 25.8,92 1.5,50 25.8,8z"/><line x1="94" y1="50" x2="72" y2="87"/><line x1="27.8" y1="13" x2="71.1" y2="13"/>`,
        points: [[74.2,8], [98.5,50], [74.2,92], [25.8,92], [1.5,50], [25.8,8]]
    },
    {
        type: "hexagonTripleLine",
        svg: `<path d="M74.2,8 98.5,50 74.2,92 25.8,92 1.5,50 25.8,8z"/><line x1="94" y1="50" x2="72" y2="87"/><line x1="27.8" y1="13" x2="71.1" y2="13"/><line x1="6.5" y1="48.9" x2="27.3" y2="85.5"/>`,
        points: [[74.2,8], [98.5,50], [74.2,92], [25.8,92], [1.5,50], [25.8,8]]
    },
    {
        type: "octagon",
        svg: `<path d="M30.1,98 2,69.9 2,30.1 30.1,2 69.9,2 98,30.1 98,69.9 69.9,98z"/>`,
        points: [[30.1,98], [2,69.9], [2,30.1], [30.1,2], [69.9,2], [98,30.1], [98,69.9], [69.9,98]]
    },
    {
        type: "octagonLine",
        svg: `<path d="M30.1,98 2,69.9 2,30.1 30.1,2 69.9,2 98,30.1 98,69.9 69.9,98z"/><line x1="31" y1="7" x2="68.8" y2="7"/><line x1="67.5" y1="93.1" x2="94.3" y2="66.4"/><line x1="33.5" y1="93.1" x2="6.8" y2="66.4"/>`,
        points: [[30.1,98], [2,69.9], [2,30.1], [30.1,2], [69.9,2], [98,30.1], [98,69.9], [69.9,98]]
    },
    {
        type: "heptagon",
        svg: `<path d="M30.5,92.6 6.3,62.2 14.9,24.3 50,7.4 85.1,24.3 93.7,62.2 69.5,92.6z" />`,
        points: [[30.5,92.6], [6.3,62.2], [14.9,24.3], [50,7.4], [85.1,24.3], [93.7,62.2], [69.5,92.6]]
    },
    {
        type: "pentagon",
        svg: `<path d="M98.6,37.2 80,94.4 19.9,94.4 1.4,37.2 50,1.9z"/>`,
        points: [[98.6,37.2], [80,94.4], [19.9,94.4], [1.4,37.2], [50,1.9]]
    },
    {
        type: "pentagonLine",
        svg: `<path d="M98.6,37.2 80,94.4 19.9,94.4 1.4,37.2 50,1.9z"/><line x1="76" y1="89" x2="93" y2="38"/>`,
        points: [[98.6,37.2], [80,94.4], [19.9,94.4], [1.4,37.2], [50,1.9]]
    },
    {
        type: "pentagon",
        svg: `<path d="M98.6,37.2 80,94.4 19.9,94.4 1.4,37.2 50,1.9z"/><line x1="76" y1="89" x2="93" y2="38"/><line x1="23.4" y1="89.3" x2="7.1" y2="38"/>`,
        points: [[98.6,37.2], [80,94.4], [19.9,94.4], [1.4,37.2], [50,1.9]]
    },
    {
        type: "square",
        svg: `<rect x="13.3" y="13.3" width="73.4" height="73.4"/>`,
        points: [[13.3,13.3], [13.3,86.7], [86.7,13.3], [86.7,86.7]]
    },
    {
        type: "triangle",
        svg: `<path d="M97.6,89.7 2.2,89.7 50.2,6.9z" />`,
        points: [[97.6,89.7], [2.2,89.7], [50.2,6.9]]
    },
    {
        type: "triangleLine",
        svg: `<path d="M97.6,89.7 2.2,89.7 50.2,6.9z" /><line x1="11" y1="84" x2="87.9" y2="84"/>`,
        points: [[97.6,89.7], [2.2,89.7], [50.2,6.9]]
    },
    {
        type: "circle",
        svg: `<path d="M84.9,49c0,18.7-15.2,33.9-33.9,33.9S17.1,67.7,17.1,49S32.3,15.1,51,15.1S84.9,30.3,84.9,49z"/>`,
        points: []
    },
    {
        type: "a1",
        svg: `<path d="M14,6 14,94 59.2,94 88.3,50 59.2,6z"/>`,
        points: [[14,6], [14, 94], [59.2, 94], [88.3, 50], [59.2, 6]]
    },
    {
        type: "a2",
        svg: `<path d="M14,6 14,94 59.2,94 88.3,50 59.2,6z"/><line class="st0" x1="20" y1="89" x2="20" y2="10"/>`,
        points: [[14,6], [14, 94], [59.2, 94], [88.3, 50], [59.2, 6]]
    },
    {
        type: "line",
        svg: `<line x1="25" y1="0" x2="25" y2="50"/>`,
        points: [[25,0], [25, 50]],
        viewBox: {width: 50, height: 50}
    },
    {
        type: "doubleLine",
        svg: `<line x1="23" y1="0" x2="23" y2="50"/><line x1="27" y1="0" x2="27" y2="50"/>`,
        points: [[25,0], [25, 50]],
        viewBox: {width: 50, height: 50}
    },
    {
        type: "tripleLine",
        svg: `<line x1="29" y1="0" x2="29" y2="50"/><line x1="21" y1="0" x2="21" y2="50"/><line x1="25" y1="0" x2="25" y2="50"/>`,
        points: [[25,0], [25, 50]],
        viewBox: {width: 50, height: 50}
    },
    {
        type: "shortLine",
        svg: `<line x1="25" y1="10" x2="25" y2="40"/>`,
        points: [[25,10], [25, 40]],
        viewBox: {width: 50, height: 50}
    },
    {
        type: "shortDoubleLine",
        svg: `<line x1="23" y1="10" x2="23" y2="40"/><line x1="27" y1="10" x2="27" y2="40"/>`,
        points: [[25,10], [25, 40]],
        viewBox: {width: 50, height: 50}
    },
    {
        type: "shortTripleLine",
        svg: `<line x1="29" y1="10" x2="29" y2="40"/><line x1="21" y1="10" x2="21" y2="40"/><line x1="25" y1="10" x2="25" y2="40"/>`,
        points: [[25,10], [25, 40]],
        viewBox: {width: 50, height: 50}
    },
    {
        type: "dashLine",
        svg: `<path d="M 25 0 L 25 50" stroke-dasharray="4 2" stroke-width="1" />`,
        points: [[25,0], [25, 50]],
        viewBox: {width: 50, height: 50}
    },
    {
        type: "lineAndDashLine",
        svg: `<line x1="23" y1="5" x2="23" y2="45"/><path d="M 27 0 L 27 50" stroke-dasharray="2 2" stroke-width="2" />`,
        points: [[25,5], [25, 45]],
        viewBox: {width: 50, height: 50}
    },
    {
        type: "b1",
        svg: `<path d="M 2 14 L 2 25 L 38 20 z" fill="#000000" class="CA__fillable-part" />`,
        points: [[0,20]],
        viewBox: {width: 40, height: 40}
    },
    {
        type: "b2",
        svg: `<path d="M 2 14 L 2 26 L 4 25.65 L 4 14.35 z M 6 14.7 L 6 25.3 L 8 24.95 L 8 15.05 z M 10 15.4 L 10 24.6 L 12 24.25 L 12 15.75 z
            M 14 16.1 L 14 23.9 L 16 23.55 L 16 16.45 z M 18 16.8 L 18 23.2 L 20 22.85 L 20 17.15 z M 22 17.5 L 22 22.5 L 24 22.15 L 24 17.85 z
            M 26 18.2 L 26 21.8 L 28 21.45 L 28 18.55 z M 30 18.9 L 30 21.1 L 37 20" fill="#000000" stroke-width="0"  class="CA__fillable-part" />`,
        points: [[0,20]],
        viewBox: {width: 40, height: 40}
    },
    {
        type: "c1",
        svg: `<path d="M 0 114 L 76 56 L 182 56 L 257 114" /><path d="M 0 113 L 66 179 L 192 179 L 257 113 L 197 194 L 60 194 z" fill="#000000" class="CA__fillable-part" />`,
        points: [[0, 114], [76, 56], [182, 56], [257, 114]],
        viewBox: {width: 265, height: 265}
    },
    {
        type: "c2",
        svg: `<path d="M 0 114 L 76 56 L 182 56 L 257 114" /><path d="M 0 113 L 66 179 L 60 194 z M 192 179 L 257 113 L 197 194 z" fill="#000000" class="CA__fillable-part" />`,
        points: [[0, 114], [76, 56], [182, 56], [257, 114]],
        viewBox: {width: 265, height: 265}
    },
]












export default templates;




