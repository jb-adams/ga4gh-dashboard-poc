"use client";

import { useState } from 'react';
import ga4ghLogo from "./ga4gh-logo.jpg";
import { 
  Container,
  Heading,
  Image,
  Separator
} from "@chakra-ui/react";
import { type GA4GHServerImplementationList } from '../types/GA4GHServerImplementationList';
import useReadCSV from '../hooks/useReadCSV';
import TotalImplementationsPanel from './totalImplementationsPanel';
import Ga4ghImplementationTable from './ga4ghImplementationTable';
// import ServerTypeBarChart from './serverTypeBarChart';

const divStyle = {
  margin: '25px'
}

export function Dashboard() {
  const serverImplementations: GA4GHServerImplementationList = useReadCSV();

  return (
    <Container centerContent={true}>
      <div>
        {/* Logo */}
        <div style={divStyle}>
          <Image src={ga4ghLogo} />
        </div>
        <Separator />
        <div style={divStyle}>
          <Heading size="3xl">GA4GH Analytics Dashboard PoC</Heading>
        </div>
        <Separator/>

        <TotalImplementationsPanel implementationCount={serverImplementations.data.length} />
        <Ga4ghImplementationTable serverImplementations={serverImplementations} />
        {/* <ServerTypeBarChart serverImplementations={serverImplementations} /> */}
      
      </div>
    </Container>
  );
}
