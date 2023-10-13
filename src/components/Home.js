import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { IconButton, Button, Tooltip } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FunctionsIcon from '@mui/icons-material/Functions';
import PublicIcon from '@mui/icons-material/Public';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';






const ProfileBox = () => {
    return (
        <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: '400px',
            width: '1000px',
            borderRadius: "25px",
            marginTop: "50px",
        }}>
            <div>
                <img src="/images/profile-pic.jpeg" alt="profile" style={{
                    height: '200px',
                    width: '200px',
                    borderRadius: '50%',
                    border: '5px solid #ffffff',
                    marginTop: '-100px',
                }}/>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center", 
                alignItems: "center",
                padding: '37px',

            }}>
                <h1 style={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    Hi! I'm Vin!
                </h1>
                <div style={{
                    color: "rgba(255, 255, 255, 1)",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    textAlign: "center",
                }}>
                    I am a 4th year undergraduate student from University of the Philippine - Diliman.
                    I am currently studying Statistics and I am interested in Web Development and Data Science.
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",

            }}>
                <IconButton color="primary" aria-label="facebook-profile" component="label">
                    <FacebookIcon />
                </IconButton>
                <IconButton color="primary" aria-label="instagram-profile" component="label">
                    <InstagramIcon />
                </IconButton>
                <IconButton color="primary" aria-label="twitter-profile" component="label">
                    <TwitterIcon />
                </IconButton>
                <IconButton color="primary" aria-label="linkedin-profile" component="label">
                    <LinkedInIcon />
                </IconButton>
                <IconButton color="primary" aria-label="github-profile" component="label">
                    <GitHubIcon />
                </IconButton>
            </div>
        </div>
    )
}

const SkillsBox = () => {
    return (
        <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: '400px',
            width: '1000px',
            borderRadius: "25px",
            marginTop: "50px",
        }}>
            <div>
                <div style={{
                    marginTop: "-110px",
                }}>
                    <h1 style={{
                        color: "rgba(255, 255, 255, 1)",
                        fontFamily: "Roboto, sans-serif",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        fontSize: '72px',
                        textShadow: "7px 7px 7px red",
                        width: '600px',
                    }}>
                        Skills
                    </h1>  
                </div>
                <div style={{
                    padding: "10px",
                    display: 'flex',
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}> 
                    <div style={{
                        marginRight: "70px",
                        alignContent: "center",
                        alignItems: "center",
                    }}>
                    <h3 style={{
                        fontFamily: "Roboto, sans-serif",
                        textAlign: "center",
                        marginTop: "10px",
                        color: "red",
                    }}>FRONTEND</h3>
                    <div style={{
                        color: "rgba(255, 255, 255, 1)",
                        fontFamily: "Roboto, sans-serif",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                    }}>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> HTML5 </div>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> CSS3 </div>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> ReactJS </div>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> NextJS </div>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> Material UI </div>
                    </div>
                    </div>
                    <div style={{
                        marginLeft: "70px",
                        alignContent: "center",
                        alignItems: "center",
                    }}>
                    <h3 style={{
                        fontFamily: "Roboto, sans-serif",
                        textAlign: "center",
                        marginTop: "10px",
                        color: "red",
                    }}>BACKEND</h3>
                    <div style={{
                        color: "rgba(255, 255, 255, 1)",
                        fontFamily: "Roboto, sans-serif",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> Python </div>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> SQL </div>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> Django </div>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> SQLite </div>
                        <div style={{ marginTop: "10px", fontFamily: "Roboto, sans-serif", textAlign: "center"}}> MySQL </div>
                    </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                }}>
                    <Button color="primary" variant="text" style={{
                        fontFamily: "Roboto, sans-serif", textAlign: "center", marginTop: "35px", marginBottom: "20px"
                    }}>
                        Expand
                        </Button>
                </div>
            </div>
        </div>
    )
}

