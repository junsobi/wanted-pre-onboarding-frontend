import React from 'react';

type Props = {
  onToggle: () => void;
};

const UserIconButton: React.FC<Props> = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="text-xl relative z-10">
      👤
    </button>
  );
};

export default UserIconButton;
