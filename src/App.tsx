import React, {useState} from 'react';
import './App.css';
import {Acordion} from "./Acordion/Acordion";
import {Rating} from "./Rating/Rating";
import OnOff from "./OnOff";

function App() {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <OnOff/>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating />
            <Acordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Acordion titleValue={"Users"} collapsed={collapsed} setCollapsed={setCollapsed}/>
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
