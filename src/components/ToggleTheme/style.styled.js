import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  overflow: hidden;
  padding: 0.25rem;
  position: relative;
  width: 3rem;
  height: 1.5rem;

  svg {
    height: auto;
    width: 15px;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-1px) !important' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px) !important' : 'translateY(-2px) translateX(8px) !important'};
    }
  }
`;