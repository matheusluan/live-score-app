"use client"

import styled from "styled-components"

type FilterType = "live" | "result" | "upcoming" | "all";

type Props = {
    filter: FilterType
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>
    counts: {
        all: number
        live: number
        result: number
        upcoming: number
    }
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`

const Button = styled.button<{ $active: boolean }>`
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  background: ${({ $active }) => ($active ? "#111" : "#ddd")};
  color: ${({ $active }) => ($active ? "white" : "black")};
`

export default function Filters({ filter, setFilter, counts }: Props) {
    return (
        <Container>

            <Button
                $active={filter === "all"}
                onClick={() => setFilter("all")}
            >
                ALL ({counts.all})
            </Button>

            <Button
                $active={filter === "live"}
                onClick={() => setFilter("live")}
            >
                LIVE ({counts.live})
            </Button>

            <Button
                $active={filter === "result"}
                onClick={() => setFilter("result")}
            >
                RESULT ({counts.result})
            </Button>

            <Button
                $active={filter === "upcoming"}
                onClick={() => setFilter("upcoming")}
            >
                UPCOMING ({counts.upcoming})
            </Button>

        </Container>
    )
}