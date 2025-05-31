import NavigationBar from "@/components/NavigationBar";
import PartialDivider from "@/components/PartialDivider";

export default async function ProtectedPage() {


  return (<>
  <NavigationBar/>
  <div id="main">
  <h1>Frequently Asked Questions</h1>
  <PartialDivider/>
  <h2 className="mb-5">How does the club work? What does each club subteam do?</h2>
  <div className="mb-70px text-lg">
    <p>
      RAREserved is made up of three main subteams that collaborate to raise awareness for rare diseases: 
    </p>
    <br/>
    <p className="font-extrabold">Communications</p>
    <ul className="list-disc list-outside mx-4">
      <li><div className="italic inline">Outreach</div> - Connects RAREserved with other campus groups, departments, and the Student Activities Office (SAO) to foster collaboration and expand outreach.</li>
      <li><div className="italic inline">Event Coordination </div>- Organizes club meetings, fundraisers, and other events that engage the broader community.</li>
    </ul>
    <br/>
    <p className="font-extrabold">Journalism</p>
    <ul className="list-disc list-outside mx-4">
      <li><div className="italic inline">Writing</div> - Works on the writing and editing of our articles, ensuring all content on rare diseases is clear, compelling, and accurate.</li>
      <li><div className="italic inline">Research</div> - Conducts thorough research to support the journalism team's content with reliable, in-depth information.</li>
      <li><div className="italic inline">Interviewing</div> - Reaches out to individuals for interviews, prepares scripts, and helps shape the personal stories that we share.</li>
    </ul>
    <br/>
    <p className="font-extrabold">Design & Development</p>
    <ul className="list-disc list-outside mx-4">
      <li><div className="italic inline">Graphic Design</div> - Creates visuals for social media, collaborates with web dev, and helps shape the club’s public image.</li>
      <li><div className="italic inline">Web Development</div> - Manages the RAREserved website, ensuring it's up-to-date, functional, and informative. Managed by Team Bill from the Husky Coding Club.</li>
    </ul>
  </div>

  <h2 className="mb-5">Why the name "RAREserved"?</h2>
  <p className="mb-70px">“RARE” highlights our focus on rare diseases, and “served” reflects our mission to serve underrepresented voices in health care. Together, “RAREserved” is a play on the word reserved, symbolizing our effort to tell the often reserved and untold stories of those living with a rare disease.</p>
  
  <h2 className="mb-5">When and where does the club meet? How can I stay updated?</h2>
  <p className="mb-70px">As of Spring Quarter '25, we meet weekly on Sundays at 5-6pm at Ode Meeting Rooms!
  Meeting times and locations may vary based on everyone’s schedule, but all updates are posted on our Discord.
    <br/> <a href="https://discord.gg/3UeDt8zFQ7" className="text-[#175D85] underline">RAREServed Discord Server</a>
  <br/> <br/>
  Everyone is welcome to join, and no prior writing or journalism experience is required. You’re always welcome to stop by any of our meetings. There’s no expectation to have joined from the beginning of the quarter!
  </p>

  <h2 className="mb-5">What does a typical meeting look like?</h2>
  <p className="mb-70px">A typical meeting will focus on the collaboration between all subteams. Generally, our writing process begins with learning about a new rare disease. We then contact local or global advocates to see if they want to share their personal experiences living with a rare disease. From there, the Interviewing team will write personalized questions for the interviewee and conduct a live interview in a podcasting room. The Writing and Research team will then review the interview and collaborate to write an article containing their unique experiences and informational awareness about the disease, backed by primary literature. Design and Development focuses on social media and website development.</p>

  <h2 className="mb-5">Does the club provide any academic or career support?</h2>
  <p className="mb-70px">RAREserved helps build real-world research, writing, interviewing, design, and project management skills, which are great for resumes and pre-health pathways!</p>
  
  <h2 className="mb-5">Can I suggest ideas for events or activities?</h2>
  <p className="mb-70px">Absolutely! We welcome suggestions and love hearing new ideas from members. Bring them up in meetings, share them with us here, or learn more about our weekly meetings by visiting our Meeting Notes! 
    <br/><a href="https://linktr.ee/rareserved" className="text-[#175D85] underline"> RAREserved resources! </a></p>
  </div>
  </>);
}
