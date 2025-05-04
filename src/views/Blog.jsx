import styles from "./Blog.module.css"
import React, { useState } from "react";
import {Link } from "react-router-dom";
import EntryPage from "./EntryPage";

function Blog(){
    const [active, setActive] = useState(false);

    function openItem() {
    setActive(!active);
    }

    return(
        <div className={styles['parent-container']}>
                
            <h3> Hi! Blog here! </h3>

        <div>
            <Link to="/home"><button>
                Home Page
            </button>
            </Link>
        </div>

        <div className={styles.row1}>
            <button onClick={openItem} className={styles.button}>open</button>

            <div className={styles.blog}>
{/*                 
                <h1 className={active ? styles.close : styles.open}></h1> */}
                {active && <EntryPage />}
            </div>
            
        </div>
            
        
            
                
        </div>
        
    )
}
export default Blog