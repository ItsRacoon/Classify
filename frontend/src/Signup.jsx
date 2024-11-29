import react from "react";

const Signup = () =>{
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <form>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="form-control rounded-0"
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              SignUp
            </button>
            <p>Already have an account</p>
            <button type="submit" className="btn bg-white text-black btn-success w-100 rounded-0">
              Login
            </button>
          </form>
        </div>
      </div>
      
    )
}
export default Signup;