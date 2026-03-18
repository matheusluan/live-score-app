export enum MatchStatus {
    InProgress = "inprogress",
    NotStarted = "notstarted",
    Finished = "finished",
    Canceled = "canceled",
}

export interface Match {
    id: string
    name: string
    competition: string
    country: string
    timestamp: number

    status: {
        type: MatchStatus
    }

    homeTeam: {
        name: string
    }

    awayTeam: {
        name: string
    }

    homeScore: {
        current: number
    }

    awayScore: {
        current: number
    }

    liveStatus: string
}