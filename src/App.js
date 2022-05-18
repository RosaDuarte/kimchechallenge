import React from "react";
import "./App.css";
import {Container, Title, Text, CountrySearch, ButtonContainer, TextGroup, Buttons,  Button, IconContainer} from './styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {Card} from "./components/Card";


const countries = [
  {
    "id": 1,
    "name": "Argentina",
    "flag": "./flags/198-argentina.svg",
    "language": "Spanish",
    "continent": "South America",
    "currency": "Argentine peso"
  },
  {
    "id": 2,
    "name": "Australia",
    "flag": "./flags/234-australia.svg",
    "language": "English",
    "continent": "Oceania",
    "currency": "Australian dollar"
  },
  {
    "id": 3,
    "name": "Chile",
    "flag": "./flags/131-chile.svg",
    "language": "Spanish",
    "continent": "South America",
    "currency": "Chilean peso"
  },
  {
    "id": 4,
    "name": "China",
    "flag": "./flags/034-china.svg",
    "language": "Mandarin",
    "continent": "Asia",
    "currency": "Yuan"
  },
  {
    "id": 5,
    "name": "Colombia",
    "flag": "./flags/177-Colombia.svg",
    "language": "Spanish",
    "continent": "South America",
    "currency": "Colombian peso"
  },
  {
    "id": 6,
    "name": "France",
    "flag": "./flags/195-france.svg",
    "language": "French",
    "continent": "Europe",
    "currency": "Euro"
  },
  {
    "id": 7,
    "name": "Germany",
    "flag": "./flags/162-germany.svg",
    "language": "German",
    "continent": "Europe",
    "currency": "Euro"
  },
  {
    "id": 8,
    "name": "India",
    "flag": "./flags/246-india.svg",
    "language": "Hindi",
    "continent": "Asia",
    "currency": "Indian rupee"
  },
  {
    "id": 9,
    "name": "Italy",
    "flag": "./flags/013-italy.svg",
    "language": "Italian",
    "continent": "Europe",
    "currency": "Euro"
  },
  {
    "id": 10,
    "name": "Jamaica",
    "flag": "./flags/037-jamaica.svg",
    "language": "English",
    "continent": "North America",
    "currency": "Jamaican dollar"
  },
  {
    "id": 11,
    "name": "Japan",
    "flag": "./flags/063-japan.svg",
    "language": "Japanese",
    "continent": "Asia",
    "currency": "Japanese yen"
  },
  {
    "id": 12,
    "name": "Mexico",
    "flag": "./flags/252-mexico.svg",
    "language": "Spanish",
    "continent": "North America",
    "currency": "Mexican peso"
  },
  {
    "id": 13,
    "name": "Netherlands",
    "flag": "./flags/237-netherlands.svg",
    "language": "Dutch",
    "continent": "Europe",
    "currency": "Euro"
  },
  {
    "id": 14,
    "name": "Norway",
    "flag": "./flags/143-norway.svg",
    "language": "Norwegian",
    "continent": "Europe",
    "currency": "Norwegian krone"
  },
  {
    "id": 15,
    "name": "Peru",
    "flag": "./flags/188-peru.svg",
    "language": "Spanish",
    "continent": "South America",
    "currency": "Sol"
  },
  {
    "id": 16,
    "name": "Portugal",
    "flag": "./flags/224-portugal.svg",
    "language": "Portuguese",
    "continent": "Europe",
    "currency": "Euro"
  },
  {
    "id": 17,
    "name": "Puerto Rico",
    "flag": "./flags/028-puerto-rico.svg",
    "language": "Spanish",
    "continent": "North America",
    "currency": "American dollar"
  },
  {
    "id": 18,
    "name": "Spain",
    "flag": "./flags/128-spain.svg",
    "language": "Spanish",
    "continent": "Europe",
    "currency": "Euro"
  },
  {
    "id": 19,
    "name": "United States",
    "flag": "./flags/226-united-states.svg",
    "language": "English",
    "continent": "North America",
    "currency": "American dollar"
  },
  {
    "id": 20,
    "name": "Uruguay",
    "flag": "./flags/088-uruguay.svg",
    "language": "Spanish",
    "continent": "South America",
    "currency": "Uruguayan peso"
  },
  {
    "id": 21,
    "name": "Venezuela",
    "flag": "./flags/139-venezuela.svg",
    "language": "Spanish",
    "continent": "South America",
    "currency": "Bolivar"
  } 
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      coutriesList: countries,
      filterValue: "",
    }; 
    // this.handleClick = this.handleClick.bind(this); 
  }
  handleFilter = (event) => {
    const coutriesList = countries.filter((item)=>{
      if(event.target.value === "") return true;
      return item.name.toUpperCase().includes( event.target.value.toUpperCase());
    });
    this.setState({coutriesList});
  }

  // handleClick(props) {} Esta función tenia que hacer el cambio al oprimir los botones


  render() {
    const {coutriesList} = this.state;;
    return(
      <div className="main--container">
        <Container>
          <Title>Country search</Title>
            <Text>Some random text</Text>
          <IconContainer>
            <FontAwesomeIcon style={{position: "absolute", left: "5px", top: "4px", color: "#17456B"}} icon={ faMagnifyingGlass }/>
            <CountrySearch 
              type="text" 
              onChange={this.handleFilter}
            />
          </IconContainer>
          <ButtonContainer>
            <TextGroup>Group by:</TextGroup>
            <Buttons>
                <Button >Continent</Button>
                <Button >Language</Button>
                {/* <Button onClick={this.handleClick}>Language</Button> */}
            </Buttons>   
          </ButtonContainer>
        </Container>
        {coutriesList.length > 0 && coutriesList.map((item, i) =>
          <Card 
            key={i} 
            name={item.name} 
            flag={item.flag} 
            language={item.language} 
            currency={item.currency}
            continent={item.continent}
            type={this.type} 
          />
        )}
      </div>
    )
  }
}

export default App;
