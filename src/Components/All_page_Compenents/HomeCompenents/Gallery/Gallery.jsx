import './Gallery.css'
import img1 from '../../../../assets/Img/gallery-1.avif'
import img2 from '../../../../assets/Img/gallery-2.png'
import img3 from '../../../../assets/Img/gallery-3.png'
import img4 from '../../../../assets/Img/gallery-4.png'
import img5 from '../../../../assets/Img/gallery-5.png'

const Gallery = () => {
  return (
    <section className="gallery-section">
      <span className="gallery-badge">Why It's Worth It</span>
      <h2 className="gallery-title">Inside Serenity Minds</h2>

      <div className="gallery-top">
        <img src={img1} alt="" className="gallery-img" />
        <img src={img2} alt="" className="gallery-img" />
      </div>

      <div className="gallery-bottom">
        <img src={img3} alt="" className="gallery-img" />
        <img src={img4} alt="" className="gallery-img" />
        <img src={img5} alt="" className="gallery-img" />
      </div>
    </section>
  )
}

export default Gallery