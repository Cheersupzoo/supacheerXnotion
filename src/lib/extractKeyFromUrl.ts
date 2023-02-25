export function extractKeyFromUrl(url: string) {
  const regex =
    /https:\/\/s3.us-west-2.amazonaws.com\/secure.notion-static.com\/(.*)\/.*\.(.*)\?.*/
  const result = regex.exec(url)
  return [result?.[1] ?? '', result?.[2]]
}
