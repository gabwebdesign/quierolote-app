'use client';

import { Button } from '@/components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { FilterFormStyles } from './FilterFormStyles';
import { FormSelect } from '../FormSelect/FormSelect';
import { useState } from 'react';
import ReactSlider from "react-slider";

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

  const [minSize,setMinSize]= useState("50");
  const [maxSize,setMaxSize]= useState("50000000");

  const [minPrice,setMinPrice]= useState("50");
  const [maxPrice,setMaxPrice]= useState("50000000");
  
  const onSubmit = handleSubmit((data) => {
    console.log({data})
    data["precio"] = [minPrice,maxPrice];
    data["tamaño"] = [minSize,maxSize];
    console.log('submitting...');
  });

  const sizeSliderHandler = (values:any)=>{
    const minValueSelected=values.value[0];
    const maxValueSelected=values.value[1];

    const sizeMin = new Intl.NumberFormat('en-US').format(minValueSelected);
    const sizeMax = new Intl.NumberFormat('en-US').format(maxValueSelected);

    setMaxSize(sizeMax);
    setMinSize(sizeMin);
  }

  const priceSliderHandler = (values:any)=>{
    const minValueSelected=values.value[0];
    const maxValueSelected=values.value[1];

    const priceMin = new Intl.NumberFormat('en-US').format(minValueSelected);
    const priceMax = new Intl.NumberFormat('en-US').format(maxValueSelected);

    setMaxPrice(priceMax);
    setMinPrice(priceMin);
  }

  return (
    <FilterFormStyles onSubmit={onSubmit}>

        <FormSelect
            id="provincia"
            name="provincia"
            label="provincia"
            register={register}
            defaultValue="Provincia*"
            options={[
                {name: 'San José', value: 'sanjose'}, 
                {name: 'Alajuela', value: 'alajuela'},
                {name: 'Heredia', value: 'heredia'},
                {name: 'Cartago', value: 'cartago'},
                {name: 'Limón', value: 'limon'},
                {name: 'Guanacaste', value: 'guanacaste'},
                {name: 'Puntarenas', value: 'punta  renas'}
            ]}
            errors={errors}
        />

    <div>
        <label>Tamaño</label>
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[50, 50000000]}
            max={50000000}
            min={50}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            onChange={(value, index) =>  sizeSliderHandler({ value, index })}
            pearling
            minDistance={10}
        />
        <div className='values'>
            <span>{minSize}m<sup>2</sup></span>
            <span>{maxSize}m<sup>2</sup></span>
        </div>
    </div>

    <div>
        <label>Precio</label>
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[50, 50000000]}
            max={50000000}
            min={50}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            onChange={(value, index) =>  priceSliderHandler({ value, index })}
            pearling
            minDistance={10}
        />
        <div className='values'>
            <span>₡{minPrice}</span>
            <span>₡{maxPrice}</span>
        </div>
    </div>

    <div className='button-container'>
      <Button variant="contained" color="primary">
        Filtrar Lotes
      </Button>
    </div>

    </FilterFormStyles>
  );
};
