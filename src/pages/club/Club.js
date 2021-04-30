
import React, {useEffect, useState} from 'react';
import Select ,{ components } from 'react-select';
import axios from "axios";
import './style.css'
import { useTranslation } from 'react-i18next';

const CaretDownIcon = () => {
    return <img src={"/images/btn-search.png"} className={"bg-img-search pointer"}/>
};

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <CaretDownIcon />
        </components.DropdownIndicator>
    );
};

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#06A9A0' : '#DDFE5A',
        padding: 12,
        "&:hover": {
            backgroundColor: "#DDFE5A",
            color : "#06A9A0",
        },
        backgroundColor: state.isSelected ?  '#DDFE5A':'#06A9A0',
        border : '1px solid #DDFE5A',
        textAlign : 'center',
        cursor : "pointer"

    }),
    control: (provided, state) => ({
        backgroundColor : "#06A9A0",
        borderRadius : '50px',
        border : '5px solid #DDFE5A',
        display : "flex",
        justifyContent : 'center',
        color : '#DDFE5A',
        width : '506px',
        height: '52px',
        overflow : 'hidden',
        margin: '0',
    }),
    singleValue: (provided, state) => {

    }
}
const Club = () => {
    const [options , setOptions] = useState([]);
    const { t, i18n } = useTranslation()
    useEffect(()=>{
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(res=> {
                const data = res.data
                const option = data.map(d => ({
                    "value" : d.name,
                    "label" : d.name
                }));
                setOptions(option);
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <div>
            <h1 className={"title text-center"}>{t("select your country")}</h1>
           <div className={"mt-5"}>
               <Select
                       options={options}
                       isClearable
                       styles={customStyles}
                       placeholder={t("select your country")}
                       components={{ DropdownIndicator , IndicatorSeparator: () => null}}>
               </Select>
           </div>
        </div>
    )
};

export default Club;