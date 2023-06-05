'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {getFromLocalStorage} from "@/lib/utils/storageUitls";

// @ts-ignore
const ClientOnlyWithAuth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = getFromLocalStorage('access_token');;
    if (!token) {
      router.push('/login');
    }
  }, []);

  return children;
};

export default ClientOnlyWithAuth;
