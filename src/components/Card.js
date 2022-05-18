import React from 'react';
import {CardContainer, CardTitle, CountryCard, Country, Information, IconCountry, Flag} from '../styles.js';

function Card(props){
    return(
        <CardContainer>
            {/* <CardTitle >{props.continent}</CardTitle> */}
            <CardTitle>{props.language}</CardTitle>
            <CountryCard>
                <IconCountry>
                    <Flag src={props.flag} alt="Country flag"></Flag>
                    <Country>{props.name}</Country>
                </IconCountry>
                <Information>Currency: {props.currency}</Information>
            </CountryCard>
        </CardContainer>
    );
}

export {Card};