import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <main>
      <div className="container">
        <div className="wrap">
          {data.offers.map((elem, index) => {
            return (
              <Link to={`/offers/${elem._id}`} key={elem._id}>
                <div key={elem._id} className="box">
                  <article>
                    <span>{elem.owner.account.username}</span>
                    {/* {elem.owner.account.avatar.url && (
                    <img src={elem.owner.account.avatar.url} alt="la" />
                  )} */}
                  </article>

                  <section>
                    <img src={elem.product_pictures[0].url} alt="l" />
                    <h4>{elem.product_name}</h4>
                    <h5>{elem.product_price}</h5>
                    {elem.product_details[0] ? (
                      <p>{elem.product_details[1].taille}</p>
                    ) : (
                      ""
                    )}
                  </section>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
