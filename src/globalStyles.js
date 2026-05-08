import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 260ms ease, color 260ms ease;
  }

  ::selection {
    background: ${({ theme }) => theme.secondary};
    color: #ffffff;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(148, 163, 184, 0.14);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.primary}
    );
    border-radius: 999px;
  }
`;
