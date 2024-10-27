import { useState } from 'react'
import './App.css'
import MainLandingpage from './Components/MainLandingpage/MainLandingpage'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Map from './Components/Map/Map'
import Rajasthan from './Components/Rajasthan/Rajasthan'
import Sikkim from './Components/Sikkim/Sikkim'
import Kerala from './Components/Kerala/Kerala'
import WestBengal from './Components/WestBengal/WestBengal'
import Goa from './Components/Goa/Goa'
import Predict from './Components/Predict/Predict'
import Info from './Components/Info/Info'
import Weather from './Components/Weather/Weather'



function App() {
  let r=createBrowserRouter(
    [
      {
        path:'/',
        element:<MainLandingpage/>
      },
      {
        path:'/WeatherWestBengal',
        element:<Weather state="Kolkata"/>
      },
      {
        path:'/WeatherSikkim',
        element:<Weather state="Gangtok"/>
      },
      {
        path:'/WeatherKerala',
        element:<Weather state="Kochi"/>
      },
      {
        path:'/WeatherGoa',
        element:<Weather state="Goa"/>
      },
      {
        path:'/WeatherRajasthan',
        element:<Weather state="Rajasthan"/>
      },
      {
        path:'/Map',
        element:<Map/>
      },
      {
        path:'/Info',
        element:<Info/>
      },
      {
        path:'/Rajasthan',
        element:<Rajasthan/>
      },
      {
        path:'/Sikkim',
        element:<Sikkim/>
      },
      {
        path:'/Kerala',
        element:<Kerala/>
      },
      {
        path:'/WestBengal',
        element:<WestBengal/>
      },
      {
        path:'/Goa',
        element:<Goa/>
      },
      {
        path:'/PredictionSikkim',
        element:<Predict state="Sikkim"/>
      },
      {
        path:'/predictionRajasthan',
        element:<Predict state="Rajasthan"/>
      },
      {
        path:'/predictionWestBengal',
        element:<Predict state="WestBengal"/>
      },
      {
        path:'/predictionKerala',
        element:<Predict state="Kerala"/>
      },
      {
        path:'/predictionGoa',
        element:<Predict state="Goa"/>
      }
    ]
  )

  return (
   <div>
    <RouterProvider router={r}/>
   </div>
  )
}

export default App
