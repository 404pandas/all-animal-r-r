import React from "react";
import { DonateTable } from "../components/DonateTable";
import { ExpensesTable } from "../components/ExpensesTable";

import Container from "@mui/material/Container";

export default function DonateList() {
  return (
    <Container id='donate-body'>
      <DonateTable />
      <ExpensesTable />
    </Container>
  );
}
