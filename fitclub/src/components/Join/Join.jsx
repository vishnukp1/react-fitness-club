import "./Join.css";

function Join() {
  return (
    <div className="Jion">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> ABOUT US</span>
        </div>

        <div>
          <span>CONTANT US</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email adress"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
