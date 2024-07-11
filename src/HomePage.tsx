import { useEffect, useState, useRef } from "react";
import { Box, Button, Divider, Typography, AppBar, Toolbar, styled, keyframes, Avatar } from '@mui/material';
import styles from '../styles/Home.module.css'


export default function ClientComponent() {


  return (
    <div className={styles.divcontainer}>
        <div className={styles.boxcontainer}>
          <div className={styles.achievementbox}>
            <Typography style={{color: "white", fontSize: "41px", marginLeft: "15px"}}>
              Active Achievements
            </Typography>
            <div className={styles.horizontalcardsbox}>
              <div className={styles.horizontalcard}>
                <div className={styles.steakicon}>
                  <img src="Powerup-Wrapper-Yellow.png" height={30} width={35} />
                </div>
                <div className={styles.horizontalcardtext}>
                  <Typography style={{color: "white", fontSize: "16px" }}>Points Card</Typography>
                  <Typography style={{color: "white", fontSize: "14px", marginTop: "3.75px" }}>Lorem ipsum is a default filler test that is used by <span style={{color: "green", marginRight: "4px"}}> anyone</span>who doesn’t need focus on text.</Typography>
                  <div className={styles.pointsperdollar}>
                    <Typography style={{color: "white", fontSize: 14}}>+4pts <span style={{color: "grey"}}>/ dollar</span></Typography>
                    <Typography style={{color: "grey", fontSize: 14, fontStyle: "italic"}}>per day</Typography>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalcard}>
              <div className={styles.steakicon}>
                  <img src="Icon.png" height={20} width={23} />
                </div>
                <div className={styles.horizontalcardtext}>
                  <Typography style={{color: "white", fontSize: "16px" }}>Points Card</Typography>
                  <Typography style={{color: "white", fontSize: "14px", marginTop: "3.75px" }}>Lorem ipsum is a default filler test that is used by <span style={{color: "orange", marginRight: "4px"}}> anyone</span>who doesn’t need focus on text.</Typography>
                  <div className={styles.pointsperdollar}>
                    <Typography style={{color: "white", fontSize: 14}}>+4pts <span style={{color: "grey"}}>/ dollar</span></Typography>
                    <Typography style={{color: "grey", fontSize: 14, fontStyle: "italic"}}>per day</Typography>
                  </div>
                </div>
              </div>
              <div className={styles.horizontalcard}>
              <div className={styles.steakicon}>
                  <img src="Powerup-Wrapper-Yellow.png" height={30} width={35} />
                </div>
                <div className={styles.horizontalcardtext}>
                  <Typography style={{color: "white", fontSize: "16px" }}>Points Card</Typography>
                  <Typography style={{color: "white", fontSize: "14px", marginTop: "3.75px" }}>Lorem ipsum is a default filler test that is used by <span style={{color: "green", marginRight: "4px"}}> anyone</span>who doesn’t need focus on text.</Typography>
                  <div className={styles.pointsperdollar}>
                    <Typography style={{color: "white", fontSize: 14}}>+4pts <span style={{color: "grey"}}>/ dollar</span></Typography>
                    <Typography style={{color: "grey", fontSize: 14, fontStyle: "italic"}}>per day</Typography>
                  </div>
                </div>
              </div>
            </div>
            <table className={styles.tablecontainer}>
            <thead>
              <tr>
              <th className={styles.firstcolumn}>
                <Typography style={{color: "white", fontSize: "8px"}}>Icon</Typography>
              </th>
              <th className={styles.headermaincell}>

              </th>
              <th className={styles.headermaincell}>
                  <Typography style={{color: "white", fontSize: "14px"}}>LP</Typography>
              </th>
              <th className={styles.headermaincell}>
                  <Typography style={{color: "white", fontSize: "14px"}}>Trade</Typography>
              </th>
              <th className={styles.headermaincell}>
                  <Typography style={{color: "white", fontSize: "14px"}}>Referral</Typography>
              </th>
              <th className={styles.headerlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>Total</Typography>
              </th>
              </tr>
              </thead>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.bodyfirstcolumn}>
              <Typography style={{color: "white", fontSize: "14px"}}>1</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px"}}>Wallet Goes Here</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheadermaincell}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
              <td className={styles.bodyheaderlastcolumn}>
              <Typography style={{color: "white", fontSize: "14px", alignItems: "center"}}>100</Typography>
              </td>
            </tr>
          </table>
          </div>
          <div className={styles.verticalcards}>
            <div className={styles.verticalcard1}>
              <div className={styles.card1section1}>
                <Typography style={{color: "white", fontSize: "16px"}}>
                  My Points
                </Typography>
              </div>
              <div className={styles.card1section2}>
                <img src="Powerup-Wrapper-Yellow.png" height={30} width={35} />
                <Typography style={{color: "white", fontSize: "24px"}}>
                  100,000,000,000 <span style={{color: "grey", marginRight: 4}}>pts</span>
                </Typography>
                <img src="Powerup-Wrapper-Yellow.png" height={30} width={35} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}