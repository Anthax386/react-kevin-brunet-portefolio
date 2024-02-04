export function switchState(state, setState){
    if(state) {
        setState(false)
    } else {
        setState(true)
    }
}