import React from 'react';
import Layout from '@/components/Layouts/Layout/Layout';
import SingleService from '@/components/SingleService/SingleService'; // Componente para mostrar los detalles del servicio
import data from '@/utils/data.json';

const ServiceSingle = ({ service }) => {
  return (
    <React.Fragment>
      <Layout>
        <SingleService service={service} />
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticProps({ params }) {
  const { nombre_servicio } = params;

  // Buscar el servicio según el slug en los datos cargados desde el archivo JSON
  const service = data.find(service => service.slug === nombre_servicio);

  // Retornar los datos del servicio como props para la página
  return {
    props: {
      service
    }
  };
}

export async function getStaticPaths() {
  // Obtener todos los slugs de los servicios como paths
  const paths = data.map(service => ({
    params: { nombre_servicio: service.slug }
  }));

  // Retornar los paths para las páginas estáticas
  return {
    paths,
    fallback: false
  };
}

export default ServiceSingle;