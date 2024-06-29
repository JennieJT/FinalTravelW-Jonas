import {
  HiOutlineBookOpen,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineViewBoards,
} from "react-icons/hi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

const Name = styled.div`
  opacity: 0;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: opacity 0.3s ease, max-width 0.3s ease;
  padding-left: 0.5rem;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  &:hover ${Name} {
    opacity: 1;
    max-width: 10rem;
  }
`;

const Link = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export default function MainNav() {
  return (
    <NavList>
      <Link to="/">
        <HiOutlineUser /> <Name>Home</Name>
      </Link>
      <Link to="bookings">
        <HiOutlineBookOpen /> <Name>Bookings</Name>
      </Link>
      <Link to="cabins">
        <HiOutlineHome />
        <Name>Cabins</Name>
      </Link>
      <Link to="dashboard">
        <HiOutlineViewBoards />
        <Name>Dashboard</Name>
      </Link>
      <Link to="settings">
        <HiOutlineCog6Tooth />
        <Name>Settings</Name>
      </Link>
    </NavList>
  );
}
