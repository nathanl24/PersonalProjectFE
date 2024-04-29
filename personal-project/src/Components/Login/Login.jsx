import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/Home");
    };

        return (
            <div>

                <h2 className="title" style={{ textAlign: "center" }}>Welcome to my personal project. Submit your details to enter.</h2>
                <div class="d-flex justify-content-center" style={{ padding: "10px" }}>
                    <div class="card border-dark mb-3" style={{ width: "17%" }}>

                        <form className="container" onSubmit={handleSubmit}>
                            <div className="context">
                                <div className="row">
                                    <div className="col">
                                        <div label htmlFor="name" className="form-label">
                                            <h3>Submit your details</h3>

                                        </div>
                                        <input placeholder="First Name" />
                                        <br />
                                        <br />
                                        <input placeholder="Last Name" />
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <button type="submit" className="btn btn-primary"
                                    style={{ textAlign: "center" }}
                                    onSubmit={() => {

                                        navigate("/Home");

                                    }}
                                >
                                    Enter Project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        );
    }

export default Login;