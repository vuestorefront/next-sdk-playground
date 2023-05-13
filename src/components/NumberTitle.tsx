interface NumberTitleProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export const NumberTitle = ({ number, title, children }: NumberTitleProps) => (
  <article className="flex flex-col items-center gap-8">
  <div className="flex relative items-center">
    <div
      className="mr-4 "
    >
      <p
        className="flex items-center relative justify-center w-6 h-6 text-xs rounded-md bg-gray-200 dark:bg-neutral-800 font-bold border !border-primary-500"
      >
        {number}
      </p>
    </div>
    <div className="prose dark:prose-invert">
      {title}
    </div>
    </div>
    
      {children}
    </article>
)