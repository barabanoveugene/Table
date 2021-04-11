
import React from 'react'

export const Table = (props) => {
    const {propData, onSort, sort, sortField} = props
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={onSort.bind(null, 'id')}>
                        ID {sortField === 'id' ? <h1>{sort}</h1> : null}
                    </th>
                    <th onClick={onSort.bind(null, 'firstName')}>
                        FirstName {sortField === 'firstName' ? <h1>{sort}</h1> : null}
                    </th>
                    <th onClick={onSort.bind(null, 'lastName')}>
                        LastName {sortField === 'lastName' ? <h1>{sort}</h1> : null}
                    </th>
                    <th onClick={onSort.bind(null, 'email')}>
                        Email {sortField === 'email' ? <h1>{sort}</h1> : null}
                    </th>
                    <th onClick={onSort.bind(null, 'phone')}>
                        Phone {sortField === 'phone' ? <h1>{sort}</h1> : null}
                    </th>
                </tr>
            </thead>
            <tbody>
                {propData.map((item, index) => {
                    return (
                        <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                            <th>{item.id}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>   
    )
}