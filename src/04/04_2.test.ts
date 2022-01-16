import {CityType} from "../02/02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                },
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                },
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            }
],
        governmentBuildings: [
            {
            type: "HOSPITAL",
                address: {street: {title:"Central Str"}, number: 12},
                budget: 200000, staffCount: 200
            },{
            type: "FIRE-STATION",
                address: {street: {title:"South Str"}, number: 12},
                budget: 500000, staffCount: 1000
            }
        ],
        citizensNumber: 1000000
}
})


