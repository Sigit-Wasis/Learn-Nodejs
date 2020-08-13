function Order(idOrder, timeOut) {
	console.log("ID Order "+idOrder);
	ProsesOrder(idOrder, timeOut)	
}

function ProsesOrder(idOrder, timeOut) {
	setTimeout(function(){
		console.log("ID Order "+ idOrder + " Processed")
	}, timeOut);
}

Order(101, 5000);
Order(102, 3000);
Order(103, 2000);

// Hasil
/*
ID Order 101
ID Order 102
ID Order 103
ID Order 101Processed
ID Order 102Processed
ID Order 103Processed

*/