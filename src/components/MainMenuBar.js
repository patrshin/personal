import React from 'react'
import {
    Link,
    Route,
    BrowserRouter
} from 'react-router-dom'

export default function MainMenuBar()
{
    return (
    <BrowserRouter>
    <div className="App">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>
      <hr />
    </div>
    </BrowserRouter>
    )
}