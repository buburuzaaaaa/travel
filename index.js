class list {
    constructor(firstName, lastName, birth, departure, arrival, dateLeaving, dateArriving, bagAmount, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.brith = birth;
        this.departure = departure;
        this.arrival = arrival;
        this.dateLeaving = dateLeaving;
        this.dateArriving = dateArriving;
        this.bagAmount = bagAmount;
        this.id = id;
    }
}
 
arr = [
]
let count = 1;
 
function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birth = document.getElementById("birth").value;
    let departure = document.getElementById("departure").value;
    let arrival = document.getElementById("arrival").value;
    let dateLeaving = document.getElementById("dateLeaving").value;
    let dateArriving = document.getElementById("dateArriving").value;
    let bagAmount = document.getElementById("bagAmount").value;
    if (firstName != "" && lastName != "") {
        let temp = new list(firstName, lastName, birth, departure, arrival, dateLeaving, dateArriving, bagAmount, count);
        count++;
        arr.push(temp);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("birth").value = "";
        document.getElementById("departure").value = "";
        document.getElementById("arrival").value = "";
        document.getElementById("dateLeaving").value = "";
        document.getElementById("dateArriving").value = "";
        document.getElementById("bagAmount").value = "";
        document.getElementById('people').innerHTML
                = `Name:${temp.firstName} ${temp.lastName}
                Birth:${temp.birth} 
                Departure:${temp.departure} 
                Departure Date:${dateLeaving}
                Arrival:${temp.arrival} 
                Arrival Date:${dateArriving}
                Bag Amount:${bagAmount}`;
        
    }
    
    console.log(arr)
}
// work in progress
// function populate() {
//     var select = document.getElementById("selectNumber");
//     select.innerHTML = `<option>Choose a number</option>`
//     for (var i = 0; i < arr.length; i++) {
//         select.innerHTML += `<option value = "${arr[i].firstName}">${arr[i].firstName}</option>`
//     }
// }