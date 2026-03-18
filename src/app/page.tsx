"use client"

import { useState } from "react"
import data from "@/data/sports.json"
import Filters from "@/components/filters"
import { Match, MatchStatus } from "@/types/match"
import Container from "@/components/container"
import MatchCard from "@/components/match-card"

export default function Home() {

  const [filter, setFilter] = useState<"live" | "result" | "upcoming" | "all">("live");

  const matches: Match[] = data as Match[]

  const counts = {
    all: matches.length,
    live: matches.filter(m => m.status.type === MatchStatus.InProgress).length,
    result: matches.filter(m => m.status.type === MatchStatus.Finished).length,
    upcoming: matches.filter(m => m.status.type === MatchStatus.NotStarted).length
  }

  const filtered = matches.filter(m => {
    if (filter === "live") return m.status.type === MatchStatus.InProgress
    if (filter === "result") return m.status.type === MatchStatus.Finished
    if (filter === "upcoming") return m.status.type === MatchStatus.NotStarted
    return true
  })

  return (
    <main>
      <Container>

        <h1>Live Scores</h1>

        <Filters
          filter={filter}
          setFilter={setFilter}
          counts={counts}
        />

        {filtered.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </Container>
    </main>
  )
}