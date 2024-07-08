export function PageHeader({ title }) {
  return (
    <div className="text-center">
      <h1 className="text-5xl md:text-7xl text-white font-bold -skew-x-3">
        {title}
      </h1>
    </div>
  );
}
