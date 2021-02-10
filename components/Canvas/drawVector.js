const drawVector = {
    d3() {
        return `<path d="M 50 11 L 7.565 84.5 L 92.435 84.5 z" style="fill: none;stroke:black;stroke-width:2" />`;
    },
    d4() {
        return `<path d="M 84.648 84.648 L 84.648 15.352 L 15.352 15.352 L 15.352 84.648 z" />`;
    },
    d5() {
        return `<path d="M 78.801 89.642 L 96.601 34.858 L 50 1 L 3.398 34.858 L 21.199 89.642 z" />`;
    },
    d6() {
        return `<path d="M 99 50 L 74.5 7.565 L 25.5 7.565 L 1 50 L 25.5 92.435 L 74.5 92.435 z" />`;
    },
    d7() {
        return `<path d="M 97.929 60.188 L 87.848 18.879 L 49.267 1 L 11.238 20.026 L 2.397 61.617 L 29.402 94.461 L 71.918 93.825 z" />`;
    },
    d8() {
        return `<path d="M 95.432 68.356 L 95.105 30.854 L 69.146 4.895 L 30.854 4.895 L 4.568 31.644 L 4.896 69.146 L 31.644 95.432 L 69.146 95.105 z" />`;
    },
    line(data) {
        const size = data.small ? 10 : 0;
        return `<path d="M 25 ${0+size} L 25 ${50-size}" />`;
    },
    doubleLine(data) {
        const size = data.small ? 10 : 0;
        return `<path d="M 23 ${0+size} L 23 ${50-size} M 27 ${0+size} L 27 ${50-size}" />`
    },
    tripleLine(data) {
        const size = data.small ? 10 : 0;
        return `<path d="M 21 ${0+size} L 21 ${50-size} M 29 ${0+size} L 29 ${50-size} M 25 ${0+size} L 25 ${50-size} "/>`;
    },
    dashLine() {
        return `<path d="M 22 5 L 22 47" /><path d="M 28 0 L 28 50" stroke-dasharray="2 2" stroke-width="1" />`;       
    },
    c3_1() {
        return `<path d="M 50 11 L 7.565 84.5 L 92.435 84.5 z M 15 80 L 85 80" />`;
    },
    c5_1() {
        return `<path d="M 78.801 89.642 L 96.601 34.858 L 50 1 L 3.398 34.858 L 21.199 89.642 z M 92 36 L 75 86" />`;
    },
    c5_2() {
        return `<path d="M 78.801 89.642 L 96.601 34.858 L 50 1 L 3.398 34.858 L 21.199 89.642 z M 92 36 L 75 86 M 9 36 L 25 86" />`;
    },
    c6_1() {
        return `<path d="M 99 50 L 74.5 7.565 L 25.5 7.565 L 1 50 L 25.5 92.435 L 74.5 92.435 z M 92 52 L 70 89" />`;
    },
    c6_2() {
        return `<path d="M 99 50 L 74.5 7.565 L 25.5 7.565 L 1 50 L 25.5 92.435 L 74.5 92.435 z M 92 52 L 70 89 M 27 13 L 73 13" />`;
    },
    c6_2_2() {
        return `<path d="M 99 50 L 74.5 7.565 L 25.5 7.565 L 1 50 L 25.5 92.435 L 74.5 92.435 z M 92 52 L 70 89 M 28 13 L 6 50"/>`;
    },
    c6_3() {
        return `<path d="M 99 50 L 74.5 7.565 L 25.5 7.565 L 1 50 L 25.5 92.435 L 74.5 92.435 z M 92 52 L 70 89 M 27 13 L 73 13 M 8 50 L 30 89" />`;
    },
    c8_3() {
        return `<path d="M 95.432 68.356 L 95.105 30.854 L 69.146 4.895 L 30.854 4.895 L 4.568 31.644 L 4.896 69.146 L 31.644 95.432 L 69.146 95.105 z M 91 66 L 68 89 M 9 66 L 32 89 M 32 10 L 68 10" />`;
    },
    dk() {
        return `<path d="M 0 59 L 76 1 L 182 1 L 257 59" /><path d="M 0 58 L 66 124 L 192 124 L 257 58 L 197 139 L 60 139 z" fill="#000000" class="fillable-part" />`;
    },
    dk1() {
        return `<path d="M 0 59 L 76 1 L 182 1 L 257 59" /><path d="M 0 58 L 66 124 L 60 139 z M 192 124 L 257 58 L 197 139 z" fill="#000000" class="fillable-part" />`;
    },
    dk2() {
        return `<path d="M 2 14 L 2 26 L 37 20 z" fill="#000000" class="fillable-part" />`;
    },
    dk3() {
        return `<path d="M 2 14 L 2 26 L 4 25.65 L 4 14.35 z M 6 14.7 L 6 25.3 L 8 24.95 L 8 15.05 z M 10 15.4 L 10 24.6 L 12 24.25 L 12 15.75 z
            M 14 16.1 L 14 23.9 L 16 23.55 L 16 16.45 z M 18 16.8 L 18 23.2 L 20 22.85 L 20 17.15 z M 22 17.5 L 22 22.5 L 24 22.15 L 24 17.85 z
            M 26 18.2 L 26 21.8 L 28 21.45 L 28 18.55 z M 30 18.9 L 30 21.1 L 37 20" fill="#000000" stroke-width="0" class="fillable-part" />`;
    },
    dk4() {
        return `<path d="M 0 20 L 40 20" stroke-dasharray="4 2" stroke-width="1" />`;
    },
    dk5() {
        return `<path d="M 21 9 L 70 9 L 95 50 L 70 92 L 21 92 L 21 9" />`;
    },
    dk6() {
        return `<path d="M 21 9 L 70 9 L 95 50 L 70 92 L 21 92 L 21 9 M 25 15 L 25 86" />`;
    },
    dk7() {
        return `<circle cx="50" cy="50" r="28"></circle>`;
    },
    text(data) {
        let text = `<rect x="0" y="0" height="30" width="${data.w}" rx="15" stroke-width="0" fill="#ffffff"></rect><text fill="#000" font-family="Arial" text-anchor="middle" x="50%" y="24" style="font-size: 24px;" stroke-width="0" class="fillable-part">`;
        const arr = data.value.text.split(/(\$\+{)|(\$-{)|(})/).filter(Boolean);
        const resultArr = [];
        for(let i = 0; i < arr.length; i++) {
            switch(arr[i]) {
                case "$+{": resultArr.push({type: "up", text: arr[++i]});break;
                case "$-{": resultArr.push({type: "bottom", text: arr[++i]});break;
                case "}": break;
                default: resultArr.push({type: "middle", text: arr[i]});
            }
        }
        resultArr.forEach( item => {
            let dy = 0;
            if(item.type === "up") {
                dy = -30;
            } else if(item.type === "bottom") {
                dy = 20;
            }
            text += `<tspan dy="${dy}%" style="font-size: ${item.type === "middle" ? 24 : 15}px;">${item.text}</tspan>`;
        })
        return text+"</text>";
    },
}

export default drawVector;