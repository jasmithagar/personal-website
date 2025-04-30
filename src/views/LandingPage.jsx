import styles from "./LandingPage.module.css"
import NavBar from "../components/NavBar.jsx"

function LandingPage(){
    return(
        // <div>
        <div className={styles['parent-container']}>
            <div className={styles['row2']}>
                <h2>hello! I'm </h2>
                <h2 className={styles['name']}>jasmitha</h2>
                <h2 className={styles['typewriter']}>a computer science student</h2>
            </div>
    
            
        </div>
        

    )
}
export default LandingPage