import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="overflow-hidden">
          <h2 className="heading-style-xxlarge-3">LEO©</h2>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-nav">
          <div className="footer-column">
            <div className="text-meta text-color-muted-inverse">(Pages)</div>
            <div className="nav center-phone-landscape">
              <Link href="/" className="nav-item inverse w-inline-block">
                <div className="nav-item-text">Home</div>
                <div className="nav-item-line inverse" />
              </Link>
              <Link href="/about" className="nav-item inverse w-inline-block">
                <div className="nav-item-text">About</div>
                <div className="nav-item-line inverse" />
              </Link>
            </div>
            <Link href="/contact" className="button primary-inverse w-inline-block">
              <div className="button-inner-text">Start Journey</div>
            </Link>
          </div>
        </div>
        <div className="footer-bottom-grid">
          <div className="text-meta text-color-muted-inverse">
            Leo says, "Research thrice. Click once."
          </div>
        </div>
      </div>
    </footer>
  );
}
