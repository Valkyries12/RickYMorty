import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import imagen from "./images/background2.jpg";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import CharacterCard from "./components/CharacterCard";
import axios from "axios";
import CharacterDescriptionCard from "./components/CharacterDescriptionCard";
import cursorImage from "./images/cursor.png";


const useStyles = makeStyles({
  characterList: {
    overflowX: "hidden",
    overflowY: "auto",
    height: "600px",
    '&::-webkit-scrollbar': {
      width: "5px",
      height: "5px",
      backgroundColor: "transparent"
    },
  
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: "#75FA69"
    },
    scrollbarColor: "#75FA69 transparent", /* thumb and track color */
    scrollbarWidth: "thin",
    cursor: `url(${cursorImage}), auto`,
  },  
  listLayout: {
    display: "flex",
    flexWrap: "wrap"
  },
  itemLayout: {
    margin: "2%",
  },
});

function App() {
  const classes = useStyles();

  //estados
  const [characterList, setCharacterList] = useState([]);
  const [characterInfo, setCharacterInfo] = useState();
  const [searchBox, setSearchBox] = useState("");
  
  

  useEffect(() => {
    getCharacters(searchBox);
    console.log(searchBox)
  }, [searchBox]);
//si esta filtrado busco un personaje , sino por defecto son todos
  /*const getCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(function (response) {
        // handle success
        console.log(response);
        setCharacterList(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };*/

  const getCharacters = (searchBox) => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(function (response) {
        // handle success
        console.log(response);
        const filteredChars = response.data.results.filter(character => 
          character.name.includes(searchBox)
        )
        //console.log(filteredChars)
        setCharacterList(filteredChars);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        
      });
  };



  const handleShowCharacterInfo = (character) => {
    setCharacterInfo([character]);

  }

  return (
    <>
      <Header setSearchBox={setSearchBox}/>
      <Grid container spacing={3} justify={"space-around"}>
        <Grid item md={5}>
          {characterInfo ? (
            <CharacterDescriptionCard  characterInfo={characterInfo}/>
            
          ) : <div></div>

          }
        </Grid>

        <Grid
          className={classes.characterList}
          container
          item
          md={5}
          direction="row"
          spacing={4}
          justify="center"
        >
          
          {characterList.map( (character) => {
            return (
              <Grid item xs={10} sm={5} lg={4} key={character.id} onClick={() => handleShowCharacterInfo(character)}>
                
                  <CharacterCard characterInfo={character} />
                
              </Grid>
            )
          })}
          
        </Grid>
      </Grid>
    </>
  );
}

export default App;
