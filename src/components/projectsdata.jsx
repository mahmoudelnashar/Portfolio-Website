const projectsData = [
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
            links: [
                { text: "Project Document", url: "https://github.com/mahmoudelnashar/Multi-modal-Emotion-Recognition", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/External_link_font_awesome.svg" },
                { text: "Repo", url: "./assets/projects/graduation2.pdf", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/External_link_font_awesome.svg" }
            ]
        },
        {
            title: "Parallel Low/High Pass Filter",
            date: "Spring 2024",
            technologies: ["C++", "Qt", "OpenCV", "OpenMP", "MPI"],
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
            technologies: ["Python", "PyQt"],
            description : [
              "Developed a secure communication suite with GUI between a client and server.",
              "Implemented key management for secure encryption and decryption.",
              "Integrated hashing techniques for data integrity and security.",
              "Designed an authentication mechanism to verify user identities.",
              "Implemented ciphering methods to protect data during transmission."
            ],
            document: "./assets/projects/Security.pdf"
          },
          {
            title: "NLP Next Word Predictor",
            date: "Spring 2024",
            technologies: ["Python", "Jupyter", "TensorFlow"],
            description: [
              "Built a machine learning application to predict the next word in a text sequence using CNNs, LSTMs, and GRUs."
            ]
          }
          
          
        
    ];
    
    
  export default projectsData;
  