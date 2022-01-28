type UserType = {
    name: string
    age: number
    address?: {title: string}
}

function icreaseAge(u: UserType) {
    u.age++;
}

test("reference type  test", () => {

    let user = {
        name: "Dimych",
        age: 32
    }

    icreaseAge(user)

    expect(user.age).toBe(33)

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000)
})

test("array reference test", () => {

    let users: UserType = {
        name: "Dimych",
        age: 32
    }

    let admins = users;

    admins.push({name: "Pavel", age: 25});

    expect(users[2]).toEqual({name: "Pavel", age: 25})
})

test("value test", () => {

    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount++;

    expect(usersCount).toBe(100)  /// примитивы не перенаправляет
})

test("reference type  test", () => {

    let user = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    //let addr = user.address;

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = "Gomel";

    expect(user.address).toBe(user2.address)
    expect(user2.address.title).toBe("Gomel")
})

test("reference type array test", () => {

    const address = {
        title: "Minsk"
    }

    let user = {
        name: "Dimych",
        age: 32,
        address: address
    }

    //let addr = user.address;

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [ user , user2 , {name: "Misha", age: 4 , address: address }]
    const admins = [ user , user2 ]

    admins[0].name = "Dmitriy"

    expect(users[0].name).toBe("Dmitriy")
    expect(user.name).toBe("Dmitriy")
})

test("sort", () => {

    const letters = ["a", "b", "c", "t", "y", "u"]

    letters.sort();

    expect(letters).toStrictEqual(["a", "b", "c", "t","u", "y" ])
})