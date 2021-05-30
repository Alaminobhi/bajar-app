import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../lib/auth";

const Header = () => {
  const { signOut, user } = useAuth();

  return (
    <div className='py-3 border-bottom bg-light '>
      <div className='container d-flex justify-content-between align-items-center'>
        <Link className='h5 text-dark text-decoration-none' to='/'>
          <strong className='text-primary'>Bajar</strong>
        </Link>
        <div className='d-flex align-items-center'>
        <Link className='m-1 list-group-item' to ='shop'>Shop</Link>
        <Link className='m-1 list-group-item' to ='order'>Order</Link>
        {user ?(<>
            <span>{user.name}</span>
            <button
              onClick={signOut}
              className='btn btn-sm ms-2 btn-outline-dark'
            >
              Logout
            </button>
        </>)
        :
        <Link as='li' className='list-group-item' to='/login'>
        Login
        </Link>
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
