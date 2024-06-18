const Payment = ({ info }) => {
  return (
    <main>
      <div className="container">
        <p>
          Il ne vous reste plus qu'un étape pour vous offrir {info[1]}. Vous
          allez payer {info[0]} € (frais de protection et frais de port inclus).
        </p>
      </div>
    </main>
  );
};

export default Payment;
