import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Client_Code from "./_components/Client_Code";
import Available from "./_components/Available";
import Products from "./_components/Products";
import Publicity from "./_components/Publicity";
import Chat from "./_components/Chat";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Client_Code />
      <Available />
      <Products />
      <Publicity />
      <Chat />
    </>
  );
}
