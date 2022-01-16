export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address:AddressType
}

export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address:AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

type LocalCityType ={
    title: string
    countryTitle: string
}

type AddressTypes = {
    streetTitile: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressTypes
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1 ,
    name:"Pavel",
    age:25,
    isActive:true,
    address: {
        streetTitile: "Suvorova",
        city: {
            title:"Brest",
            countryTitle:"Belarus"
        }
    } ,
    technologies:[
        {
            id: 1,
            title:"HTML"
        },
        {
            id: 2,
            title:"HTML"
        },
        {
            id: 3,
            title:"HTML"
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].id)
