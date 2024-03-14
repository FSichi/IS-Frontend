import { ToastNotification } from '../../../components/Notifications/ToastNotification';
import { AppAPI } from '../../api/AppAPI';
import {
    setVentaSelectedData,
    // setVentasData,
    startLoadingVentaProcess,
    setClienteData,
} from './ventaSlice';

interface CartParams {
    quantity: number;
    item: any;
}
[];

const getCartPayload = (cart: any) => {
    const payload = {
        venta: {
            sucursalID: 2,
            vendedorID: 3,
        },
        lineasVenta: cart.map((item: any) => {
            return {
                Cantidad: item.quantity,
                StockID: item.item.idStock,
                VentaID: 0,
            };
        }),
    };

    return payload;
};

export const createVentaInitial = (cart: CartParams) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        const payload = getCartPayload(cart);

        try {
            const { data: responseData, status } = await AppAPI().post(
                '/Venta/postVentaYLineas',
                payload,
            );

            if (status === 200) {
                dispatch(
                    setVentaSelectedData({
                        ventaSelected: responseData,
                    }),
                );

                // dispatch(startVentaChangeProcess());
                ToastNotification.fire({
                    icon: 'success',
                    title: 'Articulos Agregados Correctamente a la Venta',
                });
            }
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};

export const getClienteReal = (dni: number) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        try {
            const { data: responseData, status } = await AppAPI().get(
                `/Cliente/getClienteByIdOrDni?idordni=${dni}`,
            );

            if (status === 200) {
                dispatch(
                    setClienteData({
                        cliente: responseData,
                    }),
                );
            }

            // dispatch(
            //     setClienteData({
            //         cliente: {
            //             idCliente: 1,
            //             nombre: 'Juan',
            //             apellido: 'Perez',
            //             // dni: Math.floor(Math.random() * (99999999 - 10000000) + 10000000),
            //             dni,
            //             direccion: 'Calle falsa 123',
            //         },
            //     }),
            // );
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};

export const efectuarPago = (
    idVenta: number,
    idCliente: number,
    metodoPago: 'Efectivo' | 'Tarjeta',
    infoPago?: any,
) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        console.log('ID DEL CLIENTE: ', idCliente);

        try {
            const { data: responseClienteData, status: statusCliente } = await AppAPI().put(
                `/Venta/updateClienteVenta?idVenta=${idVenta}&IdCliente=${idCliente}`,
            );

            if (statusCliente === 200) {
                if (metodoPago === 'Efectivo') {
                    const { data: responsePagoData, status: statusPago } = await AppAPI().post(
                        `/Pago/Pagar`,
                        {
                            idTipoPago: 1,
                            idVenta,
                        },
                    );

                    console.log('Response: ', responsePagoData);

                    if (statusPago === 200) {
                        dispatch(
                            setVentaSelectedData({
                                ventaSelected: responsePagoData,
                            }),
                        );
                    }
                }

                if (metodoPago === 'Tarjeta') {
                    const payloadToken = {
                        card_number: infoPago.numeroTarjeta,
                        card_expiration_month: infoPago.mesVencimiento,
                        card_expiration_year: infoPago.anioVencimiento,
                        security_code: infoPago.cvc,
                        card_holder_name: infoPago.nombreTitular,
                        card_holder_identification: {
                            type: 'dni',
                            number: String(infoPago.dniTitular),
                        },
                    };

                    console.log('Payload Token: ', payloadToken);

                    const { data: responseTokenData, status: statusToken } = await AppAPI().post(
                        `/Pago/tokenTarjeta`,
                        payloadToken,
                    );

                    if (statusToken === 200) {
                        const { data: responsePagoData, status: statusPago } = await AppAPI().post(
                            `/Pago/Pagar`,
                            {
                                idTipoPago: 2,
                                idVenta,
                                token: responseTokenData.id,
                                tipoTarjeta: 'Credito',
                            },
                        );

                        if (statusPago === 200) {
                            dispatch(
                                setVentaSelectedData({
                                    ventaSelected: responsePagoData,
                                }),
                            );
                        }
                    }
                }
            }

            ToastNotification.fire({ icon: 'success', title: 'Pago Realizado con Exito' });
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};

export const finalizarVenta = (
    idVenta: number,
    CondicionTributaria: 'RI' | 'M' | 'E' | 'CF' | 'NR',
    numeroDocumento: number,
    ImporteTotal: number,
) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingVentaProcess());

        const payload = {
            ImporteTotal,
            numeroDocumento,
            CondicionTributaria,
            idVenta,
        };

        try {
            const { data: responseData, status } = await AppAPI().post(
                `/ExternalAPIs/conectarAfip`,
                payload,
            );

            if (status === 200) {
                dispatch(
                    setVentaSelectedData({
                        ventaSelected: responseData,
                    }),
                );
            }

            ToastNotification.fire({ icon: 'success', title: 'Venta Finalizada con Exito' });
        } catch (error: any) {
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            console.log('ERROR:', error);
        }
    };
};
