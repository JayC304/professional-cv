import Image from "next/image"
import { Mail, Phone, Calendar, Briefcase, GraduationCap, Code, Languages } from "lucide-react"

export default function CV() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-10 max-w-5xl mx-auto relative">
      {/* CV Container */}
      <div id="cv-container">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row items-center gap-6">
          {/* Avatar - moved to left */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg relative">
              <Image
                src="/tien-anh-4x6.jpg"
                alt="Tran Tien Anh"
                fill
                className="object-cover"
                style={{
                  objectPosition: 'center 30%',
                }}
                priority
              />
            </div>
          </div>

          {/* Name and contact info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">TRAN TIEN ANH</h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mt-2">Quality Assurance Engineer (Manual & Automation)</h2>

            <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center text-gray-700">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span>0333900298</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                <span>ttanh30dh@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                <span>April 30, 1998</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1 space-y-8">
            {/* Technical Skills */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Code className="h-5 w-5 mr-2 text-gray-600" />
                Technical Skills
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-medium">Automation Frameworks:</span> Playwright, Cypress, Selenium
                </div>
                <div>
                  <span className="font-medium">Programming Languages:</span> Java, JavaScript, TypeScript
                </div>
                <div>
                  <span className="font-medium">API Testing:</span> Postman
                </div>
                <div>
                  <span className="font-medium">Databases:</span> PostgreSQL, SQL Server, MongoDB
                </div>
                <div>
                  <span className="font-medium">Messaging & Caching:</span> Kafka, Redis
                </div>
                <div>
                  <span className="font-medium">Project Management:</span> Jira
                </div>
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Languages className="h-5 w-5 mr-2 text-gray-600" />
                Languages
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-medium">English:</span> TOEIC 700 (May 2020)
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-gray-600" />
                Education & Certifications
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="font-medium">Bachelor of Engineering</div>
                  <div className="text-sm">
                    University of Engineering and Technology – Vietnam National University, Hanoi
                  </div>
                  <div className="text-sm">Faculty of Engineering Physics and Nanotechnology</div>
                  <div className="text-sm text-gray-600">September 2016 - June 2020</div>
                </div>
                <div>
                  <div className="font-medium">Certificate in Manual Testing</div>
                  <div className="text-sm">TesterTop Center</div>
                  <div className="text-sm text-gray-600">October 2020 - January 2021</div>
                </div>
                <div>
                  <div className="font-medium">Certificate in Automation Testing</div>
                  <div className="text-sm">FPT Software Academy</div>
                  <div className="text-sm text-gray-600">March 2021 - July 2021</div>
                </div>
              </div>
            </section>


          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Work Experience */}
            {/* Summary */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-gray-600" />
                Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Quality Assurance Engineer with 5+ years of experience in manual and automation testing across Fintech/Trading, ERP, and Financial Management systems. Strong expertise in API testing, UI automation, and database validation. Experienced in testing complex business logic, high-risk financial workflows, and building automation frameworks that significantly reduce regression testing time and improve release confidence.
              </p>
            </section>

            {/* Work Experience */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-gray-600" />
                Work Experience
              </h3>
              <div className="space-y-8">
                {/* Merchize JSC */}
                <div className="border-l-2 border-gray-300 pl-4 py-1">
                  <div className="font-medium text-gray-800">Quality Assurance Engineer</div>
                  <div className="text-gray-700">Merchize JSC</div>
                  <div className="text-sm text-gray-500">Jun 2024 – Present</div>

                  <div className="mt-4 space-y-6">
                    {/* HellaPrint */}
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Project: HellaPrint (Print-on-Demand Platform) | Team size: 40</div>
                      <ul className="list-disc list-inside mt-2 text-sm text-gray-700 ml-2 space-y-1">
                        <li>Tested end-to-end order lifecycle from order creation → production → shipping.</li>
                        <li>Verified product customization logic including size, color, print area, and mockup preview.</li>
                        <li>Tested order status transitions and synchronization between production and fulfillment systems.</li>
                        <li>Performed API testing for order, product, payment, and shipping integrations.</li>
                        <li>Validated order, inventory, and shipment data using database queries.</li>
                        <li>Conducted regression testing before major releases and peak sales campaigns.</li>
                        <li>Tested bulk order processing, payment flows, and webhook/async order status updates.</li>
                        <li>Built and maintained UI automation framework using Playwright.</li>
                      </ul>
                      <div className="mt-2 text-sm">
                        <span className="font-semibold text-gray-700">Tools:</span>
                        <span className="text-gray-600"> Playwright, Postman, Redis, MongoDB, Jira</span>
                      </div>
                    </div>

                    {/* Warehouse Management */}
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Project: Warehouse Management (ERP) | Team size: 8</div>
                      <ul className="list-disc list-inside mt-2 text-sm text-gray-700 ml-2 space-y-1">
                        <li>Designed and executed test cases for inventory management, stock in/out, and warehouse workflows.</li>
                        <li>Verified inventory quantity calculations across multiple production stages.</li>
                        <li>Tested role-based access control for warehouse and production users.</li>
                        <li>Performed API testing for warehouse, product, and inventory services.</li>
                        <li>Ensured data consistency across UI, API, and database.</li>
                        <li>Executed regression testing for new features and system upgrades.</li>
                      </ul>
                      <div className="mt-2 text-sm">
                        <span className="font-semibold text-gray-700">Tools:</span>
                        <span className="text-gray-600"> Postman, PostgreSQL, Jira</span>
                      </div>
                    </div>

                    {/* Dex3.ai */}
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Project: Dex3.ai (DEX Trading Platform) | Team size: 20</div>
                      <ul className="list-disc list-inside mt-2 text-sm text-gray-700 ml-2 space-y-1">
                        <li>Designed and executed 300+ manual test cases for core trading features: spot trading, copy trading, deep signals, and pump-to-moon.</li>
                        <li>Tested complex trading scenarios including order matching, partial fills, price slippage, and abnormal market conditions.</li>
                        <li>Built UI automation using Playwright for critical user flows, reducing regression testing time by ~70%.</li>
                        <li>Created and maintained API test collections in Postman to verify integration stability.</li>
                        <li>Validated backend data consistency using SQL queries.</li>
                        <li>Collaborated closely with developers and product teams to analyze defects and improve overall product quality.</li>
                      </ul>
                      <div className="mt-2 text-sm">
                        <span className="font-semibold text-gray-700">Tools:</span>
                        <span className="text-gray-600"> Playwright, Postman, Redis, Kafka, PostgreSQL, Jira</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IMIP */}
                <div className="border-l-2 border-gray-300 pl-4 py-1">
                  <div className="font-medium text-gray-800">Quality Assurance Engineer</div>
                  <div className="text-gray-700">IMIP Technology and Solution Consultancy JSC</div>
                  <div className="text-sm text-gray-500">Jan 2021 – May 2024</div>

                  <div className="mt-4 space-y-6">
                    {/* Restaurant365 */}
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Project: Restaurant365 (ERP System) | Team size: 25</div>
                      <ul className="list-disc list-inside mt-2 text-sm text-gray-700 ml-2 space-y-1">
                        <li>Designed and executed manual test cases for accounting, inventory, purchasing, and reporting modules.</li>
                        <li>Maintained and extended automation scripts for newly released features using Cypress.</li>
                        <li>Performed API testing and database validation to ensure data accuracy across services.</li>
                        <li>Actively participated in regression testing for major releases.</li>
                      </ul>
                      <div className="mt-2 text-sm">
                        <span className="font-semibold text-gray-700">Tools:</span>
                        <span className="text-gray-600"> Cypress, Postman, PostgreSQL, Jira</span>
                      </div>
                    </div>

                    {/* BQE CORE */}
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Project: BQE CORE (Financial Management System) | Team size: 20</div>
                      <ul className="list-disc list-inside mt-2 text-sm text-gray-700 ml-2 space-y-1">
                        <li>Executed functional and regression testing for billing, invoicing, and expense management modules.</li>
                        <li>Maintained and enhanced Selenium automation scripts for existing and new features.</li>
                        <li>Worked closely with developers to verify bug fixes and prevent regressions.</li>
                      </ul>
                      <div className="mt-2 text-sm">
                        <span className="font-semibold text-gray-700">Tools:</span>
                        <span className="text-gray-600"> Selenium, Postman, SQL Server, Jira</span>
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
