import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="flex flex-col border-t border-gray-200 text-gray-400 padding-x mt-10">
      <div className="flex max-md:flex-col flex-wrap gap-3 justify-between sm:px-7 px-4 py-10">
        <div className="flex flex-col gap-6 items-start justify-start">
          <Image
            alt="Nav Car"
            src="/logo.svg"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base">
            CarHub2024 <br />
            All Rights Reserverd@
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-black">{link.title}</h3>
              {link.links.map((item) => (
                <Link href={item.url} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex sm:px-16 px-6 py-10  flex-wrap mt-10  items-center justify-between">
        <p>@2024 CarHub by Ahmed Khalid</p>
        <div className="footer__copyrights-link">
          <p> PoliceAnd Privece</p>
          <p>PoliceAnd Privece</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
