import './uvbar.css'

export const UvBar = ({ uvPosition }) => {
    return (
        <div className="uv-bar-container">
            <div className="uv-bar"></div>
            <div className="uv-selector" style={{ left: `${uvPosition}%` }}></div>
        </div>
    )
}