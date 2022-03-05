import React from "react"
import SimpleForm from "./simpleform";
import { useParams } from "react-router-dom";
export default function Sum(){
    const [book, setbook] = React.useState("");
    let { summary, name } = useParams();
    return(
        <div>
            <h1 className="sumname">{name}</h1>
            <p>{summary}</p>
            <button onClick={() => setbook("yes")}>Book Ticket</button>
            {book === "yes" ? <SimpleForm moviename={name}/> : null}
        </div>
    );
}