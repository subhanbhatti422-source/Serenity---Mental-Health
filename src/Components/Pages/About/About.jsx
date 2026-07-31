
import Navbar from '../../Navbar_Footer/Navbar/Navbar'
import Serenity from '../../All_page_Compenents/AboutCompenents/Serenity/Serenity'
import OurMission from '../../All_page_Compenents/AboutCompenents/OurMission/OurMission'
import Counter from '../../All_page_Compenents/HomeCompenents/Counter/Services2'
import Pricing from '../../All_page_Compenents/HomeCompenents/Pricing/Pricing'
import Faq from '../../All_page_Compenents/HomeCompenents/Faq/Faq'
import Cta from '../../All_page_Compenents/HomeCompenents/Cta/Cta'
import SerenityFooter from '../../Navbar_Footer/Footer/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
<Serenity btn='About us' h1='About Serenity Minds' p='A glimpse into our mission, values, and the hearts behind your healing.'/>
<OurMission/>
<Counter/>
<Pricing/>
<Faq/>
<Cta/>
<SerenityFooter/>






    </>  
    
  )
}

export default About
