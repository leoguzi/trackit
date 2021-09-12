import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container } from "../../styles/standardStyles";

export default function Today() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  if (!user) {
    history.push("/");
  }
  return (
    <>
      <Header />
      <Container />
      <Footer></Footer>
    </>
  );
}
