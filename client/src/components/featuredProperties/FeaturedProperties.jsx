// import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  //const {data,loading,error,reFetch}=useFetch("");
  const photos=["","","",""];
  const loading="";
  return (
    
    <div className="fp">
      {loading ? ("loading") : (<> {photos.map(item=>(<div className="fpItem" key={item._id}>
        <img
          src={item}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Title</span>
        <span className="fpCity">desc</span>
        <span className="fpPrice">Starting from $100</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>
      }</div>))}</>)}
    </div>
  );
};

export default FeaturedProperties;
