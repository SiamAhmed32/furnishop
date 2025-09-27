export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 relative">

      {/* Main footer content */}
      <div className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200/60 dark:border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
              FurniShop
            </h3>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
              Modern, sustainable, and stylish furniture for every home.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <a
                  href="/products?category=Living"
                  className="hover:text-emerald-600"
                >
                  Living
                </a>
              </li>
              <li>
                <a
                  href="/products?category=Bedroom"
                  className="hover:text-emerald-600"
                >
                  Bedroom
                </a>
              </li>
              <li>
                <a
                  href="/products?category=Dining"
                  className="hover:text-emerald-600"
                >
                  Dining
                </a>
              </li>
              <li>
                <a
                  href="/products?category=Decor"
                  className="hover:text-emerald-600"
                >
                  Decor
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <a href="/stories" className="hover:text-emerald-600">
                  Stories
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-emerald-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
              Get in touch
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>📧 support@furnishop.com</li>
              <li>📞 +880 1234 567 890</li>
              <li>📍 Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {year} FurniShop. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-emerald-600">
                Privacy
              </a>
              <a href="#" className="hover:text-emerald-600">
                Terms
              </a>
              <a href="#" className="hover:text-emerald-600">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
