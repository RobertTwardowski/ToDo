
import React from 'react'
import PropTypes from 'prop-types'
import styles from './UsersListItem.module.css'

function UsersListItem({ userData: { average, name, attendance = '0%' } }) {

    return (
        <li className={styles.user}>
          <div>{average}</div>
          <div>
            <p>{name}</p>
            <p>{attendance}</p>
          </div>
          <button>X</button>
        </li>
  )
}

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
      })
}

export default UsersListItem
