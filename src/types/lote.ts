export interface Lote {
  _id?: string;
  titulo?: string;
  descripcion?: string;
  direccion?: LoteDireccion;
  detalles?: LoteDetalles;
  // user?: IUser | string;
  images?: string[];
  estado?: LoteEstado;

  createdAt?: string;
  updatedAt?: string;
}

export interface LoteDireccion {
  provincia?: string;
  canton?: string;
  distrito?: string;
  direccion?: string;
}

export interface LoteDetalles {
  precio?: number;
  terreno?: number;
  avaluo?: boolean;
  topografia?: string;
  financiado?: boolean;
  serviciosPublicos?: boolean;
  planoCatastro?: boolean;
  estudioAnteproyecto?: boolean;
  cuotaMantenimiento?: boolean;
  usoSuelo?: boolean;
  tipoUsoSuelo?: string;
}

export type LoteEstado = 'venta' | 'alquiler' | 'vendido' | 'oportunidad';