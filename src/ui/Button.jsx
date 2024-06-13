import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.0rem;
    padding: 0rem 0.5rem;
    text-transform: uppercase;
    font-weight: 200;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: black;
    background-color:  #ca2a2a;

    &:hover {
      background-color: #e19d9d;
    }
  `,
  secondary: css`
    color: white;
    background: var(--color-grey-0);
    background-color: blue;
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border-radius: var(--border-radius-lg);
  background-color: var(--color-indigo-100);
  border: 1px;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`
Button.defaultProps = {
  variation: "primary",
  size: "small",
}

export default Button;