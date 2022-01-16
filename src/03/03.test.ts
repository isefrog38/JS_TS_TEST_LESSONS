import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(()=>{
    student = {
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
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})


test("student should be made active", () => {
    expect(student.isActive).toBe(true)

    makeStudentActive(student)

    expect(student.isActive).toBe(false)
})

test("does student live in the city?", () => {

   let result1 = doesStudentLiveIn(student, "Moscow")
   let result2 = doesStudentLiveIn(student, "Brest")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})