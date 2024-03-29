import React from 'react'

const SubContent = {
    margin: '10px',
    width: '190px',
    height: '200px',
    border: '2px solid black',
    backgroundColor: '#ffd966'
}; 

const Advertisement = {
    margin: '10px',
    width: '800px',
    height: '150px',
    border: '2px solid black',
    backgroundColor: '#b4a7d6'
}

const Main = (props) => {
    return (
        <div className='Main'>
            <div style={SubContent}>  {props.children}
            </div>
            <div style={SubContent}>  {props.children}
            </div>
            <div style={SubContent}>  {props.children}
            </div>
            <div style={Advertisement}>  {props.children}
            </div>
        </div>
    )
}

export default Main
