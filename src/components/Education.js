import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Card from '@mui/material/Card';


const Header = () => {
    return (
        <Card sx={{
            width: "1500px",
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginBottom: "100px",
            }}>
            <div style={{
                backgroundImage: `url('/images/education-wallpaper.png')`,
                height: "500px",
                display: 'flex',
                backgroundSize: "cover",
                backgroundPosition: "center",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
            }}>
                <div style={{
                    display: "flex",
                    alignContent: "left",
                    justifyContent: "left",
                    alignItems: "left",
                    width: "100%",
                }}>
                    <div style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "left",
                        alignItems: "left",
                        alignContent: "left",
                        height: '400px',
                        width: '100%',
                        borderRadius: "25px",
                        marginTop: "50px",
                    }}>

                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: "left", 
                            alignItems: "left",
                            padding: '37px',

                        }}>
                            <h1 style={{
                                color: "rgba(255, 255, 255, 1)",
                                fontFamily: "Roboto, sans-serif",
                                justifyContent: "left",
                                alignItems: "left",
                                fontSize: '64px',
                                width: "300px",
                            }}>
                                Education
                            </h1>
                            <div style={{
                                color: "rgba(255, 255, 255, 1)",
                                fontFamily: "Roboto, sans-serif",
                                justifyContent: "left",
                                alignItems: "left",
                                alignContent: "left",
                                textAlign: "left",
                                fontSize: "24px"
                            }}>
                                I like coding and Math.
                            </div>
                            <div style={{
                                color: "rgba(255, 255, 255, 1)",
                                fontFamily: "Roboto, sans-serif",
                                justifyContent: "left",
                                alignItems: "left",
                                alignContent: "left",
                                textAlign: "left",
                                fontSize: "16px",
                                marginTop: "30px",
                            }}>
                                "Don't chase success; chase excellence and success will chase you." &emsp; - Phunsukh Wangdu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}


const EducationsBox = () => {
    return (
        <div style={{
            marginBottom: "50px",
        }}>
            <div style={{
                padding: "10px",
            }}> 
                <Timeline position="alternate">
                    <TimelineItem sx={{width: "910px"}}>
                        <TimelineOppositeContent >
                            <div style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                alignContent: "center",
                                marginTop: "25px",

                            }}>
                            <div style={{
                                backgroundImage: "url('/images/UP-logo.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "150px",
                                width: "150px",
                                borderRadius: "50%",
                            }}></div>
                            <div style={{
                                backgroundImage: "url('/images/UP-School-of-Statistics-logo.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "150px",
                                width: "150px",
                                borderRadius: "25%",
                            }}></div>
                            </div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector color="primary" />
                        </TimelineSeparator>
                        <TimelineContent> 
                            <h2 style = {{
                                color: "rgba(0, 0, 0, 1)",
                                fontFamily: "Roboto, sans-serif",
                            }}>2019 - Present</h2> 
                            <h3 style = {{
                                color: "rgba(0, 0, 0, 1)",
                                fontFamily: "Roboto, sans-serif",
                            }}>University of the Philippines Diliman</h3>
                            <h4 style = {{
                                color: "rgba(0, 0, 0, 1)",
                                fontFamily: "Roboto, sans-serif",
                            }}>BS in Statistics</h4>
                            <p style = {{
                                color: "rgba(0, 0, 0, 1)",
                                fontFamily: "Roboto, sans-serif",
                            }}>Diliman, Quezon City 1101, Philippines</p>
                            <div style={{
                                height: "100px"
                            }}></div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem sx={{width: "910px"}}>
                        <TimelineOppositeContent>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            alignContent: "center",
                            width: "200px",
                            marginTop: "25px",
                        }}>
                            <div style={{
                                    backgroundImage: "url('/images/University-of-the-Philippines-High-School-in-Iloilo.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "150px",
                                    width: "150px",
                                    borderRadius: "50%",
                                }}></div>
                        </div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector color="secondary" />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h2 style = {{
                                color: "rgba(0, 0, 0, 1)",
                                fontFamily: "Roboto, sans-serif",
                            }}>2013 - 2019</h2>
                            <h3 style = {{
                                color: "rgba(0, 0, 0, 1)",
                                fontFamily: "Roboto, sans-serif",
                            }}>University of the Philippines High School in Iloilo</h3>
                            <h4 style = {{
                                color: "rgba(0, 0, 0, 1)",
                                fontFamily: "Roboto, sans-serif",
                            }}>High School</h4>
                            <p style = {{
                                color: "rgba(0, 0, 0, 1)",
                                fontFamily: "Roboto, sans-serif",
                            }}>Gen. Luna St., Iloilo City 5000, Philippines</p>
                            <div style={{
                                height: "100px"
                            }}></div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

function Education() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            paddingTop: '30px',
            width: "1850px",
            margin: "auto",
        }}> 
            <Header />
            <EducationsBox />
        </div>
    )
};

export default Education;