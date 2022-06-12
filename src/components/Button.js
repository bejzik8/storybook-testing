import S from 'styled-components'

const Button = ({ text, backgroundColor }) => 
    <StyledButton backgroundColor={backgroundColor}>
        {text}
    </StyledButton>

const StyledButton = S.button`
    height: 36px;
    line-height: 20px;
    font-size: 16px;
    color: navy;
    border-radius: 18px;
    border: none;
    padding: 8px 20px;
    cursor: pointer;

    ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`

export default Button