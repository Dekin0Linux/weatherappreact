import React, { useEffect, useState } from 'react'
import Forecast from './Forecast'
import Todays from './Todays'
import Condition from './Condition'

function Center() {
    let key = '2c06f04413a5cc6213b1567db6a83563';
    const [city,setCity] = useState('accra')
    const [forecast,setForecast] = useState({})
    const [today,setToday] = useState([])
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)

    const handleInput=(event)=>{

        setCity(event.target.value)
        if(event.target.value == ''){
            setCity('accra')
        }
    }

    const getForcast=()=>{
        setLoading(true)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
      .then(res=>res.json())
      .then(res=>{
        if(res.cod == 200){
            setForecast(res)
            setLoading(false)
        }else{
            setError(res.message)
            setLoading(false)
        }
      })
    }

    const getToday=()=>{
        setLoading(true)
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`)
     .then(res=>res.json())
     .then(res=>{
        if(res.cod == '200'){
            const houlyReport = res.list.slice(0,6)
            setToday(houlyReport)
            setLoading(false)
        }else{
            setError(res.message)
            
        }
     })
    }

    useEffect(()=>{
        getForcast()
        getToday()
    },[city])

  return (
    <div className='flex-auto w-[60%] md:px-10'>
        <div className='w-full'>
            <input type="search" className='outline-none p-5 shadow-slate-300 shadow-md rounded-lg w-full' onChange={handleInput}/>
        </div>

        {
            !loading ? (
                <div>
                    <Forecast forecast={forecast}/>
                    <Todays data={today}/>
                    <Condition forecast={forecast}/>
                </div>
            ): (
                <div className='w-full h-full py-10'>
                    <h3 className='font-bold text-3xl'>Loading...</h3>
                </div>
            )
        }
        
    </div>
  )
}

export default Center