import React from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';
import { data } from './Data';

class App extends React.Component {

  
  // constructor
 
    state={
      profiles: data
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
          profiles:[...prevState.profiles,profileData]
        }))
    }
  

// required function in class components
  render() {
    
    const title=" Profile Card APP"
    return(
      <div className='center '>
        <div className='title'>
        <h3 >{title}</h3>
          </div>
    
      <Form onSubmit={this.addNewProfile}/>
      <CardList data={this.state.profiles}/>
      </div>
      
    )

  }
}

export default App;
