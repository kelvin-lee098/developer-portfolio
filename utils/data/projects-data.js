import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "University ERP",
    description:
      "Me and my team built an ERP for University. We have developed app using React, Typescript, Go, AWS, and PostgreSql. Used LDAP for the authentication system.",
    tools: ["React", "PostgreSql", "Go", "EC2", "Nginx"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 3,
    name: "Hosptial On-duty Scheduling",
    description:
      "My team built an optimization application for hospital to scheduling on-duty and manage works, tasks, swap shift, ... . We used C++ to develop the core run algorithm. We utilized React, Mantine, Formik, Redux Toolkit, and other npm libraries for the UI and Firebase for notifications between devices includes mobile and web browser. We also develop mobile app via React Native, support both Android and iOS devices.",
    tools: [
      "React",
      "Redux",
      "Mantine",
      "React Native",
      "TypeScript",
      "Go",
      "NodeJS",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Hydroelectric Plant on-duty scheduling",
    description:
      "My team and I developed a On-duty scheduling software for Lai Chau hydroelectric plant. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: [".NET", "MSSQL", "React Native", "Redux", "Firebase"],
    code: "",
    demo: "",
    image: ayla,
    role: "Front-end Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
