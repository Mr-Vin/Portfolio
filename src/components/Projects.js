
import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions, Divider } from '@mui/material';

import Button from '@mui/material/Button';

import TocIcon from '@mui/icons-material/Toc';
import WebIcon from '@mui/icons-material/Web';
import BrushIcon from '@mui/icons-material/Brush';
import AppsIcon from '@mui/icons-material/Apps';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';


const Header = () => {
    return (
        <Card sx={{
            width: 1300,
            alignItems: "right",
            justifyContent: "right",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            marginBottom: "100px",
            }}>
            <div style={{
                backgroundImage: `url('/images/projects-wallpaper.jpg')`,
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
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center",
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
                                width: "240px",
                            }}>
                                Projects
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
                                Working on minimalist and material designs, with passion for creating beautiful and functional user interfaces.
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
                                <b >Categories:</b> &emsp; Web Development,&ensp; UI/UX Design,&ensp; Applications,&ensp; App UI/UX,&ensp; Machine Learning,&ensp; Artificial Intelligence
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}


const ProjectsBox = () => {
    return (
        <div style={{width: '1300px', marginBottom: "100px"}}>
        <div style ={{justifyContent: 'left', alignItems: 'left',}}>
        <Typography variant="h1" sx={{color: 'black', fontFamily: 'Roboto, sans-serif', textAlign: 'left', fontWeight: '900', textShadow: "1px 1px 1px #800000", fontSize: "50px", width: "400px", }}>Web Development</Typography>
        </div>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '100px', marginLeft: '0px', marginBottom: "50px",}}>    
            <Box>
                <Card sx={{ maxWidth: '390px', minWidth: '390px', maxHeight: "356.8px", minHeight: "356.8px", borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Red, White, and Blue
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Portfolio Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            Red, White, and Blue by Mr Vin showcases my first web idea for a portfolio website.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Profile Punk
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Portfolio Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            Profile Punk by Mr Vin showcases a minimalist, and profile-centric design for a portfolio website.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px',  boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)',  }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Puzzle Pieces
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Portfolio Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            Puzzle Pieces by Mr Vin showcases a puzzle-themed design for a portfolio website.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    </div>
    )
}


const UiUxDesignBox = () => {
    return (
        <div style={{width: '1300px', marginBottom: "100px"}}>
        <div style ={{justifyContent: 'left', alignItems: 'left',}}>
        <Typography variant="h1" sx={{color: 'black', fontFamily: 'Roboto, sans-serif', textAlign: 'left', fontWeight: '900', textShadow: "1px 1px 1px #800000", fontSize: "50px", width: "295px", }}>UI/UX Design</Typography>
        </div>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '100px', marginLeft: '0px', marginBottom: "50px",}}>    
            <Box>
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Static Web Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Interactive Web Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px',  boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)',  }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Portfolio Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    </div>
    )
}

const ApplicationsBox = () => {
    return (
        <div style={{width: '1300px', marginBottom: "100px"}}>
        <div style ={{justifyContent: 'left', alignItems: 'left',}}>
        <Typography variant="h1" sx={{color: 'black', fontFamily: 'Roboto, sans-serif', textAlign: 'left', fontWeight: '900', textShadow: "1px 1px 1px #800000", fontSize: "50px", width: "280px", }}>Applications</Typography>
        </div>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '100px', marginLeft: '0px', marginBottom: "50px",}}>    
            <Box>
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Kalayaan Dorm App
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: School/ Utilities
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Web Game
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px',  boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)',  }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Mobile Game
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    </div>
    )
}

const AppUiUxBox = () => {
    return (
        <div style={{width: '1300px', marginBottom: "100px"}}>
        <div style ={{justifyContent: 'left', alignItems: 'left',}}>
        <Typography variant="h1" sx={{color: 'black', fontFamily: 'Roboto, sans-serif', textAlign: 'left', fontWeight: '900', textShadow: "1px 1px 1px #800000", fontSize: "50px", width: "250px", }}>App UI/UX</Typography>
        </div>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '100px', marginLeft: '0px', marginBottom: "50px",}}>    
            <Box>
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Mobile App Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Mobile App Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px',  boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)',  }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Mobile App Design
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    </div>
    )
}

const MachineLearningBox = () => {
    return (
        <div style={{width: '1300px', marginBottom: "100px"}} >
        <div style ={{justifyContent: 'left', alignItems: 'left',}}>
        <Typography variant="h1" sx={{color: 'black', fontFamily: 'Roboto, sans-serif', textAlign: 'left', fontWeight: '900', textShadow: "1px 1px 1px #800000", fontSize: "50px", width: "400px", }}>Machine Learning</Typography>
        </div>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '100px', marginLeft: '0px', marginBottom: "50px",}}>    
            <Box>
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Classification Problem
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Regression Problem
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px',  boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)',  }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Convolution Neural Network
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    </div>
    )
}

