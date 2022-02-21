import { Styles } from "./homestyle";
import { Link } from 'react-router-dom'
export const Home = () => {
    return (
        <div>
            <Styles>
                <h3 style={{fontSize:"60px"}}>
                    <strong style={{ color: "blue" }}>G</strong>
                    <strong style={{ color: "red" }}>o</strong>
                    <strong style={{ color: "yellow" }}>o</strong>
                    <strong style={{ color: "blue" }}>g</strong>
                    <strong style={{ color: "green" }}>l</strong>
                    <strong style={{ color: "red" }}>e</strong>
                </h3>
                <Link to="/" >
                <input type="text" placeholder="Search...." className="search-box" />
                </Link>
                
            </Styles>

        </div>
    )
}