import React, { Component } from 'react';
import Logo from './Logo';
// import {Link} from 'react-router-dom';
import CartIcon from "../svg/shopping-cart-solid.svg";
// import Nav  from './header/Nav'
export class Header extends Component {

state = {
    toggle: false
}

menuToggle = () =>{
    this.setState({toggle: !this.state.toggle});
}

    render() {

        const {toggle} = this.state;

        return (
            <header>
        <Logo />
             <ul className={toggle ? "toggle" : ""}>
            <li> <a href="/">Trang chủ</a> </li>
            <li> <a href="/?page=nghethuat">Nghệ Thuật</a> </li>
            <li> <a href="/?page=lichsu">Lịch Sử</a> </li>
            <li> <a href="/?page=thieunhi">Thiếu Nhi</a> </li>
            <li> <a href="/?page=tinhbao">Tình Báo</a> </li>
            <li><a href="/" className="close" onClick={this.menuToggle}> X </a></li>
          </ul>

          <div className="login">
              {/* <span>0</span>
            <a href="/?page=giohang">
                <img src={CartIcon} width="20"></img>
            </a>  */}
            <a href="/?page=login">Đăng nhập </a>
             
             
          </div>
          
          <div className="menu" onClick={this.menuToggle}>
            Menu
          </div>

         
        </header>
        )
    }
}

export default Header
