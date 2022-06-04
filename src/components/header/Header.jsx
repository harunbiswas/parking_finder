import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header(){
     const[items, setItems] = useState([
         {
             name: "Home",
             url: "/"
         },
         {
            name: "Maps",
            url: "/"
        },
        {
            name: "About",
            url: "/"
        },
        {
            name: "Blog",
            url: "/"
        },
        {
            name: "Contract",
            url: "/"
        },
     ])
    
    return(
        <header className="header">
                <div className="header-brand">
                    {/* <img src="" alt="" /> */}
                    <h1><Link to="/"><span>Page</span> Brand</Link></h1>
                </div>
                <ul className="nav-menu">
                    {
                        items.map((item, i)=> (
                            <li key={i} className="nav-menu-item">
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </header>
    )
}