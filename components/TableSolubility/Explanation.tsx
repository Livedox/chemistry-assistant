function Explanation() {
    return(
    <div className="explanation">
        <div className="explanation__container">
            <div className="explanation__item-container">
                <div className="explanation__item solubility-table__item_soluble">Р</div>
                - растворимо
            </div>
            <div className="explanation__item-container">
                <div className="explanation__item solubility-table__item_slightly-soluble">М</div>
                - малорастворимо
            </div>
            <div className="explanation__item-container">
                <div className="explanation__item solubility-table__item_insoluble">Н</div>
                - нерастворимо
            </div>
            <div className="explanation__item-container">
                <div className="explanation__item solubility-table__item_decomposes">-</div>
                - в водной среде разлагается
            </div>
            <div className="explanation__item-container">
                <div className="explanation__item">?</div>
                - отсутствуют сведения о растворимости
            </div>
        </div>
    </div>);
}

export default Explanation;