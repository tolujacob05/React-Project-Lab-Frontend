import React from "react"
import styles from "./Address.module.css"


const Address = () => {
    return (
         <>
            <div className={styles.for}>

                    <div className={styles.house}>
                            <div className={styles.place}>
                                <h3>
                                    Devilery Address <br/>
                                    Tolu Jacob  +23470*****1432 <br/>
                                    33, William avenue, Ikeja. <br/>
                                    Lagos State, Nigeria. 31003
                                </h3>
                            </div>
                    </div>
                    
                    <div className="card-body">

                        <div className="row">
                            <ul>
                                <li>   <div className="col-md-6">
                                        <div className="form-grp-mb-3">
                                            <label>Full Name</label>
                                        <input type="text" name="firstname" className="**" placeholder="John Doe" />
                                        </div>
                                    </div> </li>

                                <li>   <div className="col-md-6">
                                        <div className="form-grp-mb-3">
                                            <label>Address</label>
                                        <input type="text" name="Address" className="**" placeholder="47 Miracle Ave, Sangotedo" />
                                        </div>
                                    </div> </li>

                                <li> <div className="col-md-6">
                                        <div className="form-grp-mb-3">
                                            <label>Address</label>
                                        <input type="text" name="Address" className="**" placeholder="47 Miracle Ave, Sangotedo" />
                                        </div>
                                    </div> </li>
                            </ul>
                            

                        </div>


                        <div className="row2">
                            <ul>
                                <li>   <div className="col-md-6">
                                        <div className="form-grp-mb-3">
                                            <label>Postal code </label>
                                        <input type="text" name="Postal code" className="**" placeholder="1234345" />
                                        </div>
                                    </div> </li>

                                <li>   <div className="col-md-6">
                                        <div className="form-grp-mb-3">
                                            <label>State</label>
                                        <input type="text" name="State" className="**" placeholder="Lagos" />
                                        </div>
                                    </div> </li>

                                <li> <div className="col-md-6">
                                        <div className="form-grp-mb-3">
                                            <label>Country</label>
                                        <input type="text" name="Nigeria" className="**" placeholder="Nigeria"/>
                                        </div>
                                    </div> </li>
                            </ul>
                            

                        </div>
                    </div>
            </div>

            <div>
                <button>Add Address</button>
            </div>
         </> 
         
    )
}

export default Address;