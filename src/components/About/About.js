import React from "react";
import styles from "./About.module.scss";

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.description}>
                <h1>About this website</h1>
                <br />
                <p>
                    This project was made only for learning porpouses. As a
                    developer student, i tried to build a single page
                    application where any people can navigate through, but only
                    ones with a registered username must be able to interact
                    with the page, selecting products and build a cart.
                </p>
                <br />
                <p>
                    "FOOTPRINTS" is a fake company which sells sport shoes. I
                    had to build my own database of products just in order to
                    work with a server which provides the datasource to the
                    client-side application.
                </p>
                <br />
                <p>
                    Registration of new users is not available. In order to test
                    this website, you can try logging in with some of the
                    registered users:
                </p>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <th>Usernames</th>
                            <th>Passwords</th>
                        </tr>

                        <tr>
                            <td>user@gmail.com</td>
                            <td>password123</td>
                        </tr>
                        <tr>
                            <td>tester@gmail.com</td>
                            <td>pass123</td>
                        </tr>
                        <tr>
                            <td>admin@gmail.com</td>
                            <td>123password</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <p>
                    The main frameworks and libraries I used to develop this
                    website are the following:
                </p>
                <br />
                <ol>
                    <li>React, using create-react-app</li>
                    <li>Redux, to manage global states</li>
                    <li>React-router-dom, to implement routing</li>
                    <li>Express, as back-end server</li>
                    <li>Express-session, to set authentication cookies</li>
                    <li>
                        bcryptjs and uuid to encrypt passwords and generate
                        uniques ids
                    </li>
                    <li>MongoDB and mongoose, as database framework</li>
                    <li>Sass and css modules for styling</li>
                    <li>Ant-Design, a useful component library</li>
                </ol>

                <br />
                <p>
                    In order to upgrade this application, i should add some new
                    features like:
                </p>
                <br />
                <ol>
                    <li>Create a sign up form (add google authentication)</li>
                    <li>Add a "forgot-password" functionality</li>
                    <li>Add a menu where the user can manage his profile</li>
                    <li>Add payment methods configuration</li>
                    <li>Enable users to save products in favourites</li>
                    <li>
                        Make the website looks better (I apologize for the
                        current styles)
                    </li>
                    <li>Upgrades based on user experience</li>
                </ol>
                <br />
                <p>
                    You can find the updated code of this project checking out
                    my <a href="https://github.com/Aonik10">github profile</a>:
                </p>
                <ul>
                    <li>
                        <a href="https://github.com/Aonik10/shoes-ecommerce">
                            React Application (webpage)
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Aonik10/shoes-ecommerce-server">
                            Express Server (Back-end)
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
