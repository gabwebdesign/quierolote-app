import { User } from '@/types/user';
import mongoose, { model, Model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: {
        value: true,
        message: 'Nombre es requerido.',
      },
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'user'],
        message: '{VALUE} solo puede ser alguno de los siguientes admin o user',
        required: true,
      },
      default: 'user',
    },
    email: {
      type: String,
      unique: {
        value: true,
        message: 'Ya existe un usuario con ese correo.',
      },
      required: {
        value: true,
        message: 'Correo es requerido.',
      },
    },
    password: {
      type: String,
      required: {
        value: true,
        message: 'Contrasena es requerido.',
      },
    },
    phone: {
      type: String,
      required: {
        value: true,
        message: 'Telefono es requerido.',
      },
    },
  },
  { timestamps: true }
);

const User: Model<User> = mongoose.models.User || model('User', userSchema);

export default User;
