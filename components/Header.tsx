import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link href="/" className="navbar-logo w-inline-block">
          <div className="light-mode">
            <Image src="/images/logo.svg" alt="Logo" width={120} height={40} className="navbar-logo-image" />
          </div>
          <div className="dark-mode">
            <Image src="/images/logo-inverse.svg" alt="Logo" width={120} height={40} className="navbar-logo-image" />
          </div>
        </Link>
      </div>
      <nav className="navbar-menu">
        <Link href="/work" className="navbar-menu-item w-inline-block">
          <div className="navbar-menu-item-text">Work</div>
          <div className="navbar-item-line" />
        </Link>
        <Link href="/service" className="navbar-menu-item w-inline-block">
          <div className="navbar-menu-item-text">Services</div>
          <div className="navbar-item-line" />
        </Link>
        <Link href="/about" className="navbar-menu-item w-inline-block">
          <div className="navbar-menu-item-text">About</div>
          <div className="navbar-item-line" />
        </Link>
        <Link href="/blog" className="navbar-menu-item w-inline-block">
          <div className="navbar-menu-item-text">Blog</div>
          <div className="navbar-item-line" />
        </Link>
      </nav>
      <div className="navbar-right">
        <Link href="/contact" className="button-text w-inline-block">
          <div className="button-text-inner">
            <div className="button-text-text">Start Journey</div>
            <div className="button-text-line" />
          </div>
        </Link>
      </div>
    </header>
  );
}
