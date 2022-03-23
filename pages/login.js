import React from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export default function Login() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
    authError,
    isIntialized,
    enableWeb3, isWeb3Enabled,
    Moralis
  } = useMoralis();

  const Web3Api = useMoralisWeb3Api();


  // const currentUser = Moralis.User.current();


  React.useEffect(() => {
    async function fetchWeb3() {
      await enableWeb3()
    }
    fetchWeb3();

},[enableWeb3])

  const fetchTransactions = async () => {
    // get mainnet transactions for the current user
    const transactions = await Web3Api.account.getTransactions();
    console.log(transactions);
  
    // get BSC transactions for a given address
    // with most recent transactions appearing first
    const options = {
      chain: "bsc",
      address: "0x3d6c0e79a1239df0039ec16Cc80f7A343b6C530e",
      order: "desc",
      from_block: "0",
    };
    const bscTransactions = await Web3Api.account.getTransactions(options);
    console.log(bscTransactions);
  };





const login = () => {
  authenticate()
}



  return (
    <div className="container">
      <div>
      {isAuthenticated ? (
        <button onClick={login} className="button button-login">
          Login
        </button> ) : (
        <button className="button button-logout">Logout</button>)}
      </div>
      <div>
        {isAuthenticating && <div>Authenticating</div> }
        {isAuthenticated && (<div>
          <div>Account: {account}</div>
          <button onClick={fetchTransactions} className="button">
            Test Functions
            </button>
          </div>)}
      </div>
      <style jsx>{`
        .container {
          width: 400px;
          height: 400px;
          margin: auto;
          background-color: aquamarine;
          border-radius: 6px;
          box-shadow: 5px 5px 10px #c8d0e7, -5px -5px 10px #ffffff;
          display: grid;
          box-sizing: border-box;
          grid-template-rows: repeat(1fr);
          padding: 9px;
          justify-items: center;
        }
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          whitespace: nowrap;
          fontsize: 12px;
          position: relative;
          padding: 0px 12px;
          margin: 0;
          width: 100px;
          height: 30px;
          transition: all 6ms easing;
        }
        .button.button-login {
          background: #1e293b;
          color: #ffffff;
        }
        .button.button-logout {
          color: #1e293b;
        }
      `}</style>
    </div>
  );
}
