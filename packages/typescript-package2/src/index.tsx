import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export * from './Button'
// @ts-ignore
export * from './Input'

export { useWindowResize, useThrottledFn } from 'beautiful-react-hooks';
