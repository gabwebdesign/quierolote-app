import { Lote } from '@/types/lote';
import { validLoteState } from '@/utils/constants/constants';
import mongoose, { model, Model, Schema } from 'mongoose';

const lotesSchema = new Schema(
  {
    titulo: {
      type: String,
      required: {
        value: true,
        message: 'Titulo es requerido.',
      },
    },
    descripcion: {
      type: String,
      required: {
        value: true,
        message: 'Descripcion es requerido.',
      },
    },
    estado: {
      type: String,
      enum: {
        values: validLoteState,
        message: `{VALUE} solo puede ser alguno de los siguientes ${validLoteState.join(
          ', '
        )}`,
      },
      default: 'Alquilar',
    },
    direccion: {
      provincia: {
        type: String,
        required: {
          value: true,
          message: 'Provincia es requerido.',
        },
        default: 'Heredia',
      },
      canton: {
        type: String,
        required: {
          value: true,
          message: 'Canton es requerido.',
        },
        default: 'Belén',
      },
      distrito: {
        type: String,
        required: {
          value: true,
          message: 'Distrito es requerido.',
        },
        default: 'San Rafael',
      },
      direccion: String,
    },
    detalles: {
      precio: {
        type: Number,
        required: {
          value: true,
          message: 'Precio es requerido.',
        },
      },
      terreno: {
        type: Number,
        default: 0,
      },
      avaluo: {
        type: Boolean,
        default: false,
      },
      topografia: String,
      financiado: {
        type: Boolean,
        default: false,
      },
      serviciosPublicos: {
        type: Boolean,
        default: false,
      },
      planoCatastro: {
        type: Boolean,
        default: false,
      },
      estudioAnteproyecto: {
        type: Boolean,
        default: false,
      },
      cuotaMantenimiento: {
        type: Boolean,
        default: false,
      },
      usoSuelo: {
        type: Boolean,
        default: false,
      },
      tipoUsoSuelo: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    destacado: {
      type: Boolean,
      default: false
    },
    images: {
      type: [String],
      validate: {
        validator: function (values: string[]) {
          return values.length <= 6 && values.length >= 1;
        },
        message: 'Las imagenes deben ser minimo 1 y maximo 6',
      },
    },
  },
  {
    timestamps: true,
  }
);

const Lotes: Model<Lote> = mongoose.models.Lotes || model('Lotes', lotesSchema);

export default Lotes;
