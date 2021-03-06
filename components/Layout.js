import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
  <div>
    <Head>
      <title>Taskbooker open tasks</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
    </Head>
    <Navbar />
    <div className='container'>
      {props.children}
    </div>
  </div>
)

export default Layout
