import { ProtectedRoute } from './ProtectedRoute';
import { Dashboard } from '../pages/App/Dashboard';

import { AppRoutesInterface } from '../interfaces/Routes';
import { VentasList } from '../pages/App/Ventas/VentasList';
import { NuevaVenta } from '../pages/App/Ventas/Add/NuevaVenta';

export const AppRoutesList: AppRoutesInterface[] = [
    {
        path: '/dashboard',
        component: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: '/ventas',
        component: (
            <ProtectedRoute>
                <VentasList />
            </ProtectedRoute>
        ),
    },
    {
        path: '/ventas/nueva-venta',
        component: (
            <ProtectedRoute>
                <NuevaVenta />
            </ProtectedRoute>
        ),
    },
    // {
    //     path: '/ventas/:id',
    //     component: (
    //         <ProtectedRoute>
    //             <ClienteScreen />
    //         </ProtectedRoute>
    //     ),
    // },
];
