import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}
export default Header;