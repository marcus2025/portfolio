import React, { useState } from 'react';
import type { ReactNode } from 'react';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  loader?: ReactNode;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ src, alt, loader, className}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {loading && !error && (
        <div className='absolute inset-0 flex items-center justify-center bg-slate-800/60 rounded-lg'>
          {loader || <span>Loading...</span>}
        </div>
      )}
      {!error ? (
        <img
          src={src}
          alt={alt}
          className={`${className}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          style={loading ? { visibility: 'hidden' } : {}} 
        />
      ) : (
        <div>Error loading image</div>
      )}
    </div>
  );
};

export default ImageWithLoader;
