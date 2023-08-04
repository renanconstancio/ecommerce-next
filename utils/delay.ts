export default async function delay(ms = 3000) {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
