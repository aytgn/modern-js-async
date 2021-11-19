//listen events on buttons
document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomer(event) {
  //create a new request instance
  const xhr = new XMLHttpRequest();
  //get request, to customer.json , async(true)
  xhr.open("GET", "customer.json", true); //state 1  = connection
  //the function assigned to onload, will only run on load!
  xhr.onload = function () {
    //xhr has a status value, we should check if status 200 which is okay response from server
    if (this.status === 200) {
      //xhr has response text value, updated onload at bg
      // responseText is string but we want it to use it as a object!
      const customer = JSON.parse(this.responseText);
      console.log(customer);
      //create an output
      const output = `
      <ul>
      <li>ID:${customer.id}</li>
      <li>Name:${customer.name}</li>
      <li>Company:${customer.company}</li>
      <li>Phone:${customer.phone}</li>
      </ul>
      `;
      //show that output by modifying empty div under the relevant heading
      document.getElementById("customer").innerHTML = output;
    }
  };
  //state 4 = ready to go!
  xhr.send();
}
function loadCustomers(event) {
  //create a xhr instance
  const xhr = new XMLHttpRequest();
  //GET request, to customers.json, async
  xhr.open("GET", "customers.json", true);
  //when response arrive
  xhr.onload = function () {
    //if response is okay
    if (this.status === 200) {
      //create customers array
      //since response is string, convert them to object
      const customers = JSON.parse(this.responseText);
      console.log(customers);
      let bigOutPut;
      customers.forEach(function (customer) {
        const output = `
        <ul>
        <li>ID:${customer.id}</li>
        <li>Name:${customer.name}</li>
        <li>Company:${customer.company}</li>
        <li>Phone:${customer.phone}</li>
        </ul>
        `;
        bigOutPut += output;
      });
      document.getElementById("customers").innerHTML = bigOutPut;
    }
  };
  xhr.send(); // send the f**ing request
}
