
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import LeagueTeams from './leagueTeams';

export default function Profile({leagues}) {

  const user = leagues?.user || [];
  const teams = leagues?.teams || [];
  // const lteams = leagues?.lteams || [];
  const lteams = leagues?.standings || [];
  // const scores = leagues?.scores || [];

  // console.log(teams);

    return(
      <div>
        <Row>
          {teams.map((item, index) => (
            <div key={index}>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey={index} >
                <Accordion.Header>{item.leagueName} ({item.owner}) </Accordion.Header>
                <Accordion.Body> 
                  <Row className='justify-content-center'>
                    Veiw Scores & Picks
                  </Row>
                  <Row>
                      <Button variant="outline-primary">This Week</Button>
                      <Button variant="outline-success">This Season</Button>                                   
                  </Row>
                  <LeagueTeams lID={item.leagueId} lTeams={lteams} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
          ))}
        </Row>

      </div>
    )
}