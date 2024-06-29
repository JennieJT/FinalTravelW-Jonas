import styled from "styled-components";
const StyledRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export default function Row({children}){
    return(
        <StyledRow>
            {children}
        </StyledRow>
    )
}