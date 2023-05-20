import { useEffect } from "react";


const Blog = () => {
    useEffect(() => {
        document.title = 'Toy KOi | Blogs'
    }, [])
    return (
        <div className="mx-10">
            <div className="mt-10">
                <h1 className="text-4xl font-bold">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="text-2xl ml-10">Refresh token: refresh token just helps revalidate a user without them having to reenter their login credentials multiple times.</p>
                <p className="text-2xl ml-10">acces token: access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. </p>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-bold">2.Compare SQL and NoSQL databases?</h1>
                <p className="text-2xl ml-10">
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-bold">3.What is express js? What is Nest JS ?</h1>
                <p className="text-2xl ml-10">
                    express js: Express is a node js web application framework that provides broad features for building web and mobile applications.
                </p>
                <p className="text-2xl ml-10">
                    nest js: Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js
                </p>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-bold">What is MongoDB aggregate and how does it work</h1>
                <p className="text-2xl ml-10">
                    mongodb is a way of processing a large number of documents in a collection by means of passing them through different stages.
                </p>
            </div>

        </div>
    );
};

export default Blog;