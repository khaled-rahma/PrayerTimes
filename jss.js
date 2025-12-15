let cities =[
        {
            arabicName: "الرياض",
            name: "Ar Riyāḑ"
        }
        ,
        {
            arabicName: "مكة المكرمة",
            name: "Makkah al Mukarramah"
        }

    ]
    for (let city of cities){
        const content = `
         <option style="color:black">${city.arabicName}</option>
        `
        document.getElementById("cities-select").innerHTML +=content
    }
    document.getElementById("cities-select").addEventListener("change",function(){
        document.getElementById("city-name").innerHTML =this.value
        let cityname =""
        for(let city of cities){
            if(city.arabicName == this.value){
                cityname =city.name
            }
        }
        getprayerstimingofcity(cityname)
    })
       function getprayerstimingofcity(cityname){
        let params = {
        country:"SA",
        city: cityname
    }
        axios.get('http://api.aladhan.com/v1/timingsByCity',{
        params:params
    }).then(function (response){
        const timings=response.data.data.timings
        filltimeforprayer("fajr-time",timings.Fajr)
        filltimeforprayer("summerize-time",timings.Sunrise)
        filltimeforprayer("dhuhr-time",timings.Dhuhr)
        filltimeforprayer("asr-time",timings.Asr)
        filltimeforprayer("maghreb-time",timings.Sunset)
        filltimeforprayer("isha-time",timings.Isha)

        const readabledate = response.data.data.date.readable
        const weekDay = response.data.data.date.hijri.weekday.ar
        const date =weekDay + " " + readabledate
        document.getElementById("date").innerHTML = date
    }).catch(function(response){
        console.log(error);
    })
    }
    getprayerstimingofcity("Ar Riyāḑ")
    function filltimeforprayer(id,time){
     document.getElementById(id).innerHTML=time
    }