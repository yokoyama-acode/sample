import Head from 'next/head';
import Link from 'next/link';

import Top from './components/top';
import CompanyProfile from './components/compnayProfile';
import CompanyPhilosophy from './components/companyHistory';
import ServiceCard from './components/businessServices';
import AccessSection from './components/accessSection';

import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Home() {
  return (
    <div id="container">
      <Header />
      <Top />
      <main>
        <CompanyPhilosophy />
        <ServiceCard />
        <CompanyProfile />
        <AccessSection /> 
      </main>
      <Footer />
    </div>
  );
}