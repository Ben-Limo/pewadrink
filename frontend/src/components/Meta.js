import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To PewaDrink',
  description: 'We sell quality product at affordable prices',
  keywords: 'liquor, buy liquor, alcohol, free delivery',
};

export default Meta;
