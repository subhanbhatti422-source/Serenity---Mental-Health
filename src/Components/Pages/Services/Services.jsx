
import Navbar from '../../Navbar_Footer/Navbar/Navbar'
import Serenity from '../../All_page_Compenents/AboutCompenents/Serenity/Serenity'
import Question from '../../All_page_Compenents/HomeCompenents/Question/question'
import Pricing from '../../All_page_Compenents/HomeCompenents/Pricing/Pricing'
import Counter from '../../All_page_Compenents/HomeCompenents/Counter/Services2'
import Cta from '../../All_page_Compenents/HomeCompenents/Cta/Cta'
import Faq from '../../All_page_Compenents/HomeCompenents/Faq/Faq'
import SerenityFooter from '../../Navbar_Footer/Footer/Footer'


const Services = () => {
  return (
    <>
    <Navbar/>
<Serenity btn='Services' h1='Our Counseling Services' p='Explore the support we offer.'/>
<Question/>
<Counter/>
<Pricing/>
<Cta/>
<Faq/>  
<SerenityFooter/>






    
    </>
  )
}

export default Services