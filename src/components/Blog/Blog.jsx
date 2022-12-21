import React from "react";
import "./Blog.css";

const Blog = () => {
    return (
        <section className="box__wrapper ">
            <h1 className="text-center mb-5">Recent Blogs</h1>
            <div className="box container">
                <div className="card">
                    <div className="content">
                        <h2 className="text-center mb-4">What is CORS</h2>
                        <p>
                            CORS stands for Cross-Origin Resource Sharing. It
                            refers to the situations when a frontend running in
                            a browser has JavaScript code that communicates with
                            a backend, and the backend is in a different
                            "origin" than the frontend.
                            <div className="space"></div>
                            For security reasons, browsers restrict cross-origin
                            HTTP requests initiated from scripts. For example,
                            XMLHttpRequest and the Fetch API follow the
                            same-origin policy. This means that a web
                            application using those APIs can only request
                            resources from the same origin the application was
                            loaded from unless the response from other origins
                            includes the right CORS headers.
                        </p>
                    </div>
                </div>
                <div className="card">
                    {/* <img src={img2} alt="" /> */}
                    <div className="content">
                        <h3 className="mb-4">Why Firebase?</h3>
                        <ul>
                            <li>For user Authentication</li>
                            <li>To host websites</li>
                            <li>
                                It enables cloud messaging to send instantly
                            </li>
                            <li>To create detailed error report</li>
                            <li>To save pictures, audio, video</li>
                        </ul>
                        <div className="space"></div>
                        <h3 className="mb-4">
                            Other options to implement authentication:
                        </h3>
                        <ul>
                            <li>Okta</li>
                            <li>Auth0</li>
                            <li>Amazon Cognito</li>
                            <li>Supabase</li>
                            <li>OneLogin</li>
                            <li>Keycloak</li>
                            <li>Frontegg</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    {/* <img
                        src={img3}
                        alt=""
                        data-aos="fade-left"
                        data-aos-delay="500"
                    /> */}
                    <div className="content">
                        <h1>How does the private route work?</h1>
                        <p>
                            The react private route component renders child
                            components (children) if the user is logged in. If
                            not logged in the user is redirected to the /login
                            page with the return url passed in the location
                            state property.
                            <p className="space"></p>
                            It uses useLocation() hook to get location and
                            useNavigate hook to navigate to expected page.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <h1>What is node?</h1>
                        <p>
                            Node.js is an open-source, cross-platform JavaScript
                            runtime environment and library for running web
                            applications outside the client's browser. Ryan Dahl
                            developed it in 2009. Developers use Node.js to
                            create server-side web applications, and it is
                            perfect for data-intensive applications since it
                            uses an asynchronous, event-driven model.
                        </p>
                        <div className="space"></div>
                        <h1>How does node work?</h1>
                        <p>
                            Node.js accepts the request from the clients and
                            sends the response, while working with the request
                            node.js handles them with a single thread. To
                            operate I/O operations or requests node.js use the
                            concept of threads. Thread is a sequence of
                            instructions that the server needs to perform. It
                            runs parallel on the server to provide the
                            information to multiple clients. Node.js is an event
                            loop single-threaded language. It can handle
                            concurrent requests with a single thread without
                            blocking it for one request.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
