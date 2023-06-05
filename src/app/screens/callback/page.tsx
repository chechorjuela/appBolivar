"use client"
import {useEffect, useState} from 'react';
import queryString from 'query-string';
import {getFromLocalStorage, saveToLocalStorage} from "@/lib/utils/storageUitls";
import { useRouter } from 'next/navigation';

const CallbackPage = () => {
  const router = useRouter();
  const [bearerTkn, setBearertkn] = useState<string>('')

  useEffect(() => {
    const tokenStorage = getFromLocalStorage('access_token');
    if(tokenStorage)
      setBearertkn(tokenStorage)

    const accessToken = queryString.parse(window.location.hash).access_token;
    if (accessToken)
      setBearertkn(accessToken.toString());
  }, []);

  useEffect(() => {
    if(bearerTkn){
      saveToLocalStorage('access_token', bearerTkn);
      router.push('/dashboard')
    }
  }, [bearerTkn]);

  return (
    <div>
      <h1>Logging in...</h1>
    </div>
  );
};

export default CallbackPage;
