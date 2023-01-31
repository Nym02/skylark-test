import React from "react";
import Button from "../Button";

const Service = ({ service }) => {
  return (
    <div className="skylark-service-items">
      {service &&
        service.map((item) => {
          return (
            <>
              <div
                className={`skylark-service-item ${
                  item?.id === 1 && "service1"
                } ${item?.id === 2 && "service2"} ${
                  item?.id === 3 && "service3"
                }`}
              >
                <div className="skylark-service-item-icon">
                    <img src={item?.icon} alt="" />
                </div>
                <div className="skylark-service-item-title">
                  <h1 className="skylark-service-item-title-heading">
                    {item.title}
                  </h1>
                </div>
                <div className="skylark-service-item-mini-service">
                    <ul>
                    {
                        item?.serviceArr && item?.serviceArr.map((serv) => {
                            return <>
                                <li>{serv}</li>
                            </>
                        })
                    }
                    </ul>
                    
                </div>
                <div className="skylark-service-item-button">
                  <Button text={"learn more"} className={"btn-primary"} />
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Service;
