
import styled from "styled-components";
import StatusBadge from "./status-badge";

type Props = {
    match: any
}

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Score = styled.div`
  font-size: 20px;
  font-weight: 600;
`

export default function MatchCard({ match }: Props) {
    return (
        <Card>
            <Teams>
                <span>{match.homeTeam.name}</span>
                <span>{match.awayTeam.name}</span>
            </Teams>

            <Score>
                {match.homeScore.current} - {match.awayScore.current}
            </Score>

            <StatusBadge
                status={match.status.type}
                liveStatus={match.liveStatus}
            />
        </Card>
    )
}