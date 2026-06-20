export function useBaseUrlUtils() {
  return { withBaseUrl: (url: string) => url };
}

export default function useBaseUrl(url: string) {
  return url;
}
