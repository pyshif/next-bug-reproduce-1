/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const request = new Request("http://localhost:3000");
  console.log("request instanceof Request :>> ", request instanceof Request);
  return null;
}
