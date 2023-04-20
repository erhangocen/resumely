import { toast } from "react-hot-toast";

import React, { FC } from 'react';
export interface ToastProps {
  height: number;
}
const showToast = () => {
  return (
    toast("sadssad")
  );
};

export default showToast;