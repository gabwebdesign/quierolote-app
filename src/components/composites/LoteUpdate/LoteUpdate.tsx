'use client';
import { lotAtom } from '@/store/atoms';
import { Lote } from '@/types/lote';
import { useHydrateAtoms } from 'jotai/utils';
import { useAtom, useAtomValue } from 'jotai';
import { LoteUpdateStyles } from './LoteUpdateStyles';
import { useForm } from 'react-hook-form';
import { FormInput } from '../FormInput/FormInput';
import { FormSelect } from '../FormSelect/FormSelect';
import { Button } from '@/components/atoms/Button/Button';
import quieroLoteApi from '@/api/quieroLoteApi';
import { useSession } from 'next-auth/react';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { getImagePublicId } from '@/utils/api/imagePublicId';
import { focusAtom } from 'jotai-optics';
import { useRouter } from 'next/navigation';

export interface LoteUpdateProps {
  lot: Lote | null;
}

interface FormProps
  extends Omit<Lote, 'createdAt' | 'updatedAt' | 'user' | 'images'> {
  images?: string[] | File[];
  imagesUpdate?: string[] | File[];
}

const estadoOptions = [
  {
    name: 'Venta',
    value: 'venta',
  },
  {
    name: 'Alquiler',
    value: 'alquiler',
  },
  {
    name: 'Vendido',
    value: 'vendido',
  },
  {
    name: 'Oportunidad',
    value: 'oportunidad',
  },
];

const focusImages = focusAtom(lotAtom, (optic) => optic.prop('images'));

