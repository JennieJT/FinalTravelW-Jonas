import styled, {css} from "styled-components";

const Header = styled.h1`
${(props) => 
    props.type === "h1" &&
    css`
    font-size:3.5rem;
    font-weight: 1000;
    `}

${(props) =>
    props.type === "h2" &&
    css`
    font-size:2rem;
    font-weight: 800;`
}
`;

export default Header;