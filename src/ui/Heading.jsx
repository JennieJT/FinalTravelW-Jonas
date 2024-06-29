import styled, {css} from "styled-components";

const Heading = styled.h1`
${(props) => 
    props.as === "h1" &&
    css`
    font-size:3.5rem;
    font-weight: 1000;
    `}

${(props) =>
    props.as === "h2" &&
    css`
    font-size:2rem;
    font-weight: 800;`
}
`;

export default Heading;