import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Venice"
          text="Discover the magic of Venice, Italy—where canals, history, and romance come alive. Glide through the Grand Canal, visit St. Mark’s Basilica, and cross the iconic Rialto Bridge. Stroll through charming alleys, savor authentic Italian cuisine, and enjoy stunning views from St. Mark’s Square. Take a Vaporetto to Burano’s colorful houses or Murano’s glass-making workshops. Venice offers an unforgettable journey through timeless beauty and rich culture."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Trip;
