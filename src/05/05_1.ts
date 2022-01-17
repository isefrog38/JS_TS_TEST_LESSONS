export type ManType = {
    name: string
    age: number
}

const people:Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Penrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dimichTransformator = (man: ManType) => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

const dev1 = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: 'Ivanov'
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander", lastName: "Penrov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }
]

const dev2 = [
    dimichTransformator(people[0]),
    dimichTransformator(people[1]),
    dimichTransformator(people[2]),
]

const dev3 = people.map(dimichTransformator)
const dev4 = people.map( man => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const message = people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

}



