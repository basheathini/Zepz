import {styled} from 'styled-components/native';

const StyledButton = styled.Button<StyledButtonProps>`
  font-weight: ${({fontWeight}) => fontWeight || '700'};
  font-size: ${({fontSize}) => fontSize || '10px'};
  width: ${({width}) => width || '100%'};
  background-color: ${({fontColor}) => fontColor || '#000000'};
`;

const StyledText = styled.Text<StyledTextProps>`
  color: ${({fontColor}) => fontColor || '#000000'};
  font-weight: ${({fontWeight}) => fontWeight || '700'};
  font-size: ${({fontSize}) => fontSize || '14px'};
  padding: 1px;
`;

type StyledButtonProps = {
  fontSize?: string;
  fontColor?: string;
  fontWeight?: string;
  width?: string;
};

type StyledTextProps = {
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  marginTop?: string;
  textAlign?: string;
  textTransform?: string;
  marginRight?: string;
  marginLeft?: string;
};

export {StyledButton, StyledText};
