// package imports
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Local imports
import { QUERY_USER } from "../utils/queries.js";

// MUI imports
import Typography from "@mui/material/Typography";

function DonateHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className='container my-1'>
        <Link to='/'>← Back to Products</Link>

        {user ? (
          <>
            <Typography variant='h2'>
              Order History for {user.firstName} {user.lastName}
            </Typography>
            {user.orders.map((order) => (
              <div key={order._id} className='my-2'>
                <Typography variant='h3'>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </Typography>
                <div className='flex-row'>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className='card px-1 py-1'>
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default DonateHistory;
