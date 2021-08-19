import React, { Component, useState } from 'react';
import {arrSach} from './data';

// const GioHang = (props) => {
  
//   const [newsach, setSach] = React.useState(arrSach);

//   // Xóa từng id
//   const remove = (id) => {
//     let newSach = newsach.filter((p) => p.id !== id);
//     setSach(newSach);
//   };
//   let kq = [];
//   this.sachDaChon.forEach((sach) => {
//     kq.push(
//       <div className="details" key={sach.id}>
//         <img src={sach.urlHinh} />
//         <div className="box">
//           <div className="row">
//             <h2>{sach.tensach}</h2>
//             <span>{sach.gia} VNĐ</span>
//           </div>
//           <p>{sach.mota}</p>
//           <button
//             type="button"
//             className="butt btn-thich"
//             onClick={() => remove(sach.id)}
//           >
//             {" "}
//             Xóa
//           </button>
//         </div>
//       </div>
//     );
//   });

//   const gh = (
//     <div className="das" id="das">
//       <h2 className="cap">{this.state.caption}</h2>
//       {kq}
//     </div>
//   );
//   return (
    // <>

    //   {newsach.map((p) => {
    //     const { id, tensach, urlHinh, gia, mota } = p;
    //     return (
    //       <div className="details" key={newsach.id}>
    //         <img src={newsach.urlHinh} />
    //         <div className="box">
    //           <div className="row">
    //             <h2>{newsach.tensach}</h2>
    //             <span>{newsach.gia} VNĐ</span>
    //           </div>
    //           <p>{newsach.mota}</p>
    //           <button
    //             type="button"
    //             className="butt btn-thich"
    //             onClick={() => remove(id)}
    //           >
    //             Xóa
    //           </button>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </>
//     gh
//   );
// };

// export default GioHang;


export default class GioHang extends React.Component {
  constructor(props) {
    super(props);
    this.state = { caption: "Giỏ hàng" };

  }

  
  

  render() {
    let kq = [];
    this.props.sachDaChon.forEach((sach) => {
      kq.push(
        <div className="details" key={sach.id}>
          <img src={sach.urlHinh} />
          <div className="box">
            <div className="row">
              <h2>{sach.tensach}</h2>
              <span>{sach.gia} VNĐ</span>
            </div>
            <p>{sach.mota}</p>
          
          </div>
        </div>
      );
    });

    const gh = (
      <div className="das" id="das">
        <h2 className="cap">{this.state.caption}</h2>
        {kq}
      </div>
    );
    return gh;
  }
}


