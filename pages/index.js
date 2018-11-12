import Link from 'next/link';

/*
  This is the index page.
  It should eventually redirect useds based on their cookies which will be checked against our db login records.
  Users who are not logged in should be prompted to login or sign up.
  All users who are logged in will be sent to defaultView.
  The Link buttons below are for testing purposes.
*/

const index = () => (
  <div>
    <p>This is the Index Page</p>
    <div>
      <Link href="genericView"> 
        <input type="submit" value="Sim Logged In Acc"/>
      </Link>
      <a>{`     `}</a>
      <Link href="login">
        <input type="submit" value="Login Page"/>
      </Link>
    </div>
  </div>
)
 export default index;