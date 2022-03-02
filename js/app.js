
const searchPhone = ()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
  if(searchText.length == ''){
    const div = document.createElement('div');
    div.innerHTML = `
     
     <h1 class = "text-center text-white" > No Result Found 404 </h1>
   
    `
  }else{
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchField(data.data.slice(0,20)));
  }
    
    
    
    
}


// show data from  ui with arrow function
const displaySearchField = phones =>{
    // console.log(phones)
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = ''; 
    const searchResult = document.getElementById('searchResult-showDiv');
    searchResult.textContent = '';
    if(phones.length == 0){
      const div = document.createElement('div');
      div.innerHTML = `
       
       <h1 class = "text-center text-white" > No Result Found 404 </h1>
     
      `
      searchResult.appendChild(div);
    }
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
    console.log(details);
    // erore handl releaseDate
    let relMsg = '';
    if(details.releaseDate == ''){
      relMsg = "Release Date Not Found"
    }else{
      relMsg = details.releaseDate;
    }

    // erore handle others
    
   const otherMsg = details.others  ?  details.others.Bluetooth  : 'pawa jai nai';
   console.log(otherMsg)
    const phoneDetails = document.getElementById('phone-details');
    // phoneDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    phoneDetails.innerHTML = `
    <figure class="figure">
      <img src="${details.image}" class="figure-img img-fluid rounded sagor2 " alt="...">
   </figure>
      <div class="card-body ">
      <p class="card-text"><span class="fs-5"> Release Date : </span>${relMsg}</p>
    
      <p class="card-text"><span class="fs-5"> Storage : </span>${details.mainFeatures.storage}</p>
      <p class="card-text"><span class="fs-5"> Displaysize : </span> ${details.mainFeatures.displaySize}</p>
      <p class="card-text"><span class="fs-5"> Chipset : </span> ${details.mainFeatures.chipSet}</p>
      <p class="card-text fs-4"> Sensors  </p>
      <p class="card-text"> ${details.mainFeatures.sensors[0]} ,<span> ${details.mainFeatures.sensors[1]}</span>,<span>${details.mainFeatures.sensors[2]}</span> ,<span>${details.mainFeatures.sensors[3]} </span>, <span>${details.mainFeatures.sensors[4]} </span></p>
      <p class="card-text fs-4"> Others </p>
      
      <p class="card-text"><span class="fs-5"> Bluetooth : </span> ${otherMsg}</p>

     </div>
    `
    
    
   phoneDetails.appendChild(div);
}



