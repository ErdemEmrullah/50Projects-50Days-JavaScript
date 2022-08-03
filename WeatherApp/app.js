const url = "https://api.openweathermap.org/data/2.5/";
const key= "14674f2130e83fc4b8098bbc8c036c19";


const setQuery= (e)=>{
    if(e.keyCode == "13"){
        getResult(searchBar.value);
        console.log("tıklandi");
    }

    else if(e.keyCode == "8"){
        let length = String(searchBar.value)
       if(length.length==0){
        console.log("kelime silindi")
       }
    }
}

const getResult = (cityName) => {
    let query=`${url}weather?q=${cityName}&units=metric&lang=TR&appid=${key}`;
    console.log(query);
    fetch(query).then((weather)=> {
        return weather.json()}).then(displayResult)}

const searchBar= document.getElementById("searchbar");
searchBar.addEventListener("keyup",setQuery);
const displayResult= (result) => {
    console.log(result.message);
    if(result.message!= null){
        document.querySelector(".city").innerText="Bulunamadı";
        return;
        
    }
    document.querySelector(".city").innerText =`${result.name} ${result.sys.country}`
    let description = String(result.weather[0].description);
    description = description.toUpperCase();
    document.querySelector(".desc").innerText = `${description}`
    
    document.querySelector(".temp").innerText=`Şuanki Sıcaklık:${result.main.temp} °C`
    document.querySelector(".min").innerText=`Minimum Derece ${result.main.temp_min} °C`
    document.querySelector(".max").innerText=` Maksimum Derece ${result.main.temp_max} °C`
}