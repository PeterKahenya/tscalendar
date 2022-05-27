import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader"
// import NewTaskForm from "./components/NewTaskForm";
// import TaskList from "./components/TasksList";
import { getMonth } from "./util";
import { Grid,Button } from '@mui/material'




import { Routes, Route, Link, } from "react-router-dom";
const axios = require('axios');


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      currentMonth:new Date().getMonth(),
      currentYear:new Date().getFullYear(),

    }
  }


  prev(){
      this.setState({currentMonth:this.state.currentMonth-1})
  }
  next(){
    this.setState({currentMonth:this.state.currentMonth+1})
  }

  render(){
    const days = getMonth(this.state.currentMonth)
    const date = new Date(this.state.currentYear,this.state.currentMonth,1)
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()
    console.table(days)
    return(
      <div className="App">
        <h1> Welcome Back, This is TSCalendar </h1>
        <h3> {month} {year} </h3>
        <button onClick={this.prev.bind(this)}>Prev</button>
        <button onClick={this.next.bind(this)}>Next</button>
        <table>
          <thead>
              <tr>
                <th>SUN</th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THUR</th>
                <th>FRI</th>
                <th>SAT</th>
              </tr>
          </thead>
          <tbody>
        {days.map((week)=><tr key={week}>
          {
            week.map((day)=>{
              return <td key={day}>{day.getDate()}</td>
            })
          }
          </tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;