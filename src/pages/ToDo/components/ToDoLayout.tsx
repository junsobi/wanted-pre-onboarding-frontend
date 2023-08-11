import React from 'react';
import GradientDot from '../../../components/GradientDot';

interface LayoutProps {
  children: React.ReactNode;
}

const TodoLayout: React.FC<LayoutProps> = ({ children }) => (
  <div className="h-screen w-auto flex items-center justify-center font-light bg-gray-100 text-gray-700">
    <section className="relative h-5/6 w-11/12 max-w-3xl p-4 shadow-2xl bg-white overflow-visible flex flex-col">
      <header className="relative flex-shrink-0 flex items-end justify-center gap-2 h-auto pb-4">
        <h1 className="text-5xl text-center font-bold">ToDo List</h1>
        <GradientDot size="3" />
      </header>

      <div className="overflow-auto flex-grow">{children}</div>

      <div className="absolute bottom-0 right-0 left-0 h-4 shadow-custom overflow-hidden" />
    </section>
  </div>
);

export default TodoLayout;
