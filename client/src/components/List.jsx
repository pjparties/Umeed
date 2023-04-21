import React from 'react'
import ListItem from './ListItem'

const List = () => {
  return (
    <>
      <ul class="max-w-md divide divide-y divide-[#DEDEDE]">
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </ul>
    </>
  )
}

export default List