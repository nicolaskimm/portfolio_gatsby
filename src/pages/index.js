import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1> hello! </h1>
    <button type="button">
      <Link to="/page-2/">Go to page 2</Link>
    </button>
  </Layout>
);

export default IndexPage;
