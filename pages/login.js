import Signin from "@/components/LogIn/SignIn";
import React from "react";
import Header from "@/components/Global/Header";
import Item from "@/components/LogIn/item";
export default function Login() {
  return (
    <div>
      <Signin />
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return (
    <>
      {/* <Header /> */}
      {page}
    </>
  );
};
