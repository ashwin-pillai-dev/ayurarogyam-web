import Select from 'react-select';

export default function SearchAbleSelect({options,defaultValue,value,getLabel,name,id,getValue,onChange}:{
    options:any[],
    isClearable?:boolean,
    defaultValue?:any,
    isDisabled?:boolean,
    value?:any,
    getLabel:any,
    getValue:any,
    id:string,
    name:string
    onChange?:Function
}){



  return (
    <>

<Select
      defaultValue={defaultValue?defaultValue:null}
      isClearable
      isSearchable
      id={id}
      name={name}
      options={options}
      getOptionLabel={getLabel}
      getOptionValue={getValue}
      value={value??value}
      onChange={(value)=>{
        if(typeof(onChange) == 'function'){
          onChange(value)
        }
      }
    }
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