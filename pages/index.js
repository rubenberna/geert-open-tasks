import React from 'react'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import Layout from '../components/Layout'
import ListTable from '../components/table'

const Index = ({openTasks}) => {

  return (
    <Layout>
      <div className="jumbotron">
        <h1 className="display-4">Open tasks: {openTasks.total}</h1>
        <p className="lead">Direct query to Taskbooker database to get the current open tasks</p>
        <hr className="my-4" />
        <p>Click on the button extract restults in excel</p>
        <ReactHTMLTableToExcel
            id="download-btn"
            className="download-btn"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"/>
      </div>
      <ListTable openTasks={openTasks.records.nodes.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)}/>
      <style jsx global>{`
        button {
          background: #1565c0;
          border: 0;
          padding: 10px;
          color: #fff;
          border-radius: 4px;
          transition: 0.3s all;
        }
        button:hover {
          background: #1976d2;
        }
      `}</style>
    </Layout>
  )
}

Index.getInitialProps = async (context) => {
  const { host } = context.req.headers
  const protocol = process.env.NODE_ENV === 'development' ? 'http://' : 'https://'
  const baseURL = `${protocol}${host}`
  const {data} = await axios.get(`${baseURL}/api/open_tasks`)

  return {
    openTasks: data.listOpenedTasks
  }

}

export default Index
