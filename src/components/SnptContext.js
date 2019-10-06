import React from 'react';

const SnptContext = React.createContext({});

export const SnptProvider = SnptContext.Provider;
export const SnptConsumer = SnptContext.Consumer;

export default SnptContext;
