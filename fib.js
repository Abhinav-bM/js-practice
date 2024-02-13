function reverse (str){
    if(str === '' || str.length === 1){
        return str
    }

    return reverse(str.substr(1)) + str.charAt(0)
}



console.log(reverse("helo"))



