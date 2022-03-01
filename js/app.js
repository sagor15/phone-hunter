


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
    .then(infor=> displayPhoneDetails(infor.data));
}











// display phone details 
const displayPhoneDetails = details =>{
    console.log(details.image);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card')
    phoneDetails.innerHTML = `
    <img src="${details.image}" class="card-img-top img-fluid w-50 mx-auto" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    `

   phoneDetails.appendChild(div);
}