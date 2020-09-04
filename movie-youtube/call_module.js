var name = "Sigit wasis subekti";
var age = 19;
var hobby = "Futsal";

function Print()
{
    console.log(" nama: " + name +  " umur: " + age + " hobi: " + hobby);
}

module.exports.name = name;
module.exports.age = age;
module.exports.hobby = hobby;
module.exports.print = Print();