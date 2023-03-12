import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Account from "../pages/Account";
import Shopping from "../pages/Shopping";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductSearchList from "../pages/ProductSearchList";

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
        path: "/shopping",
        page: Shopping
    },
    {
        path: "/product-details",
        page: ProductDetails
    }
];

const privateRoutes = [
    ...publicRoutes,
    {
        path: "/account",
        page: Account
    },
    {
        path: "/cart",
        page: Cart
    },
    {
        path: "/checkout",
        page: Checkout
<<<<<<< HEAD
    },
    {
        path: "/search/",
        page: ProductSearchList
    },
];

const privateRoutes = [
=======
    }
>>>>>>> 558598f69f2ad732bd4886b65fa80dd19dfda07c
];

export { publicRoutes, privateRoutes };