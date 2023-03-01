import { Link } from "react-router-dom"

function SelectGame () {
    return (
        <>
        <h2>SELECT GAME</h2>
        <div className="topGameSelect">
            <Link to='/game1'>
                <div className="gameToSelect">Game 1</div>
            </Link>

            <Link to='/game2'>
                <div className="gameToSelect">Game 2</div>
            </Link>
        </div>
        <div className="bottomGameSelect">
            <Link to='/game3'>
                <div className="gameToSelect">Game 3</div>
            </Link>

            <Link to='/game4'>
                <div className="gameToSelect">Game 4</div>
            </Link>
        </div>
        </>
    )
}

export default SelectGame