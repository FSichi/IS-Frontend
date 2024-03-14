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

export interface ArticleStock {
    idInventario: number;
    cantidad: number;
    idStock: number;
    stockColor: string;
    stockTalle: string;
    stockTalleTipoTalle: string;
    idArticulo: number;
    codigoBarra: string;
    articuloCategoria: string;
    articuloDescripcion: string;
    articuloMarca: string;
    idSucursal: number;
    nombreSucursal: string;
}
