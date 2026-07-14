import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

export default function Gallery() {
  const [alldata, setAlldata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Dummy data simulate
        const dummyData = [
          {
            _id: "1",
            title: " Photo",
            slug: "sunset-photo",
            images: ["/assets/newimg1.jpg"],
            category: "Nature",
          },
          {
            _id: "2",
            title: " Photo",
            slug: "mountain-photo",
            images: ["/assets/f.JPG"],
            category: "Adventure",
          },
          {
            _id: "3",
            title: "Photo",
            slug: "city-lights",
            images: ["/assets/g.JPG"],
            category: "Urban",
          },
          {
            _id: "4",
            title: "Photo",
            slug: "city-lights-2",
            images: ["/assets/h.JPG"],
            category: "Urban",
          },
          {
            _id: "5",
            title: "Photo",
            slug: "city-lights-3",
            images: ["/assets/i.JPG"],
            category: "Urban",
          },
          {
            _id: "6",
            title: "Photo",
            slug: "city-lights-4",
            images: ["/assets/j.JPG"],
            category: "Urban",
          },
          {
            _id: "7",
            title: "Photo",
            slug: "city-lights-5",
            images: ["/assets/d.JPG"],
            category: "Urban",
          },
          {
            _id: "8",
            title: "Photo",
            slug: "city-lights-6",
            images: ["/assets/newimg2.jpg"],
            category: "Urban",
          },
          {
            _id: "9",
            title: "Photo",
            slug: "city-lights-7",
            images: ["/assets/newimg3.jpg"],
            category: "Urban",
          },
          // {
          //   _id: "3",
          //   title: "Photo",
          //   slug: "city-lights",
          //   images: ["/assets/newimg4.jpg"],
          //   category: "Urban",
          // },
        ];
        
        // Simulating API response delay
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
  
        setAlldata(dummyData);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPhotos();
  }, []);
  

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     try {
  //       const res = await axios.get('/api/photos');
  //       setAlldata(res.data);
  //     } catch (error) {
  //       console.error("Error fetching photos:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPhotos();
  // }, []);

  return (
    <>
      <title>Deepak : Gallery Photos</title>

      <div className="gallerypage">
        <div className="container">
          <div className="gallerytopsec">
            <div className="topphonesec">
              <div className="lefttitlesec">
                <h4>Deepak GALLERY PHOTOS</h4>
                <h1>
                  DEEPAK <br /> photographes
                </h1>
                <a href="#galleryimages">
                  <button>VIEW MORE</button>
                </a>
              </div>
              <div className="rightimgsec">
                <img src="/assets/g.JPG" alt="" />
                <div className="r_img_top">
                  <img src="/assets/c.JPG" alt="" />
                  <img src="/assets/e.JPG" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" gallerybtmphotos" id="galleryimages">
          <div className="container">
            <div className="gbtmtitles text-center">
              <h3>
                <span>01//</span>OUR PORTFOLIO
              </h3>
              <h2>
                Deepak's capture<span> All of your</span>
                <br />
                beautiful memories
              </h2>
            </div>
            <div className="gallery_image_grid" >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {alldata.map((photo) => (
                    <div className="image-item" key={photo._id} 
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    >
                      <img src={photo.images[0]} alt={photo.title} />
                      <div className="galeryimgiteminfo">
                        <h2>{photo.title}</h2>
                        <p>by Deepak Gupta</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
