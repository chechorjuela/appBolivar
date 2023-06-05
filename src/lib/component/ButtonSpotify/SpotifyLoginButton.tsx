'use client'
import {Button} from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import "./SporifyLoginButton.sass"

// @ts-ignore
const SpotifyLoginButton = ({onClickLogin, disabled}) => {
  return (
    <Button
      disabled={disabled}
      variant="contained"
      className="buttonSpotify"
      onClick={onClickLogin}
      startIcon={<FontAwesomeIcon icon={faSpotify}/>}
    >
      Iniciar con Spotify
    </Button>
  );
};

export default SpotifyLoginButton;
