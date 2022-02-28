


// searchField and load data with search button

const searchPhone = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchField(data.data));
}

// show data from  ui with arrow function

const displaySearchField = phones =>{
    // console.log(phones)
    const searchResult = document.getElementById('searchResult-showDiv');
    phones.forEach(phone=>{
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4>${phone.brand}</h4>
              <h5 class="card-title "> ${phone.phone_name}</h5>
              <p>${phone.slug}</p>
              <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-outline-dark">Details Phones</button>
            </div>
          </div>
        `
        searchResult.appendChild(div);
    });
}


// load phone details
const loadPhoneDetails = id => {
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    // console.log(url); 
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayPhoneDetails(data));
}


// display phone details 
const displayPhoneDetails = details =>{
    console.log(details.data);
    const phoneDetails = document.getElementById('phone-detail');
    details.forEach(detail=>{
        const div = document.createElement('div');
        div.classList.add('col-md-5');
        div.innerHTML = `
        <img src="${detail.image}" class="img-fluid rounded-start" alt="...">
        
        `
        phoneDetails.appendChild(div);
    })
}