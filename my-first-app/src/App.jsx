import React,{ Component } from "react";
import './NavBar';
import NavBar from "./NavBar";
import { MainContent } from "./MainContent";

export  class App extends Component{

    render(){
        return(

            <React.Fragment>
                <NavBar />
                <MainContent />

            </React.Fragment>
        );
    }
}