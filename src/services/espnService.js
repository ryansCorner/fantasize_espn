import axios from 'axios'
import dotenv from 'dotenv'
import _ from 'lodash'
import { Client } from 'espn-fantasy-football-api'


dotenv.config()

// const theClient = myClient.setCookies({ espnS2: `AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D`, SWID: `{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}` })

class ESPN {


    static getHistoricalScoreboardForWeek(scoringPeriodId, matchupPeriodId, onSuccess, onError) {
        const myClient = new Client({ leagueId: 439532 })
        console.log('da league HistoricalScoreboardForWeek')

        myClient.setCookies({ espnS2: `AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D`, SWID: `{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}` })
        let data;
        myClient.getHistoricalScoreboardForWeek({ seasonId: 2019, scoringPeriodId: scoringPeriodId, matchupPeriodId: matchupPeriodId })
            .then((historicalScoreboardForWeek) => {
                data = historicalScoreboardForWeek;
                onSuccess(data)
            })
            .catch(err => onError)
    }


    static getFreeAgents(scoringPeriodId, onSuccess, onError) {
        const myClient = new Client({ leagueId: 439532 })
        console.log('da league freeAgents')

        myClient.setCookies({ espnS2: `AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D`, SWID: `{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}` })
        let data;
        myClient.getFreeAgents({ seasonId: 2019, scoringPeriodId: scoringPeriodId })
            .then((freeAgents) => {
                data = freeAgents;
                onSuccess(data)
            })
            .catch(err => onError)
    }


    static getLeagueInfo(onSuccess, onError) {
        const myClient = new Client({ leagueId: 439532 })
        console.log('da league leagueInfo')

        myClient.setCookies({ espnS2: `AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D`, SWID: `{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}` })
        let data;
        myClient.getLeagueInfo({ seasonId: 2019 })
            .then((leagueInfo) => {
                data = leagueInfo;
                onSuccess(data)
            })
            .catch(err => onError)
    }

    static getTeamsAtWeek(scoringPeriodId, onSuccess, onError) {
        const myClient = new Client({ leagueId: 439532 })
        console.log('da league teams')

        myClient.setCookies({ espnS2: `AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D`, SWID: `{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}` })
        let data;
        myClient.getTeamsAtWeek({ seasonId: 2019, scoringPeriodId: scoringPeriodId })
            .then((teams) => {
                data = teams;
                onSuccess(data)
            })
            .catch(err => onError)
    }

    static getBoxScoreForWeek(scoringPeriodId, matchupPeriodId, onSuccess, onError) {
        const myClient = new Client({ leagueId: 439532 })
        console.log('da league')

        myClient.setCookies({ espnS2: `AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D`, SWID: `{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}` })
        let data;
        myClient.getBoxscoreForWeek({ seasonId: 2019, scoringPeriodId: scoringPeriodId, matchupPeriodId: matchupPeriodId })
            .then((boxscores) => {
                data = boxscores;
                onSuccess(data)
            })
            .catch(err => onError)
    }


    static getLeague(leagueId, onSuccess, onError) {
        const id = leagueId
        const year = 2019
        const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${id}`
        const myClient = new Client({ leagueId: 439532 })
        // const config = myClient.setCookies({ espnS2: 'AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D', SWID: '{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}' })
        axios.get(url)
            .then(response => onSuccess(response))
            .catch(err => onError(err))
    }

    static getStandings(leagueId, onSuccess, onError) {
        const id = leagueId
        const year = 2019
        const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${id}?view=mLiveScoring&view=mMatchupScore&view=mRoster&view=mSettings&view=mStandings&view=mStatus&view=mTeam&view`
        const myClient = new Client({ leagueId: 439532 })
        axios.get(url)
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }

    static getRoster(scoringPeriod, teamId, leagueId, onSuccess, onError) {
        const league = leagueId
        const team = teamId
        const week = scoringPeriod
        const year = 2019
        const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${league}?forTeamId=${team}&scoringPeriodId=${week}&view=mRoster`
        // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${id}?view=kona_player_info`
        axios.get(url)
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }

    // static getFreeAgents(leagueId, onSuccess, onError) {
    //     const id = leagueId
    //     const year = 2019
    //     // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019?view=kona_game_state`
    //     const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${id}?view=kona_player_info`
    //     axios.get(url)
    //         .then(response => onSuccess(response.data))
    //         .catch(err => onError(err))
    // }

    static getTeamStats(scoringPeriod, teamId, leagueId, onSuccess, onError) {
        const id = leagueId
        const year = 2019
        const team = teamId
        const scoringWeek = scoringPeriod
        // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/551382?view=modular&view=mNav&view=mMatchupScore&view=mRoster&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam`
        const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?forTeamId=${team}&scoringPeriodId=${scoringWeek}&view=mRoster`
        axios.get(url)
            .then(response => onSuccess(response.data))
            .catch(err => onError(err))
    }

    static getMatchupStats(scoringPeriod, teamId, leagueId, onSuccess, onError) {
        const id = leagueId
        const year = 2019
        const team = teamId
        const scoringWeek = scoringPeriod
        const matchupPeriodId = 13
        const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?view=mLiveScoring&view=mMatchupScore&view=mRoster&view=mSettings&view=mStandings&view=mStatus&view=mTeam&view=modular&view=mNav`
        // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?view=modular&view=mNav&view=mMatchupScore&view=mRoster&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam`
        // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?forTeamId=${team}&scoringPeriodId=${scoringWeek}&view=mRoster`
        axios.get(url)
            .then(response => {
                // const schedule = _.get(response.data, 'schedule'); // Data is an array instead of object
                // const data = _.filter(schedule, { matchupPeriodId });
                onSuccess(response)
            })
            .catch(err => onError(err))
    }

    static myTeam(scoringPeriod, teamId, leagueId, onSuccess, onError) {
        const id = leagueId
        const year = 2019
        const team = teamId

        const scoringWeek = scoringPeriod
        const matchupPeriodId = 13
        const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?rosterForTeamId=${team}&view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mRoster&view=mSettings&view=mTeam&view=modular&view=mNav`
        // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?view=modular&view=mNav&view=mMatchupScore&view=mRoster&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam`
        // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?forTeamId=${team}&scoringPeriodId=${scoringWeek}&view=mRoster`
        axios.get(url)
            .then(response => {
                // const schedule = _.get(response.data, 'schedule'); // Data is an array instead of object
                // const data = _.filter(schedule, { matchupPeriodId });
                onSuccess(response)
            })
            .catch(err => onError(err))
    }

    static boxScore(scoringPeriod, leagueId, onSuccess, onError) {
        const id = leagueId
        const year = 2019

        const scoringWeek = scoringPeriod
        const matchupPeriodId = 13
        const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?view=modular&view=mNav&view=mMatchupScore&view=mRoster&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam&view=kona_player_info&view=player_wl`
        // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?view=modular&view=mNav&view=mMatchupScore&view=mRoster&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam`
        // const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${id}?forTeamId=${team}&scoringPeriodId=${scoringWeek}&view=mRoster`
        axios.get(url)
            .then(response => {
                // const schedule = _.get(response.data, 'schedule'); // Data is an array instead of object
                // const data = _.filter(schedule, { matchupPeriodId });
                onSuccess(response)
            })
            .catch(err => onError(err))
    }

}
export default ESPN
