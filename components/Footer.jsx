export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <div className="h-16 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            className="text-neutral-100 dark:text-neutral-900"
            d="M0,224L48,224C96,224,192,224,288,224C384,224,480,224,576,192C672,160,768,96,864,85.3C960,75,1056,117,1152,117.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200/60 dark:border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <a href="/products">Living</a>
              </li>
              <li>
                <a href="/products">Bedroom</a>
              </li>
              <li>
                <a href="/products">Dining</a>
              </li>
              <li>
                <a href="/products">Decor</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <a href="/stories">Stories</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Warranty</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
              Get in touch
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              support@furnishop.com
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              +880 1234 567 890
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-10 text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {year} FurniShop. All rights reserved.</p>
          <div className="flex gap-4">
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
    </footer>
  );
}
