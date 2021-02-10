export default function PopUp({ isPopUpActive, togglePopUp, html }) {
    return (
        <div id="bg-pop-up" className={isPopUpActive ? "active" : ""}>
            <div id="close-pop-up" onClick={() => togglePopUp()} />
            <div id="pop-up-container">
                <div id="pop-up" dangerouslySetInnerHTML={{__html: html}} />
            </div>       
        </div>
    )
}