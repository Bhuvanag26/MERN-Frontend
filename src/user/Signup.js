import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import { motion } from "framer-motion";

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: { type: 'spring' , delay:0.5}

  }
}

const buttonVariants = {
  hover : {
    scale: 1.1,
    color: "rgb(255, 255, 0)",
     textShadow:'0px 0px 8px #ff1a1a' , 
     boxShadow:"0px 0px 8px rgb(255, 26, 26)",
     transition: {
         duration: 0.3,
         yoyo:Infinity

     }
  }

}

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <motion.form variants={nextVariants} initial="hidden" animate="visible">
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <motion.button onClick={onSubmit} 
                        variants={buttonVariants}
                        animate="visible"
                        whileHover="hover"
                        className="btn btn-success btn-block">Submit
                        </motion.button>
          </motion.form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
      return(
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
      <div className="alert alert-success"
      style={{display: success ? "" : "none"}}
      >
      New account was created successfully.Please
      <Link to="/signin">Login Here</Link>
      </div>
      </div>
      </div>
      );
  };
  const errorMessage = () => {
    return(
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
    <div className="alert alert-danger"
    style={{display: error ? "" : "none"}}
    >
    {error}
    </div>
    </div>
    </div>
    );
  }

  return (
    <Base title="Sign up page" description="A page for user to sign up!">
        {successMessage()}
        {errorMessage()}
      {signUpForm()}
      <p className="text-light text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
// className="btn btn-success btn-block"