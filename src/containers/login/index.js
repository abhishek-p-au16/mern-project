const login =()=>{return(<div className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
id="template-bg-3" >
  <div class="card mb-5 p-5  bg-dark bg-gradient text-white col-md-4">
   <div class="card-header text-center">
            <h3>Login</h3>
        </div>
   <div class="card-body mt-3">
<form>
  <div className="mb-3 row">
    <label htmlfor="exampleInputEmail" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary mt-3 w-100 p-2">Login</button>
</form>
<div class="card-footer p-3">
            <div class="d-flex justify-content-center">
                <div class="text-primary">If you are not registered,
                    signup.</div>
            </div>
        </div>

</div>
</div>
</div>)}
export default login