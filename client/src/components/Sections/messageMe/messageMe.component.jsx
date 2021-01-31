//Framework
import React, {useState} from 'react';
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//Selectors
import {
  selectRichTextMessageAsHTML,
  selectCustomerCountry,
  selectIsComplete,
  selectIsError,
  selectIsLoading,
} from "../../../redux/messageMe/messageMe.selectors";
//Actions
import {
  updateCustomerCountry,
  updateRichTextMessageAsHTML,
  sendDataToServer,
  updateIsLoading,
  toggleIsComplete,
} from "../../../redux/messageMe/messageMe.actions";
//Components
import InputDropDown from '../../../interactions/InputDropDown/inputDropDown.component';
import PasswordValidator2 from '../../../interactions/passwordValidator/passwordValidator2.component';
// import SignIn from '../../components/sign-in/sign-in.component';
import SignIn from '../../sign-in/sign-in.component';
// import SignUp from '../../components/sign-up/sign-up.component';
import SignUp from '../../sign-up/sign-up.component';
import RichText from '../../../interactions/richTextCard/richTextCard.component';
import CountryPicker from '../../../interactions/CountryPicker/countryPicker.component';
import InputMaterial from '../../../interactions/InputMaterial/inputMaterial.component';
import LoadingButton from "../../../interactions/loadingButton/loadingButton.component";

// import PasswordValidator from '../../../interactions/passwordValidator/passwordValidator.component';
import PasswordValidator3 from '../../../interactions/passwordValidator/passwordValidator3.component';

import { MessageMeContainer, SendButton , RightSide, LeftSide} from "./messageMe.styles";

import FormInput from "../../atomic/form-input/form-input.component";
import CustomButton from "../../atomic/custom-button/custom-button.component";
 
  


const MessageMeSection = ({
  richTextMessageAsHTML,
  updateRichTextMessageAsHTML,
  customerCountry,
  updateCustomerCountry,
  sendDataToServer,
  isError,
  isComplete,
  isLoading,
  updateIsLoading,
  toggleIsComplete,
}) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })  
  const { displayName, email, password, confirmPassword } = userCredentials;

  
  const handleChange = (event) => { 
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // event.preventDefault();
    console.log("hello from handleSubmit /messageMe.JS :D ");

    if (password !== confirmPassword) {
      alert("ooOOppSSss!! passwords don't match");
      return;
    }
    if (!password) {
      alert("please enter password.");
      return;
    }

    updateIsLoading(true);
    sendDataToServer("/api/v1/email", {
      pureHTML: richTextMessageAsHTML,
      customerCountry: customerCountry,
    });
    
  };

  return (
    <MessageMeContainer>
      <LeftSide>
        <RichText updateRichTextMessageAsHTML={updateRichTextMessageAsHTML} />
      </LeftSide>

      <RightSide>
        <CountryPicker
          customerCountry={customerCountry}
          updateCustomerCountry={updateCustomerCountry}
        />

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          {/* <CustomButton type="submit">SIGN UP</CustomButton> */}
          <LoadingButton
            type="submit"
            isLoading={isLoading}
            isError={isError}
            isComplete={isComplete}
            handleSubmit={handleSubmit}
            toggleIsComplete={toggleIsComplete}
          />
        </form>

        {/* <InputMaterial /> */}
        {/* <InputDropDown /> */}
      </RightSide>

      {/* <PasswordValidator2 /> */}
      {/* <PasswordValidator3 /> */}
      {/* <SendButton onClick={handleSubmit}>Send Your Message</SendButton> */}
    </MessageMeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  customerCountry: selectCustomerCountry,
  richTextMessageAsHTML: selectRichTextMessageAsHTML,
  isComplete: selectIsComplete,
  isError: selectIsError,
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateCustomerCountry: (value) => dispatch(updateCustomerCountry(value)),
  updateIsLoading: (value) => dispatch(updateIsLoading(value)),
  toggleIsComplete: (value) => dispatch(toggleIsComplete()),
  updateRichTextMessageAsHTML: (value) =>
    dispatch(updateRichTextMessageAsHTML(value)),
  sendDataToServer: (URL, data) => dispatch(sendDataToServer(URL, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageMeSection);
