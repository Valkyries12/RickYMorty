import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import imagen from "./images/background2.jpg";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import CharacterCard from "./components/CharacterCard";
import axios from "axios";


const useStyles = makeStyles({
  characterList: {
    overflowX: "hidden",
    overflowY: "auto",
    height: "600px",
  },
});

function App() {
  const classes = useStyles();

  //estados
  const [characterList, setCharacterList] = useState([]);

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

  return (
    <>
      <Header />
      <Grid container spacing={3} justify={"space-around"}>
        <Grid item md={5} style={{ border: "1px solid green" }}></Grid>

        <Grid
          className={classes.characterList}
          container
          item
          md={5}
          style={{ border: "1px solid red" }}
          direction="row"
        >
          {characterList.map( (character) => {
            return (
              <CharacterCard key={character.id} characterInfo={character} />
            )
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
