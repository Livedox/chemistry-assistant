export default function Alert({alertClass, coords, html}) {
    return(
        <div className={"alert " + alertClass} style={{left: `${coords.left}px`, top: `${coords.top}px`}}>
            <div className="alert-content">
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>                 
        </div>
    )
}