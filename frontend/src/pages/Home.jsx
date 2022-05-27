import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Quel souci avez vous rencontré ?</h1>
        <p>Veuillez choisir une des options ci dessous</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Créer un nouveau ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> Voir mes tickets
      </Link>
    </>
  );
}

export default Home;
