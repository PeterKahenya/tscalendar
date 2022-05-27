import React, { Component } from 'react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import TasksList from "../components/TasksList";

const tasks = [
    {
        id:"001",name:"test task",description:"test task description",start_time:"08:08",end_time:"09:00"
    }
]

test("Renders Correctly",()=>{
    renderer.create(<TasksList tasks={tasks}/>)
})