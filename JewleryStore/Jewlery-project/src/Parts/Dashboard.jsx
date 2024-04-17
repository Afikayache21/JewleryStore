import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';
import '../App.css';

let card1Content = 'Welcome to R&N, where elegance meets craftsmanship in a symphony of precious metals. Nestled in the heart of the city, our boutique showcases a breathtaking array of rings, necklaces, and earrings, each piece meticulously crafted to captivate the soul. Explore our curated collection featuring timeless designs in lustrous gold, sleek silver, and enchanting rose gold, each exuding its own unique allure. From delicate necklaces that grace the neckline with understated sophistication to statement rings that command attention, every creation at R&N embodies a harmonious blend of tradition and contemporary flair. Whether you seek a symbol of enduring love or a shimmering accent to elevate your ensemble, R&N invites you to discover the perfect expression of your style and grace.';
let card2Content = 'Experience the seamless journey of indulgence with R&Ns online collection. Explore our exquisite range of jewelry meticulously crafted in gold, silver, and rose gold. Whether youre searching for a timeless necklace to elevate your everyday look or a statement ring to mark a special occasion, our curated selection offers something for every style and taste. Enjoy the convenience of easy browsing, secure transactions, and worldwide shipping, ensuring that your desired piece of elegance is just a click away. Adorn yourself with the timeless allure and unmatched craftsmanship of R&N, and let each piece of jewelry tell a story of sophistication and grace.';



const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <>
            <div className='Dashboard'>
                
                <Nav variant="tabs" dir="rtl"  >
                    <Nav.Item>
                        <Nav.Link onClick={() => handleTabClick(0)}>About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => handleTabClick(1)}>?Why Shop Online</Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>
            <div style={{ paddingLeft: '20%', paddingRight: '20%', paddingTop: '5%'}} >
                {activeTab === 0 && <h2><ContentCard content={card1Content} title={'About Us'} /></h2>}
                {activeTab === 1 && <h2><ContentCard content={card2Content} title={'Why Shop Online?'} /></h2>}
            </div>
        </>
    );
};
export default Dashboard;