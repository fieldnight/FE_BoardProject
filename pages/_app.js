import "@/styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //해당 uri에서 데이터를 방
  });
  return (
    <ApolloProvider client={client}>
      <div style={{ color: "black", fontSize: "24px" }}>시작페이지입니다.</div>
      <Component {...pageProps} />
    </ApolloProvider>
    //아폴로 클라이언트 만들어서 모든 페이지에서 사용할 수 있도록 ! 태그로 감싸줬다.
  );
}
