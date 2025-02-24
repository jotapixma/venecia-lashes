import React from 'react';
import ContactModule from '@/components/ContactModule/ContactModule'
import Layout from '@/components/Layouts/Layout/Layout';
import Head from 'next/head';

export default function contactanos() {
  return (
    <React.Fragment>
       <Head>
        <title>Agenda</title>
        <meta name="description" content=""/>
      </Head>
      <Layout>
        <ContactModule/>
      </Layout>
    </React.Fragment>
  )
}
