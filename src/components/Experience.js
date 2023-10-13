import React from 'react';

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
                backgroundImage: `url('/images/experience-wallpaper.jpg')`,
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
                                width: "100%",
                            }}>
                                Experience
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
                                I have a talent at teaching and explaining complex concepts, 
                                especially in Math and Physics. Sometimes, I offer free tutorials
                                to my friends and classmates. But, my greatest asset is always my curiosity.
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
                                "The mediocre teacher tells. The good teacher explains. The superior teacher 
                                demonstrates. The great teacher inspires." &emsp; - William A. Ward
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const ExperienceBox = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            paddingTop: '30px',
            width: "1300px",
            marginBottom: "200px",
        }}>
            <div style={{
                marginBottom: "100px",
            }}>
                <h3 style={{
                    color: "red",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "left",
                    alignItems: "left",
                    fontSize: '40px',
                    width: "1200px",
                    marginTop: "50px",
                }}>
                    Tutor /&emsp; <a href="https://www.facebook.com/Brainshield" style={{color: "red", fontSize: "35px", textDecoration: "none"}}>Brainshield Tutorial and Learning Center</a>
                </h3>
                <div style={{
                    color: "rgba(0, 0, 0, 1)",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "left",
                    alignItems: "left",
                    alignContent: "left",
                    textAlign: "left",
                    fontSize: "24px",
                    marginTop: "30px",
                    width: "1200px",
                }}>
                    2018 - 2019 
                </div>
                <div style={{
                    color: "rgba(0, 0, 0, 1)",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "left",
                    alignItems: "left",
                    fontSize: '16px',
                    marginTop: "25px",
                    width: "1200px",
                }}>
                    Versatile and highly competent freelance tutor with a strong track record 
                    of successfully teaching statistics, advanced algebra, basic calculus, elementary 
                    physics, and elementary chemistry to senior high school up to first year college 
                    students. Proficient in developing customized teaching approaches to meet the unique 
                    needs of each student and maximize their learning potential. Equipped with excellent 
                    communication and analytical skills, and passionate about helping students achieve 
                    their academic goals.
                </div>
            </div>
            <div className="custom-underline" width="800px"></div>
            <div style={{
                marginBottom: "50px",
            }}>
                <h3 style={{
                    color: "red",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "left",
                    alignItems: "left",
                    fontSize: '40px',
                    width: "1200px",
                    marginTop: "50px",
                }}>
                    Freelance Tutor /&emsp; <button style={{background: "none", border: "none", cursor: "pointer", color: "red", fontSize: "35px", textDecoration: "none", fontWeight: "700", }}>Self-employed</button>
                </h3>
                <div style={{
                    color: "rgba(0, 0, 0, 1)",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "left",
                    alignItems: "left",
                    alignContent: "left",
                    textAlign: "left",
                    fontSize: "24px",
                    marginTop: "30px",
                    width: "1200px",
                }}>
                    2016 - 2019
                </div>
                <div style={{
                    color: "rgba(0, 0, 0, 1)",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "left",
                    alignItems: "left",
                    fontSize: '16px',
                    marginTop: "25px",
                    width: "1200px",
                }}>
                    Experienced tutor with expertise in teaching math, chemistry, and physics 
                    to elementary up to junior high school students. Skilled in developing personalized lesson 
                    plans to improve students' understanding and confidence in these subjects. 
                    Passionate about helping students achieve academic success and equipped with 
                    excellent communication and problem-solving skills.
                </div>
            </div>
        </div>
    )
}

function Experience() {
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
            <ExperienceBox />
        </div>
    )
};

export default Experience;