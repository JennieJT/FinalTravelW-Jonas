import styled from "styled-components"
import Logo from "./Logo"
import MainNav from "./MainNav"

const Side = styled.div`
    grid-row: 1/-1;
    border-right: 0.1rem solid;
`

export default function SideBar(){
    return(
        <Side>
            <Logo />
            <MainNav />
        </Side>
    )
}