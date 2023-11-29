import {useState} from "react";
import styles from "./dropdown.module.css";

export default function Dropdown({items}) {
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item)=> {
        setSelectedItem(item);
    }

    return (
        <div className={styles.dropdown_container} onMouseLeave={(e)=>setIsActive(false)}>
            <button className={styles.dropdown_header} onMouseEnter={(e)=> setIsActive(true)}>
                {selectedItem? selectedItem : "Select an item"}
                <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"/>
            </button>
            {isActive && (
            <ul className={styles.dropdown_list}>
                
                {items.map((item, index)=>(
                <li className={styles.dropdown_item} key={index} onClick={()=>{
                    handleItemClick(item)
                    setIsActive(!isActive)
                }}>{item}</li>
                ))}
                <li className={styles.dropdown_item} onClick={()=>{
                    setSelectedItem(null)
                    setIsActive(!isActive)
                }}>None</li>
            </ul>
            )}

        </div>
    )
}
