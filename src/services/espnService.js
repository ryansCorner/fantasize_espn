import axios from 'axios'
import dotenv from 'dotenv'

import { Client } from 'espn-fantasy-football-api'
const myClient = new Client({ leagueId: 439532 })

dotenv.config()

const theClient = myClient.setCookies({ espnS2: `AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D`, SWID: `{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}` })

class ESPN {
    static getLeague(leagueId, onSuccess, onError) {
        const id = leagueId
        const year = 2019
        const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${id}`
        const myClient = new Client({ leagueId: 439532 })
        const config = myClient.setCookies({ espnS2: 'AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D', SWID: '{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}' })
        axios.get(url, config)
            .then(response => onSuccess(response))
            .catch(err => onError(err))
    }
}
export default ESPN
