export type UserType = {
    name: string
    hair: number;
    address: { city: string, house?:number }
};
export type LapTopType = {
    title: string
};
export type UserWithLaptopType = UserType & {
    laptop: LapTopType
};
export type UserWithBooksType = UserType & {
    books: Array<string>
};
export type CompType = {
    id: number,
    title: string
};
export type WithCompaniesType = {
    companies: Array<CompType>
};

export function makeHairstyle (u: UserType, power: number) {
    return {
        ...u, hair: u.hair / power
    }
}
export function moveUser (u: UserWithLaptopType, Addresstitle: string) {
   return {...u, address: {...u.address, city: Addresstitle}}
}
export function upgradeUserLaptop (u: UserWithLaptopType, comp: string) {
    return {...u, laptop: {...u, title: comp}}
}
export function moveUserToOtherHouse (u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u, house: house}}
}
export function addNewBooksToUser (u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]}
}
export function updateBook (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return { ...u,  books:  u.books.map(e => e === oldBook ? newBook : e)}}
export function deleteBook (u: UserWithLaptopType & UserWithBooksType, deleteBook: string) {
    return { ...u,  books:  u.books.filter(e => e !== deleteBook)}}
export function companiesUsers (u: UserWithLaptopType & WithCompaniesType, idCompany: number , newTitle: string ) {
    return {
        ...u,
        companies: u.companies.map(e => e.id === idCompany ? {...e, title: newTitle} : e)
    }
}
export const updateCompaniesUsers = (companies: { [key: string]: Array<CompType> }, userName: string, idCompany: number, newTitle: string) => {
     let copyComp = {...companies};
            copyComp[userName]= copyComp[userName].map(c => c.id === idCompany ?
                    {...c, title: newTitle} : c)
return copyComp


}

let companies: { [key: string]: Array<CompType> } = {
    ["Dimych"] : [{id:1 , title: "EPAM"}, {id:2 , title: "IT-INCUBATOR"}],
    ["Artem"] : [{id:2 , title: "IT-INCUBATOR"}],
}

const copy = updateCompaniesUsers (companies, "Dimych", 1, "SoftSkills");

console.log(copy)