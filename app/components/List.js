import { ethers } from "ethers"

function List({ toggleCreate, fee, provider, factory }) {

  async function listHandler(form) {
    const name = form.get("name")
    const ticker = form.get("ticker")
  }

  return (
    <div className="list">
      <h2>list a new token</h2>

      <div className="list_description">
        <p>fee: {ethers.formatUnits(fee,18)} ETH </p>
      </div>

      <form action={listHandler}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="ticker" placeholder="ticker" />
        <input type="submit" value="[ list ]"/>        
      </form>

      <button onClick={toggleCreate} className="btn--fancy">[ cancel ]</button>
    </div>
  );
}

export default List;