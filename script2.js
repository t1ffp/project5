/* document.getElementById('expForm').addEventListener('submit', addTransaction);
// initial array of transactions, reading from localStorage
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(e) {
  e.preventDefault();
  // get type, name, and amount
  let type = document.getElementById('type').value;
  let amount = document.getElementById('amount').value;
  let grocery = document.getElementById('grocery').value;
  let transport = document.getElementById('transport').value;
  let take = document.getElementById('take').value;
  let ent = document.getElementById('ent').value;
  let school = document.getElementById('school').value;
  let med = document.getElementById('med').value;
  let other = document.getElementById('other').value;

  if (type.length > 0
  	&& amount > 0
    && grocery > 0
    && transport > 0
    && take > 0
    && ent > 0
    && school > 0
    && med > 0
    && other > 0) {
    const transaction = {
      type,
      amount,
      grocery,
      transport,
      take,
      ent,
      school,
      med,
      other,
      id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1,
    }
    transactions.push(transaction);
    // localStorage 
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
  document.getElementById('expForm').reset();
  showTransactions();
  updateBalance();
}
const showTransactions = () => {
  const transactionTable = document.getElementById('transactionTable');
  transactionTable.innerHTML = '';
  for (let i = 0; i < transactions.length; i++) {
    transactionTable.innerHTML += `
          <tr>
              <td>${transactions[i].type}</td>
              <td>$${transactions[i].amount}</td>
              <td>${transactions[i].grocery}</td>
              <td>${transactions[i].transport}</td>
              <td>${transactions[i].take}</td>
              <td>${transactions[i].ent}</td>
              <td>${transactions[i].school}</td>
              <td>${transactions[i].med}</td>
              <td>${transactions[i].other}</td>
              
          </tr>
      `;
  }
}
*/ 


/*const click = document.getElementById('submit');
if (click){
	click.addEventListener('click', addData);
}

const arr = new Array();

function addData(){
    DeleteData();
    getData();

    arr.push({
    	type:document.getElementById('type').value,
    	amount:document.getElementById('amount').value,
    	grocery:document.getElementById('grocery').value,
    	transport:document.getElementById('transport').value,
    	take:document.getElementById('take').value,
    	ent:document.getElementById('ent').value,
    	school:document.getElementById('school').value,
    	med:document.getElementById('med').value,
    	other:document.getElementById('other').value,
    });

    localStorage.setItem("localData", JSON.stringify(arr));
}

function getData(){
    var str = localStorage.getItem("localData");
}

function DeleteData(){
localStorage.clear();
}



window.onload =function(){
	    var arr1 = new Array();
	    arr1 = JSON.parse(localStorage.getItem("localData"));

	    var tbl = document.getElementById('tb');

	const arr = undefiined;
	let arrLength = undefiined;
	    if (arr) {
  			arrLength = arr.length;
		}

	    for(i = 0; i < arr1.length; i++){
	        var r = tbl.insertRow();
	        var cell1 = r.insertCell();
	        var cell2 = r.insertCell();
	        var cell3 = r.insertCell();
	        var cell4 = r.insertCell();
	        var cell5 = r.insertCell();
	        var cell6 = r.insertCell();
	        var cell7 = r.insertCell();
	        var cell8 = r.insertCell();
	        var cell9 = r.insertCell();


	        cell1.innerHTML = arr1[i].type;
	        cell2.innerHTML = arr1[i].amount;
	        cell3.innerHTML = arr1[i].grocery;
	        cell4.innerHTML = arr1[i].transport;
	        cell5.innerHTML = arr1[i].take;
	        cell6.innerHTML = arr1[i].ent;
	        cell7.innerHTML = arr1[i].school;
	        cell8.innerHTML = arr1[i].med;
	        cell9.innerHTML = arr1[i].other;
	    }

	}
	*/

function store(){ //stores items in the localStorage
   // var type = document.getElementById('type').value;
   // var amount = document.getElementById('amount').value;
    var grocery = document.getElementById('grocery').value;
    var transport = document.getElementById('transport').value;
    var take = document.getElementById('take').value;
    var ent = document.getElementById('ent').value;
    var school = document.getElementById('school').value;
    var med = document.getElementById('med').value;
    var other = document.getElementById('other').value;
 //   var key = document.getElementById('key').value; //gets the key from the user

    const list = {
      //  type: type,
      //  amount: amount,
        grocery: grocery,
        transport: transport,
        take: take,
        ent: ent,
        school: school,
        med: med,
        other: other,

    }

    window.localStorage.setItem("p2_list",JSON.stringify(list)); 
    console.log("store)")
}

function retrieveRecords(){ //retrieves items in the localStorage
    console.log(localStorage.getItem("index_list"))

}

retrieveRecords()


document.querySelector("#submit").addEventListener("click", store())
