"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9214823e-ac23-4ba1-b93e-7f1c7cf0e625");
  }, []);

  return null;
};
