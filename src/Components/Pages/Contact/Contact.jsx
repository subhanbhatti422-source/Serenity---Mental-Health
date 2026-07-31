
import Navbar from '../../Navbar_Footer/Navbar/Navbar'
// import SerenityFooter from '../../Navbar_Footer/Footer/Footer'
import Serenity from '../../All_page_Compenents/AboutCompenents/Serenity/Serenity'
import Connect from '../../All_page_Compenents/ContactCompenents/Connect/Connect'
import Form from '../../All_page_Compenents/ContactCompenents/Form/Form'
import Cta from '../../All_page_Compenents/HomeCompenents/Cta/Cta'
import Faq from '../../All_page_Compenents/HomeCompenents/Faq/Faq'
import SerenityFooter from '../../Navbar_Footer/Footer/Footer'


const Contact = () => {
  return (
    <>
      <Navbar/>
      <Serenity btn='Contact us' h1='Get in Touch With Us' p='Reach out with any questions or inquiries.'/>
      <Connect/>
      <Form/>
      <Faq/>
      <Cta/>
      <SerenityFooter/>

    </>
  )
}

export default Contact
