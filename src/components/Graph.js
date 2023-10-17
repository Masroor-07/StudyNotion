import React from 'react';
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip} from "recharts"



const classes = [
    {
        course:"Python",
        students:13,
        fees:"30$",
    },
    {
        course:"JS",
        students:15,
        fees:"12$",
    },
    {
        course:"PHP",
        students:5,
        fees:"10$",
    },
    {
        course:"java",
        students:10,
        fees:"50$",
    },
    {
        course:"C++",
        students:20,
        fees:"40$",
    },
    

    
];

function Graph(){
    return(
        
        <ResponsiveContainer width="50%"  aspect={2} >
        <BarChart data={classes} width ={400} height={400} >
            
        <Bar dataKey="course" fill='aqua'/>
        <Bar dataKey="students" fill='aqua'/>
        <XAxis dataKey="course" />
        <YAxis dataKey="students"/>
        <Tooltip/>
        
        </BarChart>
        </ResponsiveContainer>
        


    )
    
    
    
    
    
};

export default Graph;

