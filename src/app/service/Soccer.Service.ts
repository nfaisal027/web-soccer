import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE, TEAMS } from "./scheduleData";

@Injectable(
    {providedIn:'root'}
)
export class SoccerService {
    
    getAllTeamsAsync() {
      throw Promise.resolve(SEASON_SCHEDULE)
    }
    getSchedule(){
        return SEASON_SCHEDULE;
    }

    getScheduleAsync(){
        return Promise.resolve(TEAMS)
    }
    getAllTeams(){
        return TEAMS;
    }
}