const ArtificialIntelligenceBox = () => {
    return (
        <div style={{width: '1300px', marginBottom: "100px"}}>
        <div style ={{justifyContent: 'left', alignItems: 'left',}}>
        <Typography variant="h1" sx={{color: 'black', fontFamily: 'Roboto, sans-serif', textAlign: 'left', fontWeight: '900', textShadow: "1px 1px 1px #800000", fontSize: "50px", width: "500px", }}>Artificial Intelligence</Typography>
        </div>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '100px', marginLeft: '0px', marginBottom: "50px",}}>    
            <Box>
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Natural Language Processing
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px', boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)', }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Natural Language Processing
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box >
                <Card sx={{ maxWidth: '390px', minWidth: '390px', borderRadius: '20px',  boxShadow: '7px 7px 10px rgba(0, 0, 0, 0.1)',  }}>
                    <CardMedia 
                        sx={{ height: 140 }}
                        component="img"
                        image="/images/web-dev.webp"
                        title="web dev wallpaper"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Maroon Code
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                            Category: Image Recognition
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: "10px" }}>
                            The Maroon Code is a website for UP Students to enhance their knowledge and improve performance in exams.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Expand
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    </div>
    )
}

const Navbar = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '30px',
            width: "150px",
            height: "700px",
            justifyContent: 'center',
            alignItems: 'left',
            marginLeft: "-60px",
        }}>
            <Button color="error" aria-label="contents" variant="contained" startIcon={<TocIcon />} sx={{width: "150px", }}>
                Contents
            </Button>
            <Box variant="outlined" color="success" aria-label="outlined primary button group" sx={{display: 'flex', flexDirection: "column", height: "400px", width: "150px", justifyContent: "space-evenly", marginTop: "30px", alignItems: "left",}}>
                <Button  aria-label="web development" href="#web-dev" onClick={() => window.scrollTo(0, 0)} variant="outlined" startIcon={<WebIcon />} sx={{ color:"#444444", border: "none", "&:hover": {background: "#444444"}, justifyContent: "left", textAlign: "left", }}>
                    Web Dev
                </Button>
                <Button aria-label="ui/ux design" href="#ui-ux" onClick={() => window.scrollTo(0, 0)} variant="outlined" startIcon={<BrushIcon />} sx={{ color:"#444444", border: "none", "&:hover": {background: "#444444"}, justifyContent: "left", textAlign: "left", }} >
                    Design
                </Button>
                <Button  aria-label="applications" href="#app" onClick={() => window.scrollTo(0, 0)} variant="outlined"  startIcon={<AppsIcon />} sx={{ color:"#444444", border: "none", "&:hover": {background: "#444444"}, justifyContent: "left", textAlign: "left", }} >
                    Apps
                </Button>
                <Button  aria-label="app ui/ux" href="#app-ui-ux" onClick={() => window.scrollTo(0, 0)} variant="outlined" startIcon={<PhoneAndroidIcon />} sx={{ color:"#444444", border: "none", "&:hover": {background: "#444444"}, justifyContent: "left", textAlign: "left", }} >
                    App UI/UX
                </Button>
                <Button  aria-label="machine learning" href="#ml" onClick={() => window.scrollTo(0, 0)} variant="outlined"  startIcon={<SettingsIcon />} sx={{ color:"#444444", border: "none", "&:hover": {background: "#444444"}, justifyContent: "left", textAlign: "left", }} >
                    Machine Learning
                </Button>
                <Button  aria-label="artificial intelligence" href="#ai" onClick={() => window.scrollTo(0, 0)} variant="outlined"  startIcon={<PsychologyIcon />} sx={{ color:"#444444", border: "none", "&:hover": {background: "#444444"}, justifyContent: "left", textAlign: "left", }} >
                    Artificial Intelligence
                </Button>
            </Box>
        </div>
    )
}



function Projects() {
    return (
        <div style={{
            margin: "0px",
            padding: "0px",
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{
                width: "350px",
                height: "80vh",
                display: 'grid',
                gridTemplateRows: '1fr 3fr 1fr',
                position: 'fixed',
                alignItems: 'left',
                justifyContent: 'center',
            }}>
                <div></div>
                <Navbar />
                <div></div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
                alignItems: 'left',
                paddingTop: '30px',
                width: "1400px",
                marginLeft: "350px",
            }}> 
            
                <Header />
                <div id="web-dev"><ProjectsBox /></div>
                <div id="ui-ux"><UiUxDesignBox /></div>
                <div id="app"><ApplicationsBox /></div>
                <div id="app-ui-ux"><AppUiUxBox /></div>
                <div id="ml"><MachineLearningBox /></div>
                <div id="ai"><ArtificialIntelligenceBox /></div>
            </div>
        </div>
    )
}

export default Projects;