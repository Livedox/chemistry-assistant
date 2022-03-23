function ElectrochemicalVoltageSeriesMetals() {
    return(
        <div className="electrochemical-voltage-series-metals">
            <div className="electrochemical-voltage-series-metals__elements">
                <span>Li</span><span>K</span><span>Ba</span><span>Na</span>
                <span>Mg</span><span>Al</span><span>Mn</span><span>Zn</span>
                <span>Cr</span><span>Fe</span><span>Co</span><span>Sn</span>
                <span>Pb</span><span className="electrochemical-voltage-series-metals__red">H₂</span><span>Cu</span><span>Hg</span>
                <span>Ag</span><span>Au</span>
            </div>
            <div className="electrochemical-voltage-series-metals__description">
                <div>❮ Восстановительная способность увеличивается</div>
                <div>Окислительная способность увеличивается ❯</div>
            </div>
        </div>
    );
}

export default ElectrochemicalVoltageSeriesMetals;