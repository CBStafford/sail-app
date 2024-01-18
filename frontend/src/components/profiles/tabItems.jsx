import {Scores, Picks} from './scoresRes';

export default function PicksTabItems({picks, officialscores, week}){

    const pScore = picks || [];
    const oScore = officialscores || [];
    // console.log(pScore);

    // const


    return(
        <div className="picksTable">
            <table>
                <thead>
                    <Scores officialscores={oScore} week={week} />
                </thead>
                <tbody>
                    <tr>
                    <Picks picks={pScore} officialscores={oScore} week={week} />
                    </tr>
                </tbody>
            </table>
        </div>

    );

}