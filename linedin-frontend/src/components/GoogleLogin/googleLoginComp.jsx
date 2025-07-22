import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginComp = () => {
  const handleOnSucess = (credentialResponse) => {
    console.log(credentialResponse);
  };
  return (
    <div className="w-full">
      <GoogleLogin>
        onSuccess=
        {(credentialResponse) => handleOnSucess(credentialResponse)}
        onError=
        {() => {
          console.log("Login Failed");
        }}
      </GoogleLogin>
    </div>
  );
};

export default GoogleLoginComp;
