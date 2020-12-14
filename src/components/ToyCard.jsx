import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    let toy = this.props.toy
    // console.log(toy)
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button className="like-btn" onClick={()=> this.props.handleLikes(toy)}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => this.props.donateToy(toy)}>Donate to GoodWill</button>
      </div>
    );
  }
}

// ToyCard.defaultProps = {
//   toy:{
//     id:0,
//     name:'test',
//     image:"http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//     likes:0
//   }
// }

export default ToyCard;
