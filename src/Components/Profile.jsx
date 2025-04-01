import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({title}) => {
  return (
    <>
    <h5 className='bg-primary text-center p-2 rounded text-light'>{title}</h5>
    <div className="row" style={{display:'flex', flexDirection:"column"}}>
      <div className="col-md-6 mb-3">
        <img src="/assets/img/no-user.png" className='border border-primary rounded' height={194.5} alt="" />
      </div>
      <div className="col-md-6 mb-3">
        <table className='table table-bordered table-striped table-hover'>
          <tbody>
            <tr>
              <th>Name</th>
              <td>SanyoGupta</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>Sanyog@$&0987</td>
            </tr>
            <tr>
              <th>Email-id</th>
              <td>sanyoggupta232@gmail.com</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>SuperUser</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Link to="/update-profile" className='btn btn-success w-100'>Update Profile</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Profile;
