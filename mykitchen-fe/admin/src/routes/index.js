import Login from "../pages/Login";
import Home from "../pages/Home";
import { BrandList } from "../pages/Brands";
import { CategoryList } from "../pages/Categories";
import { ProductDetails, ProductList } from "../pages/Products";
import { UserDetails, UserList } from "../pages/Users";
import { OrderDetails, OrderList } from "../pages/Orders";
import { DiscountDetails, DiscountList } from "../pages/Discounts";

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