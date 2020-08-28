var myObj = {
    name : "Sigit wasis subekti",
    age : 23,
    print : function() {
        console.log(this.name + ' is '+ this.age + " Years Old")
        // membuktikan bahwa this adalah object dan sama dengan variabel myObj
        console.log(this === myObj)
    }
}

myObj.print()