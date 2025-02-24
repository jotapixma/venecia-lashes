import React from 'react';
import Layout from '@/components/Layouts/Layout/Layout';
import Head from 'next/head';
import Services from '../../components/Services/Services'

export default function services_page() {
  return (
    <React.Fragment>
       <Head>
        <title>Servicios</title>
        <meta name="description" content=""/>
      </Head>
      <Layout>
        <main>
          <Services title="Servicios"/>
        </main>
      </Layout>
    </React.Fragment>
  )
}
