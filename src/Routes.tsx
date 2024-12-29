import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.tsx'
import Result from './pages/Results.tsx'

const CustomRoutes=()=>{
    return(
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/search' element={<Result/>}></Route>
        <Route path='/images' element={<Result/>}></Route>
        <Route path='/news' element={<Result/>}></Route>
        <Route path='/videos' element={<Result/>}></Route>
       

       </Routes>
    )
}
export default CustomRoutes