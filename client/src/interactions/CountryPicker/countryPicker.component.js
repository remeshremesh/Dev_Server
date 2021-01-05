//Basics
import React, { useState } from "react";
//Libraries
import LazyLoad from "react-lazy-load";
//JSON
import countriesLoadedfromDisk from './countryCodes.json';
//Components
import InputMaterial from '../InputMaterial/inputMaterial.component';

import MaskedInput from '../InputMaterial/MaskedInput';
import {Skeleton, SkeletonRow} from './countryPicker.styles';
// import InputDropDown from "../interactions/InputDropDown/inputDropDown.component";
import InputDropDown from "../InputDropDown/inputDropDown.component";


//Styles
import {
  Dialog,
  List,
  Row,
  RowLazy,
  Flag,
  FlagContainer,
  Image,
  Card,
  Input,
  Placeholder,
  Avatar,
  Name,
  Overlay,
  CountryName,
} from "./countryPicker.styles";
// import LazyLoadRow from '../LazyCard/lazyCard.component';


//Code
export const getFlag = (code) => `https://countryflags.io/${code}/flat/64.png`;

// export const CountryDialog = ({ open, setOpen, setCountry }) => (
//   <Dialog open={open}>
//     {countriesLoadedfromDisk.map((country) => (
//       <Row
//         onClick={() => {
//           setOpen(false);
//           setCountry({ name: country.name, dialCode: country.dialCode, code: country.code,
//            } );
//         }}
//       >
//         <Flag src={getFlag(country.code)} />
//         <span>{country.name}</span>
//       </Row>
//     ))}
//   </Dialog>
// );

export const LazyLoadRow = ({
  updateCustomerCountry,
  dialCode,
  code,
  name,
  open,
  setOpen,
  setCountry,
}) => (
  <>
    <SkeletonRow>
      <Skeleton
        width="30px"
        height="30px"
        borderRadius="50%"
        margin="1rem 1rem 0 2rem"
      />
      <div>
        {/* <Skeleton width="130px" margin="0 0 0.6rem" /> */}
        <Skeleton margin="1rem 0 0 .5rem" width="80px" />
      </div>
    </SkeletonRow>

    <LazyLoad height={50}>
      <RowLazy
        onClick={() => {
          setOpen(false);
          setCountry(name);
          updateCustomerCountry({ name, dialCode, code });
        }}
      >
        {/* <Image style={{ background: `url(${getFlag(code)})` }} /> */}
        <FlagContainer>
          <Flag src={getFlag(code)} />
        </FlagContainer>
        <CountryName>{name.substring(0, 15)}</CountryName>
      </RowLazy>
    </LazyLoad>
  </>
);

export const HashGenerator = (key) => {
  let hash = 0;
  if (key) {
      for (let i = 0; i < key.length; i++) {
        hash = Math.floor(hash + key.charCodeAt(i) * 10*i) + Math.floor(Math.random() * (10000 - 10 + 1)) + 10;
        hash = Math.floor(hash + Math.floor(Math.random() * (10000 - 10 + 1)) + 10 )
      }
    }
    return hash;
};

export const CountryDialogLazy = ({ open, setOpen, setCountry, updateCustomerCountry }) => (
  <>
    <Overlay isOpen={open} onClick={() => setOpen(false)} />
    <Dialog open={open}>
      <List>
        {countriesLoadedfromDisk.map((country) => (
          <LazyLoadRow
            key={country.dial_code}
            dialCode={country.dial_code}
            code={country.code}
            name={country.name}
            open={open}
            setOpen={setOpen}
            setCountry={setCountry}
            updateCustomerCountry={updateCustomerCountry}
          />
        ))}
      </List>
    </Dialog>
  </>
);


const CountryPicker = ({ customerCountry, updateCustomerCountry, grid }) => {
  const [isOpen, setOpen] = useState(false);
  const [country, setCountry] = useState("Select Country");
  
  // useEffect(() => {}, [country]);

  return (
    <Card grid>
      <CountryDialogLazy
        open={isOpen}
        setOpen={setOpen}
        setCountry={setCountry}
        updateCustomerCountry={updateCustomerCountry}
      />
      {/* <MaskedInput /> */}
      <InputDropDown setOpen={setOpen} isOpen={isOpen}/>
      {/* <Input onClick={() => setOpen(!isOpen)}>
        <Placeholder>{country === "" ? "Country" : country}</Placeholder>
      </Input> */}
    </Card>
  );
};



//Export
export default CountryPicker;
