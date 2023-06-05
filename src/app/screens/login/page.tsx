"use client"
import SpotifyLoginButton from "@/lib/component/ButtonSpotify/SpotifyLoginButton";
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { useRouter } from 'next/navigation';
const LoginPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  const signInUser = () => {
    setDisabled(true)
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = 'http://localhost:3000/callback';
    const scopes = ['user-read-private', 'user-read-email']; // Add any required scopes
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
    router.push(authUrl);
  }
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"

      >
        <SpotifyLoginButton disabled={disabled} onClickLogin={signInUser}/>
      </Box>
    </div>
  );
}

export default LoginPage;
