import React from "react"
import styles from "./Fashion.module.css"

const Fashion = () => {
    return (
        <>
            <div>
                <div className={styles.fashion}>
                    <h1>Fashion</h1>
                </div>
                <div className={styles.gender}>
                    <h4>Male</h4>
                    <h4>Female</h4>
                </div>
            </div>
        </>
    )
}

export default Fashion;