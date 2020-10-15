import * as React from 'react';

type ButtonProps = { message: string }; /* could also use interface */
export const Button = ({ message }: ButtonProps) => <button>{message}!</button>;