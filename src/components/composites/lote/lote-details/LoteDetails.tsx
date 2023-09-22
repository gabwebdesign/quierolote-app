'use client';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { LoteCardIcon, LoteIconProps } from '../lote-card-icon/LoteCardIcon';
import { LoteDetailsStyles } from './LoteDetailsStyles';
import { useAtomValue } from 'jotai';
import { lotAtom } from '@/store/atoms';
import { useMemo } from 'react';
import { capitalize } from '@/utils/css/utilities';
import isEmpty from 'lodash.isempty';

export const LoteDetails = () => {
  const theme = useTheme();
  const lot = useAtomValue(lotAtom);
  const loteFeatures = useMemo(() => {
    const featuresSelected = {
      0: {
        ...(lot?.detalles?.terreno && {
          iconName: 'Mide',
          feature: 'Mide',
          data: lot?.detalles?.terreno,
        }),
      },
      1: {
        ...(lot?.detalles?.usoSuelo && {
          iconName: 'Suelo',
          feature: 'Uso del suelo',
        }),
      },
      2: {
        ...(lot?.detalles?.topografia && {
          iconName: 'Topografia',
          feature: 'Topografía',
        }),
      },
      3: {
        ...(lot?.detalles?.avaluo && {
          iconName: 'Mide',
          feature: 'Avalúo',
        }),
      },
      4: {
        ...(lot?.estado && {
          iconName: 'Alquiler',
          feature: `Lote en ${capitalize(lot.estado)}`,
        }),
      },
      5: {
        ...(lot?.detalles?.serviciosPublicos && {
          iconName: 'Servicios',
          feature: 'Constancia de servicios públicos',
        }),
      },
      6: {
        ...(lot?.detalles?.planoCatastro && {
          iconName: 'Diseño',
          feature: 'Plano de catastro',
        }),
      },
      7: {
        ...(lot?.detalles?.estudioAnteproyecto && {
          iconName: 'EstudioFinanciero',
          feature: 'Estudio de anteproyecto',
        }),
      },
      8: {
        ...(lot?.detalles?.cuotaMantenimiento && {
          iconName: 'EstudioPrecios',
          feature: 'Cuota de mantenimiento',
        }),
      },
    };

    return Object.values(featuresSelected).filter(
      (value) => !isEmpty(value)
    ) as LoteIconProps[];
  }, [lot]);

  return (
    <LoteDetailsStyles>
      <div className="general-info">
        <div className="price">
          <Typography
            variant="heading1"
            color={theme.colors.primary.main}
            fontWeight="bold"
          >
            ${lot!.detalles?.precio?.toFixed(2)}
          </Typography>
          <Typography fontWeight="bold" textSize="xl">
            {lot!.detalles?.terreno} m<sup>2</sup>
          </Typography>
        </div>
        <div className="description">
          <Typography fontWeight="bold" textSize="xl">{`${
            lot!.direccion?.provincia
          }, ${lot!.direccion?.canton}, ${
            lot!.direccion?.distrito
          }`}</Typography>
          <Typography>{lot!.descripcion}</Typography>
        </div>
      </div>
      <div className="details">
        {loteFeatures.map((feature, index) => {
          return (
            <LoteCardIcon
              key={index}
              iconName={feature.iconName}
              feature={feature.feature}
              data={feature.data}
            />
          );
        })}
      </div>
    </LoteDetailsStyles>
  );
};
