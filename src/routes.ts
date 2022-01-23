import { Login } from "./pages/AuthPage"
import { Home } from "./pages/HomePage"
import { ShopPages } from "./pages/Shop/ShopPages"
import { ADMIN_ROUTE, LOGIN, SHOP_ROUTE } from "./utils/consts"

export const publicRoutes = [
  {
      path:SHOP_ROUTE,
      Element:ShopPages
  },
  {
      path: LOGIN,
      Element: Login
  },
]

export const authRoutes = [
  {
    path:ADMIN_ROUTE,
    Element:Home
  }
]
