import Dashboard from 'views/Dashboard/Dashboard.jsx';
import UserPage from 'views/UserPage/UserPage.jsx';

var dashRoutes = [
    { path: "/user", name: "Usuário", icon: "users_single-02", component: UserPage,},
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard, onSideBar: true },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
