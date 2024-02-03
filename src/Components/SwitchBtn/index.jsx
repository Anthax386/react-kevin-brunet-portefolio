import { useState } from "react";

export default function SwitchBtn(){


    const [isChecked, setChecked] = useState(false)

    function checkSwitch(){
        const check = document.querySelector('#check')
        const body = document.querySelector('#body')
        if(isChecked === true) {
            setChecked(false)
            check.style.animation="uncheck 300ms ease-in-out forwards"
            body.classList.remove('dark')
        } else {
            setChecked(true)
            check.style.animation="check 300ms ease-in-out forwards"
            body.classList.add('dark')
        }
    }

    return (
        <div className="switch-bloc">
            <p>Mode sombre</p>
            <div onClick={() => checkSwitch()} className="switch">
                {(isChecked)
                    ? <div className="check checked"><span className="checkIn" id="check"></span></div>
                    : <div className="check unchecked" ><span className="checkIn" id="check"></span></div>
                }
            </div>
        </div>
    )
}