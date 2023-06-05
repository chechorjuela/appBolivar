'use client'
import {Provider} from 'react-redux';
import store from "@/lib/store/store";
import { NextUIProvider } from "@nextui-org/react";
import {themeBolivar} from "@/lib/themes/themeBolivar";


// @ts-ignore
export function Providers({children}) {
  return (
    <Provider store={store}>
      <NextUIProvider theme={themeBolivar}>
        {children}
      </NextUIProvider>
    </Provider>
  )
}
