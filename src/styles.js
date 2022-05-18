import styled from 'styled-components';

export const Container = styled.div`

    min-width: 290px;
    height: 200px;
    margin: 40px 20px 20px 20px;
`

export const Title = styled.h1`
    color: #17456B;
    font-weight: 700;
`

export const Text = styled.p`
    color: #0F1D2B;
    font-weight: 300;
    margin-top: 18px;
    margin-bottom: 18px;
    font-size: 12px;
`

export const IconContainer = styled.div`
    position: relative;
`

export const CountrySearch = styled.input`
    width: 100%;
    background-color: transparent;
    border: 1px solid #419FB7;
    border-radius: 8px;
    box-shadow: 0px 0px 9px -1px #419FB7;
    height: 25px;
    font-family: 'Roboto', sans-serif;
    padding-left: 25px; 
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 18px 0 10px 0;
`

export const TextGroup = styled.h4`
    color: #17456B;
    font-weight: 700;
`

export const Buttons = styled.div`
    
`

export const Button = styled.button`
    margin-right: 5px;
    border-radius: 100px;
    width: 80px;
    height: 25px;
    border: 2px solid #419FB7;
    background-color: transparent;
    color: #17456B;
    font-weight: 300;

    &:hover{
        background-color: #17456B;
        color: #F5F6EE;
        cursor: pointer;
        transition: background-color 0.6s;
    }
    
`

export const CardContainer = styled.div`
    width: 200px;
    min-width: 290px;
`
export const CardTitle = styled.h3`
    color: #419FB7;
`

export const CountryCard = styled.div`
    border: 2px solid #17456B;
    border-radius: 5px;
    width: 60%;
    margin: 15px 0;
    padding: 5px;
`
export const IconCountry = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
`

export const Flag = styled.img`
    height: 20px;
`

export const Country = styled.h5`
    color: #0F1D2B;
    font-weight: 700;
    font-size: 15px;
    margin: 0 8px;
`

export const Information = styled.p`
    margin: 10px 8px;
    color: #0F1D2B;
    font-weight: 400;
    font-size: 12px; 
`