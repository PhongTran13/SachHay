import React, { Component } from "react";
import FormLogin from './Form/Form'
export class ChiTiet extends Component {
  constructor() {
    super();
    this.state = { hienYK: false };
  }

  doiState = () => {
    // this.setState ({hienYK: true});
    this.setState((prevState) => ({ hienYK: !prevState.hienYK }));
  };

  render() {
    return (
      <div className="chitiet">
        <div className="box-img">
          <img src={this.props.sach.urlHinh} alt="" width="500" height="500" />
        </div>

        <p className="tieude">{this.props.sach.tensach} </p>
        <p className="gia">{this.props.sach.gia} VNĐ</p>
        <button
          type="button"
          className="butt btn-thich"
          onClick={this.doiState}
        >
          Thêm Ý Kiến
        </button>
        <hr />
        {this.state.hienYK == true ? <FormLogin /> : ""}
      </div>
    );
  }
}

export default ChiTiet;
