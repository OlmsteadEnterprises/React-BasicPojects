import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  console.log(`Tours -- ${tours}`);
  return (
    <>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            console.log(tour);
            console.log(tour.name);
            // <Tour key={tour.id} {...tour}></Tour>;
            return (
              <>
                <article className="single-tour">
                  <img src={tour.image} alt={tour.id} />
                  <footer>
                    <div className="tour-info">
                      <h4>{tour.name}</h4>
                      <h4 className="tour-price">${tour.price}</h4>
                    </div>
                    <p>{tour.info}</p>
                    <button className="delete-btn">Remove</button>
                  </footer>
                </article>
                ;
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
