import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { BsSearch } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { WiHumidity } from 'react-icons/wi';
import img from '../utils/images/cloud-jpg.png'
import building from '../utils/images/building.jpg'

function Weather() {
    const [data, setData] = useState({})
    const [weather, setWeather] = useState({})
    const [wond, setWond] = useState({})
    const [city, setCity] = useState({})
    const [location, setoLcation] = useState({})

    const url = ("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=03472d32710a8b683002bf00c2f23254&units=metric")
    // .then((res) => res.json())
    axios.get(url).then((res) => {
        // console.log("response", res.data.name)
        setData(res.data.name)
        setWeather(res.data.main)
        setWond(res.data.wind)
        // console.log(res)
        // setCity(res.data.name)
    })
        .catch((err) => {
            console.log("Error==>", err);
        });


    return (
        <>
            {/* <div className="main_section">
                <div className="weather_data">
                    <div className="weather">
                        <input className='input' type="text" />
                        <BsSearch className='search' />
                        <div className='current_weather'>
                            <p>karachi</p>
                            <p className=''>12:05</p>
                        </div>
                        <div className="weather_cloud_data">
                            <div className="cloud_img"><img src={img} alt="" /></div>
                            <div className='degree'><h1>{weather.feels_like}C<sup><BsDot className='dot' /></sup></h1></div>
                            <div className="weathers">
                                <span className='weather_text'>Haze<BiMessageDetail className='message' /></span>
                                <span className='feel'>Feels Liks {weather.feels_like}<sup><BsDot className='dot' /></sup></span>
                            </div>
                        </div>

                        <div className="main_weather_data">
                            <div className="wind"><span className='weather_api_data'>WIND</span><b className='weather_api_data_number'></b></div>
                            <div className="humidity"><span className='weather_api_data'>HUMIDITY</span><b className='weather_api_data_number'>{weather.humidity}</b></div>
                            <div className="visibility"><span className='weather_api_data'>VISIBILITY</span><b className='weather_api_data_number'>{weather.temp_max}</b></div>
                            <div className="pressure"><span className='weather_api_data'>PRESSURE</span><b className='weather_api_data_number'>{weather.pressure}</b></div>
                            <div className="temp"><span className='weather_api_data'>TEMP</span><b className='weather_api_data_number'></b></div>
                        </div>

                    </div>
                </div>

            </div> */}
            <div className="main_section">
                <div className="card">
                    <div className="left_div">
                        <div className="black_card">
                            <div className="black_card_data">
                                <input className='input' type="text" />
                                <BsSearch className='search' />
                            </div>
                            <div className='current_weather'>
                                <h2>Karachi</h2>
                            </div>
                            <div className="cloud_img"><img src={img} alt="" /></div>
                            <div className="degree"></div>
                        </div>
                        <div className='building'><img src={building} alt="" />
                        </div>
                    </div>
                    <div className="right_div">
                        <div className="weather">
                            <h3>Humidity</h3>
                            <WiHumidity className='humidity' />
                            <p>31%</p>
                        </div>
                        <div className="weather">
                            <h3>pressure</h3>
                            <WiHumidity className='humidity' />
                            <p>1020hp</p>
                        </div><div className="weather">
                            <h3>Wind</h3>
                            <WiHumidity className='humidity' />
                            <p>22.56m/s</p>
                        </div><div className="weather">
                            <h3>Temp</h3>
                            <WiHumidity className='humidity' />
                            <p>33</p>
                        </div><div className="weather">
                            <h3>Feels Like</h3>
                            <WiHumidity className='humidity' />
                            <p>22</p>
                        </div><div className="weather">
                            <h3>visibility</h3>
                            <WiHumidity className='humidity' />
                            <p>44%</p>
                        </div>




                    </div>
                </div>

            </div>


        </>
    )
}

export default Weather
