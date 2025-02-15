const projectsData = [
  {
    title: "Portfolio Website",
    date: "2025",
    technologies: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
  ],
  
  description: [
    "Built a personal portfolio website using React to showcase projects, experience, and skills.",
    "Designed a responsive UI with HTML, CSS, and JavaScript for seamless navigation.",
    "Dynamically rendered content using React components and state management."
],

  repo: "https://github.com/mahmoudelnashar/Portfolio-Website"
},
        {
            title: "Graduation Project - Multi-Modal Emotion Recognition",
            date: "Spring 2024",
            technologies: [
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
            ],
            description: [
                "Developed a multi-modal emotion recognition deep learning model by integrating video and audio models through intermediate fusion, resulting in enhanced accuracy.",
                "Created a demo application for the model using prompt engineering with Llama3 as the LLM."
            ],
             repo: "https://github.com/mahmoudelnashar/Multi-modal-Emotion-Recognition"
        },
        {
            title: "Parallel Low/High Pass Filter",
            date: "Spring 2024",
            technologies: [
              { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
              { name: "Qt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" },
              { name: "OpenCV", icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" }, 
              { name: " OpenMP ", icon: null }, 
              { name: " MPI ", icon: null }
          ],

            description: [
                "Developed a C++ image processing application using Qt.",
                "Implemented low-pass and high-pass filtering with sequential, OpenMP, and MPI processing.",
                "Enabled dynamic filter configuration and real-time performance tracking.",
                "Integrated OpenCV for MPI-based parallel processing via scripting.",
                "Supported multiple image formats, including JPEG, PNG, and BMP."
            ],
            repo: "https://github.com/mahmoudelnashar/HPC-Project-Parallel-Image-Processing",
            documentation: "assets/projects/HPC.pdf"
        },
        {
            title: "Secure Communication Suite",
            date: "Spring 2024",
            technologies: [
              { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: " PyQt ", icon: null }
          ],
              description : [
              "Developed a secure communication suite with GUI between a client and server.",
              "Implemented key management for secure encryption and decryption.",
              "Integrated hashing techniques for data integrity and security.",
              "Designed an authentication mechanism to verify user identities.",
              "Implemented ciphering methods to protect data during transmission."
            ],
            documentation: "./assets/projects/Security.pdf"
          },
          {
            title: "NLP Next Word Predictor",
            date: "Spring 2024",
            technologies: [
              { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
              { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" }
          ],
            description: [
              "Built a machine learning application to predict the next word in a text sequence using CNNs, LSTMs, and GRUs."
            ]
          },
          {
            title: "Carpool Mobile App",
            date: "Fall 2023",
            description: [
                "Developed a Flutter mobile application for students to book and manage carpool rides.",
                "Built a Flutter web application for drivers to issue and manage rides.",
                "Enabled real-time synchronization between rider and driver applications using Firebase Firestore.",
                "Implemented university email verification to ensure a closed community for Ain Shams University students.",
                "Used local databases (Sqflite & Shared Preferences) for offline access to ride and profile details."
            ],
            technologies: [
              { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
              { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
              { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
              { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
              { name: "SQL", icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" } 
            ]          
          ,

            documentation: "./assets/projects/Carpool.pdf",
            video: "https://www.youtube.com/embed/sHWl_9njJxg"
        },
        {
          title: "Leaf Classification using Deep Learning",
          date: "Fall 2023",
          description: [
              "Implemented a leaf classification deep learning model using CNNs, experimenting with different scheduling techniques and optimizers to enhance the model’s accuracy."
          ],
          technologies: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
            { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
        ],
          documentation: "./assets/projects/DeepLearning.pdf"
      },
      
      {
        title: "Tiva-C Car Window Controller",
        date: "Spring 2023",
        description: [
            "Designed a power window control system using the Tiva C microcontroller and FreeRTOS, integrating DC motors, limit switches, push buttons, and a motor driver module.",
            "Implemented manual and one-touch auto open/close, window lock, and jam protection features for both driver and passenger windows.",
            "Utilized FreeRTOS data structures, including queues, semaphores, and mutex locks, to manage task priorities and ensure smooth operation.",
            "Developed tasks for driver and passenger control, limit detection, and automatic jam protection, with interrupts triggering real-time state changes.",
            "Handled edge cases such as simultaneous button presses and limit switch activation to maintain system reliability."
        ],
        technologies: [
          { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
          { name: " FreeRTOS ", icon: null }, 
          { name: " Embedded Systems ", icon:null}
      ],
              links: [
            { name: "C", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", link: "https://www.cprogramming.com/" }
        ],
        repo: "https://github.com/mahmoudelnashar/Car-Window-Embedded-Project",
        image: "assets/projects/Schematic.png"
    },

    {
      title: "2D Realtime-Multiplayer Driving Game",
      date: "Spring 2023",
      technologies: [
        { name: " Python ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: " AWS ", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: " Pygame ", icon: null }
    ],
          description: [
          "Used Pygame to build the client-side connection and built the server-side connection using Python.",
          "Implemented two multithreaded servers that allow parallel rooms where each 2-4 players can join a racing game.",
          "Disconnected players can rejoin into the last state.",
          "Created matchmaking, chat, as well as network failure handling features.",
          "Deployed both Python server instances on EC2 AWS for reliable access."
      ],
      repo: "https://github.com/mahmoudelnashar/Distributed-Car-Game",
      documentation: null
  },
  

    {
      title: "Tiva-C Calculator-Timer-Stopwatch",
      date: "Fall 2022",
      description: [
        "Developed a system using the Tiva C microcontroller with an LCD, keypad, buzzer, potentiometer, and push buttons to implement a calculator, timer, and stopwatch.",
        "The calculator supports floating point and negative numbers, with result reuse and automatic exit on pressing '='.",
        "The timer counts down from user-specified minutes and seconds, can be paused/resumed, and triggers a buzzer when time runs out.",
        "The stopwatch counts up, can be paused/resumed, reset, and exited using keypad inputs.",
        "Push buttons enable mode selection, triggering interrupts for seamless transitions between functionalities.",
      ],
      technologies: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: " Embedded Systems ", icon: null } // No universal icon available
    ],
          repo: "https://github.com/mahmoudelnashar/Embedded-Systems-Project",

    },
    {
    title: "Mars Rover Rock Picker",
    date: "Fall 2022",
    description: [
      "Developed an image processing project focusing on Mars rover navigation and surface exploration.",
      "Designed algorithms enabling the rover to navigate, avoid obstacles, and collect rock samples.",
      "Achieved over 85% traversal fidelity and 95% accurate mapping while successfully collecting at least 85% of encountered samples.",
    ],

      documentation: "./assets/projects/Rover.pdf",
      repo: "https://github.com/mahmoudelnashar/Computer-Vision-Mars-rover",
    technologies: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Jupyter Notebook",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        name: "OpenCV",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
  {
    title: "Charity Donations Website",
    date: "Fall 2022",
    technologies: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ],
    description: [
      "Developed a charity donation platform using React and JavaScript with a responsive UI.",
      "Implemented secure user authentication for login and donation management."
    ],
    documentation: "./assets/projects/Charity.pdf",
    repo:"https://github.com/ASUTeam/donation-website"
  },
  {
    title: "Searching Strategies Visualizer",
    date: "Spring 2022",
    technologies: [
      { name: " Python ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: " PyQt ", icon: null },
      { name: " Graphviz ", icon: null } 
  ],
      description: [
      "Developed an AI search visualization tool using Python, PyQt for the GUI, and Graphviz for graph rendering.",
      "Implemented various search strategies, including Breadth-First Search, Depth-First Search, Uniform Cost Search, Greedy Search, and A*.",
      "Provided an interactive interface for graph creation, algorithm selection, and real-time visualization of search paths."
    ],

        documentation:"./assets/projects/Searching.pdf",
        repo:"https://github.com/mahmoudelnashar/Artificial-Intelligence-Project",
    
  },
  {
    title: "Compiler's Tokenizer & Parser",
    date: "Spring 2022",
    technologies: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: " Tkinter ", icon: null } 
  ],
      description: [
      "Developed a tokenizer in Python, implementing the required regex and DFA for logical expressions, and storing tokens in a structured list.",
      "Built an LL(1) Parser with a GUI using Tkinter, handling recursive descent parsing, First/Follow table generation, and syntax analysis.",
      "Designed an interactive interface for parsing and visualizing the structure of logical expressions, enhancing usability and debugging."
    ],

    repo:"https://github.com/mahmoudelnashar/Design-of-Compilers-Project",
  },
  {
    title: "Sorting Algorithms Grapher",
    date: "Fall 2021",
    description: [
        "Developed a Python application with a Tkinter GUI to compare the efficiency of various sorting algorithms through execution time and step count analysis.",
        "Implemented multiple sorting algorithms including Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort, with support for handling negative numbers in Radix and Counting Sort.",
        "Integrated graphical plotting and CSV file handling, allowing users to visualize performance comparisons and generate test data dynamically."
    ],
    repo: "https://github.com/mahmoudelnashar/Data-Structure-Project-SortingAlgorithmsGrapher",
    documentation: "./assets/projects/SortingAlgo.pdf",
    technologies: [
      { name: " Python ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: " Tkinter ", icon: null } 
  ],
},

{
  title: "Minix3 & XV6 Modifying",
  date: "Fall 2021",
  technologies: [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" }
],
  description: [
      "Altered and built Minix3 to use different CPU scheduling algorithms as well as extents with different sizes.",
      "Altered and built XV6 to use a different paging structure as well as different page replacement algorithms."
  ],
  repo: "https://github.com/mahmoudelnashar/os-project"
},
{
  title: "FPGA Traffic Light System",
  date: "Fall 2021",
  technologies: [
    { name: " VHDL ", icon: null } 
],
  description: [
      "Designed and implemented three traffic light control systems using VHDL, incorporating pedestrian buttons and vehicle sensors for adaptive traffic management.",
      "Developed state machines and simulation testbenches to verify functionality, ensuring efficient and safe traffic flow at intersections."
  ],
  documentation: "./assets/projects/EDA.pdf"
},
{
  title: "Employee Management System",
  date: "Spring 2021",
  technologies: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: " JavaFX ", icon: null } 
],
  description: [
      "This is a Java-based Employee Management System with a JavaFX GUI, designed to manage employee information, performance tracking, financial records, and task scheduling within a company.",
      "Key features include user authentication, talent and financial management, employee information handling, vacation and promotion requests, and task organization, with role-based access for employees, HR, and managers."
  ],
  repo: "https://github.com/mahmoudelnashar/OOP-Project-EMS",
  documentation: "./assets/projects/Employee-Management-System.pdf"
},
{
  title: "VHDL ALU and Register File",
  date: "Spring 2021",
  technologies: [
    { name: " VHDL ", icon: null } 
],
  description: [
      "Developed an ALU unit and Register File."
  ],
  repo: null,
  documentation: null
}


  
    
      
          
          
        
    ];
    
    
  export default projectsData;
  