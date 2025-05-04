import styles from './NavBar.module.css'

const NavData = [
    {
        title: "home",
        path: "/home",
        id: 1
    },
    {
        title: "blog",
        path: "/blog",
        id: 2
    },
    {
        title: "socials",
        path: "/socials",
        id: 3
    }
]

function NavBar(){
    return(
        <div className={styles['navbar']}>
            {NavData.map((item) => (
            <a 
            key = {item.id}
            href = {item.path}
            className = {styles['navtext']}
            >
                {item.title}
            </a>


            
            ))}

        </div>
    )
}
export default NavBar