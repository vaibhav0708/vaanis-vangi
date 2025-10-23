export default function Footer() {
  return (
    <footer className="text-gray-700">
      {/* Main Footer */}
      <div className="bg-[var(--brand-primary-light,#f5f5f5)] py-14 border-t border-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="Vani's Vangi"
              className="h-16 mb-4"
            />
            <p className="text-sm leading-relaxed">
              Your go-to Indian vegetarian caterer serving flavorful Gujarati,
              North Indian, and fusion delicacies for every celebration.
            </p>
            <div className="flex gap-4 mt-4">
              {["facebook", "instagram", "whatsapp", "youtube"].map((icon) => (
                <div
                  key={icon}
                  className="bg-[var(--brand-primary)]/80 hover:bg-[var(--brand-primary)] text-white w-9 h-9 rounded-full flex items-center justify-center transition"
                >
                  <i className={`fa-brands fa-${icon}`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--brand-primary)]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-[var(--brand-primary)]">Home</a></li>
              <li><a href="/about" className="hover:text-[var(--brand-primary)]">About Us</a></li>
              <li><a href="/contact" className="hover:text-[var(--brand-primary)]">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-[var(--brand-primary)]">FAQ</a></li>
              <li><a href="/blog" className="hover:text-[var(--brand-primary)]">Blog</a></li>
            </ul>
          </div>

          {/* Order Now */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--brand-primary)]">Order Now</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/full-service" className="hover:text-[var(--brand-primary)]">Full Service Catering</a></li>
              <li><a href="/(shop)/menu" className="hover:text-[var(--brand-primary)]">Catering By Tray</a></li>
              <li><a href="/schedule-tasting" className="hover:text-[var(--brand-primary)]">Schedule Tasting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--brand-primary)]">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+15105856519" className="hover:text-[var(--brand-primary)]">+1 (510) 585-6519</a></li>
              <li><a href="mailto:info@vanisvangi.com" className="hover:text-[var(--brand-primary)]">info@vanisvangi.com</a></li>
              <li>5591 Hemlock Ter, Fremont CA 94538</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mini Dark Footer */}
      <div className="bg-[var(--brand-secondary)] text-gray-300 text-center py-3 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">Vani’s Vangi</span> — Authentic Catering.
        <a
          href="https://api.whatsapp.com/send?phone=15105856519&text=Hi%20Vani's%20Vangi!"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-accent)] hover:underline ml-1"
        >
          Chat with us on WhatsApp
        </a>
      </div>
    </footer>
  );
}
