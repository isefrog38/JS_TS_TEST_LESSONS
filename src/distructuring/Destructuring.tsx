import React from "react";
type LessonsType = {title:string}
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {street: {title: 'Norvejskaja str'}}
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useState (message: string) {
    return [message , function () {}]
}

export const manComponent: React.FC<PropsType> = ({title, man, ...props}) => {
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
                {man.name}
                {props.car.model}
            </div>
        </div>
    )
}