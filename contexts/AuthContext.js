/**
 * This context servers the purpose of providing authentication actions.
 *
 * This context is used in App.js as provider to distribute authentication callbacks such as signIn to consumers.
 * To use this context as consumer, use LoginPage.js as reference.
 */
import React from "react";

const AuthContext = React.createContext();

export default AuthContext;