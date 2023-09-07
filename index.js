function store(){
    car = {
        brand:carbrand.value,
        price:carprice.value,
        key:carkey.value
    }
    if(carkey.value in localStorage) {
        alert('Already exists')
    }
    else{
        localStorage.setItem(car.key,JSON.stringify(car));
        alert('Car added successfully')   
    }
}

function retrieve(){
    x = retrievekey.value;
    if (x in localStorage) {
        car = JSON.parse(localStorage.getItem(x));

        result.innerHTML = `<b class="fs-5">Car Name: ${car.brand}</b>`
    }
    else{
        result.innerHTML = "";
        alert('Not found');
    }
}

function remove(){
    y = removekey.value
    if (y in localStorage) {
        localStorage.removeItem(y)
        alert('Remove item successfully')
    }
    else{
        alert('Not found')
    }
}

function clearall(){
    localStorage.clear();
    alert('All item removed')
}