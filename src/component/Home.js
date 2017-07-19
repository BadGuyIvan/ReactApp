import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import quotes from "./quotes.json";
import "./home.css"

function getRandomInt(min, max) {
        return Math.floor(Math.random() * ((max-1) - min + 1)) + min;
    }

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: quotes[quotes.length-1].quotes,
            author: quotes[quotes.length-1].author,
            nextquote: "",
            nextauthor: ""
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
  handleSelect(selectedIndex, e) {
        let nextindex = getRandomInt(0, quotes.length);
        let index = getRandomInt(0, quotes.length);
        if(selectedIndex === 0){
            this.setState({
                quote: quotes[index].quotes,
                author: quotes[index].author
            })
        } else {
            this.setState({
                nextquote: quotes[nextindex].quotes,
                nextauthor: quotes[nextindex].author
            })
        }
  }

    render() {
        return(
            <div>
            <h1>Best quotes from books</h1>
              <Carousel interval={5000} controls={false} onSelect={this.handleSelect}>
                <Carousel.Item>
                    <div className="carousel-content">
                        <h1>{this.state.quote}</h1>
                        <div className="author"><span>&#x02014;  </span>{this.state.author}<span> &#x02014;</span></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <h1>{this.state.nextquote}</h1>
                        <div className="author"><span>&#x02014;  </span>{this.state.nextauthor}<span> &#x02014;</span></div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        )
    }
}

export default Home