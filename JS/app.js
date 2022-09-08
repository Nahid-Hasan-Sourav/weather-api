console.log("Connected")

const api_key='41f6c489a4eeb2f8bbe6af40f51b84e8';
const loadData = async(city) => {
    
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    try{
        const res=await fetch(url);
        const data=await res.json();
        displayData(data);
    }
    catch(error){  
         console.log("Error Msg",error); 
        }
    
}

const showDataById = (id,text) => {
   const findTag= document.getElementById(id)
   findTag.innerHTML = text;
}


const displayData = (data) =>{
    const div=document.getElementById("info-showing");
    const cityFoundMsg=document.getElementById("city-not-found");
    if(data.cod=='404'){
        div.classList.add("d-none");
        cityFoundMsg.innerText=data.message;
    }
    else{
        div.classList.remove("d-none")
        // cityFoundMsg.classList.add("d-none");
        cityFoundMsg.innerText='';
       
    }
    console.log(data.cod);
    console.log(data.message);
//    let size = Object.keys(data).length;
//     console.log("Length: " ,  size);
    showDataById("city-name",data.name)
    showDataById("temperature",data.main.temp)
    showDataById("weather-condition",data.weather[0].main)
}

const inputField=document.getElementById("input-field");
document.getElementById("search-btn").addEventListener("click", function(e) {
    const fieldValue= inputField.value;
    loadData(fieldValue);
    console.log(fieldValue);
})



loadData('Dhaka');