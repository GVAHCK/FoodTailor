import React from 'react';
import BrandShowcase from '../components/BrandShowcase';
import CTABand from '../components/CTABand';

export default function BrandsPage() {
  return (
    <div className="brands-page-wrapper">
      <BrandShowcase showHeader={true} isFullPage={true} />
      <CTABand />
    </div>
  );
}
