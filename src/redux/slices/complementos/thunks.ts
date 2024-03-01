import { ToastNotification } from '../../../components/Notifications/ToastNotification';
// import { AuthTokenVerification } from '../../../utils/AuthTokenVerification';
// import { renewToken } from "../auth/thunks";
// import { ResponseStatus } from '../../api/ApiResponse';
import { AppAPI } from '../../api/AppAPI';
import {
    setComplementoSelectedData,
    setComplementosData,
    startCompletosChangeProcess,
    startLoadingComplementosProcess,
} from './complementosSlice';

export const getComplementosList = (url: string) => {
    return async (dispatch: any, _getState: any) => {
        // const { sessionData } = getState().auth;
        // const token = sessionData.token;

        dispatch(startLoadingComplementosProcess());

        try {
            const { data: responseData, status } = await AppAPI().get(url);

            if (status === 200) {
                dispatch(
                    setComplementosData({
                        complementoList: responseData,
                    }),
                );

                // dispatch(renewToken());
            }
        } catch (error) {
            console.log(error);
            // AuthTokenVerification(error, nav, dispatch);
        }
    };
};

export const updateComplemento = (
    body:
        | { idColor: number; nombre: string }
        | { idMarca: number; nombre: string }
        | { idCategoria: number; descripcion: string }
        | { idTalle: number; talleArticulo: string; idTipoTalle: number; descripcion: string },
    url: string,
) => {
    return async (dispatch: any, _getState: any) => {
        // const { sessionData } = getState().auth;
        // const token = sessionData.token;

        dispatch(startLoadingComplementosProcess());

        try {
            const { data: responseData, status } = await AppAPI().put(url, body);

            if (status === 200) {
                ToastNotification.fire({
                    icon: 'success',
                    title: 'Complemento actualizado con Exito',
                });
            }

            dispatch(startCompletosChangeProcess());
        } catch (error: any) {
            console.log('ERROR: ', error);
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            // AuthTokenVerification(error, nav, dispatch);
        }
    };
};

export const addComplemento = (
    body:
        | { nombre: string }
        | { nombre: string }
        | { descripcion: string }
        | { talleArticulo: string; idTipoTalle: number; Descripcion: string },
    url: string,
) => {
    return async (dispatch: any, _getState: any) => {
        dispatch(startLoadingComplementosProcess());

        console.log(body);
        console.log(url);

        try {
            const { data: responseData, status } = await AppAPI().post(url, body);

            if (status === 200) {
                ToastNotification.fire({ icon: 'success', title: 'Complemento Creado con Exito' });
            }

            dispatch(startCompletosChangeProcess());
        } catch (error: any) {
            console.log(error);
            ToastNotification.fire({ icon: 'error', title: error.response.data });
            // AuthTokenVerification(error, nav, dispatch);
        }
    };
};

export const getTallesList = (url: string) => {
    return async (dispatch: any, _getState: any) => {
        // const { sessionData } = getState().auth;
        // const token = sessionData.token;

        dispatch(startLoadingComplementosProcess());

        try {
            const { data: responseTallesData, status: StatusTalles } = await AppAPI().get(url);

            const { data: responseTipoTallesData, status: StatusTipoTalles } =
                await AppAPI().get('/TipoTalle');

            if (StatusTalles === 200 && StatusTipoTalles === 200) {
                dispatch(
                    setComplementosData({
                        complementoList: [
                            { tipoTallesList: responseTipoTallesData },
                            { tallesList: responseTallesData },
                        ],
                    }),
                );

                // dispatch(renewToken());
            }
        } catch (error) {
            console.log(error);
            // AuthTokenVerification(error, nav, dispatch);
        }
    };
};
