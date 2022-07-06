const addd=require("./add")
const sub=require("./subtract")
const mul=require("./multiply")
const div=require("./divide")

function all(){
    console.log("Additation is:- "+addd())
    console.log("Substraction is:- "+ sub())
    console.log("Multiplaction is:- "+mul())
    console.log("Division is:- "+div())
    
}
all()