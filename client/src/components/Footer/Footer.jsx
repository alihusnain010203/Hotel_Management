
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="input-logo">
<div className="input">
<input type="email" name='email-footer' className='email-footer' placeholder='Write email....'/>
<button className='logo-btn'>Submit</button>
</div>
<div className="logo">
  <h1>ReservaPro</h1>
</div>
      </div>
      <div className="footer-links">
<a href="">Home</a><a href="">Properties</a><a href="">Hotels</a>
<p>CopyRight claim reservaPro</p>
      </div>
    </div>
  );
}

export default Footer;
