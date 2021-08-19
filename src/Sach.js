import React, { Component } from "react";

export class Sach extends Component {
  constructor(props) {
    super();
    console.log("MotSach Constructor");
    this.state = { thich: false };
    this.state = { price: false };
  }

  thichSach = () => {
    this.setState((prevState) => ({ thich: !prevState.thich }));
    this.setState((prevState) => ({ price: !prevState.price }));
  };

  render() {
    const kq = (
      <div className={this.state.thich == true ? "sanpham thich" : "sanpham"}>
        <h3 className="tensach">
          <a href={"/?page=sp&id=" + this.props.sach.id}>{this.props.sach.tensach}</a>
        </h3>
        <a href={"/?page=sp&id=" + this.props.sach.id}> 
        <img
          src={this.props.sach.urlHinh}
          alt=""
          width="300px"
          height="300px"
        /></a>
       

        <p className={this.state.price == true ? "gia price" : "gia"}>
          {this.props.sach.gia} VNĐ
        </p>
        <div>
          <button
            type="button"
            className=" butt btn-thich"
            onClick={this.thichSach}
          >
            Thích
          </button>
          <button
            type="button"
            className=" butt btn-add"
            onClick={() => this.props.chonSach(this.props.sach.id)}
          >
            Chọn mua
          </button>
        </div>
      </div>
    );

    return kq;
  }
}

export default Sach;
