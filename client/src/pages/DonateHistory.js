import React from "react";

// Local imports
import { QUERY_USER } from "../utils/queries.js";
import catGif from "../assets/images/donate-history-cats.gif";

// External imports
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

function DonateHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div id='donate-history-body'>
        <Link to='/donate'>← Donation Options</Link>

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
        ) : (
          <div id='donate-error'>
            <img src={catGif} alt='alternating cats' id='cat-gif'></img>
            <Typography variant='h6'>
              This page is intentionally empty.
            </Typography>
            <Typography variant='h6'>
              You do not have a donation history.
            </Typography>
          </div>
        )}
      </div>
    </>
  );
}

export default DonateHistory;
