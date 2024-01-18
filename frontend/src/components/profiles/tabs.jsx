
import { useState, useEffect } from 'react';
import Link from 'next/link'

import Nav from 'react-bootstrap/Nav';
import PicksTabItems from './tabItems';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function PicksTab({picks, officialscores}){

    const pScore = picks || [];
    const oScore = officialscores || [];

    const [tabID, setTabID] = useState(1);
    const [addPicksAddress , setAddPicksAddress] = useState("");

    const toggleTab = (tabNo) =>{
        setTabID(tabNo);
    }

    useEffect(() => {
        setAddPicksAddress("/addpicks?week=" + tabID)
      }, [tabID]); 

    //   console.log(pScore)

    return(
        <div className="picksTabs">
            <Nav fill variant="tabs" defaultActiveKey="link-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => toggleTab(1)  }>Week <br /> 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => toggleTab(2) }>Week <br />2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={() => toggleTab(3) }>Week <br />3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" onClick={() => toggleTab(4) }>Week <br />4</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5" onClick={() => toggleTab(5) }>Week <br />5</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-6" onClick={() => toggleTab(6) }>Week <br />6</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-7" onClick={() => toggleTab(7) }>Week <br />7</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-8" onClick={() => toggleTab(8) }>Week <br />8</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-9" onClick={() => toggleTab(9) }>Week <br />9</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-10" onClick={() => toggleTab(10) }>Week <br />10</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-11" onClick={() => toggleTab(11) }>Week <br />11</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-12" onClick={() => toggleTab(12) }>Week <br />12</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-13" onClick={() => toggleTab(13) }>Week <br />13</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-14" onClick={() => toggleTab(14) }>Week <br />14</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-15" onClick={() => toggleTab(15) }>Week <br />15</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-16" onClick={() => toggleTab(16) }>Week <br />16</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <PicksTabItems picks={pScore} officialscores={oScore} week={tabID} />
            </div>
            
            <Row className="mt-3">
            <Button>
                <Link href={addPicksAddress} style={{color : 'white'}} >Make your picks</Link>
            </Button>
          </Row>
        </div>
    );

}