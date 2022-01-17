import {CityType, GovernmentBuildingType, HouseType} from "../02/02";

export const getStreetsTitleOfGovermentBuildings = (governmentBuildings: Array<GovernmentBuildingType>) => {
    return governmentBuildings.map( s => s.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {
   return houses.map( h => `Hello guys from ${h.address.street.title}`)
}