import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class news extends Component {
  render() {
    return (
      <div className="container  my-3">
        <h1>NewsSter - Top Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="mytits" description="despo" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytits" description="despo" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytits" description="despo" />
          </div>
        </div>

       
      </div>
    );
  }
}
