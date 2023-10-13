import { Client } from '@prisma/client';
import React, { useState } from 'react';
import Select from 'react-select';

export default function SearchAbleSelect({options,getLabel,name,getValue}:{
    options:any[],
    isClearable?:boolean,
    isDisabled?:boolean,
    getLabel:any,
    getValue:any
    name:string
}){


  return (
    <>

<Select
      defaultValue={null}
      isClearable
      isSearchable
      name={name}
      options={options}
      getOptionLabel={getLabel}
      getOptionValue={getValue}
    />

      {/* <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={null}
        isDisabled={isDisabled??false}
        isClearable={isClearable??true}
        isSearchable={true}
        name="color"
        options={options}
      /> */}


    </>
  );
};
