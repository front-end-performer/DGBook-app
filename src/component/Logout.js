import React from "react";
import { NotificationManager } from "react-notifications";
import { auth } from "../fire-base";

class Logout extends React.Component {
    logOut = () => {
        auth
            .signOut()
            .then(() => {
                localStorage.removeItem("user");
                NotificationManager.success("You are logged out", "Success");
            })
            .catch(error => {
                // An error happened.
                console.log(error.message);
                console.log(error.code);
                NotificationManager.error(
                    "Please try again",
                    "Something wrong happened"
                );
            });
    };
    render() {
        return (
            <>
                <h1>You are logged in</h1>
                <button onClick={this.logOut}>Logout</button>
            </>
        );
    }
}

export default Logout;
