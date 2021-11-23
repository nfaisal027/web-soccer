import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";


export const SEASON_SCHEDULE : Schedule[] = [
    {id:1,PlayingDate:new Date(2021,8,10),HomeTeam: 'RRQ',AwayTeam:'EVOS',HomeScore:3,AwayScore:2,RefName:'SAPPO',notes:'Pertandingan Eclasicco MPL'},
    {id:2,PlayingDate:new Date(2021,8,11),HomeTeam: 'EVOS',AwayTeam:'BTR',HomeScore:3,AwayScore:2,RefName:'PASCOL',notes:'Pertandingan MPL'},
    {id:2,PlayingDate:new Date(2021,9,11),HomeTeam: 'Alter Ego',AwayTeam:'Onic',HomeScore:3,AwayScore:2,RefName:'Gilang',notes:'Pertandingan MPL'},

]

export const TEAMS: Team [] = [
    {id:1,name : 'Evos',type:'Over 30'},
    {id:2,name : 'BTR', type:'Over 25'},
    {id:3,name : 'Alter Ego', type: 'Over 20'},
]