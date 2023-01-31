import propTypes from 'prop-types';

import { SEO } from 'components/SEO';

export function Layout({ children, titleSEO }) {
  return (
    <>
      <SEO title={titleSEO} />
      {children}
    </>
  );
}
Layout.defaultProps = {
  titleSEO: 'Vibbraneo Todo',
  children: null,
};

Layout.propTypes = {
  titleSEO: propTypes.string,
  children: propTypes.node,
};
