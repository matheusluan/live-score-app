import MatchCard from "./match-card"
import { Match } from "@/types/match"

type Props = {
    matches: Match[]
}

export default function MatchList({ matches }: Props) {
    return (
        <div>
            {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
            ))}
        </div>
    )
}