const ProficienciesBox = () => {
    return (
        <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            height: '400px',
            width: '1000px',
            borderRadius: "25px",
            marginTop: "50px",
        }}> 
            <div>
                <div style={{
                    marginTop: "-125px",
                    marginBottom: "75px",
                }}>
                    <h1 style={{
                        color: "rgba(255, 255, 255, 1)",
                        fontFamily: "Roboto, sans-serif",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        fontSize: '72px',
                        textShadow: "7px 7px 7px red",
                    }}>
                        Proficiencies
                    </h1>  
                </div>
                <div style={{
                    padding: "10px",
                }}> 
                    <div style={{
                        display: 'flex',
                        color: "rgba(255, 255, 255, 1)",
                        fontFamily: "Roboto, sans-serif",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",

                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            margin: "10px",
                        }}>
                            <PublicIcon />
                            <h4 style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                                marginTop: "20px",
                                color: "red",
                            }}>
                                Web Development
                            </h4>
                            <p style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                            }}>Full-stack</p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            margin: "10px",
                        }}>
                            <DesignServicesIcon />
                            <h4 style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                                marginTop: "20px",
                                color: "red",
                            }}>
                                UI/UX Design
                            </h4>
                            <p style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                            }}>Canva and Dribbble</p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            margin: "10px",
                        }}>
                            <StorageIcon />
                            <h4 style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                                marginTop: "20px",
                                color: "red",
                            }}>
                                Database Management
                            </h4>
                            <p style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                            }}>SQLite and MySQL</p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            margin: "10px",
                        }}>
                            <DataObjectIcon />
                            <h4 style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                                marginTop: "20px",
                                color: "red",
                            }}>
                                Machine Learning
                            </h4>
                            <p style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                            }}>Python and R</p>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            margin: "10px",
                        }}>
                            <FunctionsIcon />
                            <h4 style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                                marginTop: "20px",
                                color: "red",
                            }}>
                                Data Analysis
                            </h4>
                            <p style={{
                                fontFamily: "Roboto, sans-serif",
                                textAlign: "center",
                            }}>MS Excel, R, and SAS </p>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                }}>
                    <Button color="primary" variant="text" style={{
                        fontFamily: "Roboto, sans-serif", textAlign: "center", marginTop: "20px", marginBottom: "20px"
                    }}>
                        Expand
                        </Button>
                </div>
            </div>
        </div>

    )
}



const WelcomeBox = () => {
    const components = [ProficienciesBox, ProfileBox, SkillsBox]
    const [currentIndex, setCurrentIndex] = useState(1)

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % components.length)
    }

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + components.length) % components.length)
    }

    const CurrentContent = components[currentIndex]

    return (
        <Card sx={{
            width: 1700,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
            marginBottom: "70px",
            boxShadow: "7px 7px 7px rgba(0, 0, 0, 0.3)",
            }}>
            <div style={{
                backgroundImage: `url('/images/background.jpg')`,
                height: "800px",
                display: 'flex',
                backgroundSize: "cover",
                backgroundPosition: "center",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
            }}>
                <div style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Tooltip title={currentIndex === components.length - 1 ? "profile" : "proficiencies"} placement="top">
                    <IconButton color="primary"  aria-label="previous" component="label" onClick={handlePrevClick} style={{
                        visibility: currentIndex === 0 ? "hidden" : "visible"
                    }}>
                        <ArrowBackIosIcon />
                    </IconButton >
                </Tooltip>
                <CurrentContent />
                <Tooltip title={currentIndex === 0 ? "profile" : "skills"} placement="top">
                    <IconButton color="primary" component="label" aria-label="next" onClick={handleNextClick} style={{
                        visibility: currentIndex === components.length - 1 ? "hidden" : "visible"
                    }}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Tooltip>
                </div>
            </div>
        </Card>
    )
}



function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '30px',
        }}>
            <WelcomeBox />
        </div>
    )
}

export default Home
