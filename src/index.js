import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {arrSach, arrLoaiSach} from './data';
import ListSach from './ListSach';
import ChiTiet from './ChiTiet';
import GioHang from './GioHang';
import Login from './Login/Login';
console.log(arrSach);
console.log(arrLoaiSach);

ReactDOM.render(<App />, document.getElementById("root"));

// eslint-disable-next-line no-restricted-globals
const params = new URLSearchParams(location.search);
let page = params.get("page");


var sachDaChon = [];
function capNhatGioHang(idSach) {
  let sachChon = arrSach.find((sach, index) => {
    if (sach.id == idSach) return true;
  });
  if (sachChon == null) {
    alert("Không có sách này");
    return;
  } else  sachDaChon.push(sachChon);
  ReactDOM.render(
    <GioHang sachDaChon={sachDaChon} />,
    document.getElementById("divCart")
  );
}

if (page == null){
let arrSachBanChay = arrSach.filter((sach) => sach.xem > 550);
let arrSachHot = arrSach.filter((sach) => sach.hot === 1);
let arrSachMoi = arrSach.filter((sach) => sach.moi === 1);


ReactDOM.render(
  <div>
    <section>
      <h2>Trang chủ</h2>
    </section>
    <h2 className="tieude2">Sản phẩm nổi bật</h2>
    <ListSach capNhatGioHang={capNhatGioHang} listsach={arrSachHot} />
    <h2 className="tieude2">Sản phẩm bán chạy</h2>
    <ListSach capNhatGioHang={capNhatGioHang} listsach={arrSachBanChay} />
    <h2 className="tieude2">Sản phẩm mới</h2>
    <ListSach capNhatGioHang={capNhatGioHang} listsach={arrSachMoi} />
  </div>,
  document.getElementById("product1")
);
}

else if(page === "login"){

ReactDOM.render(
  <Login />, document.getElementById("product1")
);
}

else if (page == "lichsu") {
  let arrLichSu = arrSach.filter((sach) => sach.idLoai === 2);

  ReactDOM.render(
    <div>
      <section>
        <h2>Lịch sử</h2>
      </section>
      <div>
        <ListSach capNhatGioHang={capNhatGioHang} listsach={arrLichSu} />
      </div>
    </div>,
    document.getElementById("product1")
  );
}

else if (page == "nghethuat") {
  let arrNgheThuat = arrSach.filter((sach) => sach.idLoai === 6);

  ReactDOM.render(
    <div>
      <section>
        <h2>Nghệ thuật</h2>
      </section>
      <div>
        <ListSach capNhatGioHang={capNhatGioHang} listsach={arrNgheThuat} />
      </div>
    </div>,
    document.getElementById("product1")
  );
} 

else if (page == "thieunhi") {
  let arrThieuNhi = arrSach.filter((sach) => sach.idLoai === 3);

  ReactDOM.render(
    <div>
      <section>
        <h2>Thiếu nhi</h2>
      </section>
      <div>
        <ListSach capNhatGioHang={capNhatGioHang} listsach={arrThieuNhi} />
      </div>
    </div>,
    document.getElementById("product1")
  );
}

else if (page == "tinhbao") {
let arrTinhBao = arrSach.filter((sach) => sach.idLoai === 4);

  ReactDOM.render(
    <div>
      <section>
        <h2>Tình báo</h2>
      </section>
      <div>
        <ListSach capNhatGioHang={capNhatGioHang} listsach={arrTinhBao} />
      </div>
    </div>,
    document.getElementById("product1")
  );
}

else if (page === "sp"){
  let id = params.get("id");
  id = parseInt(id);
   var sach = arrSach.find(function (sach, index) {
     if (sach.id == id) return true;
   });
   if (sach != undefined)
    
  ReactDOM.render(
    <ChiTiet  sach={sach}/>,
    document.getElementById("product1")
  );
}


  

  // ReactDOM.render(
  //   <ListSach
  //     capNhatGioHang={capNhatGioHang}
  //     caption="Sách bán chạy"
  //     listSach={arrSach}
  //   />,
  //   document.getElementById("sachBanChay")
  // );



  // ReactDOM.render(<GioHang />, document.getElementById("product1"));
  
