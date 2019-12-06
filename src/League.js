import React from 'react'
import ESPN from './services/espnService'
import { Client, Team } from 'espn-fantasy-football-api/node-dev'
// import { Client } from './ESPN-Fantasy-Football-API/src/client/client'



// const myClient = new Client({ leagueId: 439532 })
class League extends React.Component {
    constructor(props) {
        super(props)
        this.getLeague();

    }

    getLeague = evt => {
        const id = 439532
        const myClient = new Client({ leagueId: 439532 })
        const theClient = myClient.setCookies({ espnS2: 'AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D', SWID: '{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}' })
        const boxScores = myClient.getBoxscoreForWeek(2019, 3, 3)
        // ESPN.getLeague(id, this.onLeagueSuccess, this.onLeagueError)
        console.log('my client ')
        return boxScores


    }

    onLeagueSuccess = evt => {
        console.log('get League success', evt)
    }

    onLeagueError = err => {
        console.log('get League error', err)
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>

                    </h1>
                </div>
            </React.Fragment>
        )
    }
}
export default League;

