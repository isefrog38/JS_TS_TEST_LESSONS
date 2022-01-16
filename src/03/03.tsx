import {CityType, GovernmentBuildingType, HouseType, StudentType} from "../02/02"

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
student.technologies.push({
    id:new Date().getTime(),
    title: skill
})
}

export function makeStudentActive(student: StudentType) {
    student.isActive = false;
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
   return student.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    return building.budget += budget;
}

export const reparedHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export  function toFireStaff(governmentBuildingType: GovernmentBuildingType, staffCount: number){
    return governmentBuildingType.staffCount -= staffCount;
}

export function toHireStaff(governmentBuildingType: GovernmentBuildingType, hireStaff: number){
    return governmentBuildingType.staffCount += hireStaff;
}

export const createMessage = (props: CityType) => {
    return `Hello ${props.title} cityzens. I want you be happy. All ${props.citizensNumber} man.`;
}