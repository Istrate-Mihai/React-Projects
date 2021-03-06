import React from "react"
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import agenda from './agenda'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/phoneBook.jpg'

function Home() {
  let history = useNavigate()

  const deleteEntry = (id) => { 
    let index = agenda.map((item) => { return item.id }).indexOf(id)
    // deleting the entry with index
    agenda.splice(index, 1)
    // We need to re-render the page for getting 
    // the results so redirect to same page.
    history('/')
  }

  // This function will create a localStorage of that specific phone number
  // to be passed to the Edit Page
  const setId = (id, name, tel) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('tel', tel)
  }
  
  return (
    <div>
      <div style={{margin:'2rem'}}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tel</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((item) => {
            return(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td><a href={`tel:${item.tel}`}>Call: {item.tel}</a></td>

                {/* getting the id, name, and age for storing these
                value in the jsx with onclick event */}
                <td>
                  <Link to={`/edit`} className="anchor">
                    <Button onClick={(e) => setId(item.id, item.name, item.tel)} variant="info">
                      Update
                    </Button>
                  </Link>
                </td>

                {/* Using the deleted function passing
                the id of an entry */}
                <td>
                  <Button onClick={e => deleteEntry(item.id)} variant="danger">Delete</Button>
                </td>
              </tr>
            )})}
          </tbody>
        </Table>

        <Link className="d-grid gap-2 anchor" to='/create'>
          <Button variant="warning" size="lg">Add Contact</Button>
        </Link>
      </div>
      <div className="mainImage"><img src={logo} alt="No Phone Book Image" /></div>
    </div>
  )
}

export default Home
