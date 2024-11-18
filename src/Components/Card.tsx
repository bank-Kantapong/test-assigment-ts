export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-6 bg-white rounded-2xl shadow-card-shadow">
      {children}
    </div>
  );
};
