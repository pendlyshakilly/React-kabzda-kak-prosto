import React from 'react';
import './App.css';
import {Acordion} from "./Acordion/Acordion";
import {Rating} from "./Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Acordion titleValue={"Menu"} collapsed={true}/>
            <Acordion titleValue={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>

    );
};

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>

}

export default App;
