import React from "react";
import styles from "./About.module.scss";

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.description}>
                <h1>About this website</h1>
                <br />
                <p>
                    This project was made only for learning porpouse. As a
                    developer student, i tried to build a single page
                    application where any people can navigate through, but only
                    ones with a registered username could interact with the page
                    to build a cart picking up products.
                </p>
                <br />
                <p>
                    "FOOTPRINTS" is a fake company which sells sport shoes. I
                    had to build my own database of products just to be able to
                    work with a server which provides the datasource to the
                    client-side application.
                </p>
                <br />
                <p>
                    In order to test this website, you can try logging in with
                    some of the registered users:
                </p>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <th>Usernames</th>
                            <th>Passwords</th>
                        </tr>

                        <tr>
                            <td>emp10999@gmail.com</td>
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
                    The main frameworks and libraries used to develop this
                    website are the followings:
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
                    <li>Ant-Design, an useful component library</li>
                </ol>

                <br />
                <p>
                    In my way developing this app, i found many resources to
                    improve the website's user experience. As an example, i
                    realize that there exists some libraries of react components
                    ready to use, like boostrap or ant-design which i used in
                    some components of this application.
                </p>
                <br />
                <p>
                    In order to upgrade this application, i should add some new
                    features like:
                </p>
                <br />
                <ol>
                    <li>
                        Create a sign up form (connected to google auth if
                        posible)
                    </li>
                    <li>Add a menu where the user can manage his profile</li>
                    <li>Add payment methods configuration</li>
                    <li>Make the site fully responsive</li>
                    <li>
                        Make the website looks better (I apologize for the
                        current styles)
                    </li>
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
