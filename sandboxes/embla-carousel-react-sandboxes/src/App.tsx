import { useEffect } from 'react'
import { themeStyles } from '../../../packages/embla-carousel-docs/src/consts/themes'
import { resetStyles } from '../../../packages/embla-carousel-docs/src/components/Layout/GlobalStyles/reset'
import { baseStyles } from '../../../packages/embla-carousel-docs/src/components/Layout/GlobalStyles/base'
import { fontStyles } from '../../../packages/embla-carousel-docs/src/components/Layout/GlobalStyles/font'
import ExamplesBasic from './Examples/Basic'
import './app.css'

const App = () => {
  useEffect(() => {
    const styleElement = document.createElement('style')
    const stylesList = [themeStyles, resetStyles, baseStyles, fontStyles]

    styleElement.innerHTML = stylesList.reduce(
      (allStyles, styles) => allStyles + styles.join(''),
      '',
    )

    document.head.appendChild(styleElement)
  }, [])

  return (
    <main className="examples">
      <h1 className="examples__h1">React</h1>

      <ExamplesBasic />
    </main>
  )
}

export default App
