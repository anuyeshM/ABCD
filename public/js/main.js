const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.getElementById("datahide");

const getInfo=(event)=>{
    event.preventDefault();
  let cityName = cityName.value;
  if(cityVal === ""){
      city_name.innerText = "Please write before you search"
      datahide.classList.add('data_hide');
  }
  else{
      try{
    let url = "https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=thermap.org/data/2.5/weather?q=pune&units=metric&appid=a1b332337059745f678fd1dab98894f1"
    const respond = await fetch(url);
    const data = await respond.json();
    const arrData = [data];
    console.log(data);
      city_name.innerText = '${arrData[0].name}, ${arrData[0].sys.country}';
      temp_real_val.innerText = arrData[0].main.temp; 
      temp_status.innerText = arrData[0].weather[0].temp;
      const tempMood = arrData[0].weather[0].main;
      if(tempMood == 'Sunny'){
        temp_status.innerHTML = '<i class="fas fa-sun" style="color:yellow"></i>'
    }
    else if(tempMood == 'Clouds'){
        temp_status.innerHTML = '<i class="fas fa-sun" style="color:yellow"></i>'
    }
    else if(tempMood = 'Rainy'){
        temp_status.innerHTML = '<i class="fas fa-sun" style="color:yellow"></i>'
    }
    else{
        temp_status.innerHTML = '<i class="fas fa-sun" style="color:yellow"></i>'
    }  
      }
     catch{
        city_name.innerText = "Plz enter the city name properly"
        datahide.classList.add('data_hide');
     } 

  }
}
submitBtn.addEventListener('click',getInfo);
