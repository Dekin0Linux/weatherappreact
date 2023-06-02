import React from 'react'

function Forecast(props) {

    const icon=(icoName)=>{
        switch(icoName){
            case '01d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '01n':
                return <img src="https://static.vecteezy.com/system/resources/thumbnails/021/879/158/small/white-cloud-3d-rendered-free-png.png" alt="" />;
            case '02d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
                
            case '02n':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
                
            case '03d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '03n':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '04d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '04n':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '09d':
                return <img src="https://static.vecteezy.com/system/resources/previews/020/716/719/original/3d-minimal-weather-forecast-concept-rain-with-thunderstorms-weather-icon-3d-illustration-png.png" alt="" />
            case '09n':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '10d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '10n':
                return <img src="https://static.vecteezy.com/system/resources/previews/012/629/889/original/night-rain-storm-3d-weather-icon-illustration-png.png" alt="" />
            case '11d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/798/original/thunderstorm-rain-icon-weather-forecast-meteorological-sign-3d-render-png.png" alt="" />
            case '11n':
                return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6X1wwJYo-Qdfwfx_k60OnUlxJL1YwJKiog&usqp=CAU" alt="" />
            case '13d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '13n':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '50d':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />
            case '50n':
                return <img src="https://static.vecteezy.com/system/resources/previews/008/854/797/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="" />

        }
    }



  return (
    <div className=''>
        <div className='flex justify-between p-5'>
            <div className='flex flex-col justify-between'>
                <div className=''>   
                    <h1 className='lg:text-5xl text-xl font-bold text-green-600'>{props.forecast.name}-{props.forecast.sys.country}</h1>
                    <small>Chance of rain</small>
                </div>

                <div className='inline-flex'>
                    <h1 className='font-bold lg:text-8xl text-2xl'>{Math.round(props.forecast.main.temp)}</h1><span className='font-bold text-3xl'>o</span>
                </div>
                
            </div>

            <div className='w-[200px] animate-bounce'>
                {icon(props.forecast.weather[0].icon)}
            </div>
        </div>
    </div>
  )
}

export default Forecast