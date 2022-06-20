import React from 'react'

const useHelloContext = React.createContext('All');
const HelloContextProvider = useHelloContext.Provider;
const HelloContextConsumer = useHelloContext.Consumer;

export {HelloContextProvider,HelloContextConsumer}

