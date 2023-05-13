import React, { useState } from 'react';

interface Command {
  command: React.ReactNode;
  description: string;
}

interface LanguageCommands {
  language: string;
  commands: Command[];
}

interface TabBrowserProps {
  data: LanguageCommands[];
}


export const TabBrowser: React.FC<TabBrowserProps> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const selectTab = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <div className="flex px-4 bg-neutral-600 rounded-t-lg py-2 gap-x-2">
        {data.map(({ language }, index) => (
          <button
            key={index}
            onClick={() => selectTab(index)}
            className={`font-mono text-sm px-2 py-1 rounded text-white ${selectedTab === index ? 'bg-primary-600' : ''}`}
          >
            {language}
          </button>
        ))}
      </div>
      <div className="bg-neutral-800 rounded-b-lg p-4">
        {data[selectedTab].commands.map(({ command, description }, index) => (
          <div key={index} className="mb-2">
            <div className="font-mono text-sm text-gray-200">{command}</div>
            <div className="text-sm text-gray-600">{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};