import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";
import FooterList, { FooterListProps } from "./FooterList";
import Logo from "components/brand/Logo";
import Link from "next/link";

const data: FooterListProps[] = [
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        href: "",
      },
      {
        title: "Careers",
        href: "",
      },
      {
        title: "Articles",
        href: "https://www.rhinobase.io/articles",
      },
    ],
  },
  {
    title: "Product",
    items: [
      {
        title: "CLI",
        href: "",
      },
      {
        title: "Customers",
        href: "",
      },
      {
        title: "Enterprise",
        href: "",
      },
      {
        title: "Pricing",
        href: "",
      },
      {
        title: "Changelog",
        href: "",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Docs",
        href: "",
      },
      {
        title: "Support",
        href: "",
      },
      {
        title: "Status",
        href: "",
      },
      {
        title: "Contact",
        href: "",
      },
    ],
  },
  {
    title: "Talk to us",
    items: [
      {
        title: "Call +91",
        href: "",
      },
      {
        title: "Contact Sales",
        href: "",
      },
    ],
  },
];

const navigation = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Articles", href: "/articles" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  product: [
    { name: "CLI", href: "#" },
    { name: "Customer", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  resourse: [
    { name: "Docs", href: "#" },
    { name: "Support", href: "#" },
    { name: "Status", href: "#" },
    { name: "Contact", href: "#" },
  ],
  talkToUs: [
    { name: "call +91", href: "#" },
    { name: "Contact Sale", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: FaGithub,
    },
    {
      name: "Youtube",
      href: "#",
      icon: FaYoutube,
    },
    {
      name: "Discord",
      href: "#",
      icon: FaDiscord,
    },
  ],
};

export default function Footer() {
  return (
    <>
      <footer className="" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link href="/">
                <Logo size={40} borderRadius="8" p={1} />
              </Link>
              <p className="text-base">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className=" hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium ">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base hover:text-gray-400"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium">Product</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.product.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base hover:text-gray-400"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium">Resourses</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.resourse.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base hover:text-gray-400"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium ">Talk to us</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.talkToUs.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base  hover:text-gray-400"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2020 - 2022 Rhinobase® Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
