import eight from '../assets/svg/projects/eight.svg'
import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'
import ten from '../assets/svg/projects/ten.svg'
import one from '../assets/png/projects/one.jpeg'
import two from '../assets/png/projects/two.png'
import three from '../assets/png/projects/three.png'
import four from '../assets/png/projects/four.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'E-Commerce-Store-with-Stripe-API',
        projectDesc: 'Built an e-commerce store with cart and payment functionalities. Integrated the Stripe API into this application to accept payments from users for the products added to their cart. Used the Fake Store API that provides data for e-commerce websites. Also used it to fetch and display product categories and products themselves in the store. Used the Express framework on Node.js to develop the server API. After implementing the front-end components and adding payment functionality, set up a server to process those payments. The finalized product fetches the product data from the Fake Store API, allowing users to add products to the cart and make Stripe payments via the Node.js server.',
        tags: ['React, Node.js, Stripe API'],
        code: 'https://github.com/farrukhras/E-Commerce-Store-with-Stripe-API',
        demo: 'https://e-commerce-store-with-stripe-api-integration.vercel.app/',
        image: two
    },
    {
        id: 2,
        projectName: 'Trello Clone with Firebase',
        projectDesc: 'Using the react-beautiful-dnd library, built a Trello Clone with drag-and-drop functionality for tasks and columns. Integrate Firebase into the application to perform CRUD operations on tasks. Firstly, create a simple board to display the tasks and columns on the screen. Then, added drag and drop functionality to move the columns horizontally. Next, create task cards to represent a task in a column, with the functionality to edit or delete a task. Integrated Firebase to fetch and store the tasks and columns data in a database.',
        tags: ['React', 'Redux', 'Firebase'],
        code: 'https://github.com/farrukhras/Trello-Clone-with-Redux-and-Firebase',
        demo: 'https://trello-clone-with-redux-and-firebase.vercel.app/',
        image: three
    },
    {
        id: 3,
        projectName: 'Image Sharing App',
        projectDesc: 'The project is an image-sharing application with login and registers functionalities. It allows users to upload and share image posts from their accounts, follow and unfollow other users, and engage in real-time chat with different users. The back end of the application is built using the Express framework for Node.js. It provides a robust API that interacts with the MongoDB database for fetching and storing data. User authentication, image uploads, and data retrieval are handled through the back-end API. On the front end, the application utilizes React functional components to create a user-friendly interface. The login/register and image-sharing functionalities are implemented to allow seamless interaction with the application. The data is fetched from the MongoDB database via the Node.js server and displayed in the React components. Additionally, Socket.IO is utilized to enable real-time communication capabilities within the application. Users can engage in instant messaging and send messages to other online users using Socket.IO reliable and efficient messaging system.',
        tags: ['MongoDB, Express, React, Node.js'],
        code: 'https://github.com/farrukhras/Image-Sharing-App',
        demo: 'https://github.com/farrukhras/Image-Sharing-App',
        image: four
    },
    {
        id: 4,
        projectName: '3D Tic Tac Toe Game',
        projectDesc: 'Used Three.js and React Three Fiber to build a 3D Tic Tac Toe game using pre-build components to render 3D shapes. Created a simple scene by setting up the camera, lights, and environment. Then, created a 3D 3x3 grid, along with sphere and cube shapes to display on the scene. Then added, animations to these shapes by altering their rotation properties. Styled the components by changing their color and dimensions. The final version of the game allows users to play the game between two different 3D shapes, win or tie a game and also restart the game at any point.',
        tags: ['React', 'Three.js', 'React Three Fiber'],
        code: 'https://github.com/farrukhras/3D-Tic-Tac-Toe-Game',
        demo: 'https://3-d-tic-tac-toe-game.vercel.app/',
        image: one
    },
    {
        id: 5,
        projectName: 'PianoTunesAR',
        projectDesc: 'Use AR to project your favorite digitally-recorded piano video song from YouTube over your piano to learn by following along.',
        tags: ['Unity', 'EasyAR'],
        code: 'https://github.com/farrukhras/PianoTunesAR',
        demo: 'https://github.com/farrukhras/PianoTunesAR',
        image: seven
    },
    {
        id: 6,
        projectName: 'SafarNama',
        projectDesc: 'Created an educational Augmented Reality based virtual touring application to showcase the heritage and culture of Pakistan, using 3D exhibits, gamification, and periodic quizzes to improve spatial, visual, and story-based learning in children. Conducted user research through focus group discussions, 20+ interviews, surveys, and both low and high-fidelity prototyping.',
        tags: ['Unity'],
        code: 'https://github.com/farrukhras/SafarNama',
        demo: 'https://github.com/farrukhras/SafarNama',
        image: six
    },
    {
        id: 7,
        projectName: 'Co-Curricular Activities Management System LUMS',
        projectDesc: 'Engineered a web management solution for the Co-Curricular Activities Office administration at the Lahore University of Management Sciences, incorporating a completely customizable Task Manager with two types of tasks, a Form Maker with logical components, advanced Admin settings, a Request Panel for monitoring submitted requests, a Form Viewer, and a Society dashboard for submitting forms, all the components being highly interconnected through certain features.',
        tags: ['MongoDB, Express, React, Node.js'],
        code: 'https://github.com/farrukhras/CMS',
        demo: 'https://github.com/farrukhras/CMS',
        image: eight
    },
    {
        id: 8,
        projectName: 'Programmer Skill Querying Application',
        projectDesc: 'In this project, we will build a programmer skill querying application using MongoDB, Golang, and React. The application allows users to add a new programmer, delete a programmer, and search for programmers based on a certain skill. The back-end of the application is developed using the Gin framework for Golang. Gin is a web framework that provides a fast HTTP router and essential middleware for building efficient web applications and APIs. It interacts with the MongoDB database to fetch and store data, handling the create, delete, and search operations for programmers. On the front-end, React.js is used to implement the user interface and the required components. The front-end components communicate with the Golang server to fetch data from MongoDB and display it to the users. The create, delete, and search functionalities are seamlessly integrated into the user interface, providing a smooth user experience.',
        tags: ['MongoDB, Golang, React'],
        code: 'https://github.com/farrukhras/Programmer-Skill-Querying-Application',
        demo: 'https://github.com/farrukhras/Programmer-Skill-Querying-Application',
        image: ten
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/