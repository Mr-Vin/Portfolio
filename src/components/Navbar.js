import React from 'react';
import Button from '@mui/material/Button';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import IconButton from '@mui/material/IconButton';

import { Link } from 'react-router-dom';

const ProjectsButton = ( { handleNavClick, navState }) => {
    return (
        <div>
             <Button type="button" sx={{color: navState.projects ? "red" : '#000000', '&:hover': {color: "red"}}} component={Link} to="/projects" onClick={() => handleNavClick("projects")}>Projects</Button>
        </div>
    )
}

const ExperienceButton = ( { handleNavClick, navState }) => {
    return (
        <div>
            <Button type="button" sx={{color: navState.experience ? "red" : '#000000', '&:hover': {color: "red"}}} component={Link} to="/experience" onClick={() => handleNavClick("experience")}>Experience</Button>
        </div>
    )
}

// const AchievementsButton = ( { handleNavClick, navState }) => {
//     return (
//         <div>
//             <Button type="button" sx={{color: navState.achievements ? "red" :'#000000', '&:hover': {color: "red"}}} component={Link} to="/achievements" onClick={() => handleNavClick("achievements")}>Achievements</Button>
//         </div>
//     )
// }

const EducationButton = ( { handleNavClick, navState }) => {
    return (
        <div>
            <Button type="button" sx={{color: navState.education ? "red" : '#000000', '&:hover': {color: "red"}}} component={Link} to="/education" onClick={() => handleNavClick("education")}>Education</Button>
        </div>
    )
}

// const CertificatesButton = ( { handleNavClick, navState }) => {
//     return (
//         <div>
//             <Button type="button" sx={{color: navState.certificates ? "red" : '#000000', '&:hover': {color: "red"}}} component={Link} to="/certificates" onClick={() => handleNavClick("certificates")}>Certificates</Button>
//         </div>
//     )
// }

// const ReviewersButton = ( { handleNavClick, navState }) => {
//     return (
//         <div>
//             <Button type="button" sx={{color: navState.reviewers ? "red" : '#000000', '&:hover': {color: "red"}}} component={Link} to="/reviewers" onClick={() => handleNavClick("reviewers")}>Reviewers</Button>
//         </div>
//     )
// }

const Profile = ( { handleNavClick, navState }) => {
    return (
        <div>
            <IconButton aria-label="home" color= {navState.home ? "error": "#000000"} sx={{'&:hover': {color: "red"}}} component={Link} to="/" onClick={() => handleNavClick("home")} >
                <AccountCircleRoundedIcon />
            </IconButton>
        </div>
    )
}

const About = ( { handleNavClick, navState }) => {
    return (
        <div>
            <Button type="button" sx={{color: navState.about ? "red" : '#000000', '&:hover': {color: "red"}}} component={Link} to="/about" onClick={() => handleNavClick("about")}>About</Button>
        </div>
    )
}

function Navbar( { handleNavClick, navState } ) {
    return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        paddingRight: '20px',
        paddingTop: '30px',
        paddingBottom: '20px',
    }}>
    <div></div>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        {/* <AchievementsButton handleNavClick={handleNavClick} navState={navState}/> */}
        <Profile handleNavClick={handleNavClick} navState={navState}/>
        <About handleNavClick={handleNavClick} navState={navState}/>
        <ProjectsButton handleNavClick={handleNavClick} navState={navState}/>
        <EducationButton handleNavClick={handleNavClick} navState={navState}/>
        <ExperienceButton handleNavClick={handleNavClick} navState={navState}/>
        {/* <CertificatesButton handleNavClick={handleNavClick} navState={navState}/> */}
        {/* <ReviewersButton handleNavClick={handleNavClick} navState={navState}/> */}
    </div>
    <div>
    </div>  
    </div>
    )
}

export default Navbar;


