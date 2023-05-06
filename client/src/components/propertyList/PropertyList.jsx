import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import books from "./../assets/scolaireImages/ips.jpg";
import encadrement from "./../assets/scolaireImages/ipa.jpg";
import group from "./../assets/scolaireImages/ipsss.jpg";

const PropertyList = () => {
  const {data,loading,error,reFetch}=useFetch("");
 
  
  const images=[
    books,encadrement,group
  ];
  return (
    <div className="pList">
      {loading ? ("loading"):(<>{data &&
      images.map((img,i)=>(<div className="pListItem" key={i}> 
        <img
          src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>type</h1>
          <h2>count type</h2>
        </div>
      </div>))
      }</>)}
    </div>
  );
};

export default PropertyList;
