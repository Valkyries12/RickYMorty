import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import imagen from "./images/background2.jpg";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import CharacterCard from "./components/CharacterCard";
import characterDescriptionCard from "./components/CharacterDescriptionCard";
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

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
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
  };


  const handleShowCharacterInfo = (character) => {
    setCharacterInfo([character]);

  }

  return (
    <>
      <Header />
      <Grid container spacing={3} justify={"space-around"} style={{border: "1px solid green"}}>
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
        >
          <ul className={classes.listLayout}>
          {characterList.map( (character) => {
            return (
              
                <li className={classes.itemLayout} key={character.id} onClick={() => handleShowCharacterInfo(character)}>
                  <CharacterCard characterInfo={character} />
                </li>
            )
          })}
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
