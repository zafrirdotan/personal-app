import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Priority-Mashov via MisterBit",
      period: "2025",
      description:
        "Contributed to building a school timetable management system for the Israeli Ministry of Education. Integrated real-time notifications using SignalR to inform users about ongoing changes in the timetable in real time.",
      technologies: "Angular 19, .NET, SignalR",
    },
    {
      title: "IDF Reserve Duty",
      company: "",
      period: "2023 - 2024",
      description: "Extended military reserve service as part of the war.",
      technologies: "",
    },
    {
      title: "Fullstack Developer",
      company: "Solidus Labs",
      period: "2021 - 2023",
      description:
        "Contributed to a high-performance crypto trade surveillance platform as part of an Agile team. Led the development of key features including authentication, advanced market surveillance, advanced search functionality and more. Integrated complex third-party tools like ChartIQ for real-time data visualization and Zendesk for streamlined support workflows.",
      technologies: "Angular 16, Spring Boot",
    },
    {
      title: "Fullstack Developer",
      company: "Honeywell",
      period: "2019 - 2021",
      description:
        "Contributed to the development of a cybersecurity platform as part of a cross-functional Scrum team. Acted as both Scrum Master and frontend lead, ensuring timely delivery while maintaining high UI/UX standards. Specialized in building responsive, scalable interfaces and integrating backend services.",
      technologies: "React, MobX, Express",
    },
    {
      title: "Frontend Developer",
      company: "Cal",
      period: "2018",
      description:
        "Contributed to the development and maintenance of CAL's core client management system.",
      technologies: "Angular",
    },
    {
      title: "Frontend Developer",
      company: "Taptica via MisterBit",
      period: "2017",
      description:
        "Contributed to the development of a web-based management tool for social advertising campaigns.",
      technologies: "Angular",
    },
    {
      title: "Fullstack Developer",
      company: "Recomundo",
      period: "2016 - 2017",
      description:
        "Co-founded a social recommendation platform focused on group-based decision-making. Took part in product design and full stack development, working on both the user interface and backend logic.",
      technologies: "Angular, Node.js, MongoDB",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    {exp.company && (
                      <p className="text-lg font-medium text-muted-foreground mt-1">
                        {exp.company}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground md:text-right whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{exp.description}</p>
                {exp.technologies && (
                  <p className="text-sm font-medium">
                    <span className="text-foreground">Technologies:</span>{" "}
                    <span className="text-muted-foreground">
                      {exp.technologies}
                    </span>
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
