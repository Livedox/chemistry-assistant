import { useRef, useEffect } from "react";

function Picker({ wh, callback }) {
    const HSV = {
        hue: 0,
        saturation: 100,
        value: 100,
    };
    const canvasRef = useRef(null);
    const canvasLineRef = useRef(null);
    const ctxRef = useRef(null);
    const circleRef = useRef();
    const lineRef = useRef();
    const wLine = wh / 9 < 25 ? wh / 9 : 25;

    function moveCircle(e) {
        const parent = e.target.parentNode.getBoundingClientRect();
        const circle = e.currentTarget;
        let shiftX = e.clientX - circle.getBoundingClientRect().left + parent.left;
        let shiftY = e.clientY - circle.getBoundingClientRect().top + parent.top;

        moveAtCircle(e.pageX, e.pageY, shiftX, shiftY);

        function onMouseMove(e) {
            moveAtCircle(e.pageX, e.pageY, shiftX, shiftY);
        }

        document.addEventListener("mousemove", onMouseMove);

        window.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            window.onmouseup = null;
        };
    }

    function moveAtCircle(pageX, pageY, shiftX, shiftY) {
        const circle = circleRef.current;
        let x = pageX - shiftX;
        if (x < 0) x = 0;
        if (x > wh - 10) x = wh - 10;
        let y = pageY - shiftY;
        if (y < 0) y = 0;
        if (y > wh - 10) y = wh - 10;
        circle.style.left = x + "px";
        circle.style.top = y + "px";
        if ( y > wh/2 ) {
            circle.style.borderColor = "#fff";
        } else {
            circle.style.borderColor = "#000";
        }
        HSV.saturation = Math.round((100 * x) / (wh - 10));
        HSV.value = Math.round(100 * (1 - y / (wh - 10)));
        callback(toRGB(HSV.hue, HSV.saturation, HSV.value));
    }

    function moveLine(e) {
        const parent = e.target.parentNode.getBoundingClientRect();
        const line = e.currentTarget;
        let shiftY = e.pageY - line.getBoundingClientRect().top + parent.top;

        moveAtLine(e.pageY, shiftY);

        function onMouseMove(e) {
            moveAtLine(e.pageY, shiftY);
        }

        document.addEventListener("mousemove", onMouseMove);

        window.onmouseup = function () {
            document.removeEventListener("mousemove", onMouseMove);
            window.onmouseup = null;
        };
    }

    function moveAtLine(pageY, shiftY) {
        const line = lineRef.current;
        let y = pageY - shiftY;
        if (y < 0) y = 0;
        if (y > wh) y = wh;
        line.style.top = y + "px";
        HSV.hue = Math.round(360 * (1 - y / wh));
        let ctx = ctxRef.current;
        ctx.fillStyle = toRGB(HSV.hue, 100, 100);
        ctx.fillRect(0, 0, wh, wh);
        callback(toRGB(HSV.hue, HSV.saturation, HSV.value));
    }

    function toRGB(H, S, V) {
        let R, G, B;

        S /= 100;
        V /= 100;

        const lH = Math.floor(H / 60.01);

        const f = H / 60 - lH;
        const p = V * (1 - S);
        const q = V * (1 - S * f);
        const t = V * (1 - (1 - f) * S);

        if (lH === 0)      { R = V;G = t;B = p; }
        else if (lH === 1) { R = q;G = V;B = p; }
        else if (lH === 2) { R = p;G = V;B = t; }
        else if (lH === 3) { R = p;G = q;B = V; }
        else if (lH === 4) { R = t;G = p;B = V; }
        else if (lH === 5) { R = V;G = p;B = q; }

        return `rgb(${parseInt(R * 255)},${parseInt(G * 255)},${parseInt(B * 255)})`;
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasLine = canvasLineRef.current;
        const ctx = canvas.getContext("2d");
        const ctxLine = canvasLine.getContext("2d");
        canvas.width = wh;
        canvas.height = wh;
        canvas.style.width = `${wh}px`;
        canvas.style.height = `${wh}px`;
        canvasLine.width = wLine;
        canvasLine.height = wh;
        canvasLine.style.width = `${wLine}px`;
        canvasLine.style.height = `${wh}px`;

        const grd = ctxLine.createLinearGradient(0, 0, wLine, wh);
        grd.addColorStop(0, "#f00");
        grd.addColorStop(0.166, "#f0f");
        grd.addColorStop(0.333, "#00f");
        grd.addColorStop(0.5, "#0ff");
        grd.addColorStop(0.666, "#0f0");
        grd.addColorStop(0.833, "#ff0");
        grd.addColorStop(1, "#f00");
        ctxLine.fillStyle = grd;
        ctxLine.fillRect(0, 0, wLine, wh);

        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, wh, wh);
        ctxRef.current = ctx;
    }, [wh, wLine]);

    return (
        <div className="picker-storage" style={{ height: `${wh}px` }}>
            <div className="picker" style={{ width: `${wh}px`, height: `${wh}px` }}>
                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                    }}
                />
                <img
                    src="/gradient.png"
                    style={{
                        position: "absolute",
                        width: `${wh}px`,
                        height: `${wh}px`,
                    }}
                    alt=""
                    onMouseDown={(e) => {
                        const parent = e.target.parentNode.getBoundingClientRect();
                        moveAtCircle(e.pageX - 5 - parent.left, e.pageY - 5 - parent.top, 0, 0);
                    }}
                />
                <div
                    className="circle"
                    ref={circleRef}
                    onMouseDown={moveCircle}
                />
            </div>
            <div
                style={{ position: "relative", margin: "0 20px", top: 0 }}
            >
                <div className="arrows" ref={lineRef} onMouseDown={moveLine}>
                    <div className="left-arrow" />
                    <div
                        className="right-arrow"
                        style={{
                            left: `${(wLine) + 3}px`,
                        }}
                    />
                </div>
                <canvas
                    ref={canvasLineRef}
                    style={{
                        position: "absolute",
                        zIndex: 2,
                    }}
                    onMouseDown={(e) => {
                        const parent = e.target.parentNode.getBoundingClientRect();
                        moveAtLine(e.pageY - parent.top, 0);
                    }}
                />
            </div>
        </div>
    );
}

export default Picker;
