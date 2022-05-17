import {Container} from 'components/shared'
import {BrowserRouter} from 'react-router-dom'
import Router from 'routes'
import {Suspense} from 'react'

import {Logo} from 'components'

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container MaxWidth="1280px">
        <BrowserRouter>
          <Logo />
          <Router />
        </BrowserRouter>
      </Container>
    </Suspense>
  )
}
