import { MdOutlineDoneOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const MembershipCards = ({ p }) => {
  console.log(Object.keys(p).join(","));
  const { type, img, price, features } = p;
  return (
    <div className="w-full md:w-80 flex flex-col justify-center items-center space-y-5 mt-10 md:mt-4">
      <h2 className="text-3xl font-bold">{type}</h2>
      <img className="w-32" src={img} alt="" />
      <h2 className="text-2xl">
        ${price} <span className="text-gray-700">/month</span>
      </h2>
      <div>
        {features.map((i) => (
          <p key={i}>
            {" "}
            <MdOutlineDoneOutline className="inline fill-green-600" /> {i}
          </p>
        ))}
      </div>
      <Link className="btn bg-slate-800 font-semibold text-white btn-block hover:text-black">
        Buy Plan
      </Link>
    </div>
  );
};

export default MembershipCards;