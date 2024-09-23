import React from 'react'
import Navbar from './Components/Navbar'
import Create from './Components/Create'
import Footer1 from './Components/Footer1'
import Footer from './Components/Footer'

import Higher from './Components/Higher'
import Contact from './Components/Contact'
import Small_banner from './Components/Small_banner'
import PricingCard from './Components/PricingCard'
import Review from './Components/Review'
import ProductShow from './Components/ProductSow'
import Logic from './Components/Logic'
import New from './Components/New'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Create />
      <Higher />
      <New />
    
      <ProductShow />
      <Logic />
      <Small_banner />
      <Review />
      <PricingCard />
      <Contact />
      <Footer1/>
      <Footer />
   
    </div>
  )
}

export default App
