import React, {useState} from "react";

type ratingPropsType = {

}

export function Rating(props: ratingPropsType) {
    console.log("Rating rendering")

    let [value, setValue] = useState(0)

    return (
            <div>
                <Star selected={value > 0} onClick={() => {setValue(1)}}/>
                <Star selected={value > 1} onClick={() => {setValue(2)}}/>
                <Star selected={value > 2} onClick={() => {setValue(3)}}/>
                <Star selected={value > 3} onClick={() => {setValue(4)}}/>
                <Star selected={value > 4} onClick={() => {setValue(5)}}/>
            </div>
        );

}

function Star(props: any) {
    console.log("Star rendering")

    return <span onClick={props.onClick}>{props.selected ? <b>star </b>: "star "}</span>

}