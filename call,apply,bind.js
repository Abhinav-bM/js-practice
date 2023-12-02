function fullName (state, distric){
    console.log(this.firstName + " " + this.lastname + " " + "from" + " " + state + "," + distric);
}

const name1 = {
    firstName : "Abhinav",
    lastname : "B Manoj"
}
// call Method
fullName.call(name1, "Kerala", "Kozhikode")

// apply method
fullName.apply(name1, ["Kerala", "kozhikode"])

// bind mehtod

let bindedfullName = fullName.bind(name1, "Kerala", "Kozhikode")
bindedfullName()

