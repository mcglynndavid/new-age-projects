import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#333333" : "#000000")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #FFC800;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? "#111111" : "#111111")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`