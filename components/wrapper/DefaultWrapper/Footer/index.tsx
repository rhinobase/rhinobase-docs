import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import Logo from "components/brand/Logo";
import Link from "next/link";

const navigation = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Articles", href: "/articles" },
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
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Linkedin",
      href: "#",
      icon: FaLinkedin,
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
    <div className="mx-auto max-w-7xl px-4 pt-10">
      <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 space-y-8 md:col-span-1">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div>
          <h3 className="text-base font-semibold ">Company</h3>
          <ul role="list" className="mt-4 space-y-2 text-base">
            {navigation.company.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-gray-500">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="text-base font-semibold">Product</h3>
          <ul role="list" className="mt-4 space-y-2 text-base">
            {navigation.product.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-gray-500">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Resourses</h3>
          <ul role="list" className="mt-4 space-y-2 text-base">
            {navigation.resourse.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-gray-500">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" md:mt-0">
          <h3 className="text-base font-semibold ">Talk to us</h3>
          <ul role="list" className="mt-4 space-y-2 text-base">
            {navigation.talkToUs.map((item) => (
              <li key={item.name}>
                <a href={item.href} className=" hover:text-gray-500">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse  border-t border-gray-200 py-5 dark:border-gray-600 lg:flex-row">
        <div className="flex flex-col text-center lg:flex-row lg:text-left ">
          <p className="mr-0 text-center text-base text-gray-500 lg:mr-6">
            &copy; 2020 - 2022 Rhinobase® Inc. All Rights Reserved.
          </p>
          <div className="mt-5 lg:mt-0">
            <Link className="text-gray-500 " href={"#"}>
              Privacy
            </Link>
            <Link className="ml-2 text-gray-500" href={"#"}>
              Terms
            </Link>
          </div>
        </div>

        <div className="flex-1" />
        <div className="mb-6 flex items-center justify-center space-x-6 lg:mb-0">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-center text-gray-500 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
