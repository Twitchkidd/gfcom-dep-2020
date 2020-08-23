import { usePanelState } from "@bumaga/tabs";
import { Running, Coding, Coffee, Dog } from "./"

const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? children : null;
};

export const TabLinks = () => (
  <div>
    <Panel>
      <Running />
    </Panel>
    <Panel>
      <Coding data={data} />
    </Panel>
    <Panel>
      <Coffee />
    </Panel>
    <Panel>
      <Dog />
    </Panel>
  </div>
)