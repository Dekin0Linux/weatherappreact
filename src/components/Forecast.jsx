import React from 'react'

function Forecast(props) {

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



  return (
    <div className=''>
        <div className='flex justify-between p-5'>
            <div className='flex flex-col justify-between'>
                <div className=''>   
                    <h1 className='lg:text-5xl text-xl font-bold '>{props.forecast.name}-{props.forecast.sys.country}</h1>
                    <small className='capitalize font-semibold text-xl text-gray-600 my-2'>{props.forecast.weather[0].description }</small>
                </div>

                <div className='inline-flex'>
                    <h1 className='font-bold lg:text-8xl text-2xl'>{Math.round(props.forecast.main.temp)}</h1><span className='font-bold md:text-3xl'>o</span>
                </div>
                
            </div>

            <div className='w-[200px] animate-pulse'>
                {icon(props.forecast.weather[0].icon)}
            </div>
        </div>
    </div>
  )
}

export default Forecast