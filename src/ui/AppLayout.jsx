import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import AppHeader from "./AppHeader";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`
const Main = styled.main`
    margin: 2rem;
`

export default function AppLayout(){
    return(
        <Grid>
        <AppHeader />
        <SideBar />
        <Main>
            <Outlet />
        </Main>
        </Grid>
    )
}