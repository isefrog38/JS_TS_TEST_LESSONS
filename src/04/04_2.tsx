import {CityType, GovernmentBuildingType} from "../02/02";

export function demolishHousesOnTheStreet (city: CityType, street: string) {
    city.houses = city.houses.filter( h => h.address.street.title !== street)
}
/*

export function getHousesOnTheStreet = (city: CityType, street: string) => {
   city.houses = city.houses.filter( h => h.address.street.title === street )
}*/


export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, staffCount: number) => {
    return buildings.filter( sc => sc.staffCount >= staffCount );
}