import styled from "@emotion/styled";

const Button = styled.button`
  display: inline-block;
  font-family: inherit;
  border: none;
  color: white;
  background-color: black;
  border-radius: 0.4rem;
  padding: 0.4rem 0.8rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:active {
    transform: scale(0.96);
  }
`;

export default Button;

export const SmallButton = styled(Button)`
  padding: 0.2rem 0.4rem;
  font-weight: 400;
  font-size: 0.8rem;
`;
