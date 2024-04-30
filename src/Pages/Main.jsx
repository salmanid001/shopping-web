import React from 'react'
import Hero from '../Components/Heros/Hero'
import Feature from '../Components/Features/Feature'
import Banner1 from '../Components/Banner1/Banner1'
import Popular from '../Components/Populars/Popular'
import Banner2 from '../Components/Banner2/Banner2'
import NewCollection from '../Components/NewCollections/NewCollection'
import BigBanner from '../Components/BigBanners/BigBanner'
import NewsLetter from '../Components/NewsLetters/NewsLetter'
import Footer from '../Components/Footers/Footer'


const Main = () => {
  return (
    <div>

<Hero/>
<Feature/>
<Banner1/>
<Popular/>
<Banner2/>
<NewCollection/>
<BigBanner/>
<NewsLetter/>
<Footer/>

    </div>
  )
}

export default Main