import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className = "experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "2012 - 2014" 
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
              Al-Waleed bin Abdulmalik High school, Yanbu, Saudi Arabia
            </h3>
            <p>
              General Secondary Education Diploma Bachelor in general science
              Results: 94.44%
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "2015 - 2020" 
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon = {<SchoolIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
              SEGi University and College, Kota Damansara, Selangor
            </h3>
            <p>
              Bachelor in Information Technology, Software Engineering, Average: GPA: 2.94. 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Jan 2019 - Mar 2020" 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            Internship (SEGI - EVE)
            </h3>
            <p>
            	Counselling and handling of new students (Show them around university, convince them of choosing SEGi as their next educational destination) also Designed UI/UX for a mobile application 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Jan 2021 - Dec 2022" 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            M-Service | Russia, Dubna | Sales – Engineering/ Technical/IT
            </h3>
            <p>
            Cashier and one-man shop manager, Computer hardware and software consultant, Diagnosed and repaired computer/mobile devices, Managed component deliveries.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Jan 2023 - Dec 2023 " 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            Freelance (SMS-Man - signature living)
            </h3>
            <p>
            Multilingual Technical Support & Customer Host,
            SEO Specialist,
            Localization & Translation Specialist,
            Sales & Marketing Specialist,
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Jan 2024 - Jul 2024 " 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            DNS		Store Manager
            </h3>
            <p>
            Enhanced service, optimized inventory, boosted sales, maintained cleanliness, resolved issues quickly, improved teamwork, automated processes with 1C.
            </p>
          </VerticalTimelineElement>
    
          <VerticalTimelineElement 
          className = "vertical-timeline-element--education" 
          date = "Aug  2024 - Preasnt " 
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon = {<WorkIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            Hmel and Solod, IT Specialist | Tech support
            </h3>
            <p>
            PCs & laptops (hardware repair/replacement), Monitors, printers, scanners (setup, repair, maintenance), Cash registers (ATOL/KKT setup), barcode scannerNetworking (routers, IP, VPN, servers, surveillance cameras), Sber terminals (basic Putty setup), Linux, VMware, remote support (Okdesk)
            </p>
          </VerticalTimelineElement>

         </VerticalTimeline>
    </div>
  )
}

export default Experience
