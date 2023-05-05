import React from "react";
import styles from "./About.module.scss";

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.description}>
                <h1>About this website</h1>
                <br />
                <p>
                    This project was created solely for learning purposes. As a
                    developer student, I attempted to build a single-page
                    application that anyone can navigate through. However, only
                    individuals with a registered username can interact with the
                    page by selecting products and adding them to their cart
                </p>
                <br />
                <p>
                    The application is based on a fictional company called
                    "Footprints" that sells sport shoes. I had to create my own
                    product database and a server to provide data to the
                    client-side application.
                </p>
                <br />
                <p>
                    Currently, new user registration is not available. To test
                    the website, you can try logging in with one of the
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
                    To upgrade this application, I'll be adding the following
                    new features:
                </p>
                <br />
                <ol>
                    <li>
                        Implement a sign-up form, with the option for users to
                        sign up using Google authentication.
                    </li>
                    <li>
                        Add a "forgot password" functionality to allow users to
                        reset their passwords if they forget them.
                    </li>
                    <li>
                        Include a menu where users can manage their profiles,
                        such as updating their personal information or viewing
                        their order history.
                    </li>
                    <li>
                        Add configuration options for payment methods to allow
                        for a smooth checkout process.
                    </li>
                    <li>
                        Enable users to save products to their favorites list
                        for easy access in the future.
                    </li>
                    <li>
                        Improve the website's visual appearance by enhancing the
                        current styles.
                    </li>
                    <li>Upgrades in general, based on user experience</li>
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
