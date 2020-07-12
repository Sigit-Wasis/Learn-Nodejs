// Variable Javascript
var satu = 30;
var dua = 50;
var tiga = satu + dua; 
console.log("Penjumlahan antara "+ satu +" dan "+ dua +" adalah "+ tiga);


// Pengkondisian If
var nim = 11118989989;
if (nim == 11118989989) {
	console.log('Sigit wasis subekti');
} else {
	console.log('Bukan Sigit wasis subekti');
}


// Percabangan Switch
var nis = "Anak pertama";

switch(nis) {
	case "Anak pertama" : 
		console.log('Sigit wasis');
		break;
	case "Anak kedua" :
		console.log('Dwi nur hamid');
		break;
	default :
		console.log('Bukan siapa siapa.....');
}



// Pengulangan For
var n = 10;

for (var i = 0; i <= n; i++) {
	console.log("Perulangan ke " + i);
}



// Pengulangan while 
var a = 10;
var b = 0;

while(b < a) {
	console.log('Perulangan ke ' + b);
	b++;
}



// Array 
var arr = [10, 20, 30];

// menampilkan kesulurahan isi array
console.log(arr);

// menampilkan sesuai index yang dipanggil
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}



// JSON (JavaScript Object Notation) adalah sebuah format data yang digunakan untuk pertukaran dan penyimpanan data.
var json = [
	{
		name : "Sigit wasis subekti",
		age : 19
	}, 
	{
		name : "Dwi nur hamid",
		age : 5
	}
];

// mengambil data name dan age pada json 
for (var i = 0; i < json.length; i++) {
	console.log(json[i].name +" ==> "+ json[i].age);
}



// Function Javascript
function MyFunction() {
	console.log("Im a Function");
}

MyFunction();

// atau 

function FunctionKu() {
	return "Ini adalah Function Ku";
}

console.log(FunctionKu());
