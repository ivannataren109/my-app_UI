import React from "react";


import Dashboard from '../shared/Dashboard';
// import {ColorsList, Dashboard} from '../shared/dashboard';
import skillsDetails from '../json/skillInfo.json';
import listOfPersonSkills from '../json/ivanSkills.json';

const Colors = [
    'red',
    'purple',
    'yellow',
    'orange',
    'green',
    'blue',
    'pink',
    'black',
    'grey'
    ];

const Home = () => {
return(
<>
    <h1 style={{textAlign: "center" }}>Welcome to the Home Page</h1>
    <Dashboard skills={listOfPersonSkills.skills} categoryList={skillsDetails.categories} proficiency_level={skillsDetails.proficiency_level}/>
</>
);
};

export default Home;