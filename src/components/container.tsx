import styled from "styled-components"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px 16px;

  @media (min-width: 640px) {
    padding: 0 24px;
  }
`

export default function Container({ children }: Props) {
    return <StyledContainer>{children}</StyledContainer>
}