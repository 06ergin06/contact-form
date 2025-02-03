export default function Home() {
  return (
    <div className="bg-white center flex-col w-6/12">
      <h2>Contact Us</h2>
      <div className="center gap-4">
        <div className="center flex-col">
          <p>First Name</p>
          <input type="text" className="input" />
        </div>
        <div className="center flex-col  ">
          <p>Last Name</p>
          <input type="text" className="input" />
        </div>
      </div>
      <div>
        <p>Email Address</p>
        <input type="email" className="input" />
      </div>
      <form>
        <p>Query Type</p>
        <input type="radio" id="general" name="query" value={"general"} className="input" />
        <label htmlFor="general">General Enquiry</label>
        <input type="radio" id="sup" name="query" value={"sup"} className="input" />
        <label htmlFor="sup">Support Request</label>
      </form>
      <div>
        <p>Message</p>
        <input type="text" className="input" />
      </div>
      <div>
        <input type="checkbox" name="acpt" id="acpt" />
        <label htmlFor="acpt">I consent to being contacted by the team</label>
      </div>
      <input type="submit" value="Submit" />
    </div>
  );
}
