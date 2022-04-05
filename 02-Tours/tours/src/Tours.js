import { Info, SettingsBackupRestoreSharp } from "@mui/icons-material";
import React, { useState } from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

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
            //<Tour key={tour.id} {...tour}></Tour>;
            return (
              <>
                <article className="single-tour">
                  <img src={tour.image} alt={tour.id} />
                  <footer>
                    <div className="tour-info">
                      <h4>{tour.name}</h4>
                      <h4 className="tour-price">${tour.price}</h4>
                    </div>
                    <p>
                      {readMore
                        ? tour.info
                        : `${tour.info.substring(0, 200)}...`}
                      <button
                        onClick={() => {
                          if (readMore) {
                            setReadMore(false);
                          } else {
                            setReadMore(true);
                          }
                        }}
                      >
                        {readMore ? "Show Less" : "Read More"}
                      </button>
                    </p>
                    <button
                      className="delete-btn"
                      onClick={() => removeTour(tour.id)}
                    >
                      Remove
                    </button>
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
