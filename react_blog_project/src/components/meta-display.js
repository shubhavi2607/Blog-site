import './styles/meta.css'

const MetaDisplay = (props) => {
    
    function getDateforDisplay() {
        var dateTime = new Date(props.meta.date)
        var month = dateTime.toLocaleDateString('default', { month: 'long' })
        var date = dateTime.getDate()
        var year = dateTime.getFullYear()
        return month+" "+date+" "+year
    }
    return(
        <div className="meta-container">
            <span className="meta">
                <p className="type">{props.meta['blog-type']}</p>
                <div className="date">
                    <p>/</p>
                    <p>{getDateforDisplay()}</p>
                </div>
                                    
            </span>
        </div>
    )
}

export default MetaDisplay