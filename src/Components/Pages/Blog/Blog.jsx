
import Navbar from '../../Navbar_Footer/Navbar/Navbar'
import Serenity from '../../All_page_Compenents/AboutCompenents/Serenity/Serenity'
import Card from '../../All_page_Compenents/BlogCompenents/Cards/Card'
import Cta from '../../All_page_Compenents/HomeCompenents/Cta/Cta'
import Faq from '../../All_page_Compenents/HomeCompenents/Faq/Faq'
import SerenityFooter from '../../Navbar_Footer/Footer/Footer'


const Blog = () => {
  return (
    <>
    <Navbar/>
<Serenity btn='Blog' h1='Mental Health Blogs' p='Read tips, insights, and stories.'/>
<Card/>
<Cta/>
<Faq/>  
<SerenityFooter/>







    </>
  )
}

export default Blog
