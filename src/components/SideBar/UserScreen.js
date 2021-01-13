import React, { Component } from 'react';
// import './../css/App.css';

class UserScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      }
    }


  // [ USER SCREEN USER  ========================================  ]

  render() {
    return(
      <div id="userDataDisplay">
        <div id="TitleWindow">
        {this.props.authorPost}
 
        </div>
        <div id="Thumbnail">
             <div id="authorName">
             {this.props.title}
            </div>
        </div>
        
      </div>
    )
  }
}

export default UserScreen;