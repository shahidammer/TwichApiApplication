import React from 'react'
import Row from './row'

const FilterAPI = (props, filterOn) => {
  const Keys = Object.keys(props)
  const OnlineKeys = Keys.filter((key) => {
    return filterOn === 'All' ? props[key] : props[key].status === filterOn
  })
  return OnlineKeys.map((onlineKeys) => {
    const item = props[onlineKeys]
    if (item.id !== undefined) {
      return (
        <div id='itemList' key={item.id} >
          <Row logo={item.logo} name={item.name}
            desc={item.status === 'online' ? item.name + '|' + item.desc : item.status} urlLink={item.url} />
        </div>
      )
    }
  })
}
export default FilterAPI
