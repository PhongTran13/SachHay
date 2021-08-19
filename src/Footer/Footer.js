import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-content">
                    <h3>BOOKOFLIFE</h3>
                    <p>Bạn biết rằng bạn đã đọc một cuốn sách hay khi bạn giở đến trang cuối cùng và cảm thấy như mình vừa chia tay một người bạn.</p>
                    <ul className="social">
                        <li> <a href="http://facebook.com"><i className="fa fa-facebook"></i></a> </li>              
                        <li> <a href="http://youtube.com"><i className="fa fa-youtube"></i></a> </li>
                        <li> <a href="http://google.com"><i className="fa fa-google-plus"></i></a> </li>
                        <li> <a href="http://linkedin.com/"><i className="fa fa-linkedin-square"></i></a> </li>
                        <li> <a href="http://twitter.com"><i className="fa fa-twitter"></i></a> </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>copyright &copy;2021 BOOKOFLIFE design by <span>Phong Tran</span></p>
                </div>
            </footer>
        )
    }
}

export default Footer
