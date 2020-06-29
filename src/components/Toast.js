import React from 'react';
import * as s from "./Toast.scss";
//import cx from "../../utils/classNames";

export const showToast = function({toast, timeout = 3000}) {
    this.setState({ toast }, () => setTimeout(() => this.setState({ toast: false }), timeout))
};

const Toast = ({toast}) => <div className={s.snackbar}><p>{toast}</p></div>;

export default Toast;