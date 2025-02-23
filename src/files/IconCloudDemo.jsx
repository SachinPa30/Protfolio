import { IconCloud } from "../components/ui/iconcloud";

const slugs = [
  "javascript",
  "react",
  "java",
  "html5",
  "css3",
  "bootstrap",
  "springboot",
  "github",
  "hibernate",
  "spring-mvc",
  "spring-orm",
];

export function IconCloudDemo() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
