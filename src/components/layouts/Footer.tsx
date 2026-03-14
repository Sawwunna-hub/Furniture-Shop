import { Icon } from "@/Icons/Icons";
import { Link } from "react-router";
import { siteConfig } from "@/config/site";
import FormForEmail from "@/components/subscribe-form";

function Footer() {
  return (
    <footer className="w-full border-t ml-4 lg:ml-0">
      <section className="flex flex-col lg:flex-row justify-center item-center gap-10 pt-8 pb-8 ">
        <section>
          <Link to="/" className="flex space-x-2">
            <Icon.logo />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </section>
        <section className="grid grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-10">
          {siteConfig.footerNav.map((menu) => (
            <div key={menu.title}>
              <span className="font-medium">
                {menu.title}
              </span>
              {menu.items.map((item) => (
                <Link to={item.href} className="" key={item.title}>
                  <div className="font-light"> {item.title} </div>
                </Link>
              ))}
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <span className="font-medium">Submit Email for latest updates</span>
          <FormForEmail />
        </section>
      </section>
    </footer>
  );
}

export default Footer;
