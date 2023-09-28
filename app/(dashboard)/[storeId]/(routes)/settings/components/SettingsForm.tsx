"use client";

import { Store } from "@prisma/client";
import React from "react";
import Heading from "./Heading";

interface SettingsFormProps {
  initialData: Store;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Settings" description="Manage store preferences" />
    </div>
  );
};

export default SettingsForm;
