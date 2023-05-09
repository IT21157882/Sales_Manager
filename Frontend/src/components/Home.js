import React from 'react'
import './Home.css';
import myImage from "./images/blacktea.jpg";
import backgroundImage from "./images/tae.jpg";


const Home = () => {
  
  return (
    <div  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
    <center>
      
    <div className="my-class">
    <br></br><br></br>

      <h1>Morawakkorale Tea Factory</h1>
      
      <div className="home">
      <br></br><br></br>
      <img src={myImage} alt="Image description" />
      <br></br><br></br>

      <div style={{ backgroundColor: 'white' , height: '300px', width: '1000px'}}>
      <br></br><br></br>

        <p>A tea factory is a physical facility dedicated to the production of high-quality tea products. These factories typically source tea leaves from select regions around the world, such as India, China, Sri Lanka, and Japan. The tea leaves are then carefully curated and processed by skilled tea artisans to create a range of tea blends, including black, green, white, oolong, and herbal teas.

The factory's operations involve a series of intricate processes, including withering, rolling, fermentation, and drying of tea leaves. These processes are carried out using specialized equipment, such as withering troughs, rolling machines, fermentation tanks, and dryers, to ensure the tea leaves are processed to the highest standards.

Tea factories may also employ quality control measures to ensure that the tea products meet certain standards. </p><br></br><br></br>


<p>This could involve tasting and grading the tea leaves, checking for consistency in size and color, and ensuring that the tea is free from any foreign matter or contaminants.

The finished tea products are packaged and labeled for distribution to wholesalers, retailers, and consumers. The packaging may vary depending on the target market and the tea product, and could include tea bags, loose-leaf tea, or bottled tea drinks.

Overall, a tea factory plays a critical role in the tea industry, producing high-quality tea products that are enjoyed by millions of people around the world.</p>
      </div>
      <br></br><br></br>
      
      </div>
     </div>
     
     </center>
     </div>
  )
}

export default Home
