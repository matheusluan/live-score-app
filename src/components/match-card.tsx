import styled from "styled-components"
import { MatchStatus } from "@/types/match"
import { format } from "date-fns"

type Props = {
    match: any
}

const Card = styled.div`
  background: #2b2b2b;
  color: white;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  text-align: center;
`

const Country = styled.p`
  font-size: 12px;
  text-transform: uppercase;
`;

const League = styled.p`
  font-size: 18px;
  margin: 5px 0px
`

const Status = styled.div<{ type: string }>`
  font-size: 11px;
  margin-top: 10px;

  color: ${({ type }) => {
        switch (type) {
            case MatchStatus.Finished:
                return "#4caf50"
            case MatchStatus.InProgress:
                return "#ffc107"
            case MatchStatus.Canceled:
                return "#f44336"
            default:
                return "#ccc"
        }
    }};
`

const Score = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 12px 0;
`

const TeamsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12px;
  font-size: 14px;
`

const TeamName = styled.span`
  flex: 1;
`

const CircleWrapper = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
`

const CircleProgress = styled.div<{ progress: number; $active?: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  background: ${({ progress, $active }) =>
        $active
            ? `conic-gradient(#4caf50 ${progress}%, #444 ${progress}%)`
            : "#444"};
`

const CircleInner = styled.div<{ type: string }>`
  position: absolute;
  top: 4px;
  left: 4px;

  width: 34px;
  height: 34px;
  border-radius: 50%;

  background: #2b2b2b;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
    color: ${({ type }) => {
        switch (type) {
            case MatchStatus.Finished:
                return "#4caf50"
            default:
                return "#ccc"
        }
    }};
`

export default function MatchCard({ match }: Props) {
    const getStatusOrDate = () => {
        switch (match.status.type) {
            case MatchStatus.InProgress:
                return "LIVE"

            case MatchStatus.Finished:
                return "ENDED"

            case MatchStatus.Canceled:
                return "CANCELED"

            case MatchStatus.NotStarted:
                const date = new Date(match.timestamp * 1000);

                return format(date, "MMM d, HH:mm");

            default:
                return ""
        }
    }

    const getMinute = () => {
        switch (match.status.type) {
            case MatchStatus.Finished:
                return "FT"
            case MatchStatus.NotStarted:
                return ""
            default:
                return match.liveStatus + "'" || "0"
        }
    }

    const getProgress = () => {
        if (match.status.type == MatchStatus.Finished) {
            return 100
        } else if (match.liveStatus == 'HT') { return 50 }
        else if (match.status.type !== MatchStatus.InProgress) return 0

        const minute = Number(match.liveStatus) || 0
        return Math.min((minute / 90) * 100, 100)
    }

    return (
        <Card>
            <Country>
                {match.country}
            </Country>

            <League>
                {match.competition}
            </League>

            <Status type={match.status.type}>
                {getStatusOrDate()}
            </Status>

            <Score>
                {match.homeScore.current || 0} - {match.awayScore.current || 0}
            </Score>

            <TeamsRow>
                <TeamName>{match.homeTeam.name}</TeamName>

                <CircleWrapper>
                    <CircleProgress
                        $active={match.status.type === MatchStatus.InProgress || match.status.type === MatchStatus.Finished}
                        progress={getProgress()}
                    />
                    <CircleInner type={match.status.type}>{getMinute()}</CircleInner>
                </CircleWrapper>

                <TeamName>
                    {match.awayTeam.name}
                </TeamName>
            </TeamsRow>
        </Card>
    )
}