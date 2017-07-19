import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import {Link, Route} from "react-router-dom";
import "./pagination.css"


class CustomerLink extends Component {
	render() {
    const { children, eventKey, disabled} = this.props;
    if(disabled != false)
    {
      return <span>{children}</span>
    } else {
      return (
            <Link to={`/books/page=${eventKey}`}>
                {children}
            </Link>
      )
    }
  }
}
class PaginationAdvanced extends Component {
constructor(props)
{
  super(props);

  this.state = {
    activePage: props.initialactivePage,
    perPage: props.initiaPerPage
  }
  this.handleSelect = this.handleSelect.bind(this);
  this.PageSizeChange = this.PageSizeChange.bind(this);
}

  componentWillMount(){
      this.props.getPerPage(this.state.perPage);
  }

  PageSizeChange(e){
    this.props.getPerPage(Number(e.target.value));
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      activePage: nextProps.getSelect
    })
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }

  render() {
    return (
      <div className="pagination-group">
        <select className="form-control" onChange={this.PageSizeChange}>
            <option value="3">3 item</option>
            <option value="4">4 item</option>
            <option value="5">5 item</option>
            <option value="6">6 item</option>
        </select>
         <Pagination
          prev
          next
          // first
          // last
		      buttonComponentClass={CustomerLink}
          ellipsis
          boundaryLinks
          items={this.props.lengthArray}
          maxButtons={5}
          activePage={Number(this.state.activePage)}
          onSelect={this.handleSelect}/>
      </div>
    );
  }
}

PaginationAdvanced.defaultProps = {
    initialactivePage: 1,
    initiaPerPage: 3
}

export default PaginationAdvanced