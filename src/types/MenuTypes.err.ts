type PopUpInfo = { title: string; href: string; description?: string };

// export type productsList = {
//   menu: [PopUpInfo];
// };

type MenuInfo = {
  title: string;
  href: string;
};

// export type menuList = {
//   title: string,
//   menu: [menubar];
// };

type MainNavBar =
  | { ProductsPopUp: { menu: PopUpInfo[] } }
  | { MenuList: { menu: MenuInfo[] } };

export type MainNavArr = MainNavBar[];
