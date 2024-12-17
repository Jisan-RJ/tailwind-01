import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Collection from './components/collection'
import Space from './components/Space'
import Browse from './components/Browse'
import Products from './components/Products'
import Rooms from './components/Rooms'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Collection/>
      <Space/>
      <Browse/>
      <Products/>
      <Rooms/>
      <Footer/>
    </>
  )
}

export default App