import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Bio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Senior Full Stack Developer with 9 years of frontend experience
              (Angular, React) and 4 years of backend development (Node.js,
              Java, .NET, Python). Experienced with Docker and various databases
              (PostgreSQL, MongoDB). Graduate of an MLOps course, passionate
              about building scalable, end-to-end, AI-driven applications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills & Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  Frontend Development
                </h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• React, Next.js, Angular</li>
                  <li>• TypeScript & JavaScript</li>
                  <li>• Tailwind CSS, UI libraries, component design</li>
                  <li>• Pixel-perfect implementation from Figma</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">Backend & APIs</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Node.js, Express, FastAPI, Flask</li>
                  <li>• REST API design & authentication flows</li>
                  <li>• Microservices, event-driven patterns, API gateways</li>
                  <li>• Caching layers, idempotency logic</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  Databases & Storage
                </h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• PostgreSQL, MongoDB</li>
                  <li>• Redis for caching & pub/sub</li>
                  <li>• MinIO / S3 object storage</li>
                  <li>• Schema design, indexing & performance optimization</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">DevOps & Cloud</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• Docker & Docker Compose</li>
                  <li>• GitHub Actions (CI/CD), testing workflows</li>
                  <li>• AWS basics: Lambda, RDS, EC2, S3, CloudWatch</li>
                  <li>
                    • Logging & monitoring with Filebeat, Elasticsearch & Kibana
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  MLOps & Data Engineering
                </h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• End-to-end ETL pipelines (Airflow 3.1)</li>
                  <li>• LLM-powered code generation & guardrails</li>
                  <li>• DataOps orchestration, artifact management</li>
                  <li>• Pipeline validation, observability</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-lg">
                  Additional Strengths
                </h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• System architecture thinking</li>
                  <li>• Strong collaboration with product & design</li>
                  <li>• Mentoring & technical leadership</li>
                  <li>• Building templates & starter kits</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
