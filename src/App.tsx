import React from 'react';
import './App.css';
import {Acordion} from "./Acordion/Acordion";
import {Rating} from "./Rating/Rating";
import OnOff from "./OnOff";

function App() {
    console.log("App rendering")
    return (
        <div>
            <OnOff/>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating />
            <Acordion titleValue={"Menu"} collapsed={true}/>
            <Acordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
        </div>

    );
};

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>

}

export default App;
