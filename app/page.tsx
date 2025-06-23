import { Mail, Phone, Calendar, Briefcase, GraduationCap, Code, Languages } from "lucide-react"
import PrintButton from "@/components/print-button"

export default function CV() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-white min-h-screen p-6 md:p-10 max-w-5xl mx-auto relative">
      {/* Print Button */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10">
        <PrintButton />
      </div>

      {/* CV Container */}
      <div id="cv-container">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row items-center gap-6">
          {/* Avatar - moved to left */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-300 shadow-lg shadow-cyan-100">
              <img
                src="/TIEN ANH 4x6.jpg"
                alt="Tran Tien Anh"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center 30%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Name and contact info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-800">TRAN TIEN ANH</h1>
            <h2 className="text-xl md:text-2xl font-medium text-cyan-600 mt-2">Quality Assurance Engineer</h2>

            <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center text-gray-700">
                <Phone className="h-4 w-4 mr-2 text-cyan-600" />
                <span>+84 333900298</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-cyan-600" />
                <span>ttanh30dh@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="h-4 w-4 mr-2 text-cyan-600" />
                <span>April 30, 1998</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1 space-y-8">
            {/* Technical Skills */}
            <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-400 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-cyan-700 mb-4 flex items-center">
                <Code className="h-5 w-5 mr-2 text-cyan-500" />
                Technical Skills
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-medium">Database Management:</span> SQL Server, PostgreSQL
                </div>
                <div>
                  <span className="font-medium">API Testing:</span> Postman
                </div>
                <div>
                  <span className="font-medium">Automation Tools:</span> Selenium, Cypress, Playwright
                </div>
                <div>
                  <span className="font-medium">Testing Frameworks:</span> TestNG, NUnit, Cucumber
                </div>
                <div>
                  <span className="font-medium">Development Environments:</span> IntelliJ IDEA, Visual Studio Code
                </div>
                <div>
                  <span className="font-medium">Programming Languages:</span> Java, JavaScript, TypeScript, C#
                </div>
                <div>
                  <span className="font-medium">Version Control Systems:</span> Git, GitLab
                </div>
                <div>
                  <span className="font-medium">Project Management Tools:</span> Jira, Azure DevOps
                </div>
                <div>
                  <span className="font-medium">Additional Tools:</span> Redis, Kafka
                </div>
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-400 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-cyan-700 mb-4 flex items-center">
                <Languages className="h-5 w-5 mr-2 text-cyan-500" />
                Languages
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-medium">English:</span> TOEIC 700 (May 2020)
                </div>
                <div>
                  <span className="font-medium">Chinese:</span> HSK Level 3
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-400 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-cyan-700 mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-cyan-500" />
                Education & Certifications
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="font-medium">Bachelor of Engineering</div>
                  <div className="text-sm">
                    University of Engineering and Technology – Vietnam National University, Hanoi
                  </div>
                  <div className="text-sm">Faculty of Engineering Physics and Nanotechnology</div>
                  <div className="text-sm text-cyan-600">September 2016 - June 2020</div>
                </div>
                <div>
                  <div className="font-medium">Certificate in Manual Testing</div>
                  <div className="text-sm">TesterTop Center</div>
                  <div className="text-sm text-cyan-600">October 2020 - January 2021</div>
                </div>
                <div>
                  <div className="font-medium">Certificate in Automation Testing</div>
                  <div className="text-sm">FPT Software Academy</div>
                  <div className="text-sm text-cyan-600">March 2021 - July 2021</div>
                </div>
              </div>
            </section>


          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Work Experience */}
            <section className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-400 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-cyan-700 mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-orange-500" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {/* Current Job */}
                <div className="border-l-2 border-cyan-300 pl-4 py-1">
                  <div className="font-medium text-cyan-800">Quality Assurance Engineer</div>
                  <div className="text-cyan-600">Merchize JSC</div>
                  <div className="text-sm text-gray-500">June 2024 - Present</div>

                  <div className="mt-3">
                    <div className="font-medium text-gray-700">Project: Dex3.ai (DEX Platform) — Team size: 20</div>
                    <ul className="list-disc list-inside mt-2 text-gray-700 ml-2 space-y-1">
                      <li>
                        Designed and executed test cases for key trading platform features: trading, copy trade, deep signal, and pump-to-moon.
                      </li>
                      <li>Performed testing for complex trading scenarios to ensure functionality and reliability.</li>
                      <li>Created API test flows in Postman to ensure the system worked smoothly after integration.</li>
                      <li>Implemented UI automation with Playwright to reduce regression time.</li>
                      <li>Checked databases with SQL queries to ensure backend data was accurate and consistent.</li>
                    </ul>
                    <div className="mt-2">
                      <span className="font-medium text-cyan-700">Tools Used:</span>
                      <span className="text-gray-700"> Redis, Kafka, Jira, MariaDB, Visual Studio Code, Postman</span>
                    </div>
                  </div>
                </div>

                {/* Previous Job */}
                <div className="border-l-2 border-cyan-300 pl-4 py-1">
                  <div className="font-medium text-cyan-800">Quality Assurance Engineer</div>
                  <div className="text-cyan-600">IMIP Technology and Solution Consultancy JSC</div>
                  <div className="text-sm text-gray-500">January 2021 - May 2024</div>

                  <div className="mt-3 space-y-4">
                    {/* Restaurant365 Project */}
                    <div>
                      <div className="font-medium text-cyan-700">Restaurant365 (ERP System) — Team size: 25</div>
                      <ul className="list-disc list-inside mt-1 text-gray-700 ml-2 space-y-1">
                        <li>
                          Designed and executed manual test cases for accounting, inventory, purchasing, and reporting modules.
                        </li>
                        <li>
                          Maintained and extended automation scripts for newly released features.
                        </li>
                        <li>
                          Tested APIs and checked database data to ensure system worked correctly.
                        </li>
                      </ul>
                      <div className="mt-1">
                        <span className="text-sm font-medium text-cyan-700">Tools Used:</span>
                        <span className="text-sm text-gray-700"> Postman, PostgreSQL, Cypress, Jira</span>
                      </div>
                    </div>

                    {/* BQE CORE Project */}
                    <div>
                      <div className="font-medium text-cyan-700">BQE CORE (Financial Management) — Team size: 20</div>
                      <ul className="list-disc list-inside mt-1 text-gray-700 ml-2 space-y-1">
                        <li>
                          Executed functional and regression tests for billing, invoicing, and expense modules.
                        </li>
                        <li>
                          Collaborated with developers for bug tracking and resolution.
                        </li>
                        <li>
                          Maintained and developed Selenium automation scripts for both existing and newly added features.
                        </li>
                      </ul>
                      <div className="mt-1">
                        <span className="text-sm font-medium text-cyan-700">Tools Used:</span>
                        <span className="text-sm text-gray-700"> Postman, SQL Server, Selenium, Jira</span>
                      </div>
                    </div>

                    {/* Threat Response Platform Project */}
                    <div>
                      <div className="font-medium text-cyan-700">Threat Response Platform (Cybersecurity – SIEM) — Team size: 30</div>
                      <ul className="list-disc list-inside mt-1 text-gray-700 ml-2 space-y-1">
                        <li>
                          Performed comprehensive testing of event monitoring, threat analysis, and integrations.
                        </li>
                        <li>
                          Reported security vulnerabilities with detailed documentation.
                        </li>
                      </ul>
                      <div className="mt-1">
                        <span className="text-sm font-medium text-cyan-700">Tools Used:</span>
                        <span className="text-sm text-gray-700"> Postman, Kafka, PostgreSQL, Azure DevOps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </div>
    </div>
  )
}
