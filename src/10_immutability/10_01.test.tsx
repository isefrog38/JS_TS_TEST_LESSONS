import {
    addNewBooksToUser, companiesUsers, CompType, deleteBook,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, updateBook, updateCompaniesUsers,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";




test("reference type test", () => {
    let user: UserType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Mirskaja"
        },
    }

    const awesomeUser = makeHairstyle(user, 2);

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)

});

test("change address", () => {
    let users: UserWithLaptopType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Mirskaja",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser (users, "Kiev");


    expect(users).not.toBe(movedUser)
    expect(users.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe(movedUser.address.city)
    expect(users.laptop).toBe(movedUser.laptop)


});

test("upgrade laptop to macbook", () => {
    let users: UserWithLaptopType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Mirskaja",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = upgradeUserLaptop (users, "Macbook");


    expect(users).not.toBe(movedUser)
    expect(movedUser.laptop.title).toBe(movedUser.laptop.title)
    expect(users.address).toBe(movedUser.address)
    expect(users.laptop).not.toBe(movedUser.laptop)
    expect(movedUser.laptop.title).toBe("Macbook")
    expect(users.laptop.title).toBe("ZenBook")
})

test("upgrade laptop to macbook", () => {
    let users: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const updateUser = moveUserToOtherHouse (users, 99);

    expect(users).not.toBe(updateUser)
    expect(updateUser.books).toBe(updateUser.books)
    expect(users.laptop).toBe(updateUser.laptop)
    expect(users.address).not.toBe(updateUser.address)
    expect(updateUser.address.house).toBe(99 )
})

test("add new books to user", () => {
    let users: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Mirskaja",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const updateUser = addNewBooksToUser (users, "ts");

    expect(users).not.toBe(updateUser)
    expect(users.laptop).toBe(updateUser.laptop)
    expect(users.address).toBe(updateUser.address)
    expect(users.books).not.toBe(updateUser.books)
    expect(updateUser.books[4]).toBe("ts")
    expect(users.books.length).toBe(4)
})

test("update js to ts",() => {
    let users: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Mirskaja",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const updateUser = updateBook (users,"js", "ts");

    expect(users).not.toBe(updateUser)
    expect(users.laptop).toBe(updateUser.laptop)
    expect(users.address).toBe(updateUser.address)
    expect(users.books).not.toBe(updateUser.books)
    expect(updateUser.books[2]).toBe("ts")
    expect(users.books.length).toBe(4)
})

test("delete Book",() => {
    let users: UserWithLaptopType & UserWithBooksType = {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Mirskaja",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const updateUser = deleteBook (users,"js");

    expect(users).not.toBe(updateUser)
    expect(users.laptop).toBe(updateUser.laptop)
    expect(users.address).toBe(updateUser.address)
    expect(users.books).not.toBe(updateUser.books)
    expect(updateUser.books[2]).toBe("react")
    expect(users.books.length).toBe(4)
})

test("Companies",() => {
    let users: UserWithLaptopType & WithCompaniesType= {
        name: "Andrey",
        hair: 32,
        address: {
            city: "Mirskaja",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [{id: 1, title: "Epam"}, {id: 2, title: "IT-Incubator"}]
    }

    const updateUser = companiesUsers (users, 1 ,"SoftSkills");

    expect(users).not.toBe(updateUser)
    expect(users.laptop).toBe(updateUser.laptop)
    expect(users.address).toBe(updateUser.address)
    expect(users.companies).not.toBe(updateUser.companies)
    expect(updateUser.companies[0].title).toBe("SoftSkills")
})

test("update Companies",() => {

    let companies: { [key: string]: Array<CompType> } = {
        "Dimych" : [{id:1 , title: "EPAM"}, {id:2 , title: "IT-INCUBATOR"}],
        "Artem" : [{id:2 , title: "IT-INCUBATOR"}],
    }

    const copy =  updateCompaniesUsers (companies, "Dimych", 1, "SoftSkills");

   expect (copy).toBeDefined()
    expect(copy).not.toBe(companies)
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dimych"][0].title).toBe("SoftSkills")

})