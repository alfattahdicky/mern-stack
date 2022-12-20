import React from "react";
import Section from "./Section";

const One = () => {
  return (
    <Section
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
      titles={[
        "Opening your doors",
        "to become a professional",
        "Data Scientist",
      ]}
      description="Data at the heart of digital transformation"
      linkTitle="read more..."
    />
  );
};

export default One;
