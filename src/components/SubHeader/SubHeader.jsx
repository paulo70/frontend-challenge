import PropTypes from 'prop-types'
import React from 'react'

import { Breadcrumb } from 'plurall-ui'

import styles from './SubHeader.module.css'

const SubHeader = ({breadcrumb}) => (
  <div className={styles.contentBreadcrumb}>
    <div className={styles.breadcrumb}>
      <div className={styles.innerDiv}>
        <Breadcrumb content={breadcrumb} className={styles.breadcrumbLinks} />
      </div>
    </div>
  </div>
)

SubHeader.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    }),
  ),
  buttonHref: PropTypes.string,
}

export default SubHeader
