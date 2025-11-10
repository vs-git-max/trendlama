import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerQuickLinks = [
    { title: "Homepage", href: "/" },
    { title: "Contact", href: "/contact" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
  ];
  const footerProductsLinks = [
    { title: "All Products", href: "/shop" },
    { title: "New Arrivals", href: "/new-arrivals" },
    { title: "Best Sellers", href: "/best-seller" },
    { title: "Sale", href: "/sale" },
  ];
  const footerCompanyLinks = [
    { title: "About", href: "/shop" },
    { title: "Careers", href: "/careers" },
    { title: "Blog", href: "/blog" },
    { title: "Affiliate Program", href: "/program" },
  ];

  return (
    <footer className="mt-16 flex items-center flex-col md:flex-row md:items-start bg-gray-800 rounded-lg p-8 justify-between gap-8 md:gap-0">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href={"/"} className="flex items-center ">
          <Image src="/logo.png" alt="logo" width={36} height={35} />
          <p className="text-md font-medium tracking-wider hidden md:block text-white">
            Trendlama
          </p>
        </Link>
        <p className="text-sm text-gray-400">
          @ {new Date().getFullYear()} copyright
        </p>
        <p className="text-sm text-gray-400">All right reserved</p>
      </div>
      <div className="flex flex-col text-sm text-gray-400 items-center md:items-start gap-4">
        <h4 className="font-semibold text-lg text-white">Quick Links</h4>
        <div className="flex flex-col text-sm text-gray-400 items-center md:items-start gap-2">
          {footerQuickLinks?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:underline hover:text-blue-600 hoverEffect"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-sm text-gray-400 items-center md:items-start gap-4">
        <h4 className="font-semibold text-lg text-white">Products</h4>
        <div className="flex flex-col text-sm text-gray-400 items-center md:items-start gap-2">
          {footerProductsLinks?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:underline hover:text-blue-600 hoverEffect"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-sm text-gray-400 items-center md:items-start gap-4">
        <h4 className="font-semibold text-lg text-white">Company</h4>
        <div className="flex flex-col text-sm text-gray-400 items-center md:items-start gap-2">
          {footerCompanyLinks?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className="hover:underline hover:text-blue-600 hoverEffect"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
