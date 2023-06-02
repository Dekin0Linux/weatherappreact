import React from 'react'

function Condition(props) {
    const dateConverter=(date)=>{
        let cdate = new Date(date * 1000)

        const hour = cdate.getHours()
        const minutes = cdate.getMinutes()

        return `${hour}:${minutes}`
    }
  return (
    <div className='p-5 my-2 bg-slate-200 rounded-lg shadow-inner'>
        <div>
            <h1>Condition</h1>
            <div className='grid grid-cols-4 gap-10 my-2'>
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
                    <p className='font-bold'>{props.forecast.main.pressure }</p>
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