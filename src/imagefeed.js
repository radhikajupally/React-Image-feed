import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageFeedResult from "./result";

class ImageFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      url: "",
      title: "",
      submitDisabled: true,
     
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
   
  }

  render() {
    const isEnabled = this.state.url.length > 0 && this.state.title.length > 0;
    var title = this.state.title;
    var url = this.state.url;
    localStorage.setItem(this.state.title, this.state.url);
    console.log(this.state.url);
    console.log(this.state.title);
    console.log(isEnabled);
    return (
      <div className="container">
        <form className="container">
          <div className="row">
            <div className="col s12">
              <input
                type="text"
                name="url"
                placeholder="Enter url"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="col s6">
              <button
                onSubmit={this.handleSubmit}
                className="waves-effect waves-light btn-large"
                disabled={!isEnabled}
              >
                New Post
              </button>
            </div>
          </div>
        </form>
        <ImageFeedResult url={this.state.url} title={this.state.title} />
      </div>
    );
  }
}

export default ImageFeed;
