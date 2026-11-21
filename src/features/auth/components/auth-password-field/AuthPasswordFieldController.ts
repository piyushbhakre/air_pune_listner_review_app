"use client";

import { useState } from "react";

export function useAuthPasswordField() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((v) => !v);
  return { visible, toggleVisible };
}
