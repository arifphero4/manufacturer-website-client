import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PurchaseForm from "./PurchaseForm";

const Purchase = () => {
  const { id } = useParams();

  const [tool, setTool] = useState({});

  useEffect(() => {
    fetch(`https://floating-brook-95654.herokuapp.com/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);

  return (
    <section>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="card bg-base-100 w-cover shadow-xl">
            <figure>
              <img src={tool?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tool?.name}</h2>
              <p>{tool?.description} </p>
              <h3 className="font-bold text-xl">
                Price: <span>${tool?.price} </span>
              </h3>
              <div className="card-actions justify-between">
                <div className="badge badge-outline">
                  Available: <span> {tool?.availableQuantity}</span>
                  <span className="text-gray-400">/piece</span>
                </div>
                <div className="badge badge-outline">
                  Minimum Order: <span> {tool?.orderQuantity}</span>
                  <span className="text-gray-400">/piece</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* order form  */}
        <div>
          <PurchaseForm tool={tool}></PurchaseForm>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
