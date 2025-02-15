"use client"
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";


function Providers({ children,}: Readonly<{children: React.ReactNode;}>) {
  const persistore = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        {children}
        </PersistGate>
    </Provider> 
  )
}

export default Providers