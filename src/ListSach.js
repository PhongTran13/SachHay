import React, { Component } from "react";
import Sach from "./Sach";
export default class ListSach extends React.Component {
  constructor(props) {
    super();
    this.state = { soSachDaChon: 0, idSachDaChon: [] };
  }

  chonSach = (idSach) => {
    this.state.idSachDaChon.push(idSach);
    this.state.soSachDaChon++;
    // console.log("soSachDachon = ", this.state.soSachDaChon);
    // console.log("idSachDachon = ", this.state.soSachDaChon);
   this.props.capNhatGioHang(idSach);
  };
   
  
  render() {
    let listsach = [];
    this.props.listsach.forEach((sach) => {
      listsach.push(
        <Sach chonSach={this.chonSach} key={sach.id} sach={sach} />
      );
    });

    let kq = (
      <div className="listsanpham">
        <h2>{this.props.caption}</h2>
        <div className="item">{listsach}</div>
      </div>
    );
    return kq;
  }
}


