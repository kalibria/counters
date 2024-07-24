import {ErrorReducer, setMaxValueErrorAC, setStartValueErrorAC} from "./errorReducer";

let initErrors = {
    startValueError: "",
    maxValueError: ""
}


beforeEach(() => {
    initErrors = {
        startValueError: "",
        maxValueError: ""
    }
})

test("max value error should be set",()=>{
    const error = ErrorReducer(initErrors,setMaxValueErrorAC("error"))

    expect(error.maxValueError).toBe('error');
    expect(error.startValueError).toBe(false)
})

test("start value error should be set",()=>{
    const error = ErrorReducer(initErrors,setStartValueErrorAC('error'))

    expect(error.startValueError).toBe('error');
    expect(error.maxValueError).toBe(false)
})