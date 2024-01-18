import { useState } from "react";


export function Scores({officialscores, week}){
    const oScore = officialscores || [];

    // console.log(oScore);

    return(
        <>
        <tr>
        {oScore.map((item, index) => (
            item.week == week ? 
                <th key={index} className="scoresTableHeader">
                    <div className="kickoff">
                    {item.date} <br/>
                    {item.Kickoff}<br/>
                    {item.tv}
                    </div>
                {item.visitor} <br/> {item.v_score}
                <br/> @ <br/>
                {item.home} <br/> {item.h_score}
                </th>
            :
            null
        ))}
        </tr>
    </>
    );
}


export function Picks({picks, officialscores, week}){
    // console.log(week)
    const oScore = officialscores.filter((w)=> {
        return w.week === week
    });

    const pScore = picks.filter((w)=> {
        return w.week === week
    });

    // console.log(oScore)
    // console.log(pScore)

    const CheckWin = (score, index) => {
        if(score.winner === oScore[index].winner){
            return(
                <td key={index} className="winner-pick">
                    {score.v_score}
                    <br />@<br />
                    {score.h_score}
                    <br />
                    <div className="result-pick">W</div>
                </td>
            )
        }else{
            return(
                <td key={index} >
                    {score.v_score}
                    <br />@<br />
                    {score.h_score}
                    <br />
                    <div className="result-pick">L</div>
                </td>
            )
        }

        
    }


    return(
        <>
            {pScore.map((score, index)=>(
                // console.log(score),
                CheckWin(score, index)

            ))}

        </>
    );
    
    
}
