import Accordion from 'react-bootstrap/Accordion';



export default function LeagueTeams({lID, lTeams}) {

    const leagueTeams = lTeams;
    const length = lTeams;
    // console.log(leagueTeams);
    // console.log(team[index].league_id)

    const placeMarker = (teams, team, i) => {
        const numTeams = (teams.length - 1)
        if(i === 0){
            return(
                <div key={i}>
                    #1 {team.teamName } <sup>({team.owner})</sup>
                </div>
            )
        }else if(i == numTeams){
            return (<div key={i}>
                    Dead Last #{i+1} {team.teamName } <sup>({team.owner})</sup>
                </div>)
        }else{
            return(
                <div key={i}>
                    {i+1} {team.teamName } <sup>({team.owner})</sup>
                </div>
            )
        }
        
    }


return(
    <div className="LeagueTeams">
        {leagueTeams.map((teams, index)=>(
            teams[index].league_id == lID ? 
            teams.map((team, i)=> (
                placeMarker(teams,team, i)                  
            ))
            :
            null
        ))}
      
    </div>
)


}