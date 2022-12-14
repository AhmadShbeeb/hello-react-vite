import PropTypes from 'prop-types'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
