interface SectionImageProps {
  src: string;
  alt: string;
}

const SectionImage = ({ src, alt }: SectionImageProps) => (
  <div className="w-full overflow-hidden rounded-lg">
    <img
      src={src}
      alt={alt}
      className="section-image hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
  </div>
);

export default SectionImage;
