import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const Header = ({buttonState, handleClick, handleDetails, detailsState}) => {
    return (
        <Card sx={{
            width: "1500px",
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
            marginBottom: "25px",
            borderBottom: "1px solid red",
            }}>
            <div style={{
                backgroundImage: `url('/images/achievements-wallpaper.jpg')`,
                height: "500px",
                display: 'flex',
                backgroundSize: "cover",
                backgroundPosition: "center",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
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
                                width: "420px",
                            }}>
                                Achievements
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
                                I have been fortunate to have been a part of some amazing teams and projects.
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
                                <b >Categories:</b> &emsp; Data Science,&ensp; Machine Learning,&ensp; Hackathons,&ensp; Stats and Maths,&ensp; Web Development,&ensp; Open Source,&ensp; and more.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",

            }}>
            <ButtonGroup color="error" sx={{height: "50px"}} variant="outlined" aria-label="outlined button group">
                <Button sx={{width: "100px"}}
                    color="error"
                    variant={buttonState.allButton ? "contained" : "outlined"}
                    onClick={() => handleClick('allButton')}
                >All</Button>
                <Button 
                    color="error"
                    variant={buttonState.dataScienceButton ? "contained" : "outlined"}
                    onClick={() => handleClick('dataScienceButton')}
                >Data Science</Button>
                <Button
                    color="error"
                    variant={buttonState.machineLearningButton ? "contained" : "outlined"}
                    onClick={() => handleClick('machineLearningButton')}
                >Machine Learning</Button>
                <Button
                    color="error"
                    variant={buttonState.hackathonsButton ? "contained" : "outlined"}
                    onClick={() => handleClick('hackathonsButton')}
                >Hackathons</Button>
                <Button
                    color="error"
                    variant={buttonState.statsAndMathsButton ? "contained" : "outlined"}
                    onClick={() => handleClick('statsAndMathsButton')}
                >Stats and Maths</Button>
                <Button
                    color="error"
                    variant={buttonState.webDevelopmentButton ? "contained" : "outlined"}
                    onClick={() => handleClick('webDevelopmentButton')}
                >Web Development</Button>
                <Button
                    color="error"
                    variant={buttonState.openSourceButton ? "contained" : "outlined"}
                    onClick={() => handleClick('openSourceButton')}
                >Open Source</Button>
                <Button
                    color="error"
                    variant={buttonState.otherButton ? "contained" : "outlined"}
                    onClick={() => handleClick('otherButton')}
                >Others</Button>
            </ButtonGroup>
            <Button onClick={() => handleDetails()} variant="text" color="primary" sx={{textAlign: 'right', justifyContent:'right', alignContent: 'right', marginRight: "20px", fontSize: '12px', }}>{detailsState ? 'Collapse Icons' : 'Expand Icons'}</Button>
            </div>
        </Card>
    )
}



const awardsDetails = [
    {title: "1st Place, Havaianas Data Science Competition", 
    dateAwarded: "2023", 
    description: "Curate a resolution about sales using Havaianas dataset from 2010-2020", 
    image: "/images/web-dev.webp", 
    link: "",
    key: "0",
    category: ["all", "data science", "machine learning",]
},
    {title: "1st Place, Havaianas Data Science Competition", 
    dateAwarded: "2023", 
    description: "Curate a resolution about sales using Havaianas dataset from 2010-2020", 
    image: "/images/web-dev.webp", 
    link: "",
    key: "1",
    category: ["all", "data science", "machine learning", "hackathons",]
},
    {title: "1st Place, Havaianas Data Science Competition", 
    dateAwarded: "2023", 
    description: "Curate a resolution about sales using Havaianas dataset from 2010-2020", 
    image: "/images/web-dev.webp", 
    link: "",
    key: "2",
    category: ["all", "data science", "stats and maths", ]
},
    {title: "1st Place, Havaianas Data Science Competition", 
    dateAwarded: "2023", 
    description: "Curate a resolution about sales using Havaianas dataset from 2010-2020", 
    image: "/images/web-dev.webp", 
    link: "",
    key: "3",
    category: ["all", "open source", "other"],
},
    {title: "1st Place, Havaianas Data Science Competition", 
    dateAwarded: "2023", 
    description: "Curate a resolution about sales using Havaianas dataset from 2010-2020", 
    image: "/images/web-dev.webp", 
    link: "",
    key: "4",
    category: ["all", "web development",],
},
]


const AchievementsBox = ({awards, buttonState, detailsState}) => {

    for (const [key, value] of Object.entries(buttonState)) {
        if (value === true) {
            var trueValue = [key]
        }
    }
    console.log(buttonState)
    const buttonValues = [
        {"allButton":"all"},
        {"dataScienceButton":"data science"},
        {"machineLearningButton":"machine learning"},
        {"hackathonsButton":"hackathons"},
        {"statsAndMathsButton":"stats and maths"},
        {"webDevelopmentButton":"web development"},
        {"openSourceButton":"open source"},
        {"otherButton":"other"},

    ]
    console.log(buttonValues)
    console.log(buttonValues[0].hasOwnProperty(trueValue[0]))
    for (let i = 0; i < buttonValues.length; i++) {
        if (buttonValues[i].hasOwnProperty(trueValue[0])) {
            var trueValueKey = buttonValues[i][trueValue[0]]
        }
    }
    const filterAwards = (awards, trueValueKey) => {
        const filteredAwards = awards.filter((award) => {
            if (award.category.includes(trueValueKey)) {
            return true
            }
            return false
        })
        return filteredAwards
    }

    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyContent: "flex-start",
            marginTop: "50px",
            marginBottom: "50px",
            alignItems: "center",
            justifyItems: "center",
        }}>
            {filterAwards(awards, trueValueKey).map((award) => (
                <Card key={award.key} sx={{ maxWidth: '300px', minWidth: '300px', minHeight: detailsState ? "500px" : "350px", maxHeight: detailsState ? "500px": "350px", flexBasis: "25%", marginTop: "25px", marginBottom: "25px",}}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image={award.image}
                        title="web dev wallpaper"
                    />
                    <CardContent sx={{minHeight: detailsState ? "270px" : "125px", maxHeight: detailsState ? "270px" : "125px"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {award.title}
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            {award.dateAwarded}
                        </Typography>
                        <Divider />
                        {detailsState &&
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            {award.description}
                        </Typography>
                        }
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" component={Link} to={award.link}>
                            Details
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}




function Achievements() {
    const [buttonState, setButtonState] = useState(
        JSON.parse(localStorage.getItem('buttonState')) || {
            allButton: true,
            dataScienceButton: false,
            machineLearningButton: false,
            hackathonsButton: false,
            statsAndMathsButton: false,
            webDevelopmentButton: false,
            openSourceButton: false,
            otherButton: false,
        }
    );

    const [detailsState, setDetailsState] = useState(false);

    const handleDetails = () => {
        setDetailsState(!detailsState);
    };

    useEffect(() => {
        localStorage.setItem('buttonState', JSON.stringify(buttonState));
    }, [buttonState]);

    const handleClick = (button) => {
        let updatedButtonState = {};
        Object.keys(buttonState).forEach((key) => {
            updatedButtonState[key] = key === button;
        });
        setButtonState(updatedButtonState);

    };


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
            <Header buttonState={buttonState} handleClick={handleClick} handleDetails={handleDetails} detailsState={detailsState} />
            <div style={{
                marginBottom: "100px",
                width: "1550px",
            }}>
                <AchievementsBox awards={awardsDetails}  buttonState={buttonState} detailsState={detailsState} />
            </div>
        </div>
    )
};

export default Achievements;