export const LoteUpdate = ({ lot }: LoteUpdateProps) => {
  useHydrateAtoms([[lotAtom, lot!]]);
  const lote = useAtomValue(lotAtom);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [focusedImages, setFocusedImages] = useAtom(focusImages);
  const router = useRouter();
  const isNewLot = useMemo(() => !lote._id, [lote]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      ...lote,
      images: lote?.images ?? [],
    },
  });

  const { data: session } = useSession();

  const onSubmit = async (form: FormProps) => {
    if (isNewLot && (form!.images!.length > 6 || form!.images!.length < 1))
      return alert('Las imagenes deben ser minimo 1 y maximo 6.');
    setIsSaving(true);
    try {
      const { data } = await quieroLoteApi<{ status: number }>({
        url: isNewLot ? '/admin/lotes' : `/admin/lotes/${form._id}`,
        method: isNewLot ? 'POST' : 'PUT',
        data: isNewLot
          ? {
              ...form,
              images: await saveImages(form!.images as File[]),
              user: session?.user.id,
            }
          : {
              ...form,
              ...(form.imagesUpdate && {
                images: [
                  ...form.images!,
                  ...(await saveImages(form!.imagesUpdate as File[]))!,
                ],
              }),
            },
      });

      if (data.status === 200) {
        router.replace('/admin/lots');
        setIsSaving(false);
      }
    } catch (error) {
      console.log({ error });
      setIsSaving(false);
    }
  };

  const handleImageDelete = async (url: string) => {
    try {
      const publicId = getImagePublicId(url);
      const copyImages = [...focusedImages!];
      const filteredImages = focusedImages?.filter(
        (url) => !url.includes(publicId)
      );
      setFocusedImages(filteredImages);
      setValue('images', filteredImages);
      const { data } = await quieroLoteApi.delete<{ statusCode: number }>(
        `/admin/cloudinary/${publicId}`
      );
      if (data.statusCode !== 204) {
        setFocusedImages(copyImages);
        setValue('images', copyImages);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDeleteLot = async () => {
    setIsSaving(true);
    try {
      const {data} = await quieroLoteApi<{status: number}>({
        url:  `/admin/lotes/${lote._id}`,
        method: 'DELETE',
      });
      if (data.status === 204) {
        router.replace('/admin/lots');
        setIsSaving(false);
      }
    } catch (error) {
      console.log({ error });
      setIsSaving(false);
    }
  }

  const saveImages = async (files: File[]): Promise<string[] | undefined> => {
    const imagesUrls: string[] = [];
    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('file', file);
        const { data } = await quieroLoteApi.post<{ message: string }>(
          '/admin/cloudinary',
          formData
        );
        imagesUrls.push(data.message);
      }

      return imagesUrls;
    } catch (error) {
      throw error;
    }
  };

  return (
    <LoteUpdateStyles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="titulo"
          type="text"
          name="titulo"
          label="Titulo*"
          register={register}
          rules={{ required: 'Titulo es requerido.' }}
          errors={errors as any}
        />
        <FormInput
          id="descripcion"
          type="text"
          name="descripcion"
          label="Descripcion*"
          register={register}
          rules={{ required: 'Descripcion es requerido.' }}
          errors={errors as any}
        />
        <FormSelect
          id="estado"
          name="estado"
          label="Estado*"
          rules={{ required: 'Estado es requerido.' }}
          options={estadoOptions}
          register={register}
          errors={errors as any}
        />
        <FormInput
          id="precio"
          type="text"
          name="detalles.precio"
          label="Precio*"
          register={register}
          rules={{
            required: 'Precio es requerido.',
            pattern: {
              value: /^([0-9])*$/i,
              message: 'Debe de ser solo numeros',
            },
          }}
          errors={errors as any}
        />
        <FormInput
          id="terreno"
          type="text"
          name="detalles.terreno"
          label="Terreno*"
          register={register}
          rules={{
            required: 'Terreno es requerido.',
            pattern: {
              value: /^([0-9])*$/i,
              message: 'Debe de ser solo numeros',
            },
          }}
          errors={errors as any}
        />
        <FormInput
          id="topografia"
          type="text"
          name="detalles.topografia"
          label="Topografia*"
          register={register}
          rules={{
            required: 'Topografia es requerido.',
            pattern: {
              value: /^([0-9])*$/i,
              message: 'Debe de ser solo numeros',
            },
          }}
          errors={errors as any}
        />
        <FormInput
          id="tipoUsoSuelo"
          type="text"
          name="detalles.tipoUsoSuelo"
          label="Tipo Uso Suelo*"
          register={register}
          rules={{
            required: 'Tipo Uso Suelo es requerido.',
          }}
          errors={errors as any}
        />
        <FormInput
          id="provincia"
          type="text"
          name="direccion.provincia"
          label="Provincia*"
          register={register}
          rules={{
            required: 'Provincia es requerido.',
          }}
          errors={errors as any}
        />
        <FormInput
          id="canton"
          type="text"
          name="direccion.canton"
          label="Canton*"
          register={register}
          rules={{
            required: 'Canton es requerido.',
          }}
          errors={errors as any}
        />
        <FormInput
          id="distrito"
          type="text"
          name="direccion.distrito"
          label="Distrito*"
          register={register}
          rules={{
            required: 'Distrito es requerido.',
          }}
          errors={errors as any}
        />
        <FormInput
          id="direccion"
          type="text"
          name="direccion.direccion"
          label="Direccion*"
          register={register}
          rules={{
            required: 'Direccion es requerido.',
          }}
          errors={errors as any}
        />
        <FormInput
          id="avaluo"
          type="checkbox"
          name="detalles.avaluo"
          label="Avaluo"
          register={register}
          rules={{}}
          errors={errors as any}
        />
        <FormInput
          id="financiado"
          type="checkbox"
          name="detalles.financiado"
          label="Financiado"
          register={register}
          rules={{}}
          errors={errors as any}
        />
        <FormInput
          id="serviciosPublicos"
          type="checkbox"
          name="detalles.serviciosPublicos"
          label="Servicios Publicos"
          register={register}
          rules={{}}
          errors={errors as any}
        />
        <FormInput
          id="planoCatastro"
          type="checkbox"
          name="detalles.planoCatastro"
          label="Plano Catastro"
          register={register}
          rules={{}}
          errors={errors as any}
        />
        <FormInput
          id="estudioAnteproyecto"
          type="checkbox"
          name="detalles.estudioAnteproyecto"
          label="Estudio Anteproyecto"
          register={register}
          rules={{}}
          errors={errors as any}
        />
        <FormInput
          id="cuotaMantenimiento"
          type="checkbox"
          name="detalles.cuotaMantenimiento"
          label="Cuota Mantenimiento"
          register={register}
          rules={{}}
          errors={errors as any}
        />
        <FormInput
          id="usoSuelo"
          type="checkbox"
          name="detalles.usoSuelo"
          label="Uso Suelo"
          register={register}
          rules={{}}
          errors={errors as any}
        />
        <FormInput
          id="destacado"
          type="checkbox"
          name="destacado"
          label="Destacado"
          register={register}
          rules={{}}
          errors={errors as any}
        />
        {isNewLot && (
          <FormInput
            id="images"
            type="file"
            name="images"
            label="Imagenes *"
            register={register}
            rules={{}}
            errors={errors as any}
            accept="image/png, image/jpeg"
            multiple
          />
        )}
        {!isNewLot && (
          <FormInput
            id="images"
            type="file"
            name="imagesUpdate"
            label="Agregar Imagenes *"
            register={register}
            rules={{}}
            errors={errors as any}
            accept="image/png, image/jpeg"
            multiple
          />
        )}
        {!isNewLot && lote.images && (
          <div className="images">
            {lote.images.map((url) => (
              <div className="image" key={url}>
                <div>
                  <Image src={url} alt={url} fill unoptimized />
                </div>
                <Button
                  variant="outlined"
                  color="primary"
                  type="button"
                  disabled={isSaving}
                  onClick={() => handleImageDelete(url)}
                >
                  Eliminar
                </Button>
              </div>
            ))}
          </div>
        )}
        <Button variant="contained" color="primary" type="submit" disabled={isSaving}>
            {isNewLot ? 'Guardar' : 'Actualizar'}
          </Button>
          {!isNewLot && <Button variant="outlined" color="primary" type="button" disabled={isSaving} onClick={handleDeleteLot}>
            Eliminar
          </Button>}
      </form>
    </LoteUpdateStyles>
  );
};
