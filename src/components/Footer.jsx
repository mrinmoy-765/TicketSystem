import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">CS-Ticket System</h6>
        <p>
          There are many variations of passages <br /> of Lorem Ipsum available,
          but the
          <br />
          majority have suffered alteration in <br />
          some form, by injected humour
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Our mission</a>
        <a className="link link-hover">Contact saled</a>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Product & Services</a>
        <a className="link link-hover">Customer Stories</a>
        <a className="link link-hover">Download Apps</a>
      </nav>
      <nav>
        <h6 className="footer-title">Information</h6>

        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Join us</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social Links</h6>

        <a className="link link-hover flex gap-1 items-center">
          <FaXTwitter />
          @CS-Ticket System
        </a>
        <a className="link link-hover flex gap-1 items-center">
          <FaLinkedin />
          @CS-Ticket System
        </a>
        <a className="link link-hover flex gap-1 items-center">
          <FaFacebookSquare />
          @CS-Ticket System
        </a>
        <a className="link link-hover flex gap-1 items-center">
          <MdMail />
          support@cst.com
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
