import React from "react"
import F15 from "./Pictures/F15.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import styles from "./Img.module.css"

const Img = () => {
    return (
        <>
            <div className={styles.thinner}>
                <span>
                    <hr/>
                    <div className={styles.line}>
                        <div className={styles.image}>
                            <img src={F15} alt="Bag" />
                            
                                <h5>
                                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing <br /> elit, sed do magna aliqua.
                                </h5>
                                <h4>
                                    #2,500
                                </h4>
                            
                        </div>
                        <div className={styles.delete}>
                            <h5><FontAwesomeIcon icon={faTrashCan} /></h5>
                            Remove item
                        </div>
                    </div>
                </span>
                <hr />
            </div>
        </>
    )
}

export default Img;