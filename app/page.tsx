import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { createElement } from "react";

export default async function Index() {

  const supabase = createClient();

  
/*let { data: Test, error } = await supabase
.from('Test')
.select('test_col')*/

const { data, error } = await supabase
  .from('Test')
  .select('*')
        

  console.log('HERE COMES THE DATA DOO DOO DOO DOO-------------------------------------------------------------');
  console.log(data);
  console.log(error)
  // let toDisplay = Test;d



  return (
    <p>{'Hi'}</p>
  );
}
