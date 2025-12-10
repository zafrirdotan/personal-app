export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zafrir Dotan",
    url: "https://zafrir-dotan.vercel.app",
    image: "https://zafrir-dotan.vercel.app/profile.jpeg",
    jobTitle: "Senior Full-Stack and MLOps Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Priority-Mashov",
    },
    alumniOf: "MLOps Course Graduate",
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Angular",
      "Node.js",
      "Python",
      "MLOps",
      "Docker",
      "PostgreSQL",
      "AI Integration",
      "TypeScript",
      "FastAPI",
      "Airflow",
    ],
    sameAs: [
      "https://github.com/zafrirdotan",
      "https://linkedin.com/in/zafrir-dotan",
    ],
    email: "zafrir.dotan@gmail.com",
    telephone: "+972-54-351-6162",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
