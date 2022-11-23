import React, { useState } from "react";
import styles from "./Profile.module.css";
import { FaEnvelope, FaPen, FaSquareFull } from "react-icons/fa";
import Popup from "./Popup";
import Popup2 from "./Popup2";
import Modal from '@material-ui/core/Modal';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  /*const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [open, setItsOpen] = useState(false);
  const togglePop = () => {
    setItsOpen(!open);
  }*/
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
     navigate("/login");
  };
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <>
      <div className={styles.information}>
        <h2>Profile Information</h2>
      </div>

      {/* Profile Information */}
      <div className={styles.biggest}>
        <div className={styles.profile}>
          <div>
            <div>
              <div className={styles.email}>
                <p>Email address <br />
                  {
                    userInfo?.email
                  }
                </p>
                <div className={styles.change} onClick={handleOpen}>
                  <p>change</p>
                  <p>
                    <FaPen />
                  </p>
                  {open && (
                    <Popup2
                      content={
                        <>
                          <h4>Change Email</h4>
                          <hr />
                          <div className={styles.pop}>
                            <h5>New Email</h5>
                            <div className={styles.up}>
                              <form>
                                <input type="email" placeholder="Email" />
                              </form>
                              <h4>Update</h4>
                            </div>
                          </div>   
                        </>
                      }
                    />
                  )}
                </div>
              </div>

              {/* Phone number */}
              <div className={styles.email2}>
                <p>Phone Number <br />
                  {
                    userInfo?.phoneNumber
                  }
                </p>
                <div className={styles.change2} onClick={handleOpen}>
                  <p>change</p>
                  <p>
                    <FaPen />
                  </p>
                  {open && (
                    <Popup
                      content={
                        <>
                          <h4>Change Phone Number</h4>
                          <hr />
                          <div className={styles.pop}>
                            <h5>New Phone Number</h5>
                            <div className={styles.up}>
                              <form>
                                <input type="tel" placeholder="Phone Number" />
                              </form>
                              <h4>Update</h4>
                            </div>
                          </div>
                        </>
                      }
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Inbox and other sections */}
            <div className={styles.section}>
              <div className={styles.inbox}>
                <h6>Inbox</h6>
                <p>
                  <FaEnvelope />
                </p>
              </div>
              <div className={styles.voucher}>
                <h6>Voucher</h6>
              </div>
            </div>

            {/* Orders and Recent stores */}
            <div className={styles.span}>
              <div className={styles.orders}>
                <h6>Orders</h6>
                <p>
                  <FaSquareFull />
                </p>
              </div>
              <div className={styles.recent}>
                <h6>Recent Stores</h6>
                <p>
                  <FaSquareFull />
                </p>
              </div>
            </div>

            {/* Logout and Close account */}
            <div className={styles.article}>
              <div className={styles.logout} onClick={handleLogout}>
                <h6>Logout</h6>
              </div>
              <div className={styles.close}>
                <h6>Close Account</h6>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className={styles.address}>
            <p>
              <FaPen />
            </p>
            <h4>Address book</h4>
            <div className={styles.tolu}>
              <h5>
                Tolu John +23470****1847 <br />
                33, William avenue, Ikeja, <br />
                Lagos State. Nigeria. 31003
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
