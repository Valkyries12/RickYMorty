import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import LogoImg from "../images/logo.png";
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logo: {
      width: "20%",
      marginRight: "20%"
  },
  logoImg: {
      width: "100%"
  },
  clearBtn: {
    color: "#75FA69",
    border: "1px solid #75FA69"
  }
}));

const Header = ({ setFilteredCharacterList, characterList, setShowCharacterInfo }) => {

  const [searchBox, setSearchBox] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const classes = useStyles();

  useEffect(() => {
    setFilteredCharacterList(searchCharacter(characterList, searchBox));
  }, [searchBox]);

  const handleSearchBox = (e) => {
    let onlyLetters = e.target.value.replace(/[^A-Za-z]/ig, '');  
    setSearchBox(onlyLetters);
  }

  const searchCharacter = (characters, letter) => {
    // const copyCharacterList = [...characters];
    const filteredChars = characters.filter(character => 
      character.name.toLowerCase().includes(letter.toLowerCase())
    );
    return filteredChars
  }

  const handleClean = () => {
    setSearchBox("");
    setShowCharacterInfo(false);
  }


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

    </Menu>
  );



  return (
    <div className={classes.grow}>
      <AppBar style={{backgroundColor: "transparent"}} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            
          </IconButton>
          <div className={classes.logo}>
            <img className={classes.logoImg} src={LogoImg} alt={"logo"} />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {<SearchIcon />}
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchBox}
              value={searchBox}
            />
            
          </div>
          <Button variant="outlined" size="small" color="primary" className={classes.clearBtn} onClick={handleClean}>
              Clear
          </Button>
          <div className={classes.grow} />
          
          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

Header.propTypes = {
  setFilteredCharacterList: PropTypes.func.isRequired,
  characterList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setShowCharacterInfo: PropTypes.func.isRequired,
}

export default Header;