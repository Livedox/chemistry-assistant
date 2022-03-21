import items from "./items";

export default function SolubilityTable() {
    return (
        <>
            <div className="solubility-table">
                <div className="solubility-table__container">
                    <div className="solubility-table__left-column">
                        {items.leftHeaders.map(item => {
                            return <div className="solubility-table__title">{item.text}</div>
                        })}
                    </div>
                    <div className="solubility-table__wraper">
                        <div className="solubility-table__top-row">
                            {items.topHeaders.map(item => {
                                return <div className="solubility-table__title solubility-table__item">{item.text}</div>
                            })}
                        </div>
                        <div className="solubility-table__main">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 9, 1, ,1 ,1, 2, 3, 4, 5, 6, 6, 7].map(item => {
                                return (
                                    <div className="solubility-table__items-container">
                                        <div className="solubility-table__item">22</div>
                                        <div className="solubility-table__item">32</div>
                                        <div className="solubility-table__item">42</div>
                                        <div className="solubility-table__item">52</div>
                                        <div className="solubility-table__item">32</div>
                                        <div className="solubility-table__item">42</div>
                                        <div className="solubility-table__item">52</div>
                                        <div className="solubility-table__item">32</div>
                                        <div className="solubility-table__item">42</div>
                                        <div className="solubility-table__item">52</div>
                                        <div className="solubility-table__item">32</div>
                                        <div className="solubility-table__item">42</div>
                                        <div className="solubility-table__item">52</div>
                                        <div className="solubility-table__item">32</div>
                                        <div className="solubility-table__item">42</div>
                                        <div className="solubility-table__item">52</div>
                                        <div className="solubility-table__item">32</div>
                                        <div className="solubility-table__item">42</div>
                                        <div className="solubility-table__item">52</div>
                                        <div className="solubility-table__item">52</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}