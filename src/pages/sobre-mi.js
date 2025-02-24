import React from 'react';
import AboutMe from '@/components/AboutMe/AboutMe'
import Layout from '@/components/Layouts/Layout/Layout';
import Head from 'next/head';

export default function sobre_mi() {
  return (
    <React.Fragment>
       <Head>
        <title>Sobre mí</title>
        <meta name="description" content="Naturalmente bella"/>
      </Head>
      <Layout>
        <AboutMe/>
      </Layout>
    </React.Fragment>
  )
}
