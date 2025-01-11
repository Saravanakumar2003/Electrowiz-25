import react from "react";
import '../css/Credits.css';
import { GitHub, Link } from "@mui/icons-material";

function Credits() {
    return (
        <div className="credits">
            <h1>Credits</h1>
            <h2>Faculty Coordinator</h2>
            <div className="credit_box">
                <div className="credit_inner_box">
                    <h3>Dr. S. Mary Joans</h3>
                    <span>Head of Department, ECE</span>
                </div>
            </div>
            <h2>Website Team</h2>
            <div className="credit_box">
                <div className="credit_inner_box">
                    <h3>Saravanakumar R</h3>
                    <span>Developer</span>
                </div>
                <div className="credit_inner_box">
                    <h3>Subhanu</h3>
                    <span>Designer</span>
                </div>
                <div className="credit_inner_box">
                    <h3>Alekhya</h3>
                    <span>Designer</span>
                </div>
            </div>
            <h2>Special Credits To</h2>
            <div className="credit_box">
                <div className="credit_inner_box">
                    <h3>Codrops</h3>
                    <span>Homepage Animation is provided by Codrops</span>
                    <div className="credit_social_links">
                       <a href="https://github.com/codrops"><GitHub/></a> 
                       <a href="https://tympanus.net/codrops/"><Link/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Credits;