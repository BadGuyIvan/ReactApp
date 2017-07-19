import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";
import "./list.css";

class GalleryBooks extends Component {
  listSlice(date, select, pageSize){
    let pageIndex = ((select - 1) * pageSize);
    let perPage = ((select - 1) * pageSize) + pageSize;
    return date.slice(pageIndex, perPage).map((item, indexKey) => {
      return (
        <Thumbnail key={indexKey} src={require("../"+item.imageLink)}>
            <h4>{item.title}</h4>
        </Thumbnail>
      )
    })
  }

  render(){
    const { date, select, pageSize } = this.props;
    return (
            <div className="Book-inner" style={pageSize == 4 ? {gridTemplateColumns: '300px 300px'}
                                                             : {gridTemplateColumns: '300px 300px 300px'}}>
                 {
                   this.listSlice(date, select, pageSize)
                 }
            </div>
    )
  }
}
 export default GalleryBooks
