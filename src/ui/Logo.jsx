import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: 0rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="src/data/img/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
