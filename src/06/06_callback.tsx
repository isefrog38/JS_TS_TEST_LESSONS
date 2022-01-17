import React, {ChangeEvent, MouseEvent} from "react";

setTimeout(() => {

}, 1000)

export const User = () => {

    const DeleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(`${event.currentTarget.name}`)
        // alert("User have been deleted")
    }
    const SaveUser = () => {
        alert("User have been save")
    }

    const onNameChenged = () => {
        console.log("name changed")
    }

    const onAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`${e.currentTarget.value}`)
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return (
        <div>
            <textarea
                onChange={onNameChenged}
                onBlur={focusLostHandler}>
                Dimych
            </textarea>
            <input onChange={onAgeChange} type="number"/>
            <button name={"Delete"} onClick={DeleteUser}>Delete</button>
            <button name={"Save"} onClick={DeleteUser}>Save</button>
        </div>
    )
}