const PRODUCT_IMAGE_FIELDS = `
    id
    url
    width
    height
    altText
`;

export const PRODUCT_BASIC_FRAGMENT = `
    id
    title
    description
    handle
    tags
    productType
    availableForSale
    totalInventory
    priceRange {
        minVariantPrice {
            amount
            currencyCode
        }
        maxVariantPrice {
            amount
            currencyCode
        }
    }
    options {
        id
        name
        values
    }
`;

export const PRODUCT_FEATURED_IMAGE_FRAGMENT = `
    featuredImage {
        ${PRODUCT_IMAGE_FIELDS}
    }
`;

export const PRODUCT_IMAGES_FRAGMENT = `
    images(first: 5) {
        edges {
            node {
                ${PRODUCT_IMAGE_FIELDS}
            }
        }
    }
`;

export const PRODUCT_COLLECTIONS_FRAGMENT = `
    collections(first: 1) {
        edges {
            node {
                products(first: 5) {
                    edges {
                        node {
                            id
                            handle
                            title
                            priceRange {
                                minVariantPrice {
                                    amount
                                }
                            }
                            totalInventory
                            images(first: 5) {
                                edges {
                                    node {
                                        ${PRODUCT_IMAGE_FIELDS}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PRODUCT_VARIANTS_FRAGMENT = `
    variants(first: 25) {
        edges {
            node {
                id
                title
                availableForSale
                priceV2 {
                    amount
                }
                image {
                    ${PRODUCT_IMAGE_FIELDS}
                }
                selectedOptions {
                    name
                    value
                }
            }
        }
    }
`;

export const PRODUCT_VARIANTS_COMPACT_FRAGMENT = `
    variants(first: 25) {
        edges {
            node {
            id
            title
            availableForSale
            }
        }
    }
`;
