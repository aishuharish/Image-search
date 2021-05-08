import React from "react";

class SearchBarUsingClass extends React.Component {
  state = { text: "" };

  //   throws error =>TypeError: Cannot read property 'state' of undefined
  //   1)use bind in constructor
  //         class Car{
  //             constructor(){
  //                 this.drive=this.drive.bind(this);
  //             }
  //         }
  //         setDriveSound(sound){
  //             this.sound=sound;
  //         }

  //         drive()
  //         {
  //             return this.sound;
  //         }
  //     }
  //     const car= ner Car();
  //     car.setDriveSound('vroom');
  //     const drive=car.drive;
  //     drive();

  //    2) change the method(function inside class) to arrow function
  //             onInputSubmit=(e)=>{
  //                 e.preventDefault();
  //                 console.log(this.state.text)
  //             }
  //    3) write inline arrow function like
  //         onSubmit={(e)=>{e.preventDefault()
  //         console.log(this.state.text)} }

  //     4)call function using arrow Function
  //         onSubmit={(e)=>onInputSubmit(e)}

  onInputSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.text);
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onInputSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Enter text here"
              value={this.state.text}
              // onChange={this.onInputChange}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBarUsingClass;
