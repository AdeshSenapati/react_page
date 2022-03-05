import React from "react"
import MainData from "./MainData"
export default function MainContent() {
    const [f2pData, setf2pData] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all", {
	"method": "GET",
})
.then(res => res.json())
.then(data => setf2pData(data))
},[])  
    console.log(f2pData)
    const cards = f2pData.map(item => {
        return(
          <MainData 
          key={item.score}
          page={false}
          {...item}   //u can use item={item} or u can use {...item} which will be same as describing each individually
          />
        )
    })
    return (
        <main>
            <div className="MainContent">
                <h1 className="free">Series to Watch</h1>
            </div>
            <p className="total"><b>Total Movies:{f2pData.length}</b></p>
            <section className="card-list">
                {cards}    
            </section>
            
        </main>
    );
}