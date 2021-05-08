import React from "react";
import unSplash from "../Api/unSplash";
import SearchBar from "./SearchBar";
// import SearchBarUsingClass from "./SearchBarUsingClass";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //using async await

  //below line throws error for this...so use arrow function
  // async onSearchSubmit(term) {

  onSearchSubmit = async (term) => {
    const response = await unSplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(term, response.data.results);
    this.setState({ images: response.data.results });
  };

  /*  //using .then 
  onSearchSubmit = (term) => {
    //console.log(term);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID Md_JlPKyXq0EmsOPeCNgNZro9YcHRmX-_ec1QMdYzAE",
        },
      })
      .then((response) => {
        console.log(response.data.results);
      });
  };
  */

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* <SearchBarUsingClass onSubmit={this.onSearchSubmit} /> */}
        {/* Found:{this.state.images.length} images */}
        <ImageList image={this.state.images} />
      </div>
    );
  }
}

export default App;
