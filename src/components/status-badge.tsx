
import styled from "styled-components"

type Props = {
    status: "inprogress" | "finished" | "notstarted"
    liveStatus?: string
}

const Badge = styled.span<{ type: string }>`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: white;

  background: ${({ type }) => {
        if (type === "inprogress") return "red"
        if (type === "finished") return "#f5F5F5"
        return "#f59e0b"
    }};
`

export default function StatusBadge({ status, liveStatus }: Props) {
    if (status === "inprogress") {
        return <Badge type={status}>LIVE {liveStatus}</Badge>
    }

    if (status === "finished") {
        return <Badge type={status}>FT</Badge>
    }

    return <Badge type={status}>PRE</Badge>
}