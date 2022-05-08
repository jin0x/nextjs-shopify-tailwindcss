import Link from "next/link";
import Image from "next/image";
import { formatter } from "../utils/helpers";

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const price = product.node.priceRange.minVariantPrice.amount;
  let image = null;

  if (product.node.images.edges[0]) {
    const { altText, originalSrc } = product.node.images.edges[0]?.node;
    image = (
      <div className="w-full overflow-hidden bg-gray-200 rounded-3xl">
        <div className="relative group-hover:opacity-75 h-72">
          <Image
            src={originalSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    );
  }

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        {image}
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{formatter.format(price)}</p>
      </a>
    </Link>
  );
};

export default ProductCard;
