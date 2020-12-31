import React from 'react';
import Headerconnect from './headerconnect';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Avatar, Divider } from '@material-ui/core';

const dataDummy = [
    { 1: "1", role: "Admin" },
    { 1: "2", role: "member" },
    { 1: "3", role: "member" },
    { 1: "4", role: "member" },
    { 1: "5", role: "member" },
    { 1: "6", role: "member" },
    { 1: "7", role: "member" },
    { 1: "8", role: "member" }
]

export default function Participants() {

    return (
        <div>
            <Headerconnect />
            <div >
                <Typography variant="h6" style={{ color: "grey", marginTop: "4vh", marginLeft: "4vw" }}>GROUP ADMIN</Typography>

                {

                    dataDummy.map((data) => {

                        if (data.role === "Admin") {
                            return (

                                <Card style={{ margin: "1vw 4vw", padding: "0.5rem", maxWidth: "40%" }}>
                                    <div style={{ display: "flex", justifyContent: 'space-around' }}>
                                        <Avatar></Avatar>
                                        <div>
                                            <Typography style={{ marginLeft: "0.7em", fontSize: "0.95em", fontWeight: 'bold' }}>TED - Ed</Typography>
                                            <Typography style={{ marginLeft: "1.1em", fontSize: "12px", fontWeight: "100" }}>youtube.com</Typography>
                                        </div>
                                        <div>
                                            <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>84</Typography>
                                            <Typography style={{ marginLeft: "1.2em", fontSize: "12px", fontWeight: "100" }}>Articles</Typography>
                                        </div>
                                        <div>
                                            <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>202K</Typography>
                                            <Typography style={{ marginLeft: "1.5em", fontSize: "12px", fontWeight: "100" }}>Followers</Typography>
                                        </div>
                                        <div>
                                            <button style={{ border: "none", backgroundColor: 'aliceblue', color: "blue", fontSize: "0.75em", padding: "12px", marginTop: "5px", borderRadius: "3px", cursor: "pointer" }}>Message</button>
                                        </div>
                                    </div>

                                </Card>
                            );
                        }
                    })
                }
            </div>

            <Divider variant="fullWidth" style={{ marginTop: "0.5rem" }} />

            <div style={{ display: "flex", flexFlow: "wrap" }}>

                {
                    dataDummy.map((data => {
                        if (data.role === "member") {
                            return (
                                <Card style={{ margin: "1vw 4vw", padding: "0.5rem", width: "40%" }}>

                                    <div style={{ display: "flex", justifyContent: 'space-around' }}>
                                        <Avatar></Avatar>
                                        <div>
                                            <Typography style={{ marginLeft: "0.7em", fontSize: "0.95em", fontWeight: 'bold' }}>TED - Ed</Typography>
                                            <Typography style={{ marginLeft: "1.1em", fontSize: "12px", fontWeight: "100" }}>youtube.com</Typography>
                                        </div>
                                        <div>
                                            <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>84</Typography>
                                            <Typography style={{ marginLeft: "1.2em", fontSize: "12px", fontWeight: "100" }}>Articles</Typography>
                                        </div>
                                        <div>
                                            <Typography style={{ marginLeft: "1.7em", fontSize: "0.95em", fontWeight: 'bold' }}>202K</Typography>
                                            <Typography style={{ marginLeft: "1.5em", fontSize: "12px", fontWeight: "100" }}>Followers</Typography>
                                        </div>
                                        <div>
                                            <button style={{ border: "none", backgroundColor: 'aliceblue', color: "blue", fontSize: "0.75em", padding: "12px", marginTop: "5px", borderRadius: "3px", cursor: "pointer" }}>Message</button>
                                        </div>
                                    </div>

                                </Card>

                            );
                        }
                    }))
                }
            </div>

        </div>
    );
}