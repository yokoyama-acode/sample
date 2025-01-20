import Head from 'next/head';
import Link from 'next/link';
export default function Footer() {
  return (
    <div>
      <footer>
        <div>
          <p className="logo"><img src="/images/logo.png" alt="SAMPLE COMPANY" /></p>
          <ul className="icons">
            {/* <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
            <li><Link href="#"><i className="fab fa-line"></i></Link></li>
            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li> */}
          </ul>
          <div className="container mx-auto py-8 px-4"></div>
          {/* <p>東京都XXX区XXXXビル１F<br />
            03-0000-0000</p> */}
          <small>Copyright&copy; A Code All Rights Reserved.</small>
        </div>
      </footer>
    </div>
  );
}
