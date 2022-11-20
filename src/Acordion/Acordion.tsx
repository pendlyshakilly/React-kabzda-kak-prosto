import React, {useState} from "react";

type accordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setCollapsed:  React.Dispatch<React.SetStateAction<boolean>>
}

export function Acordion(props: accordionPropsType) {
    console.log("Acordion rendering")



    return <div>

        <Acordiontitle title={props.titleValue} onClick={() => {props.setCollapsed(!props.collapsed)}} collapsed={props.collapsed}/>
        { !props.collapsed && <Acordionbody/>}

    </div>

}

type accordionTitlePropsType = {
     title: string;
    onClick: (value: React.SetStateAction<boolean>) => void
    collapsed: boolean
 }

function Acordiontitle(props: accordionTitlePropsType) {
    console.log("Acordiontitle rendering")
    return <h3 onClick={() => {props.onClick(!props.collapsed)}}>-- {props.title} --</h3>
};

function Acordionbody() {
    console.log("Acordionbody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}