

const getLocation = (e)=>{
    e.preventDefault();
    const searchForm = document.getElementById('searchform');
    const location = document.getElementById('location').value;
    // const result = document.getElementById('result').innerHTML="";
    
    const endpoint= `/weather?address=${location}` 
    fetch(endpoint).then((resp)=>{
        result.innerHTML= "<h3>loading... </h3>"
        resp.json().then((data)=>{
            //console.log(data);
            const weather="<p> Longitude : "+data.geodata.longitude+"</p><p> Latitude : "+data.geodata.latitude+"</p><p> Temperature : "+data.forecast.temperature+" degrees </p>"
            result.innerHTML=weather
        })
    }) 
};