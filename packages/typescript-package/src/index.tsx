import * as React from 'react';

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};

// export const Button = () => {
//   return <button>test</button>
// }

export * from './Button';
export * from './Input';

type AppProps = { message: string }; /* could also use interface */
export const Message = ({ message }: AppProps) => <div>{message}</div>;