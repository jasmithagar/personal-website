import styles from './Socials.module.css'
import React, { useState } from "react";
import { TikTokEmbed } from 'react-social-media-embed';

function Socials(){
        const [active, setActive] = useState(true);
        function openItem() {setActive(!active);}
    return(
        
        <div className={styles['parent-container']}>
            <button onClick={openItem} className={styles.button}>Day in my Life </button>
            <div className={active ? styles.close : styles.open}>
                <div className={styles['child-container']}>
                    <div>
                        <h3>
                            First Video
                        </h3>
                        <TikTokEmbed url="https://www.tiktok.com/@mithadiares/video/7445336010700983582" width={325} />
                    </div>
                    <div>
                        <h3>
                            Day In the Life
                        </h3>
                        <TikTokEmbed url="https://www.tiktok.com/@mithadiares/video/7490427758015761694" width={325} />
                    </div>
                    <div>
                        <h3>
                            Third Video
                        </h3>
                        <TikTokEmbed url="https://www.tiktok.com/@mithadiares/video/7470912678303698222" width={325} />
                    </div>
                </div>
            </div> 


        </div>
    )
}
export default Socials