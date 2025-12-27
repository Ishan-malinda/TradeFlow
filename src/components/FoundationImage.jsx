const FoundationImage = ({ imageSrc, caption = '', alt = 'Foundation content image' }) => {
  if (!imageSrc) return null;

  return (
    <figure className="foundation-image">
      <img 
        src={imageSrc}
        alt={alt}
        className="foundation-image__img"
      />
      {caption && (
        <figcaption className="foundation-image__caption">{caption}</figcaption>
      )}
    </figure>
  );
};

export default FoundationImage;

