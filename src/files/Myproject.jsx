import Safari from "../components/ui/Safari";
import img24 from "../img/img24.jpg";
import img8 from "../img/img8.jpg";
import img16 from "../img/img16.jpg";
import Logorolodex from "../components/Logorolodex ";

function Myproject() {
  const project = [
    {
      imageSrc: img16,
      url: "her-digital-shield.com",
      title: "Her Digital Shield",
      des: "Her Digital is a powerful, user-centric platform dedicated to ensuring the safety and well-being of women in the digital space.",
      des2: "The website is designed with a strong focus on preventing cybercrime, empowering women to take control of their digital presence, and providing a safe, supportive environment to report and tackle online harassment, scams, and abuse.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL", "Spring Boot"],
    },
    {
      imageSrc: img24,
      url: "Institutemanagement.com",
      title: "Institute Management",
      des: "A community-driven platform for developers to share knowledge, resources, and collaborate on projects.",
      des2: "Features include real-time messaging, project sharing, and resource management.",
      tech: ["ReactJS", "Tailwind CSS","Aceternity UI" , "Mysql", "Spring Boot"  ],
    },
    {
      imageSrc: img8,
      url: "resume-ai.com",
      title: "Automated QR Generator and Attendance System",
      des: "A Java-based system that generates unique QR codes for attendance tracking.",
      des2: "The system sends these QR codes via email to participants, and users can scan the QR codes to mark their attendance, ensuring an automated and efficient attendance process.",
      tech: ["ReactJS", "Tailwind CSS" , "Mysql", "Spring Boot" ],
    },
  ];

  return (
    <div style={{ position: "relative", backgroundColor: "", color: "white", paddingBottom: "100px" }}>
      <div className="row">
        <div
          className="row-1"
          style={{
            display: "flex",
            position: "absolute",
            left: "350px",
            top: "0px",
            fontSize: "80px",
            fontWeight: "bold",
          }}
        >
          <h2>My Projects</h2>
        </div>
        <div style={{ position: "absolute", left: "1100px", top: "10px" }}>
          <Logorolodex />
        </div>
      </div>

      {project.map((sa, index) => (
        <div
          key={index}
          className="row"
          style={{
            position: "absolute",
            top: "300px",
            left: "20px",
            display: "flex",
            marginTop: index * 600 + "px",
          }}
        >
          {/* Image Section */}
          <div
            className="col-1"
            style={{
              height: "400px",
              width: "720px",
              border: "4px solid white",
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <div
              style={{
                height: "100%",
                transition: "transform 0.3s ease-in-out",
              }}
              className="hover:scale-105"
            >
              <Safari url={sa.url} imageSrc={sa.imageSrc} />
            </div>
          </div>

          {/* Details Section */}
          <div className="col-2">
            <h2
              style={{
                paddingLeft: "200px",
                paddingTop: "30px",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              {sa.title}
            </h2>
            <div
              style={{
                height: "160px",
                width: "700px",
                marginLeft: "50px",
                paddingTop: "10px",
              }}
            >
              <p>{sa.des} {sa.des2}</p>
            </div>

            {/* Tech Stack with Hover Effect */}
            <div style={{ paddingLeft: "200px" }}>
              {sa.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  style={{
                    marginLeft: "10px",
                    display: "inline-block",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.2)";
                    e.target.style.boxShadow = "0px 4px 10px rgba(255, 255, 255, 0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Myproject;
