import React from "react";

type accordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

export function Acordion(props: accordionPropsType) {
    console.log("Acordion rendering")

       if(props.collapsed === true) {
        return <Acordiontitle title={props.titleValue}/>
       }else{
        return(
           <div>
            <Acordiontitle title={props.titleValue}/>
           <Acordionbody/>
           </div>
               )
       }


}

type accordionTitlePropsType = {
    title: string;
}

function Acordiontitle(props: accordionTitlePropsType) {
    console.log("Acordiontitle rendering")
    return <h3>-- {props.title} --</h3>
};

function Acordionbody() {
    console.log("Acordionbody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}