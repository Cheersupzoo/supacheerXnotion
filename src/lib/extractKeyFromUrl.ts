export function extractKeyFromUrl(url: string) {
  const regexS3Url =
    /https:\/\/s3.us-west-2.amazonaws.com\/secure.notion-static.com\/(.*)\/.*\.(.*)\?.*/
  let result = regexS3Url.exec(url)

  if (!result?.[1]) {
    const regexS3UrlV2 =
      /https:\/\/prod-files-secure.s3.us-west-2.amazonaws.com\/.*\/(.*)\/.*\.(.*)\?.*/
    result = regexS3UrlV2.exec(url)
  }

  if (!result?.[1]) {
    const regexNotionUrl = /file.notion.so\/f\/s\/(.*)\/(.*)\.([a-zA-Z]*)/
    result = regexNotionUrl.exec(url)
  }
  return [result?.[1] ?? '', result?.[2], result?.[3]]
}
