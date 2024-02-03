import { ProtectedRoute } from "./ProtectedRoute";
import { Dashboard } from "../pages/App/Dashboard";

import { AppRoutesInterface } from "../interfaces/Routes";
import { ClientesList } from "../pages/App/Clientes/ClientesList";
import { ClienteScreen } from "../pages/App/Clientes/ClienteScreen";
import { ComplementosScreen } from "../pages/App/Complementos/ComplementosScreen";


export const AppRoutesList: AppRoutesInterface[] = [
    {
        path: '/dashboard',
        component: <ProtectedRoute children={<Dashboard />}></ProtectedRoute>,
    },
    {
        path: '/ventas',
        component: <ProtectedRoute children={<ClientesList />}></ProtectedRoute>,
    },
    {
        path: '/ventas/:id',
        component: <ProtectedRoute children={<ClienteScreen />}></ProtectedRoute>,
    },
    {
        path: '/complementos',
        component: <ProtectedRoute children={<ComplementosScreen />}></ProtectedRoute>,
    }
]