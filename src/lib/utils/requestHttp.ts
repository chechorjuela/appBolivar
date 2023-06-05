import axios from 'axios'
import {getFromLocalStorage} from "@/lib/utils/storageUitls";

interface CustomHeader {
  headers: {
    [key: string]: string;
  };
}

let customConfig: CustomHeader = {
  headers: {
    'Content-Type': 'application/json'
  }
};

export const postRequest = async (url: string, obj: any) => {

  const request = await axios.post(url, obj, customConfig);
  return request;
};

export const getRequest = async (url: string) => {
  if (getFromLocalStorage('access_token'))
    customConfig = {
      headers: {
        ...customConfig.headers,
        Authorization: `Bearer ${getFromLocalStorage('access_token')}`
      }
    };

  const request = await axios.get(url, customConfig);
  return request;
};

export const putRequest = async (url: string, id: string | number, obj: string) => {
  const request = await axios.put(`${url}/${id}`, obj, customConfig);
  return request;
};

export const deleteRequest = async (url: string, id: string | number) => {
  const request = await axios.delete(`${url}/${id}`, customConfig);
  return request;
}
