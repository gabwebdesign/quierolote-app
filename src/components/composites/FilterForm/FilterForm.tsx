'use client';

import { Button } from '@/components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { FilterFormStyles } from './FilterFormStyles';
import { FormSelect } from '../FormSelect/FormSelect';
import { useState } from 'react';
import ReactSlider from 'react-slider';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  lostFilteredAtom,
  lotsAtom,
  lotsAtomCopy,
} from '@/store/atoms';

type FilterForm = {
  provincia: string;
  tamaño: string[];
  precio: string[];
};

export const FilterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterForm>();
  const lotsFiltered = useSetAtom(lostFilteredAtom);
  const [lotsCopy, setLotsCopy] = useAtom(lotsAtomCopy);
  const lots = useSetAtom(lotsAtom);

  const [minSize, setMinSize] = useState('10');
  const [maxSize, setMaxSize] = useState('50000000');

  const [minPrice, setMinPrice] = useState('10');
  const [maxPrice, setMaxPrice] = useState('50000000');

  const onSubmit = handleSubmit((data) => {
    lotsFiltered({
      price: {
        min: +minPrice.replaceAll(',', ''),
        max: +maxPrice.replaceAll(',', ''),
      },
      provincia: data.provincia,
      terreno: {
        min: +minSize.replaceAll(',', ''),
        max: +maxSize.replaceAll(',', ''),
      },
    });
  });

  const sizeSliderHandler = (values: any) => {
    const minValueSelected = values.value[0];
    const maxValueSelected = values.value[1];

    const sizeMin = new Intl.NumberFormat('en-US').format(minValueSelected);
    const sizeMax = new Intl.NumberFormat('en-US').format(maxValueSelected);

    setMaxSize(sizeMax);
    setMinSize(sizeMin);
  };

  const priceSliderHandler = (values: any) => {
    const minValueSelected = values.value[0];
    const maxValueSelected = values.value[1];

    const priceMin = new Intl.NumberFormat('en-US').format(minValueSelected);
    const priceMax = new Intl.NumberFormat('en-US').format(maxValueSelected);

    setMaxPrice(priceMax);
    setMinPrice(priceMin);
  };

  const handleClearFilters = () => {
    lots(lotsCopy);
    setLotsCopy(null);
  };

  return (
    <FilterFormStyles onSubmit={onSubmit}>
      <FormSelect
        id="provincia"
        name="provincia"
        label="Provincia:"
        register={register}
        defaultValue="Provincia*"
        options={[
          { name: 'San José', value: 'sanjose' },
          { name: 'Alajuela', value: 'alajuela' },
          { name: 'Heredia', value: 'heredia' },
          { name: 'Cartago', value: 'cartago' },
          { name: 'Limón', value: 'limon' },
          { name: 'Guanacaste', value: 'guanacaste' },
          { name: 'Puntarenas', value: 'puntarenas' },
        ]}
        rules={{}}
        errors={errors as any}
      />

      <div>
        <label>Tamaño:</label>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[50, 50000000]}
          max={50000000}
          min={50}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          onChange={(value, index) => sizeSliderHandler({ value, index })}
          pearling
          minDistance={10}
        />
        <div className="values">
          <span>
            {minSize}m<sup>2</sup>
          </span>
          <span>
            {maxSize}m<sup>2</sup>
          </span>
        </div>
      </div>

      <div>
        <label>Precio:</label>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[50, 50000000]}
          max={50000000}
          min={50}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          onChange={(value, index) => priceSliderHandler({ value, index })}
          pearling
          minDistance={10}
        />
        <div className="values">
          <span>₡{minPrice}</span>
          <span>₡{maxPrice}</span>
        </div>
      </div>

      <div className="button-container">
        <Button variant="contained" color="primary" type="submit">
          Filtrar Lotes
        </Button>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={handleClearFilters}
        >
          Limpiar Filtros
        </Button>
      </div>
    </FilterFormStyles>
  );
};
