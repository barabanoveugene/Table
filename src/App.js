import React, { useEffect, useState } from 'react'
import { Loader } from './Loader/Loader'
import { Table } from './Table/Table'
import _ from 'lodash'
import { DetailRowView } from './DetailRowView/DetailRowView'
import { TableExample } from './Example/Example'

function App() {
  const [userState, setUserState] = useState({status: true,
      user:[],
      sort: 'asc',
      sortField: 'id',
      row: null
    })
    
  useEffect(() => {
      const getData = async () => {
          const users = await (await fetch(`http://www.filltext.com/?rows=32&id={number|
              1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|
              (xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)).json()
          setUserState({...userState,status: false, user: _.orderBy(users, userState.sortField, userState.sort)})
      }
      getData()
  }, [])
  console.log(userState.user)

  const onSort = (sortField) => {
      const cloneUser = userState.user.concat()
      const sortType = userState.sort === 'asc' ? 'desc' : 'asc'

      const orderedUser = _.orderBy(cloneUser, sortField, sortType)

      setUserState({...userState, user: orderedUser, sort: sortType, sortField: sortField})
  }
  
  const onRowSelect = (row) => {
      setUserState({...userState, row: row})
      console.log(userState.row)
  }

  return (
    // <div>
    //   <TableExample />
    // </div>
    <div className="container">
      { userState.status 
       ? <Loader /> 
       : <Table
          onSort={(field) => onSort(field)}
          propData={userState.user}
          sort={userState.sort}
          sortField={userState.sortField}
          onRowSelect={(row) => onRowSelect(row)} />}
      {
        userState.row ?
        <DetailRowView person={userState.row} /> : null
      }
    </div>
  );
}

export default App;
