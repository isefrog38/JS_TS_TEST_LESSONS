import {createGreetingMessage, ManType} from "./05_1";

let people:Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Penrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

beforeEach( () => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Penrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}]
})

test("should get array of greeting messages" ,() => {

    const message = createGreetingMessage(people)

    expect(message.length).toBe(3)
    expect(message[0]).toBe("Hello Andrew. Welcome to IT-Incubator")
    expect(message[1]).toBe("Hello Alexander. Welcome to IT-Incubator")
    expect(message[2]).toBe("Hello Dmitry. Welcome to IT-Incubator")
})