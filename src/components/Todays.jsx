import React from 'react'

const Today=({info})=>{
    const icon=(icoName)=>{
        switch(icoName){
            case '01d':
                return <img src="https://static.vecteezy.com/system/resources/previews/012/066/500/non_2x/sunny-and-snowy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '01n':
                return <img src="https://static.vecteezy.com/system/resources/previews/011/026/933/original/3d-moon-icon-halloween-illustration-free-png.png" alt="" />;
            case '02d':
                return <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-with-sun-8374260-6666099.png" alt="" />
                
            case '02n':
                return <img src="https://img.lovepik.com/free-png/20211109/lovepik-c4d-weather-little-icon-png-image_400637446_wh1200.png" alt="" />
                
            case '03d':
                return <img src="https://static.vecteezy.com/system/resources/previews/022/287/801/original/3d-rendering-sun-covered-by-clouds-icon-3d-render-cloudy-weather-with-sun-icon-sun-covered-by-clouds-png.png" alt="" />
            case '03n':
                return <img src="https://static.vecteezy.com/system/resources/thumbnails/011/701/803/small_2x/3d-rendering-moon-with-three-clouds-isolated-png.png" alt="" />
            case '04d':
                return <img src="https://static.vecteezy.com/system/resources/previews/022/030/107/non_2x/sun-and-cloud-with-rain-drops-weather-concept-3d-illustration-png.png" alt="" />
            case '04n':
                return <img src="https://cdn3d.iconscout.com/3d/premium/thumb/partially-cloudy-night-7812692-6267506.png" alt="" />
            case '09d':
                return <img src="https://static.vecteezy.com/system/resources/previews/022/287/845/original/3d-rendering-cloud-and-rain-with-snow-icon-3d-render-snowly-rainy-weather-icon-cloud-and-rain-with-snow-png.png" alt="" />
            case '09n':
                return <img src="https://static.vecteezy.com/system/resources/previews/012/806/409/original/3d-cartoon-weather-rain-sign-of-dark-clouds-with-raindrops-isolated-on-transparent-background-3d-render-illustration-png.png" alt="" />
            case '10d':
                return <img src="https://static.vecteezy.com/system/resources/previews/012/806/415/original/3d-cartoon-weather-rain-clouds-with-thunderstorm-dark-cloud-sign-with-lightning-isolated-on-transparent-background-3d-render-illustration-png.png" alt="" />
            case '10n':
                return <img src="https://static.vecteezy.com/system/resources/previews/012/629/889/original/night-rain-storm-3d-weather-icon-illustration-png.png" alt="" />
            case '11d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/798/original/thunderstorm-rain-icon-weather-forecast-meteorological-sign-3d-render-png.png" alt="" />
            case '11n':
                return <img src="https://cdn3d.iconscout.com/3d/premium/thumb/dark-cloud-rain-storm-night-4720534-3927903.png" alt="" />
            case '13d':
                return <img src="https://static.vecteezy.com/system/resources/previews/012/806/420/original/3d-cartoon-weather-icon-snow-clouds-and-snowflakes-sign-isolated-on-transparent-background-3d-render-illustration-png.png" alt="" />
            case '13n':
                return <img src="https://cdn3d.iconscout.com/3d/premium/thumb/night-snow-cloud-6263770-5122306.png?f=webp" alt="" />
            case '50d':
                return <img src="https://static.vecteezy.com/system/resources/previews/019/061/841/original/mist-day-3d-icon-png.png" alt="" />
            case '50n':
                return <img src="https://static.vecteezy.com/system/resources/previews/019/061/834/original/mist-night-3d-icon-png.png" alt="" />
        }
    }


    return(
        <div className='text-center '>
            <small className='font-semibold text-gray-500'>{info.dt_txt}</small>
            <div className='w-20'>
                {icon(info.weather[0].icon)}
            </div>
            <div className='inline-flex'>
                <h1 className='font-semibold text-2xl'>{Math.round(info.main.temp)}</h1><span className='font-semibold'>o</span>
            </div>
        </div>
    )
    
}

function Todays({data}) {
  return (
    <div className=''>
        <div className='p-5 bg-slate-200 rounded-lg shadow-inner overflow-auto'>
            <p className='font-semibold text-base'>Today's Forecast</p>
            <div className='flex my-1 md:gap-12 gap-5'>
                {
                    data.map((item,index)=>(
                        <Today info={item} key={index}/> 
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Todays