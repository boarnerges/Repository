import AiAutomation from "../ai-automation/AiAutomation";
import Process from "../process/Process";
import "./capabilities.css";

const Capabilities = ({ withHeader = false }) => {
  return (
    <div className="capabilities-page">
      <AiAutomation withHeader={withHeader} />
      <div className="capabilities-divider container">
        <div className="divider-line"></div>
      </div>
      <Process withHeader={withHeader} />
    </div>
  );
};

export default Capabilities;
