import Login from "../pages/Login";
import Home from "../pages/Home";
import BrandList from "../pages/Brands/BrandList";
import CategoryList from "../pages/Categories/CategoryList";
import ProductList from "../pages/Products/ProductList";
import ProductDetails from "../pages/Products/ProductDetails";
import UserList from "../pages/Users/UserList";
import UserDetails from "../pages/Users/UserDetails";
import OrderList from "../pages/Orders/OrderList";
import OrderDetails from "../pages/Orders/OrderDetails";
import DiscountList from "../pages/Discounts/DiscountList";
import DiscountDetails from "../pages/Discounts/DiscountDetails";

const publicRoutes = [
    {
        path: '/login',
        page: Login
    }
]

const privateRoutes = [
    {
        path: '/',
        page: Home,
        isMainLayout: true
    },
    {
        path: '/brand-list',
        page: BrandList,
        isMainLayout: true
    },
    {
        path: '/category-list',
        page: CategoryList,
        isMainLayout: true
    },
    {
        path: '/product-list',
        page: ProductList,
        isMainLayout: true
    },
    {
        path: '/product-details',
        page: ProductDetails
    },
    {
        path: '/user-list',
        page: UserList,
        isMainLayout: true
    },
    {
        path: '/user-details',
        page: UserDetails
    },
    {
        path: '/order-list',
        page: OrderList,
        isMainLayout: true
    },
    {
        path: '/order-details',
        page: OrderDetails
    },
    {
        path: '/discount-list',
        page: DiscountList,
        isMainLayout: true
    },
    {
        path: '/discount-details',
        page: DiscountDetails
    },
]

export {
    publicRoutes,
    privateRoutes
};