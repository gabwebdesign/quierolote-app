import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface LoteGalleryStylesProps {
  theme?: Theme;
}

const LoteGalleryBase = (theme:Theme): Styles => ({
        width:'100%',
        display: 'flex',
});

const LoteGalleryStructure = (theme: Theme): Styles => ({
    '& .big-image img':{
        width:'100%',
    }
});

const generateLoteGalleryStyles = ({ theme }: LoteGalleryStylesProps) => ({
  ...LoteGalleryBase(theme!),
  ...LoteGalleryStructure(theme!),
});

export const LoteGalleryStyles =
  styled.header<LoteGalleryStylesProps>(generateLoteGalleryStyles);



