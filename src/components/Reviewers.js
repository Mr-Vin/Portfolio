import React from 'react';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import PushPinSharpIcon from '@mui/icons-material/PushPinSharp';


const Header = () => {
    return (
        <div style={{
            display: "flex",
            alignContent: "left",
            justifyContent: "left",
            alignItems: "left",
            width: "100%",
            marginBottom: "100px",
        }}>
            <div style={{
                backgroundImage: "url('/images/reviewers-wallpaper.jpg')",
                display: 'flex',
                flexDirection: "column",
                justifyContent: "left",
                alignItems: "left",
                alignContent: "left",
                height: '250px',
                width: '100%',
                borderRadius: "25px",
            }}>

                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "left", 
                    alignItems: "left",
                    padding: '10px',
                    marginLeft: "30px",

                }}>
                    <h1 style={{
                        color: "rgba(255, 255, 255, 1)",
                        fontFamily: "Roboto, sans-serif",
                        justifyContent: "left",
                        alignItems: "left",
                        fontSize: '64px',
                        width: "320px",
                    }}>
                        Reviewers
                    </h1>
                    <div style={{
                        color: "rgba(255, 255, 255, 1)",
                        fontFamily: "Roboto, sans-serif",
                        justifyContent: "left",
                        alignItems: "left",
                        alignContent: "left",
                        textAlign: "left",
                        fontSize: "16px",
                        marginTop: "10px",
                    }}>
                        In life, we learn from our mistakes. But in programming, we learn from our mistakes and from other people's mistakes.
                    </div>
                </div>
            </div>
        </div>
    )
}

const statistics = [{
    topic: "Descriptive Statistics", 
    subtopics: ["Fields of Statistics", "Basic Terms", "Data Collection", "Data Presentation", "Data Description", "Data Measurement", "Exploratory Data Analysis (EDA)"]
},
{
    topic: "Inferential Statistics",
    subtopics: ["Random Experiment", "Random Variable", "Common Distributions", "Asymptotic Theories", "Statisic from ANY Distibution", "Multivariable distriibutions"]
},
{
    topic: "Inferential Statistics (Applications)",
    subtopics: ["Confidence Intervals", "Hypothesis Testing", "Test for Indpendence", "Regression Analysis", "ANOVA", "Nonparametric Tests"]
},
{
    topic: "Probability Theory I",
    subtopics: ["Basic Concepts", "Concept of a Random Variable", "Common Univariate Distributions", "Distribution of Fxn of a Random Variable"]
},
]






const ReviewersBox = ({subject}) => {
    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            justifyContent: "flex-start",
            marginTop: "50px",
            marginBottom: "50px",
          }}>
            {subject.map((stats) => (
            <div style={{
                position: "relative",
            }}>
                <div style={{
                  position: "absolute",
                  top: "10px",
                  left: "45%",
                  transform: "translateX(-50%)",
                  zIndex: "2",
                }}>
                  <PushPinSharpIcon fontSize= "large" sx={{transform: "rotate(30deg)"}}/>
                </div>
              <Card key={stats.topic} sx={{ maxWidth: "360px", minWidth: '250px', flexBasis: "25%", marginTop: "25px", marginBottom: "10px", justifyContent: "left", alignItems: "left", alignContent: "left", position: "relative"}}>
                <h3 style={{marginTop: "23px", marginLeft: "10px", position: "relative", zIndex: "1"}}>{stats.topic}</h3>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  textAlign: "left",
                  margin: "0px",
                }}>
                  {stats.subtopics.map((subtopic) => (
                    <Button>{subtopic}</Button>
                  ))}
                </div>
              </Card>
            </div>
            ))}
          </Box>
          
          
          
    )
}



function Reviewers() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: "1650px",
            margin: "auto",
        }}> 
            <Header />

            <div style={{
                marginBottom: "100px",
                width: "1550px",
                position: "relative",
                marginLeft: "25px",
            }}>
                <h1 style={{
                    color: "rgba(0, 0, 0, 1)",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "left",
                    alignItems: "left",
                    fontSize: '42px',
                    width: "1525px",
                }}>
                    Statistics
                </h1>
                <ReviewersBox subject={statistics} />
                <h1 style={{
                    color: "rgba(0, 0, 0, 1)",
                    fontFamily: "Roboto, sans-serif",
                    justifyContent: "left",
                    alignItems: "left",
                    fontSize: '42px',
                    width: "1525px",
                }}>
                    Computer Science
                </h1>
                <ReviewersBox subject={statistics} />
            </div>
        </div>
    )
};

export default Reviewers;