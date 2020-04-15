import React from "react";

function ChoseUser (props) {
    return (
        <form>
            <input type="text" placeholder='Enter GitHub User ID' onSubmit={props.onSubmit} onChange={props.changeHandler}/>
            <button type='submit' onClick={props.onClick}>Get New GitHub User</button>
        </form>
    )

}

export default ChoseUser;