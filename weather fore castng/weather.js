const inpt = document.querySelector(".inpt"),
search_icon = document.querySelector(".ic"),
temprature = document.querySelector(".temp_val"),
City = document.querySelector(".city"),
wind_speed = document.querySelector(".wind_speed"),
humi_val = document.querySelector(".humi_val")

inpt_data = ""
search_icon.addEventListener("click", ()=>{
    inpt_data = inpt.value
    fetchdata(inpt_data)
    inpt.value = ""
})

async function fetchdata(inpt_city){
    try{

        const fetching = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpt_city}&appid=46ecdf2bd8648bfbe7481689ecbcffd9`)
        const data= await fetching.json()
        console.log(data);
        temprature.innerHTML = parseInt(data.main.temp)-273
        wind_speed.innerHTML = parseInt(data.wind.speed)
        humi_val.innerHTML = data.main.humidity
        City.innerHTML = inpt_city
    }
    catch{
        alert("City name not found. Please provide valid City name")
        inpt.value = ""
    }
    

}
(function featchlivelocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
})()

async function onSuccess(position){
    const {latitude, longitude} = position.coords
    const live_data =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=46ecdf2bd8648bfbe7481689ecbcffd9`)
    const json_livedata = await live_data.json()
    fetchdata(json_livedata.name);
}
function onError(){

}