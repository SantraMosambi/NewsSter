import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class news extends Component {
  static defaultProps = {
    page: 6,
    country: "in",
  };
  static propsTypes = {
    page: PropTypes.number,
    country: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=127d91833ca9454394ff122f6b3f5d30&page=${this.state.page}&pageSize=${this.props.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=127d91833ca9454394ff122f6b3f5d30&page=1&pageSize=${this.props.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  nextUpdate = async () => {
    this.setState({
      page: this.state.page + 1
    });
    this.updateNews();
  };

  prevUpdate = async () => {
    this.setState({
      page: this.state.page - 1
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center" style={{ margin: "40px" }}>
          NewsSter - Top Headlines{" "}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.prevUpdate}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.page)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.nextUpdate}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
