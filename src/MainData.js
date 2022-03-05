import React from "react"
import { useNavigate } from "react-router-dom";

function removeHTML(str){ 
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
} 
export default function MainData(props) {
    var html = props.show.summary;
    var onlyText = removeHTML(html);
    console.log(onlyText);
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/sum/${props.show.name}/${onlyText}`);
      };
        return (
            <div className="footer" >
                <img src={props.show.image.medium} className="footer-img"></img>
                <div className="details">           
                <h1>{props.show.name} (Rating:{props.show.rating.average})</h1>
                <h4>Premiered: {props.show.premiered}</h4>
                <h3>Language: {props.show.language}</h3>
                <h5>Status: {props.show.status}</h5>       
                <h2>Description: <button onClick={handleClick} className="btn-sum">Summary</button></h2>
                </div>
                
        </div>
    );
    
}
