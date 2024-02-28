import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex  w-full rounded-lg ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
