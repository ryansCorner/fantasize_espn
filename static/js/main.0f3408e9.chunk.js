(window["webpackJsonpfantasize-espn"]=window["webpackJsonpfantasize-espn"]||[]).push([[0],{138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),l=a.n(o),s=(a(69),a(70),a(71),a(19)),c=a(20),i=a(15),m=a.n(i),u=a(62),d=a.n(u),g=(a(90),a(16));d.a.config();var p=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"getHistoricalScoreboardForWeek",value:function(e,t,a,n){var r=new g.Client({leagueId:439532});console.log("da league HistoricalScoreboardForWeek"),r.setCookies({espnS2:"AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D",SWID:"{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}"}),r.getHistoricalScoreboardForWeek({seasonId:2019,scoringPeriodId:e,matchupPeriodId:t}).then((function(e){a(e)})).catch((function(e){return n}))}},{key:"getFreeAgents",value:function(e,t,a){var n=new g.Client({leagueId:439532});console.log("da league freeAgents"),n.setCookies({espnS2:"AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D",SWID:"{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}"}),n.getFreeAgents({seasonId:2019,scoringPeriodId:e}).then((function(e){t(e)})).catch((function(e){return a}))}},{key:"getLeagueInfo",value:function(e,t){var a=new g.Client({leagueId:439532});console.log("da league leagueInfo"),a.setCookies({espnS2:"AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D",SWID:"{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}"}),a.getLeagueInfo({seasonId:2019}).then((function(t){e(t)})).catch((function(e){return t}))}},{key:"getTeamsAtWeek",value:function(e,t,a){var n=new g.Client({leagueId:439532});console.log("da league teams"),n.setCookies({espnS2:"AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D",SWID:"{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}"}),n.getTeamsAtWeek({seasonId:2019,scoringPeriodId:e}).then((function(e){t(e)})).catch((function(e){return a}))}},{key:"getBoxScoreForWeek",value:function(e,t,a,n){var r=new g.Client({leagueId:439532});console.log("da league"),r.setCookies({espnS2:"AEAeVN%2BhNMhp67TD%2BIcKwy0QCd1KFkfgtLIV3FtZ4LgeSwI9W3zZyLlIq3ljbHzoQg6lpXht7rDN6Psd4irXYr47MSlvj8dz4aAyI9tUe3Olk1F3hRlxv4IPlLQcB8LTyg5LLJg5dzjOpsVndffbqMt6Hj4QOTjXSnyyIHN%2FRMPK6qu%2Bs%2Bzg1wI4Wd6WDSgBRmFc3ZN5dONd75LfbES1gxQdXd34fHGagz%2BXQqyIHW1KuWvrKcT8LBU1CeDW%2BPt3BsRjX8mF4TeMlBeRpZ%2FBqR0A0%2B3bJW%2Fu2QS%2FnDi%2FZ%2FkvXcAfMkPd4SFykafpSU6bseg%3D",SWID:"{80C81CC1-0A6F-4A4D-A84F-CA8081200E28}"}),r.getBoxscoreForWeek({seasonId:2019,scoringPeriodId:e,matchupPeriodId:t}).then((function(e){a(e)})).catch((function(e){return n}))}},{key:"getLeague",value:function(e,t,a){var n=e,r="https://fantasy.espn.com/apis/v3/games/ffl/seasons/".concat(2019,"/segments/0/leagues/").concat(n);new g.Client({leagueId:439532});m.a.get(r).then((function(e){return t(e)})).catch((function(e){return a(e)}))}},{key:"getStandings",value:function(e,t,a){var n=e,r="https://fantasy.espn.com/apis/v3/games/ffl/seasons/".concat(2019,"/segments/0/leagues/").concat(n,"?view=mLiveScoring&view=mMatchupScore&view=mRoster&view=mSettings&view=mStandings&view=mStatus&view=mTeam&view");new g.Client({leagueId:439532});m.a.get(r).then((function(e){return t(e.data)})).catch((function(e){return a(e)}))}},{key:"getRoster",value:function(e,t,a,n,r){var o=t,l=e,s="https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/".concat(a,"?forTeamId=").concat(o,"&scoringPeriodId=").concat(l,"&view=mRoster");m.a.get(s).then((function(e){return n(e.data)})).catch((function(e){return r(e)}))}},{key:"getTeamStats",value:function(e,t,a,n,r){var o=t,l=e,s="https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/".concat(a,"?forTeamId=").concat(o,"&scoringPeriodId=").concat(l,"&view=mRoster");m.a.get(s).then((function(e){return n(e.data)})).catch((function(e){return r(e)}))}},{key:"getMatchupStats",value:function(e,t,a,n,r){var o="https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/".concat(a,"?view=mLiveScoring&view=mMatchupScore&view=mRoster&view=mSettings&view=mStandings&view=mStatus&view=mTeam&view=modular&view=mNav");m.a.get(o).then((function(e){n(e)})).catch((function(e){return r(e)}))}},{key:"myTeam",value:function(e,t,a,n,r){var o=t,l="https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/".concat(a,"?rosterForTeamId=").concat(o,"&view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mRoster&view=mSettings&view=mTeam&view=modular&view=mNav");m.a.get(l).then((function(e){n(e)})).catch((function(e){return r(e)}))}},{key:"boxScore",value:function(e,t,a,n){var r="https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/".concat(t,"?view=modular&view=mNav&view=mMatchupScore&view=mRoster&view=mScoreboard&view=mSettings&view=mTopPerformers&view=mTeam&view=kona_player_info&view=player_wl");m.a.get(r).then((function(e){a(e)})).catch((function(e){return n(e)}))}}]),e}(),E=a(1),h=a(12),f=a(2),S=a(29),v=a(28),b=(a(91),a(130),a(24)),y=a(8),I=a(3),w=Object(I.e)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:" table-responsive table standings-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Team"),r.a.createElement("th",null,"Record"),r.a.createElement("th",null,"Points For"),r.a.createElement("th",null,"Points Against"))),r.a.createElement("tbody",null,e.teams.map((function(t,a){return r.a.createElement("tr",{key:a,id:t.id},r.a.createElement("td",null,t.finalStandingsPosition),r.a.createElement(y.b,{to:"/fantasize_espn/teamPage"},r.a.createElement("td",{key:a,id:t.id,onClick:e.onTeamClick,className:"name-and-logo"},r.a.createElement("div",null,r.a.createElement("img",{className:"standings-table-logo",src:t.logoURL})),t.name," (",t.abbreviation,")")),r.a.createElement("td",null,t.wins+" - "+t.losses),r.a.createElement("td",null,t.totalPointsFor),r.a.createElement("td",null,t.totalPointsAgainst))})))))})),k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-12",style:{overflow:"scroll"}},r.a.createElement("table",{className:" table-responsive table team-table "},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"roster-table-head-row"},r.a.createElement("td",null,r.a.createElement("p",null,"Week")),r.a.createElement("td",null,r.a.createElement("p",null,"1")),r.a.createElement("td",null,r.a.createElement("p",null,"2")),r.a.createElement("td",null,r.a.createElement("p",null,"3")),r.a.createElement("td",null,r.a.createElement("p",null,"4")),r.a.createElement("td",null,r.a.createElement("p",null,"5")),r.a.createElement("td",null,r.a.createElement("p",null,"6")),r.a.createElement("td",null,r.a.createElement("p",null,"7")),r.a.createElement("td",null,r.a.createElement("p",null,"8")),r.a.createElement("td",null,r.a.createElement("p",null,"9")),r.a.createElement("td",null,r.a.createElement("p",null,"10")),r.a.createElement("td",null,r.a.createElement("p",null,"11")),r.a.createElement("td",null,r.a.createElement("p",null,"12")),r.a.createElement("td",null,r.a.createElement("p",null,"13")),r.a.createElement("td",null,r.a.createElement("p",null,"14-15")),r.a.createElement("td",null,r.a.createElement("p",null,"16-17")),r.a.createElement("td",null,r.a.createElement("p",null,"Total"))),r.a.createElement("tr",{className:"roster-table-head-row"},r.a.createElement("td",null,"Outcome"),e.matchups.map((function(t,a){return console.log("matchups: ",t),r.a.createElement("td",{className:"matchup-table-outcome"+(t.winner===e.team.abbreviation?"-winner":"-loser")},r.a.createElement("span",{id:t.awayScore>t.homeScore?"winner":""},t.awayAbbrev," ",t.awayScore),r.a.createElement("br",null),r.a.createElement("span",{id:t.homeScore>t.awayScore?"winner":""},t.homeAbbrev," ",t.homeScore))}))),r.a.createElement("tr",{className:"roster-table-head-row"},r.a.createElement("td",null,"Deviation from Projection"),r.a.createElement("td",null,e.deviationFromProjection)),r.a.createElement("tr",{className:"roster-table-head-row"},r.a.createElement("td",null,"Points Away from Optimal Lineup"),r.a.createElement("td",null,e.deviationFromOptimizedTotal))),r.a.createElement("tbody",null))))},T=function(e){return r.a.createElement(r.a.Fragment,null,e.teams.map((function(t,a){return r.a.createElement("div",{className:"team-card",key:a},r.a.createElement("div",{className:"team-card-container"},r.a.createElement("div",{className:"team-card-header"},r.a.createElement("img",{className:"team-card-img",src:t.logoURL}),r.a.createElement("h2",null,t.name)),r.a.createElement(k,{team:t,matchups:e.matchups})))})))},F=(b.Filters.NumericFilter,b.Filters.AutoCompleteFilter,b.Filters.MultiSelectFilter,b.Filters.SingleSelectFilter,function(e){Object(S.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target.name,a=e.target.value;n.setState({organization:Object(f.a)({},t,a)})},n.getStuff=function(e){p.getStuff(n.state.scoringPeriodId,n.onStuffSuccess,n.onStuffError)},n.onStuffSuccess=function(e){console.log("Stuff success:",e)},n.onStuffError=function(e){console.log("Stuff errror",e)},n.mapTeams=function(e){[e.location,e.nickname].join(" "),e.id,e.abbreviation;return e.owner[0]},n.getBoxScoreForWeek=function(e){p.getBoxScoreForWeek(n.state.scoringPeriodId,9,n.onBoxScoreWeekSuccess,n.onBoxScoreWeekError)},n.onBoxScoreWeekSuccess=function(e){console.log("da league box score week success",e);var t=e.map((function(e,t){for(var a=0,r=Object.entries(n.state.teamsAtWeek);a<r.length;a++){var o=Object(h.a)(r[a],2),l=(o[0],o[1]);if(l.id===e.homeTeamId)var s=l.name;if(l.id===e.awayTeamId)var c=l.name}var i=s,m=e.homeScore,u=c,d=e.awayScore,g=d<m?i:u;if(d===m)g="TIE";return{homeTeam:i,homeScore:m,awayTeam:u,awayScore:d,winner:g}}));n.setState(Object(E.a)(Object(E.a)({},n.state),{},{boxScoreForWeek:t}))},n.onBoxScoreWeekError=function(e){console.log("boxScooore errror",e)},n.getTeamsAtWeek=function(e){p.getTeamsAtWeek(n.state.scoringPeriodId,n.onTeamsAtWeekSuccess,n.onTeamsAtWeekError)},n.onTeamsAtWeekSuccess=function(e){console.log("da league TeamsAtWeek success:",e),n.setState(Object(E.a)(Object(E.a)({},n.state),{},{teamsAtWeek:e}))},n.onTeamsAtWeekError=function(e){console.log("TeamsAtWeek errror",e)},n.getLeagueInfo=function(e){p.getLeagueInfo(n.onLeagueInfoSuccess,n.onLeagueInfoError)},n.onLeagueInfoSuccess=function(e){console.log("da league LeagueInfo success:",e),n.setState(Object(E.a)(Object(E.a)({},n.state),{},{leagueInfo:e}))},n.onLeagueInfoError=function(e){console.log("LeagueInfo errror",e)},n.getFreeAgents=function(e){p.getFreeAgents(n.state.scoringPeriodId,n.onFreeAgentsSuccess,n.onFreeAgentsError)},n.onFreeAgentsSuccess=function(e){console.log("da league FreeAgents success:",e),n.setState(Object(E.a)(Object(E.a)({},n.state),{},{freeAgents:e}))},n.onFreeAgentsError=function(e){console.log("FreeAgents errror",e)},n.getHistoricalScoreboardForWeek=function(e){p.getHistoricalScoreboardForWeek(1,1,n.onHistoricalScoreboardForWeekSuccess,n.onHistoricalScoreboardForWeekError)},n.onHistoricalScoreboardForWeekSuccess=function(e){console.log("da league HistoricalScoreboardForWeek success:***************************",e),n.setState(Object(E.a)(Object(E.a)({},n.state),{},{historicalScoreboard:e}))},n.onHistoricalScoreboardForWeekError=function(e){console.log("HistoricalScoreboardForWeek errror",e)},n.getStandings=function(e){p.getStandings(551382,n.onStandingsSuccess,n.onStandingsrror)},n.onStandingsSuccess=function(e){console.log("public standings success",e);var t=e.settings.name,a=e.id,r=e.scoringPeriodId,o=e.teams.map((function(e,t){var a,n=[e.location,e.nickname].join(" "),r=e.id,o=e.abbrev,l=e.owners[0],s=e.logo,c=Math.round(10*e.points)/10,i=e.record.overall,m=e.record.overall.wins,u=e.record.overall.losses,d=Math.round(10*e.record.overall.pointsAgainst)/10;return a={id:r,name:n,abbreviation:o,owner:l},Object(f.a)(a,r,n),Object(f.a)(a,"logoURL",s),Object(f.a)(a,"totalPointsScored",c),Object(f.a)(a,"regularSeasonPointsAgainst",d),Object(f.a)(a,"record",i),Object(f.a)(a,"wins",m),Object(f.a)(a,"losses",u),a}));n.setState(Object(E.a)(Object(E.a)({},n.state),{},{leagueName:t,teams:o,seasonId:a,scoringPeriodId:r})),n.onGetMatchupStats()},n.onStandingsrror=function(e){console.log("standings err",e)},n.onGetPlayers=function(e){p.getPlayers(551382,n.getPlayersSuccess,n.getPlayersError)},n.getPlayersSuccess=function(e){console.log("public league get players success",e)},n.getPlayersError=function(e){console.log("public league get players err ",e)},n.onGetTeamStats=function(e){p.getTeamStats(13,1,551382,n.getTeamStatsSuccess,n.getTeamStatsError)},n.getTeamStatsSuccess=function(e){console.log("public get TeamStats success",e)},n.getTeamStatsError=function(e){console.log("get TeamStats err ",e)},n.onGetMatchupStats=function(e){p.getMatchupStats(13,1,551382,n.getMatchupStatsSuccess,n.getMatchupStatsError)},n.getMatchupStatsSuccess=function(e){console.log(" public matchup succcesssssssss",e);n.state.teams;var t=e.data.schedule.map((function(e,t){for(var a=0,r=Object.entries(n.state.teams);a<r.length;a++){var o=Object(h.a)(r[a],2),l=(o[0],o[1]);if(l.id===e.home.teamId)var s=l.name;if(l.id===e.away.teamId)var c=l.name}return{week:e.matchupPeriodId,homeTeam:s=s,homeScore:Math.round(10*e.home.totalPoints)/10,awayTeam:c=c,awayScore:Math.round(10*e.away.totalPoints)/10,winner:"HOME"===e.winner?s:c}}));n.setState(Object(E.a)(Object(E.a)({},n.state),{},{members:e.members,schedule:t,seasonId:e.seasonId,status:e.status}))},n.getMatchupStatsError=function(e){console.log("get MatchupStats err ",e)},n.onTeamClick=function(e){e.target.id,e.value;console.log("team clicked",n.state)},n.getMyTeam=function(e){p.myTeam(13,1,551382,n.myTeamSuccess,n.myTeamError)},n.myTeamSuccess=function(e){console.log("public get TeamStats success",e)},n.myTeamError=function(e){console.log("get TeamStats err ",e)},n.state={leagueName:"",teams:[],seasonId:"",scoringPeriodId:"",leagueId:"",status:[],players:[],rosteredPlayers:[],freeAgents:[],schedule:[],matchupTableColumns:[{key:"week",name:"Wk",editable:!1},{key:"awayTeam",name:"AWAY",editable:!1},{key:"homeTeam",name:"HOME",editable:!1},{key:"awayScore",name:"Away Score",editable:!1},{key:"homeScore",name:"Home Score",editable:!1},{key:"winner",name:"Winner",editable:!1}],leagueInfo:"",teamsAtWeek:"",boxScoreForWeek:"",historicalScoreboard:"",week:""},n.getStandings(),n.getBoxScoreForWeek(),n.getTeamsAtWeek(),n.getLeagueInfo(),n.getHistoricalScoreboardForWeek(),n.getFreeAgents(),n.getMyTeam(),n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("select",{type:"dropdown",name:"scoringPeriodId",onChange:this.onChange},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"11"},"11"),r.a.createElement("option",{value:"12"},"12"),r.a.createElement("option",{value:"13"},"13"),r.a.createElement("option",{value:"14"},"14"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"16"},"16"),r.a.createElement("option",{value:"17"},"17")),this.state.teamsAtWeek&&this.state.boxScoreForWeek&&r.a.createElement("div",{className:"team-card-flex"},r.a.createElement(T,{teams:this.state.teamsAtWeek,matchups:this.state.boxScoreForWeek})),this.state.leagueInfo&&r.a.createElement("h1",null,this.state.leagueInfo.name.toUpperCase()," STANDINGS"),this.state.teamsAtWeek&&r.a.createElement(w,{teams:this.state.teamsAtWeek}),r.a.createElement("h1",null,"MATCHUPS "),r.a.createElement("table",{className:" table matchupsTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{id:"week"},"WEEK"),r.a.createElement("th",null,"Away Team"),r.a.createElement("th",null,"Away Score"),r.a.createElement("th",null,"Home Team"),r.a.createElement("th",null,"Home Score"),r.a.createElement("th",null,"Winner"))),r.a.createElement("tbody",null,this.state.boxScoreForWeek&&this.state.boxScoreForWeek.map((function(e,t){var a=e.week,n=e.winner,o=e.homeTeam,l=e.awayTeam,s=e.homeScore,c=e.awayScore;return r.a.createElement("tr",{key:t},r.a.createElement("td",{id:"week"},a),r.a.createElement("td",{className:s>c?"winner":"loser"},o),r.a.createElement("td",{className:s>c?"winner":"loser"},s),r.a.createElement("td",{className:s<c?"winner":"loser"},l),r.a.createElement("td",{className:s<c?"winner":"loser"},c),r.a.createElement("td",null,n))})))),this.state.leagueName&&r.a.createElement("div",{className:"team-card-flex"},r.a.createElement(T,{teams:this.state.teams,matchups:this.state.schedule})),r.a.createElement("h1",null,this.state.leagueName.toUpperCase()," STANDINGS"),this.state.leagueName&&r.a.createElement(w,{teams:this.state.teams}),r.a.createElement("h1",null,"MATCHUPS "),r.a.createElement("table",{className:" table matchupsTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{id:"week"},"WEEK"),r.a.createElement("th",null,"Away Team"),r.a.createElement("th",null,"Away Score"),r.a.createElement("th",null,"Home Team"),r.a.createElement("th",null,"Home Score"),r.a.createElement("th",null,"Winner"))),r.a.createElement("tbody",null,this.state.schedule&&this.state.schedule.map((function(e,t){var a=e.week,n=e.winner,o=e.homeTeam,l=e.awayTeam,s=e.homeScore,c=e.awayScore;return r.a.createElement("tr",{key:t},r.a.createElement("td",{id:"week"},a),r.a.createElement("td",{className:s>c?"winner":"loser"},o),r.a.createElement("td",{className:s>c?"winner":"loser"},s),r.a.createElement("td",{className:s<c?"winner":"loser"},l),r.a.createElement("td",{className:s<c?"winner":"loser"},c),r.a.createElement("td",null,n))}))))))}}]),a}(r.a.Component)),N=Object(I.e)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"homepage-container"},r.a.createElement("div",{className:"homepage-header"},r.a.createElement("h1",{className:"roster-title"},"Welcome to ",e.leagueName),r.a.createElement("h2",{className:"roster-title"},"Final Season Standings")),r.a.createElement(w,{teams:e.teams,onTeamClick:e.onTeamClick})))})),P=(a(138),Object(I.e)((function(e){var t=e.roster;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"roster-title"},e.header),r.a.createElement("table",{className:" table-responsive roster-table"},r.a.createElement("thead",{className:"roster-table-head"},r.a.createElement("tr",{className:"roster-table-head-row"},r.a.createElement("td",{className:"roster-table-head-data"},"Pos"),r.a.createElement("td",{className:"roster-table-head-data"},"Player(rk)"),r.a.createElement("td",{className:"roster-table-head-data bold"},"Actual Score"),r.a.createElement("td",{className:"roster-table-head-data"},"Projected Score"),r.a.createElement("td",{className:"roster-table-head-data"},"Deviation From Projection"))),r.a.createElement("tbody",null,t.map((function(t,a){for(var n=t.playerPoolEntry.player.stats,o=0,l=Object.entries(n);o<l.length;o++){var s=Object(h.a)(l[o],2),c=(s[0],s[1]);if(1==c.statSourceId&&1==c.statSplitTypeId&&c.scoringPeriodId==e.scoringPeriodId){var i=Math.round(10*c.appliedTotal)/10;break}}for(var m=0,u=Object.entries(n);m<u.length;m++){var d=Object(h.a)(u[m],2),g=(d[0],d[1]);if(0==g.statSourceId&&1==g.statSplitTypeId&&g.scoringPeriodId==e.scoringPeriodId){var p=Math.round(10*g.appliedTotal)/10;break}}null==p&&(p=0,t.playerPoolEntry.player.fullName="".concat(t.playerPoolEntry.player.fullName," *BYE*"));var E=t.playerPoolEntry.player.stats.length-1,f=Math.round(10*t.playerPoolEntry.player.stats[E].appliedAverage)/10,S=Math.round(10*(p-i))/10,v=(Math.round(10*(p-f)),0);return t.starter&&(v+=v),r.a.createElement("tr",{className:"roster-table-body-row"+(t.highlight&&20!==t.lineupSlotId?" highlight":"")+(t.lowlight&&20==t.lineupSlot?" lowlight":"")},r.a.createElement("td",{className:"roster-table-body-data"},t.lineupSlot),r.a.createElement("td",{className:"roster-table-body-data"}," ",t.playerPoolEntry.player.fullName," (",t.playerPoolEntry.ratings[0].positionalRanking,")"),r.a.createElement("td",{className:"roster-table-body-data bold"},p),r.a.createElement("td",{className:"roster-table-body-data proj"},i),r.a.createElement("td",{className:"roster-table-body-data"+(S>0?" positive":" negative")},S))}))))))}))),j=Object(I.e)((function(e){return console.log(e.team),r.a.createElement(r.a.Fragment,null,e.ready&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team-card col-12 card mt-10"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("img",{className:"team-card-img",src:e.team.logoURL}),r.a.createElement("div",{className:"row team-card-details col-lg-2 col-xl-2 col-md-2 col-sm-2"},r.a.createElement("h2",null,e.team.name),r.a.createElement("div",null,r.a.createElement("h5",null,e.team.wins,"-",e.team.losses,"-",e.team.record.ties),r.a.createElement("h5",null,"(",e.team.finalStandingsPosition," out of 10)"))),r.a.createElement("div",{className:"col-3 offset-6 pull-right"},r.a.createElement("div",null,r.a.createElement("h6",null,e.team.transactions.acquisitions," total acquisitions ")),r.a.createElement("div",null,r.a.createElement("h6",null,e.team.transactions.moveToActive," total roster changes ")),r.a.createElement("select",{type:"dropdown",name:"scoringPeriodId",onChange:e.onWeekChange,value:e.scoringPeriodId},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"11"},"11"),r.a.createElement("option",{value:"12"},"12"),r.a.createElement("option",{value:"13"},"13"),r.a.createElement("option",{value:"14"},"14"),r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"16"},"16"),r.a.createElement("option",{value:"17"},"17")))))),r.a.createElement("div",{className:"row"},r.a.createElement(k,{deviationFromProjection:e.deviationFromProjection,team:e.team,matchups:e.matchups,deviationFromOptimizedTotal:e.deviationFromOptimizedTotal})),r.a.createElement("div",{className:"roster-card"},r.a.createElement("div",{className:"roster-table-row row "},r.a.createElement(P,{header:"Actual Roster",scoringPeriodId:e.scoringPeriodId,roster:e.roster}),r.a.createElement("h1",{className:"roster-vs"},"VS."),r.a.createElement(P,{header:"Optimized Roster",scoringPeriodId:e.scoringPeriodId,roster:e.optimizedRoster})))))})),O=function(e){var t=e.state,a=e.onTeamClick,n=e.onWeekChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{path:"",component:""}),r.a.createElement(I.a,{exact:!0,path:"/fantasize_espn/",render:function(e){return r.a.createElement(N,Object.assign({},e,{leagueName:t.leagueName,teams:t.teams,onTeamClick:a}))}}),r.a.createElement(I.a,{path:"/fantasize_espn/teamPage",render:function(e){return r.a.createElement(j,Object.assign({},e,{team:t.activeTeam,matchups:t.activeTeamMatchups,roster:t.activeRoster,ready:t.ready,deviationFromProjection:t.deviationFromProjection,onWeekChange:n,scoringPeriodId:t.scoringPeriodId,deviationFromOptimizedTotal:t.deviationFromOptimizedTotal,optimizedRoster:t.optimizedRoster}))}}),r.a.createElement(I.a,{path:"/fantasize_espn/league",render:function(e){return r.a.createElement(F,Object.assign({},e,{team:t.activeTeam}))}}))},A=(a(139),Object(I.e)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"head-padding"},r.a.createElement("div",{className:"header-area blacknav"},r.a.createElement("div",{id:"sticky-header",className:"main-header-area"},r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement("div",{className:"row align-items-center no-gutters"},r.a.createElement("div",{className:"col-xl-2 col-lg-2"},r.a.createElement(y.b,{to:"/fantasize_espn/"},r.a.createElement("img",{src:"https://www.shareicon.net/data/256x256/2016/04/22/753659_legend_512x512.png",width:"45",height:"45",className:"d-inline-block align-top",alt:"HubLink logo"}))),r.a.createElement("div",{className:"col-xl-8 col-lg-8"},r.a.createElement("div",{className:"main-menu  d-none d-lg-block text-center"},r.a.createElement("nav",null,r.a.createElement("ul",{id:"navigation"},r.a.createElement("li",null,r.a.createElement("a",{className:"active",href:"/fantasize_espn/"},"Fantasize Home")))))),r.a.createElement("div",{className:"col-lg-2 d-none d-lg-block"},r.a.createElement("div",{className:"log_chat_area d-flex align-items-end"},r.a.createElement("a",{href:"/login","data-scroll-nav":"0",className:"say_hi log-hed"},"Log In")))))))))}))),W=Object(I.e)((function(e){return r.a.createElement(r.a.Fragment,null)})),M=function(e){Object(S.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getAllClicked=function(e){for(var t=0;t<17;t++);},n.onWeekChange=function(e){var t=e.target.name,a=e.target.value;console.log(t,a),n.setState(Object(f.a)({},t,a)),p.getRoster(a,n.state.activeTeam.id,551382,n.getRosterSuccess,n.getRosterError)},n.onTeamClick=function(e){p.getMatchupStats(n.state.scoringPeriodId,e.target.id,551382,n.getMatchupStatsSuccess,n.getMatchupStatsError),p.getRoster(n.state.scoringPeriodId,e.target.id,551382,n.getRosterSuccess,n.getRosterError),p.myTeam(n.state.scoringPeriodId,e.target.id,551382,n.getMyTeamSuccess,n.getMyTeamError);var t=e.target.id,a=(e.target.value,n.state.teams),r=n.state.matchups;n.setState(Object(E.a)(Object(E.a)({},n.state),{},{activeTeam:function(e){for(var t=e,n=0;n<a.length;n++)if(t==a[n].id)return a[n]}(t),activeTeamMatchups:function(e){for(var t=e,a=[],n=0;n<r.length;n++)t!=r[n].away.teamId&&t!=r[n].home.teamId||a.push(r[n]);return a}(t)}))},n.getRosterSuccess=function(e){console.log("my teams roster",e);var t=e.teams[0].roster.entries,a=[],r=[],o=0,l=0,s=0;t.map((function(e,t){e.name=e.playerPoolEntry.player.fullName;for(var s=e.playerPoolEntry.player.stats,c=0,i=Object.entries(s);c<i.length;c++){var m=Object(h.a)(i[c],2),u=(m[0],m[1]);if(1==u.statSourceId&&1==u.statSplitTypeId&&u.scoringPeriodId==n.state.scoringPeriodId){var d=Math.round(10*u.appliedTotal)/10;e.projectedPoints=Math.round(10*u.appliedTotal)/10;break}}for(var g=0,p=Object.entries(s);g<p.length;g++){var E=Object(h.a)(p[g],2),f=(E[0],E[1]);if(0==f.statSourceId&&1==f.statSplitTypeId&&f.scoringPeriodId==n.state.scoringPeriodId){e.points=Math.round(10*f.appliedTotal)/10;var S=Math.round(10*f.appliedTotal)/10;break}}null==S&&(S=0);var v=e.playerPoolEntry.player.stats.length-1,b=Math.round(10*e.playerPoolEntry.player.stats[v].appliedAverage)/10;Math.round(10*(S-d)),Math.round(10*(S-b));return 0==e.lineupSlotId&&(e.order=1,e.lineupSlot="QB",e.starter=!0),2==e.lineupSlotId&&(e.order=2,e.lineupSlot="RB",e.starter=!0),4==e.lineupSlotId&&(e.order=3,e.lineupSlot="WR",e.starter=!0),6==e.lineupSlotId&&(e.order=4,e.lineupSlot="TE",e.starter=!0),23==e.lineupSlotId&&(e.order=5,e.lineupSlot="FLEX",e.starter=!0),16==e.lineupSlotId&&(e.order=6,e.lineupSlot="D/ST",e.starter=!0),17==e.lineupSlotId&&(e.order=7,e.lineupSlot="K",e.starter=!0),20==e.lineupSlotId&&(e.order=8,e.lineupSlot="BENCH",e.starter=!1),21==e.lineupSlotId&&(e.order=9,e.lineupSlot="IR",e.starter=!1),e.starter&&(o+=d,l+=S),e.starter||(d,S),r.push(e),a.push(e)}));function c(e,t){for(var a=e,n=e.playerPoolEntry.player.eligibleSlots,r=t.lineupSlotId,o=(e.playerPoolEntry.player.fullName,t.playerPoolEntry.player.fullName,0);o<n.length;o++)if(!a.starter&&n[o]==r)var l=!0;return l}function i(e,t){for(var a=e.playerPoolEntry.player.eligibleSlots,n=t.lineupSlotId,r=(e.playerPoolEntry.player.fullName,t.playerPoolEntry.player.fullName,23!==t.lineupSlotId&&20!==t.lineupSlotId),o=23==e.lineupSlotId,l=0;l<a.length;l++)if(r&&o&&a[l]==n)var s=!0;return s}function m(e){return e.map((function(t,a){for(var n=t,r=(t.playerPoolEntry.player.eligibleSlots,t.playerPoolEntry.player.fullName),o=0,l=Object.entries(e);o<l.length;o++){var m=Object(h.a)(l[o],2),u=(m[0],m[1]),d=u.playerPoolEntry.player.fullName,g=c(n,u),p=i(n,u);if(u.starter&&g&&t.points>u.points){var E=Math.round(10*(t.points-u.points))/10,f=20,S=u.lineupSlotId,v=t.lineupSlot,b=u.lineupSlot,y=t.order,I=u.order;t.lineupSlotId=S,t.starter=!0,t.highlight=!0,t.lineupSlot=b,t.order=I,u.order=y,u.lineupSlot=v,u.lineupSlotId=f,u.starter=!1,u.lowlight=!0,s+=E}if(u.starter&&p&&t.points>u.points){console.log("".concat(r," played at ").concat(t.lineupSlot," and outscored ").concat(d," playing at ").concat(u.lineupSlot," by ").concat(E," points"));f=t.lineupSlotId,S=u.lineupSlotId,v=t.lineupSlot,b=u.lineupSlot,y=t.order,I=u.order;t.lineupSlotId=S,t.highlight=!0,t.lineupSlot=b,t.order=I,u.order=y,u.lineupSlot=v,u.lineupSlotId=f,u.lowlight=!0}}return t}))}var u=m(JSON.parse(JSON.stringify(a))),d=m(JSON.parse(JSON.stringify(u))),g=m(JSON.parse(JSON.stringify(d))),p=m(JSON.parse(JSON.stringify(g)));function f(e,t){var a=e.order,n=t.order,r=0;return a>n?r=1:a<n&&(r=-1),r}console.log("optimizedTeamV1: ",u),console.log("optimizedTeamV2: ",d),console.log("optimizedTeamV3: ",g),console.log("optimizedTeamV4: ",p);var S=p.sort(f),v=a.sort(f),b=Math.round(10*(l-o))/10;n.setState(Object(E.a)(Object(E.a)({},n.state),{},{activeRoster:v,ready:!0,projectedTotal:o,actualScore:l,deviationFromProjection:b,deviationFromOptimizedTotal:10*Math.round(s)/10,optimizedRoster:S}))},n.getRosterError=function(e){console.log("get roster error: ",e)},n.getMyTeamSuccess=function(e){},n.getMyTeamError=function(e){console.log("MY TEAM FAILED : ",e)},n.onGetMatchupStats=function(e){p.getMatchupStats(13,1,551382,n.getMatchupStatsSuccess,n.getMatchupStatsError)},n.getMatchupStatsSuccess=function(e){n.state.teams;var t=e.data.schedule.map((function(e,t){for(var a=0,r=Object.entries(n.state.teams);a<r.length;a++){var o=Object(h.a)(r[a],2),l=(o[0],o[1]);if(l.id===e.home.teamId)var s=l.id,c=l.name,i=l.abbreviation;if(l.id===e.away.teamId)var m=l.id,u=l.abbreviation,d=l.name}i=i,u=u;return{homeId:s=s,awayId:m=m,week:e.matchupPeriodId,homeTeam:c=c,homeScore:Math.round(10*e.home.totalPoints)/10,awayTeam:d=d,awayScore:Math.round(10*e.away.totalPoints)/10,winner:"HOME"===e.winner?i:u,homeAbbrev:i,awayAbbrev:u}}));n.setState(Object(E.a)(Object(E.a)({},n.state),{},{members:e.members,schedule:t,activeTeamMatchups:function(e,t){for(var a=e,n=t,r=[],o=0;o<a.length;o++)n!=a[o].awayId&&n!=a[o].homeId||r.push(a[o]);return r}(t,n.state.activeTeam.id),seasonId:e.seasonId,status:e.status}))},n.getMatchupStatsError=function(e){console.log("get MatchupStats err ",e)},n.onGetLeagueInfoSuccess=function(e){n.setState(Object(E.a)(Object(E.a)({},n.state),{},{leagueName:e.name}))},n.onGetLeagueInfoError=function(e){console.log("could not get league info: ",e)},n.onTeamsAtWeekSuccess=function(e){var t=e.map((function(e,t){return{idx:t,name:e.name,abbreviation:e.abbreviation,id:e.id,logo:e.logoURL,totalPointsFor:e.totalPointsScored,totalPointsAgainst:e.regularSeasonPointsAgainst,winningPercentage:e.winningPercentage,finalStandingsPosition:e.finalStandingsPosition,playoffSeed:e.playoffSeed,rosterAtWeek:e.roster,wins:e.wins,losses:e.losses}})).sort((function(e,t){var a=e.finalStandingsPosition,n=t.finalStandingsPosition,r=0;return a>n?r=1:a<n&&(r=-1),r}));n.setState(Object(E.a)(Object(E.a)({},n.state),{},{teams:t}))},n.onTeamsAtWeekError=function(e){console.log("TeamsAtWeek errror",e)},n.onStandingsSuccess=function(e){var t=e.settings.name,a=e.id;var r=e.teams.map((function(e,t){var a,n=[e.location,e.nickname].join(" "),r=e.id,o=e.abbrev,l=e.owners[0],s=e.logo,c=Math.round(10*e.points)/10,i=e.record.overall,m=e.record.overall.wins,u=e.record.overall.losses,d=Math.round(10*e.record.overall.pointsAgainst)/10,g=e.rankCalculatedFinal,p=e.playoffSeed,E=e.roster,h=e.transactionCounter;return a={id:r,name:n,abbreviation:o,owner:l},Object(f.a)(a,r,n),Object(f.a)(a,"logoURL",s),Object(f.a)(a,"totalPointsFor",c),Object(f.a)(a,"totalPointsAgainst",d),Object(f.a)(a,"record",i),Object(f.a)(a,"wins",m),Object(f.a)(a,"losses",u),Object(f.a)(a,"finalStandingsPosition",g),Object(f.a)(a,"playoffSeed",p),Object(f.a)(a,"roster",E),Object(f.a)(a,"transactions",h),a})).sort((function(e,t){var a=e.finalStandingsPosition,n=t.finalStandingsPosition,r=0;return a>n?r=1:a<n&&(r=-1),r}));n.setState(Object(E.a)(Object(E.a)({},n.state),{},{leagueName:t,teams:r,seasonId:a,matchups:e.schedule}))},n.onStandingsrror=function(e){console.log("standings err",e)},n.onBoxScoreSuccess=function(e){},n.onBoxScoreError=function(e){console.log("box score error",e)},n.state={leagueName:"",scoringPeriodId:"1",teams:"",activeTeam:"",ready:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log("page loaded"),p.getStandings(551382,this.onStandingsSuccess,this.onStandingsrror),p.boxScore(this.state.scoringPeriodId,551382,this.onBoxScoreSuccess,this.onBoxScoreError)}},{key:"render",value:function(){return console.log("this.state",this.state),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"layout-inner"},r.a.createElement("div",{className:"layout-navbar"},r.a.createElement("div",{className:"navbar-row"},r.a.createElement(A,{teams:this.state.teams,onWeekChange:this.onWeekChange,state:this.state,onTeamClick:this.onTeamClick}))),r.a.createElement("div",{className:"layout-container"},r.a.createElement("div",{className:"layout-content"},r.a.createElement("div",{className:"col-12"},this.state.leagueName&&this.state.teams&&r.a.createElement(O,{state:this.state,onTeamClick:this.onTeamClick,activeTeam:this.state.activeTeam,activeRoster:this.state.activeRoster,onWeekChange:this.onWeekChange})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("header",null,r.a.createElement(W,null))))))}}]),a}(r.a.Component),B=Object(I.e)(M);var C=Object(I.e)((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,t,a){e.exports=a(140)},69:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},71:function(e,t,a){},97:function(e,t){},99:function(e,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.0f3408e9.chunk.js.map