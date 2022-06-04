// import axios from "axios";
// import { useEffect, useState } from "react";
import Maps from "../map/Maps";
import SideBar from "./SideBar";

export default function Main(){
//     const [data, setData] = useState(null)

// useEffect(()=> {
//     const url = "https://npropendata.rdw.nl/parkingdata/v2/";
//     axios.get(url).then(d=>{
//         console.log(d)
//     })
// },[])

    return(
        <main className="home-main">
            <SideBar />
            <Maps />
        </main>
    )
}