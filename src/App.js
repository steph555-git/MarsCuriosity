import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Images from './pages/ImagesPage/Images'
import About from '../src/pages/AboutPage/About'
import Weather from '../src/pages/WeatherPage/Weather'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<About />} />
          <Route path='/images' element={<Images />} />
          <Route path='/weather' element={<Weather />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
