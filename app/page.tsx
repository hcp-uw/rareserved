import DeployButton from "../components/tutorial/DeployButton";
import AuthButton from "../components/tutorial/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/tutorial/Header";
import NavigationBar from "@/components/NavigationBar";
import TEMPLOGO from '@/images/TEMPLOGO.png';
import FullDivider from "@/components/FullDivider";
import Footer from "@/components/Footer";
import { getEvents } from "@/utils/supabase/load-data";



export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  getEvents().then((value) => {
    console.log(value)
    console.log(typeof(value))
  });

  return (
    <>
      <NavigationBar/>
      <div className="w-fit" style = {{backgroundImage: TEMPLOGO.src }}> test</div>
      <div id="main">
        <h1>RAREserved seeks to amplify voices and make knowledge about rare diseases accessible and engaging</h1>
        <p className="">Over 7000 rare diseases impact people worldwide and have insufficient research and treatment available due to how infrequently these conditions occur. Historically, research has placed time and resources into topics that have profit, repeatedly underrepresenting rare diseases. For rare disease patients, they often do not receive a diagnosis for their disease, let alone be supported by treatment that makes a difference. RAREserved seeks to amplify voices to make knowledge about rare diseases accessible and engaging by telling real stories of those impacted by a rare disease. RAREserved conducts interviews and creates a narrative article that shares an individual's experience. We seek to educate our audience on rare disease topics and advocate for change and awareness of rare diseases as a marginalized community in healthcare. RAREserved recognizes the importance of diversity, equity, and inclusion in healthcare and research. Our mission is to raise awareness and knowledge for the pursuit of better change.</p>
      </div>
      <FullDivider/>
      <Footer/>
    </>
  );
}
