import React from "react";
class FormLogin extends React.Component {
  render() {
    const kq = (
      <form className="p-1 text-white">
        <div className="mb-3 ">
          <label htmlFor="un">Họ tên</label>
          <br></br>
          <input type="text" className="form-control" id="un" />
        </div>
        <br></br>
        <div className="mb-3">
          <label htmlFor="pass">Ý kiến</label>
          <br></br>
          <textarea className="form-control2" rows="8"></textarea>
        </div>
        <br></br>
        <button type="submit" className="butt btn-add">
          Gửi ý kiến
        </button>
      </form>
    );
    return kq;
  }
}
export default FormLogin;
