const ImagePlaceholder = ({ caption = 'Image placeholder', height = 240 }) => {
  return (
    <figure className="image-placeholder" style={{ height }}>
      <div className="image-placeholder__box" />
      {caption ? <figcaption className="image-placeholder__caption">{caption}</figcaption> : null}
    </figure>
  );
};

export default ImagePlaceholder;


