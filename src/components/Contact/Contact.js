import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { Button, Input, message } from "antd";
import { sendEmail } from "../../api/api";

const { TextArea } = Input;

function Contact() {
    // encontrar la forma de resetear el form (el Form tiene un "resetForm() method")
    const [messageApi, contextHolder] = message.useMessage();

    let [emailMessage, setEmailMessage] = useState({
        name: "",
        email: "",
        message: "",
    });

    const showNotification = (response) => {
        let { message, error, loading } = response;
        messageApi.open({
            key: "updatable",
            type: error ? "error" : loading ? "loading" : "success",
            content: message,
            className: styles.notification,
        });
    };

    const handleChange = (e) => {
        setEmailMessage({ ...emailMessage, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        showNotification({ message: "loading", loading: "loading" });
        showNotification(await sendEmail(emailMessage));
        setEmailMessage({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className={styles.contactUs}>
            {contextHolder}
            <div className={styles.corpse}>
                <h1>... or contact ME!</h1>
                <p>
                    My name is Emiliano Pellegrino, im currently living in
                    Argentina and im a full stack developer. Check out my
                    Linkedin{" "}
                    <a href="https://www.linkedin.com/in/emipellegrino1/">
                        profile
                    </a>
                    .
                </p>
                <p>
                    This project was made for learning purposes. If you liked
                    it, and you want to send me a message or make contact with
                    me, feel free to do it submitting this form or sending me a
                    private message on any of my social media linked below
                    (footer).
                </p>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <div className={styles.contactForm}>
                        <div className={styles.userData}>
                            <Input
                                name="name"
                                className={styles.ml20}
                                placeholder="Your name"
                                allowClear
                                onChange={handleChange}
                                value={emailMessage.name}
                                required
                            />
                            <Input
                                name="email"
                                placeholder="Your email"
                                allowClear
                                onChange={handleChange}
                                value={emailMessage.email}
                                required
                            />
                        </div>
                        <TextArea
                            name="message"
                            onChange={handleChange}
                            placeholder="Write a message"
                            allowClear
                            className={styles.mt20}
                            value={emailMessage.message}
                            required={true}
                            style={{ resize: "none" }}
                        />
                    </div>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.submitBtn}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
