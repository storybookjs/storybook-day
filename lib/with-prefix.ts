const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const withPrefix = (src: string) =>
  basePath && /^\//.test(src) ? `${basePath}${src}` : src;
