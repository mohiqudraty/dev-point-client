import { useEffect, useState } from "react";
import MembershipCards from "./MembershipCards";

const Membership = () => {
  const [plan, setPlan] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/membership")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlan(data);
      });
  }, []);
  return (
    <section className="grid  md:grid-cols-2 lg:grid-cols-3  px-3 mt-10 ">
      {plan?.map((p) => (
        <MembershipCards key={p.type} p={p}></MembershipCards>
      ))}
    </section>
  );
};

export default Membership;
