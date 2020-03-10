import React from 'react'
import moment from 'moment'
import { Table } from 'react-bootstrap';

const ListTable = ({openTasks}) => {
  const renderTableBody = () => {
    return openTasks.map((task, i) => {
      return (
        <tr key={i}>
          <td>{i}</td>
          <td>{task.city}</td>
          <td>{task.title}</td>
          <td>{renderCategories(task.categories.nodes)}</td>
          <td>{task.clientName}</td>
          <td>{task.description}</td>
          <td>{moment(task.createdAt).format('MMMM Do YY')}</td>
          <td>{task.startAt ? moment(task.startAt).format('MMMM Do YY') : ''}</td>
        </tr>
      )
    })
  }

  const renderCategories = array => {
    const listItems = array.map((t, i) =>
      <li key={i}>{t.description}</li>
    )
    return (<ul>{listItems}</ul>)
  }

  return(
    <div className='container'>
    <Table striped bordered hover id="table-to-xls">
      <thead>
        <tr>
          <th>#</th>
          <th>City</th>
          <th>Title</th>
          <th>Categories</th>
          <th>Client</th>
          <th>Description</th>
          <th>Created at</th>
          <th>Start at</th>
        </tr>
      </thead>
      <tbody>
        {renderTableBody()}
      </tbody>
      </Table>
    </div>
  )
}

export default ListTable;
