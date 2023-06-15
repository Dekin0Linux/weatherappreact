import React from 'react'

function Condition(props) {
    const dateConverter=(date)=>{
        let cdate = new Date(date * 1000)

       let hour = cdate.getHours()
        let minutes = cdate.getMinutes()
        //format time with hour and miuntes is less than 12
        if(hour < 12){
            hour = '0'+ hour
        }
        if(minutes < 10){
            minutes = '0'+ minutes
        }

        return `${hour}:${minutes}`
    }
  return (
    <div className='p-5 my-5 bg-slate-100 rounded-lg shadow-inner'>
        <div>
            <h1 className='font-semibold text-base'>Condition</h1>
            <div className='md:grid grid-cols-4 md:gap-10 gap-5 my-2 flex flex-wrap'>
                <div>
                    <p className='text-slate-400 font-medium'>Description</p>
                    <p className='capitalize font-bold'>{props.forecast.weather[0].description }</p>  
                </div>
                <div>
                    <p className='text-slate-400 font-medium'>Wind</p>
                    <p className='font-bold'>{props.forecast.wind.speed } km/h</p>

                </div>
                <div>
                    <p className='text-slate-400 font-medium'>Humidity</p>
                    <p className='font-bold'>{props.forecast.main.humidity }%</p>
                </div>
                <div>
                    <p className='text-slate-400 font-medium'>Pressure</p>
                    <p className='font-bold'>{props.forecast.main.pressure } hpa</p>
                </div>
                <div>
                    <p className='text-slate-400 font-medium'>Reel Feel</p>
                    <p className='font-bold'>{props.forecast.main.feels_like }</p>

                </div>
                <div>
                    <p className='text-slate-400 font-medium'>SunRise</p>
                    <p className='font-bold'>{dateConverter(props.forecast.sys.sunrise )} AM</p>
                </div>
                <div>
                    <p className='text-slate-400 font-medium'>Sunset</p>
                    <p className='font-bold'>{dateConverter(props.forecast.sys.sunset) } PM</p>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Condition