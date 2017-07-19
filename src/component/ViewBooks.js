import React, { Component } from "react";
import PaginationAdvanced from "./Pagination";
import {Router, Redirect} from "react-router-dom";
import GalleryBooks from "./GalleryBooks";
import books from "./books.json";

class ViewBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //activePage when reload
            activePage: this.props.url.match.params.id,
            perPage: null,
            match: this.props.url.match.params.id
    }
    this.setPerPage = this.setPerPage.bind(this);
  }

  componentWillReceiveProps(nextProps){
        this.setState({
        match: nextProps.url.match.params.id,
        activePage: nextProps.url.match.params.id
        })
  }

  setPerPage(event){
      //If the last page then 
      if(this.state.activePage > Math.ceil(books.length/event)){
          this.props.url.history.push(`/books/page=${Math.ceil(books.length/event)}`);
      }
      this.setState({perPage: event})
  }

    render() {
        return(
            <div>
                <GalleryBooks date={books} select={this.state.match} pageSize={this.state.perPage}/>
                <PaginationAdvanced getPerPage={this.setPerPage} getSelect={this.state.activePage} lengthArray={Math.ceil(books.length/this.state.perPage)}/>
            </div>
        )
    }
}
export default ViewBooks;