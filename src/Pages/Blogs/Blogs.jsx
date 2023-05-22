
const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-semibold mb-8'>Four given Question & Answer</h2>
            <div className="grid md:grid-cols-2 gap-10 my-6 pb-10">
                <div>
                    <h4 className="text-xl font-medium mb-2">01. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                    <p>Access tokens are temporary credentials issued following successful authentication that enable users to gain entry to specific resources. Contrastingly, renewal tokens are enduring tokens employed to procure fresh authorization tokens upon expiry of the originals. Authorization tokens are securely stored on the client-side, commonly in cache or localized storage, while renewal tokens, being more delicate, necessitate a more fortified approach such as HTTP-only cookies or encrypted repositories. Adhering to these practices upholds the security and integrity of authentication and authorization workflows in interactions between clients and servers.</p>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">02. Compare SQL and NoSQL databases?</h4>
                    <p>SQL and NoSQL databases contrast in their data models, query languages, scalability options, and schema characteristics. SQL databases adhere to a structured and inflexible relational model, employ SQL for data manipulation, and focus on vertical scalability. In contrast, NoSQL databases offer adaptable data models, utilize diverse query languages, excel in horizontal scalability, and often embrace a schema-less or flexible schema approach. The selection between SQL and NoSQL hinges on the particular demands of the application, including data structure, scalability requirements, and query capabilities.</p>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">03. What is express js? What is Nest JS?</h4>
                    <p>Express.js is a lightweight web application framework for Node.js, known for its simplicity and flexibility. It simplifies tasks like routing and handling HTTP requests, making it popular among developers. NestJS is a TypeScript-based framework for building scalable server-side applications with Node.js. It draws inspiration from Angulars architecture and provides a structured and extensible approach. NestJS is suitable for projects of any size, offering the benefits of TypeScript and the flexibility of Express.js.</p>
                </div>
                <div>
                    <h4 className="text-xl font-medium mb-2">04. What is MongoDB aggregate and how does it work?</h4>
                    <p>
                        Aggregate function of MongoDB is a robust feature that empowers data processing and analysis through the utilization of the aggregation framework. It facilitates intricate data transformations, grouping, filtering, and other operations on MongoDB collections. By employing an array of stages, each signifying a distinct operation, data is systematically processed. This versatile and efficient framework finds extensive application in generating reports, conducting analytics, and extracting valuable insights from MongoDB data.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;