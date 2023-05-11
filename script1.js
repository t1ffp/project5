

function store(){ //stores items in the localStorage
   var type = document.getElementById('type').value;
   var amount = document.getElementById('amount').value;
    
    const list = {
       type: type,
       amount: amount,
       

    }

    window.localStorage.setItem("index_list",JSON.stringify(list)); 
    console.log(list)
}

document.querySelector("#submit").addEventListener("click", store())
