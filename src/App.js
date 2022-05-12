import {Container} from 'components/shared'
import {Home, Notfound} from 'pages'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import {Logo} from 'components'

export default function App() {
  return (
    <Container MaxWidth="1280px">
      <Router>
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </Container>
  )
}
