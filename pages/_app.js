import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div style={{ color: "black", fontSize: "24px" }}>시작페이지입니다.</div>
      <Component {...pageProps} />
    </>
  );
}
