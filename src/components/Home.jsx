import React from 'react';
import styles from './styles/home.module.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className= {styles.containerHome}>
            <div className= {styles.containerHeader}>
                <h1>Kinwa</h1>
                <h3>Restaurante vegetariano/vegano</h3>
            </div>
            <section>
                <h2 className={styles.titles}>Selecciona:</h2>
                <div className={styles.buttons}>
                    <Link to="/Waiter" className={styles.buttonWaiter}>
                        Mesera/o
                    </Link>
                    <Link to="/Kitchen" className={styles.buttonKitchen}>
                        Cocina
                    </Link>
                </div>
            </section>          
        </div>
    )
}

export default Home
