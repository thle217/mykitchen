import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Account from "../pages/Account";
import Shopping from "../pages/Shopping";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const publicRoutes = [
    {
        path: "/",
        page: Home,
        isHomePageLayout: true
    },
    {
        path: "/login",
        page: LoginForm,
        isLoginRegisterLayout: true
    },
    {
        path: "/register",
        page: RegisterForm,
        isLoginRegisterLayout: true
    },
    {
        path: "/account",
        page: Account
    },
    {
        path: "/shopping",
        page: Shopping
    },
    {
        path: "/product-details",
        page: ProductDetails
    },
    {
        path: "/cart",
        page: Cart
    },
    {
        path: "/checkout",
        page: Checkout
    },
];

const privateRoutes = [
];

export { publicRoutes, privateRoutes };