import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import ContentCard from './ContentCard';
import Menu from './Stam';
import '../App.css';

let card1Content = '"JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. HTML, on the other hand, stands for Hyper Text Markup Language. It is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."';
let card2Content = '"React is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. HTML, on the other hand, stands for Hyper Text Markup Language. It is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    let menu = <Menu />
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <>
            <div className='Dashboard'>
                
                <Nav variant="tabs" dir="rtl"  >
                    <Nav.Item>
                        <Nav.Link onClick={() => handleTabClick(0)}>Card-1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => handleTabClick(1)} >Card-2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => handleTabClick(2)}>
                            Card-3
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>
            <div>
                {activeTab === 0 && <h2><ContentCard content={card1Content} title={'Card-1'} /></h2>}
                {activeTab === 1 && <h2><ContentCard content={menu} title={'Card-2'} /></h2>}
                {activeTab === 2 && <h2><ContentCard content={card2Content} title={'Card-3'} /></h2>}
            </div>
        </>
    );
};
export default Dashboard;