
import './Card.css'

import img1 from '../../../../assets/Img/blog-img-1.png'
import img2 from '../../../../assets/Img/blog-img-2.png'
import img3 from '../../../../assets/Img/blog-img-3.png'
import img4 from '../../../../assets/Img/blog-img-4.png'

const blogs = [
    {
        id: 1,
        image: img1,
        category1: "anxiety",
        category2: "healing Journey",
        category3: "mental Health",
        title: "Understanding Anxiety: What It Really Feels Like",
        desc: "Learn the signs, symptoms, and how to manage anxiety in everyday life. Everything you need to know before your first session.",
    },
    {
        id: 2,
        image: img2,
        category1: "anxiety",
        category2: "relationships",
        category3: "",
        title: "The Power of Talking: Why Having a Safe Space Matters",
        desc: "Learn the signs, symptoms, and how to manage anxiety in everyday life. Everything you need to know before your first session.",
    },
    {
        id: 3,
        image: img3,
        category1: "mental Health",
        category2: "communication",
        category3: "",
        title: "Coping With Burnout in a Fast-Paced World",
        desc: "Learn the signs, symptoms, and how to manage anxiety in everyday life. Everything you need to know before your first session.",
    },
    {
        id: 4,
        image: img4,
        category1: "recovery",
        category2: "confidence",
        category3: "healing Journey",
        title: "What Is Cognitive Behavioral Therapy (CBT)?",
        desc: "Learn the signs, symptoms, and how to manage anxiety in everyday life. Everything you need to know before your first session.",
    },
]


const Card = () => {


    return (
        <section className='Blog-Cards'>
            <div className="main-cards">
                {blogs.map((blog) => (
                    <div className="card" key={blog.id}>
                        <div className="img-box">
                        <img src={blog.image} alt="blog.title" />
                        </div>

                        <div className="tags">
                            <span>{blog.category1}</span>
                            {blog.category2 && <span className='category2'>{blog.category2}</span>}
                            {blog.category3 && <span className='category3'>{blog.category3}</span>}
                        </div>

                        <h3>{blog.title}</h3>
                        <p>{blog.desc}</p>

                    </div>
                ))}
            </div>

            <div className="load-more-btn">
               <a href=""><button>Load More</button></a> 
            </div>

        </section>
    )
}

export default Card
