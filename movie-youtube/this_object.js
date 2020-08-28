var myObj = {
    name : "Sigit wasis subekti",
    age : 23,
    print : function() {
        console.log(this.name + ' is '+ this.age + " Years Old")
        // membuktikan bahwa this adalah object dan sama dengan variabel myObj
        console.log(this === myObj)
    }
}

function myFunction() {
    console.log('This is My Function');
    console.log(this === global)
}

myObj.print()
console.log('------------')
myFunction();

/* 
    object this ini adalah cara kita mengakses property atau key didalam objek itu sendiri.
    ----------------------------------------------------------------------------------------

    jadi kesimpulannya jika kita mendefinisikan sebuah objek yang berisikan index sebagai function 
    maka untuk mengakses index-index yang lain kita butuh keyword yang nama this dimana this ini 
    mengacu pada object itu sendiri.
 */