import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./Login.module.scss";
import logo from "../../assets/images/logo-footprints-2.png";
import { login } from "../../api/api";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { sessionLogin } from "../../features/sessionSlice";

function Login() {
    // init settings and hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [error, setError] = useState(null);

    const handleSubmit = async (values) => {
        try {
            let state = await login(values);
            if (state.status === "Success") {
                dispatch(sessionLogin({ logged: true, data: state.data }));
                navigate("/");
            }
        } catch (error) {
            setError("Invalid username or password");
        }
    };

    return (
        <div className={styles.login}>
            <Form
                name={styles.loginForm}
                className={styles.loginForm}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSubmit}
            >
                <img src={logo} alt="" />
                {error && <p>{error}</p>}
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className={styles.siteFormItemIcon} />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input.Password
                        prefix={
                            <LockOutlined className={styles.siteFormItemIcon} />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link className={styles.loginFormForgot} to="/about">
                        Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.loginFormButton}
                    >
                        Log in
                    </Button>
                    Or <Link to={"/about"}>register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Login;
