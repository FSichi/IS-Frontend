export interface Article {
    id?: number;
    descripcion: string;
    codigoBarras: string;
    costo: number;
    margenGanancia: number;
    precioFinal: number;
    netoGravado: number;
    porcentajeIVA: number;
    categoriaId: number;
    marcaId: number;
    marcaNombre: string;
    categoriaDescripcion: string;
}
