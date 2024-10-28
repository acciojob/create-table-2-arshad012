function createTable() {
    //Write your code here
	let rows = prompt('Input number of rows');
	let columns = prompt('Input number of columns');

	const table = document.getElementById('myTable');
	for(let i=1; i<=rows; i++) {
		let tr = document.createElement('tr');
		for(let j=1; j<=columns; j++) {
			let td = document.createElement('td');
			td.innerText = `Row-${i-1} Column-${j-1}`;
			tr.append(td);
		}
		table.append(tr);
	}
}
