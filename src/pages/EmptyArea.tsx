/* eslint-disable @typescript-eslint/indent */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'

import Footer from '../components/Footer/Footer'
interface EmptyAreaProps {}

const EmptyArea: FunctionComponent<EmptyAreaProps> = () => {
  return (
    <>
      <Footer />
    </>
  )
}

export default EmptyArea
