import React, {useState} from "react";
import { Link } from "react-router-dom";

function SidebarItem({item}){
    const [open, setOpen] = useState(false);

    return (
        <>
            <li onClick={() => {open ? setOpen(false) : setOpen(true)}}>
                <Link to={item.path}><i>{item.icon}</i>{item.title}</Link>
                <ul className={!open ? "smenu" : "smenu on"}>
                    {item.childrens && item.childrens.map(smenu => <li key={smenu.id}><Link to={smenu.path}>{smenu.title}</Link></li>)}
                </ul>
            </li>
        </>
    )
}

export default SidebarItem;