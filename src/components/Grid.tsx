import React, { ReactNode } from 'react';

interface GridComponentProps {
  columns: number;
  children: ReactNode;
}

export const Grid: React.FC<GridComponentProps> = ({ columns, children }) => {
  // Determine column span based on the column prop
  const getColSpanClass = () => {
    switch(columns) {
      case 2:
        return 'md:col-span-6 col-span-12';
      case 3:
        return 'xl:col-span-4 md:col-span-6 col-span-12';
      case 4:
        return 'xl:col-span-3 md:col-span-6 col-span-12';
      default:
        return 'col-span-12';
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {React.Children.map(children, (child, i) => (
        <div key={i} className={getColSpanClass()}>
          {child}
        </div>
      ))}
    </div>
  );
};
