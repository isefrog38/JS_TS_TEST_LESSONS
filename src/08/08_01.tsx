export const u = ['Dimych', 'Natasha', 'Valera', 'Katya'];


export const usersObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya",
}

type UsersType = {
[key: string]: {id: number , name: string}
}

// usersArrayAssocial
const users: UsersType = {
    "101": {id: 101, name: "Dimych"},
    "1012323": {id: 1012323, name: "Natasha"},
    "1212": {id: 1212, name: "Valera"},
    "1": {id: 1, name: "Katya"},
}

//users[1]
let user = {id: 100500, name: "Igor"}
users[user.id] = user;
delete users[user.id]
users[user.id].name = "Vitya";



export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 1012323, name: "Natasha"},
    {id: 1212, name: "Valera"},
    {id: 1, name: "Katya"},
]

const i = usersArray.find(u => u.id === 1)
// let usersCopy = [...usersArray.filter(), user]
// let users = usersArray.filter(u => u.id !== user.id)
