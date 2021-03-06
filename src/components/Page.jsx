import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Page = ({ title, children }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return children
}

Page.propTypes = {
  title: PropTypes.string,
}

Page.defaultProps = {
  title: '',
}

export default Page
